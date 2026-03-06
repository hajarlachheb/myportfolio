import Link from "next/link";
import { cv } from "@/content/cv";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <section className="mb-14">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--ink-muted)]">
          Data Scientist & AI Researcher
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
          Hi, I'm {cv.name}
        </h1>
        {cv.nickname && (
          <p className="mt-2 text-lg text-[var(--ink-muted)]">
            You can call me <span className="font-medium text-[var(--ink)]">{cv.nickname}</span>
          </p>
        )}
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)] sm:text-xl">
          {cv.subtitle}
        </p>

        <div className="mt-8 rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6">
          <p className="leading-relaxed text-[var(--ink)] text-base sm:text-lg">
            {cv.bio}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/cv"
            className="inline-flex items-center rounded-button border border-[var(--border-strong)] bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-dark)]"
          >
            View CV
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-neutral-100"
          >
            Projects
          </Link>
          <Link
            href="/papers"
            className="inline-flex items-center rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-neutral-100"
          >
            Papers
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-neutral-100"
          >
            Blog
          </Link>
          <a
            href="https://www.linkedin.com/in/hajarlachheb/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)] hover:bg-neutral-100"
          >
            LinkedIn →
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/projects"
          className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 transition-colors hover:border-[var(--border-strong)]"
        >
          <h2 className="font-display text-lg font-semibold text-[var(--ink)]">
            Projects
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
            AID, VSCarbon, ML & data projects, hackathon wins.
          </p>
        </Link>
        <Link
          href="/papers"
          className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 transition-colors hover:border-[var(--border-strong)]"
        >
          <h2 className="font-display text-lg font-semibold text-[var(--ink)]">
            Papers
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
            Research on ML, privacy, and LLM security.
          </p>
        </Link>
        <Link
          href="/talks"
          className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 transition-colors hover:border-[var(--border-strong)]"
        >
          <h2 className="font-display text-lg font-semibold text-[var(--ink)]">
            Talks
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
            AI meetups, tech talks & conferences.
          </p>
        </Link>
        <Link
          href="/blog"
          className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 transition-colors hover:border-[var(--border-strong)]"
        >
          <h2 className="font-display text-lg font-semibold text-[var(--ink)]">
            Blog
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
            Articles, essays, and tutorials.
          </p>
        </Link>
        <a
          href="https://github.com/hajarlachheb"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 transition-colors hover:border-[var(--border-strong)]"
        >
          <h2 className="font-display text-lg font-semibold text-[var(--ink)]">
            GitHub
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
            Repos, code, and open source.
          </p>
        </a>
      </section>
    </div>
  );
}
