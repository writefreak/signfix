"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Process } from "@/components/sections/process";
import ProcessStepCard from "@/components/about/process-step-card";

const STATS = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 60, suffix: "+", label: "Active Clients" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 30, suffix: "+", label: "Cities Served" },
];

export default function page() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-20 md:pt-34 md:pb-28 md:px-16 dark:bg-ink-dark"
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
          <div className="md:space-y-10 space-y-5">
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
                About Us
              </h2>

              <p className="text-balance text-xs leading-relaxed text-neutral-600 md:text-sm dark:text-white/55">
                At Signfix, our mission is to deliver high-quality, reliable
                signage that helps brands be seen, remembered, and respected.
                Whether it&apos;s 3D letters, LED displays, or large-scale OOH
                campaigns, we&apos;re dedicated to work that holds up outdoors
                and looks sharp doing it.
              </p>
            </motion.div>
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
                Our Mission
              </h2>

              <p className="text-balance text-xs leading-relaxed text-neutral-600 md:text-sm dark:text-white/55">
                Our Mission At Signfix, we believe visibility drives growth. Our
                mission is to help brands be seen, remembered and respected
                through high impact designs and reliable advertising solutions.
                We combine modern technology innovative material to Create
                results that go beyond aesthetics, we create signs and campaigns
                that sells your brand.
              </p>

              <div className="md:pt-12 hidden md:block">
                <Button size="lg" className="group">
                  Request A Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
              </div>
            </motion.div>
          </div>

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

        <div className="pt-10 md:hidden">
          <Button size="lg" className="group">
            Request A Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
      <div className="py-10 md:py-20 flex flex-col gap-4 md:gap-6 px-6">
        <h2 className="font-display text-balance text-2xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl pt-6 md:pt-0">
          Our Work Process
        </h2>
        <ProcessStepCard />
      </div>
    </section>
  );
}
