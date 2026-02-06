import Link from "next/link";

export const metadata = {
  title: "Podcast",
  description: "Podcast episodes (coming soon).",
};

export default function PodcastPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
        Podcast
      </h1>
      <p className="text-ink-muted mb-8 text-lg">
        Episode list and show notes will go here. When you're ready, add a
        content source (e.g.{" "}
        <code className="rounded-button bg-cream px-1.5 py-0.5 text-sm text-[var(--ink)]">
          content/podcast.ts
        </code>{" "}
        or Markdown per episode) and a simple list + detail page like Papers/Blog.
      </p>
      <div className="rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-8 text-center text-ink-muted shadow-soft kawaii-card">
        Coming soon
      </div>
      <p className="mt-10 text-sm text-ink-muted">
        <Link href="/" className="font-medium text-accent hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
