import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  { title: "Virtual CFO", desc: "Strategic financial leadership without the full-time overhead." },
  { title: "FP&A", desc: "Advanced planning and analysis to drive predictable growth." },
  { title: "Budgeting & Forecasting", desc: "Data-backed roadmaps for your fiscal future." },
  { title: "MIS & Reporting", desc: "Accurate, timely management information systems." },
  { title: "Financial Analytics", desc: "Turning raw data into actionable business intelligence." },
  { title: "Decision Support", desc: "Empowering leadership with data-driven recommendations." },
];

const IndiaServices = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-[70px]">
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold tracking-[0.22em] uppercase text-secondary mb-3"
            >
              🇮🇳 India
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
            >
              India Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-blue max-w-2xl mx-auto"
            >
              Comprehensive financial advisory for Indian businesses — from Virtual CFO to FP&A and beyond.
            </motion.p>
          </div>

          <div
            className="rounded-3xl overflow-hidden mb-16 shadow-xl"
            style={{ backgroundImage: "url('/india.png')", backgroundSize: "cover", backgroundPosition: "center", minHeight: 280 }}
          >
            <div className="bg-black/55 min-h-[280px] flex items-center justify-center p-10">
              <p className="text-white text-xl font-semibold text-center max-w-xl">
                Virtual CFO, FP&A, Budgeting, MIS Reporting, Financial Analytics & Decision Support — all in one place.
              </p>
            </div>
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

export default IndiaServices;
