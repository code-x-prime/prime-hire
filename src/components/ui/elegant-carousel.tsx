"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
  cta?: {
    label: string;
    href: string;
  };
}

export interface ElegantCarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function ElegantCarousel({
  slides,
  autoPlay = true,
  interval = 6000,
  className,
}: ElegantCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const TRANSITION_DURATION = 450;

  const goToSlide = useCallback(
    (index: number, dir?: "next" | "prev") => {
      if (isTransitioning || index === currentIndex || !slides.length) return;
      setDirection(dir || (index > currentIndex ? "next" : "prev"));
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex, slides.length]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex, "next");
  }, [currentIndex, goToSlide, slides.length]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, "prev");
  }, [currentIndex, goToSlide, slides.length]);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (interval / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext, autoPlay, interval]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];
  if (!currentSlide) return null;

  return (
    <div
      className={cn(
        "relative w-full min-h-[100vh] md:min-h-[90vh] lg:min-h-[100vh] flex flex-col justify-center overflow-hidden bg-white",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background accent wash */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}18 0%, transparent 70%)`,
        }}
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 xl:px-20 pt-32 md:pt-40 lg:pt-44 pb-24 md:pb-28 lg:pb-28">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-12 xl:gap-16 items-center min-h-[calc(85vh-8rem)] lg:min-h-[calc(100vh-12rem)]">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="max-w-xl">
              {/* Collection number */}
              <div
                className={cn(
                  "flex items-center gap-3 mb-5 md:mb-6 transition-all duration-300",
                  isTransitioning
                    ? direction === "next"
                      ? "opacity-0 -translate-x-6"
                      : "opacity-0 translate-x-6"
                    : "opacity-100 translate-x-0"
                )}
              >
                <span className="w-10 h-[2px]" style={{ backgroundColor: currentSlide.accent }} />
                <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase text-brand-dark/40">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h2
                className={cn(
                  "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.05] text-brand-dark mb-4 md:mb-5 transition-all duration-300",
                  isTransitioning
                    ? direction === "next"
                      ? "opacity-0 -translate-y-6"
                      : "opacity-0 translate-y-6"
                    : "opacity-100 translate-y-0"
                )}
              >
                {currentSlide.title}
              </h2>

              {/* Subtitle */}
              <p
                className={cn(
                  "text-sm md:text-base font-black uppercase tracking-[0.18em] mb-5 md:mb-6 transition-all duration-300",
                  isTransitioning
                    ? direction === "next"
                      ? "opacity-0 -translate-y-5"
                      : "opacity-0 translate-y-5"
                    : "opacity-100 translate-y-0"
                )}
                style={{ color: currentSlide.accent }}
              >
                {currentSlide.subtitle}
              </p>

              {/* Description */}
              <p
                className={cn(
                  "text-sm md:text-base lg:text-lg text-brand-dark/60 leading-relaxed mb-8 md:mb-10 transition-all duration-300",
                  isTransitioning
                    ? direction === "next"
                      ? "opacity-0 -translate-y-5"
                      : "opacity-0 translate-y-5"
                    : "opacity-100 translate-y-0"
                )}
              >
                {currentSlide.description}
              </p>

              {/* CTA + Navigation Arrows */}
              <div
                className={cn(
                  "flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 transition-all duration-300",
                  isTransitioning
                    ? direction === "next"
                      ? "opacity-0 -translate-y-5"
                      : "opacity-0 translate-y-5"
                    : "opacity-100 translate-y-0"
                )}
              >
                {currentSlide.cta && (
                  <a
                    href={currentSlide.cta.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-[0.75rem] font-black uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(200,155,60,0.55)]"
                    style={{
                      background: "linear-gradient(135deg, #d9ae55 0%, #C89B3C 55%, #a87d28 100%)",
                      boxShadow: "0 4px 16px rgba(200,155,60,0.38)",
                    }}
                  >
                    {currentSlide.cta.label}
                  </a>
                )}

                <div className="flex items-center gap-3">
                  <button
                    onClick={goPrev}
                    className="w-11 h-11 flex items-center justify-center border border-brand-accent/70 text-brand-dark/60 hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-secondary/5 transition-all duration-200"
                    aria-label="Previous slide"
                  >
                    <IconArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goNext}
                    className="w-11 h-11 flex items-center justify-center border border-brand-accent/70 text-brand-dark/60 hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-secondary/5 transition-all duration-200"
                    aria-label="Next slide"
                  >
                    <IconArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <div className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[75%] aspect-[3/4]">
              {/* Image frame */}
              <div
                className={cn(
                  "relative w-full h-full overflow-hidden transition-all duration-300",
                  isTransitioning
                    ? direction === "next"
                      ? "scale-[0.96] opacity-80"
                      : "scale-[0.96] opacity-80"
                    : "scale-100 opacity-100"
                )}
                style={{
                  boxShadow: "0 40px 100px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(200,155,60,0.15)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentSlide.imageUrl}
                      alt={currentSlide.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 85vw, 40vw"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${currentSlide.accent}22 0%, transparent 50%)`,
                      }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(7,28,62,0.75) 0%, rgba(7,28,62,0.15) 45%, transparent 100%)",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Corner brackets */}
                <div
                  className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 z-10"
                  style={{ borderColor: currentSlide.accent }}
                />
                <div
                  className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 z-10"
                  style={{ borderColor: currentSlide.accent }}
                />
              </div>

              {/* Decorative outer frame corners */}
              <div
                className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2"
                style={{ borderColor: currentSlide.accent }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2"
                style={{ borderColor: currentSlide.accent }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-brand-accent/60 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 xl:px-20">
          <div className="flex overflow-x-auto hide-scrollbar">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "group flex-1 min-w-[150px] md:min-w-[200px] px-3 md:px-5 py-4 md:py-5 text-left border-r border-brand-accent/60 last:border-r-0 transition-colors duration-200 hover:bg-brand-light",
                  index === currentIndex ? "bg-brand-light" : ""
                )}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="h-[3px] w-full bg-brand-accent/50 mb-2.5 md:mb-3 overflow-hidden rounded-full">
                  <div
                    className="h-full rounded-full transition-all duration-100 ease-linear"
                    style={{
                      width: index === currentIndex ? `${progress}%` : index < currentIndex ? "100%" : "0%",
                      backgroundColor: index === currentIndex ? currentSlide.accent : "#C89B3C",
                      boxShadow: index === currentIndex ? `0 0 10px ${currentSlide.accent}` : "none",
                    }}
                  />
                </div>
                <span
                  className={cn(
                    "block text-[10px] md:text-[11px] font-black uppercase tracking-wider truncate transition-colors duration-200",
                    index === currentIndex ? "text-brand-dark" : "text-brand-dark/40 group-hover:text-brand-dark/70"
                  )}
                >
                  {slide.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
