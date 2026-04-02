import { motion } from "framer-motion";

const founders = [
  {
    name: "Zaid Shaikh",
    role: "Co-Founder · Virtual CFO & Finance Advisory",
    exp: ["FP&A", "Valuation", "Virtual CFO", "India & UK Taxation"],
    desc: "Strategic, insight-driven, and focused on moving the needle for high-growth founders.",
    img: "/zaid.png",
  },
  {
    name: "Samee Shaikh",
    role: "Business Development · Compliance & UAE Advisory",
    exp: ["Internal Audit", "Compliance Advisory", "IFRS", "Stock & Process Audits"],
    desc: "Compliance-focused, detail-oriented, and trust-led — ensuring global operations remain bulletproof.",
    img: "/samee.png",
  },
];

const FoundersSection = () => (
  <section id="founders" className="py-20 md:py-24 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Founder-Led Precision
        </h2>
        <p className="text-muted-blue">
          Direct access to senior expertise. No junior hand-offs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {founders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Bigger image, full colour */}
            <div className="relative overflow-hidden rounded-2xl w-72 h-80 mb-6 shadow-md">
              <img
                src={f.img}
                alt={f.name}
                className="object-cover object-top w-full h-full"
              />
            </div>

            {/* Info always visible */}
            <h3 className="text-xl font-bold text-primary mb-1">{f.name}</h3>
            <p className="text-secondary font-semibold text-xs mb-4 uppercase tracking-wider">{f.role}</p>
            <p className="text-muted-blue text-sm mb-5 leading-relaxed max-w-xs">{f.desc}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {f.exp.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/5 text-primary/70 text-xs font-medium border border-primary/10"
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
