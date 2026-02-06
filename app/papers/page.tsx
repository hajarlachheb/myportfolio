import Link from "next/link";
import { papers } from "@/content/papers";

export const metadata = {
  title: "Papers",
  description: "Academic and professional publications.",
};

export default function PapersPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
        Papers
      </h1>
      <p className="text-ink-muted mb-8 text-lg">
        Academic and professional publications. Click a title for abstract and links.
      </p>

      <ul className="space-y-3">
        {papers.map((paper) => (
          <li key={paper.slug}>
            <Link
              href={`/papers/${paper.slug}`}
              className="group block rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft kawaii-card transition-all duration-200 hover:border-accent-soft hover:-translate-y-0.5"
            >
              <h2 className="font-display font-semibold text-lg text-[var(--ink)] transition-colors group-hover:text-accent">
                {paper.title}
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                {paper.authors} · {paper.venue} ({paper.year})
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                {paper.pdf && (
                  <span className="rounded-button bg-accent/10 px-2 py-0.5 font-medium text-accent">
                    PDF
                  </span>
                )}
                {paper.link && (
                  <span className="rounded-button bg-accent/10 px-2 py-0.5 font-medium text-accent">
                    Link
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {papers.length === 0 && (
        <div className="rounded-kawaii border border-[var(--border)] bg-cream/50 p-8 text-center text-ink-muted">
          No papers yet. Add entries in content/papers.ts.
        </div>
      )}

      <p className="mt-10 text-sm text-ink-muted">
        <Link href="/" className="font-medium text-accent hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
