import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        @keyframes kenBurns {
          0%   { transform: scale(1.0); }
          50%  { transform: scale(1.09); }
          100% { transform: scale(1.0); }
        }
        .hero-bg {
          animation: kenBurns 9s ease-in-out infinite;
          transform-origin: center center;
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "92vh",
          paddingTop: "76px",
          borderRadius: "0 0 32px 32px",
        }}
      >
        {/* Background */}
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.png')" }}
        />

        {/* Dark teal overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(2,18,30,0.38) 0%, rgba(4,32,38,0.28) 50%, rgba(2,20,28,0.35) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 flex flex-col justify-center
                     items-center text-center
                     sm:items-start sm:text-left"
          style={{ minHeight: "calc(92vh - 76px)", paddingTop: "0" }}
        >
          <div className="max-w-[600px] w-full">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#00C9A7", boxShadow: "0 0 5px #00C9A7" }}
              />
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Trusted Advisory · UAE &amp; India
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#ffffff",
                margin: "0 0 16px 0",
              }}
            >
              Strategic Expertise
              <br />
              From
              <br />
              <span style={{ color: "#00C9A7" }}>Dedicated Advisors</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(0.875rem, 1.1vw, 0.975rem)",
                color: "rgba(180, 200, 220, 0.85)",
                lineHeight: 1.75,
                maxWidth: "460px",
                margin: "0 0 32px 0",
                fontWeight: 400,
              }}
            >
              At ScaleSight, we deliver tailored, insight-driven advisory to help
              businesses see clearly, stay compliant, and grow confidently.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3 items-center justify-center sm:justify-start"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
                style={{
                  background: "#00C9A7",
                  color: "#0a1a0f",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.01em",
                  boxShadow: "0 4px 20px rgba(0,201,167,0.35)",
                  transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#00a88a";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,201,167,0.5)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#00C9A7";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,201,167,0.35)";
                }}
              >
                Get Started
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                >
                  <ArrowRight size={14} />
                </motion.span>
              </Link>

              <button
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Our Services
                <ChevronDown size={14} strokeWidth={2} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll caret */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, 6, 0] }}
          transition={{ delay: 1.6, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;


