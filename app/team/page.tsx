import type { Metadata } from "next";
import TeamPageClient from "@/components/TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the founders and advisors behind ScaleSight Global Advisory — experienced finance professionals serving businesses across India and UAE.",
  alternates: { canonical: "https://www.scalesight.in/team" },
};

export default function Team() {
  return <TeamPageClient />;
}
