import profilePic from "@/assets/edward.webp";
import TypingAnimation from "../TypingAnimation/TypingAnimation";

const IntroSection = () => {
  return (
    <div className="flex align-baseline flex-col">
      <div className="font-light text-sm">/yooh·ko·su/ /ようこそ/</div>
      <TypingAnimation />
    </div>
  );
};

const HeroBio = () => {
  return (
    <div className="mt-4 flex flex-col items-center gap-8 md:flex-row">
      <div className="w-full max-w-3xs shrink-0">
        <img
          src={profilePic}
          alt="Edward"
          className="h-80 w-auto object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="font-medium mb-4 text-2xl leading-7 text-gray-800">
          Edward is a Software Developer that specializes on React and Express.
          He aims to create solutions and software that solve real-world
          problems. He is currently working at WCLC as a Software Developer
          Intern and is graduating from RRC in Spring 2026.
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <div>
        <IntroSection />
        <HeroBio />
      </div>
    </>
  );
};

export default HeroSection;
