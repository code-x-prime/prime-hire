"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  altText?: string;
  aspect?: "portrait" | "landscape" | "square" | "wide";
  dark?: boolean;
}

export default function ImagePlaceholder({
  className,
  altText = "Image",
  aspect,
  dark = false,
}: ImagePlaceholderProps) {
  const aspectClass = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    square: "aspect-square",
    wide: "aspect-[16/9]",
  }[aspect ?? "portrait"] ?? "";

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden group",
        aspectClass,
        className
      )}
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: dark
            ? "linear-gradient(145deg, #0d3060 0%, #0B2C5F 45%, #06182e 100%)"
            : "linear-gradient(145deg, #EDF1F7 0%, #F8FAFC 50%, #E8EDF5 100%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, ${dark ? "rgba(255,255,255,0.9)" : "rgba(11,44,95,0.8)"} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Radial glow centre */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 40% 35%, ${dark ? "rgba(200,155,60,0.18)" : "rgba(200,155,60,0.1)"}, transparent 60%)`,
        }}
      />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] pointer-events-none"
        style={{ background: `linear-gradient(to right, transparent, ${dark ? "rgba(200,155,60,0.5)" : "rgba(11,44,95,0.2)"}, transparent)` }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner brackets */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <div
          key={pos}
          className={cn(
            "absolute w-5 h-5 pointer-events-none",
            pos === "tl" && "top-3 left-3 border-t border-l",
            pos === "tr" && "top-3 right-3 border-t border-r",
            pos === "bl" && "bottom-3 left-3 border-b border-l",
            pos === "br" && "bottom-3 right-3 border-b border-r",
            dark ? "border-brand-secondary/50" : "border-brand-primary/25"
          )}
        />
      ))}

      {/* Centre label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
        {/* Camera / image icon — drawn with pure CSS */}
        <div
          className={cn(
            "w-10 h-8 flex-shrink-0 opacity-30",
            dark ? "text-white" : "text-brand-primary"
          )}
        >
          <svg viewBox="0 0 40 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="36" height="23" rx="2" />
            <circle cx="20" cy="18.5" r="6" />
            <path d="M14 7l2-5h8l2 5" />
            <circle cx="32" cy="12" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </div>
        {altText && (
          <span
            className={cn(
              "text-[9px] font-bold uppercase tracking-[0.22em]",
              dark ? "text-white/25" : "text-brand-primary/30"
            )}
          >
            {altText}
          </span>
        )}
      </div>

      {/* Hover vignette */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          dark
            ? "bg-gradient-to-t from-brand-secondary/10 to-transparent"
            : "bg-gradient-to-t from-brand-primary/6 to-transparent"
        )}
      />
    </div>
  );
}
