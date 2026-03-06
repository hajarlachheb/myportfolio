"use client";

import Link from "next/link";
import { useState } from "react";
import type { Paper } from "@/content/papers";

type Props = { papers: Paper[] };

export function PapersList({ papers }: Props) {
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
        Papers
      </h1>
      <p className="text-[var(--ink-muted)] mb-8 text-lg">
        Click a paper to preview the PDF below.
      </p>

      <ul className="space-y-3">
        {papers.map((paper) => (
          <li key={paper.slug}>
            <button
              type="button"
              onClick={() => setPreviewPdf(paper.pdf ?? null)}
              className={`group w-full text-left rounded-card border bg-[var(--paper-elevated)] p-5 transition-colors hover:border-[var(--accent)] ${
                previewPdf === paper.pdf
                  ? "border-[var(--accent)] ring-1 ring-[var(--accent)]"
                  : "border-[var(--border)] hover:border-[var(--border-strong)]"
              }`}
            >
              <h2 className="font-display font-semibold text-lg text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                {paper.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                {paper.authors} · {paper.venue} ({paper.year})
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                {paper.pdf && (
                  <span className="rounded-button bg-[var(--paper)] px-2 py-0.5 text-xs font-medium text-[var(--ink-muted)]">
                    PDF
                  </span>
                )}
                {paper.link && (
                  <span className="rounded-button bg-[var(--paper)] px-2 py-0.5 text-xs font-medium text-[var(--ink-muted)]">
                    Link
                  </span>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>

      {papers.length === 0 && (
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-8 text-center text-[var(--ink-muted)]">
          No papers yet. Add entries in content/papers.ts.
        </div>
      )}

      {/* Inline PDF preview */}
      {previewPdf && (
        <section className="mt-10 rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] overflow-hidden">
          <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--paper)] px-4 py-2">
            <span className="text-sm font-medium text-[var(--ink)]">Preview</span>
            <button
              type="button"
              onClick={() => setPreviewPdf(null)}
              className="text-sm text-[var(--ink-muted)] hover:text-[var(--accent)]"
            >
              Close
            </button>
          </div>
          <div className="relative w-full min-h-[70vh] bg-[var(--ink-muted)]/10">
            <iframe
              src={previewPdf}
              title="PDF preview"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </section>
      )}

      <p className="mt-10 text-sm text-[var(--ink-muted)]">
        <Link href="/" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
