import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us - Founder-Led Finance Advisory",
  description:
    "Meet the team behind ScaleSight Global Advisory. Founder-led strategic finance advisory helping businesses across India and UAE achieve clarity, compliance, and confident growth.",
  alternates: { canonical: "https://www.scalesight.in/about" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ScaleSight Global Advisory",
  description:
    "Learn about ScaleSight's founder-led approach to strategic finance advisory across India and UAE.",
  url: "https://www.scalesight.in/about",
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AboutClient />
    </>
  );
}
