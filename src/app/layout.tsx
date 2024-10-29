import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/redux/providers";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "Top10Stock - Best Stock Recommendations",
  description: "Top 10 stocks in large cap, mid cap, small cap, and more.",
  viewport: "width=device-width, initial-scale=1", // SEO-friendly responsive setting
  keywords: "stocks, large cap, mid cap, small cap, IPO, stock market",
  authors: [{ name: "Top10Stock Team" }], // Author for SEO
  openGraph: {
    title: "Top10Stock - Best Stock Recommendations",
    description:
      "Discover top 10 stocks in large cap, mid cap, small cap categories and IPO information.",
    url: "https://top10stock.in",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased min-h-screen flex flex-col w-full `}
      >
        <Providers>
          {/* <Popup /> */}
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
