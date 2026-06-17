import Image from "next/image";
import { Leaf, Compass, Gem } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { site } from "@/data/site";

const pillars = [
  {
    icon: Leaf,
    title: "Design Philosophy",
    text: "Functional and aesthetically balanced spaces — where thoughtful space planning meets honest, well-detailed materials.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    text: "To translate each client's vision into interiors that feel personal, timeless, and effortless to live in.",
  },
  {
    icon: Gem,
    title: "Our Vision",
    text: "To be a studio known for premium craft, transparent process, and spaces that elevate everyday life.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-bg py-[clamp(5rem,12vh,9rem)]">
      <div className="container-px">
        <div className="grid items-center gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-2">
          <Reveal direction="right" className="relative">
            <div className="card-hairline relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/projects/giriraj/living.webp"
                alt="Refined living room interior designed by Prayog Interiors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out-expo hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg to-transparent" />
            </div>
          </Reveal>

          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-copper">
                <span className="h-px w-8 bg-gradient-to-r from-copper to-transparent" />
                About the Studio
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-cream">
                Spaces shaped by{" "}
                <em className="not-italic text-gradient-copper">intent</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="my-8 font-display text-[clamp(1.3rem,2.2vw,1.7rem)] italic leading-relaxed text-cream">
                &ldquo;Great interiors aren&rsquo;t decorated — they&rsquo;re{" "}
                <span className="not-italic font-medium text-gradient-copper">
                  planned, layered, and felt.
                </span>
                &rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="text-[0.95rem] leading-[1.8] text-ink-muted">
                Prayog Interiors is led by designer Yogesh Saini, with a practice
                rooted in space planning, drafting, and 3D visualization. Over{" "}
                {new Date().getFullYear() - site.founded}+ years we have delivered
                academic, freelance, and professional projects across retail,
                hospitality, and residential interiors — always balancing comfort,
                function, and a premium aesthetic.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-6">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={0.1 * i} direction="right">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-copper/15 bg-copper/10 text-copper-light">
                      <pillar.icon size={18} />
                    </span>
                    <div>
                      <h3 className="mb-1 text-[0.9rem] font-medium text-cream">
                        {pillar.title}
                      </h3>
                      <p className="text-[0.82rem] leading-relaxed text-ink-muted">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
