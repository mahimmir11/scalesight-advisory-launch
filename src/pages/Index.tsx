import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";

const Index = ({ splashDone = true }: { splashDone?: boolean }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ScaleSight Global Advisory",
    "description": "Founder-led finance advisory helping businesses see clearly, stay compliant, and grow confidently across India and UAE.",
    "url": "https://www.scalesight.in",
    "logo": "https://www.scalesight.in/fulllogo1.png",
    "image": "https://www.scalesight.in/fulllogo1.png",
    "telephone": "+971-XXX-XXXX",
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "India"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/scalesight"
    ],
    "areaServed": ["AE", "IN"],
    "serviceType": ["Financial Advisory", "Strategic Finance", "Business Consulting", "Compliance Services"]
  };

  return (
    <div className="scroll-smooth">
      <SEO
        title="Strategic Finance Advisory for Growing Businesses"
        description="Founder-led finance advisory helping businesses see clearly, stay compliant, and grow confidently across India and UAE. Expert CFO services, compliance, and strategic financial planning."
        canonical="https://www.scalesight.in/"
        keywords="finance advisory, strategic finance, CFO services, business consulting, India, UAE, compliance, financial planning, startup advisory"
        structuredData={structuredData}
      />
      <Navbar />
      <HeroSection splashDone={splashDone} />
      <ServicesSection />
      <ContactSection />
      <FAQSection />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
