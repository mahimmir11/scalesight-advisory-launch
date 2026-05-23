import type { Metadata } from "next";
import FAQPageClient from "@/components/FAQPageClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about ScaleSight Global Advisory's finance advisory services for businesses in India and UAE.",
  alternates: { canonical: "https://www.scalesight.in/faq" },
  openGraph: {
    title: "Frequently Asked Questions | ScaleSight Global Advisory",
    description:
      "Find answers to common questions about ScaleSight's finance advisory services for India and UAE businesses.",
    url: "https://www.scalesight.in/faq",
    siteName: "ScaleSight Global Advisory",
    images: [{ url: "https://www.scalesight.in/fulllogo1.png", width: 1200, height: 630, alt: "ScaleSight FAQ" }],
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
      <h1>Frequently Asked Questions</h1>
      <p>Everything you need to know about working with us. Can&apos;t find an answer? Reach out directly.</p>
      <dl>
        <dt>What makes ScaleSight different from a traditional CA firm?</dt>
        <dd>We are a founder-led advisory firm focused on strategic finance — not just compliance. We combine deep expertise with modern tools to provide actionable insights, not just reports.</dd>
        <dt>Do you work with businesses outside India and UAE?</dt>
        <dd>While our core expertise is in India and UAE, we work with global clients who have operations or financial interests in these regions. Our advisory frameworks are designed for cross-border clarity.</dd>
        <dt>What is a Virtual CFO service?</dt>
        <dd>A Virtual CFO provides strategic financial leadership — FP&amp;A, budgeting, investor reporting, and decision support — without the cost of a full-time hire. It&apos;s ideal for growing businesses that need senior expertise on demand.</dd>
        <dt>How do you ensure data security and confidentiality?</dt>
        <dd>We follow strict data protection protocols, use secure cloud-based tools, and maintain confidentiality agreements with all clients. Your financial data is handled with the utmost care.</dd>
        <dt>Can I schedule a free consultation?</dt>
        <dd>Absolutely. We offer a complimentary discovery call to understand your needs and recommend the right advisory framework for your business.</dd>
      </dl>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <StaticSEOContent />
      <FAQPageClient />
    </>
  );
}
