import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Active: "text-green",
  "In Development": "text-amber",
  Complete: "text-muted",
  Published: "text-muted",
};

const dotStyles: Record<string, string> = {
  Active: "bg-green motion-safe:animate-pulse",
  "In Development": "bg-amber",
  Complete: "border border-muted",
  Published: "border border-muted",
};

export function Badge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap font-mono text-[12px]",
        statusStyles[status] ?? statusStyles.Published,
        className
      )}
    >
      <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", dotStyles[status] ?? dotStyles.Published)} />
      {status}
    </span>
  );
}
