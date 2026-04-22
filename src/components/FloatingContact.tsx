import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const prefilledSubject = encodeURIComponent("Inquiry About Finance Advisory Services");
const prefilledBody = encodeURIComponent(
  `Hello Scalesight Team,\n\nI came across your website and I'm interested in learning more about your finance advisory services.\n\nMy business name:\nMy location:\nAreas I need help with:\n\nPlease let me know the best time to discuss further.\n\nThank you!`
);
const emailHref = `mailto:Info@scalesight.in?subject=${prefilledSubject}&body=${prefilledBody}`;

const WaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const [waOpen, setWaOpen] = useState(false);
  const [hasPlayedWelcome, setHasPlayedWelcome] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Welcome animation sequence on first visit
  useEffect(() => {
    // Check if this is the first visit (only on homepage)
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "/index.html";
    const hasSeenWelcome = sessionStorage.getItem("floatingContactWelcomePlayed");
    
    if (isHomePage && !hasSeenWelcome && !hasPlayedWelcome) {
      setHasPlayedWelcome(true);
      sessionStorage.setItem("floatingContactWelcomePlayed", "true");
      
      // Timeline:
      // 0s: Open floating button
      setTimeout(() => setOpen(true), 500);
      
      // 2s: Expand WhatsApp
      setTimeout(() => setWaOpen(true), 2000);
      
      // 4s: Close WhatsApp
      setTimeout(() => setWaOpen(false), 4000);
      
      // 4.3s: Close floating button
      setTimeout(() => setOpen(false), 4300);
    }
  }, [hasPlayedWelcome]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setWaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">

      {/* ── Popup card ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl overflow-hidden"
            style={{
              width: "290px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.06)",
            }}
          >
            {/* Logo header */}
            <div className="px-4 pt-4 pb-3 border-b border-gray-100 flex items-center justify-center">
              <img src="/fulllogo1.png" alt="ScaleSight" className="h-8 w-auto" />
            </div>

            <div className="px-3 py-3 space-y-2">

              {/* WhatsApp row — expands sub-panel */}
              <div>
                <motion.button
                  onClick={() => setWaOpen(!waOpen)}
                  animate={{
                    scale: waOpen ? 1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border-2 transition-all duration-200"
                  style={{
                    background: waOpen ? "#f0fdf4" : "white",
                    borderColor: waOpen ? "#25D36640" : "#f3f4f6",
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0 text-white">
                    <WaIcon />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xs text-gray-400 font-medium">WhatsApp</p>
                    <p className="text-sm font-bold text-[#0B1F3A]">Chat with us</p>
                  </div>
                  <motion.span
                    animate={{ rotate: waOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 text-xs"
                  >
                    ▾
                  </motion.span>
                </motion.button>

                {/* Sub-numbers */}
                <AnimatePresence>
                  {waOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1.5 ml-2 space-y-1.5">
                        <a
                          href="https://wa.me/919023120410"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f0fdf4] border border-[#25D36630] hover:bg-[#dcfce7] transition-colors"
                        >
                          <span className="text-lg leading-none">🇮🇳</span>
                          <div>
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">India</p>
                            <p className="text-sm font-bold text-[#0B1F3A]">+91 90231 20410</p>
                          </div>
                        </a>
                        <a
                          href="https://wa.me/971552543007"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f0fdf4] border border-[#25D36630] hover:bg-[#dcfce7] transition-colors"
                        >
                          <span className="text-lg leading-none">🇦🇪</span>
                          <div>
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">UAE</p>
                            <p className="text-sm font-bold text-[#0B1F3A]">+971 55 254 3007</p>
                          </div>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <a
                href={emailHref}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border-2 border-gray-100 hover:border-[#0B1F3A]/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email Us</p>
                  <p className="text-sm font-bold text-[#0B1F3A]">Info@scalesight.in</p>
                </div>
              </a>

              {/* Get in Touch */}
              <a
                href="/contact"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border-2 border-gray-100 hover:border-[#00C2A8]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00C2A8] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B1F3A]">Get in Touch</p>
                </div>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="px-4 pb-4 pt-1">
              <a
                href="https://linkedin.com/company/scalesight"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#0A66C2] text-white text-sm font-semibold hover:bg-[#0958a8] transition-colors"
              >
                <LinkedInIcon />
                ScaleSight on LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Trigger pill ── */}
      <motion.button
        onClick={() => { setOpen(!open); if (open) setWaOpen(false); }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        animate={{ 
          y: open ? 0 : [0, -5, 0],
          scale: hasPlayedWelcome && !open ? 1 : (open ? 1 : [1, 1.08, 1])
        }}
        transition={{ 
          y: { duration: 2.2, repeat: open ? 0 : Infinity, ease: "easeInOut" },
          scale: { duration: 0.8, repeat: open ? 0 : Infinity, ease: "easeInOut" }
        }}
        className="flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-semibold shadow-lg"
        style={{
          background: "linear-gradient(135deg, #09285A 0%, #0ea5e9 100%)",
          boxShadow: open 
            ? "0 8px 32px rgba(9,40,90,0.45), 0 0 0 4px rgba(14,165,233,0.15)" 
            : "0 6px 24px rgba(9,40,90,0.30)",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <WaIcon />
        Contact Us
      </motion.button>
    </div>
  );
};

export default FloatingContact;
