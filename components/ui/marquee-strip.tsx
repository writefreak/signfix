"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ITEMS = [
  "Banners",
  "Brochure Display",
  "Flags",
  "Snap Frames",
  "Outdoor Display Boards",
  "Pos Signages",
  "Promotional Tables",
  "Roll-up Stands",
  "Beach Umbrella",
];

export function MarqueeStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Mobile rows are narrower, so the same percentage range covers far fewer
  // pixels. Pull the range wider below the sm breakpoint to compensate.
  const [throwPercent, setThrowPercent] = useState(10);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const updateThrow = () => {
      setThrowPercent(mediaQuery.matches ? 40 : 10);
    };

    updateThrow();
    mediaQuery.addEventListener("change", updateThrow);
    return () => mediaQuery.removeEventListener("change", updateThrow);
  }, []);

  // Row 1 scrolls left-to-right as the page scrolls down (moves rightward / +x)
  const xTop = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${throwPercent}%`, `${throwPercent}%`],
  );
  // Row 2 scrolls in the opposite direction (moves leftward / -x)
  const xBottom = useTransform(
    scrollYProgress,
    [0, 1],
    [`${throwPercent}%`, `-${throwPercent}%`],
  );

  return (
    <section
      ref={containerRef}
      className="overflow-hidden border-y border-border dark:bg-white bg-background py-14 sm:py-14"
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        <motion.div
          style={{ x: xTop }}
          className="flex w-max items-center gap-8  whitespace-nowrap"
        >
          {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={`top-${i}`}
              className="font-display text-2xl dark:text-black font-extrabold uppercase tracking-tight text-foreground/90 sm:text-3xl lg:text-2xl"
            >
              {item}
              <span className="mx-8 text-lime">/</span>
            </span>
          ))}
        </motion.div>

        {/* <motion.div
          style={{ x: xBottom }}
          className="flex w-max items-center gap-8 whitespace-nowrap"
        >
          {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={`bottom-${i}`}
              className="font-display text-2xl font-extrabold uppercase tracking-tight text-muted-soft sm:text-3xl lg:text-4xl"
            >
              {item}
              <span className="mx-8 text-safety">/</span>
            </span>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
