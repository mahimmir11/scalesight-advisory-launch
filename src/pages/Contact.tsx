import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Contact = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar heroId="contact-hero" keepDarkText={true} />
    <main className="flex-1">
      {/* Hero Section with Background Image - starts from top */}
      <div 
        id="contact-hero"
        className="relative h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ 
          backgroundImage: "url('/contact.png')",
        }}
      >
        {/* Light overlay for text visibility - very subtle */}
        <div className="absolute inset-0 bg-white/50" />
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-6 pt-[70px]">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#09285A]/20 text-[#09285A] text-xs font-semibold px-5 py-2 rounded-full mb-6 tracking-wider uppercase shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#5EE4CF]" />
              Contact Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#09285A] leading-tight mb-6"
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif", 
                letterSpacing: "-0.02em",
                textShadow: "0 2px 10px rgba(255, 255, 255, 0.8)"
              }}
            >
              Let's Transform Your{" "}
              <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="text-[#09285A]">
                  Vision into Reality
                </span>
                <span 
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #5EE4CF, #03C359)" }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-800 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-semibold"
              style={{ textShadow: "0 1px 5px rgba(255, 255, 255, 0.9)" }}
            >
              Ready to transform your ideas into powerful business solutions? Get in touch with our team and let's discuss how we can help elevate your business.
            </motion.p>
          </div>
        </div>

        {/* Smooth gradient transition to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Contact Content on White Background */}
      <div className="bg-white">
        <ContactSection />
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
