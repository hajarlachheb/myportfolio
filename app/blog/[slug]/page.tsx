import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs, formatBlogDate } from "@/lib/blog";
import { Markdown } from "@/components/Markdown";

const DEDICATED_PAGES = new Set([
  "ai-knowledge-graph-company-km",
  "bias-aware-ai-resume-screening",
]);

export function generateStaticParams() {
  const slugs = getBlogSlugs().filter((slug) => !DEDICATED_PAGES.has(slug));
  if (slugs.length === 0) return [{ slug: "__placeholder" }];
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

type Props = { params: { slug: string } };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <header className="mb-8">
        <Link href="/blog" className="text-sm font-medium text-[var(--accent)] hover:underline">
          ← Blog
        </Link>
        <h1 className="mt-4 font-display text-xl font-bold tracking-tight text-[var(--ink)]">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          {formatBlogDate(post.date)}
          {post.category && (
            <span className="ml-2 rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
              {post.category}
            </span>
          )}
        </p>
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-2.5 py-0.5 text-xs font-medium text-[var(--ink-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <Markdown content={post.content} />
      <p className="mt-12 text-sm">
        <Link href="/blog" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to blog
        </Link>
      </p>
    </article>
  );
}
