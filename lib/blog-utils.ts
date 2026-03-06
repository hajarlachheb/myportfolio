/**
 * Client-safe blog utilities (no Node.js APIs).
 * Use this in client components instead of lib/blog.ts.
 */

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  category?: string;
  image?: string;
  content: string;
};

/** Format YYYY-MM-DD as "Month YYYY" for display */
export function formatBlogDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
