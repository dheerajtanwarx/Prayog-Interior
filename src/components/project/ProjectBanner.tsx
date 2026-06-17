import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import type { Project } from "@/lib/types";

export function ProjectBanner({ project }: { project: Project }) {
  return (
    <header className="relative flex min-h-[70vh] items-end overflow-hidden">
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Fixed dark scrim keeps text legible over the photo in both themes… */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E]/85 via-[#0F0F0E]/35 to-[#0F0F0E]/45" />
      {/* …while the bottom edge blends into the (themeable) page background. */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />

      <div className="container-px relative z-10 w-full pb-14 pt-32">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-copper/25 bg-[#0F0F0E]/40 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.12em] text-[#F5F0EB] backdrop-blur transition-colors hover:border-copper hover:text-copper-light"
        >
          <ArrowLeft size={15} /> Back to Projects
        </Link>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-copper/25 bg-copper/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-copper-light">
            {project.category}
          </span>
          <span className="rounded-full border border-copper/25 bg-copper/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-copper-light">
            {project.projectType}
          </span>
        </div>

        <h1 className="max-w-3xl font-display text-[clamp(2.4rem,6vw,4.5rem)] font-normal leading-[1.05] text-[#F5F0EB] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
          {project.title}
        </h1>

        <p className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] uppercase tracking-[0.1em] text-[#F5F0EB]/80">
          <MapPin size={15} /> {project.location}
          {project.completionDate && (
            <span className="ml-2 text-[#F5F0EB]/60">· {project.completionDate}</span>
          )}
        </p>
      </div>
    </header>
  );
}
