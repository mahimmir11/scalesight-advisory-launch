import express from "express";
import cors from "cors";
import { createRequire } from "module";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

config();

const require = createRequire(import.meta.url);
const nodemailer = require("nodemailer");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist")));
}

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, countryCode, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const gmailUser = process.env.GMAIL_USER || "";
    const gmailPass = (process.env.GMAIL_APP_PASS || "").replace(/\s/g, "");
    const recipientEmail = process.env.RECIPIENT_EMAIL || "";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #09285A;">New Contact Form Submission — ScaleSight</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:8px; font-weight:bold;">Name</td><td>${name}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold;">Email</td><td>${email}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Phone</td><td>${countryCode || ""} ${phone || "N/A"}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold;">Service</td><td>${service || "Not specified"}</td></tr>
          <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Message</td><td>${message.replace(/\n/g, "<br/>")}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"ScaleSight Contact" <${gmailUser}>`,
      to: [recipientEmail, "yasirazimshaikh5440@gmail.com"],
      replyTo: email,
      subject: `New Enquiry from ${name} — ScaleSight`,
      html: htmlBody,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: err.message || "Failed to send email." });
  }
});

// SPA fallback - serve index.html for all non-API routes
// This must come AFTER the API routes
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
