import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, phone, countryCode, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #09285A;">New Contact Form Submission — ScaleSight</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding:8px; font-weight:bold; color:#09285A;">Name</td><td style="padding:8px;">${name}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold; color:#09285A;">Email</td><td style="padding:8px;">${email}</td></tr>
        <tr><td style="padding:8px; font-weight:bold; color:#09285A;">Phone</td><td style="padding:8px;">${countryCode || ""} ${phone || "N/A"}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold; color:#09285A;">Service</td><td style="padding:8px;">${service || "Not specified"}</td></tr>
        <tr><td style="padding:8px; font-weight:bold; color:#09285A; vertical-align:top;">Message</td><td style="padding:8px;">${message.replace(/\n/g, "<br/>")}</td></tr>
      </table>
      <hr style="margin-top:24px; border-color:#eee;"/>
      <p style="color:#aaa; font-size:12px;">Sent via ScaleSight contact form</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"ScaleSight Contact" <${process.env.GMAIL_USER}>`,
      to: [process.env.RECIPIENT_EMAIL, "yasirazimshaikh5440@gmail.com"],
      replyTo: email,
      subject: `New Enquiry from ${name} — ScaleSight`,
      html: htmlBody,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}
