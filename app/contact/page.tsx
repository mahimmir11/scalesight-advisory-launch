import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to transform your business? Get in touch with ScaleSight Global Advisory for expert finance advisory services across India and UAE. Let's discuss your strategic finance needs.",
  alternates: { canonical: "https://www.scalesight.in/contact" },
  openGraph: {
    title: "Contact ScaleSight Global Advisory",
    description:
      "Get in touch with ScaleSight for strategic finance advisory services across India and UAE.",
    url: "https://www.scalesight.in/contact",
    siteName: "ScaleSight Global Advisory",
    images: [{ url: "https://www.scalesight.in/fulllogo1.png", width: 1200, height: 630, alt: "Contact ScaleSight" }],
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact ScaleSight Global Advisory",
  description:
    "Get in touch with ScaleSight for strategic finance advisory services across India and UAE.",
  url: "https://www.scalesight.in/contact",
};

function StaticSEOContent() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      <h1>Let&apos;s Transform Your Vision into Reality</h1>
      <p>
        Ready to transform your ideas into powerful business solutions? Get in touch with our team
        and let&apos;s discuss how we can help elevate your business.
      </p>

      <h2>Contact ScaleSight Global Advisory</h2>
      <address>
        <p>Email: <a href="mailto:Info@scalesight.in">Info@scalesight.in</a></p>
        <p>UAE WhatsApp: <a href="https://wa.me/971552543007">+971 55 254 3007</a></p>
        <p>India WhatsApp: <a href="https://wa.me/919023120410">+91 90231 20410</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/company/scalesight">ScaleSight Advisory on LinkedIn</a></p>
        <p>Serving businesses across India and UAE.</p>
      </address>

      <h2>Send Us a Message</h2>
      <p>Fill in the form and our team will get back to you within one business day.</p>
      <p>Services we offer: Business Setup &amp; Licensing, Tax &amp; Compliance Advisory, Investment &amp; Funding, Market Entry Strategy, Legal &amp; Regulatory Support.</p>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticSEOContent />
      <ContactClient />
    </>
  );
}
