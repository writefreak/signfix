"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X, PenLine, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS } from "@/lib/data/reviews";

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const active = activeIndex !== null ? REVIEWS[activeIndex] : null;

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const step = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section
      id="reviews"
      className="bg-background py-20 md:py-1 md:pt-0 md:pb-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              What Our Clients Are Saying.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-lime px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-lime/40 hover:bg-lime/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/40"
            >
              <PenLine className="h-3.5 w-3.5" />
              Leave a Review
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous reviews"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-lime/10 text-muted-soft transition-colors duration-200 hover:border-lime/40 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next reviews"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-lime/10 text-muted-soft transition-colors duration-200 hover:border-lime/40 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-14 -mx-6 lg:-mx-8 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-6 px-6 lg:px-8 pt-2 pb-2">
            {REVIEWS.map((review, i) => (
              <motion.button
                type="button"
                data-review-card
                key={review.name}
                layoutId={`review-card-${i}`}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="group w-80 shrink-0 snap-start appearance-none rounded-lg border border-border bg-panel p-7 text-left shadow-sm transition-shadow duration-300 ease-out hover:shadow-md hover:shadow-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/40"
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
                <p className="mt-5 line-clamp-3 md:text-sm text-xs text-balance leading-relaxed text-foreground">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="font-sans text-xs text-muted-soft">
                    {review.company}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Full review dialog */}
      <AnimatePresence>
        {active && activeIndex !== null && (
          <>
            <motion.div
              key="review-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setActiveIndex(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div
                layoutId={`review-card-${activeIndex}`}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 36,
                  mass: 0.7,
                }}
                className="relative w-full max-w-lg rounded-2xl border border-border bg-panel p-8 shadow-lg shadow-black/10"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-muted-soft transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/40"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <div className="flex gap-0.5 text-lime">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-current"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  <p className="mt-5 text-balance text-lg leading-relaxed text-foreground">
                    &ldquo;{active.quote}&rdquo;
                  </p>

                  <div className="mt-7 border-t border-border pt-5">
                    <p className="text-sm font-semibold text-foreground">
                      {active.name}
                    </p>
                    <p className="font-mono text-xs text-muted-soft">
                      {active.company}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Leave a review dialog */}
    </section>
  );
}
