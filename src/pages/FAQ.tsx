import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const FAQ = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-[70px]">
      <FAQSection />
    </main>
    <Footer />
  </div>
);

export default FAQ;
