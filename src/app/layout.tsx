import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "DeepTech Cloud — AI troubleshooting for engineering and IT teams", template: "%s · DeepTech Cloud" },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: "DeepTech Cloud — Fix technical problems faster with AI",
    description: SITE.description,
    images: [{ url: `${SITE.basePath}/og.png`, width: 1200, height: 630, alt: "DeepTech Cloud" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE.basePath}/og.png`],
    title: "DeepTech Cloud — AI troubleshooting for engineering and IT teams",
    description: SITE.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#fbfaf7", colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-btn focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
