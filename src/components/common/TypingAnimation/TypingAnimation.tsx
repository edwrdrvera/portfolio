import { useEffect, useState } from "react";

const GREETING = "hello there! / ようこそ!";
const TYPE_INTERVAL_MS = 50;

const TypingAnimation = () => {
  const [length, setLength] = useState(0);
  const isDone = length >= GREETING.length;

  useEffect(() => {
    if (isDone) return;
    const intervalId = setInterval(() => setLength((l) => l + 1), TYPE_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, [isDone]);

  return (
    <div className="font-normal tracking-tight">
      {GREETING.slice(0, length)}
      <span className="animate-pulse text-gray-400 font-light">|</span>
    </div>
  );
};

export default TypingAnimation;
