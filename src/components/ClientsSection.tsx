import { motion } from "framer-motion";
import { Building2, Rocket, TrendingUp } from "lucide-react";

const segments = [
  { icon: Rocket, label: "Startups", desc: "Early-stage companies needing financial structure." },
  { icon: Building2, label: "SMEs", desc: "Established businesses scaling their operations." },
  { icon: TrendingUp, label: "Growing Businesses", desc: "Companies expanding across borders." },
];

const ClientsSection = () => (
  <section className="py-20 md:py-24 px-6 bg-card border-y border-primary/5">
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-primary mb-4"
      >
        Who We Work With
      </motion.h2>
      <p className="text-muted-blue mb-14 max-w-md mx-auto">
        We serve ambitious teams that demand clarity and results.
      </p>
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {segments.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl border border-primary/5 bg-off-white"
          >
            <s.icon className="w-8 h-8 text-emerald mx-auto mb-4" />
            <h3 className="font-bold text-primary mb-2">{s.label}</h3>
            <p className="text-sm text-muted-blue">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;


