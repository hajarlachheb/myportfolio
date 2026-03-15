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
      <div className="flex aspect-video w-full min-h-[80px] items-center justify-center bg-[var(--paper)] text-[var(--ink-muted)] text-2xl font-display font-semibold">
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
        className="aspect-video w-full min-h-[80px] object-cover"
      />
    );
  }
  return (
    <Image
      src={project.image}
      alt=""
      width={400}
      height={225}
      className="aspect-video w-full min-h-[80px] object-cover"
    />
  );
}

export default function ProjectsPage() {
  const sectionsMap = getProjectsBySection();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14 flex-1">
      <div className="mb-8 rounded-card bg-gradient-to-br from-[var(--paper)] via-[var(--paper-elevated)] to-[var(--accent-soft)]/30 p-6 sm:p-8 border border-[var(--border)] shadow-soft">
        <h1 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)] mb-2">
          Projects
        </h1>
        <p className="text-sm text-[var(--accent)]/90">
          Things I've built — from AI & data to prototypes and PM work.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {Array.from(sectionsMap.entries()).map(([section, sectionProjects]) => (
          <section
            key={section}
            className="flex flex-col rounded-card border border-[var(--border)] bg-[var(--paper-elevated)] shadow-soft overflow-hidden"
          >
            <h2 className="font-display text-xs font-semibold text-[var(--accent)] uppercase tracking-wider px-4 py-3 border-b border-[var(--border)] bg-[var(--paper)] shrink-0">
              {section}
            </h2>
            <div className="flex-1 p-3 flex flex-row gap-3 overflow-x-auto overflow-y-hidden min-h-[180px]">
              {sectionProjects.length === 0 ? (
                <p className="text-xs text-[var(--ink-muted)] italic py-2 self-center">
                  Coming soon
                </p>
              ) : (
                sectionProjects.map((project) => (
                  <article
                    key={project.name}
                    className="overflow-hidden rounded-card border border-[var(--border)] bg-[var(--paper)] transition-all duration-300 hover:border-[var(--accent)]/50 flex-shrink-0 w-[220px] sm:w-[240px]"
                  >
                    <div className="relative overflow-hidden bg-[var(--paper)]">
                      <ProjectImage project={project} />
                      {project.featured && (
                        <span className="absolute left-2 top-2 rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-xs font-medium text-[var(--accent)]">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="p-2.5">
                      <h3 className="font-display text-xs font-semibold text-[var(--ink)] line-clamp-2">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-xs leading-snug text-[var(--ink-muted)] line-clamp-2">
                        {project.summary}
                      </p>
                      {project.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[var(--border)] bg-[var(--paper-elevated)] px-1.5 py-0.5 text-xs font-medium text-[var(--ink-muted)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="mt-2 flex flex-wrap gap-1">
                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-button border border-[var(--border)] px-2 py-1 text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          >
                            Code
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-button bg-[var(--accent)] px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-dark)]"
                          >
                            Demo
                          </a>
                        )}
                        {project.materials?.slice(0, 2).map((m) => {
                          const isInternal = m.url.startsWith("/");
                          const className =
                            "inline-flex items-center gap-1 rounded-button border border-[var(--border)] px-2 py-1 text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]";
                          return isInternal ? (
                            <Link key={m.label} href={m.url} className={className}>
                              {m.label}
                            </Link>
                          ) : (
                            <a
                              key={m.label}
                              href={m.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={className}
                            >
                              {m.label}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 text-sm">
        <Link href="/" className="font-medium text-[var(--accent)] hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
