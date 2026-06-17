import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-bg py-[clamp(5rem,10vw,9rem)]">
      <div className="absolute inset-0">
        <Image
          src="/projects/khichar/facade.webp"
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0F0F0E_75%)]" />
      </div>

      <Reveal direction="none" className="container-px relative z-10 mx-auto max-w-2xl text-center">
        <span className="mb-6 inline-flex items-center justify-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-copper">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-copper" />
          Ready to Begin?
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-copper" />
        </span>
        <h2 className="mb-6 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-normal leading-[1.1] text-cream">
          Let&rsquo;s create a space you&rsquo;ll{" "}
          <em className="not-italic text-gradient-copper">love coming home to.</em>
        </h2>
        <p className="mb-10 text-base leading-relaxed text-ink-muted">
          From a single room to a complete turnkey interior, our team is ready to
          translate your vision into a beautifully crafted reality.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/#contact" variant="glow">
            Request a Consultation
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
