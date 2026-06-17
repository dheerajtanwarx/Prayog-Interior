import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  /** Featured cards span larger and use eager-ish sizing */
  featured?: boolean;
  priority?: boolean;
}

export function ProjectCard({ project, featured = false, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
      aria-label={`View project: ${project.title}`}
    >
      <div className={`relative w-full ${featured ? "h-full min-h-[420px]" : "min-h-[340px]"}`}>
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 35vw"}
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
      </div>

      {/* gradient overlay — fixed dark for legibility of light text in both themes */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E]/90 via-[#0F0F0E]/10 to-[#0F0F0E]/20 transition-colors duration-500 group-hover:from-[#0F0F0E]/95" />

      {/* arrow chip */}
      <span className="absolute right-5 top-5 flex h-12 w-12 translate-x-2 translate-y-[-8px] items-center justify-center rounded-full border border-copper/20 bg-copper/10 text-copper-light opacity-0 backdrop-blur transition-all duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight size={20} />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-[clamp(1.5rem,3vw,2.5rem)]">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-copper/25 bg-copper/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-copper-light">
            {project.category}
          </span>
          <span className="rounded-full border border-copper/25 bg-copper/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-copper-light">
            {project.projectType}
          </span>
        </div>
        <h3 className="mb-2 font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-medium text-[#F5F0EB]">
          {project.title}
        </h3>
        <p className="mb-3 max-w-md text-[0.85rem] leading-relaxed text-[#F5F0EB]/85">
          {project.excerpt}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.1em] text-[#F5F0EB]/60">
          <MapPin size={13} /> {project.location}
        </span>
      </div>
    </Link>
  );
}
