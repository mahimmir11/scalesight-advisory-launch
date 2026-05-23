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
  openGraph: {
    title: "UAE Services - Accounting, IFRS Reporting & Compliance | ScaleSight",
    description:
      "Expert financial advisory for UAE businesses. Accounting, bookkeeping, IFRS reporting, internal audit, and compliance services.",
    url: "https://www.scalesight.in/services/uae",
    siteName: "ScaleSight Global Advisory",
    images: [{ url: "https://www.scalesight.in/fulllogo1.png", width: 1200, height: 630, alt: "ScaleSight UAE Services" }],
    type: "website",
  },
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
      <h1>Expert Financial Advisory for UAE</h1>
      <p>
        Navigate the UAE regulatory landscape with confidence — from accounting and compliance
        to IFRS reporting and internal audit support.
      </p>

      <h2>UAE Financial Advisory Services</h2>

      <article>
        <h3>Accounting &amp; Bookkeeping</h3>
        <p>Precision-led maintenance of your financial records.</p>
        <ul>
          <li>Daily transaction recording and reconciliation</li>
          <li>Chart of accounts setup and management</li>
          <li>Bank and credit card reconciliation</li>
          <li>Accounts payable and receivable management</li>
          <li>Monthly financial statements preparation</li>
          <li>VAT-compliant bookkeeping</li>
        </ul>
      </article>

      <article>
        <h3>Compliance Advisory</h3>
        <p>Navigating the evolving UAE regulatory landscape.</p>
        <ul>
          <li>UAE corporate tax compliance</li>
          <li>VAT registration and filing</li>
          <li>Economic substance regulations</li>
          <li>Anti-money laundering compliance</li>
          <li>Regulatory reporting and submissions</li>
          <li>Compliance health checks and audits</li>
        </ul>
      </article>

      <article>
        <h3>IFRS Reporting</h3>
        <p>International standard reporting for global transparency.</p>
        <ul>
          <li>IFRS-compliant financial statements</li>
          <li>Conversion from local GAAP to IFRS</li>
          <li>Revenue recognition under IFRS 15</li>
          <li>Lease accounting (IFRS 16)</li>
          <li>Financial instruments (IFRS 9)</li>
          <li>Consolidated financial statements</li>
        </ul>
      </article>

      <article>
        <h3>Internal Audit Support</h3>
        <p>Rigorous process reviews and risk mitigation.</p>
        <ul>
          <li>Internal control evaluation and testing</li>
          <li>Risk assessment and management</li>
          <li>Operational audit and efficiency reviews</li>
          <li>Fraud detection and prevention</li>
          <li>Compliance audit procedures</li>
          <li>Audit report preparation and follow-up</li>
        </ul>
      </article>

      <article>
        <h3>Process Reviews</h3>
        <p>Streamlining operations for maximum efficiency.</p>
        <ul>
          <li>Business process mapping and analysis</li>
          <li>Workflow optimization recommendations</li>
          <li>Cost reduction opportunities identification</li>
          <li>System integration and automation</li>
          <li>Performance metrics and KPI development</li>
          <li>Change management support</li>
        </ul>
      </article>

      <article>
        <h3>Financial Advisory</h3>
        <p>Strategic financial planning for sustainable growth.</p>
        <ul>
          <li>Business valuation and financial modeling</li>
          <li>Mergers and acquisitions advisory</li>
          <li>Capital structure optimization</li>
          <li>Cash flow management strategies</li>
          <li>Investment appraisal and feasibility studies</li>
          <li>Exit planning and succession advisory</li>
        </ul>
      </article>

      <h2>Why Choose ScaleSight for UAE</h2>
      <ul>
        <li>Fast Turnaround – Get your financial reports and compliance documents delivered on time, every time.</li>
        <li>100% Compliance – Stay ahead of regulatory changes with our proactive compliance monitoring.</li>
        <li>Dedicated Team – Work with experienced professionals who understand your business needs.</li>
        <li>Proven Track Record – Join 100+ satisfied clients who trust us with their financial operations.</li>
      </ul>

      <h2>Your Trusted Partner in UAE Financial Excellence</h2>
      <p>
        We combine deep regulatory knowledge with cutting-edge technology to deliver
        unparalleled financial services across the UAE market.
        Contact ScaleSight Global Advisory today.
      </p>
    </div>
  );
}

export default function UAEServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticSEOContent />
      <UAEServicesClient />
    </>
  );
}
