import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, message } = await req.json();

  // Validate input
  if (!name || !email || !phone || !message) {
    return new Response(
      JSON.stringify({ success: false, error: "All fields are required." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (!process.env.EMAIL_TO || !process.env.EMAIL_FROM) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Email configuration is missing.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const recipients = process.env.EMAIL_TO.split(",").map((email) =>
    email.trim()
  );

  const emailContent = `
    <h2>New Contact Form Submission from TaskForceInteriors.com</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong><br>${message}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: recipients,
      subject: "New Contact Submission - Task Force Interiors",
      html: emailContent,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message || "Email failed.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully!",
        data,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Unexpected Error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server error while sending email.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
