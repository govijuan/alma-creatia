"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef, ForwardedRef, useRef, useEffect } from "react";
// import { useStickyScroll } from "@/lib/useStickyRoll";

interface StickySectionProps {
  children: React.ReactNode;
  index: number;
  id?: string;
  className?: string;
}

// TypeScript infers the ref type from the generic <HTMLDivElement, Props>
const StickySection = ({ children, index, id, className = "" }: StickySectionProps) => {
  // Create ref internally
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref, // Now it's a RefObject, no type error
    offset: ["start start", "end start"],
  });

  const isStuck = useTransform(scrollYProgress, (latest: number): number =>
    latest > 0 ? 1 : 0
  );

  const blur = useTransform(isStuck, [0, 1], ["0px", "16px"]);
  const bg = useTransform(
    isStuck,
    [0, 1],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.5)"]
  );

  return (
    <motion.div
      ref={ref}
      id={id}
      className={`sticky top-0 w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 pointer-events-none ${className}`}
      style={{
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        backgroundColor: bg,
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center p-10 text-white pointer-events-auto">
        {children}
      </div>
      <span className="mt-8 text-sm opacity-60">{index + 1}</span>
    </motion.div>
  );
};

StickySection.displayName = "StickyHeader";

export default StickySection
