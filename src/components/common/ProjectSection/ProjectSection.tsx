import { LucideExternalLink } from "lucide-react";

const projects = [
  {
    title: "Kalend",
    description: "A comprehensive calendar application designed for students.",
    features: [
      "Real-time event synchronization across multiple time zones",
      "Courses and assignments",
      "Grades and attendance"
    ],
    tech: ["Next.js", "Supabase", "Bun", "Tailwind 4"],
    link: "#"
  },
  {
    title: "QVax",
    description: "Developed during the .devHacks 2026 hackathon, an intuitive platform designed to manage and verify vaccination records securely.",
    features: [
      "Secure patient data handling with authentication",
      "Automated appointment scheduling and smart reminders",
      "Patient and clinic management"
    ],
    tech: ["React", "Node.js", "Tailwind"],
    link: "#"
  },
  {
    title: "Tastebuds",
    description: "A social media application designed for sharing, discovering, and categorizing authentic restaurant reviews and recipes.",
    features: [
      "Restaurant feed with search and filters",
      "User profiles with reviews and recipes",
      "Restaurant and recipe bookmarking"
    ],
    tech: ["React", "Tailwind", "Express", "Neon", "Prisma"],
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="flex flex-col gap-4 w-full mt-4">
      <h2 className="text-xl md:text-2xl font-bold font-sf tracking-tight lowercase">projects.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-base-100 border border-base-content/10 overflow-hidden flex flex-col h-full w-full"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-base-content/20 to-transparent opacity-50 z-10"></div>
            
            <div className="p-5 md:p-6 flex flex-col h-full relative z-0">
              
              <div className="mb-3">
                <h3 className="text-base md:text-lg font-bold tracking-tight">
                  {project.title}
                </h3>
              </div>
              
              <p className="opacity-80 font-sans text-xs md:text-sm leading-relaxed mb-5 max-w-4xl">
                {project.description}
              </p>
              
              <ul className="flex flex-col gap-2 mb-6 w-full flex-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-2.5 opacity-80 text-xs md:text-sm leading-relaxed items-start">
                    <span className="opacity-30 select-none mt-[4px] text-[8px]">●</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-base-content/10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-base-200 opacity-80 rounded-full text-[10px] md:text-[11px] font-semibold tracking-wide border border-base-content/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="flex items-center gap-1.5 text-xs font-semibold opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap group-hover:text-primary"
                >
                  View repo
                  <LucideExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
