"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQProps {
  question: string;
  answer: string;
  index?: number;
}

export default function FAQ({ question, answer, index = 0 }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
      className="border-b border-brand-accent/70 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-5 py-5 md:py-6 text-left focus:outline-none group"
      >
        {/* Number */}
        <span className={cn(
          "flex-shrink-0 font-serif text-[0.7rem] font-black tracking-widest w-7 transition-colors duration-300",
          isOpen ? "text-brand-secondary" : "text-brand-dark/20 group-hover:text-brand-dark/40"
        )}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span className={cn(
          "flex-1 font-serif text-base md:text-lg font-bold leading-snug transition-colors duration-200",
          isOpen ? "text-brand-primary" : "text-brand-dark group-hover:text-brand-primary"
        )}>
          {question}
        </span>

        {/* Toggle */}
        <span className={cn(
          "flex-shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300 ml-2",
          isOpen
            ? "border-brand-secondary bg-brand-secondary"
            : "border-brand-accent/70 group-hover:border-brand-primary/30"
        )}>
          <svg
            viewBox="0 0 12 12"
            className={cn(
              "w-2.5 h-2.5 transition-transform duration-300",
              isOpen ? "rotate-45" : ""
            )}
            fill="none"
            stroke={isOpen ? "white" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="0" x2="6" y2="12" />
            <line x1="0" y1="6" x2="12" y2="6" />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-12 pb-6">
              <div className="border-l-2 border-brand-secondary/35 pl-5">
                <p className="text-brand-dark/58 text-sm md:text-[0.9rem] leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
