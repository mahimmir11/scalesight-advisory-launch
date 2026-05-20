'use client';

import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function FAQPageClient() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[76px]">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
