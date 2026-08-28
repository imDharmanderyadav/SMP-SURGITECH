import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMP Surgitech | Advancing Cardiovascular Care",
  description:
    "Trusted medical device distributor with over 10 years of experience in the cardiovascular segment. Authorized dealer for Abbott, Cordis, Teleflex, St. Jude Medical, and more.",
  keywords: [
    "cardiovascular devices",
    "medical devices",
    "stents",
    "catheters",
    "SMP Surgitech",
    "Abbott",
    "Cordis",
    "Teleflex",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 scrollbar-thin">
        <Navbar />
        <main className="flex-1 scrollbar-thin">{children}</main>
        <Footer />
      </body>
    </html>
  );
}