import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--paper-elevated)]/60">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-ink-muted sm:px-6">
        <span className="flex items-center gap-1.5 font-medium text-[var(--ink)]">
          <span aria-hidden>🌸</span>
          © {new Date().getFullYear()} Hajar Lachheb
        </span>
        <div className="flex gap-6">
          <Link
            href="/cv"
            className="transition-colors hover:text-accent"
          >
            CV
          </Link>
          <Link
            href="/projects"
            className="transition-colors hover:text-accent"
          >
            Projects
          </Link>
          <Link
            href="/papers"
            className="transition-colors hover:text-accent"
          >
            Papers
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-accent"
          >
            Blog
          </Link>
          <span aria-hidden className="opacity-70">🌸</span>
        </div>
      </div>
    </footer>
  );
}
