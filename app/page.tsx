import Link from "next/link";
import { cv } from "@/content/cv";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      {/* Hero */}
      <section className="mb-14">
        <div className="relative">
          <div
            className="absolute -right-1 top-20 text-3xl opacity-75 animate-float sm:right-2 sm:top-24 sm:text-4xl"
            aria-hidden
          >
            🌸
          </div>
          <div
            className="absolute -left-2 top-28 text-2xl opacity-70 animate-float animation-delay-200 sm:left-0 sm:top-36 sm:text-3xl"
            aria-hidden
          >
            ✿
          </div>
          <div
            className="absolute right-8 top-40 text-xl opacity-60 animate-float animation-delay-300 sm:right-16 sm:text-2xl"
            aria-hidden
          >
            ♡
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Data Scientist & AI Researcher ·
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
            Hi, I'm {cv.name}
          </h1>
          {cv.nickname && (
            <p className="mt-2 text-lg text-ink-muted">
              You can call me <span className="font-medium text-accent">{cv.nickname}</span>
            </p>
          )}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {cv.subtitle}
          </p>
        </div>

        <div className="mt-8 rounded-kawaii border border-[var(--border-strong)] bg-[var(--paper-elevated)] p-6 shadow-kawaii kawaii-card">
          <p className="leading-relaxed text-[var(--ink)] text-base sm:text-lg">
            {cv.bio}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 rounded-button bg-accent px-5 py-2.5 font-medium text-white shadow-soft transition-all duration-200 hover:bg-accent-dark hover:shadow-soft-hover hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            View CV
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-button border-2 border-[var(--border-strong)] bg-[var(--paper-elevated)] px-5 py-2.5 font-medium text-[var(--ink)] transition-all duration-200 hover:border-accent-soft hover:bg-cream hover:text-accent hover:-translate-y-0.5"
          >
            Projects
          </Link>
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 rounded-button border-2 border-[var(--border-strong)] bg-[var(--paper-elevated)] px-5 py-2.5 font-medium text-[var(--ink)] transition-all duration-200 hover:border-accent-soft hover:bg-cream hover:text-accent hover:-translate-y-0.5"
          >
            Papers
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-button border-2 border-[var(--border-strong)] bg-[var(--paper-elevated)] px-5 py-2.5 font-medium text-[var(--ink)] transition-all duration-200 hover:border-accent-soft hover:bg-cream hover:text-accent hover:-translate-y-0.5"
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
      <section className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <div
          className="absolute -right-1 top-0 text-xl opacity-60 animate-float animation-delay-400 sm:text-2xl"
          aria-hidden
        >
          ☆
        </div>
        <Link
          href="/projects"
          className="group block rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft kawaii-card transition-all duration-200 hover:border-accent-soft hover:-translate-y-1"
        >
          <span className="mb-3 block text-3xl opacity-90">🛠️</span>
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] transition-colors group-hover:text-accent">
            Projects
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            AID, VSCarbon, ML & data projects, hackathon wins.
          </p>
        </Link>
        <Link
          href="/papers"
          className="group block rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft kawaii-card transition-all duration-200 hover:border-accent-soft hover:-translate-y-1"
        >
          <span className="mb-3 block text-3xl opacity-90">📄</span>
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] transition-colors group-hover:text-accent">
            Papers
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Research on ML, privacy, and LLM security.
          </p>
        </Link>
        <Link
          href="/talks"
          className="group block rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft kawaii-card transition-all duration-200 hover:border-accent-soft hover:-translate-y-1"
        >
          <span className="mb-3 block text-3xl opacity-90">🎤</span>
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] transition-colors group-hover:text-accent">
            Talks
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            AI meetups, tech talks & conferences.
          </p>
        </Link>
        <Link
          href="/blog"
          className="group block rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft kawaii-card transition-all duration-200 hover:border-accent-soft hover:-translate-y-1"
        >
          <span className="mb-3 block text-3xl opacity-90">🌸</span>
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] transition-colors group-hover:text-accent">
            Blog
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Articles, essays, and tutorials.
          </p>
        </Link>
        <a
          href="https://github.com/hajarlachheb"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft kawaii-card transition-all duration-200 hover:border-accent-soft hover:-translate-y-1"
        >
          <span className="mb-3 block text-3xl opacity-90">🐙</span>
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] transition-colors group-hover:text-accent">
            GitHub
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Repos, code, and open source.
          </p>
        </a>
      </section>
    </div>
  );
}
