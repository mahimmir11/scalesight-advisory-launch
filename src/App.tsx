import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import UAEServices from "./pages/UAEServices.tsx";
import IndiaServices from "./pages/IndiaServices.tsx";
import Team from "./pages/Team.tsx";
import FAQ from "./pages/FAQ.tsx";
import Contact from "./pages/Contact.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import NotFound from "./pages/NotFound.tsx";
import FloatingContact from "./components/FloatingContact";

const queryClient = new QueryClient();

const AnimatedRoutes = ({ splashDone }: { splashDone: boolean }) => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index splashDone={splashDone} /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services/uae" element={<PageTransition><UAEServices /></PageTransition>} />
          <Route path="/services/india" element={<PageTransition><IndiaServices /></PageTransition>} />
          <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
          <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const [splash, setSplash] = useState(() => !sessionStorage.getItem("visited"));

  useEffect(() => {
    if (!splash) return;
    sessionStorage.setItem("visited", "1");
    const t = setTimeout(() => setSplash(false), 2000);
    return () => clearTimeout(t);
  }, [splash]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SplashScreen visible={splash} />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SmoothScroll />
          <ScrollToTop />
          <AnimatedRoutes splashDone={!splash} />
          <FloatingContact splashDone={!splash} />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;