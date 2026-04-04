import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What makes ScaleSight different from a traditional CA firm?",
    a: "We are a founder-led advisory firm focused on strategic finance — not just compliance. We combine deep expertise with modern tools to provide actionable insights, not just reports.",
  },
  {
    q: "Do you work with businesses outside India and UAE?",
    a: "While our core expertise is in India and UAE, we work with global clients who have operations or financial interests in these regions. Our advisory frameworks are designed for cross-border clarity.",
  },
  {
    q: "What is a Virtual CFO service?",
    a: "A Virtual CFO provides strategic financial leadership — FP&A, budgeting, investor reporting, and decision support — without the cost of a full-time hire. It's ideal for growing businesses that need senior expertise on demand.",
  },
  {
    q: "How do you ensure data security and confidentiality?",
    a: "We follow strict data protection protocols, use secure cloud-based tools, and maintain confidentiality agreements with all clients. Your financial data is handled with the utmost care.",
  },
  {
    q: "Can I schedule a free consultation?",
    a: "Absolutely. We offer a complimentary discovery call to understand your needs and recommend the right advisory framework for your business.",
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
      className={`
        relative rounded-2xl overflow-hidden
        transition-all duration-300
        ${isOpen
          ? "shadow-[0_4px_32px_rgba(0,0,0,0.09)] border-2 border-primary/20"
          : "border border-primary/8 hover:border-primary/18 hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
        }
        bg-card
      `}
    >
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
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        {/* Number badge */}
        <span
          className={`
            flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center
            text-xs font-bold mr-4 transition-all duration-300
            ${isOpen
              ? "bg-primary text-white"
              : "bg-primary/8 text-primary/50 group-hover:bg-primary/14"
            }
          `}
        >
          {index + 1}
        </span>

        <span
          className={`
            font-bold text-sm md:text-[15px] leading-snug flex-1 pr-4 transition-colors duration-200
            ${isOpen ? "text-primary" : "text-primary/80 group-hover:text-primary"}
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
            ${isOpen ? "bg-primary/10" : "bg-primary/5 group-hover:bg-primary/8"}
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

        {/* Bottom CTA hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-blue/60 font-medium mt-10"
        >
          Still have questions?{" "}
          <a href="#contact" className="text-primary/70 font-bold hover:text-primary transition-colors underline underline-offset-2">
            Let's talk →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default FAQSection;