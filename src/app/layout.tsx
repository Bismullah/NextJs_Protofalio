import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import PerformanceMonitor from "@/components/ui/PerformanceMonitor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bismillah Wafadar - Senior Frontend Developer | React & Next.js Specialist",
  description: "Professional Frontend Developer with 3+ years of experience building scalable web applications. Specializing in React, Next.js, TypeScript, and modern web technologies. Available for full-time opportunities.",
  keywords: "Frontend Developer, React Developer, Next.js, TypeScript, JavaScript, Web Development, UI/UX, Bismillah Wafadar, Afghanistan Developer, Remote Developer",
  authors: [{ name: "Bismillah Wafadar" }],
  creator: "Bismillah Wafadar",
  openGraph: {
    title: "Bismillah Wafadar - Senior Frontend Developer",
    description: "Professional Frontend Developer specializing in React, Next.js, and TypeScript. Building exceptional user experiences.",
    url: "https://bismillah-portfolio.vercel.app",
    siteName: "Bismillah Wafadar Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bismillah Wafadar - Senior Frontend Developer",
    description: "Professional Frontend Developer specializing in React, Next.js, and TypeScript",
    creator: "@bismillah_dev",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} font-sans antialiased bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}