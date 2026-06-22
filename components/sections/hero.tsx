"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HEADLINE = "Premium Signages That Get You Seen";

export function Hero() {
  const letters = HEADLINE.split("");

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background image — covers full hero, mobile and desktop */}
      <Image
        src="/signfix 2.png"
        alt="Signfix signage installation"
        fill
        priority
        className="object-cover brightness-50 "
      />

      {/* Subtle black gradient, left to right, so text stays legible over the image */}
      <div
        className=" absolute inset-0 bg-linear-to-r from-black/85 from-30% to-transparent to-100%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-44 pb-40 sm:pt-40 sm:pb-36 lg:px-8 lg:pt-48 lg:pb-44">
        {/* Text + buttons — pinned left, never centered as a flex group */}
        <div className="flex flex-col md:text-left lg:max-w-xl">
          <h1 className="font-display text-balance text-[35px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{
                  opacity: [0, 1, 0.3, 1],
                  filter: ["blur(6px)", "blur(0px)", "blur(2px)", "blur(0px)"],
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
            className="mt-6 max-w-xl block text-balance text-xs md:text-sm leading-relaxed text-neutral-300"
          >
            Signfix designs, fabricates, and installs the signage that makes
            your business impossible to miss, from 3D letters and neon to LED
            displays and outdoor billboards, built to hold up outdoors and look
            sharp doing it
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-10 flex flex-row flex-wrap items-center gap-4"
          >
            <Button size="lg" className="group">
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lime">
              See our work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
