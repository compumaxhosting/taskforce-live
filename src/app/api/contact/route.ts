// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend, type CreateEmailResponse } from "resend";

export const runtime = "nodejs"; // Resend SDK prefers Node runtime

const ConnectionTypeEnum = z.enum(["supplier", "hr", "subcontractor"]);

const BaseSchema = z.object({
  formType: z.enum(["message", "partner"]),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Provide a valid email"),
  subject: z.string().max(120).optional().or(z.literal("")),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || /^[0-9+()\-\s]{7,20}$/.test(v), "Phone looks invalid"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message is too long"),
  connectionType: ConnectionTypeEnum.optional(),
});

const Schema = BaseSchema.superRefine((data, ctx) => {
  if (data.formType === "partner" && !data.connectionType) {
    ctx.addIssue({
      path: ["connectionType"],
      code: z.ZodIssueCode.custom,
      message: "Connection type is required for Partner submissions",
    });
  }
});

function renderHtmlEmail(d: z.infer<typeof Schema>) {
  const rows: Array<[string, string | undefined]> = [
    [
      "Form Type",
      d.formType === "message" ? "Contact Message" : "Partner With Us",
    ],
    ["Name", d.name],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Subject", d.subject],
    ["Connection Type", d.connectionType],
    ["Message", d.message],
  ];

  const safe = (s?: string) =>
    (s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const tr = rows
    .filter(([, v]) => v !== undefined && v !== "")
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:8px 12px;background:#f7f7f7;font-weight:600">${safe(
          k
        )}</td>
        <td style="padding:8px 12px">${safe(v)}</td>
      </tr>`
    )
    .join("");

  return `
  <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
    <h2 style="margin:0 0 12px;color:#c18832">New ${
      d.formType === "message" ? "Contact Message" : "Partner Submission"
    }</h2>
    <table style="border-collapse:collapse;border:1px solid #e5e5e5;width:100%">${tr}</table>
    <p style="font-size:12px;color:#666;margin-top:16px">Sent via Task Force Interiors website.</p>
  </div>`;
}

function renderTextEmail(d: z.infer<typeof Schema>) {
  const lines: Array<[string, string | undefined]> = [
    ["Form Type", d.formType],
    ["Name", d.name],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Subject", d.subject],
    ["Connection Type", d.connectionType],
    ["Message", d.message],
  ];
  return lines
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

/* ---------- helpers ---------- */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const safeReplyTo = (addr: string) =>
  emailRegex.test(addr) ? addr : undefined;

function parseRecipients(raw: string | undefined): string[] {
  if (!raw) return [];
  const uniq = new Set(
    raw
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0 && emailRegex.test(s))
  );
  return Array.from(uniq);
}

export async function POST(req: Request) {
  try {
    // 1) Content-Type guard
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 415 }
      );
    }

    // 2) Validate payload
    const raw = await req.json();
    const parsed = Schema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path.join(".") || "form";
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return NextResponse.json(
        { error: "Validation failed", fieldErrors },
        { status: 422 }
      );
    }
    const data = parsed.data;

    // 3) Environment sanity
    const FROM = process.env.FROM_EMAIL; // e.g. no-reply@mail.taskforceinteriors.com  (must be on verified domain)
    const TO = process.env.TO_EMAIL; // comma separated
    const KEY = process.env.RESEND_API_KEY;

    // debug log
    console.log("CONTACT_ENV", {
      FROM,
      TO,
      KEY_PRESENT: Boolean(KEY),
      RUNTIME: process.env.VERCEL ? "vercel" : "local",
    });

    if (!FROM || !TO || !KEY) {
      return NextResponse.json(
        { error: "Email service not configured on server" },
        { status: 500 }
      );
    }

    // ⚠️ instantiate Resend *after* env check so builds don't blow up
    const resend = new Resend(KEY);

    // 4) Compose email
    const subject =
      data.formType === "message"
        ? `New message from ${data.name}${
            data.subject ? ` — ${data.subject}` : ""
          }`
        : `Partner inquiry: ${data.connectionType?.toUpperCase()} — ${
            data.name
          }`;

    const html = renderHtmlEmail(data);
    const text = renderTextEmail(data);

    // 5) Recipients (supports 4+ emails)
    const toRecipients = parseRecipients(TO);
    if (toRecipients.length === 0) {
      return NextResponse.json(
        { error: "No valid recipients configured" },
        { status: 500 }
      );
    }

    // 6) Send to your internal recipients
    let sendResult: CreateEmailResponse;
    try {
      sendResult = await resend.emails.send({
        from: FROM, // MUST be your verified domain
        to: toRecipients, // ["a@x.com","b@y.com","..."]
        replyTo: safeReplyTo(data.email),
        subject,
        html,
        text,
      });
    } catch (sdkErr) {
      console.error("RESEND_SDK_THROWN", sdkErr);
      return NextResponse.json(
        { error: "Email service error (SDK threw)" },
        { status: 502 }
      );
    }

    if (sendResult.error) {
      console.error("RESEND_ERROR", sendResult.error);
      return NextResponse.json(
        { error: sendResult.error.message || "Email service error" },
        { status: 502 }
      );
    }

    // 7) Optional: auto-reply to user (best-effort)
    try {
      const autoReply = await resend.emails.send({
        from: FROM,
        to: data.email,
        subject:
          data.formType === "message"
            ? "We received your message"
            : "We received your partner inquiry",
        text: "Thanks for contacting Task Force Interiors. Our team will get back to you shortly.",
      });
      if (autoReply.error) {
        console.warn("RESEND_AUTOREPLY_WARN", autoReply.error);
      }
    } catch (autoReplyErr) {
      console.warn("RESEND_AUTOREPLY_THROWN", autoReplyErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
