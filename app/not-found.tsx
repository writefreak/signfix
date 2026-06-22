import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Lime glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/2 z-0 h-125 w-125 -translate-y-1/2 rounded-full bg-lime-bright opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 z-0 h-125 w-125 -translate-y-1/2 rounded-full bg-lime-bright opacity-10 blur-[120px]" />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h1 className="font-display text-[60px] font-extrabold leading-none tracking-tight text-foreground md:text-[90px]">
          404
        </h1>
        <p className="mt-2 max-w-sm text-balance text-sm leading-relaxed text-muted-soft">
          This page doesn't exist or has been moved. Let's get you back on
          track.
        </p>

        <a
          href="/"
          className="mt-4 inline-flex items-center gap-2 md:gap-3 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink-dark transition-opacity duration-200 hover:opacity-90"
        >
          <ArrowLeft />
          Return to home
        </a>
      </div>
    </div>
  );
}
