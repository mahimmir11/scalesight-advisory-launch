import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

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

const regionInfo = {
  India: {
    flag: "🇮🇳",
    label: "India",
    tagline: "Comprehensive financial advisory for Indian businesses",
    summary: "Virtual CFO, FP&A, Budgeting, MIS Reporting, Financial Analytics & more.",
    count: 6,
  },
  UAE: {
    flag: "🇦🇪",
    label: "Dubai, UAE",
    tagline: "Expert advisory for the UAE regulatory landscape",
    summary: "Accounting, Compliance, IFRS Reporting, Internal Audit & Process Reviews.",
    count: 5,
  },
};

const ServicesSection = () => {
  const [selected, setSelected] = useState<"India" | "UAE" | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Specialized Expertise
          </motion.h2>
          <p className="text-lg text-muted-blue">
            {selected
              ? `Showing services for ${regionInfo[selected].label}`
              : "Select a region to explore our tailored advisory frameworks."}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* Region selection cards */}
          {!selected && (
            <motion.div
              key="region-cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
            >
              {(["India", "UAE"] as const).map((r) => (
                <motion.a
                  key={r}
                  href={r === "India" ? "/services/india" : "/services/uae"}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="relative p-10 rounded-3xl border-2 border-primary/10 hover:border-[#00C2A8]/40 hover:shadow-xl transition-all cursor-pointer group flex flex-col overflow-hidden min-h-[360px]"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url('/${r === "India" ? "india1.png" : "uae.jpg"}')`,
                    }}
                  />
                  
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/15 group-hover:from-black/25 group-hover:via-black/15 group-hover:to-black/10 transition-all" />
                  
                  {/* Content with relative positioning to appear above background */}
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#00C2A8] transition-colors drop-shadow-lg mb-6">
                        {regionInfo[r].label}
                      </h3>
                      <p className="text-base text-white/90 leading-relaxed mb-1 drop-shadow-md">{regionInfo[r].tagline}</p>
                      <p className="text-sm text-white/80 drop-shadow-md">{regionInfo[r].summary}</p>
                    </div>
                    <div className="flex items-start mt-6">
                      <motion.span 
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-full text-base font-bold group-hover:bg-[#00C2A8] group-hover:text-white transition-colors shadow-lg hover:shadow-xl cursor-pointer">
                        Show More Details <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}

          {/* Service grid after region selected */}
          {selected && (
            <motion.div
              key={`services-${selected}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Back button + region toggle */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-base hover:text-emerald transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Regions
                </button>
                <div className="flex p-1 bg-off-white rounded-xl border border-primary/5">
                  {(["India", "UAE"] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setSelected(r)}
                      className={`px-6 sm:px-8 py-3 rounded-lg text-sm font-bold transition-all ${
                        selected === r
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "text-primary/50 hover:text-primary"
                      }`}
                    >
                      {r === "India" ? "🇮🇳" : "🇦🇪"} {r === "UAE" ? "Dubai" : r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data[selected].map((s, i) => (
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
                    <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                    <p className="text-base text-muted-blue leading-relaxed">{s.desc}</p>
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
