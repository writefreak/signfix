import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  label?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
}

const aspectClasses: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export function ImagePlaceholder({
  className,
  label = "Image placeholder",
  aspect = "square",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-secondary",
        aspectClasses[aspect],
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--panel-border) 0, var(--panel-border) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-muted-soft">
        <ImageIcon className="h-6 w-6" strokeWidth={1.5} />
        <span className="font-mono text-[10px] uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>
    </div>
  );
}
