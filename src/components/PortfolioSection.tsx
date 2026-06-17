import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

// Build a curated masonry wall: one or two strong shots per project.
const wall = projects.flatMap((project) =>
  project.gallery.slice(0, 2).map((image) => ({
    ...image,
    slug: project.slug,
    title: project.title,
    category: project.category,
  })),
);

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-bg-elevated py-[clamp(5rem,12vh,9rem)]">
      <div className="container-px">
        <SectionHeading
          align="center"
          label="Portfolio"
          title={
            <>
              A wall of <em>finished spaces</em>
            </>
          }
          description="Browse interiors across our projects. Hover any image to dive into the full story."
          className="mb-[clamp(3rem,6vw,5rem)]"
        />

        <div className="[column-fill:_balance] columns-1 gap-5 sm:columns-2 lg:columns-3">
          {wall.map((image, i) => (
            <Reveal
              key={`${image.slug}-${image.src}`}
              delay={(i % 3) * 0.08}
              className="mb-5 break-inside-avoid"
            >
              <Link
                href={`/projects/${image.slug}`}
                className="group relative block overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                aria-label={`View ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[0.65rem] uppercase tracking-[0.12em] text-copper-light">
                    {image.category}
                  </span>
                  <h3 className="mt-1 flex items-center gap-1.5 font-display text-lg font-medium text-cream">
                    {image.title}
                    <ArrowUpRight size={16} className="text-copper-light" />
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
