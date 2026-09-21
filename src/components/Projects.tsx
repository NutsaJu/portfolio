import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-pad scroll-mt-24 py-20 sm:py-28">
      <div className="container-shell">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Projects</p>
            <h2 className="display mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Production e-commerce, portals, and mobile apps — plus earlier product experiments.
              Live demos available on request.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.03}>
              <article className="flex h-full flex-col rounded-2xl bg-bg-elevated/70 p-6 transition hover:bg-bg-elevated sm:p-7">
                <p className="text-sm font-medium text-accent">{project.role}</p>
                <h3 className="display mt-2 text-xl font-bold text-ink sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {project.summary}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-ink-muted">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-bg/80 px-2.5 py-1 text-xs font-medium text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent link-underline"
                  >
                    Visit project <ArrowUpRight size={14} />
                  </a>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
