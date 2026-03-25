import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import WhySection from "@/components/WhySection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <HeroSection />
    <ShowcaseSection />
    <WhySection />
    <StatsSection />
    <ClientsSection />
    <TestimonialsSection />
    <Footer />
    <FloatingContact />
  </div>
);

export default Index;
