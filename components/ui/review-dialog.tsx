import { REVIEWS } from "@/lib/data/reviews";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X } from "lucide-react";
import React, { useRef, useState } from "react";

const ReviewDialog = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const active = activeIndex !== null ? REVIEWS[activeIndex] : null;
  return (
    <div>
      <AnimatePresence>
        {formOpen && (
          <>
            <motion.div
              key="form-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setFormOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 32,
                  mass: 0.7,
                }}
                className="relative w-full max-w-md rounded-2xl border border-border bg-panel p-8 shadow-lg shadow-black/10"
              >
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-muted-soft transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/40"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <h3 className="font-display text-xl font-bold text-foreground">
                  Leave a Review
                </h3>
                <p className="mt-1 text-sm text-muted-soft">
                  Tell us about your experience working with us.
                </p>

                <form
                  className="mt-6 flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // wire up to your submit endpoint here
                    setFormOpen(false);
                  }}
                >
                  <div className="flex gap-1 text-lime">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="appearance-none bg-transparent focus:outline-none"
                        aria-label={`Rate ${idx + 1} star`}
                      >
                        <Star
                          className="h-5 w-5 fill-current opacity-40 transition-opacity hover:opacity-100"
                          strokeWidth={0}
                        />
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-soft focus:border-lime/40"
                  />
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    className="w-full rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-soft focus:border-lime/40"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Your review"
                    className="w-full resize-none rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-soft focus:border-lime/40"
                  />

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-2xl bg-lime px-4 py-2.5 text-sm font-semibold text-ink-dark transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/40"
                  >
                    Submit Review
                  </button>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReviewDialog;
