'use client';

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function HomeClient() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection splashDone={true} />
      <ServicesSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
