"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hammer, Truck, Award, Workflow, BadgeCheck } from "lucide-react";

const REASONS = [
  {
    icon: Hammer,
    title: "Skilled In-House Craftsmen",
    desc: "Every piece built and finished by our own trained team.",
  },
  {
    icon: Truck,
    title: "Quick Turnaround & Nationwide Delivery",
    desc: "Fast project timelines with delivery to any state.",
  },
  {
    icon: Award,
    title: "Trusted by Top Brands",
    desc: "Relied on by businesses and developers across Nigeria.",
  },
  {
    icon: Workflow,
    title: "End-to-End Project Execution",
    desc: "From design to installation, handled fully in-house.",
  },
  {
    icon: BadgeCheck,
    title: "Competitive Pricing, Uncompromised Quality",
    desc: "Fair pricing that never cuts corners on quality.",
  },
];

export function Process() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden">
      {/*
       * ── MOBILE (default) ────────────────────────────────────────────────
       * Full-bleed background photo + overlay, cards stacked on top.
       * Everything inside this wrapper is shown only below lg.
       */}
      <div className="relative lg:hidden py-24">
        <Image
          src="/signfix 2.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink-dark/50" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight text-ink-dark-foreground sm:text-5xl">
            Why Choose Us
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl bg-black/40 border border-neutral-600 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-2xl transition-colors duration-300 hover:border-lime-bright/40 hover:bg-white/15"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(159,230,48,0.14), transparent 65%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-lime-bright/10 ring-1 ring-lime-bright/30">
                    <Icon className="h-5 w-5 text-lime-bright" />
                  </div>
                  <h3 className="font-display relative mt-4 text-sm font-bold tracking-tight text-ink-dark-foreground">
                    {reason.title}
                  </h3>
                  <p className="relative mt-2 text-xs leading-relaxed text-white/55">
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/*
       * ── DESKTOP (lg+) ───────────────────────────────────────────────────
       * Two-column split: dark left panel (solid lime cards) + right image strip.
       */}
      <div className="hidden lg:flex min-h-150">
        {/* Left panel — dark background, cards */}
        <div className="flex-1 bg-ink-dark py-24 px-12 xl:px-16 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-display text-balance text-4xl xl:text-5xl font-extrabold tracking-tight text-ink-dark-foreground"
          >
            Why Choose Us
          </motion.h2>

          <div className="mt-10 flex flex-col gap-3">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl bg-lime-bright px-6 py-5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="relative flex items-start gap-4">
                    <div className="mt-0.5 shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-ink-dark/20">
                      <Icon className="h-4 w-4 text-ink-dark" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold tracking-tight text-ink-dark">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-ink-dark/70">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right panel — image strip, no overlay */}
        <div className="w-[45%] xl:w-[42%] relative shrink-0">
          <Image
            src="/wall.png"
            alt="Signfix workshop"
            fill
            sizes="40vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
