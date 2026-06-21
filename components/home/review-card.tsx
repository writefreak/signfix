"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Review } from "@/lib/data/reviews";

interface ReviewCardProps {
  review: Review;
  index: number;
  onSelect: () => void;
  className?: string;
}

export function ReviewCard({
  review,
  index,
  onSelect,
  className,
}: ReviewCardProps) {
  return (
    <motion.div
      layoutId={`review-card-${index}`}
      onClick={onSelect}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-border bg-panel p-7 transition-colors hover:border-lime/40",
        className,
      )}
    >
      <div>
        <Stars />
        <p className="mt-5 line-clamp-3 text-balance leading-relaxed text-foreground">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-semibold text-foreground">{review.name}</p>
        <p className="font-mono text-xs text-muted-soft">{review.company}</p>
      </div>
    </motion.div>
  );
}
