import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Active: "bg-green/10 text-green border-green/20",
  "In Development": "bg-amber/8 text-amber/80 border-amber/15",
  Complete: "bg-green/5 text-green/60 border-green/10",
  Published: "bg-surface-light text-muted border-border",
};

export function Badge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  const style = statusStyles[status] || statusStyles.Published;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider",
        style,
        className
      )}
    >
      {status === "Active" && (
        <span className="h-1 w-1 rounded-full bg-green animate-pulse" />
      )}
      {status}
    </span>
  );
}
