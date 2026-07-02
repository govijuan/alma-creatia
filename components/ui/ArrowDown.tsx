"use client";

import { CircleArrowDown } from "lucide-react";
import { cn } from "@/lib/utils"; // your cn utility (or just use template literals)

interface AnimatedCircleArrowDownProps {
  size?: number;
  className?: string;
  color?: string;
  bounceDuration?: string;
  targetId?: string; // ← New: ID of the element to scroll to
  offset?: number; // ← Optional: pixels to offset from the top (e.g. for fixed navbar)
  onClick?: () => void; // ← Optional: additional custom onClick
}

export default function ArrowDown({
  size = 32,
  className,
  color = "currentColor",
  bounceDuration = "1.4s",
  targetId,
  offset = 0,
  onClick,
}: AnimatedCircleArrowDownProps) {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const yPosition =
          element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: yPosition,
          behavior: "smooth",
        });
      }
    }

    // Call any additional onClick passed by parent
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Scroll to ${targetId || "section"}`}
      className={cn(
        "animate-bounce",
        // Custom Tailwind animation for smoother looping
        "[animation-duration:var(--bounce-duration,1.2s)]",
        className,
      )}
    >
      <CircleArrowDown
        size={size}
        color={color}
        className={cn(
          "animate-gentle-bob cursor-pointer",
          "[animation-duration:var(--bounce-duration)]",
          className, // allow overriding animation if needed
        )}
        style={
          {
            "--bounce-duration": bounceDuration,
          } as React.CSSProperties
        }
      />
    </button>
  );
}
