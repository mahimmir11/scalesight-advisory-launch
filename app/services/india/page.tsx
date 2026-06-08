import type { Metadata } from "next";
import IndiaServicesClient from "@/components/IndiaServicesClient";

export const metadata: Metadata = {
  title: "India Services - Virtual CFO, FP&A & Financial Advisory",
  description:
    "Strategic financial leadership for Indian businesses. Virtual CFO services, FP&A, budgeting, forecasting, MIS reporting, financial analytics, and decision support tailored for India.",
  keywords: [
    "virtual CFO India",
    "outsourced CFO India",
    "FP&A services India",
    "GST return filing India",
    "TDS filing India",
    "MCA compliance",
    "overseas investment advisory India",
    "financial advisory India",
    "accounting services India",
    "chartered accountant India",
    "budgeting forecasting India",
  ],
  alternates: { canonical: "https://www.scalesight.in/services/india" },
  openGraph: {
    title: "India Services - Virtual CFO, FP&A & Financial Advisory | ScaleSight",
    description:
      "Strategic financial leadership for Indian businesses. Virtual CFO, FP&A, budgeting, forecasting, MIS reporting, and financial analytics.",
    url: "https://www.scalesight.in/services/india",
    siteName: "ScaleSight Global Advisory",
    images: [{ url: "https://www.scalesight.in/fulllogo1.png", width: 1200, height: 630, alt: "ScaleSight India Services" }],
    type: "website",
  },
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
      <h1>Strategic Financial Leadership for India</h1>
      <p>
        From Accounting to Compliance, Virtual CFO to FP&amp;A, budgeting, and decision support — we deliver comprehensive
        financial advisory tailored for Indian businesses that demand precision and growth.
      </p>

      <h2>India Financial Advisory Services</h2>

      <article>
        <h3>Virtual CFO</h3>
        <p>Senior finance leadership, on demand.</p>
        <ul>
          <li>Monthly financial review and insights</li>
          <li>Cash flow forecasting and management</li>
          <li>Investor and lender relationship support</li>
          <li>Board reporting and management presentations</li>
          <li>Strategic financial planning and roadmap</li>
          <li>Risk identification and mitigation advisory</li>
        </ul>
      </article>

      <article>
        <h3>Accounting &amp; Bookkeeping</h3>
        <p>Clean books, ready when needed.</p>
        <ul>
          <li>Daily transaction recording and reconciliation</li>
          <li>Chart of accounts design and maintenance</li>
          <li>Bank and vendor reconciliations</li>
          <li>Receivables and payables tracking</li>
          <li>Monthly financial closing and statements</li>
          <li>Cloud accounting on Zoho or Tally</li>
        </ul>
      </article>

      <article>
        <h3>Compliance Reporting</h3>
        <p>GST, TDS, Income Tax and MCA.</p>
        <ul>
          <li>Monthly GST returns and reconciliations</li>
          <li>Quarterly TDS returns and challan management</li>
          <li>Annual income tax return preparation</li>
          <li>MCA filings, AGM and annual returns</li>
          <li>Statutory notice handling and responses</li>
          <li>Year-end tax planning and advisory</li>
        </ul>
      </article>

      <article>
        <h3>FP&amp;A, Budgeting &amp; Reporting</h3>
        <p>Plan, forecast, and report with clarity.</p>
        <ul>
          <li>Annual budget preparation and approval</li>
          <li>Rolling forecasts and variance analysis</li>
          <li>Departmental and project-level budgeting</li>
          <li>Custom MIS dashboard design and delivery</li>
          <li>Monthly and quarterly management reports</li>
          <li>Scenario modelling and stress testing</li>
        </ul>
      </article>

      <article>
        <h3>Financial Analytics</h3>
        <p>Numbers turned into actionable insight.</p>
        <ul>
          <li>Financial data modelling and structuring</li>
          <li>Profitability, margin and unit economics</li>
          <li>Customer, product and segment analytics</li>
          <li>Trend, pattern and outlier identification</li>
          <li>Business intelligence reporting in Power BI</li>
          <li>Predictive and prescriptive financial modelling</li>
        </ul>
      </article>

      <article>
        <h3>Overseas Investment Advisory</h3>
        <p>Cross-border investment, fully facilitated.</p>
        <ul>
          <li>Outbound investment structuring guidance</li>
          <li>FEMA, RBI and ODI compliance advisory</li>
          <li>Remittance routing and documentation support</li>
          <li>Tax planning across multiple jurisdictions</li>
          <li>Liaison with overseas service providers</li>
          <li>Post-investment reporting and ongoing compliance</li>
        </ul>
      </article>

      <h2>Why Choose ScaleSight for India</h2>
      <ul>
        <li>Fast Turnaround – Get your financial reports and advisory outputs delivered on time, every time.</li>
        <li>100% Accuracy – Every number verified. Zero tolerance for errors in your financial data.</li>
        <li>Dedicated Team – Work with senior finance professionals who understand Indian business needs.</li>
        <li>Proven Track Record – Trusted by 100+ Indian businesses for strategic financial leadership.</li>
        <li>Power BI + AI Automation – Your reports are dashboards, not PDFs; routine work is automated wherever it saves you time.</li>
      </ul>

      <h2>Tell us what's breaking in your finance function. We'll tell you honestly whether we can help.</h2>
      <p>
        Let's discuss how our expert team can help you achieve financial clarity and drive sustainable growth.
        Contact ScaleSight Global Advisory today.
      </p>
    </div>
  );
}

export default function IndiaServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticSEOContent />
      <IndiaServicesClient />
    </>
  );
}
