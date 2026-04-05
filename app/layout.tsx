import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/umair-logo.png",
    shortcut: "/umair-logo.png",
    apple: "/umair-logo.png",
  },
  title: {
    default: "Umair — Creative Strategy & Digital Growth",
    template: "%s | Umair",
  },
  description:
    "Creative strategist working at the intersection of storytelling, digital growth, and brand positioning. Led campaigns across fashion, hospitality, healthcare, and corporate sectors generating 13M+ organic views.",
  keywords: [
    "creative strategy",
    "digital growth",
    "content strategy",
    "social media",
    "brand positioning",
    "campaign architecture",
  ],
  authors: [{ name: "Umair" }],
  creator: "Umair",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Umair — Creative Strategy & Digital Growth",
    description:
      "Creative strategist working at the intersection of storytelling, digital growth, and brand positioning.",
    siteName: "Umair Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umair — Creative Strategy & Digital Growth",
    description:
      "Creative strategist working at the intersection of storytelling, digital growth, and brand positioning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased noise-overlay`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
