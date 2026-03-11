import Link from "next/link";
import { CaseStudyVisuals } from "./visuals";

export const metadata = {
  title: "Bias-Aware AI Resume Screening System — Full Product Case Study",
  description:
    "A complete AI product case study: designing a bias-aware resume screening system from problem discovery through MVP, AI architecture, ethics, experimentation, and roadmap.",
};

export default function CaseStudyPage() {
  return (
    <article className="flex-1">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/40">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 relative">
          <Link href="/blog" className="text-sm font-medium text-[var(--accent)] hover:underline">
            ← Blog
          </Link>
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">
              PM Case Study
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-3 py-1 text-xs font-medium text-[var(--ink-muted)]">
              AI Ethics
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-3 py-1 text-xs font-medium text-[var(--ink-muted)]">
              HR Tech
            </span>
            <span className="text-xs text-[var(--ink-muted)]">March 10, 2026</span>
          </div>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] max-w-3xl leading-tight">
            Bias-Aware AI Resume Screening System
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[var(--ink-muted)] max-w-2xl leading-relaxed">
            Designing an AI-assisted screening system that helps recruiters identify qualified candidates while minimizing algorithmic bias. Full end-to-end product case study.
          </p>
          {/* Key stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "70%", label: "Screening time saved" },
              { value: "75%+", label: "Shortlist-to-interview" },
              { value: "<20%", label: "Bias disparity target" },
              { value: "17", label: "Sections in study" },
            ].map((s) => (
              <div key={s.label} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-3 text-center shadow-soft">
                <div className="font-display text-lg font-bold text-[var(--accent)]">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-[var(--ink-muted)] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CaseStudyVisuals />

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <Link href="/blog" className="font-medium text-sm text-[var(--accent)] hover:underline">
          ← Back to blog
        </Link>
      </div>
    </article>
  );
}
