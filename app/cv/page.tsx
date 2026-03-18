import Link from "next/link";
import { cv } from "@/content/cv";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "CV",
  description: cv.tagline,
};

export default function CVPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <div className="mb-10 rounded-card bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/30 p-6 sm:p-8 border border-[var(--border)] shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)]">
              {cv.name}
            </h1>
            <p className="mt-1 text-sm text-[var(--accent)] font-medium">{cv.title}</p>
          </div>
          <a
            href={`${basePath}${cv.pdfUrl}`}
            download="CV_Hajar_Lachheb.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md active:scale-[0.97]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="font-display text-base font-semibold text-[var(--ink)] border-b-2 border-[var(--accent)]/40 pb-2 mb-4">
          Contact
        </h2>
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft">
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 text-sm text-[var(--ink)]">
            <li>
              <span className="font-medium text-[var(--ink-muted)] block mb-0.5">Email</span>
              <a href={`mailto:${cv.email}`} className="text-[var(--accent)] hover:underline break-all">
                {cv.email}
              </a>
            </li>
            {cv.phone && (
              <li>
                <span className="text-sm font-medium text-[var(--ink-muted)] block mb-0.5">Phone</span>
                <span className="text-[var(--ink)]">{cv.phone}</span>
              </li>
            )}
            {cv.location && (
              <li className={!cv.phone ? "sm:col-start-2" : ""}>
                <span className="text-sm font-medium text-[var(--ink-muted)] block mb-0.5">Location</span>
                <span className="text-[var(--ink)]">{cv.location}</span>
              </li>
            )}
            <li className="sm:col-span-2">
              <span className="text-sm font-medium text-[var(--ink-muted)] block mb-1">Links</span>
              <div className="flex flex-wrap gap-3">
                {cv.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-base font-semibold text-[var(--ink)] border-b-2 border-[var(--accent)]/40 pb-2 mb-4">
          Experience
        </h2>
        <ul className="space-y-6">
          {cv.experience.map((job, i) => (
            <li key={i} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft transition-colors hover:border-[var(--accent)]/50">
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="font-medium text-[var(--ink)]">{job.role}</span>
                <span className="text-[var(--ink-muted)]">
                  {job.start} – {job.end}
                </span>
              </div>
              <div className="text-[var(--ink-muted)]">
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
        <h2 className="font-display text-base font-semibold text-[var(--ink)] border-b-2 border-[var(--accent)]/40 pb-2 mb-4">
          Education
        </h2>
        <ul className="space-y-4">
          {cv.education.map((edu, i) => (
            <li key={i} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft transition-colors hover:border-[var(--accent)]/50">
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="font-medium text-[var(--ink)]">{edu.degree}</span>
                <span className="text-[var(--ink-muted)]">{edu.year}</span>
              </div>
              <div className="text-[var(--ink-muted)]">
                {edu.institution}
                {edu.location && ` · ${edu.location}`}
              </div>
              {"thesis" in edu && edu.thesis && (
                <p className="mt-1 text-sm italic text-[var(--ink-muted)]">{edu.thesis}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-base font-semibold text-[var(--ink)] border-b-2 border-[var(--accent)]/40 pb-2 mb-4">
          Skills
        </h2>
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft">
        <ul className="space-y-1 text-sm text-[var(--ink)]">
          {cv.skills.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        </div>
      </section>

      {"languages" in cv && cv.languages.length > 0 && (
        <section className="mb-8">
          <h2 className="font-display text-base font-semibold text-[var(--ink)] border-b-2 border-[var(--accent)]/40 pb-2 mb-4">
            Languages
          </h2>
          <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft">
          <p className="text-sm text-[var(--ink)]">
            {cv.languages.join(", ")}
          </p>
          </div>
        </section>
      )}

      {"projects" in cv && cv.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="font-display text-base font-semibold text-[var(--ink)] border-b-2 border-[var(--accent)]/40 pb-2 mb-4">
            Projects
          </h2>
          <ul className="space-y-4">
            {cv.projects.map((proj, i) => (
              <li key={i}>
                <div className="font-medium text-[var(--ink)]">{proj.name}</div>
                {proj.period && (
                  <span className="text-sm text-[var(--ink-muted)]">{proj.period}</span>
                )}
                <p className="mt-0.5 text-sm text-[var(--ink-muted)]">{proj.description}</p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
                  >
                    Link
                  </a>
                )}
              </li>
            ))}
          </ul>
          <Link href="/projects" className="mt-2 inline-block text-sm font-medium text-[var(--accent)] hover:underline">
            View all projects →
          </Link>
        </section>
      )}

      {"researchCollaboration" in cv && cv.researchCollaboration.length > 0 && (
        <section className="mb-8">
          <h2 className="font-display text-base font-semibold text-[var(--ink)] border-b-2 border-[var(--accent)]/40 pb-2 mb-4">
            Research Collaboration
          </h2>
          <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft">
            <ul className="space-y-1 text-sm text-[var(--ink)] list-disc list-inside">
              {cv.researchCollaboration.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {"awards" in cv && cv.awards.length > 0 && (
        <section className="mb-8">
          <h2 className="font-display text-base font-semibold text-[var(--ink)] border-b-2 border-[var(--accent)]/40 pb-2 mb-4">
            Awards & Honors
          </h2>
          <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft">
          <ul className="space-y-1 text-sm text-[var(--ink)]">
            {cv.awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>
          </div>
        </section>
      )}

      <p className="mt-10 text-sm">
        <Link href="/" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
