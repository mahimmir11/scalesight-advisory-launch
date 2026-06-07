'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What makes ScaleSight different from a traditional CA firm?",
    a: "Two things. First, every client is handled directly by experienced Chartered Accountants — not a junior associate. Second, our bookkeeping is run with CFO-level oversight: we don't just record transactions, we flag tax exposure, cash gaps and reporting issues as they happen — at a price that delivers genuine value.",
  },
  {
    q: "Do you work with businesses outside India and UAE?",
    a: "Our core practice is India and the UAE. We will take on global clients only when their work meaningfully connects to one of these two markets — for example, a UK or US holding company with an Indian subsidiary.",
  },
  {
    q: "What is a Virtual CFO service?",
    a: "A Virtual CFO is a part-time, senior finance lead for businesses that cannot justify a full-time CFO. With us, that means monthly reviews, cash-flow forecasting, MIS dashboards in Power BI, board and investor reporting, and direct WhatsApp access to a Chartered Accountant. Typical engagement: 1–3 days of attention per month, billed at a fixed monthly fee.",
  },
  {
    q: "How do you ensure data security and confidentiality?",
    a: "Books are maintained on your own Zoho, Tally or QuickBooks account — we do not move your data to ours. Access is role-based, files are exchanged through encrypted cloud storage, and every engagement is covered by a signed NDA.",
  },
  {
    q: "Can I schedule a free consultation?",
    a: "Yes — a 30-minute discovery call is free. We will review your current setup, flag the two or three things that need immediate attention, and tell you honestly whether you need us or not.",
  },
  {
    q: "How much does your service cost compared to hiring an in-house accountant?",
    a: "Our engagements are typically priced at a fraction of the cost of an equivalent in-house accountant or finance manager — and that price already includes senior Chartered Accountant oversight, modern accounting tools, and structured monthly reporting. Pricing is fixed monthly, scoped in writing, and adjusted only if the scope itself changes.",
  },
  {
    q: "Why does my business need a structured accounting partner?",
    a: "Unstructured accounting silently costs businesses money — through missed tax deadlines, regulatory penalties, weak cash visibility, and a lack of decision-ready numbers. A structured accounting partner keeps your books audit-ready, protects you from FTA and tax penalties, gives leadership real-time financial visibility, and significantly improves the value of the business when it comes time to raise capital, attract investment or sell.",
  },
];

// Typewriter hook
function useTypewriter(text: string, active: boolean, duration: number = 2000) {
  const [displayed, setDisplayed] = useState("");
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    const totalChars = text.length;
    const msPerChar = duration / totalChars;
    let charIndex = 0;
    let lastTime: number | null = null;
    let accumulated = 0;

    const tick = (now: number) => {
      if (lastTime !== null) accumulated += now - lastTime;
      lastTime = now;
      while (accumulated >= msPerChar && charIndex < totalChars) {
        charIndex++;
        accumulated -= msPerChar;
      }
      setDisplayed(text.slice(0, charIndex));
      if (charIndex < totalChars) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [active, text, duration]);

  return displayed;
}

// Animated heading — word by word reveal with blur + slide
const AnimatedHeading = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  // "Frequently Asked" = dark primary, "Questions" = teal
  const words = text.split(" ");
  const tealFrom = 2; // words index where teal starts

  return (
    <h2
      ref={ref}
      className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.55,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`inline-block mr-[0.25em] ${
            i >= tealFrom ? "text-teal-500" : "text-primary"
          }`}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

// Animated description typewriter on scroll into view
const AnimatedDescription = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const displayed = useTypewriter(text, isInView, 1200);

  return (
    <p ref={ref} className="text-muted-blue text-base font-medium">
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="inline-block w-[2px] h-[1em] bg-muted-blue/60 align-middle ml-[2px]"
        />
      )}
    </p>
  );
};

// Individual FAQ Item
const FAQItem = ({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const displayedAnswer = useTypewriter(faq.a, isOpen, 2000);
  const isDone = displayedAnswer.length >= faq.a.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden bg-card group/item"
      style={{
        border: isOpen ? "2px solid #4b5563" : "2px solid #6b7280",
        boxShadow: isOpen 
          ? "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(75,85,99,0.1)" 
          : "0 2px 12px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Shimmer/shine effect overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          transform: "translateX(-100%)",
        }}
        animate={{
          transform: isOpen ? "translateX(-100%)" : ["translateX(-100%)", "translateX(200%)"],
        }}
        transition={{
          duration: 2.5,
          repeat: isOpen ? 0 : Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />

      {/* Left accent bar — only visible when open */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent rounded-l-2xl"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isOpen ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left group/btn relative z-10"
        onMouseEnter={(e) => {
          const parent = e.currentTarget.closest('.group\\/item') as HTMLElement;
          if (parent && !isOpen) {
            parent.style.borderColor = '#4b5563';
            parent.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1), 0 0 0 1px rgba(75,85,99,0.15)';
          }
        }}
        onMouseLeave={(e) => {
          const parent = e.currentTarget.closest('.group\\/item') as HTMLElement;
          if (parent && !isOpen) {
            parent.style.borderColor = '#6b7280';
            parent.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
          }
        }}
      >
        {/* Number badge */}
        <span
          className={`
            flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center
            text-xs font-bold mr-4 transition-all duration-300
            ${isOpen
              ? "bg-primary text-white"
              : "bg-primary/8 text-primary/50 group-hover/btn:bg-primary/14"
            }
          `}
        >
          {index + 1}
        </span>

        <span
          className={`
            font-bold text-sm md:text-[15px] leading-snug flex-1 pr-4 transition-colors duration-200
            ${isOpen ? "text-primary" : "text-primary/80 group-hover/btn:text-primary"}
          `}
        >
          {faq.q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className={`
            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
            transition-colors duration-200
            ${isOpen ? "bg-primary/10" : "bg-primary/5 group-hover/btn:bg-primary/8"}
          `}
        >
          <ChevronDown
            className={`w-4 h-4 transition-colors duration-200 ${
              isOpen ? "text-primary" : "text-muted-blue"
            }`}
          />
        </motion.div>
      </button>

      {/* Divider line — only when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "left" }}
            className="mx-6 h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"
          />
        )}
      </AnimatePresence>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pl-[4.25rem] pr-6 pb-5 pt-3 text-sm md:text-[14px] font-semibold text-primary/75 leading-relaxed tracking-[0.01em]">
              {displayedAnswer}
              {!isDone && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.55 }}
                  className="inline-block w-[2px] h-[1em] bg-primary/40 align-middle ml-[2px] rounded-full"
                />
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Section
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-20 md:py-24 px-6 bg-off-white">
      <div className="max-w-3xl mx-auto">

        {/* Heading block */}
        <div ref={headingRef} className="text-center mb-14">
          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isHeadingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: "backOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/12 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary/60">
              Got Questions?
            </span>
          </motion.div>

          {/* Main heading — word by word blur + slide */}
          <AnimatedHeading text="Frequently Asked Questions" />

          {/* Underline accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isHeadingInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
            className="mx-auto w-16 h-[3px] rounded-full bg-gradient-to-r from-primary/40 via-primary/70 to-primary/40 mb-5"
          />

          {/* Description with typewriter */}
          <AnimatedDescription text="Everything you need to know about working with us. Can't find an answer? Reach out directly." />
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default FAQSection;