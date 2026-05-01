const prefilledSubject = encodeURIComponent("Inquiry About Finance Advisory Services");
const prefilledBody = encodeURIComponent(
  `Hello Scalesight Team,\n\nI came across your website and I'm interested in learning more about your finance advisory services.\n\nMy business name:\nMy location:\nAreas I need help with:\n\nPlease let me know the best time to discuss further.\n\nThank you!`
);
const emailHref = `mailto:Info@scalesight.in?subject=${prefilledSubject}&body=${prefilledBody}`;

const Footer = () => (
  <footer className="relative">
    <div
      className="text-gray-900 pt-14 pb-6 px-6 relative bg-white"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 items-start">

        {/* Col 1 — Logo + tagline */}
        <div>
          <img src="/fulllogo1.png" alt="ScaleSight" className="h-20 md:h-24 w-auto object-contain object-left mb-4" loading="lazy" />
          <p className="text-gray-800 text-sm leading-relaxed font-light">
            Your trusted partner for expert financial advisory, compliance, and strategic growth across India & UAE.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-base tracking-wide">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-700 font-light">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "UAE Services", href: "/services/uae" },
              { label: "India Services", href: "/services/india" },
              { label: "Team", href: "/team" },
              { label: "Contact Us", href: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-gray-900 hover:translate-x-1 transition-all duration-200 inline-block">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-base tracking-wide">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-700 font-light">
            {/* India WhatsApp */}
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <a href="https://wa.me/919023120410" target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-green-600 transition-colors">+91 90231 20410</a>
            </li>
            {/* UAE WhatsApp */}
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <a href="https://wa.me/971552543007" target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-green-600 transition-colors">+971 55 254 3007</a>
            </li>
            {/* Email */}
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              <a href={emailHref} className="leading-relaxed hover:text-blue-600 transition-colors">Info@scalesight.in</a>
            </li>
            {/* Location */}
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="leading-relaxed">India & UAE</span>
            </li>
          </ul>
        </div>

        {/* Col 4 — Follow Us */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-base tracking-wide">Follow Us</h4>
          <div className="flex items-center gap-3">

            {/* WhatsApp */}
            <a href="https://wa.me/919023120410" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="w-12 h-12 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#25D366"/>
                <path fill="white" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/scalesight-global-advisory/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-12 h-12 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                <path fill="white" d="M7.75 9.5h-2.5v8h2.5v-8zm-1.25-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm10 4c-1.2 0-2 .6-2.3 1.2V9.5h-2.5v8h2.5v-4.3c0-1.1.6-1.7 1.5-1.7.9 0 1.3.6 1.3 1.7v4.3h2.5v-4.8c0-2.2-1.2-3.2-3-3.2z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600 font-light">
        <p>© {new Date().getFullYear()} ScaleSight Global Advisory. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-gray-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;
