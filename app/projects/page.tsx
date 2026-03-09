import Link from "next/link";
import { cv } from "@/content/cv";

export const metadata = {
  title: "Projects",
  description: "Side projects, research, and things I build.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <div className="mb-10 rounded-card bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/30 p-6 sm:p-8 border border-[var(--border)] shadow-soft">
        <h1 className="font-display text-lg font-semibold tracking-tight text-[var(--ink)] mb-2">
          Projects
        </h1>
        <p className="text-sm text-[var(--accent)]/90">
          Things I've built — from AI & data to community and hackathons.
        </p>
      </div>

      <ul className="space-y-4">
        {cv.projects.map((project, i) => (
          <li
            key={project.name}
            className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft transition-all duration-300 hover:border-[var(--accent)]/50"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 className="font-display text-sm font-semibold text-[var(--ink)]">
                {project.name}
              </h2>
              {project.highlight && (
                <span className="rounded-button bg-[var(--accent-soft)] px-3 py-1 text-sm font-medium text-[var(--accent)]">
                  {project.highlight}
                </span>
              )}
            </div>
            {project.period && (
              <p className="mt-1 text-sm text-[var(--ink-muted)]">{project.period}</p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View project →
              </a>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm">
        <Link href="/" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
