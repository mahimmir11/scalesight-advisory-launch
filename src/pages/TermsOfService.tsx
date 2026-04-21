import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the ScaleSight Global Advisory website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: "2. Services Provided",
    content: `ScaleSight Global Advisory provides financial advisory, accounting, compliance, and related professional services to businesses operating in India and the UAE. Our services include but are not limited to:
• Virtual CFO and financial planning & analysis (FP&A)
• Accounting and bookkeeping
• Tax planning and compliance (GST, VAT, corporate tax)
• Audit and assurance support
• Business setup and regulatory compliance advisory

The scope of services for each engagement is defined in a separate service agreement or engagement letter.`,
  },
  {
    title: "3. Use of Website",
    content: `You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:
• Use the website in any way that violates applicable local, national, or international laws
• Transmit unsolicited or unauthorized advertising or promotional material
• Attempt to gain unauthorized access to any part of our website or systems
• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website`,
  },
  {
    title: "4. Intellectual Property",
    content: `All content on this website — including text, graphics, logos, images, and software — is the property of ScaleSight Global Advisory and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.`,
  },
  {
    title: "5. Confidentiality",
    content: `Any information shared with ScaleSight in the course of an engagement is treated as strictly confidential. We will not disclose your business or financial information to any third party without your consent, except as required by law or regulatory authorities.`,
  },
  {
    title: "6. Disclaimer of Warranties",
    content: `Our website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.

Information on this website is for general informational purposes only and does not constitute professional financial, legal, or tax advice. Always consult a qualified professional for advice specific to your situation.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `To the fullest extent permitted by law, ScaleSight Global Advisory shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services, even if we have been advised of the possibility of such damages.

Our total liability for any claim arising out of or relating to these Terms shall not exceed the amount paid by you for the specific service giving rise to the claim.`,
  },
  {
    title: "8. Engagement Terms",
    content: `Professional services are governed by a separate engagement letter or service agreement signed between ScaleSight and the client. These Terms of Service apply to general use of our website and do not supersede any specific engagement terms agreed upon in writing.`,
  },
  {
    title: "9. Payment Terms",
    content: `Fees for services are outlined in the relevant engagement letter. Unless otherwise agreed:
• Invoices are due within 14 days of issuance
• Late payments may attract interest at the rate specified in the engagement letter
• ScaleSight reserves the right to suspend services for overdue accounts`,
  },
  {
    title: "10. Termination",
    content: `Either party may terminate a service engagement by providing written notice as specified in the engagement letter. ScaleSight reserves the right to terminate access to its website or services immediately if you breach these Terms of Service.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in India, unless otherwise agreed in the engagement letter.`,
  },
  {
    title: "12. Changes to Terms",
    content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this page with an updated date. Your continued use of our website after changes constitutes your acceptance of the revised terms.`,
  },
  {
    title: "13. Contact Us",
    content: `If you have any questions about these Terms of Service, please contact us:

ScaleSight Global Advisory
Email: hello@scalesight.com
Operating in: India & UAE`,
  },
];

const TermsOfService = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-1 pt-[70px]">
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
          Terms of Service
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
          Please read these Terms of Service carefully before using the ScaleSight Global Advisory website or engaging our professional services. These terms govern your access to and use of our website and services.
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

export default TermsOfService;
