import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, connectionType, formType } =
      body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Subject line changes depending on which form was submitted
    const subjectLine =
      formType === "partner"
        ? `🤝 Partner Request (${connectionType || "General"})`
        : `📩 New Message: ${subject || "No Subject"}`;

    const htmlContent = `
      <h2>${
        formType === "partner"
          ? "Partner With Us Submission"
          : "New Contact Message"
      }</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${
        connectionType
          ? `<p><strong>Connection Type:</strong> ${connectionType}</p>`
          : ""
      }
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.TO_EMAIL as string],
      subject: subjectLine,
      html: htmlContent,
    });

    console.log("📩 Resend API response:", data);

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("❌ Resend API error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send email" },
      { status: 500 }
    );
  }
}
