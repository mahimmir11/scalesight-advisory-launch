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

  // splash === null means we haven't decided yet (first render, before useEffect).
  // We still render children so crawlers (Google, GBP, ChatGPT) can see the HTML.
  // The white overlay sits on top visually so users don't see a flash.
  const splashDone = splash === false;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* White overlay covers content until splash decision is made */}
        {splash === null && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "#ffffff",
              zIndex: 9999,
            }}
          />
        )}
        <SplashScreen visible={splash === true} />
        <Toaster />
        <Sonner />
        <SmoothScroll />
        <ScrollToTop />
        {children}
        <FloatingContact splashDone={splashDone} />
        <FloatingServices splashDone={splashDone} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
