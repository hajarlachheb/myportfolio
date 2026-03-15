"use client";

import { useState } from "react";

/* ────────────────────────── helpers ────────────────────────── */

function SectionHeading({ num, title }: { num: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-white">
        {num}
      </span>
      <h2 className="font-display text-base sm:text-lg font-bold text-[var(--ink)]">{title}</h2>
    </div>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-10 sm:py-14 border-b border-[var(--border)] ${className}`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

function Bar({ value, max, label, color = "var(--accent)" }: { value: number; max: number; label: string; color?: string }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-3 group">
      <span className="w-28 sm:w-36 text-xs text-[var(--ink-muted)] text-right shrink-0">{label}</span>
      <div className="flex-1 h-6 rounded-full bg-[var(--paper)] border border-[var(--border)] overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%`, background: color }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold mix-blend-difference text-white">
          {value}%
        </span>
      </div>
    </div>
  );
}

function MetricCard({ value, label, sub, color = "var(--accent)" }: { value: string; label: string; sub?: string; color?: string }) {
  return (
    <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 shadow-soft text-center">
      <div className="font-display text-xl font-bold" style={{ color }}>{value}</div>
      <div className="text-xs font-medium text-[var(--ink)] mt-1">{label}</div>
      {sub && <div className="text-xs text-[var(--ink-muted)] mt-0.5">{sub}</div>}
    </div>
  );
}

/* ────────────────────────── main ────────────────────────── */

export function CaseStudyVisuals() {
  return (
    <>
      {/* ─── 1. EXECUTIVE SUMMARY ─── */}
      <Section>
        <SectionHeading num={1} title="Executive Summary" />
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 text-sm leading-relaxed text-[var(--ink-muted)] space-y-3">
            <p>
              Mid-size and large companies receive <strong className="text-[var(--ink)]">250 to 1,000 resumes per role</strong>.
              Recruiters spend 6-8 seconds per scan, leading to inconsistent evaluations and missed talent. Existing AI tools often
              amplify bias instead of correcting it.
            </p>
            <p>
              This product combines <strong className="text-[var(--ink)]">semantic matching</strong>,{" "}
              <strong className="text-[var(--ink)]">bias detection</strong>, and{" "}
              <strong className="text-[var(--ink)]">explainable rankings</strong> — three capabilities that don{"'"}t exist together
              in current offerings. Core principle: <em>AI assists, humans decide.</em>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { icon: "🎯", text: "Semantic candidate-job matching" },
              { icon: "⚖️", text: "Real-time bias detection layer" },
              { icon: "💬", text: "Explanation panel per candidate" },
              { icon: "🛡️", text: "EEOC & GDPR audit-ready" },
            ].map((c) => (
              <div key={c.text} className="flex items-center gap-2 rounded-card border border-[var(--border)] bg-[var(--paper)] px-3 py-2 text-xs text-[var(--ink)]">
                <span>{c.icon}</span><span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── 2. PROBLEM ─── */}
      <Section>
        <SectionHeading num={2} title="Problem Statement" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { icon: "📬", title: "Volume Overload", desc: "300-500 resumes per role, 6-8s per scan, 45-55 min of raw screening" },
            { icon: "🔄", title: "Inconsistency", desc: "Inter-rater agreement as low as 0.40 — recruiters disagree on ~50% of candidates" },
            { icon: "🧠", title: "Unconscious Bias", desc: "White-sounding names get 50% more callbacks (Bertrand & Mullainathan, 2004)" },
            { icon: "🔒", title: "Black-Box AI", desc: "Existing tools rank without explanation — Amazon scrapped its tool in 2018 over bias" },
          ].map((c) => (
            <div key={c.title} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 shadow-soft">
              <div className="text-2xl mb-2">{c.icon}</div>
              <h3 className="text-xs font-bold text-[var(--ink)] mb-1">{c.title}</h3>
              <p className="text-xs text-[var(--ink-muted)] leading-snug">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-card border border-red-200 bg-red-50 p-4">
          <p className="text-xs font-medium text-red-700">
            Key insight: AI screening tools trained on historical hiring data learn and amplify existing biases.
            The gap in the market is a tool that is fast, accurate, <strong>explainable</strong>, and <strong>fair</strong>.
          </p>
        </div>
      </Section>

      {/* ─── 3. MARKET ─── */}
      <Section>
        <SectionHeading num={3} title="Market Context" />
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          <div className="flex-1 text-sm text-[var(--ink-muted)] leading-relaxed space-y-2">
            <p>The global HR tech market is valued at <strong className="text-[var(--ink)]">~$34B</strong> (2024), projected to reach <strong className="text-[var(--ink)]">$50B by 2028</strong>. Regulatory pressure is accelerating: NYC Local Law 144 already requires annual bias audits for automated hiring tools.</p>
          </div>
          <div className="flex-1">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1">Market Growth ($B)</div>
              {[
                { year: "2024", val: 34, color: "var(--accent-soft)" },
                { year: "2026", val: 42, color: "var(--accent)" },
                { year: "2028", val: 50, color: "var(--accent-dark, var(--accent))" },
              ].map((d) => (
                <div key={d.year} className="flex items-center gap-2">
                  <span className="w-10 text-xs text-[var(--ink-muted)] font-medium">{d.year}</span>
                  <div className="flex-1 h-5 bg-[var(--paper)] border border-[var(--border)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${(d.val / 55) * 100}%`, background: d.color }} />
                  </div>
                  <span className="text-xs font-bold text-[var(--ink)] w-8">${d.val}B</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">Competitive Landscape</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-[var(--paper)]">
                <th className="text-left p-2 border border-[var(--border)] font-semibold text-[var(--ink)]">Competitor</th>
                <th className="text-left p-2 border border-[var(--border)] font-semibold text-[var(--ink)]">Resume Screening</th>
                <th className="text-left p-2 border border-[var(--border)] font-semibold text-[var(--ink)]">Bias Detection</th>
                <th className="text-left p-2 border border-[var(--border)] font-semibold text-[var(--ink)]">Explainability</th>
                <th className="text-left p-2 border border-[var(--border)] font-semibold text-[var(--ink)]">Mid-size Friendly</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "LinkedIn", s: true, b: false, e: false, m: true },
                { name: "HireVue", s: false, b: false, e: false, m: false },
                { name: "Eightfold AI", s: true, b: false, e: false, m: false },
                { name: "Pymetrics", s: false, b: true, e: false, m: true },
                { name: "This Product", s: true, b: true, e: true, m: true },
              ].map((r) => (
                <tr key={r.name} className={r.name === "This Product" ? "bg-[var(--accent-soft)]/40" : ""}>
                  <td className="p-2 border border-[var(--border)] font-medium text-[var(--ink)]">{r.name}</td>
                  {[r.s, r.b, r.e, r.m].map((v, i) => (
                    <td key={i} className="p-2 border border-[var(--border)] text-center">
                      {v ? <span className="text-green-600 font-bold">✓</span> : <span className="text-[var(--ink-muted)]">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ─── 4. PERSONAS ─── */}
      <Section>
        <SectionHeading num={4} title="Target Users & Personas" />
        <div className="grid sm:grid-cols-2 gap-5">
          <PersonaCard
            name="Sarah Chen"
            role="Senior Technical Recruiter"
            company="350-person B2B SaaS"
            avatar="S"
            color="#3b82f6"
            goals={["Screen 300+ resumes efficiently", "Present diverse shortlists in 5 days", "Explain screening decisions with data"]}
            frustrations={["5-7 hours/role on screening", "No bias detection tools", "Black-box ATS filters miss good candidates"]}
            quote="I want to be fair, but I also need to be fast. I don't trust black-box AI."
          />
          <PersonaCard
            name="David Park"
            role="Director of Machine Learning"
            company="Same company, hiring manager"
            avatar="D"
            color="#8b5cf6"
            goals={["Receive shortlists that match real requirements", "See why each candidate was recommended", "Ensure diversity in pipeline"]}
            frustrations={["Shortlists miss transferable-skill candidates", "Cannot audit the screening process", "No data on pipeline diversity"]}
            quote="Show me why you ranked this person #3. I need to trust the process."
          />
        </div>
      </Section>

      {/* ─── 5. USER RESEARCH ─── */}
      <Section>
        <SectionHeading num={5} title="User Research Insights" />
        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {[
            { method: "Recruiter Interviews", n: "n = 8", icon: "🎙️" },
            { method: "Online Survey", n: "n = 45", icon: "📊" },
            { method: "Workflow Observation", n: "n = 3 teams", icon: "👁️" },
          ].map((m) => (
            <div key={m.method} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-3 flex items-center gap-3 shadow-soft">
              <span className="text-xl">{m.icon}</span>
              <div>
                <div className="text-xs font-bold text-[var(--ink)]">{m.method}</div>
                <div className="text-xs text-[var(--ink-muted)]">{m.n}</div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">Survey Results</h3>
        <div className="space-y-2.5 mb-6">
          <Bar value={81} max={100} label="Want explanations" color="var(--accent)" />
          <Bar value={78} max={100} label="Admit own bias" color="#f59e0b" />
          <Bar value={64} max={100} label="Want bias alerts" color="#8b5cf6" />
          <Bar value={60} max={100} label="Quit AI tools" color="#ef4444" />
          <Bar value={34} max={100} label="Tried AI screening" color="#6b7280" />
        </div>
        <div className="rounded-card border border-[var(--accent)]/30 bg-[var(--accent-soft)]/20 p-4">
          <p className="text-xs italic text-[var(--ink-muted)]">
            &ldquo;I know I have blind spots. Everyone does. But I have zero tools to catch them. I just hope I{"'"}m being fair.&rdquo;
          </p>
          <p className="text-xs text-[var(--ink-muted)] mt-1">— Recruiter, 400-person fintech company</p>
        </div>
      </Section>

      {/* ─── 6. PRODUCT VISION ─── */}
      <Section>
        <SectionHeading num={6} title="Product Vision" />
        <div className="rounded-card border-2 border-[var(--accent)]/30 bg-gradient-to-br from-[var(--paper)] to-[var(--accent-soft)]/20 p-6 text-center mb-6">
          <p className="font-display text-sm sm:text-base font-semibold text-[var(--ink)] leading-relaxed">
            A bias-aware AI system that helps recruiters screen candidates efficiently
            <br />while maintaining <span className="text-[var(--accent)]">fairness</span>, <span className="text-[var(--accent)]">transparency</span>, and <span className="text-[var(--accent)]">accountability</span>.
          </p>
        </div>
        <div className="grid sm:grid-cols-5 gap-3">
          {[
            { icon: "🤝", title: "Human-in-the-loop", desc: "AI ranks, humans decide. No autonomous rejections." },
            { icon: "🔍", title: "Transparent by default", desc: "Every ranking comes with a reason." },
            { icon: "⚖️", title: "Fairness as a feature", desc: "Bias detection is core, not a checkbox." },
            { icon: "🧩", title: "Simplicity first", desc: "Proven techniques over cutting-edge fragility." },
            { icon: "🔐", title: "Privacy first", desc: "PII stripped before matching." },
          ].map((p) => (
            <div key={p.title} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-3 text-center shadow-soft">
              <div className="text-xl mb-1">{p.icon}</div>
              <div className="text-xs font-bold text-[var(--ink)] mb-0.5">{p.title}</div>
              <div className="text-xs text-[var(--ink-muted)] leading-snug">{p.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 7. FEATURES ─── */}
      <Section>
        <SectionHeading num={7} title="Core Product Features" />
        <FeatureCards />
      </Section>

      {/* ─── 8. MVP ─── */}
      <Section>
        <SectionHeading num={8} title="MVP Definition" />
        <MvpScope />
      </Section>

      {/* ─── 9. AI ARCHITECTURE ─── */}
      <Section>
        <SectionHeading num={9} title="AI System Design" />
        <ArchitectureDiagram />
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3 mt-8">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { cat: "NLP", tool: "spaCy + pdfplumber" },
            { cat: "Embeddings", tool: "Sentence-BERT (HF)" },
            { cat: "Bias Analysis", tool: "pandas + scipy" },
            { cat: "Backend", tool: "FastAPI (Python)" },
            { cat: "Database", tool: "PostgreSQL" },
            { cat: "Queue", tool: "Celery + Redis" },
            { cat: "Frontend", tool: "Next.js + Tailwind" },
            { cat: "Hosting", tool: "Vercel + Railway" },
          ].map((t) => (
            <div key={t.cat} className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-2.5 shadow-soft">
              <div className="text-xs font-bold text-[var(--accent)] uppercase">{t.cat}</div>
              <div className="text-xs text-[var(--ink)] mt-0.5">{t.tool}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 10. DATA STRATEGY ─── */}
      <Section>
        <SectionHeading num={10} title="Data Strategy" />
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-xs font-bold text-[var(--ink)] mb-2">Required Data</h3>
            <div className="space-y-1.5">
              {[
                { data: "Resumes (PDF/DOCX)", src: "Uploaded by recruiters" },
                { data: "Job descriptions", src: "Entered or imported from ATS" },
                { data: "Skill taxonomy", src: "O*NET + custom curation" },
                { data: "Hiring outcomes", src: "Optional — ATS export" },
                { data: "Recruiter feedback", src: "Collected in-app" },
              ].map((d) => (
                <div key={d.data} className="flex gap-2 text-xs">
                  <span className="text-[var(--accent)]">→</span>
                  <span className="text-[var(--ink)] font-medium">{d.data}</span>
                  <span className="text-[var(--ink-muted)]">— {d.src}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-[var(--ink)] mb-2">Privacy & Compliance</h3>
            <div className="space-y-2">
              {[
                { label: "GDPR", desc: "Candidate informed of AI use; right to explanation" },
                { label: "EEOC", desc: "Four-fifths rule built into bias detection" },
                { label: "NYC LL144", desc: "Annual bias audit export supported" },
                { label: "Retention", desc: "Auto-purge after hiring cycle + retention period" },
              ].map((c) => (
                <div key={c.label} className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-2 flex gap-2">
                  <span className="text-xs font-bold text-[var(--accent)] bg-[var(--accent-soft)] rounded px-1.5 py-0.5 shrink-0">{c.label}</span>
                  <span className="text-xs text-[var(--ink-muted)]">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 11. BIAS & ETHICS ─── */}
      <Section>
        <SectionHeading num={11} title="Bias & Ethical AI Considerations" />
        <BiasSection />
      </Section>

      {/* ─── 12. METRICS ─── */}
      <Section>
        <SectionHeading num={12} title="Product & AI Metrics" />
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">Product Metrics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <MetricCard value="60-70%" label="Screening time reduction" sub="From 6hrs → 1.8hrs" color="var(--accent)" />
          <MetricCard value="75%+" label="Shortlist → interview rate" sub="vs 50-60% baseline" color="#10b981" />
          <MetricCard value="NPS 40+" label="Recruiter satisfaction" sub="vs ~20 industry avg" color="#8b5cf6" />
          <MetricCard value="70%" label="Adoption in 6 months" sub="% of roles using tool" color="#f59e0b" />
          <MetricCard value="15%" label="Time-to-fill reduction" sub="~42 → ~36 days" color="#06b6d4" />
          <MetricCard value="7+/10" label="Hiring manager rating" sub="Shortlist quality" color="#ec4899" />
        </div>
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">AI Metrics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <MetricCard value="NDCG ≥0.70" label="Ranking accuracy" sub="vs expert human ranking" color="var(--accent)" />
          <MetricCard value="P>0.85 R>0.80" label="Skill extraction" sub="Precision & recall" color="#10b981" />
          <MetricCard value="<20% gap" label="Bias disparity" sub="EEOC four-fifths rule" color="#ef4444" />
          <MetricCard value="80%+" label="Explanation fidelity" sub="Rated accurate by users" color="#8b5cf6" />
          <MetricCard value="<8%" label="False negative rate" sub="Qualified in bottom quartile" color="#f59e0b" />
          <MetricCard value=">95%" label="Parsing success" sub="No critical errors" color="#06b6d4" />
        </div>
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-4">
          <h4 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">Guardrail Metrics</h4>
          <div className="flex flex-wrap gap-4 text-xs text-[var(--ink-muted)]">
            <span>• Shortlist diversity ≥ baseline</span>
            <span>• Override rate 10-30%</span>
            <span>• No group below four-fifths threshold</span>
          </div>
        </div>
      </Section>

      {/* ─── 13. EXPERIMENTATION ─── */}
      <Section>
        <SectionHeading num={13} title="Experimentation Plan" />
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              id: "E1",
              title: "AI-Assisted vs. Manual Screening",
              hypothesis: "AI screening produces equal/better shortlists in ≥50% less time",
              design: "Within-subjects A/B · 8-12 recruiters · 4-6 weeks",
              metrics: "Time to shortlist, interview advancement, satisfaction",
            },
            {
              id: "E2",
              title: "Explanation Panel Impact",
              hypothesis: "Explanations increase recruiter confidence and engagement",
              design: "Between-subjects · Group A (with) vs B (without) · 10-15 recruiters",
              metrics: "Confidence score, adjustment rate, time per candidate",
            },
            {
              id: "E3",
              title: "Bias Detection Accuracy",
              hypothesis: "Detects introduced disparities ≥90% of the time, FPR <15%",
              design: "Synthetic data with deliberate bias (5-30% gaps) · ROC analysis",
              metrics: "Sensitivity, false positive rate, threshold calibration",
            },
            {
              id: "E4",
              title: "Semantic vs. Keyword Matching",
              hypothesis: "Sentence-BERT outperforms TF-IDF for transferable-skill roles",
              design: "Offline comparison · 50-100 resume-job pairs · 3 expert rankers",
              metrics: "NDCG@10, precision@5, recall@10",
            },
          ].map((e) => (
            <div key={e.id} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 shadow-soft">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-white bg-[var(--accent)] rounded px-1.5 py-0.5">{e.id}</span>
                <h4 className="text-xs font-bold text-[var(--ink)]">{e.title}</h4>
              </div>
              <div className="space-y-1.5 text-xs text-[var(--ink-muted)]">
                <p><strong className="text-[var(--ink)]">H:</strong> {e.hypothesis}</p>
                <p><strong className="text-[var(--ink)]">Design:</strong> {e.design}</p>
                <p><strong className="text-[var(--ink)]">Metrics:</strong> {e.metrics}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 14. RISKS ─── */}
      <Section>
        <SectionHeading num={14} title="Risks & Mitigation" />
        <RiskMatrix />
      </Section>

      {/* ─── 15. ROADMAP ─── */}
      <Section>
        <SectionHeading num={15} title="Product Roadmap" />
        <RoadmapTimeline />
      </Section>

      {/* ─── 16. IMPACT ─── */}
      <Section>
        <SectionHeading num={16} title="Expected Business Impact" />
        <div className="space-y-4">
          {[
            { label: "Screening time/role", before: "5-7 hrs", after: "1.5-2 hrs", pctBefore: 85, pctAfter: 25, improvement: "60-70% reduction" },
            { label: "Shortlist → interview", before: "50-60%", after: "75%+", pctBefore: 55, pctAfter: 78, improvement: "25-50% improvement" },
            { label: "Bias disparity", before: "Unknown", after: "<20% gap", pctBefore: 90, pctAfter: 18, improvement: "Now measurable" },
            { label: "Recruiter NPS", before: "~20", after: "40+", pctBefore: 20, pctAfter: 45, improvement: "2x improvement" },
            { label: "Time to fill", before: "42 days", after: "~36 days", pctBefore: 70, pctAfter: 55, improvement: "~15% reduction" },
          ].map((row) => (
            <div key={row.label} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-3 shadow-soft">
              <div className="text-xs font-bold text-[var(--ink)] mb-2">{row.label}</div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs text-[var(--ink-muted)] w-16 shrink-0">Before</span>
                <div className="flex-1 h-4 bg-[var(--paper)] border border-[var(--border)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-red-400/60" style={{ width: `${row.pctBefore}%` }} />
                </div>
                <span className="text-xs font-medium text-[var(--ink-muted)] w-14 text-right">{row.before}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[var(--ink-muted)] w-16 shrink-0">After</span>
                <div className="flex-1 h-4 bg-[var(--paper)] border border-[var(--border)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-green-500/70" style={{ width: `${row.pctAfter}%` }} />
                </div>
                <span className="text-xs font-medium text-green-600 w-14 text-right">{row.after}</span>
              </div>
              <div className="text-xs text-[var(--accent)] font-medium mt-1 text-right">{row.improvement}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 17. REFLECTION ─── */}
      <Section className="border-b-0">
        <SectionHeading num={17} title="Reflection as an AI Product Manager" />
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { title: "Human-in-the-loop, always", desc: "The AI never autonomously rejects. Trust and fairness over raw efficiency. Hiring decisions affect lives." },
            { title: "Transparency over sophistication", desc: "Sentence-BERT + statistical parity — proven and auditable. Explainability matters more than marginal accuracy gains." },
            { title: "PII stripping as architecture", desc: "Not a policy but an architectural constraint. The model literally cannot see names, genders, or photos." },
            { title: "Bias detection as a feature, not a constraint", desc: "Surface bias information to the recruiter instead of algorithmically re-ranking. Respect human autonomy." },
          ].map((d) => (
            <div key={d.title} className="rounded-card border border-[var(--accent)]/20 bg-[var(--accent-soft)]/10 p-4">
              <h4 className="text-xs font-bold text-[var(--accent)] mb-1">{d.title}</h4>
              <p className="text-xs text-[var(--ink-muted)] leading-snug">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft">
          <h3 className="text-xs font-bold text-[var(--ink)] mb-3">Lessons Learned</h3>
          <ol className="space-y-2">
            {[
              "Start with the user problem, not the AI capability. User research redirected focus from model sophistication to transparency.",
              "Bias is a product problem, not just a model problem. It enters at data collection, feature design, UI, and user behavior.",
              "Simplicity enables trust. Recruiters burned by opaque AI need to see exactly how the system works.",
              "Regulation is a tailwind. Building compliance in from the start is a competitive advantage.",
              "The hardest PM skill is knowing what to exclude. Deferring bias dashboard to Phase 2 enabled a faster, cleaner MVP test.",
            ].map((l, i) => (
              <li key={i} className="flex gap-2 text-xs text-[var(--ink-muted)] leading-snug">
                <span className="text-[var(--accent)] font-bold shrink-0">{i + 1}.</span>
                <span>{l}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ─── PM TOOLS ─── */}
      <Section className="border-b-0 bg-gradient-to-b from-[var(--paper)] to-[var(--accent-soft)]/10">
        <h2 className="font-display text-base font-bold text-[var(--ink)] mb-4">PM Tools & Artifacts Used</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {[
            { tool: "Notion", use: "PRD, Personas, Roadmap" },
            { tool: "Figma", use: "Wireframes, UI" },
            { tool: "FigJam / Miro", use: "Journey Maps" },
            { tool: "Linear", use: "Sprint Planning" },
            { tool: "Dovetail", use: "User Research" },
            { tool: "Jupyter", use: "Bias Audits" },
            { tool: "Mixpanel", use: "Product Analytics" },
            { tool: "Loom", use: "Stakeholder Updates" },
            { tool: "Google Docs", use: "Spec Reviews" },
            { tool: "Slack", use: "Team Comms" },
          ].map((t) => (
            <div key={t.tool} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-2.5 text-center shadow-soft">
              <div className="text-xs font-bold text-[var(--ink)]">{t.tool}</div>
              <div className="text-xs text-[var(--ink-muted)] mt-0.5">{t.use}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ────────────────────────── sub-components ────────────────────────── */

function PersonaCard({
  name, role, company, avatar, color, goals, frustrations, quote,
}: {
  name: string; role: string; company: string; avatar: string; color: string;
  goals: string[]; frustrations: string[]; quote: string;
}) {
  return (
    <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] shadow-soft overflow-hidden">
      <div className="p-4 flex items-center gap-3 border-b border-[var(--border)]" style={{ background: `${color}10` }}>
        <div
          className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{ background: color }}
        >
          {avatar}
        </div>
        <div>
          <div className="text-xs font-bold text-[var(--ink)]">{name}</div>
          <div className="text-xs text-[var(--ink-muted)]">{role} · {company}</div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Goals</div>
          {goals.map((g) => (
            <div key={g} className="text-xs text-[var(--ink-muted)] flex gap-1.5"><span className="text-green-500">✓</span>{g}</div>
          ))}
        </div>
        <div>
          <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Frustrations</div>
          {frustrations.map((f) => (
            <div key={f} className="text-xs text-[var(--ink-muted)] flex gap-1.5"><span className="text-red-400">✗</span>{f}</div>
          ))}
        </div>
        <div className="rounded-card bg-[var(--paper)] border border-[var(--border)] p-3">
          <p className="text-xs italic text-[var(--ink-muted)]">&ldquo;{quote}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCards() {
  const [active, setActive] = useState(0);
  const features = [
    {
      icon: "📄", title: "Resume Parsing",
      value: "Extract structured data from any resume format automatically.",
      ai: "spaCy NER with custom resume entity models. pdfplumber for PDF extraction. Normalization layer maps variations to canonical forms.",
      risk: "Non-standard formats may lose data. Mitigation: confidence scores + recruiter edit capability.",
    },
    {
      icon: "🎯", title: "Candidate-Job Matching",
      value: "Objective job fit score (0-100) based on actual requirements, not superficial signals.",
      ai: "Sentence-BERT embeddings + cosine similarity. Weighted rubric: must-have skills 50%, experience 30%, nice-to-haves 20%.",
      risk: "Vocabulary mismatch across industries. Mitigation: skill normalization + synonym expansion.",
    },
    {
      icon: "⚖️", title: "Bias Detection Layer",
      value: "Proactive identification of demographic disparity in ranking outputs. EEOC compliance.",
      ai: "Aggregate statistical analysis across demographic proxies. Chi-squared and Mann-Whitney U tests. Four-fifths rule threshold.",
      risk: "Proxy inference is imprecise. Mitigation: operates on aggregates only, never individual classification.",
    },
    {
      icon: "💬", title: "Explainability Dashboard",
      value: "See exactly why each candidate was ranked — matched skills, gaps, experience breakdown.",
      ai: "Feature attribution decomposing match score into components. Evidence linking (specific resume text → matched requirement).",
      risk: "Over-detailed explanations may overwhelm. Mitigation: progressive disclosure — summary first, detail on click.",
    },
    {
      icon: "🖥️", title: "Recruiter Review Interface",
      value: "Human-in-the-loop: review, adjust, annotate, and build shortlists. Feedback improves future rankings.",
      ai: "Feedback collection for model evaluation. V2: active learning from recruiter corrections.",
      risk: "Rubber-stamping risk. Mitigation: explicit action required per candidate; override rate guardrail.",
    },
  ];
  const f = features[active];
  return (
    <div>
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {features.map((feat, i) => (
          <button
            key={feat.title}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-card px-3 py-2 text-xs font-medium transition-all ${
              i === active
                ? "bg-[var(--accent)] text-white shadow-soft"
                : "border border-[var(--border)] bg-[var(--paper-elevated)] text-[var(--ink-muted)] hover:border-[var(--accent)]/50"
            }`}
          >
            {feat.icon} {feat.title}
          </button>
        ))}
      </div>
      <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft">
        <h3 className="text-sm font-bold text-[var(--ink)] mb-3">{f.icon} {f.title}</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">User Value</div>
            <p className="text-xs text-[var(--ink-muted)] leading-snug">{f.value}</p>
          </div>
          <div>
            <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-1">How AI Is Used</div>
            <p className="text-xs text-[var(--ink-muted)] leading-snug">{f.ai}</p>
          </div>
          <div>
            <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Risks</div>
            <p className="text-xs text-[var(--ink-muted)] leading-snug">{f.risk}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MvpScope() {
  const items = [
    { feature: "Resume parsing (PDF → structured data)", included: true, priority: "P0" },
    { feature: "JD parsing (text → requirements)", included: true, priority: "P0" },
    { feature: "Candidate-job match scoring", included: true, priority: "P0" },
    { feature: "Ranking explanation per candidate", included: true, priority: "P0" },
    { feature: "Recruiter review & shortlist UI", included: true, priority: "P0" },
    { feature: "Recruiter feedback collection", included: true, priority: "P1" },
    { feature: "Bias detection dashboard", included: false, priority: "Phase 2" },
    { feature: "ATS integration (Greenhouse, Lever)", included: false, priority: "Phase 4" },
    { feature: "Multi-language support", included: false, priority: "Phase 5" },
    { feature: "Candidate self-reported demographics", included: false, priority: "Phase 5" },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((item) => (
        <div
          key={item.feature}
          className={`flex items-center gap-3 rounded-card px-3 py-2 text-xs transition-all ${
            item.included
              ? "border border-green-200 bg-green-50"
              : "border border-[var(--border)] bg-[var(--paper)] opacity-60"
          }`}
        >
          <span className={`text-sm ${item.included ? "text-green-600" : "text-[var(--ink-muted)]"}`}>
            {item.included ? "✓" : "—"}
          </span>
          <span className={`flex-1 ${item.included ? "text-[var(--ink)]" : "text-[var(--ink-muted)] line-through"}`}>
            {item.feature}
          </span>
          <span className={`shrink-0 rounded px-1.5 py-0.5 text-xs font-bold ${
            item.included ? "bg-green-600 text-white" : "bg-[var(--paper-elevated)] text-[var(--ink-muted)] border border-[var(--border)]"
          }`}>
            {item.priority}
          </span>
        </div>
      ))}
    </div>
  );
}

function ArchitectureDiagram() {
  const nodes = [
    { id: "jd", label: "Job Description", sub: "Text input", col: 0, row: 0, color: "#3b82f6" },
    { id: "jdp", label: "JD Parser", sub: "spaCy NER", col: 0, row: 1, color: "#3b82f6" },
    { id: "req", label: "Requirements", sub: "Must-have / nice-have", col: 0, row: 2, color: "#3b82f6" },
    { id: "res", label: "Resume Upload", sub: "PDF / CSV", col: 2, row: 0, color: "#8b5cf6" },
    { id: "rp", label: "Resume Parser", sub: "spaCy + pdfplumber", col: 2, row: 1, color: "#8b5cf6" },
    { id: "pii", label: "PII Stripper", sub: "Anonymize", col: 2, row: 2, color: "#ef4444" },
    { id: "match", label: "Matching Engine", sub: "Sentence-BERT", col: 1, row: 3, color: "#10b981" },
    { id: "bias", label: "Bias Detection", sub: "Statistical parity", col: 0, row: 4, color: "#f59e0b" },
    { id: "explain", label: "Explanation Gen", sub: "Feature attribution", col: 1, row: 4, color: "#06b6d4" },
    { id: "ui", label: "Recruiter UI", sub: "Rank + Explain + Flag", col: 1, row: 5, color: "#ec4899" },
    { id: "fb", label: "Feedback Loop", sub: "Corrections → model", col: 2, row: 5, color: "#8b5cf6" },
  ];
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-3 gap-x-4 gap-y-3 min-w-[400px]">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 3 }).map((_, col) => {
            const node = nodes.find((n) => n.col === col && n.row === row);
            if (!node) {
              if (row === 3 && col !== 1) {
                return <div key={`${row}-${col}`} className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--ink-muted)]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={col === 0 ? "M17 8l-5 5-5-5" : "M7 8l5 5 5-5"} /></svg>
                </div>;
              }
              return <div key={`${row}-${col}`} />;
            }
            return (
              <div
                key={node.id}
                className="rounded-card border-2 p-2.5 text-center shadow-soft bg-[var(--paper-elevated)]"
                style={{ borderColor: node.color + "40" }}
              >
                <div className="text-xs font-bold text-[var(--ink)]">{node.label}</div>
                <div className="text-xs mt-0.5" style={{ color: node.color }}>{node.sub}</div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-center mt-2">
        <div className="text-xs text-[var(--ink-muted)]">↓ data flows top to bottom ↓</div>
      </div>
    </div>
  );
}

function BiasSection() {
  const biasTypes = [
    { type: "Gender", severity: 90, color: "#ef4444", mitigation: "PII stripping, no career-gap penalty, aggregate monitoring" },
    { type: "University", severity: 75, color: "#f59e0b", mitigation: "Match on degree relevance not institution, tier disparity flag" },
    { type: "Geographic", severity: 60, color: "#3b82f6", mitigation: "Skill normalization for terminology, location-blind matching" },
    { type: "Socioeconomic", severity: 65, color: "#8b5cf6", mitigation: "Focus on skills not formatting, employer prestige ignored" },
    { type: "Age", severity: 55, color: "#06b6d4", mitigation: "No graduation dates in features, tech skills matched to requirements" },
  ];
  return (
    <div>
      <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">Bias Risk by Type</h3>
      <div className="space-y-3 mb-6">
        {biasTypes.map((b) => (
          <div key={b.type} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-3 shadow-soft">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-xs font-bold text-[var(--ink)] w-24 shrink-0">{b.type}</span>
              <div className="flex-1 h-3 bg-[var(--paper)] border border-[var(--border)] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${b.severity}%`, background: b.color }} />
              </div>
              <span className="text-xs font-bold w-8 text-right" style={{ color: b.color }}>{b.severity}%</span>
            </div>
            <p className="text-xs text-[var(--ink-muted)] pl-[108px]">Mitigation: {b.mitigation}</p>
          </div>
        ))}
      </div>
      <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">Fairness Metrics Monitored</h3>
      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {[
          { metric: "Demographic Parity", desc: "Equal shortlist rates across groups (four-fifths rule)" },
          { metric: "Equalized Odds", desc: "Equal true positive / false positive rates across groups" },
          { metric: "Calibration", desc: "A score of 85 means the same thing regardless of group" },
        ].map((m) => (
          <div key={m.metric} className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-3">
            <div className="text-xs font-bold text-[var(--accent)] mb-1">{m.metric}</div>
            <div className="text-xs text-[var(--ink-muted)]">{m.desc}</div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { title: "Anonymized Screening", desc: "PII stripped architecturally before model inference — the model cannot see name, gender, ethnicity, or photo." },
          { title: "No Autonomous Rejection", desc: "Every candidate remains visible. The AI ranks but never rejects. Opt-out to human-only review is supported." },
        ].map((e) => (
          <div key={e.title} className="rounded-card border-2 border-green-200 bg-green-50 p-4">
            <div className="text-xs font-bold text-green-700 mb-1">{e.title}</div>
            <div className="text-xs text-[var(--ink-muted)]">{e.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RiskMatrix() {
  const risks = [
    { risk: "Algorithmic bias amplification", severity: "Critical", likelihood: "Med", color: "#ef4444", mitigation: "PII stripping, bias detection, EEOC monitoring, human-in-the-loop" },
    { risk: "Over-reliance on AI", severity: "High", likelihood: "High", color: "#f59e0b", mitigation: "Explicit action per candidate; override rate guardrail (10-30%)" },
    { risk: "Regulatory non-compliance", severity: "Critical", likelihood: "Med", color: "#ef4444", mitigation: "Audit reports built in; candidate notification; legal review" },
    { risk: "User distrust", severity: "High", likelihood: "Med", color: "#f59e0b", mitigation: "Transparency-first; explanations; pilot program; recruiter control" },
    { risk: "Resume parsing errors", severity: "Med", likelihood: "High", color: "#3b82f6", mitigation: "Confidence scores; recruiter edit; 95%+ parsing target" },
    { risk: "Proxy discrimination", severity: "High", likelihood: "Med", color: "#f59e0b", mitigation: "Feature importance audits; adversarial testing; external review" },
  ];
  return (
    <div className="space-y-2">
      {risks.map((r) => (
        <div key={r.risk} className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-3 shadow-soft">
          <div className="flex items-center gap-2 sm:w-56 shrink-0">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: r.color }} />
            <span className="text-xs font-bold text-[var(--ink)]">{r.risk}</span>
          </div>
          <div className="flex gap-2 sm:w-32 shrink-0">
            <span className="rounded px-1.5 py-0.5 text-xs font-bold text-white" style={{ background: r.color }}>{r.severity}</span>
            <span className="rounded px-1.5 py-0.5 text-xs font-medium border border-[var(--border)] text-[var(--ink-muted)]">P: {r.likelihood}</span>
          </div>
          <p className="text-xs text-[var(--ink-muted)] flex-1">{r.mitigation}</p>
        </div>
      ))}
    </div>
  );
}

function RoadmapTimeline() {
  const phases = [
    { phase: "Phase 1", title: "MVP", weeks: "Wk 1-8", color: "#3b82f6", items: ["Resume & JD parsing", "Match scoring (Sentence-BERT)", "Explanation panel", "Recruiter review UI", "Pilot with 3-5 teams"] },
    { phase: "Phase 2", title: "Bias Dashboard", weeks: "Wk 9-14", color: "#f59e0b", items: ["Bias detection module", "EEOC four-fifths rule checks", "Bias audit report export", "Expanded pilot (10-15 teams)", "Run experiments E1 & E3"] },
    { phase: "Phase 3", title: "Explainable AI", weeks: "Wk 15-22", color: "#8b5cf6", items: ["Enhanced explanations", "Recruiter feedback loop", "Candidate comparison view", "Hiring manager view", "Run experiment E2"] },
    { phase: "Phase 4", title: "ATS Integration", weeks: "Wk 23-32", color: "#10b981", items: ["Greenhouse integration", "Lever integration", "Role templates", "Team collaboration", "Pricing & billing"] },
    { phase: "Phase 5", title: "Advanced", weeks: "Wk 33+", color: "#ec4899", items: ["Multi-language resumes", "Self-reported demographics", "Custom model fine-tuning", "SOC 2 compliance", "Enterprise SSO"] },
  ];
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-[var(--border)] hidden sm:block" />
      <div className="space-y-4">
        {phases.map((p) => (
          <div key={p.phase} className="flex gap-4">
            <div className="hidden sm:flex flex-col items-center shrink-0">
              <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white z-10" style={{ background: p.color }}>
                {p.phase.replace("Phase ", "")}
              </div>
            </div>
            <div className="flex-1 rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 shadow-soft" style={{ borderLeftColor: p.color, borderLeftWidth: 3 }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="sm:hidden text-xs font-bold text-white rounded px-1.5 py-0.5" style={{ background: p.color }}>{p.phase}</span>
                <span className="text-xs font-bold text-[var(--ink)]">{p.title}</span>
                <span className="text-xs text-[var(--ink-muted)]">{p.weeks}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.items.map((item) => (
                  <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-2 py-0.5 text-xs text-[var(--ink-muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
