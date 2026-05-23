import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Strategic Finance Advisory for Growing Businesses | ScaleSight Global Advisory",
  description:
    "Founder-led finance advisory helping businesses see clearly, stay compliant, and grow confidently across India and UAE. Expert CFO services, compliance, and strategic financial planning.",
  alternates: { canonical: "https://www.scalesight.in/" },
  openGraph: {
    title: "Strategic Finance Advisory for Growing Businesses | ScaleSight Global Advisory",
    description:
      "Founder-led finance advisory helping businesses see clearly, stay compliant, and grow confidently across India and UAE.",
    url: "https://www.scalesight.in/",
    siteName: "ScaleSight Global Advisory",
    images: [{ url: "https://www.scalesight.in/fulllogo1.png", width: 1200, height: 630, alt: "ScaleSight Global Advisory" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Finance Advisory | ScaleSight Global Advisory",
    description: "Founder-led finance advisory for India and UAE businesses.",
    images: ["https://www.scalesight.in/fulllogo1.png"],
  },
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

/**
 * SSR-visible content block for crawlers.
 * This renders real text in the initial HTML response before any JS executes.
 * The HomeClient component renders on top with full animations after hydration.
 */
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
      <h1>Strategic Expertise From Dedicated Advisors</h1>
      <p>
        Tailored, insight-driven advisory to help businesses grow confidently across UAE and India.
        Trusted Advisory · UAE &amp; India.
      </p>

      <h2>Specialized Expertise</h2>
      <p>Select a region to explore our tailored advisory frameworks.</p>

      <h3>India Financial Advisory Services</h3>
      <p>Comprehensive financial advisory for Indian businesses</p>
      <ul>
        <li>Virtual CFO – Strategic financial leadership without the full-time overhead.</li>
        <li>FP&amp;A – Advanced planning and analysis to drive predictable growth.</li>
        <li>Budgeting &amp; Forecasting – Data-backed roadmaps for your fiscal future.</li>
        <li>MIS &amp; Reporting – Accurate, timely management information systems.</li>
        <li>Financial Analytics – Turning raw data into actionable business intelligence.</li>
        <li>Decision Support – Empowering leadership with data-driven recommendations.</li>
      </ul>

      <h3>UAE Financial Advisory Services</h3>
      <p>Expert advisory for the UAE regulatory landscape</p>
      <ul>
        <li>Accounting &amp; Bookkeeping – Precision-led maintenance of your financial records.</li>
        <li>Compliance Advisory – Navigating the evolving UAE regulatory landscape.</li>
        <li>IFRS Reporting – International standard reporting for global transparency.</li>
        <li>Internal Audit Support – Rigorous process reviews and risk mitigation.</li>
        <li>Process Reviews – Streamlining operations for maximum efficiency.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <dl>
        <dt>What makes ScaleSight different from a traditional CA firm?</dt>
        <dd>We are a founder-led advisory firm focused on strategic finance — not just compliance. We combine deep expertise with modern tools to provide actionable insights, not just reports.</dd>
        <dt>Do you work with businesses outside India and UAE?</dt>
        <dd>While our core expertise is in India and UAE, we work with global clients who have operations or financial interests in these regions.</dd>
        <dt>What is a Virtual CFO service?</dt>
        <dd>A Virtual CFO provides strategic financial leadership — FP&amp;A, budgeting, investor reporting, and decision support — without the cost of a full-time hire.</dd>
        <dt>How do you ensure data security and confidentiality?</dt>
        <dd>We follow strict data protection protocols, use secure cloud-based tools, and maintain confidentiality agreements with all clients.</dd>
        <dt>Can I schedule a free consultation?</dt>
        <dd>Absolutely. We offer a complimentary discovery call to understand your needs and recommend the right advisory framework for your business.</dd>
      </dl>

      <h2>Contact ScaleSight Global Advisory</h2>
      <p>Email: Info@scalesight.in</p>
      <p>UAE: +971 55 254 3007</p>
      <p>India: +91 90231 20410</p>
      <p>Serving businesses across India and UAE.</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticSEOContent />
      <HomeClient />
    </>
  );
}
