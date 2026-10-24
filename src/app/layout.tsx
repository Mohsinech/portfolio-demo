import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";

import { site } from "@/content/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-text" });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${site.role}`, template: `%s · ${site.name}` },
  description: `${site.role} based in ${site.city}, ${site.country}. ${site.intro}`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`} style={{ "--accent": site.accent } as CSSProperties}>
      <body>{children}</body>
    </html>
  );
}
