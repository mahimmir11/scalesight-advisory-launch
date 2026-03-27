import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ visible }: { visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.img
          src="/fulllogo.png"
          alt="ScaleSight"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="w-[clamp(140px,30vw,260px)] h-auto"
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default SplashScreen;
