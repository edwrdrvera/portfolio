import { 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiPostgresql, 
  SiGit, 
  SiBun,
  SiNextdotjs,
  SiPython,
  SiHtml5,
  SiCss
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import aboutPic from "../../../assets/about.webp";

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'currentColor' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: 'currentColor' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Bun', icon: SiBun, color: 'currentColor' }
];

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col gap-4 w-full mt-4">
      <h2 className="text-xl md:text-2xl font-bold font-sf tracking-tight lowercase">about.</h2>
      
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
        <div className="flex-1 flex flex-col gap-4">
          <p className="opacity-80 font-sans text-base md:text-lg leading-relaxed lowercase max-w-3xl">
            hello! i'm <span className="font-medium opacity-100">edward</span>. i'm a software developer with a strong focus on building clean, efficient, and user-centric web applications. 
            currently, i am software developer intern at wclc while at my last term at rrc, aiming to graduate in spring 2026.
          </p>
          <p className="opacity-80 font-sans text-base md:text-lg leading-relaxed lowercase max-w-3xl">
            my journey in tech is driven by the goal of creating solutions that make a difference. i enjoy solving complex problems and bringing ideas to life through code.
          </p>
          
          <div className="mt-6 flex flex-col gap-4">
            <p className="text-base md:text-lg font-medium font-sf opacity-60 tracking-tight uppercase mb-1">tech stack</p>
            
            <div className="flex flex-wrap gap-4 md:gap-7 items-center">
              {techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="group relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                  title={tech.name}
                >
                  <tech.icon 
                    className="w-8 h-8 md:w-10 md:h-10 text-base-content/40 transition-colors duration-300" 
                    style={{ "--hover-color": tech.color } as any}
                    onMouseEnter={(e: any) => e.currentTarget.style.color = tech.color}
                    onMouseLeave={(e: any) => e.currentTarget.style.color = ''}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-5/12 lg:w-4/12 shrink-0 md:mt-2">
          <img 
            src={aboutPic} 
            alt="Edward Rivera" 
            className="w-full h-auto rounded-none shadow-xl filter contrast-[1.05]" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
