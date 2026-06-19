export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink-dark">
            <span className="h-2 w-2 rounded-[2px] bg-lime-bright" />
          </span>
          <span className="font-display text-sm font-bold tracking-tight text-foreground">
            SIGNFIX INDUSTRIAL LIMITED
          </span>
        </div>
        <p className="font-mono text-xs text-muted-soft">
          © {new Date().getFullYear()} Signfix Industrial Limited. Lagos,
          Nigeria.
        </p>
      </div>
    </footer>
  );
}
