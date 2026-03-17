import { motion } from "framer-motion";
import { Users, Target, Eye, BarChart3 } from "lucide-react";

const items = [
  { icon: Users, title: "Founder-Led", desc: "Direct access to senior expertise. No junior hand-offs." },
  { icon: Target, title: "Small Business Focused", desc: "Built for the needs of growing firms, not enterprise bureaucracy." },
  { icon: Eye, title: "Clarity Over Complexity", desc: "We simplify the complex so you can focus on what matters." },
  { icon: BarChart3, title: "Insight-Driven", desc: "Every recommendation is backed by data and deep analysis." },
];

const WhySection = () => (
  <section className="py-20 md:py-24 px-6 bg-off-white">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">
          Why ScaleSight
        </h2>
        <p className="text-muted-blue max-w-lg mx-auto">
          What sets us apart from traditional accounting firms.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-muted-blue leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
