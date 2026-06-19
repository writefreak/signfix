"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/image-placeholder";

const PROJECTS = [
  { name: "Mabo Group", category: "Corporate fascia signage" },
  { name: "Mirval Offshore Services", category: "Office signage & branding" },
  { name: "Retail storefront, Lekki", category: "LED & acrylic letters" },
  { name: "Custom neon installation", category: "Event branding" },
  { name: "Restaurant menu display", category: "Indoor digital signage" },
  { name: "Industrial site signage", category: "Safety & wayfinding" },
];

export function Work() {
  return (
    <section id="work" className="bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Our Selected Work
            </h2>
          </div>
          {/* <p className="font-mono text-xs text-muted-soft">
            {PROJECTS.length} projects shown
          </p> */}
        </div>

        <div className="mt-10 mb-10" aria-hidden="true" />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg border border-border">
                <ImagePlaceholder
                  aspect="video"
                  label={project.name}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
