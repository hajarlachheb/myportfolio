import type { Metadata } from "next";
import { Crimson_Pro, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { KawaiiDeco } from "@/components/KawaiiDeco";

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
  title: { default: "Hajar Lachheb | AI Engineer & PhD Candidate", template: "%s | Hajar Lachheb" },
  description: "AI Engineer & PhD candidate in AI, Privacy & Security. CV, papers, blog, projects. Building ML systems and research in NLP, privacy, and knowledge-driven AI.",
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
        <KawaiiDeco />
        <Nav />
        <main className="relative z-[1] flex-1 flex flex-col min-h-[calc(100vh-8rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
