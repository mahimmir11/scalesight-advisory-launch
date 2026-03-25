import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-[70px]">
      <AboutSection />
      <WhySection />
    </main>
    <Footer />
  </div>
);

export default About;
