import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "UAE Services", to: "/services/uae" },
  { label: "India Services", to: "/services/india" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => location.pathname === to;

  const linkColor = "text-gray-600 hover:text-[#09285A] hover:bg-gray-100";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/fulllogo1.png" alt="ScaleSight" className="h-14 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 overflow-hidden",
                isActive(l.to) ? "text-white" : "text-gray-600 hover:text-[#09285A] hover:bg-gray-100"
              )}
            >
              {/* Animated gradient background for active state */}
              {isActive(l.to) && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: "#09285A" }}
                  initial={{ scale: 0.75, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                >
                  {/* one-time shine sweep */}
                  <span className="nav-shine-sweep" />
                </motion.span>
              )}
              <span className="relative z-10">{l.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors duration-300 text-[#09285A]`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              style={{ top: "76px" }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed left-0 right-0 z-50 mt-2 rounded-none overflow-hidden shadow-2xl"
              style={{
                top: "76px",
                background: "linear-gradient(135deg, #0B1F3A 0%, #1565a8 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(94,228,207,0.2)",
              }}
            >
              {/* Decorative gradient overlay */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(94,228,207,0.4) 0%, transparent 60%)",
                }}
              />

              {/* Menu items */}
              <div className="relative py-3">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        relative flex items-center justify-between px-6 py-4 text-base font-semibold
                        transition-all duration-200 group
                        ${isActive(l.to)
                          ? "text-[#5EE4CF] bg-white/15"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {/* Left accent bar for active item */}
                      {isActive(l.to) && (
                        <motion.div
                          layoutId="mobile-active-indicator"
                          className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                          style={{ background: "#5EE4CF" }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        />
                      )}

                      <span className="relative z-10">{l.label}</span>

                      {/* Active dot indicator */}
                      {isActive(l.to) ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-[#5EE4CF] shadow-lg"
                          style={{ boxShadow: "0 0 8px rgba(94,228,207,0.6)" }}
                        />
                      ) : (
                        <motion.svg
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </motion.svg>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom decorative element */}
              <div className="h-1 bg-gradient-to-r from-[#5EE4CF] via-[#2dd4bf] to-[#0ea5e9]" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;