"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  delay?: number;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  image,
  delay = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      className={cn("group", className)}
    >
      <Link
        href="/services"
        className="flex flex-col bg-white border border-brand-accent/60 hover:border-brand-primary/20 hover:shadow-[0_16px_48px_rgba(11,44,95,0.1)] transition-all duration-350 overflow-hidden block"
      >
        {/* ── Image top — square ratio works for all orientations ── */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1" }}>
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, #1a4080, #0B2C5F)" }}
            />
          )}

          {/* Subtle dark gradient — bottom only so image is visible */}
          <div
            className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-30"
            style={{
              background: "linear-gradient(to bottom, transparent 50%, rgba(7,28,62,0.55) 100%)",
            }}
          />

          {/* Gold top accent — reveals on hover */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

          {/* Icon badge — bottom-left corner */}
          <div
            className="absolute bottom-3 left-4 w-9 h-9 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-brand-secondary"
            style={{
              background: "rgba(200,155,60,0.20)",
              border: "1px solid rgba(200,155,60,0.45)",
            }}
          >
            <span className="[&_svg]:w-4 [&_svg]:h-4 text-brand-secondary group-hover:text-white transition-colors duration-300">
              {icon}
            </span>
          </div>
        </div>

        {/* ── Content bottom ── */}
        <div className="flex flex-col px-6 py-5 flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif font-bold text-brand-dark text-[1.02rem] leading-snug group-hover:text-brand-primary transition-colors duration-250 flex-1">
              {title}
            </h3>
            <div
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center border border-brand-accent/60 group-hover:border-brand-secondary group-hover:bg-brand-secondary transition-all duration-300 mt-0.5"
            >
              <IconArrowUpRight className="w-3.5 h-3.5 text-brand-dark/25 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-250" />
            </div>
          </div>

          <p className="text-brand-dark/48 text-[0.82rem] leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Hover underline */}
          <div className="mt-5 pt-4 border-t border-brand-accent/50">
            <div className="h-[2px] w-0 group-hover:w-8 bg-brand-secondary transition-all duration-400" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
