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
      <h1>Built for Businesses in India and the UAE.</h1>
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
      <p>Expert advisory for the UAE regulatory landscape — Accounting, VAT, Corporate Tax, Registration, Internal and External Audits, IFRS Reporting &amp; Process Reviews.</p>
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
        <dd>Two things. First, every client is handled directly by experienced Chartered Accountants — not a junior associate. Second, our bookkeeping is run with CFO-level oversight: we don't just record transactions, we flag tax exposure, cash gaps and reporting issues as they happen — at a price that delivers genuine value.</dd>
        <dt>Do you work with businesses outside India and UAE?</dt>
        <dd>Our core practice is India and the UAE. We will take on global clients only when their work meaningfully connects to one of these two markets — for example, a UK or US holding company with an Indian subsidiary.</dd>
        <dt>What is a Virtual CFO service?</dt>
        <dd>A Virtual CFO is a part-time, senior finance lead for businesses that cannot justify a full-time CFO. With us, that means monthly reviews, cash-flow forecasting, MIS dashboards in Power BI, board and investor reporting, and direct WhatsApp access to a Chartered Accountant. Typical engagement: 1–3 days of attention per month, billed at a fixed monthly fee.</dd>
        <dt>How do you ensure data security and confidentiality?</dt>
        <dd>Books are maintained on your own Zoho, Tally or QuickBooks account — we do not move your data to ours. Access is role-based, files are exchanged through encrypted cloud storage, and every engagement is covered by a signed NDA.</dd>
        <dt>Can I schedule a free consultation?</dt>
        <dd>Yes — a 30-minute discovery call is free. We will review your current setup, flag the two or three things that need immediate attention, and tell you honestly whether you need us or not.</dd>
        <dt>How much does your service cost compared to hiring an in-house accountant?</dt>
        <dd>Our engagements are typically priced at a fraction of the cost of an equivalent in-house accountant or finance manager — and that price already includes senior Chartered Accountant oversight, modern accounting tools, and structured monthly reporting. Pricing is fixed monthly, scoped in writing, and adjusted only if the scope itself changes.</dd>
        <dt>Why does my business need a structured accounting partner?</dt>
        <dd>Unstructured accounting silently costs businesses money — through missed tax deadlines, regulatory penalties, weak cash visibility, and a lack of decision-ready numbers. A structured accounting partner keeps your books audit-ready, protects you from FTA and tax penalties, gives leadership real-time financial visibility, and significantly improves the value of the business when it comes time to raise capital, attract investment or sell.</dd>
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
