import { FadeIn } from "@/components/FadeIn";
import { site } from "@/data/site";
import { skills } from "@/data/experience";

export function About() {
  const skillGroups = [
    { label: "Frontend", items: skills.frontend },
    { label: "Mobile", items: skills.mobile },
    { label: "Backend", items: skills.backend },
    { label: "SEO", items: skills.seo },
  ];

  return (
    <section id="about" className="section-pad scroll-mt-24 py-20 sm:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Summary</p>
          <h2 className="display mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Production frontend for web & mobile
          </h2>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.08}>
            <p className="text-lg leading-relaxed text-ink-muted sm:text-xl">{site.summary}</p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-sm font-semibold text-ink">{group.label}</p>
                  <p className="text-sm leading-relaxed text-ink-muted">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
