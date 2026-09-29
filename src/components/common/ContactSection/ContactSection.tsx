import { useMotion } from "@/lib/motion";
import WinnipegSky from "./WinnipegSky";

const ContactSection = () => {
  const still = useMotion() === "reduce";

  return (
    <footer className="w-full min-h-[30vh] flex flex-col overflow-hidden bg-base-100 text-base-content border-t border-base-content/10">
      <div className="mx-auto flex w-full max-w-5xl md:max-w-6xl items-center justify-between gap-4 px-4 md:px-6 pt-5 font-mono text-xs md:text-sm lowercase">
        <WinnipegSky />
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: still ? "auto" : "smooth" });
          }}
          className="group relative -m-3 flex items-center gap-1.5 p-3 opacity-60 hover:opacity-100 transition-opacity"
        >
          back to top
          <span aria-hidden className="inline-block transition-transform duration-500 ease-spring group-hover:-translate-y-1 motion-reduce:transition-none">
            ↑
          </span>
        </a>
      </div>
      <div className="flex flex-1 items-center">
        <h1 className="font-sans font-semibold text-[15vw] leading-[0.8] tracking-tighter lowercase text-center w-full whitespace-nowrap overflow-hidden py-[0.05em]">
          edward rivera
        </h1>
      </div>
    </footer>
  );
};

export default ContactSection;
