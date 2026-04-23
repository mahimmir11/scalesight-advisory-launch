import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This may include:
• Full name
• Email address
• Phone number
• Company name and business details
• Financial information relevant to the services you request

We also collect certain information automatically when you visit our website, including IP address, browser type, pages visited, and time spent on pages.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:
• Respond to your inquiries and provide the services you request
• Send you updates, newsletters, or promotional content (only with your consent)
• Improve our website and services
• Comply with legal and regulatory obligations
• Protect against fraud and unauthorized activity`,
  },
  {
    title: "3. How We Share Your Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:
• Trusted service providers who assist us in operating our website and delivering services (e.g., email platforms, cloud storage), bound by confidentiality agreements
• Regulatory or government authorities when required by law
• Professional advisors such as lawyers or auditors under strict confidentiality obligations`,
  },
  {
    title: "4. Data Security",
    content: `We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These include encrypted data transmission (SSL/TLS), secure cloud storage, and restricted access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:
• Right to access — request a copy of the data we hold about you
• Right to correction — request correction of inaccurate data
• Right to deletion — request deletion of your personal data
• Right to withdraw consent — at any time, for data processed on the basis of consent
• Right to data portability — receive your data in a structured, machine-readable format

To exercise any of these rights, please contact us at hello@scalesight.com.`,
  },
  {
    title: "7. Cookies",
    content: `Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:
• Essential cookies — necessary for the website to function
• Analytics cookies — to understand how visitors use our site (e.g., Google Analytics)

You can control cookie settings through your browser. Disabling cookies may affect certain features of the website.`,
  },
  {
    title: "8. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised effective date. Your continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy, please contact us:

ScaleSight Global Advisory
Email: hello@scalesight.com
Operating in: India & UAE`,
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-1 pt-[76px]">
      {/* Hero */}
      <div className="bg-[#0B1F3A] px-6 py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00C2A8] mb-3"
        >
          Legal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-3"
          style={{ letterSpacing: "-0.02em" }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-sm"
        >
          Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: April 2026
        </motion.p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        <p className="text-gray-500 text-base leading-relaxed mb-10">
          ScaleSight Global Advisory ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
        </p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-3">{s.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
