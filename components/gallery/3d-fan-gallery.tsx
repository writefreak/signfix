import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    alt: "Mountain peaks",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?q=80&w=800&auto=format&fit=crop",
    alt: "Airplane over palms",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    alt: "Red autumn landscape",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    alt: "Autumn trees reflection",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop",
    alt: "Modern villa pool",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1485841938031-1bf81239b815?q=80&w=800&auto=format&fit=crop",
    alt: "Foggy monolith",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=800&auto=format&fit=crop",
    alt: "Misty green mountains",
  },
];

function getCardStyle(offset: number) {
  const abs = Math.abs(offset);
  if (abs > 3) return null;
  return {
    rotateY: offset * 38,
    translateX: offset * 140,
    translateZ: abs === 0 ? 0 : -abs * 120,
    scale: abs === 0 ? 1 : 1 - abs * 0.08,
    opacity: abs > 2 ? 0.4 : 1 - abs * 0.15,
    zIndex: 10 - abs,
  };
}

const FanGallery = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(IMAGES.length - 1, i + 1));
  return (
    <div className="md:hidden ">
      <div
        className="relative flex h-60 w-full items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {IMAGES.map((img, i) => {
          const offset = i - activeIndex;
          const cardStyle = getCardStyle(offset);
          if (!cardStyle) return null;
          const { rotateY, translateX, translateZ, scale, opacity, zIndex } =
            cardStyle;

          return (
            <motion.div
              key={img.id}
              onClick={() => setActiveIndex(i)}
              animate={{
                rotateY,
                x: translateX,
                z: translateZ,
                scale,
                opacity,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="absolute w-[clamp(140px,18vw,210px)] h-[clamp(200px,26vw,310px)] overflow-hidden rounded-2xl"
              style={{
                cursor: offset === 0 ? "default" : "pointer",
                zIndex,
                transformStyle: "preserve-3d",
                boxShadow:
                  offset === 0
                    ? "0 24px 60px rgba(0,0,0,0.18)"
                    : "0 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
                className="h-full w-full select-none object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="z-20 mt-7 flex items-center gap-4">
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-30 hover:bg-muted dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-lime"
                  : "w-2 bg-border dark:bg-white/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={activeIndex === IMAGES.length - 1}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-30 hover:bg-muted dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default FanGallery;
