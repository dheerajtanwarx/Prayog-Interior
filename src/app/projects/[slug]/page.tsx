import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CalendarCheck,
  Ruler,
  User,
  MapPin,
  Tag,
  Wrench,
  Layers,
  PenTool,
} from "lucide-react";
import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/data/projects";
import { site } from "@/data/site";
import { ProjectBanner } from "@/components/project/ProjectBanner";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ProjectNav } from "@/components/project/ProjectNav";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} — ${project.category}`,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.excerpt,
      images: [{ url: project.coverImage.src, alt: project.coverImage.alt }],
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);

  const overview = [
    { icon: Tag, label: "Category", value: project.category },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: CalendarCheck, label: "Completed", value: project.completionDate },
    { icon: Ruler, label: "Scope", value: project.area },
    { icon: User, label: "Client", value: project.client },
  ].filter((item) => Boolean(item.value));

  return (
    <article>
      <ProjectBanner project={project} />

      <div className="bg-bg py-[clamp(3rem,8vh,6rem)]">
        <div className="container-px">
          {/* Intro + overview */}
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-copper">
                <span className="h-px w-8 bg-gradient-to-r from-copper to-transparent" />
                Project Overview
              </span>
              <div className="mt-6 space-y-5">
                {project.description.map((para, i) => (
                  <p key={i} className="text-[0.98rem] leading-[1.85] text-ink-muted">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" className="card-hairline h-fit rounded-2xl bg-bg-elevated p-7">
              <h2 className="mb-5 font-display text-lg font-medium text-cream">
                At a Glance
              </h2>
              <dl className="flex flex-col gap-4">
                {overview.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-copper/15 bg-copper/10 text-copper-light">
                      <item.icon size={16} />
                    </span>
                    <div>
                      <dt className="text-[0.68rem] uppercase tracking-[0.12em] text-ink-subtle">
                        {item.label}
                      </dt>
                      <dd className="text-[0.9rem] text-cream">{item.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Services / materials / tools */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <DetailList icon={Wrench} title="Services Provided" items={project.services} />
            {project.materials && (
              <DetailList icon={Layers} title="Materials Used" items={project.materials} />
            )}
            {project.tools && (
              <DetailList icon={PenTool} title="Tools Used" items={project.tools} />
            )}
          </div>

          {/* Gallery */}
          <section className="mt-[clamp(3rem,7vh,5rem)]" aria-label="Project gallery">
            <Reveal>
              <h2 className="mb-8 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal text-cream">
                Image <em className="not-italic text-gradient-copper">gallery</em>
              </h2>
            </Reveal>
            <ProjectGallery images={project.gallery} />
          </section>

          {/* CTA */}
          <Reveal className="mt-16 flex flex-col items-center gap-5 rounded-2xl border border-copper/10 bg-bg-elevated p-10 text-center">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-cream">
              Like what you see?
            </h2>
            <p className="max-w-md text-[0.9rem] leading-relaxed text-ink-muted">
              Let&rsquo;s talk about how Prayog Interiors can craft a space tailored to you.
            </p>
            <Button href="/#contact" variant="primary">
              Request a Consultation
            </Button>
          </Reveal>

          {/* Prev / Next navigation */}
          <div className="mt-14">
            <ProjectNav prev={prev} next={next} />
          </div>
        </div>
      </div>
    </article>
  );
}

function DetailList({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Wrench;
  title: string;
  items: string[];
}) {
  return (
    <Reveal className="card-hairline rounded-2xl bg-bg-elevated p-7">
      <h3 className="mb-5 flex items-center gap-2.5 font-display text-lg font-medium text-cream">
        <Icon size={18} className="text-copper-light" />
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[0.88rem] text-ink-muted">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-copper to-gold" />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
