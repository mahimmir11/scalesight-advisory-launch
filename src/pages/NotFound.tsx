import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: No route for", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-md"
      >
        <div
          className="text-[120px] font-black leading-none mb-4"
          style={{
            background: "linear-gradient(135deg, #09285A 0%, #0ea5e9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>
        <h1 className="text-2xl font-bold text-[#0B1F3A] mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #09285A 0%, #0ea5e9 100%)",
            boxShadow: "0 6px 24px rgba(9,40,90,0.30)",
          }}
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
