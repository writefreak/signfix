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

  const [throwPercent, setThrowPercent] = useState(10);
  const [copies, setCopies] = useState(3);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const update = () => {
      if (mediaQuery.matches) {
        setThrowPercent(40);
        setCopies(10);
      } else {
        setThrowPercent(10);
        setCopies(3);
      }
    };
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const xTop = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${throwPercent}%`, `${throwPercent}%`],
  );

  return (
    <section
      ref={containerRef}
      className="overflow-hidden border-y border-border dark:bg-white bg-background py-12 md:py-14"
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        <motion.div
          style={{ x: xTop }}
          className="flex w-max items-center gap-8 whitespace-nowrap"
        >
          {Array.from({ length: copies }, (_, c) =>
            ITEMS.map((item, i) => (
              <span
                key={`top-${c}-${i}`}
                className="font-display text-2xl dark:text-black font-extrabold uppercase tracking-tight text-foreground/90 sm:text-3xl lg:text-2xl"
              >
                {item}
                <span className="mx-8 text-lime">/</span>
              </span>
            )),
          )}
        </motion.div>
      </div>
    </section>
  );
}
