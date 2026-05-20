import type { Metadata } from "next";
import UAEServicesClient from "@/components/UAEServicesClient";

export const metadata: Metadata = {
  title: "UAE Services - Accounting, IFRS Reporting & Compliance",
  description:
    "Expert financial advisory for UAE businesses. Accounting, bookkeeping, IFRS reporting, internal audit support, process reviews, and comprehensive compliance services tailored for UAE market.",
  keywords: [
    "UAE accounting services",
    "IFRS reporting UAE",
    "internal audit UAE",
    "compliance UAE",
    "bookkeeping Dubai",
    "financial advisory UAE",
  ],
  alternates: { canonical: "https://www.scalesight.in/services/uae" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UAE Financial Advisory Services",
  description:
    "Expert financial advisory for UAE businesses - Accounting, bookkeeping, IFRS reporting, internal audit, process reviews, and compliance services.",
  provider: {
    "@type": "ProfessionalService",
    name: "ScaleSight Global Advisory",
  },
  areaServed: "AE",
  url: "https://www.scalesight.in/services/uae",
};

export default function UAEServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <UAEServicesClient />
    </>
  );
}
