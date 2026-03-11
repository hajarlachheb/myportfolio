import Link from "next/link";
import { cv } from "@/content/cv";
import { ProfileImage } from "@/components/ProfileImage";

const HERO_BULLETS = [
  "AI Engineer and PhD Candidate in AI, Privacy & Security",
  "NLP, transformers & reproducible ML pipelines",
  "PhD at UB, 3+ years building ML systems",
];

const OVERVIEW_CARDS = [
  {
    href: "/blog",
    icon: "📝",
    title: "Blog",
    description: "Case studies & deep dives",
    bullets: ["AI PM case studies", "Product thinking", "Ethics & fairness"],
  },
  {
    href: "/talks",
    icon: "🎤",
    title: "Talks",
    description: "Meetups and conferences",
    bullets: ["AI meetups", "Tech talks", "Conferences"],
  },
  {
    href: "/papers",
    icon: "📄",
    title: "Publications",
    description: "Academic research",
    bullets: ["Conference proceedings", "Peer-reviewed work"],
  },
  {
    href: "/projects",
    icon: "🛠",
    title: "Projects",
    description: "Code and applications",
    bullets: ["ML pipelines", "Open source", "Hackathons"],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      {/* Hero: profile + name, bullets, CTAs */}
      <section className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 rounded-card bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/30 p-6 sm:p-8 border border-[var(--border)] shadow-soft opacity-0 animate-fade-in">
        {/* Profile image placeholder */}
        <div className="shrink-0 opacity-0 animate-fade-in animation-delay-100">
          <div className="relative h-32 w-32 overflow-hidden rounded-card border-2 border-[var(--accent)] bg-[var(--paper-elevated)] shadow-soft sm:h-40 sm:w-40 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-md">
            <ProfileImage name={cv.name} />
          </div>
        </div>

        <div className="min-w-0 flex-1 opacity-0 animate-fade-in animation-delay-200">
          <h1 className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]">
            {cv.name}
            <span className="text-[var(--accent)] font-normal">, AI Engineer & PhD candidate</span>
          </h1>
          <ul className="mt-3 space-y-1">
            {HERO_BULLETS.map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--ink)]">
                <span className="shrink-0 font-medium text-[var(--accent)]" aria-hidden>·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {/* Social + Research + Download CV */}
          <div className="mt-6 flex flex-wrap items-center gap-3 opacity-0 animate-fade-in animation-delay-500">
            <a
              href={cv.links.find((l) => l.label === "LinkedIn")?.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-button border border-[var(--accent)]/30 bg-[var(--accent-soft)]/50 p-2 text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
              title="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://github.com/hajarlachheb"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-button border border-[var(--accent)]/30 bg-[var(--accent-soft)]/50 p-2 text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
              title="GitHub"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
            </a>
            <a href="https://www.researchgate.net/profile/Hajar-Lachheb" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--accent)] hover:underline">ResearchGate</a>
            <span className="text-[var(--accent)]/50">·</span>
            <a href="https://scholar.google.com/citations?user=wCReRtgAAAAJ" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--accent)] hover:underline">Google Scholar</a>
            <span className="text-[var(--accent)]/50">·</span>
            <a href="https://orcid.org/0009-0001-0001-5830" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--accent)] hover:underline">ORCID</a>
            <Link
              href="/cv"
              className="ml-auto inline-flex items-center gap-2 rounded-button bg-[var(--accent)] px-3 py-2 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-[var(--accent-dark)] hover:shadow-md hover:-translate-y-0.5"
            >
              Download CV
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview cards: icon, one line, bullets */}
      <section className="grid gap-4 sm:grid-cols-2">
        {OVERVIEW_CARDS.map((card, index) => (
          <Link
            key={card.href}
            href={card.href}
            className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft opacity-0 animate-fade-in transition-all duration-300 hover:border-[var(--accent)] hover:shadow-md hover:-translate-y-1"
            style={{ animationDelay: `${550 + index * 80}ms`, animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-base transition-transform duration-300 group-hover:scale-110" aria-hidden>{card.icon}</span>
              <h2 className="font-display text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {card.title}
              </h2>
            </div>
            <p className="mt-0.5 text-sm text-[var(--accent)]/90">
              {card.description}
            </p>
            <ul className="mt-2 space-y-0.5 text-sm text-[var(--ink)]">
              {card.bullets.map((b, i) => (
                <li key={i}><span className="text-[var(--accent)]">·</span> {b}</li>
              ))}
            </ul>
          </Link>
        ))}
      </section>
    </div>
  );
}
