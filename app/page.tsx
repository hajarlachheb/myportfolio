import Link from "next/link";
import { cv } from "@/content/cv";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14 sm:px-6 sm:py-16">
      {/* Hero */}
      <section className="mb-16">
        <div className="relative">
          <div
            className="absolute -right-1 top-20 text-2xl opacity-75 animate-float sm:right-0 sm:top-24 sm:text-3xl"
            aria-hidden
          >
            🌸
          </div>
          <div
            className="absolute -left-2 top-28 text-2xl opacity-70 animate-float animation-delay-200 sm:left-[-46px] sm:top-40 sm:text-3xl"
            aria-hidden
          >
            🌸
          </div>
          <div
            className="absolute right-4 top-36 text-xl opacity-60 animate-float animation-delay-300 sm:right-8 sm:text-2xl"
            aria-hidden
          >
            🌸
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Data Scientist & AI Researcher
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
            Hi, I'm {cv.name}
          </h1>
          {cv.nickname && (
            <p className="mt-1 text-lg text-ink-muted">
              You can call me <span className="font-medium text-accent">{cv.nickname}</span>
            </p>
          )}
          <p className="mt-3 max-w-lg text-lg leading-relaxed text-ink-muted">
            {cv.subtitle}
          </p>
        </div>

        <div className="mt-8 rounded-card border border-[var(--border-strong)] bg-[var(--paper-elevated)] p-6 shadow-soft">
          <p className="leading-relaxed text-[var(--ink)]">
            {cv.bio}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 rounded-button bg-accent px-5 py-2.5 font-medium text-white shadow-soft transition-all duration-200 hover:bg-accent-dark hover:shadow-soft-hover hover:-translate-y-0.5"
          >
            View CV
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-button border-2 border-[var(--border-strong)] bg-[var(--paper-elevated)] px-5 py-2.5 font-medium text-[var(--ink)] transition-colors hover:border-accent-soft hover:bg-cream hover:text-accent"
          >
            Projects
          </Link>
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 rounded-button border-2 border-[var(--border-strong)] bg-[var(--paper-elevated)] px-5 py-2.5 font-medium text-[var(--ink)] transition-colors hover:border-accent-soft hover:bg-cream hover:text-accent"
          >
            Papers
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-button border-2 border-[var(--border-strong)] bg-[var(--paper-elevated)] px-5 py-2.5 font-medium text-[var(--ink)] transition-colors hover:border-accent-soft hover:bg-cream hover:text-accent"
          >
            Blog
          </Link>
          <a
            href="https://www.linkedin.com/in/hajarlachheb/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-button bg-cream px-5 py-2.5 font-medium text-ink-muted transition-colors hover:bg-accent-soft hover:text-accent"
          >
            LinkedIn →
          </a>
        </div>
      </section>

      {/* Content cards */}
      <section className="relative grid gap-4 sm:grid-cols-2">
        <div
          className="absolute -right-1 top-0 text-xl opacity-60 animate-float animation-delay-400 sm:text-2xl"
          aria-hidden
        >
          🌸
        </div>
        <div
          className="absolute bottom-1/4 left-0 text-lg opacity-50 animate-float animation-delay-300 sm:text-xl"
          aria-hidden
        >
          🌸
        </div>
        <Link
          href="/projects"
          className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft transition-all duration-200 hover:border-accent-soft hover:shadow-soft-hover hover:-translate-y-1"
        >
          <span className="mb-3 block text-2xl opacity-90">🛠️</span>
          <h2 className="font-display text-lg font-semibold text-[var(--ink)] transition-colors group-hover:text-accent">
            Projects
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
            AID, VSCarbon, ML & data projects, hackathon wins.
          </p>
        </Link>
        <Link
          href="/papers"
          className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft transition-all duration-200 hover:border-accent-soft hover:shadow-soft-hover hover:-translate-y-1"
        >
          <span className="mb-3 block text-2xl opacity-90">📄</span>
          <h2 className="font-display text-lg font-semibold text-[var(--ink)] transition-colors group-hover:text-accent">
            Papers
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
            Research on ML, privacy, and LLM security.
          </p>
        </Link>
        <Link
          href="/blog"
          className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft transition-all duration-200 hover:border-accent-soft hover:shadow-soft-hover hover:-translate-y-1"
        >
          <span className="mb-3 block text-2xl opacity-90">🌸</span>
          <h2 className="font-display text-lg font-semibold text-[var(--ink)] transition-colors group-hover:text-accent">
            Blog
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
            Articles, essays, and tutorials.
          </p>
        </Link>
        <a
          href="https://github.com/hajarlachheb"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft transition-all duration-200 hover:border-accent-soft hover:shadow-soft-hover hover:-translate-y-1"
        >
          <span className="mb-3 block text-2xl opacity-90">🐙</span>
          <h2 className="font-display text-lg font-semibold text-[var(--ink)] transition-colors group-hover:text-accent">
            GitHub
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
            Repos, code, and open source.
          </p>
        </a>
      </section>
    </div>
  );
}
