const experiences = [
  {
    company: "WCLC",
    role: "Software Developer Intern",
    date: "2024 - Present",
    description: "Developing robust and scalable internal tools and applications using modern web technologies to support company operations."
  },
  {
    company: "Red River College",
    role: "Student (Software Development)",
    date: "2024 - Expected 2026",
    description: "Studying core computer science concepts, advanced web development, data structures, and software architecture."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="flex flex-col gap-6 w-full mt-4">
      <h2 className="text-3xl font-sf font-bold tracking-tight">Experience</h2>
      
      <div className="flex flex-col mt-2">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-2 py-8 first:pt-4 border-b border-base-content/10 last:border-0 relative">
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-4 mb-1">
              <h3 className="text-xl font-bold tracking-tight">
                {exp.role} <span className="opacity-50 font-normal">@ {exp.company}</span>
              </h3>
              <span className="opacity-60 font-mono text-sm shrink-0">
                {exp.date}
              </span>
            </div>
            
            <p className="opacity-80 font-sans text-lg leading-relaxed max-w-3xl">
              {exp.description}
            </p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
