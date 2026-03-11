import { getBlogPosts } from "@/lib/blog";
import { BlogList } from "@/components/BlogList";

export const metadata = {
  title: "Blog",
  description: "Case studies, deep dives, and thoughts on AI product management.",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  return <BlogList posts={posts} />;
}
