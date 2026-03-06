import { getBlogPosts } from "@/lib/blog";
import { BlogList } from "@/components/BlogList";

export const metadata = {
  title: "Blog",
  description: "Articles, essays, and tutorials.",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  return <BlogList posts={posts} />;
}
