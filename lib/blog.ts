import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "./blog-utils";

export type { BlogPost } from "./blog-utils";
export { formatBlogDate } from "./blog-utils";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parseBlogFile(filePath: string): BlogPost {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = path.basename(filePath, ".md");
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    category: data.category ?? "General",
    content,
    coverImage: data.coverImage,
  };
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => parseBlogFile(path.join(BLOG_DIR, `${slug}.md`)))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parseBlogFile(filePath);
}

