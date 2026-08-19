"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

interface StickySectionProps {
  children: React.ReactNode;
  index: number;
  id?: string;
  className?: string;
  /** Scroll distance (px) after the card sticks until blur is fully applied */
  blurDistance?: number;
}

const StickySection = ({
  children,
  index,
  id,
  className = "",
  blurDistance = 220, // short & finishes early
}: StickySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const stickyStart = rect.top + window.scrollY;

      setStart(stickyStart);
      setEnd(stickyStart + blurDistance);
    };

    update();

    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    if (ref.current) ro.observe(ref.current);

    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [blurDistance]);

  const { scrollY } = useScroll();

  const progress = useTransform(scrollY, [start, end], [0, 1], {
    clamp: true,
  });

  const blurAmount = useTransform(progress, [0, 1], [0, 16]);
  const blur = useMotionTemplate`blur(${blurAmount}px)`;

  const bg = useTransform(
    progress,
    [0, 1],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.05)"]
  );

  const border = useTransform(
    progress,
    [0, 1],
    ["0.5px solid rgba(255,255,255,0)", "0.5px solid rgba(255,255,255,0.1)"]
  );

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{
        zIndex: 20 + index, // later cards sit on top
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        backgroundColor: bg,
        border: border,
      }}
      className={`sticky top-1/8 h-[75vh] rounded-2xl overflow-hidden pointer-events-none ${className}`}
    >
      <div className="w-full h-full flex flex-col justify-center items-center p-10 text-white pointer-events-auto">
        {children}
      </div>
      <span className="mt-8 text-sm opacity-60">{index + 1}</span>
    </motion.div>
  );
};

export default StickySection;
