"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "We handle everything from material branding, fascia signage and LED letters to wall cladding, kiosk fabrication, safety signs, and large-format print and mural work for retail, corporate, and industrial clients.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope, but most fabrication and installation projects run between 1–3 weeks from final design approval. We'll give you a clear timeline before work begins.",
  },
  {
    question: "Do you deliver and install nationwide?",
    answer:
      "Yes, we deliver and install across Nigeria. Our in-house team handles fabrication, delivery, and on-site installation end to end.",
  },
  {
    question: "What's your minimum order size?",
    answer:
      "We work with businesses of all sizes, there's no minimum. Whether it's a single door label or a full multi-site rollout, we'll scope it and price it accordingly.",
  },
  {
    question: "What's included in a quote?",
    answer:
      "Every quote covers design, materials, fabrication, delivery, and installation, so there are no surprise costs once a project starts.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background pt-10 pb-26 md:pt-27 md:pb-27">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-balance text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion
          type="single"
          collapsible
          className="mt-12 flex flex-col gap-3"
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="overflow-hidden rounded-xl bg-lime px-6 transition-colors duration-200 hover:border-lime/30 data-[state=open]:border-lime/30"
              >
                <AccordionTrigger className="py-5 text-left md:text-base text-sm font-semibold text-ink-dark hover:no-underline [&>svg]:text-lime [&>svg]:h-5 [&>svg]:w-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-xs md:text-sm leading-relaxed text-ink-dark/90">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
