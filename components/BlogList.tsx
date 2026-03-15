"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-utils";
import { formatBlogDate } from "@/lib/blog-utils";

function getAllTags(posts: BlogPost[]): string[] {
  const set = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const allTags = getAllTags(posts);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <div className="mb-10 rounded-card bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/30 p-6 sm:p-8 border border-[var(--border)] shadow-soft">
        <h1 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)] mb-2">
          Blog
        </h1>
        <p className="text-sm text-[var(--accent)]/90">
          Case studies, deep dives, and thoughts on AI product management.
        </p>
      </div>

      {allTags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeTag === null
                ? "bg-[var(--accent)] text-white"
                : "border border-[var(--border)] bg-[var(--paper)] text-[var(--ink-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                activeTag === tag
                  ? "bg-[var(--accent)] text-white"
                  : "border border-[var(--border)] bg-[var(--paper)] text-[var(--ink-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <ul className="space-y-5">
        {filtered.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-5 shadow-soft transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-md"
            >
              <h2 className="font-display text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h2>
              <p className="mt-1 text-xs text-[var(--ink-muted)]">
                {formatBlogDate(post.date)}
                {post.category && (
                  <span className="ml-2 rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-xs font-medium text-[var(--accent)]">
                    {post.category}
                  </span>
                )}
              </p>
              {post.excerpt && (
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)] line-clamp-2">
                  {post.excerpt}
                </p>
              )}
              {post.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-2 py-0.5 text-xs font-medium text-[var(--ink-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="text-sm text-[var(--ink-muted)] italic mt-4">
          No posts yet. Add .md files in content/blog/ with frontmatter.
        </p>
      )}

      <p className="mt-10 text-sm">
        <Link href="/" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
