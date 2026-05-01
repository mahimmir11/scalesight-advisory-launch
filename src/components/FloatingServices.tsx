import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {
  splashDone?: boolean;
}

const FloatingServices = ({ splashDone = true }: Props) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!splashDone) return;
    const t = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(t);
  }, [splashDone]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const goTo = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  if (!visible) return null;

  return (
    <div ref={ref} className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-2.5">

      {/* Service cards — appear above the button */}
      <AnimatePresence>
        {open && (
          <>
            {/* India card */}
            <motion.button
              key="india"
              initial={{ opacity: 0, x: -20, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -16, y: 6 }}
              transition={{ duration: 0.25, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => goTo("/services/india")}
              className="flex items-center gap-3 pl-2 pr-5 py-2 rounded-2xl group"
              style={{
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.05)",
                backdropFilter: "blur(12px)",
              }}
            >
              <img
                src="/indiaflag.png"
                alt="India"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0"
              />
              <span
                className="text-[13px] font-bold text-[#09285A] group-hover:text-[#FF9933] transition-colors whitespace-nowrap"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                India Services
              </span>
            </motion.button>

            {/* UAE card */}
            <motion.button
              key="uae"
              initial={{ opacity: 0, x: -20, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -16, y: 6 }}
              transition={{ duration: 0.25, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => goTo("/services/uae")}
              className="flex items-center gap-3 pl-2 pr-5 py-2 rounded-2xl group"
              style={{
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.05)",
                backdropFilter: "blur(12px)",
              }}
            >
              <img
                src="/uaeflag.png"
                alt="UAE"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0"
              />
              <span
                className="text-[13px] font-bold text-[#09285A] group-hover:text-[#00C2A8] transition-colors whitespace-nowrap"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                UAE Services
              </span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Single circular arrow button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(9,40,58,0.90)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: open
            ? "0 0 0 2px #00C2A8, 0 6px 20px rgba(0,0,0,0.22)"
            : "0 0 0 1.5px rgba(0,194,168,0.45), 0 4px 14px rgba(0,0,0,0.18)",
          transition: "box-shadow 0.2s",
        }}
        aria-label="Our Services"
      >
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="#00C2A8" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default FloatingServices;
