import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout to let Lenis initialize before we scroll
    const t = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      // Also reset Lenis scroll position if it exists
      const lenisEl = document.querySelector("[data-lenis-prevent]");
      if (lenisEl) (lenisEl as HTMLElement).scrollTop = 0;
    }, 50);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
