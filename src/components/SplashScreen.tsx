import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ visible }: { visible: boolean }) => (
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

export default SplashScreen;
