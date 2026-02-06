# Personal site — CV + Papers + Blog (+ Podcast later)

One site that works as your **CV** and **content hub**: papers, blog, and later a podcast section.

## Structure

| Section   | Purpose                    | Content source                    |
|----------|----------------------------|-----------------------------------|
| **Home** | Short bio, links to CV & content | `content/cv.ts` (bio)             |
| **CV**   | Full resume                | `content/cv.ts` (single source)  |
| **Papers** | List + detail per paper | `content/papers.ts`              |
| **Blog** | Posts list + single post   | `content/blog/*.md` (frontmatter) |
| **Podcast** | Placeholder for later   | Add `content/podcast.ts` when ready |

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- **CV**: Edit `content/cv.ts`. Optionally add `public/cv.pdf` and set `pdfUrl: "/cv.pdf"` for a download link.
- **Papers**: Add entries to `content/papers.ts`. Optional: put PDFs in `public/papers/` and set `pdf: "/papers/your-file.pdf"`.
- **Blog**: Add `.md` files in `content/blog/` with frontmatter:
  ```yaml
  ---
  title: "Post title"
  date: "2025-02-06"
  excerpt: "Short summary (optional)"
  tags: ["tag1", "tag2"]
  category: "Optional category"
  ---
  ```
- **Podcast**: When ready, add a data file or markdown per episode and create list + `[slug]` pages like Papers/Blog.

## Deploy

- **Vercel**: Connect the repo; default Next.js build works.
- **Netlify**: Same; use `next build` and `next start` or static export if you add `output: 'export'` in `next.config.mjs`.

## Tech

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Markdown with `gray-matter` for blog; `react-markdown` for rendering
- No backend: all content is static/build-time
