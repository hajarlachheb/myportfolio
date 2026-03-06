import Link from "next/link";
import { cv } from "@/content/cv";

export const metadata = {
  title: "Projects",
  description: "Side projects, research, and things I build.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2 animate-fade-in">
        Projects
      </h1>
      <p className="text-[var(--ink-muted)] mb-10 text-lg animate-fade-in animation-delay-100">
        Things I've built — from AI & data to community and hackathons.
      </p>

      <ul className="space-y-4">
        {cv.projects.map((project, i) => (
          <li
            key={project.name}
            className="animate-fade-in rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 transition-colors hover:border-[var(--border-strong)]"
            style={{ animationDelay: `${(i + 2) * 100}ms` }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 className="font-display text-xl font-semibold text-[var(--ink)]">
                {project.name}
              </h2>
              {project.highlight && (
                <span className="rounded-button bg-neutral-100 px-3 py-1 text-xs font-medium text-[var(--ink-muted)]">
                  {project.highlight}
                </span>
              )}
            </div>
            {project.period && (
              <p className="mt-1 text-sm text-[var(--ink-muted)]">{project.period}</p>
            )}
            <p className="mt-2 leading-relaxed text-[var(--ink)]">
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

      <p className="mt-10 text-sm text-[var(--ink-muted)]">
        <Link href="/" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
