const IntroSection = () => {
  return (
    <div className="flex flex-col mb-4">
      <div className="text-primary text-mono font-mono text-xs mb-1 opacity-70">
        /yooh·ko·su/ /ようこそ/
      </div>
      <div className="text-xl font-bold">{/* <TypingAnimation /> */}</div>
    </div>
  );
};
const HeroBio = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-10 md:flex-row">
      {/* <div className="shrink-0 avatar">
        <div className="w-64 rounded-xl ring ring-primary/30 ring-offset-base-100 ring-offset-4">
          <img src={profilePic} alt="Edward" className="object-cover" />
        </div>
      </div> */}

      <div className="flex-1">
        <p className="font-mono opacity-60">
          Edward is a Software Developer specializing in React and Express. He
          aims to create solutions and software that solve real-world problems.
          Currently working at{" "}
          <span className="underline decoration-secondary">WCLC</span>
          as a Software Developer Intern and graduating from RRC in Spring 2026.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="btn btn-ghost btn-sm font-mono opacity-60">
            ./view_projects
          </button>
          <button className="btn btn-ghost btn-sm font-mono opacity-60">
            ./contact
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="card bg-base-200 border border-white/5 overflow-hidden">
      <div className="card-body p-8 md:p-12">
        <IntroSection />
        <HeroBio />
      </div>
    </section>
  );
};

export default HeroSection;
