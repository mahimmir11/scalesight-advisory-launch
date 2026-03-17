import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const data: Record<string, { title: string; desc: string }[]> = {
  India: [
    { title: "Virtual CFO", desc: "Strategic financial leadership without the full-time overhead." },
    { title: "FP&A", desc: "Advanced planning and analysis to drive predictable growth." },
    { title: "Budgeting & Forecasting", desc: "Data-backed roadmaps for your fiscal future." },
    { title: "MIS & Reporting", desc: "Accurate, timely management information systems." },
    { title: "Financial Analytics", desc: "Turning raw data into actionable business intelligence." },
    { title: "Decision Support", desc: "Empowering leadership with data-driven recommendations." },
  ],
  UAE: [
    { title: "Accounting & Bookkeeping", desc: "Precision-led maintenance of your financial records." },
    { title: "Compliance Advisory", desc: "Navigating the evolving UAE regulatory landscape." },
    { title: "IFRS Reporting", desc: "International standard reporting for global transparency." },
    { title: "Internal Audit Support", desc: "Rigorous process reviews and risk mitigation." },
    { title: "Process Reviews", desc: "Streamlining operations for maximum efficiency." },
  ],
};

const ServicesSection = () => {
  const [region, setRegion] = useState("India");

  return (
    <section id="services" className="py-20 md:py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display text-primary mb-4"
            >
              Specialized Expertise
            </motion.h2>
            <p className="text-muted-blue">
              Select a region to explore our tailored advisory frameworks.
            </p>
          </div>
          <div className="flex p-1 bg-off-white rounded-xl border border-primary/5 self-start md:self-auto">
            {(["India", "UAE"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-6 sm:px-8 py-3 rounded-lg text-sm font-bold transition-all ${
                  region === r
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-primary/50 hover:text-primary"
                }`}
              >
                {r === "India" ? "🇮🇳" : "🇦🇪"} {r}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {data[region].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="p-7 rounded-2xl border border-primary/5 bg-off-white hover:border-emerald/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-emerald/5 flex items-center justify-center mb-5 group-hover:bg-emerald/10 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-blue leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
