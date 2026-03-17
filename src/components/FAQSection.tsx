import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What makes ScaleSight different from a traditional CA firm?",
    a: "We are a founder-led advisory firm focused on strategic finance — not just compliance. We combine deep expertise with modern tools to provide actionable insights, not just reports.",
  },
  {
    q: "Do you work with businesses outside India and UAE?",
    a: "While our core expertise is in India and UAE, we work with global clients who have operations or financial interests in these regions. Our advisory frameworks are designed for cross-border clarity.",
  },
  {
    q: "What is a Virtual CFO service?",
    a: "A Virtual CFO provides strategic financial leadership — FP&A, budgeting, investor reporting, and decision support — without the cost of a full-time hire. It's ideal for growing businesses that need senior expertise on demand.",
  },
  {
    q: "How do you ensure data security and confidentiality?",
    a: "We follow strict data protection protocols, use secure cloud-based tools, and maintain confidentiality agreements with all clients. Your financial data is handled with the utmost care.",
  },
  {
    q: "Can I schedule a free consultation?",
    a: "Absolutely. We offer a complimentary discovery call to understand your needs and recommend the right advisory framework for your business.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-24 px-6 bg-off-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-blue">Everything you need to know about working with us.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-primary/5 rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-primary text-sm md:text-base pr-4">{faq.q}</span>
                <motion.div animate={{ rotate: openIdx === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-5 h-5 text-muted-blue flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-blue leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
