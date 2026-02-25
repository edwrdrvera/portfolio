import { useEffect, useState } from "react";

const TypingAnimation = () => {
  const text = "Hello there! / ようこそ!";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-medium text-gray-900">
      {displayedText}
      <span className="animate-pulse text-gray">|</span>
    </div>
  );
};

export default TypingAnimation;
