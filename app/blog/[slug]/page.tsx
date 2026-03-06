import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <p className="mb-6 text-sm">
        <Link href="/blog" className="font-medium text-[var(--accent)] hover:underline">
          ← Blog
        </Link>
      </p>
      <article>
        <div className="mb-8 rounded-card bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/30 p-6 sm:p-8 border border-[var(--border)] shadow-soft">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-[var(--accent)]/90">
            {post.date}
            {post.tags && post.tags.length > 0 && (
              <> · {post.tags.join(", ")}</>
            )}
          </p>
        </div>
        <div className="prose max-w-none rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] p-6 shadow-soft">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
