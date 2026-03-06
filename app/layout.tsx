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
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
