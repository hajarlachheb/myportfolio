import type { Metadata } from "next";
import { Crimson_Pro, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const display = Crimson_Pro({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: { default: "Hajar Lachheb | Data Scientist & AI Researcher", template: "%s | Hajar Lachheb" },
  description: "Girl in tech. CV, papers, blog, projects. Building scalable, secure, responsible AI.",
  openGraph: { type: "website" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Nav />
        <main className="relative flex-1 flex flex-col min-h-[calc(100vh-8rem)]">
          <div
            className="pointer-events-none fixed right-6 top-28 select-none text-2xl opacity-50 animate-float sm:right-10 sm:top-32 sm:text-3xl"
            aria-hidden
          >
            🌸
          </div>
          <div
            className="pointer-events-none fixed bottom-28 left-6 select-none text-xl opacity-45 animate-float animation-delay-200 sm:bottom-32 sm:left-10 sm:text-2xl"
            aria-hidden
          >
            ✿
          </div>
          <div
            className="pointer-events-none fixed right-12 top-1/2 select-none text-lg opacity-35 animate-float animation-delay-300"
            aria-hidden
          >
            ♡
          </div>
          <div
            className="pointer-events-none fixed left-8 top-1/3 select-none text-lg opacity-30 animate-float animation-delay-100"
            aria-hidden
          >
            ☆
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
