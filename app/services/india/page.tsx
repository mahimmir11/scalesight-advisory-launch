import type { Metadata } from "next";
import IndiaServicesClient from "@/components/IndiaServicesClient";

export const metadata: Metadata = {
  title: "India Services - Virtual CFO, FP&A & Financial Advisory",
  description:
    "Strategic financial leadership for Indian businesses. Virtual CFO services, FP&A, budgeting, forecasting, MIS reporting, financial analytics, and decision support tailored for India.",
  keywords: [
    "virtual CFO India",
    "FP&A services India",
    "budgeting forecasting India",
    "financial advisory India",
    "MIS reporting",
    "financial analytics",
  ],
  alternates: { canonical: "https://www.scalesight.in/services/india" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "India Financial Advisory Services",
  description:
    "Strategic financial leadership for Indian businesses - Virtual CFO, FP&A, budgeting, forecasting, and decision support services.",
  provider: {
    "@type": "ProfessionalService",
    name: "ScaleSight Global Advisory",
  },
  areaServed: "IN",
  url: "https://www.scalesight.in/services/india",
};

export default function IndiaServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <IndiaServicesClient />
    </>
  );
}
