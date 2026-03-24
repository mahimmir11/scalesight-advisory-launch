import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Eye, Shield, BarChart2, FileCheck, Users } from "lucide-react";
import { useRef } from "react";

const cards = [
  {
    icon: TrendingUp,
    color: "#14b8a6",
    bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
    title: "Scale = Growth",
    desc: "We provide the scalable financial infrastructure required to move from startup to enterprise — with systems, insights, and strategy tailored to your stage.",
  },
  {
    icon: Eye,
    color: "#3b82f6",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    title: "Sight = Clarity",
    desc: "Eliminating the fog of numbers. We deliver real-time visibility into your financials so you can make high-stakes decisions with complete confidence.",
  },
  {
    icon: Users,
    color: "#14b8a6",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    title: "Founder-Led Advisory",
    desc: "We are partners, not vendors. We think like owners because we are owners. Your growth is our reputation — every engagement is personal.",
  },
  {
    icon: Shield,
    color: "#3b82f6",
    bg: "bg-gradient-to-br from-cyan-50 to-blue-50",
    title: "Compliance & Risk",
    desc: "From UAE VAT to Indian GST and corporate tax, we ensure your business stays fully compliant across every jurisdiction you operate in.",
  },
  {
    icon: FileCheck,
    color: "#14b8a6",
    bg: "bg-gradient-to-br from-teal-50 to-emerald-50",
    title: "Audit Readiness",
    desc: "We keep your books audit-ready year-round — clean records, reconciled accounts, and documentation that stands up to any regulatory scrutiny.",
  },
  {
    icon: BarChart2,
    color: "#3b82f6",
    bg: "bg-gradient-to-br from-indigo-50 to-cyan-50",
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

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" className="py-20 md:py-24 px-6 bg-gradient-to-b from-slate-50 via-gray-50 to-slate-50 relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-14">
          <motion.p {...fadeUp} className="text-xs font-bold tracking-[0.22em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 mb-3">
            What We Do
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="text-4xl md:text-5xl font-bold text-primary">
            Built for Every Stage of Your Business
          </motion.h2>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.14 }} className="text-muted-blue mt-4 max-w-xl mx-auto">
            From day-one compliance to enterprise-grade advisory — we cover every financial need your business has.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 100, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Glassmorphism card with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-blue-400/20 to-cyan-400/20 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-[20px] p-8 border border-gray-200/50 shadow-lg group-hover:shadow-2xl group-hover:border-transparent transition-all duration-300 h-full">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-teal-400 via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ padding: '2px' }}>
                  <div className="absolute inset-[2px] bg-white rounded-[18px]" />
                </div>
                
                {/* Icon container with parallax effect */}
                <motion.div 
                  style={{ y }}
                  className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <card.icon className="w-8 h-8" style={{ color: card.color }} />
                </motion.div>
                
                {/* Content with staggered fade-in */}
                <motion.h3 
                  className="text-lg font-bold text-primary mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {card.title}
                </motion.h3>
                
                <motion.p 
                  className="text-sm text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {card.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
