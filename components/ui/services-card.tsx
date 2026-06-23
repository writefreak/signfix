import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SignfixProject {
  id: string;
  name: string;
  category: string;
  image: string;
}

interface WorkCardProps {
  project: SignfixProject;
  variant?: "default" | "compact";
}

export default function ServicesCard({
  project,
  variant = "default",
}: WorkCardProps) {
  return (
    <Link href={`/services/${project.id}`} className="block">
      <article
        className={cn("group relative shrink-0 w-56 md:w-68 snap-start")}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl",
            variant === "compact" ? "aspect-4/5" : "aspect-3/4",
          )}
        >
          <img
            src={project.image}
            alt={project.name}
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
            <div className=" bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-sm font-semibold text-white leading-snug">
                    {project.name}
                  </h3>
                  <span className="font-body text-[11px] text-white/60">
                    {project.category}
                  </span>
                </div>
                <div className="shrink-0 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={13} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
