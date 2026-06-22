"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SeparatorFade } from "../ui/separator";

const STATS = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 60, suffix: "+", label: "Active Clients" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 30, suffix: "+", label: "Cities Served" },
];

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-panel px-5 py-5 transition-colors duration-300 hover:border-lime/50"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(159,230,48,0.16), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 shadow-[0_0_28px_-6px_rgba(159,230,48,0.5)] transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <p className="relative font-display text-2xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-lime sm:text-3xl">
        {count}
        {suffix}
      </p>
      <p className="relative mt-1 text-sm text-neutral-600 dark:text-white/55">
        {label}
      </p>
    </motion.div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-20 sm:py-24 md:px-16 dark:bg-ink-dark"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-60"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(159,230,48,0.12), transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-square overflow-hidden rounded-2xl md:hidden mt-7"
          >
            <Image
              src="/signfix3.png"
              alt="Signfix installation team at work"
              fill
              className="object-cover shadow-sm"
            />
          </motion.div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <h2
              className="font-display text-balance text-2xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl pt-6 md:pt-0
            "
            >
              Premium Signage Backed by 12+ Years of Excellence.
            </h2>

            <p className="text-balance text-xs leading-relaxed text-neutral-600 md:text-sm dark:text-white/55">
              At Signfix, our mission is to deliver high-quality, reliable
              signage that helps brands be seen, remembered, and respected.
              Whether it&apos;s 3D letters, LED displays, or large-scale OOH
              campaigns, we&apos;re dedicated to work that holds up outdoors and
              looks sharp doing it.
            </p>
            <p className="text-balance text-xs leading-relaxed text-neutral-600 md:text-sm dark:text-white/55">
              We combine modern materials, in-house craftsmanship, and a
              client-first approach to set a new standard in signage. Our goal
              is to make every brand impossible to miss, from first sketch to
              final installation.
            </p>
            <div className="md:pt-12 hidden md:block">
              <Button size="lg" className="group">
                Discover More
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-square overflow-hidden hidden md:block rounded-2xl"
          >
            <Image
              src="/signfix3.png"
              alt="Signfix installation team at work"
              fill
              className="object-cover shadow-sm"
            />
          </motion.div>
        </div>

        {/* Stat band */}
        <div className="pt-10 grid grid-cols-2 gap-3 sm:pt-16 sm:grid-cols-4 sm:gap-4">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={0.15 + i * 0.08}
            />
          ))}
        </div>
        <div className="pt-10 md:hidden">
          <Button size="lg" className="group">
            Discover More
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
