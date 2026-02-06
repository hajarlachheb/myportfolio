import Link from "next/link";
import { cv } from "@/content/cv";

export const metadata = {
  title: "CV",
  description: cv.tagline,
};

export default function CVPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)]">
            {cv.name}
          </h1>
          <p className="mt-1 text-ink-muted">{cv.title}</p>
        </div>
        {cv.pdfUrl && (
          <a
            href={cv.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-button border-2 border-accent-soft bg-[var(--paper-elevated)] px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
          >
            Download PDF
          </a>
        )}
      </div>

      <section className="mb-8">
        <h2 className="font-display text-lg font-semibold text-[var(--ink)] border-b border-[var(--border-strong)] pb-2 mb-4">
          Contact
        </h2>
        <ul className="space-y-1 text-[var(--ink)]">
          <li>
            <a href={`mailto:${cv.email}`} className="text-accent hover:underline">
              {cv.email}
            </a>
          </li>
          {cv.phone && <li className="text-ink-muted">{cv.phone}</li>}
          {cv.location && <li className="text-ink-muted">{cv.location}</li>}
          <li className="mt-2 flex flex-wrap gap-3">
            {cv.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {l.label}
              </a>
            ))}
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-lg font-semibold text-[var(--ink)] border-b border-[var(--border-strong)] pb-2 mb-4">
          Experience
        </h2>
        <ul className="space-y-6">
          {cv.experience.map((job, i) => (
            <li key={i} className="rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft kawaii-card">
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-[var(--ink)]">{job.role}</span>
                <span className="text-sm text-ink-muted">
                  {job.start} – {job.end}
                </span>
              </div>
              <div className="text-ink-muted">
                {job.org}
                {job.location && ` · ${job.location}`}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">
                {job.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-lg font-semibold text-[var(--ink)] border-b border-[var(--border-strong)] pb-2 mb-4">
          Education
        </h2>
        <ul className="space-y-4">
          {cv.education.map((edu, i) => (
            <li key={i} className="rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft kawaii-card">
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-[var(--ink)]">{edu.degree}</span>
                <span className="text-sm text-ink-muted">{edu.year}</span>
              </div>
              <div className="text-ink-muted">
                {edu.institution}
                {edu.location && ` · ${edu.location}`}
              </div>
              {"thesis" in edu && edu.thesis && (
                <p className="mt-1 text-sm italic text-ink-muted">{edu.thesis}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-lg font-semibold text-[var(--ink)] border-b border-[var(--border-strong)] pb-2 mb-4">
          Skills
        </h2>
        <ul className="space-y-1 text-sm text-[var(--ink)]">
          {cv.skills.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      {"projects" in cv && cv.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="font-display text-lg font-semibold text-[var(--ink)] border-b border-[var(--border-strong)] pb-2 mb-4">
            Projects
          </h2>
          <ul className="space-y-4">
            {cv.projects.map((proj, i) => (
              <li key={i}>
                <div className="font-medium text-[var(--ink)]">{proj.name}</div>
                {proj.period && (
                  <span className="text-sm text-ink-muted">{proj.period}</span>
                )}
                <p className="mt-0.5 text-sm text-ink-muted">{proj.description}</p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    Link
                  </a>
                )}
              </li>
            ))}
          </ul>
          <Link href="/projects" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">
            View all projects →
          </Link>
        </section>
      )}

      {"awards" in cv && cv.awards.length > 0 && (
        <section className="mb-8">
          <h2 className="font-display text-lg font-semibold text-[var(--ink)] border-b border-[var(--border-strong)] pb-2 mb-4">
            Awards & Honors
          </h2>
          <ul className="space-y-1 text-sm text-[var(--ink)]">
            {cv.awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>
        </section>
      )}

      <p className="mt-10 text-sm text-ink-muted">
        <Link href="/" className="font-medium text-accent hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
