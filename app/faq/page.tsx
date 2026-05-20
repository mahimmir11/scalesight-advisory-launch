import type { Metadata } from "next";
import FAQPageClient from "@/components/FAQPageClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about ScaleSight Global Advisory's finance advisory services for businesses in India and UAE.",
  alternates: { canonical: "https://www.scalesight.in/faq" },
};

export default function FAQ() {
  return <FAQPageClient />;
}
