import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Strategic Finance Advisory for Growing Businesses | ScaleSight Global Advisory",
  description:
    "Founder-led finance advisory helping businesses see clearly, stay compliant, and grow confidently across India and UAE. Expert CFO services, compliance, and strategic financial planning.",
  alternates: { canonical: "https://www.scalesight.in/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ScaleSight Global Advisory",
  description:
    "Founder-led finance advisory helping businesses see clearly, stay compliant, and grow confidently across India and UAE.",
  url: "https://www.scalesight.in",
  logo: "https://www.scalesight.in/fulllogo1.png",
  image: "https://www.scalesight.in/fulllogo1.png",
  address: [
    { "@type": "PostalAddress", addressCountry: "AE", addressRegion: "Dubai" },
    { "@type": "PostalAddress", addressCountry: "IN", addressRegion: "India" },
  ],
  sameAs: ["https://www.linkedin.com/company/scalesight"],
  areaServed: ["AE", "IN"],
  serviceType: [
    "Financial Advisory",
    "Strategic Finance",
    "Business Consulting",
    "Compliance Services",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeClient />
    </>
  );
}
