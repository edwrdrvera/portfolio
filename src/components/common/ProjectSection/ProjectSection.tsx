import { LucideExternalLink } from "lucide-react";

const projects = [
  {
    category: "CREATOR ECONOMY · PARTNERSHIP INTELLIGENCE",
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
    category: "HEALTHCARE · EVENT MANAGEMENT",
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
    category: "SOCIAL GRAPH · RECIPE DISCOVERY",
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
    <section id="projects" className="flex flex-col gap-8 w-full mt-8">
      <div className="flex flex-col gap-3 mb-4 px-2">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Things I've shipped</h2>
        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
          Product-first builds backed by technical primitives: robust APIs, modern data structures, full-stack pipelines, and clean user interfaces.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Subtle top glare effect for premium feel */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50 z-10"></div>
            
            <div className="p-8 md:p-10 flex flex-col h-full relative z-0">
              
              <div className="mb-6">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-3 tracking-tight text-gray-900">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-600 font-medium leading-relaxed mb-8">
                {project.description}
              </p>
              
              <ul className="flex flex-col gap-4 mb-10 w-full flex-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-4 text-gray-600 leading-relaxed items-start">
                    <span className="text-gray-300 select-none mt-1 text-[10px] transform scale-75">●</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap items-center justify-between gap-6 mt-auto pt-6 border-t border-gray-100/80">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-xs font-semibold tracking-wide border border-gray-100/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap group-hover:text-blue-600"
                >
                  View repo
                  <LucideExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
