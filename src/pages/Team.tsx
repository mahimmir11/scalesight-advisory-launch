import Navbar from "@/components/Navbar";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";

const Team = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-[76px]">
      <FoundersSection />
    </main>
    <Footer />
  </div>
);

export default Team;
