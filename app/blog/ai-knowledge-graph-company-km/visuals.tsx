"use client";

import { useState } from "react";

const ACCENT = "#7c3aed";
const ACCENT_SOFT = "#ede9fe";

function SH({ num, title }: { num: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: ACCENT }}>
        {num}
      </span>
      <h2 className="font-display text-base sm:text-lg font-bold text-[var(--ink)]">{title}</h2>
    </div>
  );
}

function Sec({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-10 sm:py-14 border-b border-[var(--border)] ${className}`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

function Bar({ value, max, label, color = ACCENT }: { value: number; max: number; label: string; color?: string }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <span className="w-32 sm:w-40 text-xs text-[var(--ink-muted)] text-right shrink-0">{label}</span>
      <div className="flex-1 h-6 rounded-full bg-[var(--paper)] border border-[var(--border)] overflow-hidden relative">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold mix-blend-difference text-white">{value}%</span>
      </div>
    </div>
  );
}

function MCard({ value, label, sub, color = ACCENT }: { value: string; label: string; sub?: string; color?: string }) {
  return (
    <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 shadow-soft text-center">
      <div className="font-display text-xl font-bold" style={{ color }}>{value}</div>
      <div className="text-xs font-medium text-[var(--ink)] mt-1">{label}</div>
      {sub && <div className="text-xs text-[var(--ink-muted)] mt-0.5">{sub}</div>}
    </div>
  );
}

export function KGVisuals() {
  return (
    <>
      {/* 1 EXECUTIVE SUMMARY */}
      <Sec>
        <SH num={1} title="Executive Summary" />
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 text-sm leading-relaxed text-[var(--ink-muted)] space-y-3">
            <p>
              Inside every company, knowledge is scattered across <strong className="text-[var(--ink)]">Slack messages, Notion docs, meeting recordings, emails, code repos, and wikis</strong>. Employees spend 20-30% of their work week just searching for information. When someone leaves, their institutional knowledge vanishes.
            </p>
            <p>
              This product builds an <strong className="text-[var(--ink)]">AI-powered knowledge graph</strong> — an internal knowledge brain — that ingests, connects, and surfaces everything the company knows. Think of it as Google for your organization, but with <em>context</em>: not just documents, but the people, decisions, and relationships between them.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { icon: "🧠", text: "Auto-ingests from Notion, Slack, GitHub" },
              { icon: "🔗", text: "Builds entity-relationship graph" },
              { icon: "🔍", text: "Semantic search with source citations" },
              { icon: "📋", text: "Decision tracking & expertise discovery" },
            ].map((c) => (
              <div key={c.text} className="flex items-center gap-2 rounded-card border border-[var(--border)] bg-[var(--paper)] px-3 py-2 text-xs text-[var(--ink)]">
                <span>{c.icon}</span><span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* 2 PROBLEM */}
      <Sec>
        <SH num={2} title="The Problem" />
        <KnowledgeFragmentation />
        <div className="mt-6 rounded-card border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-medium text-amber-700">
            McKinsey research: employees spend <strong>1.8 hours per day</strong> — nearly 20% of a work week — searching for and gathering information. For a 500-person company, that is <strong>~180,000 hours/year</strong> of lost productivity.
          </p>
        </div>
      </Sec>

      {/* 3 MARKET */}
      <Sec>
        <SH num={3} title="Market Context" />
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="text-sm text-[var(--ink-muted)] leading-relaxed space-y-2">
            <p>The enterprise knowledge management market is valued at <strong className="text-[var(--ink)]">~$33B</strong> (2024), growing at 12% CAGR. The rise of LLMs is creating a new category: <strong className="text-[var(--ink)]">AI-native knowledge platforms</strong> that go beyond search to understanding.</p>
            <p>Companies like Google (NotebookLM), Microsoft (Copilot), Atlassian (Rovo), and Glean are investing heavily. The opportunity is in the <strong className="text-[var(--ink)]">mid-market</strong> — companies too large for tribal knowledge, too small for enterprise solutions.</p>
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2">Existing Solutions Gap</div>
            <div className="space-y-2">
              {[
                { tool: "Confluence", gap: "Search is keyword-only, no relationships" },
                { tool: "Notion", gap: "Great for writing, poor for discovery" },
                { tool: "Slack Search", gap: "Returns threads, not answers" },
                { tool: "Glean", gap: "Enterprise search but no knowledge graph" },
                { tool: "This Product", gap: "Graph + LLM + source citations ✓", highlight: true },
              ].map((t) => (
                <div
                  key={t.tool}
                  className={`flex gap-2 text-xs rounded-card border p-2 ${
                    t.highlight
                      ? "border-[#7c3aed]/30 bg-[#ede9fe]/30"
                      : "border-[var(--border)] bg-[var(--paper)]"
                  }`}
                >
                  <span className={`font-bold shrink-0 w-20 ${t.highlight ? "text-[#7c3aed]" : "text-[var(--ink)]"}`}>{t.tool}</span>
                  <span className="text-[var(--ink-muted)]">{t.gap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* 4 PERSONAS */}
      <Sec>
        <SH num={4} title="Target Users & Personas" />
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <PersonaCard
            name="Mia Torres"
            role="New Product Manager (3 weeks in)"
            avatar="M"
            color="#7c3aed"
            goals={["Understand why past decisions were made", "Find relevant docs without asking 5 people", "Ramp up on product context in days, not months"]}
            frustrations={["Spends 2+ hrs/day hunting for context", "Institutional knowledge is in people's heads", "Old Slack threads are impossible to find"]}
            quote="I keep asking 'why was it built this way?' and nobody remembers. The answer is somewhere in a Slack thread from 2023."
            scenario="Mia asks: 'Why was feature X designed this way?' → Today: asks 3 people, reads 7 docs, finds a Slack thread after 2 hours. → With product: types query, gets the decision doc, the meeting notes, and the engineer who made the call — in 10 seconds."
          />
          <PersonaCard
            name="Raj Patel"
            role="Staff Engineer, 4 years at company"
            avatar="R"
            color="#0ea5e9"
            goals={["Stop answering the same questions repeatedly", "Document decisions without extra overhead", "Find related past work before starting new projects"]}
            frustrations={["Answers 5-10 context questions per week from new hires", "Knowledge docs go stale because nobody maintains them", "Duplicate work happens because teams don't know what exists"]}
            quote="I'm a human search engine. Half my week is explaining context that should be documented somewhere."
            scenario="Raj is asked: 'How does auth work?' → Today: spends 30 min writing a Slack essay for the 12th time. → With product: sends a link to the knowledge graph answer with full source trail."
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <PersonaCard
            name="Elena Novak"
            role="VP Engineering, leadership"
            avatar="E"
            color="#10b981"
            goals={["Understand decision history for strategy planning", "Identify knowledge gaps and expertise distribution", "Reduce institutional knowledge risk (bus factor)"]}
            frustrations={["Cannot trace why past architectural decisions were made", "No visibility into who knows what", "Key-person dependency risk is invisible"]}
            quote="When Alex left, we lost 3 years of context on our data pipeline. That can't happen again."
            scenario=""
          />
          <div className="rounded-card border-2 border-dashed border-[var(--border)] bg-[var(--paper)] p-4 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl mb-2">🚫</div>
              <div className="text-xs font-bold text-[var(--ink)] mb-1">Anti-Persona</div>
              <p className="text-xs text-[var(--ink-muted)] leading-snug max-w-xs">
                Someone who wants to <strong>surveil employees</strong> or track individual productivity.
                This system is for knowledge access, not employee monitoring.
                No individual activity tracking or performance metrics.
              </p>
            </div>
          </div>
        </div>
      </Sec>

      {/* 5 USER RESEARCH */}
      <Sec>
        <SH num={5} title="User Research Insights" />
        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {[
            { method: "Employee Interviews", n: "n = 12 across eng, PM, design", icon: "🎙️" },
            { method: "Time-Diary Study", n: "n = 20 employees, 2-week tracking", icon: "⏱️" },
            { method: "Knowledge Audit", n: "3 teams, mapped information flows", icon: "🗺️" },
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
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">Time-Diary Study Results</h3>
        <div className="space-y-2.5 mb-6">
          <Bar value={72} max={100} label="Couldn't find info" color="#ef4444" />
          <Bar value={65} max={100} label="Asked a person instead" color="#f59e0b" />
          <Bar value={58} max={100} label="Info was outdated" color="#8b5cf6" />
          <Bar value={45} max={100} label="Duplicated past work" color="#3b82f6" />
          <Bar value={38} max={100} label="Decision context lost" color="#06b6d4" />
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-card border border-[#7c3aed]/20 bg-[#ede9fe]/20 p-4">
            <p className="text-xs italic text-[var(--ink-muted)]">&ldquo;I spent an entire afternoon trying to figure out why we migrated from Postgres to Snowflake. The answer was in a meeting recording nobody tagged.&rdquo;</p>
            <p className="text-xs text-[var(--ink-muted)] mt-1">— Senior Engineer, 300-person company</p>
          </div>
          <div className="rounded-card border border-[#7c3aed]/20 bg-[#ede9fe]/20 p-4">
            <p className="text-xs italic text-[var(--ink-muted)]">&ldquo;Every new hire asks me the same 20 questions. I wish I could just point them to a system that has all the answers with context.&rdquo;</p>
            <p className="text-xs text-[var(--ink-muted)] mt-1">— Tech Lead, onboarding mentor</p>
          </div>
        </div>
      </Sec>

      {/* 6 PRODUCT VISION */}
      <Sec>
        <SH num={6} title="Product Vision" />
        <div className="rounded-card border-2 border-[#7c3aed]/30 bg-gradient-to-br from-[var(--paper)] to-[#ede9fe]/20 p-6 text-center mb-6">
          <p className="font-display text-sm sm:text-base font-semibold text-[var(--ink)] leading-relaxed">
            An AI-powered knowledge graph that makes company knowledge
            <br /><span style={{ color: ACCENT }}>searchable</span>, <span style={{ color: ACCENT }}>connected</span>, and <span style={{ color: ACCENT }}>reusable</span> —
            <br />so employees spend time building, not searching.
          </p>
        </div>
        <KnowledgeGraphDemo />
      </Sec>

      {/* 7 FEATURES */}
      <Sec>
        <SH num={7} title="Core Product Features" />
        <FeatureTabs />
      </Sec>

      {/* 8 MVP */}
      <Sec>
        <SH num={8} title="MVP Definition" />
        <MvpScope />
      </Sec>

      {/* 9 EXAMPLE USER FLOW */}
      <Sec>
        <SH num={9} title="Example User Flow" />
        <UserFlowDiagram />
      </Sec>

      {/* 10 ARCHITECTURE */}
      <Sec>
        <SH num={10} title="AI System Architecture" />
        <ArchDiagram />
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3 mt-8">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { cat: "Graph DB", tool: "Neo4j" },
            { cat: "LLM Orchestration", tool: "LangChain" },
            { cat: "Embeddings", tool: "OpenAI / Sentence-BERT" },
            { cat: "Vector Store", tool: "Pinecone / Weaviate" },
            { cat: "Integrations", tool: "Notion + Slack API" },
            { cat: "Backend", tool: "FastAPI (Python)" },
            { cat: "Frontend", tool: "Next.js + Tailwind" },
            { cat: "Hosting", tool: "AWS / GCP" },
          ].map((t) => (
            <div key={t.cat} className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-2.5 shadow-soft">
              <div className="text-xs font-bold uppercase" style={{ color: ACCENT }}>{t.cat}</div>
              <div className="text-xs text-[var(--ink)] mt-0.5">{t.tool}</div>
            </div>
          ))}
        </div>
      </Sec>

      {/* 11 DATA STRATEGY */}
      <Sec>
        <SH num={11} title="Data Strategy" />
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-xs font-bold text-[var(--ink)] mb-2">Ingestion Sources</h3>
            <div className="space-y-1.5">
              {[
                { src: "Notion", type: "Documents, wikis, databases", icon: "📄" },
                { src: "Slack", type: "Conversations, threads, announcements", icon: "💬" },
                { src: "GitHub", type: "READMEs, PRs, issues, code comments", icon: "🔧" },
                { src: "Meeting transcripts", type: "Otter.ai / Google Meet / Zoom", icon: "🎤" },
                { src: "Email (V2)", type: "Decision threads, announcements", icon: "📧" },
              ].map((d) => (
                <div key={d.src} className="flex gap-2 items-center text-xs rounded-card border border-[var(--border)] bg-[var(--paper)] px-3 py-2">
                  <span>{d.icon}</span>
                  <span className="font-medium text-[var(--ink)]">{d.src}</span>
                  <span className="text-[var(--ink-muted)]">— {d.type}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-[var(--ink)] mb-2">Entity Types Extracted</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Person", "Project", "Document", "Decision", "Meeting", "Code Repo", "Product", "Team", "Technology", "Concept"].map((e) => (
                <span key={e} className="rounded-full border border-[#7c3aed]/30 bg-[#ede9fe]/30 px-2.5 py-1 text-xs font-medium" style={{ color: ACCENT }}>{e}</span>
              ))}
            </div>
            <h3 className="text-xs font-bold text-[var(--ink)] mb-2">Relationship Types</h3>
            <div className="flex flex-wrap gap-2">
              {["authored", "worked_on", "decided", "related_to", "depends_on", "presented_at", "expert_in", "mentioned_in", "superseded_by"].map((r) => (
                <span key={r} className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-2.5 py-1 text-xs text-[var(--ink-muted)]">{r}</span>
              ))}
            </div>
          </div>
        </div>
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">Privacy & Compliance</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { label: "Access Control", desc: "Respects source permissions — if you can't see it in Notion, you can't see it in the graph" },
            { label: "PII Handling", desc: "Personal data flagged and restricted. No ingestion of private DMs without consent" },
            { label: "Data Retention", desc: "Configurable retention policies. Deleted source content is purged from graph" },
            { label: "Audit Trail", desc: "Full log of what was ingested, when, and from where. Admin visibility into graph contents" },
          ].map((c) => (
            <div key={c.label} className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-2 flex gap-2">
              <span className="text-xs font-bold text-white rounded px-1.5 py-0.5 shrink-0" style={{ background: ACCENT }}>{c.label}</span>
              <span className="text-xs text-[var(--ink-muted)]">{c.desc}</span>
            </div>
          ))}
        </div>
      </Sec>

      {/* 12 METRICS */}
      <Sec>
        <SH num={12} title="Product & AI Metrics" />
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">Product Metrics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <MCard value="30%↓" label="Info search time" sub="From 1.8hrs → 1.3hrs/day" color={ACCENT} />
          <MCard value="85%+" label="Search success rate" sub="Query returns useful result" color="#10b981" />
          <MCard value="40%↓" label="Onboarding time" sub="New hire ramp to productive" color="#f59e0b" />
          <MCard value="60%↓" label="Repeat questions" sub="Same question asked to humans" color="#0ea5e9" />
          <MCard value="NPS 50+" label="Employee satisfaction" sub="With knowledge discovery" color="#ec4899" />
          <MCard value="3x" label="Knowledge reuse" sub="Docs discovered via graph" color="#8b5cf6" />
        </div>
        <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">AI Metrics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <MCard value="P>0.85" label="Entity extraction" sub="Precision of extracted entities" color={ACCENT} />
          <MCard value="P>0.75" label="Relationship extraction" sub="Correct links between entities" color="#10b981" />
          <MCard value=">80%" label="Answer relevance" sub="User-rated useful answers" color="#f59e0b" />
          <MCard value="<5%" label="Hallucination rate" sub="Answers without source support" color="#ef4444" />
          <MCard value=">90%" label="Source attribution" sub="Answers cite correct sources" color="#0ea5e9" />
          <MCard value="<2s" label="Query latency" sub="Time to return results" color="#6b7280" />
        </div>
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-4">
          <h4 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">Guardrail Metrics</h4>
          <div className="flex flex-wrap gap-4 text-xs text-[var(--ink-muted)]">
            <span>• No private data exposed in search</span>
            <span>• Ingestion freshness &lt; 1 hour</span>
            <span>• Zero unattributed answers</span>
          </div>
        </div>
      </Sec>

      {/* 13 EXPERIMENTATION */}
      <Sec>
        <SH num={13} title="Experimentation Plan" />
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { id: "E1", title: "Knowledge Search vs. Status Quo", hypothesis: "Employees find answers 50%+ faster using the graph vs. current tools (Slack search, Notion, asking people)", design: "Within-subjects · 15 employees · 20 standardized knowledge queries · time + success tracking", metrics: "Time to answer, success rate, satisfaction" },
            { id: "E2", title: "Onboarding Acceleration", hypothesis: "New hires with graph access reach productivity milestones 30%+ faster", design: "Between-groups · 2 cohorts of new hires (with/without) · 90-day tracking", metrics: "Time to first PR, time to first solo project, manager-rated readiness" },
            { id: "E3", title: "Source Citation Trust", hypothesis: "Answers with source citations are trusted 2x more than answers without", design: "Between-subjects · Group A (with sources) vs B (without) · 20 employees", metrics: "Trust rating, action taken on answer, follow-up queries" },
            { id: "E4", title: "Graph vs. Flat Search", hypothesis: "Graph traversal surfaces more relevant context than keyword search for multi-hop questions", design: "Offline · 50 multi-hop queries · expert-judged relevance", metrics: "NDCG@5, recall of relevant entities, completeness rating" },
          ].map((e) => (
            <div key={e.id} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 shadow-soft">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-white rounded px-1.5 py-0.5" style={{ background: ACCENT }}>{e.id}</span>
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
      </Sec>

      {/* 14 RISKS */}
      <Sec>
        <SH num={14} title="Risks & Mitigation" />
        <RiskSection />
      </Sec>

      {/* 15 ROADMAP */}
      <Sec>
        <SH num={15} title="Product Roadmap" />
        <Roadmap />
      </Sec>

      {/* 16 IMPACT */}
      <Sec>
        <SH num={16} title="Expected Business Impact" />
        <div className="space-y-4">
          {[
            { label: "Info search time/day", before: "1.8 hrs", after: "1.3 hrs", pctB: 75, pctA: 50, imp: "30% reduction" },
            { label: "Onboarding ramp time", before: "3 months", after: "~6 weeks", pctB: 80, pctA: 45, imp: "~40% faster" },
            { label: "Repeat context questions", before: "5-10/week per senior", after: "2-3/week", pctB: 70, pctA: 25, imp: "60% reduction" },
            { label: "Decision traceability", before: "~10% documented", after: "80%+ captured", pctB: 10, pctA: 80, imp: "8x improvement" },
            { label: "Knowledge loss (attrition)", before: "High risk", after: "Mitigated", pctB: 85, pctA: 20, imp: "Bus factor reduced" },
          ].map((row) => (
            <div key={row.label} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-3 shadow-soft">
              <div className="text-xs font-bold text-[var(--ink)] mb-2">{row.label}</div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs text-[var(--ink-muted)] w-16 shrink-0">Before</span>
                <div className="flex-1 h-4 bg-[var(--paper)] border border-[var(--border)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-red-400/60" style={{ width: `${row.pctB}%` }} />
                </div>
                <span className="text-xs font-medium text-[var(--ink-muted)] w-20 text-right">{row.before}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[var(--ink-muted)] w-16 shrink-0">After</span>
                <div className="flex-1 h-4 bg-[var(--paper)] border border-[var(--border)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-green-500/70" style={{ width: `${row.pctA}%` }} />
                </div>
                <span className="text-xs font-medium text-green-600 w-20 text-right">{row.after}</span>
              </div>
              <div className="text-xs font-medium mt-1 text-right" style={{ color: ACCENT }}>{row.imp}</div>
            </div>
          ))}
        </div>
      </Sec>

      {/* 17 REFLECTION */}
      <Sec className="border-b-0">
        <SH num={17} title="Reflection as an AI Product Manager" />
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { title: "Graph over flat search", desc: "Knowledge isn't a list of documents — it's a web of relationships. A graph database captures the 'who decided what, when, and why' that keyword search misses." },
            { title: "Source citations are non-negotiable", desc: "LLMs hallucinate. In a knowledge system, a wrong answer is worse than no answer. Every response must link to verifiable sources." },
            { title: "Respect existing permissions", desc: "The fastest way to kill adoption is exposing something someone shouldn't see. Access control from source systems must propagate to the graph." },
            { title: "Passive ingestion > active contribution", desc: "Systems that require employees to manually add knowledge fail. Auto-ingesting from tools people already use is the only path to comprehensive coverage." },
          ].map((d) => (
            <div key={d.title} className="rounded-card border border-[#7c3aed]/20 bg-[#ede9fe]/10 p-4">
              <h4 className="text-xs font-bold mb-1" style={{ color: ACCENT }}>{d.title}</h4>
              <p className="text-xs text-[var(--ink-muted)] leading-snug">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft">
          <h3 className="text-xs font-bold text-[var(--ink)] mb-3">Lessons Learned</h3>
          <ol className="space-y-2">
            {[
              "The hardest problem isn't AI — it's data quality. Garbage in, garbage out. Ingestion pipelines need robust cleaning, deduplication, and staleness detection.",
              "Adoption requires trust, and trust requires transparency. Showing sources, confidence scores, and 'I don't know' responses builds more trust than always-confident answers.",
              "Start with one data source, not four. MVP should nail Notion ingestion before adding Slack, GitHub, and meetings. Depth beats breadth.",
              "Enterprise sales require security review. Building with access control, audit logs, and SOC 2 readiness from day one saves months of retrofitting.",
              "Knowledge graphs compound in value. The first 100 nodes are marginally useful. At 10,000 nodes, the relationship discovery becomes magical. Communicate this to stakeholders.",
            ].map((l, i) => (
              <li key={i} className="flex gap-2 text-xs text-[var(--ink-muted)] leading-snug">
                <span className="font-bold shrink-0" style={{ color: ACCENT }}>{i + 1}.</span>
                <span>{l}</span>
              </li>
            ))}
          </ol>
        </div>
      </Sec>

      {/* TOOLS */}
      <Sec className="border-b-0 bg-gradient-to-b from-[var(--paper)] to-[#ede9fe]/10">
        <h2 className="font-display text-base font-bold text-[var(--ink)] mb-4">PM Tools & Artifacts Used</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {[
            { tool: "Notion", use: "PRD, Personas, Specs" },
            { tool: "Figma", use: "Wireframes, UI Mockups" },
            { tool: "Miro", use: "System Maps, User Flows" },
            { tool: "Linear", use: "Sprint Planning" },
            { tool: "Dovetail", use: "User Research" },
            { tool: "Neo4j Browser", use: "Graph Exploration" },
            { tool: "Jupyter", use: "NLP Prototyping" },
            { tool: "Postman", use: "API Testing" },
            { tool: "Amplitude", use: "Product Analytics" },
            { tool: "Loom", use: "Stakeholder Updates" },
          ].map((t) => (
            <div key={t.tool} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-2.5 text-center shadow-soft">
              <div className="text-xs font-bold text-[var(--ink)]">{t.tool}</div>
              <div className="text-xs text-[var(--ink-muted)] mt-0.5">{t.use}</div>
            </div>
          ))}
        </div>
      </Sec>
    </>
  );
}

/* ────────── SUB-COMPONENTS ────────── */

function PersonaCard({ name, role, avatar, color, goals, frustrations, quote, scenario }: {
  name: string; role: string; avatar: string; color: string;
  goals: string[]; frustrations: string[]; quote: string; scenario?: string;
}) {
  return (
    <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] shadow-soft overflow-hidden">
      <div className="p-4 flex items-center gap-3 border-b border-[var(--border)]" style={{ background: `${color}10` }}>
        <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: color }}>{avatar}</div>
        <div>
          <div className="text-xs font-bold text-[var(--ink)]">{name}</div>
          <div className="text-xs text-[var(--ink-muted)]">{role}</div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Goals</div>
          {goals.map((g) => (<div key={g} className="text-xs text-[var(--ink-muted)] flex gap-1.5"><span className="text-green-500">✓</span>{g}</div>))}
        </div>
        <div>
          <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Frustrations</div>
          {frustrations.map((f) => (<div key={f} className="text-xs text-[var(--ink-muted)] flex gap-1.5"><span className="text-red-400">✗</span>{f}</div>))}
        </div>
        <div className="rounded-card bg-[var(--paper)] border border-[var(--border)] p-3">
          <p className="text-xs italic text-[var(--ink-muted)]">&ldquo;{quote}&rdquo;</p>
        </div>
        {scenario && (
          <div className="rounded-card bg-[#ede9fe]/20 border border-[#7c3aed]/20 p-3">
            <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: ACCENT }}>Scenario</div>
            <p className="text-xs text-[var(--ink-muted)] leading-snug">{scenario}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function KnowledgeFragmentation() {
  const sources = [
    { name: "Slack", pct: 35, icon: "💬", color: "#e01e5a" },
    { name: "Notion", pct: 25, icon: "📄", color: "#000000" },
    { name: "Email", pct: 15, icon: "📧", color: "#4285f4" },
    { name: "Meetings", pct: 12, icon: "🎤", color: "#10b981" },
    { name: "Code/GitHub", pct: 8, icon: "🔧", color: "#6e5494" },
    { name: "Wikis/Other", pct: 5, icon: "📚", color: "#6b7280" },
  ];
  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">Where Company Knowledge Lives (Fragmented)</h3>
      <div className="flex h-8 rounded-full overflow-hidden border border-[var(--border)] mb-3">
        {sources.map((s) => (
          <div key={s.name} className="flex items-center justify-center text-xs font-bold text-white" style={{ width: `${s.pct}%`, background: s.color }} title={`${s.name}: ${s.pct}%`}>
            {s.pct >= 10 ? `${s.icon} ${s.pct}%` : ""}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {sources.map((s) => (
          <div key={s.name} className="flex items-center gap-1.5 text-xs text-[var(--ink-muted)]">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: s.color }} />
            {s.icon} {s.name} ({s.pct}%)
          </div>
        ))}
      </div>
    </div>
  );
}

function KnowledgeGraphDemo() {
  const nodes = [
    { id: "alice", label: "Alice", type: "Person", x: 10, y: 30 },
    { id: "bob", label: "Bob", type: "Person", x: 10, y: 70 },
    { id: "proj", label: "AI Search", type: "Project", x: 40, y: 20 },
    { id: "doc", label: "Architecture Doc", type: "Document", x: 40, y: 55 },
    { id: "dec", label: "Use Vector DB", type: "Decision", x: 70, y: 35 },
    { id: "meet", label: "Sprint Review", type: "Meeting", x: 70, y: 70 },
    { id: "feat", label: "Semantic Search", type: "Feature", x: 95, y: 50 },
  ];
  const edges = [
    { from: "alice", to: "proj", label: "leads" },
    { from: "bob", to: "proj", label: "worked_on" },
    { from: "alice", to: "doc", label: "authored" },
    { from: "doc", to: "dec", label: "contains" },
    { from: "dec", to: "feat", label: "enables" },
    { from: "meet", to: "dec", label: "discussed" },
    { from: "bob", to: "meet", label: "attended" },
  ];
  const typeColors: Record<string, string> = {
    Person: "#7c3aed", Project: "#0ea5e9", Document: "#10b981", Decision: "#f59e0b", Meeting: "#ec4899", Feature: "#ef4444",
  };
  return (
    <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 shadow-soft">
      <h3 className="text-xs font-bold text-[var(--ink)] mb-3">Example Knowledge Graph</h3>
      <div className="relative h-[220px] sm:h-[260px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {edges.map((e) => {
            const from = nodes.find((n) => n.id === e.from)!;
            const to = nodes.find((n) => n.id === e.to)!;
            const mx = (from.x + to.x) / 2;
            const my = (from.y + to.y) / 2;
            return (
              <g key={`${e.from}-${e.to}`}>
                <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="var(--border-strong, #94a3b8)" strokeWidth="0.3" />
                <text x={mx} y={my - 1.5} textAnchor="middle" fill="var(--ink-muted, #64748b)" fontSize="2.5" fontWeight="500">{e.label}</text>
              </g>
            );
          })}
          {nodes.map((n) => (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r="4" fill={typeColors[n.type]} opacity="0.15" />
              <circle cx={n.x} cy={n.y} r="2.5" fill={typeColors[n.type]} />
              <text x={n.x} y={n.y + 7} textAnchor="middle" fill="var(--ink, #2A1520)" fontSize="2.8" fontWeight="600">{n.label}</text>
              <text x={n.x} y={n.y + 10} textAnchor="middle" fill={typeColors[n.type]} fontSize="2" fontWeight="500">{n.type}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-2">
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1.5 text-xs text-[var(--ink-muted)]">
            <span className="h-2 w-2 rounded-full" style={{ background: color }} /> {type}
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureTabs() {
  const [active, setActive] = useState(0);
  const features = [
    { icon: "📥", title: "Knowledge Ingestion", value: "Auto-ingest from Notion, Slack, GitHub, and meeting transcripts. Zero manual input required.", ai: "LangChain document loaders + custom parsers per source. Incremental sync via webhooks and polling. Deduplication and staleness detection.", risk: "Rate limits on APIs; noisy data from Slack. Mitigation: rate-limit-aware scheduling; relevance filtering (skip bot messages, reactions-only)." },
    { icon: "🔗", title: "Graph Construction", value: "Extract entities (people, projects, decisions) and relationships. Build a connected knowledge graph automatically.", ai: "LLM-based NER and relationship extraction (GPT-4 / fine-tuned model). Entity resolution (merge 'Alice', 'Alice Smith', '@alice'). Neo4j Cypher for graph storage.", risk: "Entity resolution errors (merge wrong people). Mitigation: confidence thresholds; admin review queue for low-confidence merges." },
    { icon: "🔍", title: "Semantic Search", value: "Ask natural language questions. Get answers with source citations and related graph context.", ai: "RAG pipeline: query → embedding → vector retrieval → graph traversal for related entities → LLM synthesis with source attribution. LangChain orchestration.", risk: "Hallucination — LLM generates plausible but wrong answers. Mitigation: mandatory source citations; confidence scores; 'I don't know' fallback." },
    { icon: "📋", title: "Decision Tracking", value: "Automatically capture and link organizational decisions with their context, stakeholders, and outcomes.", ai: "Decision detection via LLM classification on ingested content. Links decision to meeting, document, project, and people involved. Timeline view.", risk: "False positives (classifying discussion as decision). Mitigation: human confirmation for high-stakes decisions; 'proposed' vs 'confirmed' states." },
    { icon: "🧭", title: "Knowledge Discovery", value: "Surface experts, related projects, knowledge gaps, and trending topics across the organization.", ai: "Graph analytics: PageRank for expertise scoring, community detection for topic clusters, gap analysis for undocumented areas.", risk: "Gaming (people inflate their graph presence). Mitigation: expertise scored on content quality, not volume; no public leaderboards." },
  ];
  const f = features[active];
  return (
    <div>
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {features.map((feat, i) => (
          <button key={feat.title} onClick={() => setActive(i)}
            className={`shrink-0 rounded-card px-3 py-2 text-xs font-medium transition-all ${i === active ? "text-white shadow-soft" : "border border-[var(--border)] bg-[var(--paper-elevated)] text-[var(--ink-muted)] hover:border-[#7c3aed]/50"}`}
            style={i === active ? { background: ACCENT } : undefined}
          >
            {feat.icon} {feat.title}
          </button>
        ))}
      </div>
      <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft">
        <h3 className="text-sm font-bold text-[var(--ink)] mb-3">{f.icon} {f.title}</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div><div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">User Value</div><p className="text-xs text-[var(--ink-muted)] leading-snug">{f.value}</p></div>
          <div><div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: ACCENT }}>How AI Is Used</div><p className="text-xs text-[var(--ink-muted)] leading-snug">{f.ai}</p></div>
          <div><div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Risks</div><p className="text-xs text-[var(--ink-muted)] leading-snug">{f.risk}</p></div>
        </div>
      </div>
    </div>
  );
}

function MvpScope() {
  const items = [
    { feature: "Notion document ingestion", in_: true, p: "P0" },
    { feature: "Entity extraction (people, projects, decisions)", in_: true, p: "P0" },
    { feature: "Relationship extraction and graph construction", in_: true, p: "P0" },
    { feature: "Semantic search with source citations", in_: true, p: "P0" },
    { feature: "Basic graph visualization", in_: true, p: "P1" },
    { feature: "Recruiter feedback / thumbs up-down", in_: true, p: "P1" },
    { feature: "Slack ingestion", in_: false, p: "Phase 2" },
    { feature: "GitHub ingestion", in_: false, p: "Phase 2" },
    { feature: "Meeting transcript ingestion", in_: false, p: "Phase 3" },
    { feature: "Expertise detection & discovery", in_: false, p: "Phase 3" },
    { feature: "Decision intelligence / reasoning", in_: false, p: "Phase 4" },
  ];
  return (
    <div>
      <div className="space-y-1.5 mb-4">
        {items.map((item) => (
          <div key={item.feature} className={`flex items-center gap-3 rounded-card px-3 py-2 text-xs transition-all ${item.in_ ? "border border-green-200 bg-green-50" : "border border-[var(--border)] bg-[var(--paper)] opacity-60"}`}>
            <span className={`text-sm ${item.in_ ? "text-green-600" : "text-[var(--ink-muted)]"}`}>{item.in_ ? "✓" : "—"}</span>
            <span className={`flex-1 ${item.in_ ? "text-[var(--ink)]" : "text-[var(--ink-muted)] line-through"}`}>{item.feature}</span>
            <span className={`shrink-0 rounded px-1.5 py-0.5 text-xs font-bold ${item.in_ ? "bg-green-600 text-white" : "bg-[var(--paper-elevated)] text-[var(--ink-muted)] border border-[var(--border)]"}`}>{item.p}</span>
          </div>
        ))}
      </div>
      <div className="rounded-card border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
        <strong>MVP rationale:</strong> Notion is the single richest knowledge source in most mid-size companies. Nailing one ingestion source deeply (with quality extraction and search) validates the core value prop before adding complexity from Slack, GitHub, and meetings.
      </div>
    </div>
  );
}

function UserFlowDiagram() {
  const steps = [
    { icon: "💬", label: "Employee asks", detail: "\"Who worked on the recommendation system?\"", color: "#7c3aed" },
    { icon: "🔍", label: "Query processing", detail: "Intent detection → embedding → vector + graph search", color: "#0ea5e9" },
    { icon: "🔗", label: "Graph traversal", detail: "recommendation_system → worked_on → [Alice, Bob, Carla]", color: "#10b981" },
    { icon: "📄", label: "Context retrieval", detail: "Related: architecture doc, sprint review, 3 PRs, 1 decision", color: "#f59e0b" },
    { icon: "✨", label: "LLM synthesis", detail: "Generates answer with source citations and confidence", color: "#ec4899" },
    { icon: "📋", label: "Result returned", detail: "Engineers list + docs + decisions + related projects", color: "#7c3aed" },
  ];
  return (
    <div className="space-y-0">
      {steps.map((s, i) => (
        <div key={s.label} className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="h-9 w-9 rounded-full flex items-center justify-center text-sm shrink-0 border-2" style={{ borderColor: s.color, background: `${s.color}15` }}>{s.icon}</div>
            {i < steps.length - 1 && <div className="w-0.5 flex-1 min-h-[16px]" style={{ background: `${s.color}30` }} />}
          </div>
          <div className="pb-4 flex-1">
            <div className="text-xs font-bold text-[var(--ink)]">{s.label}</div>
            <div className="text-xs text-[var(--ink-muted)]">{s.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ArchDiagram() {
  const layers = [
    { label: "Data Sources", color: "#7c3aed", items: ["Notion API", "Slack API", "GitHub API", "Meeting Transcripts"] },
    { label: "Ingestion Layer", color: "#0ea5e9", items: ["LangChain Loaders", "Incremental Sync", "Dedup & Clean"] },
    { label: "LLM Extraction", color: "#10b981", items: ["Entity NER", "Relationship Extraction", "Summarization"] },
    { label: "Storage", color: "#f59e0b", items: ["Neo4j (Graph)", "Pinecone (Vectors)", "PostgreSQL (Metadata)"] },
    { label: "Search Layer", color: "#ec4899", items: ["Semantic Search", "Graph Traversal", "RAG Pipeline"] },
    { label: "Application", color: "#7c3aed", items: ["Search UI", "Graph Explorer", "Decision Timeline"] },
  ];
  return (
    <div className="space-y-2">
      {layers.map((layer, i) => (
        <div key={layer.label}>
          <div className="flex gap-3 items-stretch">
            <div className="w-28 sm:w-36 shrink-0 rounded-card border-2 p-2 flex items-center justify-center text-center" style={{ borderColor: layer.color + "40", background: layer.color + "10" }}>
              <span className="text-xs sm:text-xs font-bold" style={{ color: layer.color }}>{layer.label}</span>
            </div>
            <div className="flex-1 flex flex-wrap gap-1.5 items-center">
              {layer.items.map((item) => (
                <span key={item} className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] px-2 py-1 text-xs sm:text-xs text-[var(--ink)] shadow-soft">{item}</span>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center py-1">
              <svg className="h-4 w-4 text-[var(--ink-muted)]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function RiskSection() {
  const risks = [
    { risk: "Privacy — sensitive info exposure", severity: "Critical", likelihood: "High", color: "#ef4444", mitigation: "Source-level access control; no private DMs; admin audit tools; PII detection and flagging" },
    { risk: "LLM hallucinations", severity: "High", likelihood: "High", color: "#ef4444", mitigation: "Mandatory source citations; confidence scores; 'I don't know' fallback; RAG over generation" },
    { risk: "Data quality — noisy / stale", severity: "High", likelihood: "High", color: "#f59e0b", mitigation: "Relevance filtering; staleness detection; freshness scoring; deduplication pipeline" },
    { risk: "Low adoption", severity: "High", likelihood: "Med", color: "#f59e0b", mitigation: "Slack bot interface (meet users where they are); onboarding integration; champion program" },
    { risk: "Entity resolution errors", severity: "Med", likelihood: "Med", color: "#3b82f6", mitigation: "Confidence thresholds; admin review queue; user correction feedback" },
    { risk: "Scaling (large orgs)", severity: "Med", likelihood: "Low", color: "#6b7280", mitigation: "Incremental ingestion; graph partitioning; vector index optimization" },
  ];
  return (
    <div className="space-y-2">
      {risks.map((r) => (
        <div key={r.risk} className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-3 shadow-soft">
          <div className="flex items-center gap-2 sm:w-60 shrink-0">
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

function Roadmap() {
  const phases = [
    { phase: "Phase 1", title: "Knowledge Ingestion + Graph", weeks: "Wk 1-8", color: "#7c3aed", items: ["Notion API integration", "Entity & relationship extraction", "Neo4j graph construction", "Basic semantic search", "Source citations", "Pilot with 1 team"] },
    { phase: "Phase 2", title: "AI Search Assistant", weeks: "Wk 9-16", color: "#0ea5e9", items: ["Slack ingestion", "GitHub ingestion", "Slack bot interface", "Natural language Q&A", "Graph visualization", "Run experiments E1 & E4"] },
    { phase: "Phase 3", title: "Expertise Detection", weeks: "Wk 17-24", color: "#10b981", items: ["Meeting transcript ingestion", "Expert scoring (PageRank)", "Topic clustering", "Knowledge gap detection", "\"Who knows about X?\" queries", "Run experiment E2"] },
    { phase: "Phase 4", title: "Decision Intelligence", weeks: "Wk 25-34", color: "#f59e0b", items: ["Decision auto-detection", "Decision timeline view", "Impact tracing (decision → outcome)", "Cross-team knowledge sharing", "Analytics dashboard", "SOC 2 readiness"] },
  ];
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-[var(--border)] hidden sm:block" />
      <div className="space-y-4">
        {phases.map((p) => (
          <div key={p.phase} className="flex gap-4">
            <div className="hidden sm:flex flex-col items-center shrink-0">
              <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white z-10" style={{ background: p.color }}>{p.phase.replace("Phase ", "")}</div>
            </div>
            <div className="flex-1 rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-4 shadow-soft" style={{ borderLeftColor: p.color, borderLeftWidth: 3 }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="sm:hidden text-xs font-bold text-white rounded px-1.5 py-0.5" style={{ background: p.color }}>{p.phase}</span>
                <span className="text-xs font-bold text-[var(--ink)]">{p.title}</span>
                <span className="text-xs text-[var(--ink-muted)]">{p.weeks}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.items.map((item) => (
                  <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-2 py-0.5 text-xs text-[var(--ink-muted)]">{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
