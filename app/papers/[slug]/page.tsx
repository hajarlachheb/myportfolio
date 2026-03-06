import Link from "next/link";
import { notFound } from "next/navigation";
import { papers } from "@/content/papers";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return papers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const paper = papers.find((p) => p.slug === slug);
  if (!paper) return { title: "Paper" };
  return { title: paper.title, description: paper.abstract ?? paper.venue };
}

export default async function PaperPage({ params }: Props) {
  const { slug } = await params;
  const paper = papers.find((p) => p.slug === slug);
  if (!paper) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <p className="mb-6 text-sm">
        <Link href="/papers" className="font-medium text-[var(--accent)] hover:underline">
          ← Papers
        </Link>
      </p>
      <div className="mb-8 rounded-card bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/30 p-6 sm:p-8 border border-[var(--border)] shadow-soft">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
          {paper.title}
        </h1>
        <p className="text-[var(--ink)]">
          {paper.authors}
        </p>
        <p className="mt-1 text-sm text-[var(--accent)]/90">
          {paper.venue} · {paper.year}
          {paper.type && ` · ${paper.type}`}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {paper.pdf && (
          <a
            href={paper.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-button bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-dark)]"
          >
            PDF
          </a>
        )}
        {paper.link && (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-4 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-neutral-100"
          >
            External link
          </a>
        )}
      </div>

      {paper.abstract && (
        <section className="mt-8 rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft">
          <h2 className="font-display text-lg font-semibold text-[var(--ink)] mb-2">
            Abstract
          </h2>
          <p className="leading-relaxed text-[var(--ink)]">{paper.abstract}</p>
        </section>
      )}
    </div>
  );
}
