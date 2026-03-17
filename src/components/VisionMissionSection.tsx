import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const VisionMissionSection = () => (
  <section className="py-20 md:py-24 px-6 bg-card border-y border-primary/5">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 md:p-10 rounded-2xl bg-off-white border border-primary/5"
      >
        <Eye className="w-8 h-8 text-emerald mb-5" />
        <h3 className="text-2xl font-display text-primary mb-4">Our Vision</h3>
        <p className="text-muted-blue leading-relaxed">
          To become a trusted global finance advisory firm that empowers
          businesses with clarity, compliance, and the confidence to scale —
          across borders and industries.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="p-8 md:p-10 rounded-2xl bg-off-white border border-primary/5"
      >
        <Target className="w-8 h-8 text-primary mb-5" />
        <h3 className="text-2xl font-display text-primary mb-4">Our Mission</h3>
        <p className="text-muted-blue leading-relaxed">
          To support small and growing businesses with high-quality finance
          advisory, compliance support, and strategic insights — making
          world-class financial expertise accessible and affordable.
        </p>
      </motion.div>
    </div>
  </section>
);

export default VisionMissionSection;
