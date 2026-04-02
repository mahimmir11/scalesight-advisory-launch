import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <HeroSection />
    <ClientsSection />
    <ServicesSection />
    <TestimonialsSection />
    <ContactSection showInfoCards={false} />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;