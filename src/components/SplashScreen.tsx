import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

// All heavy assets that need to be ready before the user navigates
const VIDEOS_TO_PRELOAD = ["/about.mp4", "/uae.mp4", "/india.mp4", "/home.mp4"];
const IMAGES_TO_PRELOAD = ["/fulllogo1.png", "/logo.png", "/contact.png", "/footer.png", "/india1.png", "/uae.jpg"];

const preloadAssets = () => {
  // Preload videos — create hidden video elements so the browser starts buffering them
  VIDEOS_TO_PRELOAD.forEach((src) => {
    const video = document.createElement("video");
    video.src = src;
    video.preload = "auto";
    video.muted = true;
    video.style.display = "none";
    document.body.appendChild(video);
    // Remove after a short delay — browser has already started caching by then
    setTimeout(() => {
      if (document.body.contains(video)) document.body.removeChild(video);
    }, 8000);
  });

  // Preload images — browser fetches and caches them silently
  IMAGES_TO_PRELOAD.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const SplashScreen = ({ visible }: { visible: boolean }) => {
  useEffect(() => {
    // Start preloading as soon as the splash screen appears
    preloadAssets();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.5, ease: "easeInOut" } }}
        >
          <motion.img
            src="/logo.png"
            alt="ScaleSight"
            initial={{ opacity: 0, scale: 0.85, x: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ x: "-50vw", opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="w-[clamp(60px,10vw,90px)] h-auto"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
