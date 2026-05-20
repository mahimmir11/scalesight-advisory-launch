'use client';

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import AboutSection, { ProcessSection } from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

export default function AboutClient() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutSection />
        <ClientsSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
