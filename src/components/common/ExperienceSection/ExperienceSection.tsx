const experiences = [
  {
    company: "wclc",
    role: "software developer intern",
    date: "2026 - present",
    description: "developing scalable api's and internal tools."
  },
  {
    company: "rrc - application development and delivery",
    role: "student (software development)",
    date: "2024 - expected 2026",
    description: "studying core computer science concepts, advanced web development, cloud, and data analysis."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="flex flex-col gap-4 w-full mt-4">
      <h2 className="text-xl md:text-2xl font-bold font-sf tracking-tight lowercase">experience.</h2>
      
      <div className="flex flex-col mt-2">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-2 py-6 first:pt-0 border-b border-base-content/10 last:border-0 relative">
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-4 mb-2">
              <h3 className="text-lg md:text-xl font-medium tracking-tight lowercase">
                {exp.role} <span className="opacity-50 font-normal">@ {exp.company}</span>
              </h3>
              <span className="opacity-50 font-sans text-sm md:text-base shrink-0 lowercase">
                {exp.date}
              </span>
            </div>
            
            <ul className="flex flex-col gap-2">
              <li className="flex gap-3 opacity-80 font-sans text-base md:text-lg items-start lowercase leading-relaxed max-w-3xl">
                <span className="opacity-50 select-none">·</span>
                <span>{exp.description}</span>
              </li>
            </ul>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
