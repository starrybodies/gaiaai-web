import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-green text-background hover:brightness-110 font-semibold",
  secondary:
    "border border-green/30 text-green hover:bg-green/10 hover:border-green/50",
  ghost:
    "text-muted hover:text-foreground hover:bg-surface-lighter",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 font-medium cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, ...linkProps } = props as ButtonAsLink;
    return <a href={href} className={classes} {...linkProps} />;
  }

  const { variant: _v, size: _s, className: _c, ...buttonProps } = props as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
