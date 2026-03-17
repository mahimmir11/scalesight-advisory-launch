import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, X } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-card p-3 rounded-2xl shadow-2xl border border-primary/5 flex flex-col gap-1 mb-1"
          >
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 hover:bg-off-white rounded-xl transition-colors text-primary font-medium text-sm"
            >
              <MessageCircle className="w-5 h-5 text-emerald" /> WhatsApp
            </a>
            <a
              href="mailto:hello@scalesight.com"
              className="flex items-center gap-3 px-4 py-3 hover:bg-off-white rounded-xl transition-colors text-primary font-medium text-sm"
            >
              <Mail className="w-5 h-5 text-muted-blue" /> Email Us
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-off-white rounded-xl transition-colors text-primary font-medium text-sm"
            >
              <Send className="w-5 h-5 text-primary" /> Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-xl hover:bg-dark-teal transition-all active:scale-95"
        aria-label="Contact options"
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {isOpen ? <X className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
        </motion.div>
      </button>
    </div>
  );
};

const PlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const Send = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

export default FloatingContact;
