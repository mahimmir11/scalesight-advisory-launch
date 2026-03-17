import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const },
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated background with slow zoom */}
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <img
        src={heroBg}
        alt=""
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Dark overlay */}
    <div className="absolute inset-0 z-[1] bg-primary/75" />

    {/* Subtle gradient overlay for depth */}
    <div className="absolute inset-0 z-[2] bg-gradient-to-t from-primary/90 via-transparent to-primary/40" />

    {/* Content */}
    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32 md:py-0">
      <motion.div {...fadeUp}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary text-xs font-bold tracking-widest uppercase mb-8 border border-secondary/20">
          Strategic Finance Advisory
        </span>
      </motion.div>

      <motion.h1
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.15 }}
        className="text-3xl sm:text-5xl md:text-7xl font-display text-primary-foreground leading-[1.1] mb-8"
      >
        Strategic Expertise From{" "}
        <span className="italic text-secondary">Dedicated Advisors</span>
      </motion.h1>

      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="text-base md:text-xl text-primary-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto"
      >
        Helping businesses see clearly, stay compliant, and grow confidently.
        Founder-led advisory for the next generation of global enterprises.
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.45 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <a
          href="#contact"
          className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20"
        >
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#about"
          className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/10 transition-all"
        >
          Learn More
        </a>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.6 }}
        className="mt-14 flex items-center justify-center gap-4"
      >
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/20"
            />
          ))}
        </div>
        <p className="text-sm text-primary-foreground/50 font-medium italic">
          Trusted by 50+ scaling firms
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
