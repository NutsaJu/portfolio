import {
  LayoutTemplate,
  Store,
  PanelsTopLeft,
  Smartphone,
  Search,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { services, type Service } from "@/data/services";

const icons: Record<Service["icon"], typeof LayoutTemplate> = {
  layout: LayoutTemplate,
  store: Store,
  panels: PanelsTopLeft,
  smartphone: Smartphone,
  search: Search,
};

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-bg-elevated/50 py-20 sm:py-28">
      <div className="container-shell">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Services</p>
          <h2 className="display mt-3 text-3xl font-bold text-ink sm:text-4xl">What I offer clients</h2>
          <p className="mt-4 text-lg text-ink-muted">
            From landing pages to multi-brand commerce and mobile apps — I design, build, and ship
            polished product frontends.
          </p>
        </FadeIn>

        <ul className="mt-14 space-y-4">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <FadeIn key={service.id} delay={index * 0.04} y={16}>
                <li className="group grid gap-4 rounded-2xl bg-bg/70 p-6 transition-colors hover:bg-bg sm:grid-cols-[auto_1fr_1.1fr] sm:gap-8 sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="display text-xl font-bold text-ink sm:text-2xl">{service.title}</h3>
                    <p className="mt-2 text-ink-muted">{service.description}</p>
                  </div>
                  <ul className="space-y-1.5 text-sm text-ink-muted sm:pt-1">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
