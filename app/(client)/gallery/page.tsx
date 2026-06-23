"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FanGallery from "@/components/gallery/3d-fan-gallery";
import DesktopGallery from "@/components/gallery/gallery";

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-0 py-28 dark:bg-ink-dark md:py-32">
      {/* Header */}
      <div className="z-20 mb-5 flex flex-col items-center gap-4 px-6 text-center">
        <h1 className="font-display text-2xl font-black leading-none tracking-tight text-foreground md:text-5xl">
          Explore Our
          <br />
          Timeless Collection
        </h1>
        <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
          Our a collection of branded art and design merged to shape what we
          do.{" "}
        </p>
      </div>
      <FanGallery />{" "}
      <div className="flex pt-10 items-center justify-center">
        <DesktopGallery items={IMAGES} />
      </div>
    </div>
  );
}

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
