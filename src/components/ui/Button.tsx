import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "glow";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full text-[0.78rem] font-medium uppercase tracking-[0.1em] transition-all duration-500 ease-out-expo focus:outline-none focus-visible:ring-2 focus-visible:ring-copper/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  // Primary always uses light text — it sits on the copper gradient in both themes.
  primary:
    "bg-gradient-to-br from-copper to-terracotta px-8 py-4 text-[#F5F0EB] shadow-[0_4px_24px_rgba(193,127,89,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(193,127,89,0.4)]",
  outline:
    "border border-copper/70 bg-copper/10 px-8 py-4 hover:-translate-y-0.5 hover:border-copper-light hover:bg-copper/25 hover:tracking-[0.16em] hover:shadow-[0_6px_30px_rgba(193,127,89,0.15)]",
  glow: "overflow-hidden bg-bg px-9 py-[1.1rem] text-cream",
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  /** Force light text for the outline variant when placed over dark imagery */
  onDark?: boolean;
}

type ButtonAsLink = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className"
  >;
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className"
  >;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", children, className = "", onDark, ...rest } = props;
  const outlineText =
    variant === "outline" ? (onDark ? "text-[#F5F0EB]" : "text-cream") : "";
  const classes = `${base} ${variants[variant]} ${outlineText} ${className}`;

  const inner =
    variant === "glow" ? (
      <>
        <span
          aria-hidden
          className="animate-glow-conic absolute -inset-0.5 -z-20 rounded-full"
          style={{ animation: "glow-spin 4s linear infinite" }}
        />
        <span
          aria-hidden
          className="absolute inset-[2px] -z-10 rounded-full bg-bg"
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </>
    ) : (
      children
    );

  if (props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {inner}
    </button>
  );
}
