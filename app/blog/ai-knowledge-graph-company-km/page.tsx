import Link from "next/link";
import { KGVisuals } from "./visuals";

export const metadata = {
  title: "AI Knowledge Graph for Company Knowledge Management — Full Product Case Study",
  description:
    "Designing an AI-powered knowledge graph that captures, organizes, and surfaces company knowledge. Full end-to-end PM case study.",
};

export default function KGCaseStudyPage() {
  return (
    <article className="flex-1">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[#c4b5fd]/15">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3.5-2 3zM0 20.5V18h20v-2l2 3.5-2 3z' fill='%23000' fill-opacity='.04' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 relative">
          <Link href="/blog" className="text-sm font-medium text-[var(--accent)] hover:underline">
            ← Blog
          </Link>
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <span className="rounded-full bg-[#7c3aed] px-3 py-1 text-xs font-semibold text-white">
              PM Case Study
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-3 py-1 text-xs font-medium text-[var(--ink-muted)]">
              Knowledge Graph
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-3 py-1 text-xs font-medium text-[var(--ink-muted)]">
              Enterprise AI
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-3 py-1 text-xs font-medium text-[var(--ink-muted)]">
              LLM
            </span>
            <span className="text-xs text-[var(--ink-muted)]">March 10, 2026</span>
          </div>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] max-w-3xl leading-tight">
            AI Knowledge Graph for Company Knowledge Management
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[var(--ink-muted)] max-w-2xl leading-relaxed">
            An internal knowledge brain that captures, organizes, and surfaces everything a company knows — from Slack threads to architecture decisions.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "20-30%", label: "Time spent searching info" },
              { value: "30%", label: "Search time reduction target" },
              { value: "4", label: "Data sources integrated" },
              { value: "5→1", label: "Queries to find an answer" },
            ].map((s) => (
              <div key={s.label} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-3 text-center shadow-soft">
                <div className="font-display text-lg font-bold text-[#7c3aed]">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-[var(--ink-muted)] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <KGVisuals />

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <Link href="/blog" className="font-medium text-sm text-[var(--accent)] hover:underline">
          ← Back to blog
        </Link>
      </div>
    </article>
  );
}
