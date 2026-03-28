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
    id="hero"
    className="relative bg-white overflow-hidden pt-[70px]"
    style={{ minHeight: "100vh" }}
  >
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[calc(100vh-70px)] py-16">
      {/* Left — text */}
      <div className="flex-1 max-w-xl">
        <motion.p
          {...fadeUp}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-5"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Financial Advisory · UAE &amp; India
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold leading-[1.15] mb-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.02em",
            color: "#0f1f3d",
          }}
        >
          Strategic Expertise From{" "}
          <span style={{ color: "#0f1f3d" }}>Dedicated Advisors</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-lg"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          At ScaleSight, we deliver tailored, insight-driven advisory to help businesses
          see clearly, stay compliant, and grow confidently.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:brightness-110 hover:scale-105 transition-all group shadow-md"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "#2dd4bf",
              color: "#0f1f3d",
            }}
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all shadow-md hover:opacity-90"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "#0f1f3d",
              color: "#ffffff",
            }}
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Right — illustration */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
        className="flex-1 flex items-center justify-center"
      >
        <img
          src="/hero1.png"
          alt="Financial advisory illustration"
          className="w-full max-w-lg object-contain drop-shadow-xl"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
