import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us - Founder-Led Finance Advisory",
  description:
    "Meet the team behind ScaleSight Global Advisory. Founder-led strategic finance advisory helping businesses across India and UAE achieve clarity, compliance, and confident growth.",
  alternates: { canonical: "https://www.scalesight.in/about" },
  openGraph: {
    title: "About ScaleSight Global Advisory",
    description:
      "Founder-led strategic finance advisory helping businesses across India and UAE achieve clarity, compliance, and confident growth.",
    url: "https://www.scalesight.in/about",
    siteName: "ScaleSight Global Advisory",
    images: [{ url: "https://www.scalesight.in/fulllogo1.png", width: 1200, height: 630, alt: "ScaleSight Global Advisory" }],
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ScaleSight Global Advisory",
  description:
    "Learn about ScaleSight's founder-led approach to strategic finance advisory across India and UAE.",
  url: "https://www.scalesight.in/about",
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
      <h1>Precision. Compliance. Growth.</h1>
      <p>
        Your financial clarity partner — built for businesses that demand accuracy, speed, and strategic insight.
        Founder-led advisory serving India and UAE.
      </p>

      <h2>Who We Are</h2>
      <p>
        More than accountants. We are strategists. We combine deep financial expertise with modern tools
        to deliver clarity, compliance, and measurable growth. Founder-led. Client-first. Built for businesses
        across the globe that refuse to settle for ordinary advisory.
      </p>

      <h2>Core Expertise — What We Excel At</h2>
      <dl>
        <dt>Taxation</dt>
        <dd>Strategic tax planning, GST compliance, and end-to-end filing for India and UAE businesses. We ensure you're always ahead of deadlines and regulations.</dd>
        <dt>Audit &amp; Assurance</dt>
        <dd>Rigorous internal and statutory audit support. We review processes, identify risks, and deliver transparent assurance reports.</dd>
        <dt>Compliance Management</dt>
        <dd>Stay ahead of every regulatory requirement across India and UAE. From VAT to corporate tax — we handle it all proactively.</dd>
        <dt>Financial Advisory</dt>
        <dd>Virtual CFO services, FP&amp;A, budgeting, and strategic financial guidance. Senior expertise without the full-time overhead.</dd>
      </dl>

      <h2>Our Process</h2>
      <ol>
        <li>Understand – Deep-dive into your business, goals, and pain points.</li>
        <li>Strategize – Design a tailored financial &amp; compliance roadmap.</li>
        <li>Execute – Precision delivery — filings, reports, advisory.</li>
        <li>Optimize – Continuous improvement as your business scales.</li>
      </ol>

      <h2>Four Pillars of Excellence</h2>
      <ul>
        <li>Accuracy – Every number verified. Zero tolerance for errors.</li>
        <li>Transparency – Clear pricing, clear scope — no surprises ever.</li>
        <li>Timely Compliance – Deadlines are non-negotiable. Always on time.</li>
        <li>Expert Guidance – Founder-led team. Senior expertise, always.</li>
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticSEOContent />
      <AboutClient />
    </>
  );
}
