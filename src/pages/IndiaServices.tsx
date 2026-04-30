import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Target, Eye, Clock, Star, TrendingUp, BarChart2, DollarSign, PieChart, Database, Lightbulb } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Virtual CFO",
    desc: "Strategic financial leadership without the full-time overhead. We act as your CFO — guiding decisions, managing risk, and driving growth.",
    tags: ["Financial Strategy", "Risk Management", "Growth Planning"],
    icon: TrendingUp,
  },
  {
    title: "FP&A",
    desc: "Advanced financial planning and analysis to drive predictable, sustainable growth. We turn numbers into a clear roadmap for your business.",
    tags: ["Forecasting", "Variance Analysis", "KPI Tracking"],
    icon: BarChart2,
  },
  {
    title: "Budgeting & Forecasting",
    desc: "Data-backed fiscal roadmaps that keep your business on track. We build budgets that are realistic, flexible, and tied to your goals.",
    tags: ["Annual Budgets", "Rolling Forecasts", "Scenario Planning"],
    icon: DollarSign,
  },
  {
    title: "MIS & Reporting",
    desc: "Accurate, timely management information systems that give leadership the visibility they need to act fast and with confidence.",
    tags: ["Dashboard Design", "Monthly Reports", "Board Packs"],
    icon: PieChart,
  },
  {
    title: "Financial Analytics",
    desc: "Turning raw data into actionable business intelligence. We surface the insights hidden in your numbers so you can move with clarity.",
    tags: ["Data Modelling", "Trend Analysis", "Business Intelligence"],
    icon: Database,
  },
  {
    title: "Decision Support",
    desc: "Empowering leadership with data-driven recommendations at every critical juncture — from expansion to restructuring.",
    tags: ["Investment Appraisal", "M&A Support", "Strategic Advisory"],
    icon: Lightbulb,
  },
];

const pillars = [
  { title: "Accuracy", body: "Every number verified. Zero tolerance for errors.", Icon: Target },
  { title: "Transparency", body: "Clear pricing, clear scope — no surprises ever.", Icon: Eye },
  { title: "Timely Compliance", body: "Deadlines are non-negotiable. Always on time.", Icon: Clock },
  { title: "Expert Guidance", body: "Founder-led team. Senior expertise, always.", Icon: Star },
];

/* ── Preloaded Video Component ── */
const PreloadedVideo = ({ src, style }: { src: string; style?: React.CSSProperties }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

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
      {!ready && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0a1f2e 0%, #09285A 50%, #0a1f2e 100%)",
            backgroundSize: "200% 100%",
            animation: "videoShimmer 1.5s ease-in-out infinite",
          }}
        />
      )}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setReady(true)}
        style={{
          ...style,
          opacity: ready ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
      <style>{`
        @keyframes videoShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

/* ── Typing hook ── */
function useTypingText(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed("");
    setDone(false);
    if (!text) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(iv); setDone(true); }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return { displayed, done };
}

/* ── Pillar card with scroll bounce ── */
function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const { Icon } = pillar;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 0.65, delay: index * 0.13, type: "spring", stiffness: 170, damping: 17 }}
      className="relative p-8 md:p-10 bg-white group overflow-hidden cursor-default"
      style={{ borderRight: index < 3 ? "1px solid #f0f1f5" : "none" }}
    >
      <div
        className="absolute bottom-0 left-6 right-6 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
        style={{ background: "linear-gradient(90deg, #00C2A8, #03C359)" }}
      />
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: "#09285A" }}
      >
        <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
      </div>
      <h3 className="text-base font-bold text-primary mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
        {pillar.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
        {pillar.body}
      </p>
    </motion.div>
  );
}

/* ── Right detail panel ── */
function ServiceDetail({ service, index }: { service: typeof services[0]; index: number }) {
  const { displayed, done } = useTypingText(service.desc, 16);
  const ServiceIcon = service.icon;
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 h-full flex flex-col justify-center px-12 md:px-16 py-14"
    >
      <p
        className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-8"
        style={{ color: "#00C2A8", fontFamily: "'Inter', sans-serif" }}
      >
        {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
      </p>

      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
        style={{ background: "linear-gradient(135deg, #00C2A8 0%, #03C359 100%)" }}
      >
        <ServiceIcon className="w-6 h-6 text-white" strokeWidth={1.8} />
      </div>

      <h3
        className="text-4xl md:text-5xl font-bold text-[#09285A] leading-[1.1] mb-5"
        style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.025em", fontWeight: 700 }}
      >
        {service.title}
      </h3>

      <p
        className="text-[17px] text-gray-400 leading-[1.85] mb-8 max-w-[460px] min-h-[88px]"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
      >
        {displayed}
        {!done && (
          <span
            className="inline-block w-[2px] h-[1em] ml-[2px] align-middle rounded-full"
            style={{ background: "#00C2A8", animation: "blink 0.55s step-end infinite" }}
          />
        )}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag: string, ti: number) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + ti * 0.07 }}
            className="px-4 py-2 rounded-full text-[12px] font-medium"
            style={{
              background: "rgba(0,194,168,0.07)",
              border: "1px solid rgba(0,194,168,0.2)",
              color: "#00A896",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

const IndiaServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleTalk = () => {
    navigate("/contact");
    setTimeout(() => {
      const el = document.getElementById("contact-form");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        {/* ── Hero Section ── */}
        <section
          className="relative w-full overflow-hidden"
          style={{
            minHeight: "95vh",
            paddingTop: "76px",
            background: "linear-gradient(135deg, #fef9f3 0%, #f0faf8 50%, #fef5e7 100%)",
            borderRadius: "0 0 32px 32px",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(9,40,90,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,153,51,0.12) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,194,168,0.08) 0%, transparent 70%)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            style={{ minHeight: "calc(95vh - 76px)" }}>

            {/* LEFT — text */}
            <div className="flex flex-col justify-center py-12 lg:py-0">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={animate ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px", fontWeight: 700,
                  letterSpacing: "0.28em", textTransform: "uppercase" as const,
                  color: "#FF9933", marginBottom: "20px",
                }}
              >
                🇮🇳 India Services
              </motion.p>

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
                Strategic Financial
                <br />
                <span style={{ color: "#FF9933" }}>Leadership</span>
                <br />
                for India
              </motion.h1>

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
                From Virtual CFO to FP&A, budgeting, and decision support — we deliver comprehensive financial advisory tailored for Indian businesses that demand precision and growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={animate ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="#india-services-list"
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

                <button
                  onClick={handleTalk}
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
                </button>
              </motion.div>
            </div>

            {/* RIGHT — Video card with preloading */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={animate ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center py-12 lg:py-0"
            >
              <div className="relative w-full max-w-[700px]">

                <div
                  className="absolute inset-[-18px] rounded-[48px] pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,153,51,0.18) 0%, rgba(9,40,90,0.10) 100%)",
                    filter: "blur(2px)",
                  }}
                />

                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                  style={{
                    width: "88%", height: "88%",
                    background: "radial-gradient(circle, rgba(255,153,51,0.13) 0%, rgba(9,40,90,0.06) 60%, transparent 100%)",
                  }}
                />

                <div
                  className="relative rounded-[36px] overflow-hidden"
                  style={{
                    boxShadow: "0 24px 64px rgba(9,40,90,0.18), 0 0 0 1.5px rgba(255,153,51,0.25)",
                    background: "#09285A",
                    aspectRatio: "16/9",
                  }}
                >
                  <PreloadedVideo
                    src="/india.mp4"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

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
                  <span className="w-2 h-2 rounded-full bg-[#FF9933]" style={{ boxShadow: "0 0 6px #FF9933" }} />
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>
                    India Market
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={animate ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -top-4 -right-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                  style={{
                    background: "#FF9933",
                    boxShadow: "0 8px 24px rgba(255,153,51,0.35)",
                  }}
                >
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>
                    Expert Advisory
                  </span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </section>

        <main className="flex-1" id="india-services-list">

          {/* ── Services ── */}
          <section className="py-24 px-6 bg-[#f8f9fc]">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14"
              >
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Core Expertise
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em" }}>
                  What We Excel At
                </h2>
              </motion.div>

              {/* DESKTOP */}
              <div
                className="hidden md:flex rounded-2xl overflow-hidden bg-white min-h-[520px]"
                style={{
                  boxShadow: "0 4px 40px rgba(9,40,90,0.07), 0 1px 6px rgba(9,40,90,0.04)",
                  border: "1px solid rgba(9,40,90,0.07)",
                }}
              >
                <div className="w-[280px] flex-shrink-0 flex flex-col border-r border-gray-100/80 bg-white py-4 px-3">
                  {services.map((s, i) => {
                    const isActive = activeService === i;
                    const SIcon = s.icon;
                    return (
                      <motion.button
                        key={s.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.06 }}
                        onClick={() => setActiveService(i)}
                        className="relative w-full text-left px-4 py-4 flex items-center gap-4 rounded-xl mb-1 last:mb-0 transition-all duration-200 focus:outline-none"
                        style={{
                          background: isActive
                            ? "linear-gradient(90deg, rgba(0,194,168,0.08), rgba(3,195,89,0.04))"
                            : "transparent",
                          border: isActive ? "1px solid rgba(0,194,168,0.18)" : "1px solid transparent",
                        }}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeBar"
                            className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full"
                            style={{ background: "linear-gradient(180deg,#00C2A8,#03C359)" }}
                          />
                        )}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                          style={{
                            background: isActive
                              ? "linear-gradient(135deg, #00C2A8, #03C359)"
                              : "rgba(9,40,90,0.05)",
                          }}
                        >
                          <SIcon
                            className="w-[18px] h-[18px]"
                            style={{ color: isActive ? "white" : "#B0BAC5" }}
                            strokeWidth={1.8}
                          />
                        </div>
                        <span
                          className="text-[14px] font-semibold leading-snug transition-colors duration-200"
                          style={{
                            color: isActive ? "#09285A" : "#9CA3AF",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {s.title}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="flex-1 relative overflow-hidden bg-white">
                  <AnimatePresence mode="wait">
                    {services[activeService] && (
                      <ServiceDetail key={activeService} service={services[activeService]} index={activeService} />
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* MOBILE accordion */}
              <div className="md:hidden flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                {services.map((s, i) => {
                  const isOpen = activeService === i;
                  return (
                    <div key={s.title} className="border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => setActiveService(isOpen ? 0 : i)}
                        className={`w-full text-left px-5 py-4 flex items-center justify-between gap-3 transition-colors focus:outline-none ${isOpen ? "bg-[#f2fdfb]" : "bg-white"}`}
                      >
                        <span
                          className={`text-[15px] font-semibold transition-colors ${isOpen ? "text-primary" : "text-gray-400"}`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {s.title}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm"
                          style={{
                            borderColor: isOpen ? "#00C2A8" : "#e5e7eb",
                            color: isOpen ? "#00C2A8" : "#9ca3af",
                          }}
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 pt-3 bg-[#f2fdfb] border-t border-gray-100">
                              <div className="w-7 h-[2px] rounded-full mb-4" style={{ background: "linear-gradient(90deg,#00C2A8,#03C359)" }} />
                              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>{s.title}</h3>
                              <p className="text-sm text-gray-500 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{s.desc}</p>
                              <div className="flex flex-wrap gap-2">
                                {s.tags.map((tag) => (
                                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(0,194,168,0.08)", border: "1px solid rgba(0,194,168,0.2)", color: "#009E8E", fontFamily: "'Inter', sans-serif" }}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Four Pillars ── */}
          <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14"
              >
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Why Trust Us
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em" }}>
                  Four Pillars of Excellence
                </h2>
              </motion.div>
              <div
                className="grid grid-cols-2 md:grid-cols-4 border border-gray-100 rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 2px 20px rgba(9,40,90,0.04)" }}
              >
                {pillars.map((p, i) => <PillarCard key={p.title} pillar={p} index={i} />)}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="py-20 px-6 bg-primary">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}
              >
                Ready to take control of your finances?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/70 mb-8 text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Let's have a real conversation about your business goals.
              </motion.p>
              <motion.button
                onClick={handleTalk}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Have a Talk
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IndiaServices;