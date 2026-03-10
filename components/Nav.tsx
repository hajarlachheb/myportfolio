"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/talks", label: "Talks" },
  { href: "/podcast", label: "Podcast" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--paper-elevated)]">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-sm font-semibold text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
        >
          Hajar L.
        </Link>
        <ul className="flex items-center gap-2 flex-wrap justify-end">
          <li>
            <ThemeToggle />
          </li>
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-button px-2.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-soft)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--accent)]"
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
