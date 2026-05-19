import Navbar from "@/components/Navbar";
import AboutSection, { ProcessSection } from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useEffect } from "react";

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ScaleSight Global Advisory",
    "description": "Learn about ScaleSight's founder-led approach to strategic finance advisory across India and UAE.",
    "url": "https://www.scalesight.in/about"
  };

  return (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="About Us - Founder-Led Finance Advisory"
      description="Meet the team behind ScaleSight Global Advisory. Founder-led strategic finance advisory helping businesses across India and UAE achieve clarity, compliance, and confident growth."
      canonical="https://www.scalesight.in/about"
      keywords="about scalesight, finance advisory team, founder-led advisory, India UAE financial services"
      structuredData={structuredData}
    />
    <Navbar />
    <main className="flex-1">
      <AboutSection />
      <ClientsSection />
      <ProcessSection />
    </main>
    <Footer />
  </div>
  );
};

export default About;
