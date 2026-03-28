const Footer = () => (
  <footer
    className="text-white pt-14 pb-6 px-6"
    style={{
      backgroundImage: "url('/footer.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10 items-start">

        {/* Col 1 — Logo + tagline */}
        <div>
          <img src="/fulllogo.png" alt="ScaleSight" className="h-16 w-auto object-contain object-left mb-4" />
          <p className="text-white/50 text-sm leading-relaxed">
            Your trusted partner for expert financial advisory, compliance, and strategic growth across India & UAE.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/55">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "UAE Services", href: "/services/uae" },
              { label: "India Services", href: "/services/india" },
              { label: "Team", href: "/team" },
              { label: "Contact Us", href: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Contact</h4>
          <ul className="space-y-4 text-sm text-white/55">
            <li className="flex items-center gap-3">
              {/* Phone */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#E05C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>+00 00000 00000</span>
            </li>
            <li className="flex items-center gap-3">
              {/* Mail */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#9B9BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              <span>hello@scalesight.com</span>
            </li>
            <li className="flex items-center gap-3">
              {/* Location */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#E05C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>India & UAE</span>
            </li>
          </ul>
        </div>

        {/* Col 4 — Follow Us */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Follow Us</h4>
          <div className="flex items-center gap-3">

            {/* WhatsApp */}
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#25D366"/>
                <path fill="white" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                  <radialGradient id="ig-footer" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497"/>
                    <stop offset="45%" stopColor="#fd5949"/>
                    <stop offset="60%" stopColor="#d6249f"/>
                    <stop offset="90%" stopColor="#285AEB"/>
                  </radialGradient>
                </defs>
                <rect width="24" height="24" rx="6" fill="url(#ig-footer)"/>
                <rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="none" stroke="white" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3" fill="none" stroke="white" strokeWidth="1.5"/>
                <circle cx="17" cy="7" r="1" fill="white"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#1877F2"/>
                <path fill="white" d="M15.5 8H13V6.5c0-.6.4-.5 1-.5h1.5V4H13c-1.7 0-3 1.3-3 3v1H8v2.5h2V20h2.5v-9.5H15l.5-2.5z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                <path fill="white" d="M7.75 9.5h-2.5v8h2.5v-8zm-1.25-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm10 4c-1.2 0-2 .6-2.3 1.2V9.5h-2.5v8h2.5v-4.3c0-1.1.6-1.7 1.5-1.7.9 0 1.3.6 1.3 1.7v4.3h2.5v-4.8c0-2.2-1.2-3.2-3-3.2z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
        <p>© {new Date().getFullYear()} ScaleSight Global Advisory. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
