"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCarouselProps {
  images: string[];
  alt: string;
  /** ms between auto-advance, set 0 to disable */
  autoPlayInterval?: number;
}

export default function ServiceCarousel({
  images,
  alt,
  autoPlayInterval = 4500,
}: ServiceCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = images.length;

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const goNext = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const goPrev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  // Auto-rotate, paused while the user is actively interacting via arrows.
  useEffect(() => {
    if (!autoPlayInterval || count <= 1) return;

    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % count);
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlayInterval, count, index]);

  const handleArrowClick = (dir: -1 | 1) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (dir === 1) goNext();
    else goPrev();
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <div className="relative w-full aspect-4/3 md:aspect-square overflow-hidden rounded-2xl bg-neutral-900">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${alt} — image ${index + 1} of ${count}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: "easeOut" }}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => handleArrowClick(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => handleArrowClick(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => {
                  if (timerRef.current) clearInterval(timerRef.current);
                  goTo(i, i > index ? 1 : -1);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
