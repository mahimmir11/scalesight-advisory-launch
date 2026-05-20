'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#09285A] via-[#0B1F3A] to-[#09285A] px-6">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-white/10 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-white/70 text-lg mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-[#09285A] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
