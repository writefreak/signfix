"use client";

import { motion } from "framer-motion";
import {
  Type,
  Monitor,
  RectangleHorizontal,
  Sparkles,
  ShoppingBag,
  Printer,
} from "lucide-react";

const SERVICES = [
  {
    icon: Type,
    title: "3D Letters & Acrylic Signs",
    desc: "Built-up letters in acrylic, metal, or lit or unlit foam, sized to be read from the road.",
  },
  {
    icon: Monitor,
    title: "LED & Digital Displays",
    desc: "Programmable digital signage for storefronts, lobbies, and screens that need to update often.",
  },
  {
    icon: RectangleHorizontal,
    title: "Outdoor Billboards",
    desc: "Large-format structures engineered to stay put and stay legible through Lagos weather.",
  },
  {
    icon: Sparkles,
    title: "Neon & LED Signage",
    desc: "Custom neon-style lettering and shapes for storefronts, events, and statement branding.",
  },
  {
    icon: ShoppingBag,
    title: "Shop & Retail Signage",
    desc: "Fascia, window graphics, and interior way-finding that match your brand at every touchpoint.",
  },
  {
    icon: Printer,
    title: "Large Format Printing",
    desc: "Banners, vehicle wraps, and event graphics printed and finished for outdoor durability.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Six ways we make your business visible.
          </h2>
          <p className="mt-4 md:text-sm text-xs text-balance leading-relaxed text-neutral-500">
            Every sign starts as a fabrication problem before it&apos;s a design
            one and we seamlessly handle both.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-lg bg-ink-dark p-7 transition-shadow duration-300 hover:shadow-[0_0_36px_-6px_rgba(159,230,48,0.45)]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 0%, rgba(159,230,48,0.16), transparent 60%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/5 text-lime-bright transition-colors duration-300 group-hover:bg-lime-bright/15">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold tracking-tight text-ink-dark-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-white/55">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
