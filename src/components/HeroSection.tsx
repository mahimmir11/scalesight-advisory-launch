import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const },
};

const HeroSection = () => (
  <section
    className="relative flex items-center justify-center overflow-hidden"
    style={{ minHeight: "100vh" }}
  >
    {/* Background — starts at 100%, loops zoom in → out → in */}
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      animate={{ scale: [1, 1.08, 1] }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />

    {/* Overlays */}
    <div className="absolute inset-0 z-[1] bg-primary/50" />
    <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/10 via-transparent to-black/40" />

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.p
        {...fadeUp}
        className="text-xs font-semibold tracking-[0.22em] uppercase text-secondary mb-5"
      >
        Financial Advisory · UAE & India
      </motion.p>

      <motion.h1
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-6 drop-shadow"
      >
        Strategic Expertise From{" "}
        <span className="text-secondary">Dedicated Advisors</span>
      </motion.h1>

      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-xl mx-auto font-normal"
      >
        At ScaleSight, we deliver tailored, insight-driven advisory to help businesses
        see clearly, stay compliant, and grow confidently.
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.35 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:brightness-110 transition-all group"
        >
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#showcase"
          className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-white/10 transition-all"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
