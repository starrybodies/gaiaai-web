import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Page section with the shared container, rhythm, and an optional photo
 * backdrop. `backdrop` images sit behind a heavy scrim so they read as texture.
 */
export function Section({
  id,
  backdrop,
  className,
  children,
}: {
  id?: string;
  backdrop?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden border-t border-border py-20 md:py-28",
        className
      )}
    >
      {backdrop && (
        <div aria-hidden className="absolute inset-0">
          <Image
            src={backdrop}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.08] saturate-50"
            unoptimized={backdrop.endsWith(".gif")}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
      )}
      <div className="relative mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

/** Section label + heading + optional intro, always left-aligned on the grid. */
export function SectionHeading({
  label,
  title,
  intro,
  className,
}: {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <p className="mb-5 flex items-center gap-3 font-mono text-[13px] text-green">
        <span aria-hidden className="h-1.5 w-1.5 bg-green" />
        {label}
      </p>
      <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.01em]">
        {title}
      </h2>
      {intro && (
        <div className="mt-6 space-y-4 text-[17px] leading-[1.7] text-muted">
          {intro}
        </div>
      )}
    </header>
  );
}

/** Topic tag. */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border px-2.5 py-1 font-mono text-[12px] text-muted">
      {children}
    </span>
  );
}
