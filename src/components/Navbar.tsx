import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#founders" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-off-white/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-primary font-bold text-xl tracking-tighter">
          SCALESIGHT<span className="text-emerald">.</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-dark-teal transition-all shadow-lg shadow-primary/10"
        >
          Schedule a Conversation
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-off-white border-b border-primary/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-primary font-medium py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold text-center mt-2"
              >
                Schedule a Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
