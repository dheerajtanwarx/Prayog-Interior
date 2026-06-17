import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { RevealGroup, RevealItem } from "./ui/Reveal";

export function ProjectsSection() {
  const [first, ...rest] = projects;

  return (
    <section id="projects" className="overflow-hidden bg-bg py-[clamp(5rem,12vh,9rem)]">
      <div className="container-px">
        <SectionHeading
          align="center"
          label="Selected Works"
          title={
            <>
              Projects crafted with <em>care</em>
            </>
          }
          description="A selection of completed retail, hospitality, and residential interiors — each responsive to its purpose and its people."
          className="mb-[clamp(3rem,6vw,5rem)]"
        />

        <RevealGroup className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]" stagger={0.12}>
          {/* Featured / first project spans two rows */}
          <RevealItem className="lg:row-span-2">
            <ProjectCard project={first} featured priority />
          </RevealItem>
          {rest.map((project) => (
            <RevealItem key={project.id}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 text-center">
          <Button href="/#portfolio" variant="outline">
            Explore the Portfolio
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
