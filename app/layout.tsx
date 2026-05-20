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
  ],
  authors: [{ name: "ScaleSight Global Advisory" }],
  openGraph: {
    type: "website",
    siteName: "ScaleSight Global Advisory",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ScaleSight",
    images: ["/logo.png"],
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
