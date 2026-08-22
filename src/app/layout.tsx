import type { Metadata, Viewport } from "next";
import { Inter, Kalam, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import AITutor from "@/components/AITutor";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kalam = Kalam({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-kalam" });
const notoSansDevanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-devanagari" });

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  title: "UP Board Class 12 Science Notes",
  description: "Smart Notes • Smart Revision • Better Preparation for UP Board Class 12 Science (2026-27)",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "UP Board 12th",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${kalam.variable} ${notoSansDevanagari.variable} antialiased bg-[#fdfbf7] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <AITutor />
        </ThemeProvider>
      </body>
    </html>
  );
}
