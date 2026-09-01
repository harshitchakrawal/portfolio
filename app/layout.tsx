import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistPixelSquare } from "geist/font/pixel";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshit - Developer",
  description:
    "Full stack web developer building clean, efficient applications with modern technologies.",
  icons: {
    icon: "/favicon-round.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} h-full antialiased`}
      // the preloader's boot script stamps data-preloader-* before hydration
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
