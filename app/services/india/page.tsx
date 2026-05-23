import type { Metadata } from "next";
import IndiaServicesClient from "@/components/IndiaServicesClient";

export const metadata: Metadata = {
  title: "India Services - Virtual CFO, FP&A & Financial Advisory",
  description:
    "Strategic financial leadership for Indian businesses. Virtual CFO services, FP&A, budgeting, forecasting, MIS reporting, financial analytics, and decision support tailored for India.",
  keywords: [
    "virtual CFO India",
    "FP&A services India",
    "budgeting forecasting India",
    "financial advisory India",
    "MIS reporting",
    "financial analytics",
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
        From Virtual CFO to FP&amp;A, budgeting, and decision support — we deliver comprehensive
        financial advisory tailored for Indian businesses that demand precision and growth.
      </p>

      <h2>India Financial Advisory Services</h2>

      <article>
        <h3>Virtual CFO</h3>
        <p>Strategic financial leadership without the full-time overhead. We act as your CFO — guiding decisions, managing risk, and driving growth.</p>
        <ul>
          <li>Financial strategy and planning</li>
          <li>Cash flow management and forecasting</li>
          <li>Investor relations and fundraising support</li>
          <li>Risk identification and mitigation</li>
          <li>Board reporting and presentations</li>
          <li>Business performance monitoring</li>
        </ul>
      </article>

      <article>
        <h3>FP&amp;A (Financial Planning &amp; Analysis)</h3>
        <p>Advanced financial planning and analysis to drive predictable, sustainable growth. We turn numbers into a clear roadmap for your business.</p>
        <ul>
          <li>Annual and rolling financial forecasts</li>
          <li>Variance analysis and commentary</li>
          <li>KPI development and tracking</li>
          <li>Scenario and sensitivity modelling</li>
          <li>Revenue and cost driver analysis</li>
          <li>Management reporting packs</li>
        </ul>
      </article>

      <article>
        <h3>Budgeting &amp; Forecasting</h3>
        <p>Data-backed fiscal roadmaps that keep your business on track. We build budgets that are realistic, flexible, and tied to your goals.</p>
        <ul>
          <li>Annual budget preparation and review</li>
          <li>Rolling 12-month forecasts</li>
          <li>Department-level budget allocation</li>
          <li>Scenario planning and stress testing</li>
          <li>Budget vs actuals tracking</li>
          <li>Reforecast and revision cycles</li>
        </ul>
      </article>

      <article>
        <h3>MIS &amp; Reporting</h3>
        <p>Accurate, timely management information systems that give leadership the visibility they need to act fast and with confidence.</p>
        <ul>
          <li>Custom MIS dashboard design</li>
          <li>Monthly and quarterly management reports</li>
          <li>Board pack preparation</li>
          <li>Automated data consolidation</li>
          <li>Real-time performance tracking</li>
          <li>Executive summary reporting</li>
        </ul>
      </article>

      <article>
        <h3>Financial Analytics</h3>
        <p>Turning raw data into actionable business intelligence. We surface the insights hidden in your numbers so you can move with clarity.</p>
        <ul>
          <li>Financial data modelling and structuring</li>
          <li>Trend and pattern analysis</li>
          <li>Business intelligence reporting</li>
          <li>Profitability and margin analysis</li>
          <li>Customer and product analytics</li>
          <li>Predictive financial modelling</li>
        </ul>
      </article>

      <article>
        <h3>Decision Support</h3>
        <p>Empowering leadership with data-driven recommendations at every critical juncture — from expansion to restructuring.</p>
        <ul>
          <li>Investment appraisal and ROI analysis</li>
          <li>M&amp;A financial due diligence support</li>
          <li>Make-or-buy and build-vs-buy analysis</li>
          <li>Market entry financial modelling</li>
          <li>Restructuring and turnaround advisory</li>
          <li>Strategic options evaluation</li>
        </ul>
      </article>

      <h2>Why Choose ScaleSight for India</h2>
      <ul>
        <li>Fast Turnaround – Get your financial reports and advisory outputs delivered on time, every time.</li>
        <li>100% Accuracy – Every number verified. Zero tolerance for errors in your financial data.</li>
        <li>Dedicated Team – Work with senior finance professionals who understand Indian business needs.</li>
        <li>Proven Track Record – Trusted by 100+ Indian businesses for strategic financial leadership.</li>
      </ul>

      <h2>Ready to Transform Your India Financial Operations?</h2>
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
