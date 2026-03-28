import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import StatsSection from "@/components/StatsSection";
import WhySection from "@/components/WhySection";
import ServicesSection from "@/components/ServicesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FoundersSection from "@/components/FoundersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <HeroSection />
    <ClientsSection />
    <StatsSection />
    <WhySection />
    <ServicesSection />
    <ShowcaseSection />
    <FoundersSection />
    <TestimonialsSection />
    <VisionMissionSection />
    <ContactSection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
