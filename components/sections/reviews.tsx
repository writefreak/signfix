"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "They handled our office signage from design to install without us having to chase anything. The letters still look new a year later.",
    name: "Facility Manager",
    company: "Offshore services company, Lagos",
  },
  {
    quote:
      "Fast turnaround on our storefront sign and the LED work has held up through the rainy season with zero issues.",
    name: "Store Owner",
    company: "Retail outlet, Lekki",
  },
  {
    quote:
      "Good communication throughout and the final installation matched the mockup almost exactly.",
    name: "Operations Lead",
    company: "Logistics company",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            What Our Clients Are Saying.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-lg border border-border bg-panel p-7"
            >
              <div className="flex gap-0.5 text-lime">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-3.5 w-3.5 fill-current"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="mt-5 text-balance leading-relaxed text-foreground">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {review.name}
                </p>
                <p className="font-mono text-xs text-muted-soft">
                  {review.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
