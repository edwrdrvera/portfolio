import profilePic from "@/assets/edward.webp";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const IntroSection = () => {
  return (
    <div className="flex align-baseline flex-col relative z-10 mb-0">
      <div className="font-medium text-sm md:text-base text-base-content/60 tracking-tight pl-1 mb-1">/yooh·ko·su/ /ようこそ/</div>
      <div className="text-xl md:text-2xl text-base-content tracking-tighter">
        <TypingAnimation />
      </div>
    </div>
  );
};

const HeroBio = () => {
  return (
    <div className="mt-2 md:mt-4 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 relative z-10 w-full mb-8">
      {/* Profile Image with subtle glow/shadow */}
      <div className="w-full max-w-[240px] md:max-w-[300px] shrink-0 group">
        <div className="relative overflow-hidden rounded-none shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02] h-full">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
          <img
            src={profilePic}
            alt="Edward"
            className="w-full h-full object-cover filter contrast-[1.05]"
          />
        </div>
      </div>
      
      {/* Bio Text and Socials */}
      <div className="flex-1 flex flex-col justify-between max-w-4xl pt-2 lg:pt-4 pb-2 lg:pb-4">
        <p className="font-sans text-2xl md:text-3xl leading-tight opacity-90 lowercase text-left tracking-tight">
          <span className="font-bold">edward</span> is a software developer that specializes in react and express. he aims to create solutions and software that solve real-world problems. he is currently working at wclc as a software developer intern and is graduating from rrc in spring 2026.
        </p>
        
        {/* Social Links to fill space interactively */}
        <div className="flex flex-col gap-3 justify-end items-start mt-8 md:mt-auto">
          <a href="https://linkedin.com/in/edward-rivera" target="_blank" rel="noreferrer" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 group">
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-[#0A66C2] grayscale group-hover:grayscale-0 transition-all duration-300" />
            <span className="text-base md:text-lg font-medium lowercase">linkedin</span>
          </a>
          <a href="https://github.com/edward-rivera" target="_blank" rel="noreferrer" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-1">
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-base md:text-lg font-medium lowercase">github</span>
          </a>
          <a href="mailto:edward@example.com" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 group">
            <FaEnvelope className="w-5 h-5 md:w-6 md:h-6 text-[#EA4335] grayscale group-hover:grayscale-0 transition-all duration-300" />
            <span className="text-base md:text-lg font-medium lowercase">email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full flex flex-col pt-0 md:pt-4 pb-0 mx-auto min-h-[85vh] justify-center">
      {/* Apple-style Magic Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-blue-400/10 via-purple-400/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="w-full">
        <IntroSection />
        <HeroBio />
      </div>
    </section>
  );
};

export default HeroSection;