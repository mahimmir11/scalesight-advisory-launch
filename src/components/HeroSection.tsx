import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const popIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.80, y: 16 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.58, delay, ease: [0.34, 1.56, 0.64, 1] as const },
});

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.65;
  }, []);

  return (
    <>
      <style>{`
        .ss-hero {
          position: relative;
          overflow: hidden;
          padding-top: 70px;
          min-height: 100vh;
          background: linear-gradient(
            to bottom,
            #f0f8ff 0%,
            #ddf0fb 18%,
            #c2e6f9 38%,
            #a3d8f5 56%,
            #84c9f0 72%,
            #6dbde9 88%,
            #5cb4e4 100%
          );
        }
        .ss-smoke {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.90) 0%,
            rgba(255,255,255,0.74) 12%,
            rgba(255,255,255,0.46) 26%,
            rgba(255,255,255,0.18) 42%,
            rgba(255,255,255,0.04) 55%,
            transparent 68%
          );
        }
        .ss-bottom-mist {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 52%;
          pointer-events: none;
          z-index: 5;
          background: linear-gradient(
            to top,
            rgba(255,255,255,1.0) 0%,
            rgba(240,248,255,0.97) 8%,
            rgba(224,242,254,0.88) 18%,
            rgba(214,237,253,0.70) 30%,
            rgba(204,232,252,0.45) 44%,
            rgba(194,230,249,0.20) 58%,
            transparent 76%
          );
        }
        .ss-right-mist {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 10%;
          pointer-events: none;
          z-index: 4;
          background: linear-gradient(to left, rgba(240,248,255,0.80) 0%, rgba(224,242,254,0.40) 40%, transparent 100%);
        }
        .ss-layout {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          min-height: calc(100vh - 70px);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: clamp(32px, 5vw, 72px) clamp(28px, 5.5vw, 80px);
        }
        .ss-left {
          flex: 0 0 46%;
          max-width: 46%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ss-right {
          flex: 0 0 54%;
          max-width: 54%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .ss-video-wrap {
          position: relative;
          width: clamp(340px, 52vw, 740px);
          aspect-ratio: 16/11;
          margin-top: -50px;
          -webkit-mask-image: radial-gradient(
            ellipse 72% 68% at 50% 52%,
            black 28%, rgba(0,0,0,0.95) 38%, rgba(0,0,0,0.80) 50%,
            rgba(0,0,0,0.40) 62%, rgba(0,0,0,0.10) 74%, transparent 86%
          );
          mask-image: radial-gradient(
            ellipse 72% 68% at 50% 52%,
            black 28%, rgba(0,0,0,0.95) 38%, rgba(0,0,0,0.80) 50%,
            rgba(0,0,0,0.40) 62%, rgba(0,0,0,0.10) 74%, transparent 86%
          );
        }
        .ss-video {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          mix-blend-mode: multiply;
          border-radius: 0; border: none; outline: none; background: transparent;
        }
        .ss-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; border-radius: 100px;
          background: rgba(45,212,191,0.12); border: 1px solid rgba(45,212,191,0.38);
          color: #0d9488; font-size: 11.5px; font-family: 'Space Grotesk', sans-serif;
          font-weight: 600; letter-spacing: 0.04em; margin-bottom: 20px;
        }
        .ss-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2dd4bf; box-shadow: 0 0 6px rgba(45,212,191,0.75); flex-shrink: 0;
        }
        .ss-h1 {
          margin: 0 0 16px 0; font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.75rem, 3.4vw, 3.1rem); font-weight: 800;
          line-height: 1.1; letter-spacing: -0.022em; color: #0b1d3a;
        }
        .ss-h1-grad {
          background: linear-gradient(118deg, #0b1d3a 0%, #1565a8 44%, #2dd4bf 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ss-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(0.88rem, 1.15vw, 1rem);
          color: #2c4f6b; line-height: 1.7; max-width: 460px; margin: 0 0 30px 0;
        }
        .ss-btns { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
        .ss-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 12px 28px; border-radius: 12px;
          background: linear-gradient(135deg, #2dd4bf 0%, #0ea5e9 100%);
          color: #fff; font-family: 'Space Grotesk', sans-serif; font-weight: 700;
          font-size: 0.9rem; letter-spacing: 0.01em;
          box-shadow: 0 4px 20px rgba(45,212,191,0.38);
          text-decoration: none; border: none; cursor: pointer;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ss-btn-primary:hover { box-shadow: 0 8px 30px rgba(45,212,191,0.54); transform: scale(1.03); }
        .ss-btn-ghost {
          display: inline-flex; align-items: center; padding: 11px 24px; border-radius: 12px;
          background: rgba(255,255,255,0.68); backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px); color: #0b1d3a;
          font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 0.9rem;
          border: 1.5px solid rgba(11,29,58,0.22); text-decoration: none;
          transition: all 0.2s; box-shadow: 0 2px 10px rgba(11,29,58,0.06);
        }
        .ss-btn-ghost:hover { background: rgba(255,255,255,0.9); border-color: rgba(11,29,58,0.4); }
        .ss-caret {
          position: absolute; bottom: 22px; left: 50%; transform: translateX(-50%); z-index: 20;
        }
        @media (max-width: 768px) {
          .ss-layout {
            flex-direction: column; align-items: flex-start;
            padding-bottom: 24px; min-height: unset; padding-top: clamp(24px, 6vw, 48px);
          }
          .ss-left  { flex: unset; max-width: 100%; width: 100%; }
          .ss-right { flex: unset; max-width: 100%; width: 100%; justify-content: center; margin-top: 8px; }
          .ss-video-wrap { width: clamp(260px, 92vw, 460px) !important; margin-top: 0 !important; }
          .ss-btns { flex-direction: column; align-items: stretch; }
          .ss-btn-primary, .ss-btn-ghost { justify-content: center; }
          .ss-h1 { font-size: clamp(1.55rem, 7vw, 2.2rem); }
        }
      `}</style>

      <section id="hero" className="ss-hero">
        <div aria-hidden className="ss-smoke" />
        <div aria-hidden className="ss-bottom-mist" />
        <div aria-hidden className="ss-right-mist" />
        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          background: "radial-gradient(ellipse 55% 50% at 5% 0%, rgba(255,255,255,0.65) 0%, transparent 70%)",
        }} />

        <div className="ss-layout">
          {/* ── LEFT ── */}
          <div className="ss-left">
            <motion.div {...fadeUp(0.05)}>
              <div className="ss-badge">
                <span className="ss-dot" />
                Trusted Advisory · UAE &amp; India
              </div>
            </motion.div>

            <h1 className="ss-h1">
              <motion.span {...fadeUp(0.16)} style={{ display: "block" }}>
                Strategic Expertise
              </motion.span>
              <motion.span {...fadeUp(0.30)} style={{ display: "block" }}>
                From Dedicated{" "}
                <span className="ss-h1-grad">Advisors</span>
              </motion.span>
            </h1>

            <motion.p className="ss-desc" {...fadeUp(0.44)}>
              At ScaleSight, we deliver tailored, insight-driven advisory to help
              businesses see clearly, stay compliant, and grow confidently.
            </motion.p>

            <div className="ss-btns">
              <motion.a href="#contact" className="ss-btn-primary" {...popIn(0.58)}>
                Get Started
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.a>
              <motion.div {...popIn(0.70)}>
                <Link to="/services/uae" className="ss-btn-ghost">UAE Services</Link>
              </motion.div>
              <motion.div {...popIn(0.82)}>
                <Link to="/services/india" className="ss-btn-ghost">India Services</Link>
              </motion.div>
            </div>
            {/* Stat cards removed as requested */}
          </div>

          {/* ── RIGHT: masked video ── */}
          <motion.div
            className="ss-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ss-video-wrap">
              <video
                ref={videoRef}
                className="ss-video"
                src="/home.mp4"
                autoPlay muted loop playsInline
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="ss-caret"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 7, 0] }}
          transition={{ delay: 1.8, duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="#1565a8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;