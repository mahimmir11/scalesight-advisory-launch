import type { Metadata } from "next";
import TeamPageClient from "@/components/TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the founders and advisors behind ScaleSight Global Advisory — experienced finance professionals serving businesses across India and UAE.",
  alternates: { canonical: "https://www.scalesight.in/team" },
  openGraph: {
    title: "Our Team | ScaleSight Global Advisory",
    description:
      "Meet the founders and advisors behind ScaleSight Global Advisory — experienced finance professionals serving businesses across India and UAE.",
    url: "https://www.scalesight.in/team",
    siteName: "ScaleSight Global Advisory",
    images: [{ url: "https://www.scalesight.in/fulllogo1.png", width: 1200, height: 630, alt: "ScaleSight Team" }],
    type: "website",
  },
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
      <h1>Founder-Led Precision</h1>
      <p>Direct access to senior expertise. No junior hand-offs.</p>

      <h2>Meet the ScaleSight Team</h2>

      <article>
        <h3>Zaid Shaikh</h3>
        <p>Managing Partner · Virtual CFO &amp; Finance Advisory</p>
        <p>Strategic, insight-driven, and focused on moving the needle for high-growth founders.</p>
        <p>Expertise: FP&amp;A, Valuation, Virtual CFO, India &amp; UK Taxation</p>
      </article>

      <article>
        <h3>Samee Shaikh</h3>
        <p>Business Development · Compliance &amp; UAE Advisory</p>
        <p>Compliance-focused, detail-oriented, and trust-led — ensuring global operations remain bulletproof.</p>
        <p>Expertise: Internal Audit, Compliance Advisory, IFRS, Stock &amp; Process Audits</p>
      </article>
    </div>
  );
}

export default function Team() {
  return (
    <>
      <StaticSEOContent />
      <TeamPageClient />
    </>
  );
}
