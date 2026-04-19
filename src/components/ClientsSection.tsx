import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Building2, Rocket, TrendingUp, Users, Target, Eye, BarChart3 } from "lucide-react";
import { useRef, useEffect, useState, useCallback } from "react";
import ScrollParticles from "./ScrollParticles";

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
      <span className="text-4xl md:text-5xl font-extrabold text-[#09285A]" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
        {count}{suffix}
      </span>
      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mt-1">{label}</span>
    </motion.div>
  );
};


const FloatingOrb = ({ size, top, left, delay, duration }: { size: number; top: string; left: string; delay: number; duration: number }) => (
  <motion.div
    className="pointer-events-none absolute rounded-full"
    style={{ width: size, height: size, top, left, background: "radial-gradient(circle,rgba(94,228,207,0.16) 0%,rgba(45,212,191,0.04) 60%,transparent 100%)" }}
    animate={{ y: [0, 50, 100, 60, 0], x: [0, 15, -10, 20, 0], scale: [1, 1.1, 0.95, 1.05, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ── Animated Blobs for "Who We Work With" section ── */
const AnimatedBlob = ({
  color, size, x, y, duration, delay,
}: { color: string; size: number; x: string; y: string; duration: number; delay: number }) => (
  <motion.div
    className="pointer-events-none absolute rounded-full blur-3xl"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: color,
      opacity: 0.18,
    }}
    animate={{
      x: [0, 40, -30, 20, -10, 0],
      y: [0, -30, 20, -40, 15, 0],
      scale: [1, 1.15, 0.9, 1.1, 0.95, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* ── 3D Tilt Card ── */
const ease = [0.19, 1, 0.22, 1] as const;

const clientCards = [
  {
    Icon: Rocket,
    label: "Startups",
    desc: "Early-stage companies needing financial structure and clarity to grow fast.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.35)",
    blobColor: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(6,182,212,0.15) 60%, transparent 80%)",
    accentColor: "#3B82F6",
    sweepColor: "rgba(147,210,255,0.18)",
  },
  {
    Icon: Building2,
    label: "SMEs",
    desc: "Established businesses scaling their operations with confidence.",
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgba(168,85,247,0.35)",
    blobColor: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(236,72,153,0.15) 60%, transparent 80%)",
    accentColor: "#A855F7",
    sweepColor: "rgba(230,180,255,0.18)",
  },
  {
    Icon: TrendingUp,
    label: "Growing Businesses",
    desc: "Companies expanding across borders and entering new markets.",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.35)",
    blobColor: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(20,184,166,0.15) 60%, transparent 80%)",
    accentColor: "#10B981",
    sweepColor: "rgba(150,255,220,0.18)",
  },
];

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

interface TiltCardProps {
  card: typeof clientCards[0];
  index: number;
  sectionInView: boolean;
}

const TiltCard = ({ card, index, sectionInView }: TiltCardProps) => {
  const isMobile = useMobile();
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springConfig = { stiffness: 200, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateX.set(-dy * 12);
    rotateY.set(dx * 12);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  }, [isMobile, rotateX, rotateY, glowX, glowY]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
    setIsHovered(false);
  }, [rotateX, rotateY, glowX, glowY]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          rotateX: isMobile ? 0 : springRotateX,
          rotateY: isMobile ? 0 : springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={isHovered ? { y: -10 } : { y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl overflow-hidden cursor-pointer"
        css-var-glow-color={card.glowColor}
      >
        {/* Card background */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-500"
          style={{
            background: "#ffffff",
            border: isHovered
              ? `2px solid ${card.accentColor}55`
              : "2px solid #cbd5e1",
            boxShadow: isHovered
              ? `0 20px 60px -8px ${card.glowColor}, 0 0 0 1px ${card.accentColor}30, inset 0 1px 0 rgba(255,255,255,0.8)`
              : "0 2px 20px rgba(9,40,90,0.06)",
          }}
        />

        {/* Gradient glow spotlight on hover */}
        {isHovered && !isMobile && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: `radial-gradient(circle 200px at ${glowX.get()}% ${glowY.get()}%, ${card.sweepColor}, transparent 70%)`,
            }}
          />
        )}

        {/* Gradient sweep on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ x: "-100%", opacity: 0 }}
          animate={isHovered ? { x: "100%", opacity: 1 } : { x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${card.sweepColor} 50%, transparent 60%)`,
          }}
        />

        {/* Ripple effects */}
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: "translate(-50%, -50%)",
              background: `${card.accentColor}30`,
            }}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 300, height: 300, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        ))}

        {/* Card content */}
        <div className="relative z-10 p-8">
          {/* Floating triangle decoration */}
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{
                x: [-4, 4, -4],
                y: [0, -4, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderBottom: `9px solid ${card.accentColor}`,
                opacity: isHovered ? 0.9 : 0.45,
                filter: isHovered ? `drop-shadow(0 0 6px ${card.accentColor})` : "none",
                transition: "opacity 0.3s, filter 0.3s",
              }}
            />
          </div>

          {/* Floating dot */}
          <motion.div
            className="absolute bottom-6 right-6 rounded-full"
            style={{
              width: 6,
              height: 6,
              background: card.accentColor,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
          />

          {/* Icon with 3D pop effect */}
          <motion.div
            className="mb-6"
            animate={isHovered ? { scale: 1.12, y: -4 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} p-[3px] shadow-md`}
              style={{
                boxShadow: isHovered ? `0 8px 24px ${card.glowColor}` : undefined,
                transition: "box-shadow 0.3s",
              }}
            >
              <div className="w-full h-full rounded-[13px] bg-white flex items-center justify-center">
                <card.Icon
                  className="w-8 h-8"
                  style={{ color: card.accentColor }}
                  strokeWidth={2}
                />
              </div>
            </div>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold mb-3 transition-colors duration-300"
            style={{ color: isHovered ? card.accentColor : "#09285A" }}
          >
            {card.label}
          </motion.h3>

          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {card.desc}
          </p>

          {/* Animated bottom bar */}
          <motion.div
            className="h-0.5 rounded-full mt-4"
            style={{ background: `linear-gradient(90deg, ${card.accentColor}, transparent)` }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Bottom accent bar (always present, intensifies on hover) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${card.accentColor}, transparent)`,
          }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

/* ── Parallax wrapper ── */
const ParallaxSection = ({ children, offset = 30 }: { children: React.ReactNode; offset?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

/* ── Who We Work With Section (upgraded) ── */
const WhoWeWorkWith = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="relative z-10 py-28 px-6 overflow-hidden" style={{ background: "#ffffff" }}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatedBlob color="radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)" size={500} x="-8%" y="-10%" duration={14} delay={0} />
        <AnimatedBlob color="radial-gradient(circle, rgba(168,85,247,0.28) 0%, transparent 70%)" size={400} x="60%" y="20%" duration={18} delay={2} />
        <AnimatedBlob color="radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)" size={350} x="30%" y="55%" duration={12} delay={4} />
        <AnimatedBlob color="radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)" size={280} x="80%" y="70%" duration={16} delay={1} />
        <AnimatedBlob color="radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)" size={320} x="10%" y="65%" duration={20} delay={3} />
        {/* Grid noise texture */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(circle, #09285A 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <ParallaxSection offset={15}>
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
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
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
        </ParallaxSection>

        {/* Cards grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {clientCards.map((card, i) => (
            <TiltCard key={card.label} card={card} index={i} sectionInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── rest of ClientsSection ─────────────────────────── */

const whyItems = [
  { Icon: Users, title: "Founder-Led", desc: "You work directly with the founders — not a junior associate. Every insight, every strategy, every call comes from senior-level expertise with a vested interest in your growth." },
  { Icon: Target, title: "Small Business Focused", desc: "We've designed our entire advisory framework for growing SMEs and startups — not Fortune 500 companies. Agile, relevant, and always aligned with what actually matters to your business." },
  { Icon: Eye, title: "Clarity Over Complexity", desc: "Finance can be overwhelming. We strip away the jargon and give you clear, actionable answers. No fluff, no confusion — just the information you need to make confident decisions." },
  { Icon: BarChart3, title: "Insight-Driven", desc: "Every recommendation is grounded in real data and deep analytical thinking. We don't guess — we measure, model, and advise with precision so your business always moves forward with confidence." },
];

const skillColors: Record<string, { gradient: string; text: string; border: string }> = {
  "FP&A":                { gradient: "linear-gradient(135deg, rgba(45,212,191,0.15), rgba(14,165,233,0.1))",  text: "#0e7490", border: "rgba(45,212,191,0.35)" },
  "Valuation":           { gradient: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.1))",  text: "#6d28d9", border: "rgba(139,92,246,0.3)"  },
  "Virtual CFO":         { gradient: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(45,212,191,0.1))",  text: "#047857", border: "rgba(16,185,129,0.3)"  },
  "India & UK Taxation": { gradient: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(251,191,36,0.1))",  text: "#b45309", border: "rgba(249,115,22,0.3)"  },
  "Internal Audit":      { gradient: "linear-gradient(135deg, rgba(239,68,68,0.12),  rgba(249,115,22,0.1))",  text: "#b91c1c", border: "rgba(239,68,68,0.3)"   },
  "Compliance Advisory": { gradient: "linear-gradient(135deg, rgba(45,212,191,0.15), rgba(99,102,241,0.1))",  text: "#0e7490", border: "rgba(45,212,191,0.35)" },
  "IFRS":                { gradient: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(14,165,233,0.1))",  text: "#4338ca", border: "rgba(99,102,241,0.35)" },
  "Stock & Process Audits": { gradient: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(45,212,191,0.1))", text: "#047857", border: "rgba(16,185,129,0.3)" },
};

const founders = [
  { name: "Zaid Shaikh", role: "Co-Founder · Virtual CFO & Finance Advisory", exp: ["FP&A", "Valuation", "Virtual CFO", "India & UK Taxation"], desc: "Strategic, insight-driven, and focused on moving the needle for high-growth founders.", img: "/zaid.png" },
  { name: "Samee Shaikh", role: "Business Development · Compliance & UAE Advisory", exp: ["Internal Audit", "Compliance Advisory", "IFRS", "Stock & Process Audits"], desc: "Compliance-focused, detail-oriented, and trust-led — ensuring global operations remain bulletproof.", img: "/samee.png" },
];

const ClientsSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { once: false, margin: "-100px" });
  const foundersRef = useRef<HTMLDivElement>(null);
  const foundersInView = useInView(foundersRef, { once: true, margin: "-80px" });
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style>{`
        .ss-all-white { background-color: #ffffff !important; }
      `}</style>

      <div className="relative overflow-hidden ss-all-white" ref={sectionRef}>
        <ScrollParticles containerRef={sectionRef} />
        <FloatingOrb size={340} top="2%" left="58%" delay={0} duration={13} />
        <FloatingOrb size={200} top="28%" left="3%" delay={2.5} duration={10} />
        <FloatingOrb size={160} top="55%" left="82%" delay={1.2} duration={15} />
        <FloatingOrb size={110} top="75%" left="38%" delay={3.5} duration={9} />

        {/* ══ WHO WE WORK WITH (UPGRADED) ══ */}
        <WhoWeWorkWith />

        {/* ══ ABOUT US ══ */}
        <section ref={aboutRef} className="relative z-10 py-28 px-6 ss-all-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -56, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease }}
                className="relative"
              >
                <motion.div
                  animate={aboutInView ? { x: [0, 4, -3, 5, -2, 3, 0], y: [0, -3, 2, -4, 3, -2, 0], rotate: [0, 0.5, -0.3, 0.4, -0.5, 0.2, 0] } : {}}
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
                      className={`inline-block mr-[0.28em] text-4xl md:text-5xl font-bold ${["We", "are", "strategists."].includes(word) ? "text-[#00C2A8]" : "text-[#09285A]"}`}
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

        {/* ══ WHY SCALESIGHT ══ */}
        <section className="relative z-10 py-28 px-6 ss-all-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
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

            <div className="space-y-6">
              {whyItems.map((item, i) => {
                const fromRight = i % 2 === 0;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: fromRight ? 120 : -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -3, transition: { duration: 0.25 } }}
                    className="group relative"
                  >
                    {/* Animated gradient border using pseudo-element trick */}
                    <div className="relative rounded-2xl p-[1.5px] overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, rgba(45,212,191,0.6) 0%, rgba(99,102,241,0.4) 40%, rgba(14,165,233,0.5) 70%, rgba(45,212,191,0.6) 100%)",
                      }}
                    >
                      {/* Shimmer sweep animation on the border */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.9) 50%, transparent 80%)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.6 }}
                      />

                      {/* White card inside */}
                      <div className="relative bg-white rounded-[14px] flex items-start gap-6 p-6 overflow-hidden">
                        {/* Subtle inner glow on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background: fromRight
                              ? "linear-gradient(135deg, rgba(45,212,191,0.04) 0%, transparent 60%)"
                              : "linear-gradient(225deg, rgba(99,102,241,0.04) 0%, transparent 60%)"
                          }}
                        />

                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.12, rotate: fromRight ? 8 : -8 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, rgba(45,212,191,0.1), rgba(99,102,241,0.08))",
                            border: "1px solid rgba(45,212,191,0.25)"
                          }}
                        >
                          <item.Icon className="w-7 h-7 text-[#09285A]" strokeWidth={1.8} />
                        </motion.div>

                        {/* Text */}
                        <div className="flex-1 pt-0.5 relative z-10">
                          <h3 className="text-xl font-bold text-[#09285A] mb-1.5 group-hover:text-[#00C2A8] transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>

                        {/* Number watermark */}
                        <span className="absolute top-3 right-5 text-5xl font-bold select-none pointer-events-none text-gray-50 group-hover:text-[#00C2A8]/8 transition-colors duration-500">
                          0{i + 1}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ FOUNDERS ══ */}
        <section ref={foundersRef} className="relative z-10 py-28 px-6 ss-all-white">
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
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.22, duration: 0.95, ease }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-8">
                    <motion.div
                      className="relative overflow-hidden rounded-2xl w-64 h-80 shadow-lg bg-white"
                      animate={foundersInView ? { y: [0, -7, 0, -5, 0], rotate: [0, 0.3, -0.2, 0.4, 0] } : {}}
                      transition={{ duration: 7 + i * 1.5, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <img src={f.img} alt={f.name} className="object-cover object-top w-full h-full"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09285A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    <motion.div
                      animate={foundersInView ? { opacity: [0.3, 0.7, 0.3] } : {}}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 rounded-full blur-xl"
                      style={{ background: "#00C2A840" }}
                    />
                  </div>

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

                  <div className="flex flex-wrap gap-2 justify-center">
                    {f.exp.map((tag, j) => {
                      const sc = skillColors[tag] ?? { gradient: "linear-gradient(135deg, rgba(45,212,191,0.1), rgba(99,102,241,0.08))", text: "#000000", border: "rgba(45,212,191,0.3)" };
                      return (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.85, y: 8 }}
                          whileInView={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{
                            opacity: { delay: i * 0.22 + 0.85 + j * 0.08, duration: 0.4 },
                            scale:   { delay: i * 0.22 + 0.85 + j * 0.08, duration: 0.4 },
                            y: {
                              delay: i * 0.22 + 0.85 + j * 0.15,
                              duration: 1.2,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                            }
                          }}
                          className="px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-default"
                          style={{
                            background: sc.gradient,
                            color: "#000000",
                            border: `1px solid ${sc.border}`,
                          }}
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

        {/* ══ ZOHO PARTNERSHIP ══ */}
        <section className="relative z-10 py-24 px-6 ss-all-white" style={{ borderTop: "1px solid #f1f5f9" }}>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8, ease }}
              whileHover={{ scale: 1.06 }}
              className="flex items-center justify-center gap-5 mb-10"
            >
              <img src="/zoho.png" alt="Zoho" className="h-20 md:h-24 object-contain" />
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
    </>
  );
};

export default ClientsSection;