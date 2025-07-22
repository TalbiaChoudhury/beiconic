"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

/**
 * A component that types an array of strings sequentially.
 * @param {Object} props - The component props.
 * @param {string[]} props.lines - An array of strings to be typed.
 * @param {Object} [props.style] - Optional styles to apply to each line.
 * @param {number} [props.speed=50] - The typing speed.
 */
export default function SequentialTyper({ lines, ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const style = props.style || {
    fontFamily: "var(--font-geist-mono)",
    fontSize: "14px",
  };
  const speed = props.speed || 50;
  const pause = props.pause || 500;

  return (
    <>
      {lines.map((line, index) => {
        const isLastLine = index === lines.length - 1;
        const isCurrentLine = index === currentIndex;
        const isCompletedLine = index < currentIndex;

        // This line is completed and is NOT the last line. Render it as static text.
        if (isCompletedLine && !isLastLine) {
          return (
            <li key={index} style={{ marginTop: index > 0 ? "8px" : "0" }}>
              {line}
            </li>
          );
        }

        // This line is the one currently being typed, OR it is the last line
        // (which always remains an animation component to keep its cursor).
        if (isCurrentLine || (isLastLine && isCompletedLine)) {
          const isFinalPersistentAnimation =
            isLastLine && currentIndex >= lines.length;

          return (
            <li key={index} style={{ marginTop: index > 0 ? "8px" : "0" }}>
              <TypeAnimation
                sequence={
                  isFinalPersistentAnimation
                    ? [line] // Just show the final text
                    : [
                        // Only pause if it's not the very first line
                        ...(index > 0 ? [pause] : []),
                        line,
                        // After typing, advance to the next line
                        () => setCurrentIndex(index + 1),
                      ]
                }
                speed={speed}
                cursor={true}
                style={style}
                // Keep the cursor blinking on the final line
                repeat={isFinalPersistentAnimation ? Infinity : 0}
              />
            </li>
          );
        }

        // This line hasn't been typed yet. Render nothing.
        return null;
      })}
    </>
  );
}