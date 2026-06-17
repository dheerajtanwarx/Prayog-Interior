import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";

export function ProjectNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav
      aria-label="Project navigation"
      className="grid gap-px overflow-hidden rounded-2xl border border-copper/10 bg-copper/10 sm:grid-cols-2"
    >
      <NavLink project={prev} direction="prev" />
      <NavLink project={next} direction="next" />
    </nav>
  );
}

function NavLink({ project, direction }: { project: Project; direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative flex min-h-[160px] items-center gap-5 overflow-hidden bg-bg-elevated p-7 transition-colors hover:bg-bg-card ${
        isNext ? "sm:flex-row-reverse sm:text-right" : ""
      }`}
    >
      <Image
        src={project.coverImage.src}
        alt=""
        aria-hidden
        fill
        sizes="50vw"
        className="object-cover opacity-15 transition-opacity duration-500 group-hover:opacity-25"
      />
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-copper/20 bg-copper/10 text-copper-light transition-colors group-hover:border-copper">
        {isNext ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
      </span>
      <span className="relative">
        <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted">
          {isNext ? "Next Project" : "Previous Project"}
        </span>
        <span className="mt-1 block font-display text-xl font-medium text-cream">
          {project.title}
        </span>
      </span>
    </Link>
  );
}
