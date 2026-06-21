"use client";

import { motion } from "framer-motion";
import WorkCard from "../ui/card";

const SERVICES = [
  {
    name: "Wall Cladding",
    category: "Durable, weather-resistant finishes",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "3D Model & Architectural Designs",
    category: "Concept to visual design",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Signage Construction & Fabrication",
    category: "Full-service safety signage",
    image:
      "https://images.unsplash.com/photo-1757954697151-ac9c4fb20fe1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Digital Display Screen & Light Box",
    category: "Advanced digital branding",
    image:
      "https://images.unsplash.com/photo-1635552322112-0194846b0d75?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Office Wall Decor Branding",
    category: "Interiors that transform",
    image:
      "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Print Media & Design",
    category: "Impressive printing & design",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Safety Signs",
    category: "Industrial-grade safety signage",
    image:
      "https://images.unsplash.com/photo-1759390304053-38477bf0ff68?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kiosk Fabrication & Construction",
    category: "Custom kiosk builds",
    image:
      "https://images.unsplash.com/photo-1673224980446-ed5dfa1065cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Wall Mounted Signs & Door Label",
    category: "Wayfinding & door branding",
    image:
      "https://images.unsplash.com/photo-1776333887700-f18525f69901?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Wall Mural Art Printing",
    category: "Large-format mural printing",
    image:
      "https://images.unsplash.com/photo-1776333887700-f18525f69901?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Fuel Station Canopy Construction",
    category: "High-quality canopy structures",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-14 sm:py-10 md:pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Our Services
          </h2>
        </motion.div>

        {/* <div className="mt-10 -mx-6 lg:-mx-8 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"> */}
        <div className="mt-10 -mx-6 lg:-mx-8 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-x-4 md:gap-x-6 px-6 lg:px-8 pb-2">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: (i % SERVICES.length) * 0.05,
                }}
                whileHover={{ y: -4 }}
                className="flex-none"
              >
                <WorkCard project={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
