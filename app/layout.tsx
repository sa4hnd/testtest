import { ReactNode } from "react";
import { Viewport } from "next";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/700.css';

export const viewport: Viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
        </head>
      )}
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
