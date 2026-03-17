const Footer = () => (
  <footer className="py-12 px-6 bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <span className="font-bold text-lg tracking-tighter">
          SCALESIGHT<span className="text-emerald">.</span>
        </span>
        <p className="text-primary-foreground/60 text-sm mt-1">
          Strategic Finance Advisory
        </p>
      </div>
      <div className="flex gap-6 text-sm text-primary-foreground/60">
        <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
        <a href="#founders" className="hover:text-primary-foreground transition-colors">Team</a>
        <a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a>
        <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
      </div>
      <p className="text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} ScaleSight Global Advisory. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
