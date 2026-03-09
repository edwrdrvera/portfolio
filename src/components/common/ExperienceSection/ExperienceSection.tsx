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
      <h2 className="text-2xl font-bold font-mono">Experience</h2>
      
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="card bg-base-200 border border-base-content/10 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="card-body p-6 md:p-8">
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-4 mb-3">
                <h3 className="text-xl font-bold tracking-tight">
                  {exp.role} <span className="opacity-50 font-normal">@ {exp.company}</span>
                </h3>
                <span className="opacity-60 font-mono text-sm shrink-0 bg-base-300 px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </span>
              </div>
              
              <p className="opacity-80 font-sans text-base md:text-lg leading-relaxed mt-2">
                {exp.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
