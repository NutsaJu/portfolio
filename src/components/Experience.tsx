import { FadeIn } from "@/components/FadeIn";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-pad scroll-mt-24 bg-bg-elevated/50 py-20 sm:py-28">
      <div className="container-shell">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Experience</p>
          <h2 className="display mt-3 text-3xl font-bold text-ink sm:text-4xl">Where I&apos;ve built</h2>
        </FadeIn>

        <ol className="mt-14 space-y-6">
          {experience.map((job, index) => (
            <FadeIn key={job.id} delay={index * 0.05}>
              <li className="grid gap-4 rounded-2xl bg-bg/70 p-6 md:grid-cols-[220px_1fr] md:gap-10 md:p-8">
                <div>
                  <p className="text-sm font-medium text-ink-muted">{job.period}</p>
                  <h3 className="display mt-2 text-xl font-bold text-ink">{job.company}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{job.role}</p>
                </div>
                <ul className="space-y-3 text-ink-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
