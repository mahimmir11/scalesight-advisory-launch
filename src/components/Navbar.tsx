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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the contact page
  const isContactPage = location.pathname === "/contact";

  // ✅ SCROLL-BASED TRANSPARENT → WHITE TRANSITION (only on Contact page)
  useEffect(() => {
    if (!isContactPage) {
      setIsScrolled(true); // Always white on non-contact pages
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Transition threshold: 10-30px scroll
      if (scrollY > 20) {
        setIsScrolled(true); // WHITE NAVBAR
      } else {
        setIsScrolled(false); // TRANSPARENT NAVBAR
      }
    };

    handleScroll(); // run once on load

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, isContactPage]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => location.pathname === to;

  // Text color stays consistent (dark text always)
  const textColor = "text-[#09285A]";
  const linkColor = "text-gray-600 hover:text-[#09285A] hover:bg-gray-100";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png" alt="ScaleSight" className="h-10 w-auto" />
          <span className={`text-lg font-bold tracking-tight leading-none transition-colors duration-300 ${textColor}`}>
            ScaleSight
          </span>
        </Link>

        {/* Desktop Menu */}
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

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[#09285A] flex flex-col"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-6 py-3.5 text-sm font-semibold ${
                    isActive(l.to)
                      ? "text-[#5EE4CF] bg-white/10"
                      : "text-white/75 hover:text-white hover:bg-white/10"
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