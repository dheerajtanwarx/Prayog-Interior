import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-display text-[clamp(4rem,12vw,8rem)] font-semibold text-gradient-copper">
        404
      </span>
      <h1 className="font-display text-2xl font-normal text-cream">
        This page could not be found
      </h1>
      <p className="max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
        The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s
        get you back to familiar ground.
      </p>
      <Button href="/" variant="primary">
        Back to Home
      </Button>
    </section>
  );
}
