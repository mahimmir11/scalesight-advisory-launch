import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
};

const HeroSection = () => (
  <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-off-white">
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="max-w-3xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald/10 text-emerald text-xs font-bold tracking-widest uppercase mb-6">
          Strategic Finance Advisory
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display text-primary leading-[1.1] mb-8">
          Helping businesses see clearly, stay compliant, and{" "}
          <span className="italic text-muted-blue">grow confidently.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-blue leading-relaxed mb-10 max-w-2xl">
          We bridge the gap between traditional accounting and strategic growth.
          Founder-led advisory for the next generation of global enterprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group hover:bg-dark-teal transition-all"
          >
            Schedule a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4 px-4 py-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-off-white bg-muted-blue/20"
                />
              ))}
            </div>
            <p className="text-sm text-primary/60 font-medium italic">
              Trusted by 50+ scaling firms
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
