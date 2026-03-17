import { motion } from "framer-motion";
import zaidImg from "@/assets/zaid.jpg";
import sameeImg from "@/assets/samee.jpg";

const founders = [
  {
    name: "Zaid Shaikh",
    role: "Co-Founder | Virtual CFO & Finance Advisory",
    exp: ["FP&A", "Valuation", "Virtual CFO", "India & UK Taxation"],
    desc: "Strategic, insight-driven, and focused on moving the needle for high-growth founders.",
    img: zaidImg,
  },
  {
    name: "Samee Shaikh",
    role: "Business Development | Compliance & UAE Advisory",
    exp: ["Internal Audit", "Compliance Advisory", "IFRS", "Stock & Process Audits"],
    desc: "Compliance-focused, detail-oriented, and trust-led — ensuring global operations remain bulletproof.",
    img: sameeImg,
  },
];

const FoundersSection = () => (
  <section id="founders" className="py-20 md:py-24 px-6 bg-off-white">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">
          Founder-Led Precision
        </h2>
        <p className="text-muted-blue">
          Direct access to senior expertise. No junior hand-offs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-7 bg-primary/5">
              <img
                src={f.img}
                alt={f.name}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-50" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">{f.name}</h3>
            <p className="text-emerald font-semibold text-xs mb-4 uppercase tracking-wider">
              {f.role}
            </p>
            <p className="text-muted-blue text-sm mb-5 leading-relaxed">{f.desc}</p>
            <div className="flex flex-wrap gap-2">
              {f.exp.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/5 text-primary/70 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FoundersSection;
