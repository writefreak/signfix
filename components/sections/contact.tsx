"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink-dark py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(159,230,48,0.12), transparent 45%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display mt-3 max-w-md text-balance text-3xl font-extrabold tracking-tight text-ink-dark-foreground sm:text-4xl">
              Tell us what your business needs to look like from the road.
            </h2>
            <p className="mt-5 max-w-md text-balance leading-relaxed text-white/55">
              Send us a few details about your space and what you have in mind.
              We&apos;ll get back with next steps and a rough quote.
            </p>
            <div className="mt-9">
              <Button
                size="lg"
                className="group bg-lime-bright text-ink-dark hover:bg-lime-bright/90"
              >
                Request a quote
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 border-t border-white/10 pt-8 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0"
          >
            {contactrow.map((c, index) => (
              <ContactRow key={index} icon={c.icon} value={c.value} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label?: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/5 text-lime-bright">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-mono text-sm md:text-[11px] uppercase tracking-widest text-white/40">
          {label}
        </p>
        <p className="mt-0.5 font-medium text-xs md:text-sm text-ink-dark-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}

const contactrow = [
  {
    icon: Phone,
    value: "+234-903-336-6660",
  },
  {
    icon: Mail,
    value: "info@signfix.ng",
  },
  {
    icon: Mail,
    value: "support@signfix.ng",
  },
  {
    icon: MapPin,
    value: "Lagos, Nigeria",
  },
];
