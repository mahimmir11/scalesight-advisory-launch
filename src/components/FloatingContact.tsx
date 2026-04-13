import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, MessageCircle, X, MessageSquare } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div 
      ref={containerRef} 
      className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3" 
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{ 
              minWidth: "280px",
              maxWidth: "300px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)"
            }}
          >
            {/* Header with Logo */}
            <div className="bg-white px-4 py-4 flex items-center justify-center">
              <img src="/logo.png" alt="ScaleSight" className="h-9 w-auto" />
            </div>

            {/* Contact Options */}
            <div className="px-3 pb-3 space-y-2">
              {/* Phone */}
              <motion.a
                href="tel:+000000000000"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border-2 border-gray-100 hover:border-[#03C359]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#03C359] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 font-medium mb-0.5">Call Us</p>
                  <p className="text-sm font-bold text-[#0B1F3A]">+00 00000 00000</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:hello@scalesight.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border-2 border-gray-100 hover:border-[#0B1F3A]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 font-medium mb-0.5">Email Us</p>
                  <p className="text-sm font-bold text-[#0B1F3A]">hello@scalesight.com</p>
                </div>
              </motion.a>

              {/* Get in Touch */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border-2 border-gray-100 hover:border-[#00C2A8]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00C2A8] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#0B1F3A]">Get in Touch</p>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="px-4 pb-4">
              <div className="flex items-center justify-center gap-3">
                <motion.a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#25D366] shadow-md hover:shadow-lg transition-shadow"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                  style={{
                    background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="5" y="5" width="14" height="14" rx="4"/>
                    <circle cx="12" cy="12" r="3"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="white"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0A66C2] shadow-md hover:shadow-lg transition-shadow"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M8.5 10h-2v7h2v-7zm-1-5.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm9 5.5c-1.4 0-2.26.77-2.64 1.5h-.04V10h-2.5v7h2.6v-3.47c0-1.09.21-2.15 1.56-2.15 1.33 0 1.35 1.25 1.35 2.22V17H19v-3.93c0-2.25-.48-3.98-3.11-3.98z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? {} : {
          y: [0, -8, 0],
        }}
        transition={isOpen ? {} : {
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
        style={{
          background: isOpen 
            ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
            : "linear-gradient(135deg, #00C2A8 0%, #0ea5e9 100%)",
          boxShadow: isOpen
            ? "0 10px 40px rgba(239, 68, 68, 0.4)"
            : "0 10px 40px rgba(0, 194, 168, 0.4)"
        }}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white relative z-10" strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-7 h-7 text-white relative z-10" strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
