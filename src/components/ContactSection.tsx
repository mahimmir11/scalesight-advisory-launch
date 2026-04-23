import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, Linkedin, ExternalLink, CheckCircle2 } from "lucide-react";

const socials = [
  {
    label: "WhatsApp",
    handle: "+00 00000 00000",
    sub: "Chat with us directly",
    href: "https://wa.me/919999999999",
    bg: "bg-[#25D366]",
    solidBg: "#25D366",
    hoverText: "Tap to open WhatsApp chat →",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path fill="white" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
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

// ── New Premium Info Cards ────────────────────────────────────────────────────

const PhoneCard = ({ i }: { i: number }) => (
  <motion.a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.13, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden block w-full"
    style={{
      background: "linear-gradient(135deg, #0B7A5E 0%, #09285A 100%)",
      boxShadow: "0 0 0 1px rgba(94,228,207,0.3), 0 20px 60px -8px rgba(9,40,90,0.45)",
      minHeight: "200px",
      animation: `floatCard 4s ease-in-out 0s infinite`,
    }}
  >
    {/* Decorative ring */}
    <div
      className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
      style={{ background: "radial-gradient(circle, #5EE4CF 0%, transparent 70%)" }}
    />
    <div
      className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
      style={{ background: "radial-gradient(circle, #03C359 0%, transparent 70%)" }}
    />

    <div className="relative z-10 p-6 flex flex-col h-full" style={{ minHeight: "200px" }}>
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        {/* Live pulse indicator */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="text-emerald-300 text-xs font-semibold">Available 24/7</span>
        </div>
      </div>

      {/* Content */}
      <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">Call / WhatsApp</p>
      <p className="text-white font-extrabold text-xl mb-auto">+00 00000 00000</p>

      {/* CTA Button */}
      <div className="mt-5 flex gap-2">
        <div
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-[#09285A] group-hover:scale-105 transition-transform duration-300"
          style={{ background: "#5EE4CF" }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </div>
      </div>
    </div>

    <style>{`
      @keyframes floatCard {
        0%   { transform: translateY(0px); }
        50%  { transform: translateY(-7px); }
        100% { transform: translateY(0px); }
      }
    `}</style>
  </motion.a>
);

const EmailCard = ({ i }: { i: number }) => (
  <motion.a
    href="mailto:hello@scalesight.com"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.13, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden block w-full"
    style={{
      background: "linear-gradient(135deg, #0A66C2 0%, #054a91 100%)",
      boxShadow: "0 0 0 1px rgba(10,102,194,0.3), 0 20px 60px -8px rgba(5,74,145,0.45)",
      minHeight: "200px",
      animation: `floatCard 4s ease-in-out 0.5s infinite`,
    }}
  >
    {/* Decorative elements */}
    <div
      className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
      style={{ background: "radial-gradient(circle, #60A5FA 0%, transparent 70%)" }}
    />
    {/* Envelope decorative lines */}
    <div className="absolute bottom-0 left-0 right-0 h-16 opacity-5">
      <svg viewBox="0 0 400 64" fill="none" className="w-full h-full">
        <path d="M0 0 L200 40 L400 0" stroke="white" strokeWidth="2"/>
        <path d="M0 64 L160 24" stroke="white" strokeWidth="1.5"/>
        <path d="M400 64 L240 24" stroke="white" strokeWidth="1.5"/>
      </svg>
    </div>

    <div className="relative z-10 p-6 flex flex-col" style={{ minHeight: "200px" }}>
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <span className="text-blue-200 text-xs font-semibold bg-white/10 px-3 py-1 rounded-full">
          Reply in 24h
        </span>
      </div>

      <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">Email Us</p>
      <p className="text-white font-extrabold text-lg mb-1 break-all">hello@scalesight.com</p>
      <p className="text-blue-200 text-sm mb-auto">Drop us a line, any time</p>

      <div className="mt-5 flex gap-2">
        <div
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white group-hover:scale-105 transition-transform duration-300"
          style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)" }}
        >
          <Mail className="w-4 h-4" />
          Send an Email
        </div>
      </div>
    </div>
  </motion.a>
);

const LocationCard = ({ i }: { i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.13, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full"
    style={{
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      boxShadow: "0 0 0 1px rgba(255,200,60,0.2), 0 20px 60px -8px rgba(15,52,96,0.5)",
      minHeight: "200px",
      animation: `floatCard 4s ease-in-out 1s infinite`,
    }}
  >
    {/* World map dots subtle bg */}
    <div className="absolute inset-0 opacity-5">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {[...Array(20)].map((_, row) =>
          [...Array(40)].map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 10 + 5} cy={row * 10 + 5} r="1" fill="white" />
          ))
        )}
      </svg>
    </div>

    {/* Globe icon decorative */}
    <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10">
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2"/>
        <ellipse cx="50" cy="50" rx="20" ry="45" stroke="white" strokeWidth="1.5"/>
        <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="1.5"/>
        <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="1.5"/>
      </svg>
    </div>

    <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "200px" }}>
      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
        <MapPin className="w-8 h-8 text-amber-400" />
      </div>

      <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">Our Offices</p>
      <p className="text-white font-extrabold text-3xl mb-2">India & UAE</p>
      <p className="text-white/60 text-sm">Serving clients across two continents</p>
    </div>
  </motion.div>
);

// ── Social card ───────────────────────────────────────────────────────────────
const SocialCard = ({
  s,
  index,
  blinkIndex,
}: {
  s: (typeof socials)[0];
  index: number;
  blinkIndex: number | null;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isBlinking = blinkIndex === index;

  return (
    <motion.a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      animate={
        isBlinking
          ? {
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 0px rgba(0,0,0,0)",
                `0 0 24px ${s.solidBg.startsWith("linear") ? "rgba(238,42,123,0.6)" : s.solidBg + "99"}`,
                "0 0 0px rgba(0,0,0,0)",
              ],
            }
          : { scale: 1, boxShadow: "0 0 0px rgba(0,0,0,0)" }
      }
      className="group relative flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-4 py-3.5 hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
      style={{ minHeight: "64px" }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ background: s.solidBg }}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: isHovered ? "0%" : "-100%", opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <div className="relative z-10 flex items-center gap-4 w-full">
        <motion.div
          className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center flex-shrink-0`}
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {s.icon}
        </motion.div>

        <div className="flex-1 min-w-0 relative" style={{ height: "40px" }}>
          <motion.div
            className="absolute inset-0 flex flex-col justify-center"
            animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -8 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-gray-900 font-bold text-sm leading-tight">{s.label}</p>
            <p className="text-gray-400 text-xs leading-tight truncate">{s.sub}</p>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col justify-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
            transition={{ duration: 0.3, delay: isHovered ? 0.08 : 0 }}
          >
            <p className="text-white font-bold text-sm leading-tight">{s.hoverText}</p>
            <p className="text-white/80 text-xs leading-tight">{s.handle}</p>
          </motion.div>
        </div>

        <ExternalLink
          className="w-3.5 h-3.5 flex-shrink-0 transition-colors duration-300"
          style={{ color: isHovered ? "white" : "#9ca3af" }}
        />
      </div>
    </motion.a>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const ContactSection = ({ showInfoCards = true }: { showInfoCards?: boolean }) => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", countryCode: "+91", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
    <section className="bg-white overflow-x-hidden pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 sm:space-y-16">

        {/* ── Contact Us Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.01em" }}
          >
            <span className="text-[#09285A]">Contact </span>
            <span className="text-[#00C2A8]">Us</span>
          </h2>
        </motion.div>

        {/* ── Info cards ── */}
        {showInfoCards && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-1 py-3">
            <PhoneCard i={0} />
            <EmailCard i={1} />
            <LocationCard i={2} />
          </div>
        )}

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 w-full min-w-0"
          >
            <div
              className="relative rounded-2xl sm:rounded-3xl w-full"
              style={{ boxShadow: "0 0 0 1px rgba(94,228,207,0.25), 0 32px 80px -8px rgba(9,40,90,0.55), 0 8px 32px -4px rgba(8,91,99,0.4)" }}
            >
              <div
                className="rounded-2xl sm:rounded-3xl p-px w-full"
                style={{ background: "linear-gradient(135deg, rgba(94,228,207,0.5) 0%, rgba(9,40,90,0.3) 40%, rgba(3,195,89,0.4) 100%)" }}
              >
                <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 w-full" style={{ background: "#FAFAF8" }}>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#09285A] mb-1">Send Us a Message</h2>
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
                        onClick={() => { setSubmitted(false); setError(null); setForm({ name: "", email: "", phone: "", countryCode: "+91", service: "", message: "" }); }}
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

                      <div>
                        <label className="block text-xs font-semibold text-[#09285A] uppercase tracking-wider mb-1.5">Phone Number</label>
                        <div className="flex gap-2">
                          <select value={form.countryCode} onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                            className="px-2 py-3 rounded-xl bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 border-2 border-gray-400"
                            style={{ minWidth: "88px", maxWidth: "100px" }}>
                            {countryCodes.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                          </select>
                          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-200 text-sm border-2 border-gray-400"
                            placeholder="Phone number" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#09285A] uppercase tracking-wider mb-1.5">I'm interested in</label>
                        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 border-2 border-gray-400">
                          <option value="">Select a service...</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#09285A] uppercase tracking-wider mb-1.5">Message *</label>
                        <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-200 text-sm resize-none border-2 border-gray-400"
                          placeholder="Tell us about your business goals or how we can help..." />
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                      )}
                      <button type="submit" disabled={loading}
                        className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all text-white disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ background: "linear-gradient(135deg, hsl(172 72% 63%), hsl(184 84% 21%))", boxShadow: "0 8px 24px -4px rgba(94,228,207,0.35)" }}>
                        {loading ? "Sending..." : <><span>Send Message</span><Send className="w-4 h-4" /></>}
                      </button>
                      <p className="text-center text-xs text-gray-400">We respect your privacy. No spam, ever.</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6 w-full min-w-0"
          >
            <a
              href="https://linkedin.com/company/scalesight"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0A66C2] rounded-3xl p-6 text-white shadow-xl shadow-[#0A66C2]/30 hover:shadow-[#0A66C2]/50 hover:-translate-y-1 transition-all duration-300"
            >
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

            <div ref={socialsRef} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;