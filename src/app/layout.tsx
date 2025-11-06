import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Jean - Développeur Full Stack & Architecte IA",
  description:
    "Développeur web/desktop spécialisé en Next.js, Rust, Electron et systèmes d'agents IA. Je conçois des solutions disruptives pour startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-['PPMori']`}
      >
        {children}
      </body>
    </html>
  );
}
