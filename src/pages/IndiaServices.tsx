import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, ArrowRight, TrendingUp, BarChart2, DollarSign, PieChart, Database, Lightbulb, Shield, Users, Award, Clock, Target, LucideIcon } from "lucide-react";
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
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #0a1f2e 0%, #09285A 50%, #0a1f2e 100%)",
          backgroundSize: "200% 100%",
          animation: "indiaShimmer 1.5s ease-in-out infinite",
        }} />
      )}
      <video ref={videoRef} src={src} autoPlay loop muted playsInline preload="auto"
        onCanPlay={() => setVideoReady(true)}
        style={{ ...style, opacity: videoReady ? 1 : 0, transition: "opacity 0.4s ease" }}
      />
      <style>{`@keyframes indiaShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
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
    title: "Virtual CFO",
    desc: "Strategic financial leadership without the full-time overhead. We act as your CFO — guiding decisions, managing risk, and driving growth.",
    icon: TrendingUp,
    details: [
      "Financial strategy and planning",
      "Cash flow management and forecasting",
      "Investor relations and fundraising support",
      "Risk identification and mitigation",
      "Board reporting and presentations",
      "Business performance monitoring"
    ],
    benefits: ["Senior expertise", "Cost-effective", "Growth-focused"],
    color: "from-orange-500 to-amber-500",
    iconBg: "linear-gradient(135deg, #f97316, #f59e0b)"
  },
  {
    title: "FP&A",
    desc: "Advanced financial planning and analysis to drive predictable, sustainable growth. We turn numbers into a clear roadmap for your business.",
    icon: BarChart2,
    details: [
      "Annual and rolling financial forecasts",
      "Variance analysis and commentary",
      "KPI development and tracking",
      "Scenario and sensitivity modelling",
      "Revenue and cost driver analysis",
      "Management reporting packs"
    ],
    benefits: ["Forecasting", "Variance analysis", "KPI tracking"],
    color: "from-blue-500 to-cyan-500",
    iconBg: "linear-gradient(135deg, #3b82f6, #06b6d4)"
  },
  {
    title: "Budgeting & Forecasting",
    desc: "Data-backed fiscal roadmaps that keep your business on track. We build budgets that are realistic, flexible, and tied to your goals.",
    icon: DollarSign,
    details: [
      "Annual budget preparation and review",
      "Rolling 12-month forecasts",
      "Department-level budget allocation",
      "Scenario planning and stress testing",
      "Budget vs actuals tracking",
      "Reforecast and revision cycles"
    ],
    benefits: ["Annual budgets", "Rolling forecasts", "Scenario planning"],
    color: "from-green-500 to-teal-500",
    iconBg: "linear-gradient(135deg, #22c55e, #14b8a6)"
  },
  {
    title: "MIS & Reporting",
    desc: "Accurate, timely management information systems that give leadership the visibility they need to act fast and with confidence.",
    icon: PieChart,
    details: [
      "Custom MIS dashboard design",
      "Monthly and quarterly management reports",
      "Board pack preparation",
      "Automated data consolidation",
      "Real-time performance tracking",
      "Executive summary reporting"
    ],
    benefits: ["Dashboard design", "Monthly reports", "Board packs"],
    color: "from-purple-500 to-pink-500",
    iconBg: "linear-gradient(135deg, #a855f7, #ec4899)"
  },
  {
    title: "Financial Analytics",
    desc: "Turning raw data into actionable business intelligence. We surface the insights hidden in your numbers so you can move with clarity.",
    icon: Database,
    details: [
      "Financial data modelling and structuring",
      "Trend and pattern analysis",
      "Business intelligence reporting",
      "Profitability and margin analysis",
      "Customer and product analytics",
      "Predictive financial modelling"
    ],
    benefits: ["Data modelling", "Trend analysis", "Business intelligence"],
    color: "from-indigo-500 to-blue-500",
    iconBg: "linear-gradient(135deg, #6366f1, #3b82f6)"
  },
  {
    title: "Decision Support",
    desc: "Empowering leadership with data-driven recommendations at every critical juncture — from expansion to restructuring.",
    icon: Lightbulb,
    details: [
      "Investment appraisal and ROI analysis",
      "M&A financial due diligence support",
      "Make-or-buy and build-vs-buy analysis",
      "Market entry financial modelling",
      "Restructuring and turnaround advisory",
      "Strategic options evaluation"
    ],
    benefits: ["Investment appraisal", "M&A support", "Strategic advisory"],
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
    desc: "Get your financial reports and advisory outputs delivered on time, every time.",
    iconBg: "linear-gradient(135deg, #f97316, #f59e0b)"
  },
  {
    icon: Shield,
    title: "100% Accuracy",
    desc: "Every number verified. Zero tolerance for errors in your financial data.",
    iconBg: "linear-gradient(135deg, #f97316, #f59e0b)"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Work with senior finance professionals who understand Indian business needs.",
    iconBg: "linear-gradient(135deg, #f97316, #f59e0b)"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "Trusted by 100+ Indian businesses for strategic financial leadership.",
    iconBg: "linear-gradient(135deg, #f97316, #f59e0b)"
  }
];

const IndiaServices = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, -200]);
  const ctaBackgroundY = useTransform(smoothProgress, [0.8, 1], [0, -50]);
  const ctaOverlayY = useTransform(smoothProgress, [0.8, 1], [0, 50]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
      `}</style>
      <div ref={containerRef} className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">

        {/* Animated background blobs */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute top-60 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Scroll progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
          style={{ scaleX: smoothProgress }}
        />

        <Navbar />

        {/* ── Hero Section ── */}
        <section className="relative w-full overflow-hidden" style={{
          minHeight: "95vh", paddingTop: "76px",
          background: "linear-gradient(135deg, #fef9f3 0%, #f0faf8 50%, #fef5e7 100%)",
          borderRadius: "0 0 32px 32px",
        }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, rgba(9,40,90,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
          <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,153,51,0.12) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,194,168,0.08) 0%, transparent 70%)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            style={{ minHeight: "calc(95vh - 76px)" }}>

            {/* LEFT — text */}
            <div className="flex flex-col justify-center py-0 lg:py-12">
              <motion.p initial={{ opacity: 0, x: -20 }} animate={animate ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 700,
                  letterSpacing: "0.28em", textTransform: "uppercase" as const, color: "#FF9933", marginBottom: "20px" }}>
                🇮🇳 India Services
              </motion.p>

              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={animate ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                  fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#09285A", margin: "0 0 20px 0" }}>
                Strategic Financial<br />
                <span style={{ color: "#FF9933" }}>Leadership</span><br />
                for India
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={animate ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: "clamp(0.875rem, 1.05vw, 0.95rem)",
                  color: "#4a5568", lineHeight: 1.75, maxWidth: "480px", margin: "0 0 36px 0", fontWeight: 400 }}>
                From Virtual CFO to FP&A, budgeting, and decision support — we deliver comprehensive financial advisory tailored for Indian businesses that demand precision and growth.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={animate ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-3">
                <a href="#india-services-list"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold"
                  style={{ background: "#09285A", color: "#ffffff", fontFamily: "'Manrope', sans-serif",
                    boxShadow: "0 4px 18px rgba(9,40,90,0.25)", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(9,40,90,0.35)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(9,40,90,0.25)"; }}>
                  Explore Services <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                  style={{ background: "transparent", color: "#09285A", border: "1.5px solid rgba(9,40,90,0.25)",
                    fontFamily: "'Manrope', sans-serif", transition: "background 0.2s, border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(9,40,90,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(9,40,90,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(9,40,90,0.25)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                  Have a Talk
                </a>
              </motion.div>
            </div>

            {/* RIGHT — Video card */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={animate ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center py-0 lg:py-12">
              <div className="relative w-full max-w-[700px]">
                <div className="absolute inset-[-18px] rounded-[48px] pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(255,153,51,0.18) 0%, rgba(9,40,90,0.10) 100%)", filter: "blur(2px)" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                  style={{ width: "88%", height: "88%", background: "radial-gradient(circle, rgba(255,153,51,0.13) 0%, rgba(9,40,90,0.06) 60%, transparent 100%)" }} />
                <div className="relative rounded-[36px] overflow-hidden"
                  style={{ boxShadow: "0 24px 64px rgba(9,40,90,0.18), 0 0 0 1.5px rgba(255,153,51,0.25)", background: "#09285A", aspectRatio: "16/9" }}>
                  <PreloadedVideo src="/india.mp4" style={{ display: "block", objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }} />
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={animate ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                  style={{ background: "#09285A", boxShadow: "0 8px 24px rgba(9,40,90,0.3)" }}>
                  <span className="w-2 h-2 rounded-full bg-[#FF9933]" style={{ boxShadow: "0 0 6px #FF9933" }} />
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>India Market</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={animate ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -top-4 -right-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                  style={{ background: "#FF9933", boxShadow: "0 8px 24px rgba(255,153,51,0.35)" }}>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>Expert Advisory</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-start gap-10">

              {/* Left text — sticky on desktop */}
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:sticky md:top-32">
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
                  <Target className="w-3 h-3" />
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6 leading-tight">
                  Your Trusted Partner in India Financial Excellence
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We combine deep financial expertise with a founder-led approach to deliver unparalleled advisory services across the Indian market.
                </p>
              </motion.div>

              {/* Right — staggered cards */}
              <div className="space-y-4 md:space-y-6">
                {whyChooseUs.map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div key={item.title}
                      initial={{ opacity: 0, y: 30, x: 20 }} whileInView={{ opacity: 1, y: 0, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.02, x: 6 }}
                      className="flex gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-md"
                          style={{ background: item.iconBg }}>
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
        <main className="flex-1 relative z-10" id="india-services-list">
          <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
                  OUR SERVICES
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                  Comprehensive India <span className="text-secondary">Solutions</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  From Virtual CFO and FP&A to budgeting, analytics, and decision support —
                  we provide end-to-end financial services tailored to the Indian market.
                </p>
              </motion.div>

              {/* Equal-height grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, i) => {
                  const Icon = service.icon;
                  const isExpanded = expandedCard === i;
                  return (
                    <motion.div key={service.title}
                      initial={{ opacity: 0, y: 60, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6, transition: { duration: 0.25 } }}
                      className="group relative">
                      <div className={`relative overflow-hidden rounded-3xl bg-white border-2 border-gray-100 hover:border-secondary/30 transition-all duration-500 flex flex-col ${isExpanded ? "shadow-2xl" : "shadow-lg hover:shadow-xl"}`}>

                        {/* Hover gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                        {/* Corner accent */}
                        <motion.div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full pointer-events-none overflow-hidden"
                          animate={{ scale: isExpanded ? 1.2 : 1, opacity: isExpanded ? 0.15 : 0.12 }}
                          transition={{ duration: 0.4 }}>
                          <div className={`w-full h-full bg-gradient-to-br ${service.color}`} style={{ opacity: 1 }} />
                        </motion.div>

                        {/* Card body */}
                        <div className="relative p-7 flex flex-col flex-1">
                          <motion.div whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md relative z-10 flex-shrink-0"
                            style={{ background: service.iconBg }}>
                            <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                          </motion.div>

                          <h3 className="text-[17px] font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300 leading-snug min-h-[44px] flex items-start">
                            {service.title}
                          </h3>
                          <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 min-h-[40px]">
                            {service.desc}
                          </p>

                          {/* Benefits pills */}
                          <div className="mb-4">
                            <h4 className="text-[10px] font-semibold text-primary mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                              <Award className="w-3 h-3 text-secondary" />
                              Key Benefits
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {service.benefits.map((benefit, idx) => (
                                <span key={idx}
                                  className="px-2.5 py-[5px] rounded-full text-[11px] font-semibold leading-none"
                                  style={{ background: "#1e3a5f", color: "#fff" }}>
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Expandable details */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="border-t border-gray-100 pt-4 mt-1 mb-2">
                                <h4 className="text-[10px] font-semibold text-primary mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                                  <CheckCircle2 className="w-3 h-3 text-secondary" />
                                  What's Included
                                </h4>
                                <ul className="space-y-2">
                                  {service.details.map((detail, idx) => (
                                    <motion.li key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.05 }}
                                      className="text-xs text-muted-foreground flex items-start gap-2">
                                      <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                      <span>{detail}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Learn More button */}
                          <button
                            onClick={() => setExpandedCard(isExpanded ? null : i)}
                            className="mt-auto pt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-50 text-primary font-semibold text-sm hover:bg-primary hover:text-white active:scale-95 transition-all duration-300 group/btn border border-gray-100">
                            {isExpanded ? "Show Less" : "Learn More"}
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
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
          <motion.div style={{ y: ctaBackgroundY }}
            className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
          <motion.div style={{ y: ctaOverlayY }} className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </motion.div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your India Financial Operations?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how our expert team can help you achieve financial clarity and drive sustainable growth.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 group">
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

export default IndiaServices;
