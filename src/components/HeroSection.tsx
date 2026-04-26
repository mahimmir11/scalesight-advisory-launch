// #v2-local — HeroSection
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const isFirstVisit = !sessionStorage.getItem("heroSeen");

interface Props {
  splashDone?: boolean;
}

const headingLines = [
  { text: "Strategic Expertise", teal: false },
  { text: "From",                teal: false },
  { text: "Dedicated Advisors",  teal: true  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HeroSection = ({ splashDone = true }: Props) => {
  const [animate, setAnimate] = useState(false);
  const fired = useRef(false);

  useEffect(() => { sessionStorage.setItem("heroSeen", "1"); }, []);

  useEffect(() => {
    if (fired.current) return;
    if (isFirstVisit) {
      if (!splashDone) return;
      fired.current = true;
      const t = setTimeout(() => setAnimate(true), 150);
      return () => clearTimeout(t);
    } else {
      fired.current = true;
      setAnimate(true);
    }
  }, [splashDone]);

  const firstVisit = isFirstVisit;

  // Badge — drops from top
  const badgeInitial = firstVisit ? { opacity: 0, y: -18, scale: 0.88 } : { opacity: 1, y: 0, scale: 1 };
  const badgeAnimate = animate ? { opacity: 1, y: 0, scale: 1 } : badgeInitial;
  const badgeTrans: Transition = firstVisit ? { duration: 0.65, delay: 0.05, ease: EASE } : {};

  // Each heading line slides from left — slow, smooth, staggered
  const lineInitial = firstVisit ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 };
  const lineAnimate = animate ? { opacity: 1, x: 0 } : lineInitial;
  const lineTrans = (li: number): Transition => firstVisit
    ? { duration: 1.0, delay: 0.2 + li * 0.18, ease: EASE }
    : {};

  // Description — slides from left after heading
  const descInitial = firstVisit ? { opacity: 0, x: -40 } : { opacity: 1, x: 0 };
  const descAnimate = animate ? { opacity: 1, x: 0 } : descInitial;
  const descTrans: Transition = firstVisit ? { duration: 0.9, delay: 0.78, ease: EASE } : {};

  // Buttons — fade up
  const btnInitial = firstVisit ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 };
  const btnAnimate = animate ? { opacity: 1, y: 0 } : btnInitial;
  const btnTrans = (i: number): Transition => firstVisit
    ? { duration: 0.7, delay: 1.0 + i * 0.1, ease: EASE }
    : {};

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        @keyframes kenBurns {
          0%   { transform: scale(1.0); }
          50%  { transform: scale(1.09); }
          100% { transform: scale(1.0); }
        }
        .hero-bg { animation: kenBurns 9s ease-in-out infinite; transform-origin: center center; }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "92vh", paddingTop: "76px", borderRadius: "0 0 32px 32px" }}
      >
        {/* Background */}
        <div className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.png')" }} />

        {/* Overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(2,18,30,0.38) 0%, rgba(4,32,38,0.28) 50%, rgba(2,20,28,0.35) 100%)",
        }} />

        {/* Content */}
        <div
          className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 flex flex-col justify-center items-center text-center sm:items-start sm:text-left"
          style={{ minHeight: "calc(92vh - 76px)" }}
        >
          <div className="max-w-[600px] w-full">

            {/* Badge */}
            <motion.div
              initial={badgeInitial}
              animate={badgeAnimate}
              transition={badgeTrans}
              className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00C9A7", boxShadow: "0 0 5px #00C9A7" }} />
              <span style={{
                fontFamily: "'Manrope', sans-serif", fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
              }}>
                Trusted Advisory · UAE &amp; India
              </span>
            </motion.div>

            {/* Heading — each line slides in from left, slow & smooth */}
            <h1 style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.025em", color: "#ffffff",
              margin: "0 0 16px 0",
            }}>
              {headingLines.map((line, li) => (
                <motion.span
                  key={li}
                  initial={lineInitial}
                  animate={lineAnimate}
                  transition={lineTrans(li)}
                  style={{ display: "block", color: line.teal ? "#00C9A7" : "#ffffff" }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            {/* Description */}
            <motion.p
              initial={descInitial}
              animate={descAnimate}
              transition={descTrans}              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(0.875rem, 1.1vw, 0.975rem)",
                color: "rgba(180, 200, 220, 0.85)",
                lineHeight: 1.75, maxWidth: "460px",
                margin: "0 0 32px 0", fontWeight: 400,
              }}
            >
              At ScaleSight, we deliver tailored, insight-driven advisory to help
              businesses see clearly, stay compliant, and grow confidently.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start">
              <motion.div initial={btnInitial} animate={btnAnimate} transition={btnTrans(0)}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
                  style={{
                    background: "#00C9A7", color: "#0a1a0f",
                    fontFamily: "'Manrope', sans-serif", fontWeight: 700,
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
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
                    <ArrowRight size={14} />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div initial={btnInitial} animate={btnAnimate} transition={btnTrans(1)}>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
                  style={{
                    background: "transparent", color: "#ffffff",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                    fontFamily: "'Manrope', sans-serif", fontWeight: 600,
                    letterSpacing: "0.01em",
                    transition: "background 0.2s, border-color 0.2s, transform 0.2s", cursor: "pointer",
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
        </div>

        {/* Scroll caret */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, 6, 0] }}
          transition={{ delay: firstVisit ? 1.6 : 0.4, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
