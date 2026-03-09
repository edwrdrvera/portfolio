import { LucideExternalLink } from "lucide-react";

const projects = [
  {
    title: "Kalend",
    description: "A comprehensive calendar application designed to streamline scheduling with custom API endpoints and robust backend architecture.",
    features: [
      "Real-time event synchronization across multiple time zones",
      "Customizable booking pages with automated conflict resolution",
      "Advanced analytics dashboard for tracking meeting engagement"
    ],
    tech: ["React", "Supabase", "Bun", "Tailwind 4"],
    link: "#"
  },
  {
    title: "QVax",
    description: "Developed during the .devHacks 2026 hackathon, an intuitive platform designed to manage and verify vaccination records securely.",
    features: [
      "Secure patient data handling with end-to-end encryption",
      "Automated appointment scheduling and smart reminders",
      "Seamless QR code generation for rapid clinic check-ins"
    ],
    tech: ["React"],
    link: "#"
  },
  {
    title: "Tastebuds",
    description: "A social media application designed for sharing, discovering, and categorizing authentic restaurant reviews and recipes.",
    features: [
      "Geolocation-based restaurant feed with interactive mapping",
      "Social graph implementation for following friends and food critics",
      "Dynamic bookmarking system with categorizable taste profiles"
    ],
    tech: ["React", "Express", "Node.js"],
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="flex flex-col gap-6 w-full mt-4">
      <h2 className="text-3xl font-sf font-bold tracking-tight">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-base-100 border border-base-content/10 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Subtle top glare effect for premium feel */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-base-content/20 to-transparent opacity-50 z-10"></div>
            
            <div className="p-6 md:p-8 flex flex-col h-full relative z-0">
              
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
              </div>
              
              <p className="opacity-80 font-sans text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>
              
              <ul className="flex flex-col gap-3 mb-8 w-full flex-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 opacity-80 text-sm leading-relaxed items-start">
                    <span className="opacity-30 select-none mt-1 text-[8px] transform scale-75">●</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-5 border-t border-base-content/10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-base-200 opacity-80 rounded-full text-[11px] font-semibold tracking-wide border border-base-content/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="flex items-center gap-1.5 text-xs font-semibold opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap group-hover:text-blue-500"
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
