import type { Metadata } from "next";
import PrivacyPolicyClient from "@/components/PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ScaleSight Global Advisory's privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.scalesight.in/privacy-policy" },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />;
}
