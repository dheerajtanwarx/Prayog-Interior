import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const steps = [
  { n: "01", title: "Discovery & Brief", text: "We understand your space, lifestyle, and aspirations to set a clear conceptual direction." },
  { n: "02", title: "Concept & Layout", text: "Bubble diagrams, zoning, and mood boards translate the brief into spatial volumes and palettes." },
  { n: "03", title: "Design Development", text: "Detailed drawings, 3D visualization, materials, and lighting bring the concept to life." },
  { n: "04", title: "Execution & Handover", text: "Procurement and on-site coordination ensure precision through to a polished final handover." },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-bg-elevated py-[clamp(5rem,12vh,9rem)]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(138,154,123,0.04),transparent_70%)]" />
      <div className="container-px relative">
        <SectionHeading
          align="center"
          label="Our Process"
          title={
            <>
              How we <em>collaborate</em>
            </>
          }
          className="mb-[clamp(3rem,6vw,5rem)]"
        />

        <RevealGroup className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {steps.map((step) => (
            <RevealItem key={step.n} className="text-center">
              <div className="card-hairline mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-bg">
                <span className="font-display text-2xl font-semibold text-gradient-copper">
                  {step.n}
                </span>
              </div>
              <h3 className="mb-3 font-display text-lg font-medium text-cream">
                {step.title}
              </h3>
              <p className="mx-auto max-w-[16rem] text-[0.82rem] leading-relaxed text-ink-muted">
                {step.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
