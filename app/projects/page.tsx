import Link from "next/link";
import Image from "next/image";
import { getProjectsBySection, type Project } from "@/content/projects";

export const metadata = {
  title: "Projects",
  description: "Side projects, research, and things I build.",
};

function ProjectImage({ project }: { project: Project }) {
  if (!project.image) {
    return (
      <div className="flex aspect-video w-full items-center justify-center bg-[var(--paper)] text-[var(--ink-muted)] text-4xl font-display font-semibold">
        {project.name.charAt(0)}
      </div>
    );
  }
  const isExternal = project.image.startsWith("http");
  if (isExternal) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.image}
        alt=""
        className="aspect-video w-full object-cover"
      />
    );
  }
  return (
    <Image
      src={project.image}
      alt=""
      width={800}
      height={450}
      className="aspect-video w-full object-cover"
    />
  );
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <div className="mb-10 rounded-card bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/30 p-6 sm:p-8 border border-[var(--border)] shadow-soft">
        <h1 className="font-display text-lg font-semibold tracking-tight text-[var(--ink)] mb-2">
          Projects
        </h1>
        <p className="text-sm text-[var(--accent)]/90">
          Things I've built — from AI & data to community and hackathons.
        </p>
      </div>

      {Array.from(getProjectsBySection().entries()).map(([section, sectionProjects]) => {
        if (sectionProjects.length === 0) return null;
        return (
          <section key={section} className="mb-12">
            <h2 className="font-display text-sm font-semibold text-[var(--accent)] mb-4 uppercase tracking-wider">
              {section}
            </h2>
            <ul className="space-y-6">
              {sectionProjects.map((project) => (
                <li
                  key={project.name}
                  className="overflow-hidden rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] shadow-soft transition-all duration-300 hover:border-[var(--accent)]/50"
                >
                  {/* Image summary */}
                  <div className="relative overflow-hidden bg-[var(--paper)]">
                    <ProjectImage project={project} />
                    {project.featured && (
                      <span className="absolute left-3 top-3 rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h2 className="font-display text-sm font-semibold text-[var(--ink)]">
                      {project.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                      {project.summary}
                    </p>

                    {/* Tech tags */}
                    {project.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-2.5 py-0.5 text-xs font-medium text-[var(--ink-muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Code, Demo, Materials */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-3 py-1.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4L22 4" />
                          </svg>
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-button bg-[var(--accent)] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-dark)]"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {project.materials?.map((m) => (
                        <a
                          key={m.label}
                          href={m.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-button border border-[var(--border)] bg-[var(--paper-elevated)] px-3 py-1.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          {m.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <p className="mt-10 text-sm">
        <Link href="/" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
