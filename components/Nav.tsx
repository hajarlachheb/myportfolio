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
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--paper-elevated)]/92 backdrop-blur-md shadow-soft">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-semibold text-[var(--ink)] transition-colors hover:text-accent"
        >
          <span aria-hidden className="text-xl">🌸</span>
          Hajar L.
        </Link>
        <ul className="flex items-center gap-1 flex-wrap justify-end">
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-button px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent/15 text-accent shadow-inner-soft"
                      : "text-ink-muted hover:bg-sakura-petal/50 hover:text-[var(--ink)]"
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
