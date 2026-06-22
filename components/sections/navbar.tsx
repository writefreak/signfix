"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
      <div className="mx-auto md:max-w-4xl max-w-6xl">
        <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-ink-dark/70 px-4 py-3 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5">
          <a href="/" className="h-7">
            <img
              src="/signfixlogo.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 transition-colors duration-200 hover:text-lime-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle className="border-white/15 text-ink-dark-foreground hover:border-lime-bright hover:text-lime-bright" />
            <Button
              size="default"
              className="rounded-lg bg-lime-bright text-ink-dark hover:bg-lime-bright/90"
            >
              Get a quote
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className="border-white/15 text-ink-dark-foreground hover:border-lime-bright hover:text-lime-bright" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-ink-dark-foreground"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-2 flex flex-col gap-1 rounded-xl border border-white/10 bg-ink-dark/90 p-3 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition-colors duration-200 hover:bg-white/10 hover:text-ink-dark-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  size="default"
                  className="mt-2 w-full rounded-lg bg-lime-bright text-ink-dark hover:bg-lime-bright/90"
                >
                  Get a quote
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
