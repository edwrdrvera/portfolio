const projects = [
  {
    title: "Kalend",
    description:
      "A comprehensive calendar application with custom API endpoints and backend architecture.",
    tech: ["React", "Supabase", "Bun", "Tailwind 4"],
    link: "#"
  },
  {
    title: "QVax",
    description: "Developed during the .devHacks 2026 hackathon.",
    tech: ["React"],
    link: "#"
  },
  {
    title: "Tastebuds",
    description:
      "A social media application designed for sharing and discovering restaurant reviews.",
    tech: ["React", "Express", "Node.js"],
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold font-mono">./projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-base-200 border border-white/5 hover:border-primary/50 transition-colors"
          >
            <div className="card-body p-6">
              <h3 className="card-title font-mono text-lg">{project.title}</h3>
              <p className="opacity-70 text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="badge badge-outline badge-sm opacity-60 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
