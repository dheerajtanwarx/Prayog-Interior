import { Star } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const testimonials = [
  {
    quote:
      "Prayog Interiors understood exactly how we wanted our home to feel. The space planning is flawless and the finishes are beautiful — it feels luxurious yet completely livable.",
    name: "Dinesh Dhaka",
    role: "Homeowner, Dhaka House",
    initials: "DD",
  },
  {
    quote:
      "From the first mood board to the final handover, the process was transparent and collaborative. Our showroom now feels every bit as premium as the products inside it.",
    name: "Retail Client",
    role: "Velora Jewels",
    initials: "VJ",
  },
  {
    quote:
      "They balanced warmth and elegance perfectly. The lighting, the wood textures, the gold accents — every detail in our living space was considered and intentional.",
    name: "Giriraj Family",
    role: "Residence, Jaipur",
    initials: "GF",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-bg py-[clamp(5rem,12vh,9rem)]">
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.04),transparent_70%)]" />
      <div className="container-px relative">
        <SectionHeading
          align="center"
          label="Client Voices"
          title={
            <>
              Words from our <em>clients</em>
            </>
          }
          className="mb-[clamp(3rem,6vw,5rem)]"
        />

        <RevealGroup className="grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {testimonials.map((t) => (
            <RevealItem
              key={t.name}
              className="card-hairline rounded-2xl bg-bg-elevated p-[clamp(1.5rem,3vw,2.5rem)] transition-transform duration-500 ease-out-expo hover:-translate-y-1"
            >
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mb-6 text-[0.92rem] italic leading-relaxed text-cream-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-copper/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-copper/30 bg-copper/10 text-sm font-medium text-copper-light">
                  {t.initials}
                </span>
                <div>
                  <h4 className="text-[0.85rem] font-medium text-cream">{t.name}</h4>
                  <p className="mt-0.5 text-[0.75rem] text-ink-muted">{t.role}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
