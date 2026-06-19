"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Site visit & brief",
    desc: "We come to your location, take measurements, and talk through what the sign needs to do.",
  },
  {
    n: "02",
    title: "Design & quote",
    desc: "You get a visual mockup and a clear price before anything goes into production.",
  },
  {
    n: "03",
    title: "Fabrication",
    desc: "Built in our workshop with the materials your sign actually needs to survive outdoors.",
  },
  {
    n: "04",
    title: "Installation",
    desc: "Our crew installs and wires it on site, then walks you through how it runs.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-ink-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display mt-3 text-balance text-3xl font-extrabold tracking-tight text-ink-dark-foreground sm:text-5xl">
            From measurement to installed sign.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border-t-2 border-white/10 pt-6"
            >
              <span className="font-mono text-sm text-lime-bright">
                {step.n}
              </span>
              <h3 className="font-display mt-3 text-lg font-bold tracking-tight text-ink-dark-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
