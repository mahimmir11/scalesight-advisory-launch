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
    <div ref={ref} className="fixed bottom-6 left-6 z-[99] flex flex-col items-start gap-2">

      {/* Service cards */}
      <AnimatePresence>
        {open && (
          <>
            {/* India card */}
            <motion.button
              key="india"
              initial={{ opacity: 0, x: -14, y: 6 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -10, y: 4 }}
              transition={{ duration: 0.22, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => goTo("/services/india")}
              className="flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-2xl group"
              style={{
                background: "rgba(255,255,255,0.97)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.09), 0 0 0 1px rgba(0,0,0,0.04)",
                backdropFilter: "blur(12px)",
              }}
            >
              <img
                src="/indiaflag.png"
                alt="India"
                className="w-8 h-8 rounded-xl object-cover flex-shrink-0"
              />
              <span
                className="text-[12px] font-bold text-[#09285A] group-hover:text-[#FF9933] transition-colors whitespace-nowrap"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                India Services
              </span>
            </motion.button>

            {/* UAE card */}
            <motion.button
              key="uae"
              initial={{ opacity: 0, x: -14, y: 6 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -10, y: 4 }}
              transition={{ duration: 0.22, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => goTo("/services/uae")}
              className="flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-2xl group"
              style={{
                background: "rgba(255,255,255,0.97)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.09), 0 0 0 1px rgba(0,0,0,0.04)",
                backdropFilter: "blur(12px)",
              }}
            >
              <img
                src="/uaeflag.png"
                alt="UAE"
                className="w-8 h-8 rounded-xl object-cover flex-shrink-0"
              />
              <span
                className="text-[12px] font-bold text-[#09285A] group-hover:text-[#00C2A8] transition-colors whitespace-nowrap"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                UAE Services
              </span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Trigger button — white rounded square with teal arrow, like the image */}
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.93 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="w-11 h-11 rounded-2xl flex items-center justify-center"
        style={{
          background: "#ffffff",
          boxShadow: "0 4px 18px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
          transition: "box-shadow 0.2s",
        }}
        aria-label="Our Services"
      >
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="#00C2A8" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          {/* Up arrow — rotates to down when open */}
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default FloatingServices;
