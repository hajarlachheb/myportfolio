# Personal site — CV + Papers + Talks + Blog (+ Podcast later)

One site that works as your **CV** and **content hub**: papers, talks, blog, and later a podcast section.

## Structure

| Section   | Purpose                    | Content source                    |
|----------|----------------------------|-----------------------------------|
| **Home** | Short bio, links to CV & content | `content/cv.ts` (bio)             |
| **CV**   | Full resume                | `content/cv.ts` (single source)  |
| **Papers** | List + detail per paper | `content/papers.ts`              |
| **Blog** | Posts list + single post   | `content/blog/*.md` (frontmatter) |
| **Talks** | Public talks (meetups, conferences) | `content/talks.ts` |
| **Podcast** | Placeholder for later   | Add `content/podcast.ts` when ready |

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) (or the port in `package.json`).

**Local build (static export):**

```bash
npm run build
```

Output is in the `out/` folder. For local testing with basePath (e.g. `/myportfolio`), run `BASE_PATH=/myportfolio npm run build` then serve `out/` with a static server.

## Content

- **Profile photo (home page)**: Put your picture at **`public/profile.jpg`** (or rename to `profile.jpg` if you use PNG). If the file is missing, your initials are shown.
- **CV**: Edit `content/cv.ts`. Optionally add `public/cv.pdf` and set `pdfUrl: "/cv.pdf"` for a download link.
- **Papers**: Add entries to `content/papers.ts`. Optional: put PDFs in `public/papers/` and set `pdf: "/papers/your-file.pdf"`.
- **Projects**: Edit `content/projects.ts`. Each project can have `name`, `summary`, `tags`, `image` (e.g. `"/projects/my-app.png"` in `public/projects/`), `codeUrl`, `demoUrl`, `materials` (extra links), and `featured: true` for a "Featured" pill.
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

### GitHub Pages (recommended)

The project is set up for **static export** and **GitHub Actions** deployment:

1. **Push the repo to GitHub** (e.g. `https://github.com/yourusername/myportfolio`).
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. On every push to `main`, the workflow (`.github/workflows/deploy.yml`) will build and deploy the site.
5. The site will be available at `https://yourusername.github.io/myportfolio/` (replace `myportfolio` with your repo name).

For a **user/org site** (e.g. `username.github.io`), edit the workflow and set `BASE_PATH` to empty, or add a repo variable `BASE_PATH` = `` and use it in the workflow.

### Other hosts

- **Vercel**: Connect the repo; use Node server or switch to static export.
- **Netlify**: Connect the repo; build command `npm run build`, publish directory `out`.

## Tech

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Markdown with `gray-matter` for blog; `react-markdown` for rendering
- No backend: all content is static/build-time
