import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
    label: "UAE",
    tagline: "Expert advisory for the UAE regulatory landscape",
    summary: "Accounting, Compliance, IFRS Reporting, Internal Audit & Process Reviews.",
    count: 5,
  },
};

const ServicesSection = () => {
  const [selected, setSelected] = useState<"India" | "UAE" | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={headingInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Specialized Expertise
            </motion.h2>
            <motion.p
              className="text-lg text-muted-blue"
              initial={{ opacity: 0, y: 12 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            >
              {selected
                ? `Showing services for ${regionInfo[selected].label}`
                : "Select a region to explore our tailored advisory frameworks."}
            </motion.p>
            {/* Animated underline */}
            <motion.div
              className="mx-auto mt-4 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#00C2A8] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={headingInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "120px" }}
            />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {/* Region selection cards */}
          {!selected && (
            <div ref={cardsRef}>
            <motion.div
              key="region-cards"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
            >
              {(["India", "UAE"] as const).map((r, i) => (
                <Link
                  key={r}
                  to={r === "India" ? "/services/india" : "/services/uae"}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, x: r === "India" ? -80 : 80, scale: 0.95 }}
                    animate={cardsInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.75,
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="relative p-10 rounded-3xl border-2 border-primary/10 hover:border-[#00C2A8]/40 hover:shadow-xl transition-all cursor-pointer group flex flex-col overflow-hidden min-h-[360px]"
                  >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/${r === "India" ? "india1.png" : "uae.jpg"}')`,
                    }}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/15 group-hover:from-black/25 group-hover:via-black/15 group-hover:to-black/10 transition-all" />

                  {/* Shimmer sweep on entry */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none z-10"
                    initial={{ x: "-100%", opacity: 0.6 }}
                    animate={cardsInView ? { x: "150%", opacity: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <motion.h3
                        className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-6"
                        initial={{ opacity: 0, y: 16 }}
                        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.35 + i * 0.12, ease: "easeOut" }}
                      >
                        {regionInfo[r].label}
                      </motion.h3>
                      <motion.p
                        className="text-base text-white/90 leading-relaxed mb-1 drop-shadow-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.45 + i * 0.12, ease: "easeOut" }}
                      >
                        {regionInfo[r].tagline}
                      </motion.p>
                      <motion.p
                        className="text-sm text-white/80 drop-shadow-md"
                        initial={{ opacity: 0, y: 8 }}
                        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.52 + i * 0.12, ease: "easeOut" }}
                      >
                        {regionInfo[r].summary}
                      </motion.p>
                    </div>
                    <motion.div
                      className="flex items-start mt-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.12, ease: "easeOut" }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-full text-base font-bold group-hover:bg-[#00C2A8] group-hover:text-white transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                      >
                        Show More Details <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
                </Link>
              ))}
            </motion.div>
            </div>
          )}

          {/* Service grid after region selected */}          {selected && (
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
                      {r === "India" ? "🇮🇳" : "🇦🇪"} {r}
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
