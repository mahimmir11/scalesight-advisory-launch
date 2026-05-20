import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to transform your business? Get in touch with ScaleSight Global Advisory for expert finance advisory services across India and UAE. Let's discuss your strategic finance needs.",
  alternates: { canonical: "https://www.scalesight.in/contact" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact ScaleSight Global Advisory",
  description:
    "Get in touch with ScaleSight for strategic finance advisory services across India and UAE.",
  url: "https://www.scalesight.in/contact",
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactClient />
    </>
  );
}
