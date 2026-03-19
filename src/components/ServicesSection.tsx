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
  const [region, setRegion] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display text-primary mb-4"
          >
            Specialized Expertise
          </motion.h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select a region to explore our tailored advisory frameworks.
          </p>
        </div>

        {/* Two big cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {(["India", "UAE"] as const).map((r) => (
            <motion.button
              key={r}
              onClick={() => setRegion(region === r ? null : r)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-10 md:p-14 rounded-3xl border-2 transition-all duration-300 text-left group ${
                region === r
                  ? "border-secondary bg-primary text-primary-foreground shadow-2xl"
                  : "border-primary/10 bg-background hover:border-secondary/40 text-primary"
              }`}
            >
              <span className="text-4xl md:text-5xl mb-4 block">{r === "India" ? "🇮🇳" : "🇦🇪"}</span>
              <h3 className="text-2xl md:text-3xl font-display mb-2">
                {r === "India" ? "India" : "Dubai & UAE"}
              </h3>
              <p className={`text-sm leading-relaxed ${region === r ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {r === "India"
                  ? "Virtual CFO, FP&A, budgeting, analytics, and strategic decision support for Indian enterprises."
                  : "Accounting, compliance advisory, IFRS reporting, internal audit, and process reviews across the UAE."}
              </p>
              <div className={`mt-6 text-sm font-semibold flex items-center gap-2 ${region === r ? "text-secondary" : "text-secondary"}`}>
                {region === r ? "Hide services ↑" : "View services →"}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Expanded services */}
        <AnimatePresence mode="wait">
          {region && (
            <motion.div
              key={region}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-4">
                {data[region].map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="p-7 rounded-2xl border border-primary/5 bg-off-white hover:border-emerald/30 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-emerald/5 flex items-center justify-center mb-5 group-hover:bg-emerald/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald" />
                    </div>
                    <h3 className="text-base font-bold text-primary mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
