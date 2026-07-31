"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
}

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon = true,
}: AnimatedButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-xs gap-2",
    md: "px-7 py-[0.85rem] text-[0.78rem] gap-2.5",
    lg: "px-9 py-[1.05rem] text-[0.82rem] gap-3",
  };

  const base =
    "relative inline-flex items-center justify-center font-black tracking-[0.1em] uppercase overflow-hidden transition-all duration-300 group select-none";

  // Per-variant className (non-bg styles)
  const variantClass: Record<string, string> = {
    primary: cn(
      "text-white",
      "shadow-[0_4px_18px_rgba(11,44,95,0.32),inset_0_1px_0_rgba(255,255,255,0.1)]",
      "hover:shadow-[0_12px_32px_rgba(11,44,95,0.48),inset_0_1px_0_rgba(255,255,255,0.14)]",
      "hover:-translate-y-[3px]"
    ),
    secondary: cn(
      "text-white",
      "shadow-[0_4px_20px_rgba(200,155,60,0.45),inset_0_1px_0_rgba(255,255,255,0.20)]",
      "hover:shadow-[0_12px_36px_rgba(200,155,60,0.65),inset_0_1px_0_rgba(255,255,255,0.25)]",
      "hover:-translate-y-[3px]"
    ),
    outline: cn(
      "bg-transparent text-brand-primary border-2 border-brand-primary",
      "before:absolute before:inset-0 before:bg-brand-primary before:scale-x-0 before:origin-left before:transition-transform before:duration-350",
      "hover:before:scale-x-100 hover:text-white hover:shadow-[0_8px_24px_rgba(11,44,95,0.2)] hover:-translate-y-[3px]",
      "[&>span]:relative [&>span]:z-10"
    ),
    "outline-white": cn(
      "bg-transparent text-white border-2 border-white/35",
      "before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-350",
      "hover:before:scale-x-100 hover:text-brand-primary hover:border-white hover:-translate-y-[3px]",
      "[&>span]:relative [&>span]:z-10"
    ),
    white: cn(
      "bg-white text-brand-primary",
      "shadow-[0_4px_16px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.95)]",
      "hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:-translate-y-[3px]"
    ),
    ghost: cn(
      "bg-transparent text-brand-primary px-0 pb-0",
      "border-b-2 border-brand-primary/20 hover:border-brand-secondary hover:text-brand-secondary"
    ),
  };

  // Gradient backgrounds via inline style
  const bgStyle: Record<string, React.CSSProperties> = {
    primary: { background: "linear-gradient(155deg, #1a4080 0%, #0B2C5F 55%, #071e42 100%)" },
    secondary: { background: "linear-gradient(155deg, #d9ae55 0%, #C89B3C 55%, #a87d28 100%)" },
    outline: {},
    "outline-white": {},
    white: {},
    ghost: {},
  };

  const isGhost = variant === "ghost";
  const hasBg = variant === "primary" || variant === "secondary" || variant === "white";

  return (
    <Link
      href={href}
      style={bgStyle[variant]}
      className={cn(base, sizes[size], variantClass[variant], className)}
    >
      {/* Shimmer sweep on filled variants */}
      {hasBg && (
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)" }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-[inherit]">
        {children}
        {icon && (
          <IconArrowRight
            className={cn(
              "flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1.5",
              isGhost ? "w-4 h-4" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
            )}
          />
        )}
      </span>
    </Link>
  );
}
