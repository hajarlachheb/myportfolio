import Link from "next/link";
import { support } from "@/content/support";

export function Footer() {
  const showSupport = support.buyMeACoffeeUrl || support.koFiUrl;

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--paper-elevated)]/70 shadow-soft">
      {showSupport && (
        <div className="mx-auto max-w-4xl px-5 py-6 sm:px-8">
          <div className="rounded-kawaii border border-[var(--border-strong)] bg-gradient-to-br from-sakura-petal/40 to-cream/80 p-5 shadow-kawaii">
            <p className="mb-3 text-sm font-medium text-[var(--ink)]">
              {support.message}
            </p>
            <div className="flex flex-wrap gap-3">
              {support.buyMeACoffeeUrl && (
                <a
                  href={support.buyMeACoffeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-button bg-[#FFDD00] px-4 py-2.5 text-sm font-semibold text-[#000] shadow-soft transition-all duration-200 hover:scale-105 hover:shadow-soft-hover"
                >
                  <span aria-hidden>☕</span>
                  Buy me a coffee
                </a>
              )}
              {support.koFiUrl && (
                <a
                  href={support.koFiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-button border-2 border-[var(--border-strong)] bg-[var(--paper-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--ink)] transition-all duration-200 hover:border-accent hover:bg-cream"
                >
                  Ko-fi
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-5 py-5 text-sm text-ink-muted sm:px-8">
        <span className="flex items-center gap-2 font-medium text-[var(--ink)]">
          <span aria-hidden>🌸</span>
          © {new Date().getFullYear()} Hajar Lachheb
        </span>
        <div className="flex gap-6">
          <Link href="/cv" className="transition-colors hover:text-accent">
            CV
          </Link>
          <Link href="/projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <Link href="/papers" className="transition-colors hover:text-accent">
            Papers
          </Link>
          <Link href="/talks" className="transition-colors hover:text-accent">
            Talks
          </Link>
          <Link href="/blog" className="transition-colors hover:text-accent">
            Blog
          </Link>
          <span aria-hidden className="opacity-70">♡</span>
        </div>
      </div>
    </footer>
  );
}
