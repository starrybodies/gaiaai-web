import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "amber" | "text";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-green text-background font-semibold hover:shadow-[0_0_32px_var(--color-green-glow)]",
  secondary:
    "border border-green/35 text-green hover:bg-green/10 hover:border-green/60",
  amber:
    "border border-amber/35 bg-amber/10 text-amber font-semibold hover:bg-amber/20 hover:border-amber/60",
  text: "text-green underline-offset-4 hover:underline !px-0",
};

/**
 * Link styled as a button. `external` opens a new tab and marks the link with
 * an up-right arrow so visitors know they are leaving the site.
 */
export function Button({
  href,
  variant = "secondary",
  external = false,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-[3px] px-5 py-3 font-mono text-[14px] transition-all duration-200",
        variants[variant],
        className
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      {external && (
        <ArrowUpRight
          size={15}
          aria-hidden
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
