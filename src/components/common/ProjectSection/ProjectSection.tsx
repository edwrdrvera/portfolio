import { LucideExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

const ProjectLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 text-xs md:text-sm opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap"
  >
    {label}
    <LucideExternalLink className="w-3 h-3" />
  </a>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="flex flex-col gap-4 w-full mt-4">
      <SectionHeading title="projects." />

      <div className="flex flex-col mt-2">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-1 py-4 first:pt-0 border-b border-base-content/10 last:border-0">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-4">
              <h3 className="text-base md:text-lg font-medium tracking-tight lowercase">
                {project.title}
              </h3>
              <div className="flex items-center gap-4 shrink-0">
                {project.siteLink && <ProjectLink href={project.siteLink} label="site" />}
                {project.link && <ProjectLink href={project.link} label="repo" />}
              </div>
            </div>

            <p className="opacity-80 font-sans text-sm md:text-base lowercase leading-snug max-w-3xl">
              {project.description}
            </p>

            <p className="opacity-50 font-sans text-xs lowercase">
              {project.tech.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
