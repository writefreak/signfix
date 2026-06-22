"use client";

import { motion } from "framer-motion";

const LOGOS = [
  "/a.png",
  "/b.png",
  "/d.png",
  "/e.png",
  "/f.png",
  "/g.png",
  "/h.png",
  "/i.png",
  "/j.png",
  "/k.png",
  "/l.png",
  "/m.png",
  "/n.png",
  "/o.png",
  "/p.png",
  "/q.png",
  "/r.png",
];

export function ClientLogoStrip() {
  return (
    <section className="w-full overflow-hidden border-y border-border bg-white py-10 md:py-14">
      <div className="relative">
        {/* Edge fades so logos don't hard-cut at the viewport edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <motion.div
          className="flex w-max items-center gap-12 md:gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Render the set twice back-to-back so the -50% loop point
              is seamless (each half is identical, so the loop never
              shows a gap or jump). */}
          {[...LOGOS, ...LOGOS].map((src, i) => (
            <div key={i} className="relative h-12 w-auto shrink-0 md:h-16">
              <img
                src={src}
                alt=""
                draggable={false}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
