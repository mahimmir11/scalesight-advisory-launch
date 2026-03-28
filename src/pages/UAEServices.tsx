import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  "/UAE Services/Image 1.png",
  "/UAE Services/Image 2.png",
  "/UAE Services/Image 3.png",
  "/UAE Services/Image 4.png",
];

const services = [
  { title: "Accounting & Bookkeeping", desc: "Precision-led maintenance of your financial records." },
  { title: "Compliance Advisory", desc: "Navigating the evolving UAE regulatory landscape." },
  { title: "IFRS Reporting", desc: "International standard reporting for global transparency." },
  { title: "Internal Audit Support", desc: "Rigorous process reviews and risk mitigation." },
  { title: "Process Reviews", desc: "Streamlining operations for maximum efficiency." },
];

const UAEServices = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero — split layout */}
      <section className="pt-[70px] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            >
              🇦🇪 Dubai, UAE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-primary leading-[1.08] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            >
              UAE <br />
              <span className="text-secondary">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Expert advisory for the UAE regulatory landscape — from accounting and compliance
              to IFRS reporting and internal audit support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#uae-services-list"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 hover:scale-105 transition-all group shadow-md"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-all"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex gap-8 mt-12 pt-8 border-t border-gray-100"
            >
              {[["5+", "Years in UAE"], ["100+", "Clients Served"], ["100%", "Compliance Rate"]].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{val}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image slideshow card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <AnimatePresence mode="sync">
                <motion.div
                  key={heroImages[current]}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${heroImages[current]}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </AnimatePresence>


            </div>

            {/* Decorative blob behind card */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <main className="flex-1" id="uae-services-list">
        <section className="py-24 px-6 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-primary mb-4"
              >
                What We Offer
              </motion.h2>
              <p className="text-lg text-muted-blue max-w-2xl mx-auto">
                Accounting, Compliance, IFRS Reporting, Internal Audit & Process Reviews — all under one roof.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-7 rounded-2xl border border-primary/5 bg-off-white hover:border-secondary/30 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-base text-muted-blue leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UAEServices;
