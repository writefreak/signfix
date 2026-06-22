import { cn } from "@/lib/utils";

interface SeparatorFadeProps {
  className?: string;
}

export function SeparatorFade({ className }: SeparatorFadeProps) {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        "h-px w-full",
        "bg-linear-to-r from-transparent via-current to-transparent",
        "text-white/25",
        className,
      )}
    />
  );
}
