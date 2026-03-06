import Link from "next/link";

export const metadata = {
  title: "Podcast",
  description: "Podcast episodes (coming soon).",
};

export default function PodcastPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <div className="mb-10 rounded-card bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/30 p-6 sm:p-8 border border-[var(--border)] shadow-soft">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
          Podcast
        </h1>
        <p className="text-[var(--accent)]/90 text-lg">
          Episode list and show notes will go here. Add a content source (e.g. content/podcast.ts or Markdown per episode) when ready.
        </p>
      </div>
      <div className="rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-8 text-center shadow-soft text-[var(--ink-muted)]">
        Coming soon
      </div>
      <p className="mt-10 text-sm">
        <Link href="/" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
