import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Only scroll if pathname actually changed (navigation)
    // Don't scroll if it's the same pathname (refresh)
    if (prevPathname.current !== pathname) {
      window.scrollTo({ top: 0, behavior: "instant" });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
