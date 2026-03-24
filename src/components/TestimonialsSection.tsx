import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    company: "TechScale Solutions",
    text: "ScaleSight transformed our financial operations. Their Virtual CFO service gave us the strategic clarity we needed to raise our Series A.",
  },
  {
    name: "Fatima Al-Rashidi",
    company: "Gulf Ventures LLC",
    text: "Navigating UAE compliance was a nightmare before ScaleSight. Their team made IFRS reporting seamless and stress-free.",
  },
  {
    name: "Priya Sharma",
    company: "GreenLeaf Exports",
    text: "The FP&A and budgeting support from ScaleSight helped us forecast with confidence. We've never had this level of financial visibility.",
  },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-24 px-6 bg-off-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-primary mb-14"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="px-4"
            >
              <Quote className="w-10 h-10 text-emerald/30 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-primary leading-relaxed mb-8 italic font-sans font-bold">
                "{testimonials[idx].text}"
              </p>
              <p className="font-bold text-primary">{testimonials[idx].name}</p>
              <p className="text-sm text-muted-blue">{testimonials[idx].company}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary/5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-primary" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === idx ? "bg-emerald w-6" : "bg-primary/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary/5 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


