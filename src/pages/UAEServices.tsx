import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  { title: "Accounting & Bookkeeping", desc: "Precision-led maintenance of your financial records." },
  { title: "Compliance Advisory", desc: "Navigating the evolving UAE regulatory landscape." },
  { title: "IFRS Reporting", desc: "International standard reporting for global transparency." },
  { title: "Internal Audit Support", desc: "Rigorous process reviews and risk mitigation." },
  { title: "Process Reviews", desc: "Streamlining operations for maximum efficiency." },
];

const UAEServices = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-[70px]">
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold tracking-[0.22em] uppercase text-secondary mb-3"
            >
              🇦🇪 Dubai, UAE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
            >
              UAE Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-blue max-w-2xl mx-auto"
            >
              Expert advisory for the UAE regulatory landscape — from accounting to compliance and beyond.
            </motion.p>
          </div>

          <div
            className="rounded-3xl overflow-hidden mb-16 shadow-xl"
            style={{ backgroundImage: "url('/dubai.png')", backgroundSize: "cover", backgroundPosition: "center", minHeight: 280 }}
          >
            <div className="bg-black/55 min-h-[280px] flex items-center justify-center p-10">
              <p className="text-white text-xl font-semibold text-center max-w-xl">
                Accounting, Compliance, IFRS Reporting, Internal Audit & Process Reviews — all under one roof.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-7 rounded-2xl border border-primary/5 bg-off-white hover:border-secondary/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-base text-muted-blue leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default UAEServices;
