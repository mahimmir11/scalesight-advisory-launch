import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "UAE Services", to: "/services/uae" },
  { label: "India Services", to: "/services/india" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = ({ heroId, keepDarkText }: { heroId?: string; keepDarkText?: boolean } = {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Reset scrolled state on route change based on current scroll position
    setScrolled(window.scrollY > 50);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Check if we're still in the hero section
      if (heroId) {
        const heroElement = document.getElementById(heroId);
        if (heroElement) {
          const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
          const navbarHeight = 70;
          setIsInHero(scrollY + navbarHeight < heroBottom);
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname, heroId]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => location.pathname === to;

  // When keepDarkText is true: always use dark text, transparent bg in hero, white bg when scrolled out
  // When keepDarkText is false: transparent bg with white text in hero, white bg with dark text when scrolled out
  const isTransparent = !!heroId && isInHero;
  const useDarkText = keepDarkText || !isTransparent;

  const textColor = useDarkText ? "text-[#09285A]" : "text-white";
  const linkColor = useDarkText
    ? "text-gray-600 hover:text-[#09285A] hover:bg-gray-100"
    : "text-white/90 hover:text-white hover:bg-white/15";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-transparent shadow-none"
          : "bg-white shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png" alt="ScaleSight" className="h-10 w-auto" />
          <span className={`text-lg font-bold tracking-tight leading-none transition-colors duration-300 ${textColor}`}>
            ScaleSight
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive(l.to)
                  ? "bg-[#09285A] text-white"
                  : linkColor
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden bg-[#09285A] flex flex-col overflow-hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.15 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-6 py-3.5 text-sm font-semibold transition-colors ${
                    isActive(l.to)
                      ? "text-[#5EE4CF] bg-white/10"
                      : "text-white/75 hover:text-white hover:bg-white/8"
                  }`}
                >
                  <span>{l.label}</span>
                  {isActive(l.to) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5EE4CF]" />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;