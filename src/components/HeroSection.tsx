import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // slight delay so animation fires after mount
    const t = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "76px" }}
    >
      {/* ── Full-bleed background image (right-biased) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* ── Gradient overlay: strong white on left, fades to transparent on right ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(240,248,255,1) 0%, rgba(224,242,254,0.97) 22%, rgba(204,232,252,0.88) 38%, rgba(180,220,248,0.60) 52%, rgba(160,210,244,0.25) 66%, transparent 82%)",
        }}
      />

      {/* ── Extra top fade so navbar blends ── */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(240,248,255,0.85) 0%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-center"
        style={{ minHeight: "calc(100vh - 76px)" }}
      >
        <div className="max-w-[52%] sm:max-w-[48%]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={animate ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(45,212,191,0.12)",
              border: "1px solid rgba(45,212,191,0.38)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#2dd4bf", boxShadow: "0 0 6px rgba(45,212,191,0.75)" }}
            />
            <span
              className="text-[11px] font-semibold tracking-widest uppercase"
              style={{ color: "#0d9488", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Trusted Advisory · UAE &amp; India
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={animate ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.022em",
              color: "#0b1d3a",
              margin: "0 0 18px 0",
            }}
          >
            Strategic Expertise
            <br />
            From Dedicated{" "}
            <span
              style={{
                background: "linear-gradient(118deg, #0b1d3a 0%, #1565a8 44%, #2dd4bf 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Advisors
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={animate ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
              color: "#2c4f6b",
              lineHeight: 1.7,
              maxWidth: "420px",
              marginBottom: "32px",
            }}
          >
            At ScaleSight, we deliver tailored, insight-driven advisory to help
            businesses see clearly, stay compliant, and grow confidently.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={animate ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 items-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-bold text-white rounded-xl px-7 py-3.5 text-sm"
              style={{
                background: "linear-gradient(135deg, #2dd4bf 0%, #0ea5e9 100%)",
                boxShadow: "0 4px 20px rgba(45,212,191,0.38)",
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(45,212,191,0.54)";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(45,212,191,0.38)";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Get Started
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>

            <button
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2 font-bold rounded-xl px-7 py-3.5 text-sm uppercase tracking-widest"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                color: "#0b1d3a",
                border: "1.5px solid rgba(45,212,191,0.35)",
                boxShadow: "0 4px 20px rgba(11,29,58,0.10)",
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "border-color 0.25s, box-shadow 0.25s, color 0.25s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(45,212,191,0.7)";
                (e.currentTarget as HTMLElement).style.color = "#0d9488";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(45,212,191,0.35)";
                (e.currentTarget as HTMLElement).style.color = "#0b1d3a";
              }}
            >
              Our Services
              <ChevronDown size={15} strokeWidth={2.5} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll caret ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 7, 0] }}
        transition={{ delay: 1.6, duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="#1565a8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
