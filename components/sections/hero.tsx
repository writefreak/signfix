"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/image-placeholder";

const HEADLINE = "Premium Signages That Get You Seen";

const GRID_IMAGES = [
  { label: "3D letter installation" },
  { label: "Retail storefront signage" },
  { label: "Neon brand lettering" },
  { label: "Outdoor billboard install" },
];

export function Hero() {
  const letters = HEADLINE.split("");

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--foreground) 0, var(--foreground) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, var(--foreground) 0, var(--foreground) 1px, transparent 1px, transparent 40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-20 sm:pb-24 lg:px-8">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">
          {/* LHS — text + buttons */}
          <div className="flex flex-col lg:w-1/2 lg:shrink-0">
            <h1 className="font-display text-balance text-[35px] text-center md:text-left font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{
                    opacity: [0, 1, 0.3, 1],
                    filter: [
                      "blur(6px)",
                      "blur(0px)",
                      "blur(2px)",
                      "blur(0px)",
                    ],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.035,
                    times: [0, 0.5, 0.7, 1],
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-6 max-w-xl md:block hidden text-balance text-xs md:text-sm leading-relaxed text-neutral-500"
            >
              Signfix designs, fabricates, and installs the signage that makes
              your business impossible to miss, from 3D letters and neon to LED
              displays and outdoor billboards, built to hold up outdoors and
              look sharp doing it
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-10 flex flex-row justify-center md:justify-start md:flex-wrap items-center gap-4"
            >
              <Button size="lg" className="group">
                Get a quote
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button size="lg" variant="outline">
                See our work
              </Button>
            </motion.div>
          </div>

          {/* RHS — 2x2 image grid */}
          <div className="relative grid grid-cols-2 gap-3 h-100 sm:gap-4 lg:w-1/2">
            {GRID_IMAGES.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
                className={
                  "overflow-hidden rounded-lg border border-border" +
                  (i === 0 ? " ring-1 ring-lime/30" : "")
                }
              >
                <ImagePlaceholder
                  aspect="square"
                  label={img.label}
                  className="transition-transform duration-500 hover:scale-[1.04]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
