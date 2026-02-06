import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  category?: string;
  content: string;
};

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

export function getBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, slug), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: slug.replace(/\.md$/, ""),
        title: (data.title as string) ?? slug,
        date: (data.date as string) ?? "",
        excerpt: data.excerpt as string | undefined,
        tags: (data.tags as string[]) ?? [],
        category: data.category as string | undefined,
        content,
      };
    })
    .sort((a, b) => (b.date > a.date ? 1 : -1));
  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    excerpt: data.excerpt as string | undefined,
    tags: (data.tags as string[]) ?? [],
    category: data.category as string | undefined,
    content,
  };
}
