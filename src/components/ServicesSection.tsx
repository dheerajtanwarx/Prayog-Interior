import {
  Home,
  Building2,
  CookingPot,
  BedDouble,
  Sofa,
  Briefcase,
  LayoutGrid,
  Armchair,
  KeyRound,
  Hammer,
  Lightbulb,
  PencilRuler,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  CookingPot,
  BedDouble,
  Sofa,
  Briefcase,
  LayoutGrid,
  Armchair,
  KeyRound,
  Hammer,
  Lightbulb,
  PencilRuler,
};

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-bg py-[clamp(5rem,12vh,9rem)]">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(193,127,89,0.06),transparent_70%)]" />

      <div className="container-px relative">
        <div className="mb-[clamp(3rem,5vw,5rem)] flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            label="What We Do"
            title={
              <>
                Comprehensive interior <em>services</em>
              </>
            }
          />
          <p className="max-w-sm text-[0.9rem] leading-relaxed text-ink-muted">
            From concept to handover, we guide every project through a meticulous,
            client-centred process — design, materials, and execution under one roof.
          </p>
        </div>

        <RevealGroup
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? LayoutGrid;
            return (
              <RevealItem
                key={service.title}
                className="card-hairline group relative overflow-hidden rounded-2xl bg-bg-elevated p-[clamp(2rem,3vw,2.5rem)] transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <span className="pointer-events-none absolute right-6 top-5 font-display text-5xl font-semibold text-copper/[0.07]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-copper/15 bg-gradient-to-br from-copper/15 to-copper/5 text-copper-light">
                  <Icon size={24} />
                </span>
                <h3 className="relative z-10 mb-3 font-display text-xl font-medium text-cream">
                  {service.title}
                </h3>
                <p className="relative z-10 text-[0.85rem] leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
