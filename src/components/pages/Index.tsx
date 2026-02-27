import ContactSection from "@/components/common/ContactSection/ContactSection";
import HeroSection from "@/components/common/HeroSection/HeroSection";
import ProjectsSection from "@/components/common/ProjectSection/ProjectSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <nav className="flex justify-between items-center py-4">
          <div className="font-mono text-lg font-bold tracking-tighter">
            Edward.dev
          </div>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="link link-hover font-mono text-sm opacity-70"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="link link-hover font-mono text-sm opacity-70"
            >
              Contact
            </a>
          </div>
        </nav>

        <main className="flex flex-col gap-12">
          <HeroSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <footer className="footer footer-center p-4 bg-base-200 text-base-content rounded-xl border border-white/5 opacity-60 font-mono text-sm">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - Edward</p>
          </aside>
        </footer>
      </div>
    </div>
  );
}
