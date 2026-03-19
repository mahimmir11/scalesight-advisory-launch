import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#showcase" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#founders" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-md shadow-lg shadow-primary/10"
          : "bg-gradient-to-b from-primary/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="ScaleSight Global Advisory" className="h-10 w-auto brightness-0 invert" />
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
        >
          Get started
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground p-2"
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
            className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-primary-foreground/80 font-medium py-2 hover:text-secondary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold text-center mt-2 hover:bg-primary-foreground/10 transition-all"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
