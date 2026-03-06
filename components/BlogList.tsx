"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import type { BlogPost } from "@/lib/blog-utils";
import { formatBlogDate } from "@/lib/blog-utils";

function CoverImage({ post }: { post: BlogPost }) {
  if (!post.image) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-[var(--ink-muted)] text-4xl font-display font-semibold opacity-30">
        {post.title.charAt(0)}
      </div>
    );
  }
  const isExternal = post.image.startsWith("http");
  if (isExternal) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={post.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
      />
    );
  }
  return (
    <Image
      src={post.image}
      alt=""
      fill
      className="object-cover transition-transform group-hover:scale-[1.02]"
      sizes="(max-width: 640px) 100vw, 50vw"
    />
  );
}

const POSTS_PER_PAGE = 9;

type Props = { posts: BlogPost[] };

function getAllTags(posts: BlogPost[]): string[] {
  const set = new Set<string>();
  posts.forEach((p) => (p.tags ?? []).forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function BlogList({ posts }: Props) {
  const [tagFilter, setTagFilter] = useState<string>("all");
  const [page, setPage] = useState(1);
  const tags = useMemo(() => getAllTags(posts), [posts]);

  const filtered = useMemo(() => {
    if (tagFilter === "all") return posts;
    return posts.filter((p) => (p.tags ?? []).includes(tagFilter));
  }, [posts, tagFilter]);

  useEffect(() => setPage(1), [tagFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filtered.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, page]);

  const topicCount = tags.length;

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
        Blog
      </h1>
      <p className="text-[var(--ink-muted)] mb-8 text-lg">
        ML insights, research notes, and tutorials.
      </p>

      {/* Stats */}
      <div className="mb-8 flex flex-wrap gap-6 text-sm">
        <span className="font-medium text-[var(--ink)]">
          {posts.length} {posts.length === 1 ? "Post" : "Posts"}
        </span>
        {topicCount > 0 && (
          <span className="text-[var(--ink-muted)]">
            {topicCount} {topicCount === 1 ? "Topic" : "Topics"}
          </span>
        )}
      </div>

      {/* Sort + Tag filter */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <span className="text-sm text-[var(--ink-muted)]">Sort: Date</span>
        <span className="text-sm text-[var(--ink-muted)]">Tag:</span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setTagFilter("all")}
            className={`rounded-button px-3 py-1.5 text-sm font-medium transition-colors ${
              tagFilter === "all"
                ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                : "border border-[var(--border)] bg-[var(--paper-elevated)] text-[var(--ink-muted)] hover:text-[var(--accent)]"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagFilter(tag)}
              className={`rounded-button px-3 py-1.5 text-sm font-medium transition-colors ${
                tagFilter === tag
                  ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "border border-[var(--border)] bg-[var(--paper-elevated)] text-[var(--ink-muted)] hover:text-[var(--accent)]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Card grid */}
      <ul className="grid gap-6 sm:grid-cols-2">
        {paginated.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] transition-colors hover:border-[var(--accent)]"
            >
              {/* Cover image or placeholder */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--paper)]">
                <CoverImage post={post} />
              </div>
              <div className="p-4">
                <h2 className="font-display font-semibold text-lg text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">
                  {formatBlogDate(post.date)}
                </p>
                {post.excerpt && (
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink)] line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-button bg-[var(--paper)] border border-[var(--border)] px-2 py-0.5 text-xs font-medium text-[var(--ink-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <div className="rounded-card border border-[var(--border)] bg-[var(--paper)] p-8 text-center text-[var(--ink-muted)]">
          {tagFilter === "all"
            ? "No posts yet. Add .md files in content/blog/ with frontmatter."
            : `No posts with tag "${tagFilter}".`}
        </div>
      ) : totalPages > 1 ? (
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-3 py-1.5 text-sm font-medium text-[var(--ink-muted)] disabled:opacity-50 hover:text-[var(--accent)]"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`rounded-button min-w-[2rem] px-2 py-1.5 text-sm font-medium ${
                p === page
                  ? "bg-[var(--accent)] text-white"
                  : "border border-[var(--border)] bg-[var(--paper-elevated)] text-[var(--ink-muted)] hover:text-[var(--accent)]"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-3 py-1.5 text-sm font-medium text-[var(--ink-muted)] disabled:opacity-50 hover:text-[var(--accent)]"
          >
            Next
          </button>
        </nav>
      ) : null}

      <p className="mt-10 text-sm text-[var(--ink-muted)]">
        <Link href="/" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
