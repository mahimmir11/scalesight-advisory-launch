import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <AboutSection />
      <ClientsSection />
    </main>
    <Footer />
  </div>
);

export default About;
