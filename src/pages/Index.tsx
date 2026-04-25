import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const Index = ({ splashDone = true }: { splashDone?: boolean }) => (
  <div className="scroll-smooth">
    <Navbar />
    <HeroSection splashDone={splashDone} />
    <ServicesSection />
    <ContactSection />
    <FAQSection />
    <Footer />
    <FloatingContact />
  </div>
);

export default Index;
