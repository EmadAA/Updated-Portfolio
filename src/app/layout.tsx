import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const TITLE = "Emad Uddin Adil | WordPress & React.js Developer";
const DESCRIPTION =
  "WordPress designer and React.js developer building high-performance WooCommerce stores, GoHighLevel automations, and offline-first mobile apps.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Emad Uddin Adil",
  },
  description: DESCRIPTION,
  authors: [{ name: "Emad Uddin Adil" }],
  verification: {
    google: "PuG548mPxsTx_zCHDiO2_IMvRtn3wHqs-SNfOGtWnQU", // replace with your code from Search Console
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Emad Uddin Adil",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Emad Uddin Adil" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@EmadUddin_Adil",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}