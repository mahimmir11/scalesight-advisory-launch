import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb, Award, Globe, Users2 } from "lucide-react";
import officeTeamImg from "../assets/office-team.jpg";
import missionVisionImg from "../assets/mission-vision.jpg";
import whyPartnerImg from "../assets/why-partner.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as const },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p {...fadeUp} className="text-xs font-bold tracking-[0.22em] uppercase text-teal-500 mb-3">
            ABOUT US
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-primary mb-4">
            The <span className="text-teal-500">ScaleSight</span> Difference
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-gray-600 max-w-3xl mx-auto text-lg">
            A Strategic Force Behind Your Numbers. Driven by expertise. Focused on strategy. Committed to your growth.
          </motion.p>
        </div>

        {/* Section 1: Who We Are - Text Left, Image Right (office-team.jpg) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Who We Are</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team is more than just a group of accountants; we are a strategic unit. We combine expert minds with the power of cutting-edge AI tools to ensure accuracy and deliver measurable results.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We don't just crunch numbers — we translate them into actionable insights that fuel decision-making, optimize cash flow, and unlock growth opportunities. Every engagement is built on trust, transparency, and a relentless focus on your success.
            </p>
            <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-sm">
                <strong>Client-first mindset.</strong> Local insight, and lasting relationships based on trust. We work as an extension of your team — not as an outsourced vendor.
              </p>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={officeTeamImg} alt="Who We Are" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        {/* Section 2: Mission & Vision - Image Left, Text Right (mission-vision.jpg) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
          >
            <img src={missionVisionImg} alt="Mission & Vision" className="w-full h-full object-cover" />
          </motion.div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-teal-500 mb-4">OUR MISSION & VISION</p>
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-teal-600" />
                </div>
                <h4 className="text-2xl font-bold text-primary">Our Mission</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver brilliance through expert financial insights, maintain perfect balance in compliance, and build strong foundations for confident, sustainable growth. We exist to simplify complexity and empower businesses to scale without financial friction.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-primary">Our Vision</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and forward-thinking financial partner, recognized globally through expert accounting, strategic advisory, and AI-driven innovation. We aim to redefine what advisory means — moving from reactive compliance to proactive growth strategy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Why Partner With Us - Text Left, Image Right (why-partner.jpg) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-teal-500 mb-4">WHY PARTNER WITH US</p>
            <h3 className="text-3xl font-bold text-primary mb-8">Why Choose ScaleSight</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-2">Specialized UAE & India Focus</h5>
                  <p className="text-gray-600 text-sm">
                    We are purpose-built to serve privately-owned companies and entrepreneurs across UAE and India. Focusing on profitability, strategic tax planning, and cross-border compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-2">Proven Local Expertise</h5>
                  <p className="text-gray-600 text-sm">
                    Offering deep knowledge and a comprehensive understanding of business regulations, VAT, corporate tax, and compliance requirements throughout UAE and India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center flex-shrink-0">
                  <Users2 className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-2">Customized Solutions</h5>
                  <p className="text-gray-600 text-sm">
                    We implement tailored accounting, bookkeeping, and tax strategies designed specifically for your business needs — no cookie-cutter packages, just solutions that fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={whyPartnerImg} alt="Why Partner With Us" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
