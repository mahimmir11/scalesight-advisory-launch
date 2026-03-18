import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";
import officeImg from "@/assets/office-team.jpg";
import missionImg from "@/assets/mission-vision.jpg";
import whyImg from "@/assets/why-partner.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const },
};

const imgReveal = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.19, 1, 0.22, 1] as const },
};

const ShowcaseSection = () => (
  <section id="showcase" className="bg-background">
    {/* Curved divider from hero */}
    <div className="relative -mt-16 z-20">
      <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none">
        <path
          d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z"
          fill="hsl(var(--background))"
        />
      </svg>
    </div>

    {/* Section Header */}
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 text-center">
      <motion.h2
        {...fadeUp}
        className="text-3xl sm:text-4xl md:text-5xl font-display text-primary mb-4"
      >
        The <span className="italic text-secondary">ScaleSight</span> Difference
      </motion.h2>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="text-muted-foreground max-w-2xl mx-auto"
      >
        A Strategic Force Behind Your Numbers: Driven by expertise. Focused on strategy. Committed to your growth.
      </motion.p>
    </div>

    {/* Block 1 — Who We Are (text left, image right) */}
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div {...fadeUp}>
          <h3 className="text-2xl md:text-3xl font-display text-primary mb-6">Who We Are</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our team is more than just a group of accountants; we are a strategic unit.
            We combine expert minds with data-driven tools to ensure accuracy and drive measurable results.
          </p>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/5 border border-secondary/10">
            <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">
              Client-first mindset, local insight, and lasting relationships based on trust.
            </p>
          </div>
        </motion.div>
        <motion.div {...imgReveal} className="rounded-2xl overflow-hidden shadow-xl">
          <img src={officeImg} alt="Modern advisory office" className="w-full h-80 md:h-96 object-cover" />
        </motion.div>
      </div>
    </div>

    {/* Block 2 — Mission & Vision (image left, text right) */}
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div {...imgReveal} className="rounded-2xl overflow-hidden shadow-xl md:order-1 order-2">
          <img src={missionImg} alt="Financial strategy and planning" className="w-full h-80 md:h-96 object-cover" />
        </motion.div>
        <motion.div {...fadeUp} className="md:order-2 order-1">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-4">Our Mission & Vision</p>
          <h3 className="text-2xl md:text-3xl font-display text-primary mb-5">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            To deliver brilliance through expert financial insights, maintain perfect
            balance in compliance, and build strong foundations for confident, sustainable growth.
          </p>
          <h3 className="text-2xl md:text-3xl font-display text-primary mb-5 flex items-center gap-3">
            <Eye className="w-6 h-6 text-secondary" />
            Our Vision
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            To become the most trusted and forward-thinking financial partner,
            empowering businesses through expert accounting, strategic advisory,
            and AI-driven innovation.
          </p>
        </motion.div>
      </div>
    </div>

    {/* Block 3 — Why Partner With Us (text left, image right) */}
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div {...fadeUp}>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-4">Why Partner With Us</p>
          {[
            {
              title: "Specialized Advisory Focus",
              desc: "We are purpose-built to serve privately owned companies and entrepreneurs, focusing on profitability and strategic growth.",
            },
            {
              title: "Proven Local Expertise",
              desc: "Offering deep knowledge and a comprehensive understanding of business regulations across India and UAE.",
            },
            {
              title: "Customized Solutions",
              desc: "We implement tailored accounting, advisory, and compliance strategies designed specifically for your business needs.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="mb-6"
            >
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div {...imgReveal} className="rounded-2xl overflow-hidden shadow-xl">
          <img src={whyImg} alt="Premium advisory office" className="w-full h-80 md:h-96 object-cover" />
        </motion.div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center pb-20">
      <motion.a
        {...fadeUp}
        href="#contact"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-sm tracking-wide hover:brightness-110 transition-all"
      >
        Schedule Your Strategic Consultation
      </motion.a>
    </div>
  </section>
);

export default ShowcaseSection;
