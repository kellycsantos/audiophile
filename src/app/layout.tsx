import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.scss";
import { Navbar } from "@components";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Audiophile",
  description: "Audiophile is a brand geared towards those passionate about high-quality audio. Our goal is to offer a premium sound experience combined with a modern and functional design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manropeSans.variable}>
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}
