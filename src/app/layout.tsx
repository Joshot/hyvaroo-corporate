import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hyvaroo Labs — Building High-Value Digital Solutions",
  description:
    "Hyvaroo Labs is a technology-focused software house dedicated to building scalable and high-performance digital products for modern businesses.",
  keywords: ["software house", "web development", "Next.js", "UI/UX", "frontend engineering", "Hyvaroo Labs"],
  authors: [{ name: "Hyvaroo Labs", url: "https://hyvaroolabs.com" }],
  openGraph: {
    title: "Hyvaroo Labs — Building High-Value Digital Solutions",
    description: "We help startups and businesses create scalable, high-performance web applications.",
    url: "https://hyvaroolabs.com",
    siteName: "Hyvaroo Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyvaroo Labs",
    description: "Building High-Value Digital Solutions",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
