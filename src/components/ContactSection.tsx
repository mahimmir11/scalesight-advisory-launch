import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, Linkedin, ExternalLink, CheckCircle2 } from "lucide-react";

// ── Social links ──────────────────────────────────────────────────────────────
const socials = [
  {
    label: "LinkedIn",
    handle: "ScaleSight Advisory",
    sub: "Follow us for business insights",
    href: "https://linkedin.com/company/scalesight",
    highlight: true,
    bg: "bg-[#0A66C2]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="white" fillOpacity="0.15" />
        <path fill="white" d="M7.75 9.5h-2.5v8h2.5v-8zm-1.25-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm10 4c-1.2 0-2 .6-2.3 1.2V9.5h-2.5v8h2.5v-4.3c0-1.1.6-1.7 1.5-1.7.9 0 1.3.6 1.3 1.7v4.3h2.5v-4.8c0-2.2-1.2-3.2-3-3.2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "+00 00000 00000",
    sub: "Chat with us directly",
    href: "https://wa.me/919999999999",
    highlight: false,
    bg: "bg-[#25D366]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path fill="white" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@scalesight",
    sub: "Behind the scenes & updates",
    href: "https://instagram.com/scalesight",
    highlight: false,
    bg: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "ScaleSight",
    sub: "News & announcements",
    href: "https://facebook.com/scalesight",
    highlight: false,
    bg: "bg-[#1877F2]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path fill="white" d="M15.5 8H13V6.5c0-.6.4-.5 1-.5h1.5V4H13c-1.7 0-3 1.3-3 3v1H8v2.5h2V20h2.5v-9.5H15l.5-2.5z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    handle: "@scalesight",
    sub: "Thoughts & industry news",
    href: "https://twitter.com/scalesight",
    highlight: false,
    bg: "bg-black",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.988l4.26 5.632 4.746-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
];

// ── Contact info cards ────────────────────────────────────────────────────────
const info = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Call Us",
    value: "+00 00000 00000",
    sub: "Mon–Sat, 9am–7pm IST",
    color: "text-emerald",
    bg: "bg-emerald/10",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email Us",
    value: "hello@scalesight.com",
    sub: "We reply within 24 hours",
    color: "text-aqua",
    bg: "bg-aqua/10",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Our Offices",
    value: "India & UAE",
    sub: "New Delhi · Dubai",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Working Hours",
    value: "Mon – Sat",
    sub: "9:00 AM – 7:00 PM",
    color: "text-[#0A66C2]",
    bg: "bg-[#0A66C2]/10",
  },
];

const countryCodes = [
  { code: "+91", flag: "🇮🇳" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+61", flag: "🇦🇺" },
  { code: "+65", flag: "🇸🇬" },
];

const services = [
  "Business Setup & Licensing",
  "Tax & Compliance Advisory",
  "Investment & Funding",
  "Market Entry Strategy",
  "Legal & Regulatory Support",
  "Other / General Inquiry",
];

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } }),
};

// ── Component ─────────────────────────────────────────────────────────────────
const ContactSection = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", countryCode: "+91", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white min-h-screen">

      {/* ── Hero banner ── */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #09285A 0%, #085B63 50%, #09285A 100%)" }}>

        {/* Decorative gradient orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(172 72% 63%) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, hsl(144 96% 38%) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10"
          style={{ background: "radial-gradient(ellipse, hsl(172 72% 63%) 0%, transparent 65%)" }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        {/* Floating accent rings */}
        <div className="absolute top-8 right-[15%] w-32 h-32 rounded-full border border-aqua/20" />
        <div className="absolute top-12 right-[15%] w-20 h-20 rounded-full border border-aqua/10 translate-x-6 translate-y-6" />
        <div className="absolute bottom-12 left-[10%] w-24 h-24 rounded-full border border-emerald/20" />

        {/* Glowing line accent */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(172 72% 63% / 0.6), hsl(144 96% 38% / 0.4), transparent)" }} />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-aqua/30 text-aqua text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase"
            style={{ background: "rgba(94,228,207,0.08)", backdropFilter: "blur(8px)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            We're here to help
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}>
            Let's Start a{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ background: "linear-gradient(135deg, hsl(172 72% 63%), hsl(144 96% 38%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Conversation
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full opacity-60"
                style={{ background: "linear-gradient(90deg, hsl(172 72% 63%), hsl(144 96% 38%))" }} />
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }}
            className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're expanding into India or the UAE, our advisors are ready to guide you every step of the way.
          </motion.p>

          {/* Stat pills */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { val: "< 24h", label: "Response time" },
              { val: "2 Markets", label: "India & UAE" },
              { val: "Free", label: "First consultation" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                <span className="font-bold text-white">{s.val}</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Wave divider */}
        <svg className="w-full -mb-1 block" viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 56h1440V28C1320 8 1200 48 1080 28 960 8 840 48 720 28 600 8 480 48 360 28 240 8 120 48 0 28V56z" fill="white" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* ── Info cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {info.map((item, i) => (
            <motion.div key={item.label} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-primary/8 p-5 shadow-sm hover:shadow-md transition-shadow group">
              <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <p className="text-xs text-muted-blue font-medium uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-primary font-bold text-sm">{item.value}</p>
              <p className="text-muted-blue text-xs mt-0.5">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Main grid: form + sidebar ── */}
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-3">
            {/* Outer glow layer */}
            <div className="relative rounded-3xl"
              style={{ boxShadow: "0 0 0 1px rgba(94,228,207,0.25), 0 32px 80px -8px rgba(9,40,90,0.55), 0 8px 32px -4px rgba(8,91,99,0.4), 0 0 60px -10px rgba(94,228,207,0.15)" }}>
              {/* Gradient border */}
              <div className="rounded-3xl p-px"
                style={{ background: "linear-gradient(135deg, rgba(94,228,207,0.5) 0%, rgba(9,40,90,0.3) 40%, rgba(3,195,89,0.4) 100%)" }}>
                {/* Light cream card */}
                <div className="rounded-3xl p-8" style={{ background: "#FAFAF8" }}>

                  <h2 className="text-2xl font-extrabold text-primary mb-1">Send Us a Message</h2>
                  <p className="text-muted-blue text-sm mb-7">Fill in the form and our team will get back to you within one business day.</p>

                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">Message Sent!</h3>
                      <p className="text-muted-blue text-sm max-w-xs">Thanks for reaching out. We'll be in touch within 24 hours.</p>
                      <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", countryCode: "+91", service: "", message: "" }); }}
                        className="mt-2 text-sm text-primary font-semibold underline underline-offset-4 hover:text-dark-teal transition-colors">
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Full Name *</label>
                          <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white text-primary placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-aqua/40 transition-all text-sm"
                            style={{ border: "1.5px solid #4a5568" }}
                            placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Email Address *</label>
                          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white text-primary placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-aqua/40 transition-all text-sm"
                            style={{ border: "1.5px solid #4a5568" }}
                            placeholder="you@company.com" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Phone Number</label>
                        <div className="flex gap-2">
                          <select value={form.countryCode} onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                            className="px-3 py-3 rounded-xl bg-white text-primary text-sm focus:outline-none focus:ring-2 focus:ring-aqua/40 min-w-[90px]"
                            style={{ border: "1.5px solid #4a5568" }}>
                            {countryCodes.map((c) => (
                              <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                            ))}
                          </select>
                          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="flex-1 px-4 py-3 rounded-xl bg-white text-primary placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-aqua/40 transition-all text-sm"
                            style={{ border: "1.5px solid #4a5568" }}
                            placeholder="Phone number" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">I'm interested in</label>
                        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white text-primary text-sm focus:outline-none focus:ring-2 focus:ring-aqua/40 transition-all"
                          style={{ border: "1.5px solid #4a5568" }}>
                          <option value="">Select a service...</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Message *</label>
                        <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white text-primary placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-aqua/40 transition-all text-sm resize-none"
                          style={{ border: "1.5px solid #4a5568" }}
                          placeholder="Tell us about your business goals or how we can help..." />
                      </div>

                      <button type="submit"
                        className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all text-white"
                        style={{ background: "linear-gradient(135deg, hsl(172 72% 63%), hsl(184 84% 21%))", boxShadow: "0 8px 24px -4px rgba(94,228,207,0.35)" }}>
                        Send Message
                        <Send className="w-4 h-4" />
                      </button>
                      <p className="text-center text-xs text-muted-blue">We respect your privacy. No spam, ever.</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6">

            {/* LinkedIn hero card */}
            <a href="https://linkedin.com/company/scalesight" target="_blank" rel="noopener noreferrer"
              className="group block bg-[#0A66C2] rounded-3xl p-6 text-white shadow-xl shadow-[#0A66C2]/30 hover:shadow-[#0A66C2]/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">Connect on</p>
              <h3 className="text-xl font-extrabold mb-1">LinkedIn</h3>
              <p className="text-white/70 text-sm mb-4">Join 2,000+ professionals following ScaleSight for market insights, business tips, and expansion strategies.</p>
              <div className="flex items-center gap-2 text-sm font-semibold bg-white/15 rounded-xl px-4 py-2.5 group-hover:bg-white/25 transition-colors">
                <span>Follow ScaleSight Advisory</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto" />
              </div>
            </a>

            {/* Other socials grid */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">Also find us on</p>
              <div className="grid grid-cols-1 gap-3">
                {socials.slice(1).map((s, i) => (
                  <motion.a key={s.label} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                    href={s.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-white border border-primary/8 rounded-2xl px-4 py-3.5 hover:border-primary/20 hover:shadow-md transition-all">
                    <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center flex-shrink-0`}>
                      {s.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-primary font-bold text-sm">{s.label}</p>
                      <p className="text-muted-blue text-xs truncate">{s.sub}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-blue/40 group-hover:text-primary transition-colors flex-shrink-0" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default ContactSection;

