import { motion } from "framer-motion";
import { Users, Target, Eye, BarChart3 } from "lucide-react";

const items = [
  {
    title: "Founder-Led",
    desc: "Direct access to senior expertise. No junior hand-offs.",
    iconColor: "#5EE4CF",
    bg: "bg-[#5EE4CF]/10",
    Icon: Users,
  },
  {
    title: "Small Business Focused",
    desc: "Built for the needs of growing firms, not enterprise bureaucracy.",
    iconColor: "#03C359",
    bg: "bg-[#03C359]/10",
    Icon: Target,
  },
  {
    title: "Clarity Over Complexity",
    desc: "We simplify the complex so you can focus on what matters.",
    iconColor: "#4B8697",
    bg: "bg-[#4B8697]/10",
    Icon: Eye,
  },
  {
    title: "Insight-Driven",
    desc: "Every recommendation is backed by data and deep analysis.",
    iconColor: "#09285A",
    bg: "bg-[#09285A]/10",
    Icon: BarChart3,
  },
];

const WhySection = () => (
  <section className="py-20 md:py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Why ScaleSight
        </h2>
        <p className="text-muted-blue max-w-lg mx-auto">
          What sets us apart from traditional accounting firms.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-primary/10">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-center px-8 py-8"
          >
            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-5`}>
              <item.Icon className="w-7 h-7" style={{ color: item.iconColor }} />
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
