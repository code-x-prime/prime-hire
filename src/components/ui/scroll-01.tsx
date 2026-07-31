"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type Scroll01Item = {
  title: string;
  description: string;
  media: string;
  icon?: React.ReactNode;
};

export interface Scroll01Props {
  items: Scroll01Item[];
  mobileMediaHeight?: number;
  className?: string;
}

function ScrollItem({
  item,
  index,
  setActive,
}: {
  item: Scroll01Item;
  index: number;
  setActive: Dispatch<SetStateAction<number>>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 20%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);

  const opacityValues = index === 0 ? [1, 0.8, 1, 0] : [0, 0.8, 1, 0];
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 1],
    opacityValues,
  );

  const isActive = useTransform(scrollYProgress, (v) => v > 0.35 && v < 0.65);

  useMotionValueEvent(isActive, "change", (v) => {
    if (v) {
      setActive((prev) => (prev === index ? prev : index));
    }
  });

  return (
    <motion.article
      ref={ref}
      style={{ opacity, y }}
      className="flex flex-col items-center text-center md:items-start md:text-left"
    >
      <div className="text-center md:text-left">
        {item.icon && (
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-brand-secondary/10 text-brand-secondary mx-auto md:mx-0 mb-4 md:mb-5">
            {item.icon}
          </div>
        )}
        <h3 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-[2.25rem] font-serif font-bold text-white">
          {item.title}
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-lg leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export function Scroll01({ items, className }: Scroll01Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!items.length) return null;

  return (
    <div className={cn("relative", className)}>
      {/* Mobile: stacked cards */}
      <div className="space-y-12 md:hidden">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="flex flex-col items-start space-y-4"
          >
            <div className="space-y-3 w-full">
              {item.icon && (
                <div className="w-10 h-10 flex items-center justify-center bg-brand-secondary/10 text-brand-secondary">
                  {item.icon}
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden ">
              <Image
                src={item.media}
                alt={item.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Desktop: sticky image + scrolling text */}
      <div className="hidden gap-8 lg:gap-12 md:grid md:grid-cols-2 items-start">
        <div className="sticky top-28 h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg self-start">
          {items.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              className="absolute inset-0"
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                willChange: "opacity",
              }}
              transition={{
                duration: 0.25,
                ease: "linear",
              }}
            >
              <Image
                src={item.media}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 45vw"
                priority={index === 0}
              />
              {/* Subtle brand overlay */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(11,44,95,0.12) 0%, transparent 50%, rgba(200,155,60,0.06) 100%)" }}
              />
            </motion.div>
          ))}
        </div>

        <div className="py-[25vh] lg:py-[30vh]">
          <div className="space-y-[25vh] lg:space-y-[30vh]">
            {items.map((item, index) => (
              <ScrollItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                setActive={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scroll01;
