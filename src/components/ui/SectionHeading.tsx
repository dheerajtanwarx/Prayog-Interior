import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Shared section header: small copper eyebrow label + Playfair display title.
 * Use the <em> tag inside `title` to get the copper-gold gradient emphasis.
 */
export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      <Reveal>
        <span
          className={`inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-copper ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-gradient-to-r from-copper to-transparent" />
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] text-cream [&_em]:not-italic [&_em]:text-gradient-copper">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink-muted ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
