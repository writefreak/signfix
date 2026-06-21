"use client";

import { Review } from "@/lib/data/reviews";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ReviewDialogProps {
  review: Review | null;
  index: number | null;
  onClose: () => void;
}

export function ReviewDialog({ review, index, onClose }: ReviewDialogProps) {
  return (
    <AnimatePresence>
      {review && index !== null && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              layoutId={`review-card-${index}`}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-border bg-panel p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-5 top-5 rounded-full p-1.5 text-muted-soft transition-colors hover:bg-border/40 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
              >
                <Stars />
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
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
