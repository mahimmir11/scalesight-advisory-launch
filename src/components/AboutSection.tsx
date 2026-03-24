import { motion } from "framer-motion";
import { TrendingUp, Eye, Shield, BarChart2, FileCheck, Users } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    color: "#5EE4CF",
    bg: "bg-[#5EE4CF]/10",
    title: "Scale = Growth",
    desc: "We provide the scalable financial infrastructure required to move from startup to enterprise — with systems, insights, and strategy tailored to your stage.",
  },
  {
    icon: Eye,
    color: "#09285A",
    bg: "bg-[#09285A]/10",
    title: "Sight = Clarity",
    desc: "Eliminating the fog of numbers. We deliver real-time visibility into your financials so you can make high-stakes decisions with complete confidence.",
  },
  {
    icon: Users,
    color: "#03C359",
    bg: "bg-[#03C359]/10",
    title: "Founder-Led Advisory",
    desc: "We are partners, not vendors. We think like owners because we are owners. Your growth is our reputation — every engagement is personal.",
  },
  {
    icon: Shield,
    color: "#4B8697",
    bg: "bg-[#4B8697]/10",
    title: "Compliance & Risk",
    desc: "From UAE VAT to Indian GST and corporate tax, we ensure your business stays fully compliant across every jurisdiction you operate in.",
  },
  {
    icon: FileCheck,
    color: "#085B63",
    bg: "bg-[#085B63]/10",
    title: "Audit Readiness",
    desc: "We keep your books audit-ready year-round — clean records, reconciled accounts, and documentation that stands up to any regulatory scrutiny.",
  },
  {
    icon: BarChart2,
    color: "#5EE4CF",
    bg: "bg-[#5EE4CF]/10",
    title: "Strategic Reporting",
    desc: "Monthly MIS reports, cash flow forecasts, and board-ready dashboards that turn raw data into actionable intelligence for leadership.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as const },
};

const AboutSection = () => (
  <section id="about" className="py-20 md:py-24 px-6 bg-[#f7f9fc]">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-14">
        <motion.p {...fadeUp} className="text-xs font-bold tracking-[0.22em] uppercase text-secondary mb-3">
          What We Do
        </motion.p>
        <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="text-4xl md:text-5xl font-bold text-primary">
          Built for Every Stage of Your Business
        </motion.h2>
        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.14 }} className="text-muted-blue mt-4 max-w-xl mx-auto">
          From day-one compliance to enterprise-grade advisory — we cover every financial need your business has.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.07 }}
            className="bg-white rounded-2xl p-7 border border-primary/5 hover:shadow-lg hover:border-secondary/30 transition-all group"
          >
            <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-5`}>
              <card.icon className="w-6 h-6" style={{ color: card.color }} />
            </div>
            <h3 className="text-base font-bold text-primary mb-3">{card.title}</h3>
            <p className="text-sm text-muted-blue leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default AboutSection;
