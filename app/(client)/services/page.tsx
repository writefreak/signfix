"use client";
import ServicesCard from "@/components/ui/services-card";
import { SERVICES } from "@/lib/data/services-data";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-6xl py-20 md:py-32 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Explore Our Services
          </h2>
          <p className="font-sans text-xs pt-5 md:text-sm text-white/55 not-dark:text-neutral-600 leading-relaxed">
            Click a card to explore each service
          </p>
        </motion.div>

        <div className="mt-10 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] scrollbar-none [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-x-4 md:gap-x-6 pt-2 pb-2">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
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
                <ServicesCard project={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
