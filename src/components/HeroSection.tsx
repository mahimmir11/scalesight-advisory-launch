import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const },
};

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background with zoom */}
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ scale: 1 }}
      animate={{ scale: 1.12 }}
      transition={{
        duration: 14,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <img
        src={heroBg}
        alt=""
        className="w-full h-full object-cover blur-[2px]"
      />
    </motion.div>

    {/* Light overlay */}
    <div className="absolute inset-0 z-[1] bg-primary/30" />
    <div className="absolute inset-0 z-[2] bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.h1
        {...fadeUp}
        className="text-4xl sm:text-5xl md:text-7xl font-display text-gold leading-[1.08] mb-8 drop-shadow-lg"
      >
        Strategic Expertise From{" "}
        <span className="italic text-secondary">Dedicated Advisors</span>
      </motion.h1>

      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="text-base md:text-lg text-primary-foreground leading-relaxed mb-14 max-w-xl mx-auto drop-shadow-md"
      >
        At ScaleSight, we deliver tailored, insight-driven advisory to help businesses
        see clearly, stay compliant, and grow confidently.
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-10 py-4 rounded-full font-semibold text-sm tracking-wide hover:brightness-110 transition-all group"
        >
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#showcase"
          className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-primary-foreground/10 transition-all"
        >
          Learn More
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-primary-foreground/50" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
