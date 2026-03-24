import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, TrendingUp, Shield, Users } from "lucide-react";
import officeImg from "@/assets/office-team.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const },
};

const ShowcaseSection = () => (
  <section id="showcase" className="bg-white py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          {...fadeUp}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          The <span className="text-secondary">ScaleSight</span> Difference
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="text-base text-muted-blue max-w-2xl mx-auto leading-relaxed"
        >
          A Strategic Force Behind Your Numbers: Driven by expertise. Focused on strategy. Committed to your growth.
        </motion.p>
      </div>

      {/* Block 1 — Who We Are */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div {...fadeUp}>
          <h3 className="text-3xl font-bold text-primary mb-6">Who We Are</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Our team is more than just a group of accountants; we are a strategic unit. We combine expert minds with the power of cutting-edge AI tools to ensure accuracy and drive measurable results.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We don't just crunch numbers — we translate them into actionable insights that fuel decision-making, optimize cash flow, and unlock growth opportunities. Every engagement is built on trust, transparency, and a relentless focus on your success.
          </p>
          <div className="flex items-start gap-3 p-5 rounded-xl bg-secondary/5 border border-secondary/10">
            <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Client-first mindset, local insight, and lasting relationships based on trust. We work as an extension of your team — not as an outsourced vendor.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={officeImg}
            alt="ScaleSight advisory team"
            className="w-full h-80 md:h-[420px] object-cover"
          />
        </motion.div>
      </div>

      {/* Block 2 — Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div {...fadeUp} className="order-2 md:order-1">
          <img
            src={officeImg}
            alt="Mission and vision"
            className="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div {...fadeUp} className="order-1 md:order-2">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-secondary mb-4">Our Mission & Vision</p>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              To deliver brilliance through expert financial insights, maintain perfect balance in compliance, and build strong foundations for confident, sustainable growth. We exist to simplify complexity and empower businesses to scale without financial friction.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              To become the most trusted and forward-thinking financial partner, empowering businesses through expert accounting, strategic advisory, and AI-driven innovation. We aim to redefine what advisory means — moving from reactive compliance to proactive growth strategy.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Block 3 — Why Partner With Us */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-secondary mb-6">Why Partner With Us</p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#5EE4CF]/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-[#5EE4CF]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">Specialized UAE & India Focus</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are purpose-built to serve privately owned companies and entrepreneurs across UAE and India, focusing on profitability, strategic tax planning, and cross-border compliance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#03C359]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#03C359]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">Proven Local Expertise</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Offering deep local knowledge and a comprehensive understanding of business regulations, VAT, corporate tax, and compliance requirements throughout UAE and India.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#4B8697]/10 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-[#4B8697]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">Customized Solutions</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We implement tailored accounting, bookkeeping, and tax strategies designed specifically for your business needs — no cookie-cutter packages, just solutions that fit.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={officeImg}
            alt="Why partner with us"
            className="w-full h-80 md:h-[420px] object-cover"
          />
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <motion.a
          {...fadeUp}
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-sm tracking-wide hover:brightness-110 transition-all shadow-lg"
        >
          Schedule Your Strategic Consultation
        </motion.a>
      </div>

    </div>
  </section>
);

export default ShowcaseSection;
