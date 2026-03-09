const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col gap-6 w-full mt-4">
      <h2 className="text-3xl font-sf font-bold tracking-tight">About</h2>
      
      <div className="flex flex-col gap-4 mt-2">
        <p className="opacity-90 font-sans text-lg leading-relaxed">
          Hello! I'm <span className="font-bold">Edward</span>. I'm a passionate software developer with a strong focus on building clean, efficient, and user-centric web applications. Currently, I'm honing my skills as a Software Developer Intern at WCLC while pursuing my degree at RRC, aiming to graduate in Spring 2026.
        </p>
        <p className="opacity-80 font-sans text-lg leading-relaxed">
          My journey in tech is driven by an obsession with finding elegant solutions to complex problems. Whether it's architecting a robust backend API or crafting a seamless React frontend, I thrive on bringing ideas to life through code.
        </p>
        
        <div className="mt-4">
          <h3 className="text-sm font-bold font-sf opacity-60 mb-3 uppercase tracking-wider">technologies I work with</h3>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['TypeScript', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'SQL', 'Git', 'Bun'].map((tech) => (
              <span key={tech} className="opacity-70 font-mono text-sm tracking-tight">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
