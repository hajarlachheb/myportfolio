import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Articles, essays, and tutorials.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
        Blog
      </h1>
      <p className="text-ink-muted mb-8 text-lg">
        Articles, essays, and tutorials. Newest first.
      </p>

      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-kawaii border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft kawaii-card transition-all duration-200 hover:border-accent-soft hover:-translate-y-0.5"
            >
              <h2 className="font-display font-semibold text-lg text-[var(--ink)] transition-colors group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                {post.date}
                {post.tags && post.tags.length > 0 && (
                  <> · {post.tags.join(", ")}</>
                )}
              </p>
              {post.excerpt && (
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">
                  {post.excerpt}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <div className="rounded-kawaii border border-[var(--border)] bg-cream/50 p-8 text-center text-ink-muted">
          No posts yet. Add .md files in content/blog/ with frontmatter.
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
