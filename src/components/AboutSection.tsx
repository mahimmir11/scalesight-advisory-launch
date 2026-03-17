import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const },
};

const AboutSection = () => (
  <section id="about" className="py-20 md:py-24 px-6 border-y border-primary/5 bg-card">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 md:gap-12">
      <motion.div {...fadeUp}>
        <h4 className="text-primary font-bold mb-4 text-lg">Scale = Growth</h4>
        <p className="text-sm text-muted-blue leading-relaxed">
          We provide the scalable financial infrastructure required to move from
          startup to enterprise — with systems, insights, and strategy.
        </p>
      </motion.div>
      <motion.div {...fadeUp} transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] as const, delay: 0.1 }}>
        <h4 className="text-primary font-bold mb-4 text-lg">Sight = Clarity</h4>
        <p className="text-sm text-muted-blue leading-relaxed">
          Eliminating the fog of numbers. We provide the visibility needed to
          make high-stakes decisions with confidence.
        </p>
      </motion.div>
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] as const, delay: 0.2 }}
        className="md:border-l border-primary/10 md:pl-12"
      >
        <h4 className="text-primary font-bold mb-4 italic text-lg font-display">
          Founder-Led Advisory
        </h4>
        <p className="text-sm text-muted-blue leading-relaxed">
          We are partners, not vendors. We think like owners because we are
          owners. Your growth is our reputation.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
