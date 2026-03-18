import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import FoundersSection from "@/components/FoundersSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <HeroSection />
    <ShowcaseSection />
    <AboutSection />
    <ServicesSection />
    <WhySection />
    <FoundersSection />
    <ClientsSection />
    <TestimonialsSection />
    <VisionMissionSection />
    <FAQSection />
    <ContactSection />
    <Footer />
    <FloatingContact />
  </div>
);

export default Index;
