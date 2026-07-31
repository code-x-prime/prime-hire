"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BentoCard {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  bgColor?: string;
  textColor?: string;
}

interface BentoFeaturesProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  cards: BentoCard[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function BentoFeatures({
  badge = "Why Choose Us",
  title,
  subtitle,
  cards,
}: BentoFeaturesProps) {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 text-brand-secondary font-black tracking-[0.25em] uppercase text-[10px] mb-5"
        >
          <span className="w-8 h-px bg-brand-secondary/60" />
          {badge}
          <span className="w-8 h-px bg-brand-secondary/60" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-[3rem] lg:text-[3.4rem] font-bold text-brand-dark leading-[1.08] tracking-tight mb-5"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-primary/55 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] min-h-[260px] md:min-h-[320px] flex flex-col justify-end p-7 md:p-9 transition-transform duration-500 hover:-translate-y-1.5"
            style={{ backgroundColor: card.bgColor || "#f5f0e8" }}
          >
            {card.image && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.image}
                  alt={card.imageAlt || card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Soft bottom gradient for text readability */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,44,95,0.78) 0%, rgba(11,44,95,0.35) 45%, rgba(11,44,95,0.05) 75%, transparent 100%)",
                  }}
                />
              </div>
            )}

            <div className="relative z-10">
              <h3
                className="font-serif text-xl md:text-2xl font-bold mb-2 transition-colors duration-300"
                style={{ color: card.image ? "#ffffff" : card.textColor || "#0B2C5F" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm md:text-[0.95rem] leading-relaxed max-w-sm transition-colors duration-300"
                style={{ color: card.image ? "rgba(255,255,255,0.78)" : "rgba(11,44,95,0.6)" }}
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
