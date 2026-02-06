"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/blog", label: "Blog" },
  { href: "/podcast", label: "Podcast" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--paper-elevated)]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-display text-lg font-semibold text-[var(--ink)] transition-colors hover:text-accent"
        >
          <span aria-hidden>🌸</span>
          Hajar L.
        </Link>
        <ul className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-button px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-ink-muted hover:bg-cream hover:text-[var(--ink)]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
