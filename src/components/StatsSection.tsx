import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "CERTIFIED SPECIALISTS" },
  { value: 5, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { value: 150, suffix: "+", label: "SATISFIED CUSTOMERS" },
];

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return count;
}

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold text-primary"
      >
        {count}{suffix}
      </motion.span>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xs font-semibold tracking-[0.18em] text-muted-blue uppercase"
      >
        {label}
      </motion.p>
      {/* Aqua underline accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        className="h-[3px] w-10 rounded-full bg-secondary origin-left"
      />
    </div>
  );
};

const StatsSection = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="max-w-4xl mx-auto px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-[0.22em] uppercase text-secondary mb-3"
        >
          Our Track Record
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-3xl md:text-4xl font-bold text-primary"
        >
          Numbers That Speak for Themselves
        </motion.h2>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-6 md:gap-12">
        {stats.map((s, i) => (
          <StatItem key={i} {...s} />
        ))}
      </div>

      {/* Divider line with centre accent */}
      <div className="mt-14 flex items-center justify-center gap-0">
        <div className="h-px flex-1 bg-border" />
        <div className="mx-4 h-[3px] w-16 rounded-full bg-secondary" />
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  </section>
);

export default StatsSection;
