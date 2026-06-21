"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import WorkCard from "../ui/card";

const PROJECTS = [
  {
    name: "Mabo Group",
    category: "Corporate fascia signage",
    image:
      "https://images.unsplash.com/photo-1757954697151-ac9c4fb20fe1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mirval Offshore Services",
    category: "Office signage & branding",
    image:
      "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Retail storefront, Lekki",
    category: "LED & acrylic letters",
    image:
      "https://images.unsplash.com/photo-1673224980446-ed5dfa1065cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Custom neon installation",
    category: "Event branding",
    image:
      "https://images.unsplash.com/photo-1776333887700-f18525f69901?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Restaurant menu display",
    category: "Indoor digital signage",
    image:
      "https://images.unsplash.com/photo-1635552322112-0194846b0d75?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Industrial site signage",
    category: "Safety & wayfinding",
    image:
      "https://images.unsplash.com/photo-1759390304053-38477bf0ff68?auto=format&fit=crop&w=900&q=80",
  },
];

const SPEED_PX_PER_SEC = 28;
const RESUME_DELAY_MS = 700;

export function Work() {
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  const isPlaying = !isHovering && !isDragging;

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth / 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // wrap x within one set's width, whether moved by autoplay or by a drag
  useEffect(() => {
    if (!trackWidth) return;
    const unsubscribe = x.on("change", (latest) => {
      if (latest <= -trackWidth) x.set(latest + trackWidth);
      else if (latest > 0) x.set(latest - trackWidth);
    });
    return unsubscribe;
  }, [x, trackWidth]);

  useAnimationFrame((_, delta) => {
    if (!isPlaying || !trackWidth) return;
    x.set(x.get() - (SPEED_PX_PER_SEC * delta) / 1000);
  });

  const cards = [...PROJECTS, ...PROJECTS];

  return (
    <section id="work" className="bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Our Selected Work
          </h2>
        </div>

        <div className="mt-10 mb-10" aria-hidden="true" />

        <div
          className="overflow-hidden py-2"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragMomentum={false}
            onDragStart={() => {
              if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
              setIsDragging(true);
            }}
            onDragEnd={() => {
              resumeTimeout.current = setTimeout(
                () => setIsDragging(false),
                RESUME_DELAY_MS,
              );
            }}
            className="flex gap-x-6"
          >
            {cards.map((project, i) => (
              <motion.div
                key={`${project.name}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % PROJECTS.length) * 0.06,
                }}
                className="flex-none"
              >
                <WorkCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
