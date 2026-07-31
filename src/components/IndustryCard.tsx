"use client";

import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  icon: ReactNode;
  image?: string;
  description?: string;
  delay?: number;
  className?: string;
}

export default function IndustryCard({
  title,
  icon,
  image,
  description,
  delay = 0,
  className,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      className={cn("group relative overflow-hidden", className)}
      style={{ aspectRatio: "4/5" }}
    >
      <Link href="/industries" className="block h-full w-full">

        {/* Background photo */}
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 bg-brand-primary" />
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, rgba(7,28,62,0.97) 0%, rgba(7,28,62,0.5) 55%, rgba(7,28,62,0.15) 100%)",
          }}
        />

        {/* Gold left border — reveals on hover */}
        <div className="absolute top-0 left-0 bottom-0 w-[3px] z-30 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom bg-brand-secondary" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col p-5 md:p-6">

          {/* Icon */}
          <div
            className="w-10 h-10 flex items-center justify-center flex-shrink-0 border border-white/15 group-hover:border-brand-secondary group-hover:bg-brand-secondary transition-all duration-350"
          >
            <span className="[&_svg]:w-4 [&_svg]:h-4 text-white/70 group-hover:text-white transition-colors duration-300">
              {icon}
            </span>
          </div>

          {/* Push to bottom */}
          <div className="mt-auto">

            {description && (
              <p className="text-white/0 group-hover:text-white/60 text-xs leading-relaxed mb-2 transition-all duration-400 line-clamp-2 translate-y-1 group-hover:translate-y-0">
                {description}
              </p>
            )}

            <h3 className="font-serif text-base md:text-[1.05rem] leading-snug text-white mb-4 font-bold">
              {title}
            </h3>

            {/* Footer row */}
            <div className="flex items-center justify-between pt-3 border-t border-white/12 group-hover:border-white/25 transition-colors duration-300">
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/30 group-hover:text-brand-secondary transition-colors duration-300">
                Explore
              </span>
              <div className="w-6 h-6 flex items-center justify-center border border-white/15 group-hover:border-brand-secondary group-hover:bg-brand-secondary transition-all duration-300">
                <IconArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-250" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
