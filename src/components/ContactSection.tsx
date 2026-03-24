import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "Hello, I would like to connect with ScaleSight regarding your services.",
  });

  const countryCodes = [
    { code: "+91", flag: "🇮🇳", label: "India" },
    { code: "+971", flag: "🇦🇪", label: "UAE" },
    { code: "+44", flag: "🇬🇧", label: "UK" },
    { code: "+1", flag: "🇺🇸", label: "US" },
    { code: "+65", flag: "🇸🇬", label: "SG" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Inquiry from " + form.name);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.countryCode} ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@scalesight.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-24 px-6 bg-card border-t border-primary/5">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Talk
          </h2>
          <p className="text-muted-blue">
            Ready to gain clarity? Reach out and let's start a conversation.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-off-white text-primary placeholder:text-muted-blue/50 focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald/50 transition-all text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-off-white text-primary placeholder:text-muted-blue/50 focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald/50 transition-all text-sm"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">Phone</label>
            <div className="flex gap-2">
              <select
                value={form.countryCode}
                onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                className="px-3 py-3 rounded-xl border border-primary/10 bg-off-white text-primary text-sm focus:outline-none focus:ring-2 focus:ring-emerald/30"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="flex-1 px-4 py-3 rounded-xl border border-primary/10 bg-off-white text-primary placeholder:text-muted-blue/50 focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald/50 transition-all text-sm"
                placeholder="Phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-off-white text-primary placeholder:text-muted-blue/50 focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald/50 transition-all text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-dark-teal transition-all shadow-lg shadow-primary/10"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;


