'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingContact from "@/components/FloatingContact";
import FloatingServices from "@/components/FloatingServices";

const queryClient = new QueryClient();

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  // Start as null = "not yet decided" — prevents any flash
  const [splash, setSplash] = useState<boolean | null>(null);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("visited");
    if (!alreadyVisited) {
      // First visit — show splash
      sessionStorage.setItem("visited", "1");
      setSplash(true);
      const t = setTimeout(() => setSplash(false), 2000);
      return () => clearTimeout(t);
    } else {
      // Already visited — no splash, show page immediately
      setSplash(false);
    }
  }, []);

  // While we haven't decided yet (null), show a white cover so
  // the page content never flashes before the splash check runs
  if (splash === null) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#ffffff",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/logo.png"
          alt="ScaleSight"
          style={{ width: "clamp(60px, 10vw, 90px)", height: "auto" }}
        />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SplashScreen visible={splash} />
        <Toaster />
        <Sonner />
        <SmoothScroll />
        <ScrollToTop />
        {children}
        <FloatingContact splashDone={!splash} />
        <FloatingServices splashDone={!splash} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
