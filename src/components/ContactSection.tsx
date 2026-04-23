import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Send, Mail, MapPin, ExternalLink, CheckCircle2,
  Phone, MessageCircle
} from "lucide-react";

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

const prefilledSubject = encodeURIComponent("Inquiry About Finance Advisory Services");
const prefilledBody = encodeURIComponent(
  `Hello Scalesight Team,\n\nI came across your website and I'm interested in learning more about your finance advisory services.\n\nMy business name:\nMy location:\nAreas I need help with:\n\nPlease let me know the best time to discuss further.\n\nThank you!`
);
const emailHref = `mailto:Info@scalesight.in?subject=${prefilledSubject}&body=${prefilledBody}`;

// LinkedIn SVG icon
const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// WhatsApp SVG icon
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ── Reusable contact tile ─────────────────────────────────────────────────────
const ContactTile = ({
  icon,
  label,
  value,
  sub,
  href,
  accent,
  delay,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  href?: string;
  accent: string;
  delay: number;
  badge?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const [flashed, setFlashed] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(tileRef, { once: true, margin: "-40px" });
  const Tag = href ? "a" : ("div" as React.ElementType);
  const tagProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  // Trigger one-time color flash when entering view
  const handleViewEnter = () => {
    if (!flashed) {
      setFlashed(true);
      setTimeout(() => setFlashed(false), 700);
    }
  };

  return (
    <div ref={tileRef}>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={handleViewEnter}
      >
        <Tag
          {...tagProps}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group relative flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300 cursor-pointer overflow-hidden"
          style={{
            background: hovered || flashed ? `${accent}0D` : "transparent",
            border: `1.5px solid ${hovered || flashed ? accent + "50" : "transparent"}`,
            transition: "background 0.3s, border 0.3s",
          }}
        >
          {/* Left glow on hover / flash */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: accent }}
            animate={{ opacity: hovered || flashed ? 1 : 0, scaleY: hovered || flashed ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Icon */}
          <motion.div
            animate={{ scale: hovered || flashed ? 1.08 : 1 }}
            transition={{ duration: 0.25 }}
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
            style={{ background: accent, boxShadow: hovered || flashed ? `0 6px 20px -4px ${accent}80` : "none" }}
          >
            {icon}
          </motion.div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{label}</p>
              {badge && (
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                  style={{ background: `${accent}18`, color: accent }}>
                  {badge}
                </span>
              )}
            </div>
            <p className="text-[#09285A] font-bold text-sm leading-snug truncate"
              style={{ color: hovered || flashed ? accent : "#09285A", transition: "color 0.25s" }}>
              {value}
            </p>
            {sub && <p className="text-gray-400 text-xs mt-0.5 leading-snug">{sub}</p>}
          </div>

          {href && (
            <motion.div animate={{ x: hovered ? 2 : 0, opacity: hovered ? 1 : 0.3 }} transition={{ duration: 0.2 }}>
              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
            </motion.div>
          )}
        </Tag>
      </motion.div>
    </div>
  );
};

// ── Region block ──────────────────────────────────────────────────────────────
const RegionBlock = ({
  flag, country, phone, waHref, delay,
}: {
  flag: string; country: string; phone: string; waHref: string; delay: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const [flashed, setFlashed] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(blockRef, { once: true, margin: "-40px" });

  return (
    <div ref={blockRef}>
      <motion.a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => {
          if (!flashed) {
            setFlashed(true);
            setTimeout(() => setFlashed(false), 700);
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 overflow-hidden"
        style={{
          background: hovered || flashed
            ? "linear-gradient(135deg, #f0fdf9 0%, #e6f7f5 100%)"
            : "linear-gradient(135deg, #f8fffe 0%, #f0fdf9 100%)",
          border: `1.5px solid ${hovered || flashed ? "#00C2A860" : "#00C2A825"}`,
          boxShadow: hovered || flashed
            ? "0 8px 28px -6px rgba(0,194,168,0.22), 0 0 0 1px rgba(0,194,168,0.12), inset 0 1px 0 rgba(255,255,255,0.8)"
            : "0 2px 8px -2px rgba(0,194,168,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* Flag + country */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
            {flag}
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#00C2A8] mb-0.5">{country}</p>
            <p className="text-[#09285A] font-extrabold text-base leading-tight">{phone}</p>
          </div>
        </div>

        {/* WhatsApp pill */}
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-white text-xs font-bold flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        >
          <WhatsAppIcon />
          <span className="hidden sm:inline">Chat</span>
        </motion.div>
      </motion.a>
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const ContactSection = ({ showInfoCards: _showInfoCards = true }: { showInfoCards?: boolean }) => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", countryCode: "+91", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [blinkIndex, setBlinkIndex] = useState<number | null>(null);

  const socialsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(socialsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i >= socials.length) { clearInterval(interval); setBlinkIndex(null); return; }
      setBlinkIndex(i);
      i++;
    }, 250);
    return () => clearInterval(interval);
  }, [isInView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

        {/* ── Heading ── */}
        <div ref={headingRef} className="text-center mb-14 overflow-hidden">
          <motion.p
            className="text-xs font-bold uppercase tracking-widest text-[#00C2A8] mb-3"
            initial={{ opacity: 0, y: -16, letterSpacing: "0.1em" }}
            animate={headingInView ? { opacity: 1, y: 0, letterSpacing: "0.2em" } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Get in Touch
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-[#09285A] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={headingInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Contact Us
          </motion.h2>
          <motion.div
            className="mx-auto h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#00C2A8] to-transparent"
            style={{ width: "100px" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={headingInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* ── LEFT: Form ── */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={formInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 w-full"
          >
            <div
              className="rounded-2xl sm:rounded-3xl p-px"
              style={{
                background: "linear-gradient(135deg, rgba(94,228,207,0.5) 0%, rgba(9,40,90,0.3) 40%, rgba(3,195,89,0.4) 100%)",
                boxShadow: "0 0 0 1px rgba(94,228,207,0.25), 0 32px 80px -8px rgba(9,40,90,0.55), 0 8px 32px -4px rgba(8,91,99,0.4)",
              }}
            >
              <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#FAFAF8]">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#09285A] mb-1">Send Us a Message</h3>
                <p className="text-gray-400 text-sm mb-6">Fill in the form and our team will get back to you within one business day.</p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h3 className="text-xl font-bold text-[#09285A]">Message Sent!</h3>
                      <p className="text-gray-400 text-sm max-w-xs">Thanks for reaching out. We'll be in touch within 24 hours.</p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", countryCode: "+91", service: "", message: "" }); }}
                        className="mt-2 text-sm text-[#09285A] font-semibold underline underline-offset-4"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#09285A] uppercase tracking-wider mb-1.5">Full Name *</label>
                          <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-200 text-sm border-2 border-gray-400"
                            placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#09285A] uppercase tracking-wider mb-1.5">Email Address *</label>
                          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-200 text-sm border-2 border-gray-400"
                            placeholder="you@company.com" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Field 2 — Phone */}
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <label className="block text-xs font-semibold text-[#09285A] uppercase tracking-wider mb-1.5">Phone Number</label>
                      <div className="flex gap-2">
                        <select value={form.countryCode} onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                          className="px-2 py-3 rounded-xl bg-white text-gray-900 text-sm focus:outline-none transition-all duration-200"
                          style={{ minWidth: "88px", maxWidth: "100px", border: "1.5px solid #6b7280", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                          {countryCodes.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                        </select>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm transition-all duration-200"
                          style={{ border: "1.5px solid #6b7280", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                          onFocus={e => { e.currentTarget.style.border = "1.5px solid #00C2A8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,194,168,0.15), 0 1px 4px rgba(0,0,0,0.06)"; }}
                          onBlur={e => { e.currentTarget.style.border = "1.5px solid #6b7280"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; }}
                          placeholder="Phone number" />
                      </div>
                    </motion.div>

                    {/* Field 3 — Service */}
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <label className="block text-xs font-semibold text-[#09285A] uppercase tracking-wider mb-1.5">I'm interested in</label>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 text-sm focus:outline-none transition-all duration-200"
                        style={{ border: "1.5px solid #6b7280", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                        onFocus={e => { e.currentTarget.style.border = "1.5px solid #00C2A8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,194,168,0.15), 0 1px 4px rgba(0,0,0,0.06)"; }}
                        onBlur={e => { e.currentTarget.style.border = "1.5px solid #6b7280"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; }}>
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </motion.div>

                    {/* Field 4 — Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <label className="block text-xs font-semibold text-[#09285A] uppercase tracking-wider mb-1.5">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm resize-none transition-all duration-200"
                        style={{ border: "1.5px solid #6b7280", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                        onFocus={e => { e.currentTarget.style.border = "1.5px solid #00C2A8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,194,168,0.15), 0 1px 4px rgba(0,0,0,0.06)"; }}
                        onBlur={e => { e.currentTarget.style.border = "1.5px solid #6b7280"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; }}
                        placeholder="Tell us about your business goals or how we can help..." />
                    </motion.div>

                      <button type="submit"
                        className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all text-white"
                        style={{ background: "linear-gradient(135deg, hsl(172 72% 63%), hsl(184 84% 21%))", boxShadow: "0 8px 24px -4px rgba(94,228,207,0.35)" }}>
                        Send Message <Send className="w-4 h-4" />
                      </button>
                      <p className="text-center text-xs text-gray-400 mt-2">We respect your privacy. No spam, ever.</p>
                    </motion.div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Contact info ── */}
          <div ref={sidebarRef} className="lg:col-span-2 w-full space-y-5">

            {/* ── Phone numbers block ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-3 px-1">
                📞 Phone & WhatsApp
              </p>
              <div className="space-y-2.5">
                <RegionBlock
                  flag="🇮🇳"
                  country="India"
                  phone="+91 90231 20410"
                  waHref="https://wa.me/919023120410"
                  delay={0.1}
                />
                <RegionBlock
                  flag="🇦🇪"
                  country="Dubai, UAE"
                  phone="+971 55 254 3007"
                  waHref="https://wa.me/971552543007"
                  delay={0.18}
                />
              </div>
            </motion.div>

            {/* ── Divider ── */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-left"
            />

            {/* ── Digital channels ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-3 px-1">
                💬 Digital Channels
              </p>
              <div className="rounded-2xl overflow-hidden border border-gray-100"
                style={{ boxShadow: "0 4px 20px -4px rgba(9,40,90,0.07), 0 0 0 1px rgba(94,228,207,0.18), inset 0 1px 0 rgba(255,255,255,0.9)" }}>

                {/* Email */}
                <ContactTile
                  icon={<Mail className="w-5 h-5" />}
                  label="Email Us"
                  value="Info@scalesight.in"
                  sub="Opens with prefilled message"
                  href={emailHref}
                  accent="#F97316"
                  delay={0.32}
                  badge="24h reply"
                />

                {/* Divider */}
                <div className="mx-4 h-px bg-gray-100" />

                {/* WhatsApp */}
                <ContactTile
                  icon={<MessageCircle className="w-5 h-5" />}
                  label="WhatsApp"
                  value="Chat with us directly"
                  sub="Quick response guaranteed"
                  href="https://wa.me/919023120410"
                  accent="#25D366"
                  delay={0.38}
                  badge="Live"
                />

                {/* Divider */}
                <div className="mx-4 h-px bg-gray-100" />

                {/* LinkedIn */}
                <ContactTile
                  icon={<LinkedInIcon />}
                  label="LinkedIn"
                  value="ScaleSight Advisory"
                  sub="Follow for insights & updates"
                  href="https://linkedin.com/company/scalesight"
                  accent="#0A66C2"
                  delay={0.44}
                />
              </div>
            </motion.div>

            {/* ── Divider ── */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-left"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
