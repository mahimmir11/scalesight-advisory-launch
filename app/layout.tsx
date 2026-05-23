import type { Metadata } from "next";
import ClientProviders from "@/components/ClientProviders";
import "@/index.css";

export const metadata: Metadata = {
  title: {
    default: "Strategic Finance Advisory for Growing Businesses | ScaleSight Global Advisory",
    template: "%s | ScaleSight Global Advisory",
  },
  description:
    "Founder-led finance advisory helping businesses see clearly, stay compliant, and grow confidently across India and UAE. Expert CFO services, compliance, and strategic financial planning.",
  keywords: [
    "finance advisory",
    "strategic finance",
    "CFO services",
    "business consulting",
    "India",
    "UAE",
    "compliance",
    "financial planning",
    "startup advisory",
    "virtual CFO",
    "FP&A",
    "IFRS reporting",
    "bookkeeping Dubai",
  ],
  authors: [{ name: "ScaleSight Global Advisory" }],
  metadataBase: new URL("https://www.scalesight.in"),
  openGraph: {
    type: "website",
    siteName: "ScaleSight Global Advisory",
    images: [
      {
        url: "https://www.scalesight.in/fulllogo1.png",
        width: 1200,
        height: 630,
        alt: "ScaleSight Global Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ScaleSight",
    images: ["https://www.scalesight.in/fulllogo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
