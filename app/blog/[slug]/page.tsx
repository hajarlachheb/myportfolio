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
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6 sm:py-14">
      <p className="mb-6 text-sm text-ink-muted">
        <Link href="/blog" className="font-medium text-accent hover:underline">
          ← Blog
        </Link>
      </p>
      <article>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] mb-2">
          {post.title}
        </h1>
        <p className="mb-6 text-sm text-ink-muted">
          {post.date}
          {post.tags && post.tags.length > 0 && (
            <> · {post.tags.join(", ")}</>
          )}
        </p>
        <div className="prose max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
