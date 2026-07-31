"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconArrowDown, IconCircleCheck, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ParallaxService {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  reverse: boolean;
  highlights?: string[];
  extra?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export interface ParallaxScrollFeatureSectionProps {
  introTitle?: React.ReactNode;
  introSubtitle?: string;
  services: ParallaxService[];
}

export function ParallaxScrollFeatureSection({
  introTitle,
  introSubtitle,
  services,
}: ParallaxScrollFeatureSectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Intro */}
      <div className="min-h-[50vh] md:min-h-[60vh] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        {introTitle && (
          <div className="mb-4">{introTitle}</div>
        )}
        {introSubtitle && (
          <p className="text-brand-dark/55 text-sm md:text-base max-w-xl">
            {introSubtitle}
          </p>
        )}
        <p className="mt-10 md:mt-14 flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider text-brand-dark/40">
          Scroll <IconArrowDown className="w-4 h-4 animate-bounce" />
        </p>
      </div>

      {/* Parallax feature sections */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <ParallaxServiceItem key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

function ParallaxServiceItem({
  service,
  index,
}: {
  service: ParallaxService;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.55],
    service.reverse
      ? ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]
      : ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const translateContent = useTransform(scrollYProgress, [0, 0.8], [40, 0]);
  const translateImage = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <div
      ref={ref}
      className={cn(
        "min-h-[auto] md:min-h-[85vh] flex items-center justify-center py-16 md:py-0",
        service.reverse ? "md:flex-row-reverse" : "md:flex-row",
        "flex-col"
      )}
    >
      {/* Text side */}
      <motion.div
        className="flex-1 w-full px-6 sm:px-10 md:px-12 lg:px-20"
        style={{ y: translateContent }}
      >
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-primary/8 text-brand-primary border border-brand-primary/10">
            {service.icon}
          </div>
          <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.12em] text-brand-secondary">
            Service {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-brand-dark leading-tight max-w-md lg:max-w-lg mb-4 md:mb-6">
          {service.title}
        </h3>
        <p className="text-brand-dark/60 text-sm md:text-base leading-relaxed max-w-md lg:max-w-lg mb-5 md:mb-6">
          {service.description}
        </p>

        {service.extra && (
          <p className="text-brand-dark/50 text-xs md:text-sm leading-relaxed max-w-md lg:max-w-lg mb-5 md:mb-6">
            {service.extra}
          </p>
        )}

        {service.highlights && service.highlights.length > 0 && (
          <div className="mb-6 md:mb-7">
            <p className="text-[11px] font-black uppercase tracking-wider text-brand-secondary mb-2.5 md:mb-3">
              Key Highlights
            </p>
            <ul className="space-y-2">
              {service.highlights.map((hl) => (
                <li key={hl} className="text-xs md:text-sm text-brand-dark/70 flex items-start gap-2">
                  <IconCircleCheck className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.ctaHref && service.ctaLabel && (
          <Link
            href={service.ctaHref}
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-black uppercase tracking-wider text-brand-primary hover:text-brand-secondary transition-colors"
          >
            {service.ctaLabel} <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </motion.div>

      {/* Image side */}
      <motion.div
        className="flex-1 w-full px-6 sm:px-10 md:px-12 lg:px-20 mt-10 md:mt-0"
        style={{ opacity, clipPath, y: translateImage }}
      >
        <div
          className={cn(
            "relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden mx-auto",
            service.reverse ? "md:ml-auto" : "md:mr-auto"
          )}
          style={{ maxWidth: "520px" }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 45vw"
          />
          {/* Brand overlay gradient */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(11,44,95,0.08) 0%, transparent 50%, rgba(200,155,60,0.06) 100%)" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default ParallaxScrollFeatureSection;
