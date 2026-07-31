"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconChevronDown,
  IconChevronRight,
  IconHeadphones,
  IconArrowRight,
  IconList,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface FAQSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  categories: FAQCategory[];
  faqs: FAQItem[];
  contactCta?: {
    title: string;
    description: string;
    buttonLabel: string;
    href: string;
  };
  className?: string;
}

export default function FAQSection({
  title = <>Frequently Asked Questions</>,
  subtitle = "Find answers to common questions about our services and processes.",
  categories,
  faqs,
  contactCta,
  className,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredFaqs = activeCategory === "all" ? faqs : faqs.filter((faq) => faq.category === activeCategory);
  const categoryCounts = [
    { id: "all", label: "All", icon: <IconList className="w-4 h-4" />, count: faqs.length },
    ...categories.map((cat) => ({
      ...cat,
      count: faqs.filter((faq) => faq.category === cat.id).length,
    })),
  ];

  return (
    <section className={cn("py-16 md:py-24 bg-white relative overflow-x-hidden", className)}>
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }} />

      <div className="w-full max-w-7xl mx-auto px-5 md:px-8 xl:px-16 relative z-10 box-border">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.14em] text-brand-secondary mb-3">
            Clear Answers
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-brand-dark/55 text-sm md:text-base px-2">
            {subtitle}
          </p>
        </div>

        {/* Mobile category scroll — full width */}
        <div className="lg:hidden mb-6 -mx-5 px-5 md:-mx-8 md:px-8">
          <div className="overflow-x-auto pb-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="flex gap-2" style={{ width: "max-content" }}>
              {categoryCounts.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex-shrink-0 flex items-center gap-1.5 px-3 py-2 text-[10px] font-black uppercase tracking-wider border transition-all duration-200 rounded-sm whitespace-nowrap",
                    activeCategory === cat.id
                      ? "bg-brand-primary text-white border-brand-primary"
                      : "bg-white text-brand-dark/60 border-brand-accent/60"
                  )}
                >
                  {cat.icon && <span className="w-3 h-3 flex-shrink-0">{cat.icon}</span>}
                  <span>{cat.label}</span>
                  <span className={cn(
                    "text-[8px] px-1 py-0.5 rounded-full flex-shrink-0",
                    activeCategory === cat.id ? "bg-white/20" : "bg-brand-light"
                  )}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-10">
          {/* Sidebar — desktop only */}
          <div className="hidden lg:block space-y-5">
            <div className="bg-[#F8FAFC] border border-brand-accent/60 p-2">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-dark/40 px-3 pt-2 pb-3">
                Browse by Category
              </p>
              <div className="space-y-1">
                {categoryCounts.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 text-left text-xs font-black uppercase tracking-wider transition-all duration-200 group",
                      activeCategory === cat.id
                        ? "bg-brand-primary text-white shadow-md"
                        : "text-brand-dark/60 hover:bg-white hover:text-brand-primary"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {cat.icon && (
                        <span className={cn(
                          "w-4 h-4 transition-colors",
                          activeCategory === cat.id ? "text-brand-secondary" : "text-brand-dark/30 group-hover:text-brand-secondary"
                        )}>
                          {cat.icon}
                        </span>
                      )}
                      {cat.label}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className={cn(
                        "text-[10px] px-1.5 py-0.5 rounded-full",
                        activeCategory === cat.id ? "bg-white/20" : "bg-brand-light"
                      )}>
                        {cat.count}
                      </span>
                      <IconChevronRight className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        activeCategory === cat.id ? "text-brand-secondary translate-x-0.5" : "text-brand-dark/20 group-hover:text-brand-secondary"
                      )} />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact CTA card */}
            {contactCta && (
              <div className="bg-brand-primary p-5 text-white relative overflow-hidden rounded-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-brand-secondary/20 flex items-center justify-center mb-3">
                    <IconHeadphones className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <h4 className="font-serif text-lg font-bold mb-2">{contactCta.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">{contactCta.description}</p>
                  <a
                    href={contactCta.href}
                    className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white px-4 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-200 group"
                  >
                    {contactCta.buttonLabel}
                    <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white border border-brand-accent/60">
            <div className="px-4 md:px-8 py-3 md:py-4 border-b border-brand-accent/60 bg-[#F8FAFC]">
              <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-brand-dark">
                {categoryCounts.find((c) => c.id === activeCategory)?.label}
              </h3>
              <p className="text-[10px] md:text-[11px] text-brand-dark/40 mt-0.5">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? "question" : "questions"} answered
              </p>
            </div>
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                      <FAQAccordionItem
                        key={`${activeCategory}-${index}`}
                        question={faq.question}
                        answer={faq.answer}
                        index={index}
                      />
                    ))
                  ) : (
                    <div className="p-6 md:p-8 text-center text-brand-dark/40 text-xs md:text-sm">
                      No questions available in this category yet.
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQAccordionItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-accent/60 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-3 md:gap-5 px-4 md:px-8 py-4 md:py-6 text-left focus:outline-none group"
      >
        <span className={cn(
          "flex-shrink-0 font-serif text-[0.65rem] md:text-[0.7rem] font-black tracking-widest w-5 md:w-7 pt-0.5 transition-colors duration-300",
          isOpen ? "text-brand-secondary" : "text-brand-dark/20 group-hover:text-brand-dark/40"
        )}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className={cn(
          "flex-1 font-serif text-[13px] md:text-base lg:text-lg font-bold leading-snug transition-colors duration-200 break-words",
          isOpen ? "text-brand-primary" : "text-brand-dark group-hover:text-brand-primary"
        )}>
          {question}
        </span>

        <span className={cn(
          "flex-shrink-0 w-6 h-6 md:w-8 md:h-8 border flex items-center justify-center transition-all duration-300 ml-2 mt-0.5",
          isOpen
            ? "border-brand-secondary bg-brand-secondary"
            : "border-brand-accent/70 group-hover:border-brand-primary/30"
        )}>
          <IconChevronDown className={cn(
            "w-3 h-3 md:w-4 md:h-4 transition-transform duration-300",
            isOpen ? "rotate-180 text-white" : "text-brand-dark/40 group-hover:text-brand-primary"
          )} />
        </span>
      </button>

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
            <div className="px-4 md:px-8 pb-4 md:pb-6">
              <div className="pl-8 md:pl-12 border-l-2 border-brand-secondary/35">
                <p className="text-brand-dark/60 text-xs md:text-sm leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
