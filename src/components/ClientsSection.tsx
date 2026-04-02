import { motion, useInView } from "framer-motion";
import { Building2, Rocket, TrendingUp, Users, Target, Eye, BarChart3 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

/* ── Count-up hook ── */
function useCountUp(target: number, inView: boolean, duration = 900) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

const StatItem = ({
  value, suffix, label, delay,
}: { value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, inView, 900);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="flex flex-col items-center"
    >
      <span
        className="text-4xl md:text-5xl font-extrabold text-[#09285A]"
        style={{ fontFamily: "'Space Grotesk',sans-serif" }}
      >
        {count}{suffix}
      </span>
      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mt-1">{label}</span>
    </motion.div>
  );
};

/* ── Teal scroll lines ── */
const ScrollLine = ({ left, delay }: { left: string; delay: number }) => (
  <motion.div
    className="pointer-events-none absolute top-0 bottom-0 w-px"
    style={{
      left,
      background: "linear-gradient(to bottom,transparent,rgba(94,228,207,0.28),rgba(45,212,191,0.38),transparent)",
    }}
    animate={{ scaleY: [0, 1, 1, 0] }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ── Floating orb ── */
const FloatingOrb = ({
  size, top, left, delay, duration,
}: { size: number; top: string; left: string; delay: number; duration: number }) => (
  <motion.div
    className="pointer-events-none absolute rounded-full"
    style={{
      width: size, height: size, top, left,
      background: "radial-gradient(circle,rgba(94,228,207,0.16) 0%,rgba(45,212,191,0.04) 60%,transparent 100%)",
    }}
    animate={{ y: [0, 50, 100, 60, 0], x: [0, 15, -10, 20, 0], scale: [1, 1.1, 0.95, 1.05, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const ease = [0.19, 1, 0.22, 1] as const;

/* ── Why items with richer detail ── */
const whyItems = [
  {
    Icon: Users,
    title: "Founder-Led",
    desc: "You work directly with the founders — not a junior associate. Every insight, every strategy, every call comes from senior-level expertise with a vested interest in your growth.",
    color: "#000000",
    bg: "#F3F4F6",
  },
  {
    Icon: Target,
    title: "Small Business Focused",
    desc: "We've designed our entire advisory framework for growing SMEs and startups — not Fortune 500 companies. Agile, relevant, and always aligned with what actually matters to your business.",
    color: "#000000",
    bg: "#F3F4F6",
  },
  {
    Icon: Eye,
    title: "Clarity Over Complexity",
    desc: "Finance can be overwhelming. We strip away the jargon and give you clear, actionable answers. No fluff, no confusion — just the information you need to make confident decisions.",
    color: "#000000",
    bg: "#F3F4F6",
  },
  {
    Icon: BarChart3,
    title: "Insight-Driven",
    desc: "Every recommendation is grounded in real data and deep analytical thinking. We don't guess — we measure, model, and advise with precision so your business always moves forward with confidence.",
    color: "#000000",
    bg: "#F3F4F6",
  },
];

/* ── Skill tag colors - all black ── */
const skillColors: Record<string, { bg: string; text: string; border: string }> = {
  "FP&A":               { bg: "#FFFFFF", text: "#000000", border: "#E5E7EB" },
  "Valuation":          { bg: "#FFFFFF", text: "#000000", border: "#E5E7EB" },
  "Virtual CFO":        { bg: "#FFFFFF", text: "#000000", border: "#E5E7EB" },
  "India & UK Taxation":{ bg: "#FFFFFF", text: "#000000", border: "#E5E7EB" },
  "Internal Audit":     { bg: "#FFFFFF", text: "#000000", border: "#E5E7EB" },
  "Compliance Advisory":{ bg: "#FFFFFF", text: "#000000", border: "#E5E7EB" },
  "IFRS":               { bg: "#FFFFFF", text: "#000000", border: "#E5E7EB" },
  "Stock & Process Audits":{ bg: "#FFFFFF", text: "#000000", border: "#E5E7EB" },
};

const founders = [
  {
    name: "Zaid Shaikh",
    role: "Co-Founder · Virtual CFO & Finance Advisory",
    exp: ["FP&A", "Valuation", "Virtual CFO", "India & UK Taxation"],
    desc: "Strategic, insight-driven, and focused on moving the needle for high-growth founders.",
    img: "/src/assets/zaid.png",
  },
  {
    name: "Samee Shaikh",
    role: "Business Development · Compliance & UAE Advisory",
    exp: ["Internal Audit", "Compliance Advisory", "IFRS", "Stock & Process Audits"],
    desc: "Compliance-focused, detail-oriented, and trust-led — ensuring global operations remain bulletproof.",
    img: "/src/assets/samee.png",
  },
];

const ClientsSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { once: false, margin: "-100px" });
  const foundersRef = useRef<HTMLDivElement>(null);
  const foundersInView = useInView(foundersRef, { once: true, margin: "-80px" });

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Global scroll lines */}
      <ScrollLine left="8%" delay={0} />
      <ScrollLine left="25%" delay={1.4} />
      <ScrollLine left="50%" delay={0.7} />
      <ScrollLine left="74%" delay={2} />
      <ScrollLine left="92%" delay={0.4} />
      <FloatingOrb size={340} top="2%" left="58%" delay={0} duration={13} />
      <FloatingOrb size={200} top="28%" left="3%" delay={2.5} duration={10} />
      <FloatingOrb size={160} top="55%" left="82%" delay={1.2} duration={15} />
      <FloatingOrb size={110} top="75%" left="38%" delay={3.5} duration={9} />

      {/* ══════════════════════════════════════
          WHO WE WORK WITH
      ══════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="inline-block text-[11px] font-bold tracking-[0.35em] uppercase text-[#00C2A8] mb-4"
            >
              Our Clientele
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="text-5xl md:text-6xl font-bold text-[#09285A] leading-tight mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              Who We Work With
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="text-gray-500 text-lg max-w-2xl mx-auto"
            >
              We serve ambitious teams that demand clarity and results.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { 
                Icon: Rocket, 
                label: "Startups", 
                desc: "Early-stage companies needing financial structure and clarity to grow fast.",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                Icon: Building2, 
                label: "SMEs", 
                desc: "Established businesses scaling their operations with confidence.",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                Icon: TrendingUp, 
                label: "Growing Businesses", 
                desc: "Companies expanding across borders and entering new markets.",
                gradient: "from-emerald-500 to-teal-500"
              },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: i * 0.2, 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#00C2A8]/30 transition-all duration-500 overflow-hidden">
                  
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C2A8]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated shapes in top-right corner */}
                  <div className="absolute top-4 right-4">
                    {/* Moving triangle */}
                    <motion.div
                      animate={{
                        x: [-8, 8, -8],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderBottom: "10px solid #00C2A8",
                        opacity: 0.5,
                      }}
                    />
                  </div>
                  
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient} p-[2px] shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                        <s.Icon className="w-8 h-8 text-[#09285A] group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-[#09285A] mb-3 transition-colors duration-300">
                      {s.label}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00C2A8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating shadow effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[#00C2A8]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT US
      ══════════════════════════════════════ */}
      <section ref={aboutRef} className="relative z-10 py-28 px-6 bg-[#F8FAFC]">
        <ScrollLine left="15%" delay={0.6} />
        <ScrollLine left="85%" delay={1.8} />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Image — slow shake */}
            <motion.div
              initial={{ opacity: 0, x: -56, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="relative"
            >
              <motion.div
                animate={aboutInView ? {
                  x: [0, 4, -3, 5, -2, 3, 0],
                  y: [0, -3, 2, -4, 3, -2, 0],
                  rotate: [0, 0.5, -0.3, 0.4, -0.5, 0.2, 0],
                } : {}}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <img src="/why-partner.png" alt="About ScaleSight" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/30 to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease }}
                className="absolute -bottom-6 -right-6 bg-[#09285A] text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10"
              >
                <p className="text-2xl font-bold text-[#00C2A8]">100+</p>
                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">Clients Served</p>
              </motion.div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-[#00C2A8]/10 rounded-full blur-3xl" />
            </motion.div>

            {/* Text */}
            <div>
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="inline-block text-[11px] font-bold tracking-[0.35em] uppercase text-[#00C2A8] mb-5"
              >
                About Us
              </motion.span>

              <div className="mb-6 leading-tight">
                {"More than accountants. We are strategists.".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease }}
                    className={`inline-block mr-[0.28em] text-4xl md:text-5xl font-bold ${
                      ["We", "are", "strategists."].includes(word) ? "text-[#00C2A8]" : "text-[#09285A]"
                    }`}
                    style={{ letterSpacing: "-0.025em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease }}
                className="text-gray-500 text-base leading-relaxed mb-5"
              >
                At ScaleSight, we combine deep financial expertise with cutting-edge AI tools
                to deliver clarity, compliance, and measurable growth. We don't just crunch
                numbers — we translate them into actionable insights that fuel better decisions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8, ease }}
                className="text-gray-500 text-base leading-relaxed mb-10"
              >
                Founder-led. Client-first. Built for businesses across India & UAE that refuse
                to settle for ordinary advisory. Every engagement is built on trust,
                transparency, and a relentless focus on your success.
              </motion.p>

              <div className="flex gap-10 mb-10">
                <StatItem value={100} suffix="+" label="Clients" delay={0.1} />
                <StatItem value={5} suffix="+" label="Years" delay={0.25} />
                <StatItem value={500} suffix="+" label="Filings" delay={0.4} />
              </div>

              <motion.a
                href="/about"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6, ease }}
                className="inline-flex items-center gap-2 bg-[#09285A] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#00C2A8] hover:text-[#09285A] transition-all shadow-md"
              >
                Learn More About Us →
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY SCALESIGHT — inline, one by one
      ══════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-6 bg-white">
        <ScrollLine left="50%" delay={1} />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.35em] uppercase text-[#00C2A8] mb-4">Our Edge</span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#09285A]" style={{ letterSpacing: "-0.025em" }}>
              Why ScaleSight
            </h2>
            <p className="mt-4 text-gray-500 text-lg">What sets us apart from traditional accounting firms.</p>
          </motion.div>

          {/* Items — one by one, alternating slide */}
          <div className="space-y-14">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.16, duration: 0.85, ease }}
                className="flex items-start gap-8 group"
              >
                {/* Icon only - no number */}
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
                    style={{ background: item.bg }}
                  >
                    <item.Icon className="w-8 h-8" style={{ color: item.color }} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Text block */}
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-bold text-[#09285A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOUNDERS — white bg, colored skill tags
      ══════════════════════════════════════ */}
      <section ref={foundersRef} className="relative z-10 py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-center mb-20"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.35em] uppercase text-[#00C2A8] mb-4">The Team</span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#09285A]" style={{ letterSpacing: "-0.025em" }}>
              Founder-Led Precision
            </h2>
            <p className="mt-4 text-gray-500 text-lg">Direct access to senior expertise. No junior hand-offs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.22, duration: 0.95, ease }}
                className="flex flex-col items-center text-center group"
              >
                {/* Image — white bg, slow float + subtle rotate */}
                <div className="relative mb-8">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl w-64 h-80 shadow-lg bg-white"
                    animate={foundersInView ? {
                      y: [0, -7, 0, -5, 0],
                      rotate: [0, 0.3, -0.2, 0.4, 0],
                    } : {}}
                    transition={{
                      duration: 7 + i * 1.5,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={f.img}
                      alt={f.name}
                      className="object-cover object-top w-full h-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {/* Subtle teal shimmer on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09285A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  {/* Glow beneath image */}
                  <motion.div
                    animate={foundersInView ? { opacity: [0.3, 0.7, 0.3] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 rounded-full blur-xl"
                    style={{ background: "#00C2A840" }}
                  />
                </div>

                {/* Name — wide-to-tight letter spacing blink */}
                <motion.h3
                  initial={{ opacity: 0, letterSpacing: "0.3em" }}
                  whileInView={{ opacity: 1, letterSpacing: "-0.01em" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.22 + 0.4, duration: 0.9 }}
                  className="text-2xl font-extrabold text-[#09285A] mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {f.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.22 + 0.55, duration: 0.6 }}
                  className="text-[#00C2A8] font-bold text-xs mb-4 uppercase tracking-wider"
                >
                  {f.role}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.22 + 0.7, duration: 0.7 }}
                  className="text-gray-500 text-sm mb-6 leading-relaxed max-w-xs"
                >
                  {f.desc}
                </motion.p>

                {/* Black skill tags — pop in staggered */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {f.exp.map((tag, j) => {
                    const style = skillColors[tag] ?? { bg: "#FFFFFF", text: "#000000", border: "#E5E7EB" };
                    return (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.6, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.22 + 0.85 + j * 0.08, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold border cursor-default transition-all"
                        style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
                      >
                        {tag}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ZOHO PARTNERSHIP
      ══════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-6 bg-[#F8FAFC] border-t border-gray-100">
        <ScrollLine left="33%" delay={0.9} />
        <ScrollLine left="67%" delay={2.2} />
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] font-bold tracking-[0.35em] uppercase text-gray-400 mb-4"
          >
            Official Partnership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            className="text-4xl md:text-5xl font-bold text-[#09285A] mb-10"
            style={{ letterSpacing: "-0.025em" }}
          >
            In <span className="italic font-serif text-[#085B63]">Partnership</span> with
          </motion.h2>

          {/* Zoho logo from /public/zoho.png + ZOHO text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8, ease }}
            whileHover={{ scale: 1.06 }}
            className="flex items-center justify-center gap-5 mb-10"
          >
            <img
              src="/zoho.png"
              alt="Zoho"
              className="h-20 md:h-24 object-contain"
            />
            
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            We proudly partner with Zoho to deliver powerful business tools, helping
            organizations streamline operations, manage customers, and scale efficiently.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default ClientsSection;