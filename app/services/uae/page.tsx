import type { Metadata } from "next";
import UAEServicesClient from "@/components/UAEServicesClient";

export const metadata: Metadata = {
  title: "UAE Services - Accounting, IFRS Reporting & Compliance",
  description:
    "Expert financial advisory for UAE businesses. Accounting, bookkeeping, IFRS reporting, internal audit support, process reviews, and comprehensive compliance services tailored for UAE market.",
  keywords: [
    "accounting services Dubai",
    "VAT return filing Dubai",
    "UAE corporate tax",
    "free zone accounting",
    "mainland accounting",
    "business registration Dubai",
    "bookkeeping Dubai",
    "financial advisory UAE",
    "IFRS reporting UAE",
    "internal audit UAE",
    "compliance UAE",
    "overseas investment advisory India",
    "chartered accountant UAE",
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
        Navigate the UAE regulatory landscape with confidence — From new mainland and free-zone establishments to growing SMEs and family-owned shops — from accounting and compliance to IFRS reporting and internal audit support.
      </p>

      <h2>UAE Financial Advisory Services</h2>

      <article>
        <h3>Accounting &amp; Bookkeeping</h3>
        <p>Books closed monthly, audit-ready always.</p>
        <ul>
          <li>Daily transaction recording and reconciliation</li>
          <li>Chart of accounts design and management</li>
          <li>Bank and credit card reconciliations</li>
          <li>Accounts payable and receivable tracking</li>
          <li>Monthly financial statements preparation</li>
          <li>VAT-compliant ledger maintenance</li>
        </ul>
      </article>

      <article>
        <h3>VAT Compliance</h3>
        <p>End-to-end UAE VAT support.</p>
        <ul>
          <li>VAT registration and de-registration support</li>
          <li>Quarterly VAT return preparation and filing</li>
          <li>Input and output VAT reconciliation</li>
          <li>FTA correspondence and notice handling</li>
          <li>VAT health checks and compliance reviews</li>
          <li>Refund applications and follow-ups</li>
        </ul>
      </article>

      <article>
        <h3>Corporate Tax</h3>
        <p>UAE Corporate Tax — fully managed.</p>
        <ul>
          <li>Corporate Tax registration with FTA</li>
          <li>Taxable income computation and review</li>
          <li>Transfer pricing documentation support</li>
          <li>Deferred tax workings under IFRS</li>
          <li>Corporate Tax return preparation and filing</li>
          <li>Year-end tax planning and advisory</li>
        </ul>
      </article>

      <article>
        <h3>Business Registration</h3>
        <p>Mainland and free zone setup support.</p>
        <ul>
          <li>Trade license application and renewals</li>
          <li>Mainland and free zone jurisdiction guidance</li>
          <li>Documentation, approvals and PRO coordination</li>
          <li>Office address and bank account assistance</li>
          <li>Initial accounting, VAT and tax setup</li>
          <li>Post-incorporation statutory compliance setup</li>
        </ul>
      </article>

      <article>
        <h3>Internal and External Audits</h3>
        <p>Audit-ready businesses, every cycle.</p>
        <ul>
          <li>Internal control evaluation and testing</li>
          <li>Risk assessment and process documentation</li>
          <li>External audit liaison and preparation</li>
          <li>Workpaper readiness and schedule preparation</li>
          <li>Fraud detection and prevention reviews</li>
          <li>Audit observation closure and follow-up</li>
        </ul>
      </article>

      <article>
        <h3>Process Reviews</h3>
        <p>Smarter finance processes, sharper insight.</p>
        <ul>
          <li>Finance process mapping and gap analysis</li>
          <li>Workflow automation recommendations</li>
          <li>Cost reduction opportunity identification</li>
          <li>System integration and tool selection</li>
          <li>KPI design and performance dashboards</li>
          <li>Continuous improvement and change support</li>
        </ul>
      </article>

      <h2>Why Choose ScaleSight for UAE</h2>
      <ul>
        <li>Fast Turnaround – Get your financial reports and compliance documents delivered on time, every time.</li>
        <li>100% Compliance – Stay ahead of regulatory changes with our proactive compliance monitoring.</li>
        <li>Dedicated Team – Work with experienced professionals who understand your business needs.</li>
        <li>Proven Track Record – Join 100+ satisfied clients who trust us with their financial operations.</li>
        <li>Modern Stack – Books on Zoho, Tally or QuickBooks; dashboards on Power BI; automation built with AI tools where it saves you time.</li>
      </ul>

      <h2>Want clean books, on-time filings, and a CA you can WhatsApp?</h2>
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
