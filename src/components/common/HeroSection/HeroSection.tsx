import profilePic from "@/assets/edward.webp";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef, useState, type RefObject } from "react";
import { heroBio } from "@/data/hero";

const POPUP_WIDTH = 240;
const VIEWPORT_GUTTER = 16;
const POPUP_GAP = 12;
const CLOSE_DELAY_MS = 80;

type Placement = { side: "top" | "bottom" | "right"; x: number };

const placePopup = (keyword: HTMLElement, container: HTMLElement): Placement => {
  const k = keyword.getBoundingClientRect();
  const c = container.getBoundingClientRect();
  const right = Math.min(c.right, window.innerWidth - VIEWPORT_GUTTER);
  if (k.top + k.height / 2 < c.top + c.height / 2) return clampX("top", k, right);
  if (k.right + POPUP_GAP + POPUP_WIDTH <= right) return { side: "right", x: 0 };
  return clampX("bottom", k, right);
};

const clampX = (side: Placement["side"], k: DOMRect, right: number): Placement => {
  const maxLeft = right - POPUP_WIDTH;
  const left = Math.max(VIEWPORT_GUTTER, Math.min(k.left, maxLeft));
  return { side, x: left - k.left };
};

const POSITIONS: Record<Placement["side"], string> = {
  top: "left-0 bottom-full mb-3",
  bottom: "left-0 top-full mt-3",
  right: "left-full ml-3 top-0",
};

const ORIGINS: Record<Placement["side"], (x: number) => string> = {
  top: (x) => `${16 - x}px bottom`,
  bottom: (x) => `${16 - x}px top`,
  right: () => "left top",
};

type KeywordProps = {
  keyword: string;
  note?: string;
  containerRef: RefObject<HTMLElement | null>;
};

const Keyword = ({ keyword, note, containerRef }: KeywordProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<Placement>({ side: "top", x: 0 });
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const open = () => {
    clearTimeout(closeTimer.current);
    if (isOpen) return;
    if (note && ref.current && containerRef.current) {
      setPlacement(placePopup(ref.current, containerRef.current));
      setIsOpen(true);
    }
  };
  const close = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setIsOpen(false), CLOSE_DELAY_MS);
  };

  return (
    <span
      ref={ref}
      tabIndex={note ? 0 : undefined}
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={close}
      className="relative font-semibold text-base-content bg-[linear-gradient(var(--color-base-content),var(--color-base-content))] bg-no-repeat bg-[length:100%_2px] bg-left-bottom px-0.5 -mx-0.5 transition-[background-size,color] duration-150 ease-in hover:bg-[length:100%_100%] hover:text-base-100 hover:duration-500 hover:ease-spring focus-visible:bg-[length:100%_100%] focus-visible:text-base-100 motion-reduce:transition-none outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-content cursor-default"
    >
      {keyword}
      {note && (
        <span
          role="tooltip"
          style={{
            width: POPUP_WIDTH,
            transform: `translateX(${placement.x}px)`,
            transformOrigin: ORIGINS[placement.side](placement.x),
          }}
          className={`pointer-events-none absolute z-20 font-sf bg-base-content px-4 py-2.5 text-sm font-normal leading-snug tracking-normal text-base-100 transition-[opacity,scale] motion-reduce:transition-opacity motion-reduce:scale-100 ${
            POSITIONS[placement.side]
          } ${
            isOpen
              ? "opacity-100 scale-100 duration-500 ease-spring"
              : "opacity-0 scale-95 duration-200 ease-out"
          }`}
        >
          {note}
        </span>
      )}
    </span>
  );
};

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
  const bioRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="mt-2 md:mt-4 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 relative z-10 w-full mb-8">
      <div className="w-full max-w-[240px] md:max-w-[300px] shrink-0">
        <div className="relative overflow-hidden rounded-none shadow-2xl h-full">
          <img
            src={profilePic}
            alt="Edward"
            className="w-full h-full object-cover filter contrast-[1.05]"
          />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-between max-w-4xl pt-2 lg:pt-4 pb-2 lg:pb-4">
        <p ref={bioRef} className="font-sans text-2xl md:text-3xl leading-tight opacity-90 lowercase text-left tracking-tight">
          <span className="font-bold">{heroBio.name}</span>{" "}
          {heroBio.bio.map((segment, i) =>
            typeof segment === "string" ? (
              segment
            ) : (
              <Keyword
                key={i}
                keyword={segment.keyword}
                note={segment.note}
                containerRef={bioRef}
              />
            )
          )}
        </p>

        <div className="flex flex-col gap-3 justify-end items-start mt-8 md:mt-auto">
          <a href={heroBio.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 group">
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-[#0A66C2] grayscale group-hover:grayscale-0 transition-all duration-300" />
            <span className="text-base md:text-lg font-medium lowercase">linkedin</span>
          </a>
          <a href={heroBio.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-1">
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-base md:text-lg font-medium lowercase">github</span>
          </a>
          <a href={heroBio.links.email} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 group">
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
    <section className="relative w-full flex flex-col pt-4 md:pt-12 pb-0 mx-auto min-h-[75vh] md:min-h-[80vh] justify-center">      
      <div className="w-full">
        <IntroSection />
        <HeroBio />
      </div>
    </section>
  );
};

export default HeroSection;
