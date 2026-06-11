import { useMemo, useState } from "react";

type AnimateOn = "hover" | "load";

interface DecryptedTextProps {
  text: string;
  animateOn?: AnimateOn;
  sequential?: boolean;
  speed?: number;
  maxIterations?: number;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
}

const ENCRYPT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const getRandomChar = () =>
  ENCRYPT_CHARS[Math.floor(Math.random() * ENCRYPT_CHARS.length)];

const DecryptedText = ({
  text,
  animateOn = "hover",
  sequential = false,
  speed = 40,
  maxIterations = 20,
  className = "decrypted",
  encryptedClassName = "encrypted",
  parentClassName = "decrypted-text-wrapper",
}: DecryptedTextProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [iteration, setIteration] = useState(0);

  const chars = useMemo(() => text.split(""), [text]);

  const displayText = useMemo(() => {
    if (!isHovering || animateOn !== "hover") {
      return chars.map((char, index) => (
        <span key={index} className={className}>
          {char}
        </span>
      ));
    }

    return chars.map((char, index) => {
      const showReal = sequential
        ? index < iteration
        : Math.random() * maxIterations < iteration;
      return (
        <span key={index} className={showReal ? className : encryptedClassName}>
          {showReal ? char : getRandomChar()}
        </span>
      );
    });
  }, [animateOn, chars, className, encryptedClassName, isHovering, iteration, maxIterations, sequential]);

  const handleMouseEnter = () => {
    if (animateOn !== "hover") return;
    setIsHovering(true);
    setIteration(0);

    const intervalId = window.setInterval(() => {
      setIteration((prev) => {
        if (prev >= maxIterations) {
          window.clearInterval(intervalId);
          return prev;
        }
        return prev + 1;
      });
    }, speed);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIteration(0);
  };

  return (
    <div
      className={parentClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </div>
  );
};

export default DecryptedText;
