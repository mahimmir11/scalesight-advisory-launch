import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FileText, ShieldCheck, TrendingUp, Briefcase,
  CheckCircle, Clock, Eye, Users, ArrowRight
} from "lucide-react";
import officeTeamImg from "../assets/office-team.png";

const ease = [0.19, 1, 0.22, 1] as const;

const fromLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -56, filter: "blur(6px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.85, delay, ease },
});
const fromRight = (delay = 0) => ({
  initial: { opacity: 0, x: 56, filter: "blur(6px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.85, delay, ease },
});
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease },
});

const accordionItems = [
  { num: "01", title: "Taxation", desc: "Strategic tax planning, GST compliance, and end-to-end filing for India and UAE businesses. We ensure you're always ahead of deadlines and regulations." },
  { num: "02", title: "Audit & Assurance", desc: "Rigorous internal and statutory audit support. We review processes, identify risks, and deliver transparent assurance reports." },
  { num: "03", title: "Compliance Management", desc: "Stay ahead of every regulatory requirement across India and UAE. From VAT to corporate tax — we handle it all proactively." },
  { num: "04", title: "Financial Advisory", desc: "Virtual CFO services, FP&A, budgeting, and strategic financial guidance. Senior expertise without the full-time overhead." },
];

const trust = [
  { Icon: CheckCircle, title: "Accuracy",         desc: "Every number verified. Zero tolerance for errors.", side: "left"  },
  { Icon: Eye,         title: "Transparency",      desc: "Clear pricing, clear scope — no surprises ever.",  side: "right" },
  { Icon: Clock,       title: "Timely Compliance", desc: "Deadlines are non-negotiable. Always on time.",    side: "left"  },
  { Icon: Users,       title: "Expert Guidance",   desc: "Founder-led team. Senior expertise, always.",      side: "right" },
];

const steps = [
  { num: "01", title: "Understand",  desc: "Deep-dive into your business, goals, and pain points." },
  { num: "02", title: "Strategize",  desc: "Design a tailored financial & compliance roadmap." },
  { num: "03", title: "Execute",     desc: "Precision delivery — filings, reports, advisory." },
  { num: "04", title: "Optimize",    desc: "Continuous improvement as your business scales." },
];

/* ── SECTION 1: Hero — dark navy like ContactSection, wave at bottom ── */
const OpeningSection = () => (
  <section className="relative overflow-hidden bg-[#0B1F3A] px-6 pt-20 pb-0">
    {/* Ambient glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-[#00C2A8]/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute top-0 right-1/4 w-[400px] h-[350px] bg-[#6C63FF]/8 rounded-full blur-[100px] pointer-events-none" />
    {/* Dot grid */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

    <div className="relative z-10 max-w-5xl mx-auto text-center pb-24">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#00C2A8] mb-6"
      >
        About Us
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, x: -70, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.95, delay: 0.1, ease }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
        style={{ letterSpacing: "-0.03em" }}
      >
        Precision.{" "}
        <span className="relative inline-block">
          <span className="text-[#00C2A8]">Compliance.</span>
          <motion.span
            className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#00C2A8]/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease }}
          />
        </span>{" "}
        <span className="text-[#6C63FF]">Growth.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease }}
        className="text-white/55 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12"
      >
        Your financial clarity partner — built for businesses that demand accuracy, speed, and strategic insight.
      </motion.p>

      {/* Stat row — like ContactSection info blocks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease }}
        className="flex flex-wrap justify-center gap-4 mb-14"
      >
        {[
          { v: "100+", l: "Clients Served" },
          { v: "5+",   l: "Years Experience" },
          { v: "500+", l: "Filings Completed" },
        ].map((s) => (
          <div key={s.l} className="flex items-center gap-3 bg-white/8 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-[#00C2A8]/20 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#00C2A8]" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-base leading-none">{s.v}</p>
              <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">{s.l}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#00C2A8]/60 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>

    {/* Wave divider */}
    <div className="relative z-10 -mb-px">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
      </svg>
    </div>
  </section>
);

/* ── SECTION 2: Who We Are — 98% badge removed ─────────── */
const WhoWeAre = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <motion.p {...fromLeft(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00C2A8] mb-4">
            Who We Are
          </motion.p>
          <motion.h2 {...fromLeft(0.1)}
            className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-6"
            style={{ letterSpacing: "-0.025em" }}>
            More than accountants.<br />
            <span className="text-[#6C63FF]">We are strategists.</span>
          </motion.h2>
          <motion.p {...fromLeft(0.2)} className="text-gray-500 text-base leading-relaxed mb-3">
            We combine deep financial expertise with modern tools to deliver clarity, compliance, and measurable growth.
          </motion.p>
          <motion.p {...fromLeft(0.25)} className="text-gray-500 text-base leading-relaxed mb-10">
            Founder-led. Client-first. Built for businesses across India &amp; UAE that refuse to settle for ordinary advisory.
          </motion.p>
          <motion.div {...fromLeft(0.35)} className="flex flex-wrap gap-3">
            {[["100+","Clients"],["5+","Years"],["500+","Filings"]].map(([v,l]) => (
              <div key={l} className="flex items-center gap-2 bg-[#F8FAFC] border border-gray-100 px-4 py-2.5 rounded-full">
                <span className="text-lg font-bold text-[#0B1F3A]">{v}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div {...fromRight(0.1)} className="relative">
          <motion.div 
            style={{ y }} 
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            animate={{
              rotate: [0, -1, 1, -0.5, 0.5, 0],
              y: [0, -5, 5, -3, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={officeTeamImg} alt="ScaleSight team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 to-transparent" />
          </motion.div>
          {/* Only bottom-left badge — 98% removed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease }}
            className="absolute -bottom-6 -left-6 bg-[#0B1F3A] text-white px-5 py-4 rounded-2xl shadow-2xl border border-white/10"
          >
            <p className="text-2xl font-bold text-[#00C2A8]">100+</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">Clients Served</p>
          </motion.div>
          <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-[#00C2A8]/15 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

/* ── SECTION 3: Accordion (Mobile-friendly with auto-open on scroll) ── */
const AccordionExpertise = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [autoOpened, setAutoOpened] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-open items one by one when scrolled into view
  useEffect(() => {
    const observers = accordionItems.map((_, i) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !autoOpened.has(i)) {
              // Auto-open this item after a delay
              setTimeout(() => {
                setOpenIndex(i);
                setAutoOpened(prev => new Set(prev).add(i));
                
                // Auto-close after 3 seconds
                setTimeout(() => {
                  setOpenIndex(prev => prev === i ? null : prev);
                }, 3000);
              }, i * 400); // Stagger the auto-open
            }
          });
        },
        { threshold: 0.5 }
      );

      if (itemRefs.current[i]) {
        observer.observe(itemRefs.current[i]!);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [autoOpened]);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-[#F8FAFC] relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#00C2A8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#6C63FF]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div {...fadeUp(0)} className="mb-14">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00C2A8] mb-3"
          >
            Core Expertise
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl md:text-5xl font-bold text-[#0B1F3A]" 
            style={{ letterSpacing: "-0.025em" }}
          >
            What We Excel At
          </motion.h2>
        </motion.div>

        <div className="space-y-3">
          {accordionItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.num}
                ref={el => itemRefs.current[i] = el}
                initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease }}
                className="group cursor-pointer relative"
                onClick={() => toggleItem(i)}
              >
                {/* Background card with gradient border effect */}
                <motion.div
                  className="relative bg-white rounded-2xl overflow-hidden border transition-all duration-500"
                  style={{
                    borderColor: isOpen ? "#00C2A8" : "#E5E7EB",
                    boxShadow: isOpen 
                      ? "0 20px 40px rgba(0, 194, 168, 0.15), 0 0 0 1px rgba(0, 194, 168, 0.1)" 
                      : "0 2px 8px rgba(0, 0, 0, 0.04)"
                  }}
                  animate={{
                    scale: isOpen ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Gradient overlay when open */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 194, 168, 0.03) 0%, rgba(108, 99, 255, 0.02) 100%)"
                    }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    {/* Always visible row */}
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-6 flex-1">
                        {/* Number badge */}
                        <motion.div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
                          style={{
                            background: isOpen 
                              ? "linear-gradient(135deg, #00C2A8 0%, #0ea5e9 100%)" 
                              : "#F8FAFC"
                          }}
                          animate={{
                            rotate: isOpen ? [0, -5, 5, 0] : 0,
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="text-sm font-bold relative z-10"
                            style={{ 
                              color: isOpen ? "#FFFFFF" : "#9CA3AF",
                              fontVariantNumeric: "tabular-nums" 
                            }}
                            animate={{
                              scale: isOpen ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.num}
                          </motion.span>
                          
                          {/* Animated background circle */}
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{
                              background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)"
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                              scale: isOpen ? 1.5 : 0,
                              opacity: isOpen ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                          className="text-xl md:text-2xl font-bold transition-colors duration-300"
                          style={{ color: isOpen ? "#00C2A8" : "#0B1F3A" }}
                          animate={{
                            x: isOpen ? 8 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          {item.title}
                        </motion.h3>
                      </div>

                      {/* Arrow icon */}
                      <motion.div
                        className="shrink-0"
                        animate={{ 
                          rotate: isOpen ? 90 : 0,
                          scale: isOpen ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        style={{ color: isOpen ? "#00C2A8" : "#9CA3AF" }}
                      >
                        <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                      </motion.div>
                    </div>

                    {/* Expandable description */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="pl-0 md:pl-[calc(3rem+1.5rem)] pr-0 md:pr-12"
                          >
                            <motion.div
                              className="h-px w-full bg-gradient-to-r from-[#00C2A8]/30 via-[#00C2A8]/10 to-transparent mb-4"
                              initial={{ scaleX: 0, originX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            />
                            <motion.p 
                              className="text-gray-600 text-base leading-relaxed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              {item.desc}
                            </motion.p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Shine effect when opened */}
                  {isOpen && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                      }}
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── SECTION 4: Process ─────────────────────────────────── */
const ProcessSection = () => (
  <section className="py-28 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <motion.div {...fadeUp(0)} className="text-center mb-20">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00C2A8] mb-3">How We Work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]" style={{ letterSpacing: "-0.025em" }}>Our Process</h2>
      </motion.div>
      <div className="relative">
        <motion.div
          className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00C2A8] via-[#6C63FF] to-[#00C2A8]"
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
        />
        <div className="space-y-12">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={step.num}
                initial={{ opacity: 0, x: isLeft ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.75, ease }}
                className={`relative flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#0B1F3A] border-4 border-[#00C2A8] flex items-center justify-center shrink-0 shadow-lg shadow-[#00C2A8]/20">
                  <span className="text-[#00C2A8] font-bold text-sm">{step.num}</span>
                </div>
                <div className={`flex-1 bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#00C2A8]/30 transition-all duration-300 ${isLeft ? "md:mr-[calc(50%-28px)]" : "md:ml-[calc(50%-28px)]"}`}>
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-1">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

/* ── SECTION 5: Why Trust Us ────────────────────────────── */
const WhyTrustUs = () => (
  <section className="py-28 px-6 bg-[#F8FAFC]">
    <div className="max-w-5xl mx-auto">
      <motion.div {...fadeUp(0)} className="text-center mb-16">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00C2A8] mb-3">Why Trust Us</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]" style={{ letterSpacing: "-0.025em" }}>
          Four Pillars of Excellence
        </h2>
      </motion.div>
      <div className="space-y-5">
        {trust.map((item, i) => {
          const isLeft = item.side === "left";
          return (
            <motion.div key={item.title}
              initial={{ opacity: 0, x: isLeft ? -56 : 56, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.75, ease }}
              className={`group flex items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#00C2A8]/40 hover:shadow-xl hover:shadow-[#00C2A8]/5 transition-all duration-300 ${!isLeft ? "flex-row-reverse" : ""}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <item.Icon className="w-6 h-6 text-[#00C2A8]" />
              </div>
              <div className={`flex-1 ${!isLeft ? "text-right" : ""}`}>
                <h4 className="text-xl font-bold text-[#0B1F3A] mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
              <span className="text-5xl font-bold text-gray-50 select-none shrink-0 group-hover:text-[#00C2A8]/10 transition-colors">
                0{i + 1}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ── SECTION 6: Closing ─────────────────────────────────── */
const ClosingStatement = () => (
  <section className="py-28 px-6 bg-white relative overflow-hidden border-t border-gray-100">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#00C2A8]/6 rounded-full blur-[100px] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease }}
      className="relative max-w-4xl mx-auto text-center"
    >
      <motion.div {...fadeUp(0)} className="text-[100px] leading-none text-[#00C2A8]/20 font-serif mb-[-30px]">"</motion.div>
      <motion.p {...fadeUp(0.15)}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1F3A] leading-tight mb-10"
        style={{ letterSpacing: "-0.02em" }}
      >
        We don't just manage finances —{" "}
        <span className="relative inline-block">
          <span className="text-[#00C2A8]">we build confidence</span>
          <motion.span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#00C2A8]/50"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, ease }} />
        </span>
        {" "}and growth.
      </motion.p>
      <motion.a href="/contact" {...fadeUp(0.35)}
        className="inline-flex items-center gap-2 bg-[#0B1F3A] text-white px-9 py-4 rounded-full font-bold text-sm hover:bg-[#00C2A8] hover:text-[#0B1F3A] transition-all shadow-lg"
      >
        Book Free Consultation →
      </motion.a>
    </motion.div>
  </section>
);

/* ── ROOT ───────────────────────────────────────────────── */
const AboutSection = () => (
  <>
    <OpeningSection />
    <WhoWeAre />
    <AccordionExpertise />
    <ProcessSection />
    <WhyTrustUs />
    <ClosingStatement />
  </>
);

export default AboutSection;
