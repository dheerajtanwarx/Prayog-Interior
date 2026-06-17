const items = [
  "Residential Interiors",
  "Modular Kitchens",
  "Luxury Retail",
  "Turnkey Solutions",
  "Space Planning",
  "3D Visualization",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-copper/10 bg-bg py-8">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8 px-8" aria-hidden={dup === 1}>
            {items.map((item) => (
              <div key={item} className="flex items-center gap-8 whitespace-nowrap">
                <span className="font-display text-[clamp(1.2rem,2vw,1.6rem)] text-ink-subtle transition-colors hover:text-cream">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-copper to-gold" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
