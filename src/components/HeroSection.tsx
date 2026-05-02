// #v2-local — HeroSection
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  splashDone?: boolean;
}

const headingLines = [
  { text: "Strategic Expertise", teal: false },
  { text: "From",                teal: false },
  { text: "Dedicated Advisors",  teal: true  },
];

const HeroSection = ({ splashDone = true }: Props) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => { 
    sessionStorage.setItem("heroSeen", "1");
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 201, 167, 0.2); }
          50% { box-shadow: 0 0 40px rgba(0, 201, 167, 0.4); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .video-card {
          animation: float 8s ease-in-out infinite;
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #02121e 0%, #00C9A7 50%, #02121e 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ 
          minHeight: "auto",
          paddingTop: "76px",
          paddingBottom: "clamp(2rem, 4vh, 3rem)",
          borderRadius: "0 0 32px 32px",
          background: "linear-gradient(135deg, #f8fcff 0%, #f0faf8 50%, #f5fcfa 100%)"
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full"
            style={{ 
              background: "radial-gradient(circle, rgba(0,201,167,0.08) 0%, transparent 70%)",
              filter: "blur(60px)"
            }} />
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full"
            style={{ 
              background: "radial-gradient(circle, rgba(0,201,167,0.06) 0%, transparent 70%)",
              filter: "blur(50px)"
            }} />
          <div className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,201,167,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
        </div>

        {/* Content Container - Split Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-0"
          style={{ minHeight: "auto" }}>

          {/* LEFT — Text Content */}
          <div 
            className="flex flex-col justify-center py-0 lg:py-12"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0)" : "translateX(-60px)",
              transition: "all 1s ease-out 0.1s"
            }}
          >
            
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full w-fit"
              style={{ 
                background: "rgba(0,201,167,0.08)", 
                border: "1px solid rgba(0,201,167,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00C9A7", boxShadow: "0 0 8px #00C9A7" }} />
              <span style={{
                fontFamily: "'Manrope', sans-serif", 
                fontSize: "10px", 
                fontWeight: 600,
                letterSpacing: "0.18em", 
                textTransform: "uppercase", 
                color: "#00C9A7",
              }}>
                Trusted Advisory · UAE &amp; India
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 800, 
              lineHeight: 1.15,
              letterSpacing: "-0.02em", 
              color: "#02121e",
              margin: "0 0 20px 0",
            }}>
              {headingLines.map((line, li) => (
                <span
                  key={li}
                  style={{ 
                    display: "block", 
                    color: line.teal ? "#00C9A7" : "#02121e",
                  }}
                  className={line.teal ? "shimmer-text" : ""}
                >
                  {line.text}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(0.875rem, 1.05vw, 0.95rem)",
                color: "#4a5568",
                lineHeight: 1.7, 
                maxWidth: "480px",
                margin: "0 0 36px 0", 
                fontWeight: 400,
              }}
            >
              Tailored, insight-driven advisory to help businesses grow confidently across UAE and India.
            </p>

            {/* Buttons */}
            <div 
              className="flex flex-wrap gap-3 items-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm"
                style={{
                  background: "#00C9A7", 
                  color: "#ffffff",
                  fontFamily: "'Manrope', sans-serif", 
                  fontWeight: 700,
                  letterSpacing: "0.01em",
                  boxShadow: "0 4px 24px rgba(0,201,167,0.3)",
                  transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#00a88a";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,201,167,0.5)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#00C9A7";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,201,167,0.3)";
                }}
              >
                Get Started
                <ArrowRight size={16} />
              </Link>

              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm"
                style={{
                  background: "transparent", 
                  color: "#02121e",
                  border: "1.5px solid rgba(2,18,30,0.2)",
                  fontFamily: "'Manrope', sans-serif", 
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  transition: "background 0.2s, border-color 0.2s, transform 0.2s", 
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(2,18,30,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,18,30,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,18,30,0.2)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Our Services
                <ChevronDown size={16} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* RIGHT — Video Card */}
          <div 
            className="flex items-center justify-center py-0 lg:py-12"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0)" : "translateX(60px)",
              transition: "all 1s ease-out 0.2s"
            }}
          >
            <div className="relative w-full max-w-[650px]">
              
              {/* Glow effect behind video */}
              <div className="absolute inset-[-20px] rounded-[40px] pointer-events-none"
                style={{ 
                  background: "linear-gradient(135deg, rgba(0,201,167,0.2) 0%, rgba(0,201,167,0.05) 100%)", 
                  filter: "blur(30px)" 
                }} />
              
              {/* Animated ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{ 
                  width: "95%", 
                  height: "95%", 
                  border: "2px solid rgba(0,201,167,0.3)",
                  animation: "pulse-glow 3s ease-in-out infinite"
                }} />
              
              {/* Video container with floating animation */}
              <div className="video-card relative rounded-[32px] overflow-hidden"
                style={{ 
                  boxShadow: "0 30px 80px rgba(0,201,167,0.2), 0 0 0 1px rgba(0,201,167,0.25)", 
                  background: "#ffffff", 
                  aspectRatio: "16/9" 
                }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ 
                    display: "block", 
                    objectFit: "cover", 
                    objectPosition: "center", 
                    width: "100%", 
                    height: "100%" 
                  }}
                >
                  <source src="/home.mp4" type="video/mp4" />
                </video>
                
                {/* Video overlay gradient */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,201,167,0.05) 0%, transparent 50%, rgba(0,201,167,0.03) 100%)"
                  }} />
              </div>
              
              {/* Floating badge - bottom left */}
              <div 
                className="absolute -bottom-5 -left-5 flex items-center gap-2 px-5 py-3 rounded-2xl"
                style={{ 
                  background: "linear-gradient(135deg, #00C9A7 0%, #00a88a 100%)", 
                  boxShadow: "0 10px 30px rgba(0,201,167,0.35)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-white" style={{ boxShadow: "0 0 8px white" }} />
                <span style={{ 
                  fontFamily: "'Manrope', sans-serif", 
                  fontSize: "12px", 
                  fontWeight: 700, 
                  color: "#fff", 
                  letterSpacing: "0.05em" 
                }}>
                  Expert Advisory
                </span>
              </div>
              
              {/* Floating badge - top right */}
              <div 
                className="absolute -top-5 -right-5 flex items-center gap-2 px-5 py-3 rounded-2xl"
                style={{ 
                  background: "#ffffff", 
                  border: "1px solid rgba(0,201,167,0.25)",
                  boxShadow: "0 10px 30px rgba(0,201,167,0.2)",
                }}
              >
                <Sparkles className="w-4 h-4" style={{ color: "#00C9A7" }} />
                <span style={{ 
                  fontFamily: "'Manrope', sans-serif", 
                  fontSize: "12px", 
                  fontWeight: 700, 
                  color: "#00C9A7", 
                  letterSpacing: "0.05em" 
                }}>
                  UAE & India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
