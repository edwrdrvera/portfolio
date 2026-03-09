import AboutSection from "@/components/common/AboutSection/AboutSection";
import ContactSection from "@/components/common/ContactSection/ContactSection";
import ExperienceSection from "@/components/common/ExperienceSection/ExperienceSection";
import HeroSection from "@/components/common/HeroSection/HeroSection";
import ProjectsSection from "@/components/common/ProjectSection/ProjectSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 pt-6 md:pt-10">

        <main className="flex flex-col gap-16 md:gap-24 pb-20">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
