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
    question: "What kind of signage projects do you take on?",
    answer:
      "We handle everything from fascia signage and LED letters to wall cladding, kiosk fabrication, safety signs, and large-format print and mural work — for retail, corporate, and industrial clients.",
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
    question: "Can you work from our existing brand guidelines?",
    answer:
      "Absolutely. Send us your brand assets and we'll produce 3D mockups for sign-off before anything goes into fabrication.",
  },
  {
    question: "What's included in a quote?",
    answer:
      "Every quote covers design, materials, fabrication, delivery, and installation, so there are no surprise costs once a project starts.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 sm:pt-20">
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
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-ink-dark hover:no-underline [&>svg]:text-lime [&>svg]:h-5 [&>svg]:w-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-ink-dark/90">
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
