// useStickyScroll.ts
import { RefObject } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export const useStickyScroll = (
  ref: RefObject<HTMLElement>
): {
  blur: MotionValue<string>;
  bg: MotionValue<string>;
} => {
        const { scrollYProgress } = useScroll({
          target: ref,
          // Triggers when top of element hits top of viewport ("start start")
          offset: ["start start", "end start"],
          layoutEffect: false,
        });

        // Binary transform: 0 when not stuck, 1 when stuck
        const isStuck = useTransform(scrollYProgress, (latest: number): number =>
            latest > 0 ? 1 : 0
          );

        // Map to blur and background
        const blur = useTransform(isStuck, [0, 1], ["0px", "16px"]);
        const bg = useTransform(
          isStuck,
          [0, 1],
          ["rgba(255,255,255,0)", "rgba(255,255,255,0.5)"]
        );

        return { blur, bg };
};
