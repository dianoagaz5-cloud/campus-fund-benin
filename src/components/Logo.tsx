import { cn } from "@/lib/utils";

export function Logo({ size = "md", inverse = true }: { size?: "sm" | "md" | "lg"; inverse?: boolean }) {
  const compact = size === "sm";
  return (
    <div className="flex items-center gap-3" aria-label="CampusFund">
      <div className={cn("grid shrink-0 place-items-center bg-accent font-display font-extrabold text-primary", compact ? "h-8 w-8 text-[10px]" : size === "lg" ? "h-12 w-12 text-sm" : "h-9 w-9 text-xs")}>
        CF
      </div>
      <span className={cn("font-display font-extrabold", compact ? "text-base" : size === "lg" ? "text-2xl" : "text-lg", inverse ? "text-primary-foreground" : "text-primary")}>
        Campus<span className="text-accent">Fund</span>
      </span>
    </div>
  );
}