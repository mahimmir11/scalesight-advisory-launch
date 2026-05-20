import type { Metadata } from "next";
import TermsOfServiceClient from "@/components/TermsOfServiceClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "ScaleSight Global Advisory's terms of service — governing your use of our website and professional services.",
  alternates: { canonical: "https://www.scalesight.in/terms-of-service" },
};

export default function TermsOfService() {
  return <TermsOfServiceClient />;
}
