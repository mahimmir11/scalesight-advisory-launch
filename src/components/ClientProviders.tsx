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
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    // Only run on client — check sessionStorage
    const alreadyVisited = sessionStorage.getItem("visited");
    if (!alreadyVisited) {
      setSplash(true);
      sessionStorage.setItem("visited", "1");
      const t = setTimeout(() => setSplash(false), 2000);
      return () => clearTimeout(t);
    }
  }, []);

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
