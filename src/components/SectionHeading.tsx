"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  light?: boolean;
  rule?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  alignment = "center",
  light = false,
  rule = true,
}: SectionHeadingProps) {
  const alignClass = {
    center: "mx-auto text-center items-center",
    left: "text-left items-start",
    right: "ml-auto text-right items-end",
  }[alignment];

  return (
    <div className={cn("max-w-3xl mb-12 md:mb-16 flex flex-col", alignClass)}>

      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={cn(
            "inline-flex items-center gap-3 mb-4",
            alignment === "center" && "justify-center",
          )}
        >
          <span className="w-6 h-px bg-brand-secondary" />
          <span className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-secondary">
            {badge}
          </span>
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
        className={cn(
          "font-serif font-bold leading-[1.06] tracking-tight",
          light ? "text-white" : "text-brand-dark"
        )}
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
      >
        {title}
      </motion.h2>

      {/* Rule */}
      {rule && (
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "2.5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="h-[3px] bg-brand-secondary mt-5 mb-0 flex-shrink-0"
          style={{ width: "2.5rem" }}
        />
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
          className={cn(
            "text-base md:text-lg leading-relaxed mt-5",
            alignment === "center" && "mx-auto",
            alignment === "right" && "ml-auto",
            light ? "text-white/55" : "text-brand-dark/50",
            "max-w-2xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
