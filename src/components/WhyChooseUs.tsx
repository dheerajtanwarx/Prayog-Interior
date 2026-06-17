import {
  Award,
  Palette,
  CalendarClock,
  ReceiptText,
  Users,
  Workflow,
  Sparkles,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Award, title: "Premium Quality", text: "Considered detailing and durable, honest materials on every project." },
  { icon: Palette, title: "Personalized Designs", text: "Spaces tailored to how you actually live, work, and entertain." },
  { icon: CalendarClock, title: "On-Time Delivery", text: "Clear milestones and disciplined scheduling from start to handover." },
  { icon: ReceiptText, title: "Transparent Pricing", text: "Itemised, upfront estimates — no surprises along the way." },
  { icon: Users, title: "Experienced Team", text: "Skilled in space planning, drafting, and 3D visualization." },
  { icon: Workflow, title: "End-to-End Service", text: "Concept, procurement, and execution managed under one roof." },
  { icon: Sparkles, title: "Modern Approach", text: "Contemporary aesthetics balanced with timeless functionality." },
  { icon: HeartHandshake, title: "Customer Satisfaction", text: "A collaborative process that keeps you involved at every stage." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-bg py-[clamp(5rem,12vh,9rem)]">
      <div className="container-px">
        <SectionHeading
          align="center"
          label="Why Choose Us"
          title={
            <>
              Built on trust &amp; <em>craft</em>
            </>
          }
          description="Reasons clients return to Prayog Interiors — and recommend us to others."
          className="mb-[clamp(3rem,6vw,5rem)]"
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {reasons.map((reason) => (
            <RevealItem
              key={reason.title}
              className="card-hairline rounded-2xl bg-bg-elevated p-7 transition-transform duration-500 ease-out-expo hover:-translate-y-1.5"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-copper/15 bg-copper/10 text-copper-light">
                <reason.icon size={20} />
              </span>
              <h3 className="mb-2 font-display text-lg font-medium text-cream">
                {reason.title}
              </h3>
              <p className="text-[0.82rem] leading-relaxed text-ink-muted">
                {reason.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
