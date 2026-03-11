import Link from "next/link";
import { support } from "@/content/support";

export function Footer() {
  const showSupport = support.buyMeACoffeeUrl || support.koFiUrl;

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--paper-elevated)]">
      {showSupport && (
        <div className="mx-auto max-w-4xl px-5 py-6 sm:px-8">
          <div className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-5">
            <p className="mb-3 text-sm text-[var(--ink)]">
              {support.message}
            </p>
            <div className="flex flex-wrap gap-3">
              {support.buyMeACoffeeUrl && (
                <a
                  href={support.buyMeACoffeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-4 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Buy me a coffee
                </a>
              )}
              {support.koFiUrl && (
                <a
                  href={support.koFiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-4 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Ko-fi
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-5 py-5 text-sm text-[var(--ink-muted)] sm:px-8">
        <span className="font-medium text-[var(--ink)]">
          © {new Date().getFullYear()} Hajar Lachheb
        </span>
        <div className="flex gap-6">
          <Link href="/cv" className="hover:text-[var(--accent)] transition-colors">
            CV
          </Link>
          <Link href="/projects" className="hover:text-[var(--accent)] transition-colors">
            Projects
          </Link>
          <Link href="/papers" className="hover:text-[var(--accent)] transition-colors">
            Papers
          </Link>
          <Link href="/talks" className="hover:text-[var(--accent)] transition-colors">
            Talks
          </Link>
          <Link href="/blog" className="hover:text-[var(--accent)] transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
