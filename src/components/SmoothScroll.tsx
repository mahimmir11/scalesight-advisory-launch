'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

const SmoothScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.destroy();
      lenisInstance = null;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisInstance = lenis;

    // Scroll to top on route change
    lenis.scrollTo(0, { immediate: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [pathname]);

  return null;
};

export default SmoothScroll;
