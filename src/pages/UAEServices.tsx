import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, ArrowRight, FileText, Shield, BarChart3, Search, Workflow, TrendingUp, Users, Award, Clock, Target, LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* ── Preloaded Video Component ── */
const PreloadedVideo = ({ src, style }: { src: string; style?: React.CSSProperties }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = src;
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {!videoReady && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0a1f2e 0%, #09285A 50%, #0a1f2e 100%)",
            backgroundSize: "200% 100%",
            animation: "uaeShimmer 1.5s ease-in-out infinite",
          }}
        />
      )}
      <video
        ref={videoRef}
        src={src}
        autoPlay loop muted playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        style={{ ...style, opacity: videoReady ? 1 : 0, transition: "opacity 0.4s ease" }}
      />
      <style>{`@keyframes uaeShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
    </div>
  );
};

type ServiceType = {
  title: string;
  desc: string;
  icon: LucideIcon;
  details: string[];
  benefits: string[];
  color: string;
  iconBg: string;
};

const services: ServiceType[] = [
  {
    title: "Accounting & Bookkeeping",
    desc: "Precision-led maintenance of your financial records.",
    icon: FileText,
    details: [
      "Daily transaction recording and reconciliation",
      "Chart of accounts setup and management",
      "Bank and credit card reconciliation",
      "Accounts payable and receivable management",
      "Monthly financial statements preparation",
      "VAT-compliant bookkeeping"
    ],
    benefits: ["99.9% accuracy", "Real-time updates", "Cloud access"],
    color: "from-blue-500 to-cyan-500",
    iconBg: "linear-gradient(135deg, #3b82f6, #06b6d4)"
  },
  {
    title: "Accounting & Bookkeeping",
    desc: "Precision-led maintenance of your financial records.",
    icon: FileText,
    details: [
      "Daily transaction recording and reconciliation",
      "Chart of accounts setup and management",
      "Bank and credit card reconciliation",
      "Accounts payable and receivable management",
      "Monthly financial statements preparation",
      "VAT-compliant bookkeeping"
    ],
    benefits: ["99.9% accuracy", "Real-time updates", "Cloud access"],
    color: "from-blue-500 to-cyan-500",
    iconBg: "linear-gradient(135deg, #3b82f6, #06b6d4)"
  },
  {
    title: "IFRS Reporting",
    desc: "International standard reporting for global transparency.",
    icon: BarChart3,
    details: [
      "IFRS-compliant financial statements",
      "Conversion from local GAAP to IFRS",
      "Revenue recognition under IFRS 15",
      "Lease accounting (IFRS 16)",
      "Financial instruments (IFRS 9)",
      "Consolidated financial statements"
    ],
    benefits: ["Global standards", "Investor confidence", "Audit-ready"],
    color: "from-purple-500 to-pink-500",
    iconBg: "linear-gradient(135deg, #a855f7, #ec4899)"
  },
  {
    title: "Internal Audit Support",
    desc: "Rigorous process reviews and risk mitigation.",
    icon: Search,
    details: [
      "Internal control evaluation and testing",
      "Risk assessment and management",
      "Operational audit and efficiency reviews",
      "Fraud detection and prevention",
      "Compliance audit procedures",
      "Audit report preparation and follow-up"
    ],
    benefits: ["Risk reduction", "Process improvement", "Fraud prevention"],
    color: "from-orange-500 to-red-500",
    iconBg: "linear-gradient(135deg, #f97316, #ef4444)"
  },
  {
    title: "Process Reviews",
    desc: "Streamlining operations for maximum efficiency.",
    icon: Workflow,
    details: [
      "Business process mapping and analysis",
      "Workflow optimization recommendations",
      "Cost reduction opportunities identification",
      "System integration and automation",
      "Performance metrics and KPI development",
      "Change management support"
    ],
    benefits: ["30% efficiency gain", "Cost savings", "Scalable systems"],
    color: "from-indigo-500 to-blue-500",
    iconBg: "linear-gradient(135deg, #6366f1, #3b82f6)"
  },
  {
    title: "Financial Advisory",
    desc: "Strategic financial planning for sustainable growth.",
    icon: TrendingUp,
    details: [
      "Business valuation and financial modeling",
      "Mergers and acquisitions advisory",
      "Capital structure optimization",
      "Cash flow management strategies",
      "Investment appraisal and feasibility studies",
      "Exit planning and succession advisory"
    ],
    benefits: ["Strategic insights", "Growth acceleration", "Value maximization"],
    color: "from-violet-500 to-purple-500",
    iconBg: "linear-gradient(135deg, #8b5cf6, #a855f7)"
  },
];

type WhyChooseUsType = {
  icon: LucideIcon;
  title: string;
  desc: string;
  iconBg: string;
};

const whyChooseUs: WhyChooseUsType[] = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Get your financial reports and compliance documents delivered on time, every time.",
    iconBg: "linear-gradient(135deg, #14b8a6, #0891b2)"
  },
  {
    icon: Shield,
    title: "100% Compliance",
    desc: "Stay ahead of regulatory changes with our proactive compliance monitoring.",
    iconBg: "linear-gradient(135deg, #14b8a6, #0891b2)"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Work with experienced professionals who understand your business needs.",
    iconBg: "linear-gradient(135deg, #14b8a6, #0891b2)"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "Join 100+ satisfied clients who trust us with their financial operations.",
    iconBg: "linear-gradient(135deg, #14b8a6, #0891b2)"
  }
];

const UAEServices = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], [0, -200]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
    <div ref={containerRef} className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-60 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <Navbar />

      {/* Hero Section — Similar to About page with video */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "95vh",
          paddingTop: "76px",
          background: "linear-gradient(135deg, #eaf4fb 0%, #e8f5f2 50%, #f0faf8 100%)",
          borderRadius: "0 0 32px 32px",
        }}
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(9,40,90,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Soft ambient blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,194,168,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(9,40,90,0.08) 0%, transparent 70%)" }} />

        {/* Main grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ minHeight: "calc(95vh - 76px)" }}>

          {/* LEFT — text */}
          <div className="flex flex-col justify-center py-12 lg:py-0">

            {/* "UAE SERVICES" label */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={animate ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.28em", textTransform: "uppercase" as const,
                color: "#00C2A8", marginBottom: "20px",
              }}
            >
              🇦🇪 UAE Services
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#09285A",
                margin: "0 0 20px 0",
              }}
            >
              Expert Financial
              <br />
              <span style={{ color: "#00C2A8" }}>Advisory</span>
              <br />
              for UAE
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(0.875rem, 1.05vw, 0.95rem)",
                color: "#4a5568",
                lineHeight: 1.75,
                maxWidth: "480px",
                margin: "0 0 36px 0",
                fontWeight: 400,
              }}
            >
              Navigate the UAE regulatory landscape with confidence — from accounting and compliance to IFRS reporting and internal audit support.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#uae-services-list"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold"
                style={{
                  background: "#09285A", color: "#ffffff",
                  fontFamily: "'Manrope', sans-serif",
                  boxShadow: "0 4px 18px rgba(9,40,90,0.25)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(9,40,90,0.35)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(9,40,90,0.25)";
                }}
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                style={{
                  background: "transparent", color: "#09285A",
                  border: "1.5px solid rgba(9,40,90,0.25)",
                  fontFamily: "'Manrope', sans-serif",
                  transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(9,40,90,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(9,40,90,0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(9,40,90,0.25)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Have a Talk
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Video card (similar to About page) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={animate ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center py-12 lg:py-0"
          >
            <div className="relative w-full max-w-[700px]">

              {/* Outer glow ring */}
              <div
                className="absolute inset-[-18px] rounded-[48px] pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(0,194,168,0.18) 0%, rgba(9,40,90,0.10) 100%)",
                  filter: "blur(2px)",
                }}
              />

              {/* Decorative circle behind video */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  width: "88%", height: "88%",
                  background: "radial-gradient(circle, rgba(0,194,168,0.13) 0%, rgba(9,40,90,0.06) 60%, transparent 100%)",
                }}
              />

              {/* Video card — looping, properly centered */}
              <div
                className="relative rounded-[36px] overflow-hidden"
                style={{
                  boxShadow: "0 24px 64px rgba(9,40,90,0.18), 0 0 0 1.5px rgba(0,194,168,0.25)",
                  background: "#09285A",
                  aspectRatio: "16/9",
                }}
              >
                <PreloadedVideo
                  src="/uae.mp4"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              {/* Small floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={animate ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                style={{
                  background: "#09285A",
                  boxShadow: "0 8px 24px rgba(9,40,90,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#00C2A8]" style={{ boxShadow: "0 0 6px #00C2A8" }} />
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>
                  UAE Market
                </span>
              </motion.div>

              {/* Small floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={animate ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-4 -right-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                style={{
                  background: "#00C2A8",
                  boxShadow: "0 8px 24px rgba(0,194,168,0.35)",
                }}
              >
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>
                  Compliance Excellence
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Why Choose Us ── with clean white background */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Mobile: stack vertically. Desktop: side by side with sticky */}
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-start gap-10">

            {/* Left text — sticky only on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="md:sticky md:top-32"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
                <Target className="w-3 h-3" />
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6 leading-tight">
                Your Trusted Partner in UAE Financial Excellence
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We combine deep regulatory knowledge with cutting-edge technology to deliver
                unparalleled financial services across the UAE market.
              </p>
            </motion.div>

            {/* Right — staggered cards */}
            <div className="space-y-4 md:space-y-6">
              {whyChooseUs.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30, x: 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ scale: 1.02, x: 6 }}
                    className="flex gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-md"
                        style={{ background: item.iconBg }}
                      >
                        <ItemIcon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-primary mb-1 md:mb-1.5 group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <main className="flex-1 relative z-10" id="uae-services-list">
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
                OUR SERVICES
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Comprehensive UAE <span className="text-secondary">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From accounting and compliance to IFRS reporting and internal audits —
                we provide end-to-end financial services tailored to the UAE market.
              </p>
            </motion.div>

            {/* Equal-height grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                const isExpanded = expandedCard === i;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.25 }
                    }}
                    className="group relative"
                  >
                    <div
                      className={`relative overflow-hidden rounded-3xl bg-white border-2 border-gray-100 hover:border-secondary/30 transition-all duration-500 flex flex-col ${
                        isExpanded ? "shadow-2xl" : "shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {/* Hover gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                      {/* Corner accent — same size on all cards, more visible */}
                      <motion.div
                        className="absolute top-0 right-0 w-28 h-28 rounded-bl-full pointer-events-none overflow-hidden"
                        animate={{
                          scale: isExpanded ? 1.2 : 1,
                          opacity: isExpanded ? 0.15 : 0.12
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <div 
                          className={`w-full h-full bg-gradient-to-br ${service.color}`}
                          style={{ opacity: 1 }}
                        />
                      </motion.div>

                      {/* Card body — flex-col so button sticks to bottom */}
                      <div className="relative p-7 flex flex-col flex-1">

                        {/* Icon — same size, explicit inline gradient */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md relative z-10 flex-shrink-0"
                          style={{ background: service.iconBg }}
                        >
                          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                        </motion.div>

                        {/* Title — fixed min-height so all titles occupy same vertical space */}
                        <h3 className="text-[17px] font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300 leading-snug min-h-[44px] flex items-start">
                          {service.title}
                        </h3>

                        {/* Description — fixed min-height */}
                        <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 min-h-[40px]">
                          {service.desc}
                        </p>

                        {/* Benefits — compact uniform pills */}
                        <div className="mb-4">
                          <h4 className="text-[10px] font-semibold text-primary mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                            <Award className="w-3 h-3 text-secondary" />
                            Key Benefits
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {service.benefits.map((benefit, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-[5px] rounded-full text-[11px] font-semibold leading-none"
                                style={{ background: "var(--color-primary, #1e3a5f)", color: "#fff", backgroundColor: "#1e3a5f" }}
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Expandable details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="border-t border-gray-100 pt-4 mt-1 mb-2"
                            >
                              <h4 className="text-[10px] font-semibold text-primary mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                                <CheckCircle2 className="w-3 h-3 text-secondary" />
                                What's Included
                              </h4>
                              <ul className="space-y-2">
                                {service.details.map((detail, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="text-xs text-muted-foreground flex items-start gap-2"
                                  >
                                    <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                    <span>{detail}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Learn More — always at bottom */}
                        <motion.button
                          onClick={() => setExpandedCard(isExpanded ? null : i)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="mt-auto pt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-50 text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300 group/btn border border-gray-100"
                        >
                          {isExpanded ? "Show Less" : "Learn More"}
                          <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </motion.div>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ── CTA Section ── */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          style={{ y: useTransform(smoothProgress, [0.8, 1], [0, -50]) }}
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary"
        />

        <motion.div
          style={{ y: useTransform(smoothProgress, [0.8, 1], [0, 50]) }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your UAE Financial Operations?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how our expert team can help you achieve compliance excellence
              and financial clarity.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Have a Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default UAEServices;