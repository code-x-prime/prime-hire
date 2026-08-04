"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import { IconMail } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  phone?: string;
  mainImage?: string;
  mainImageAlt?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  className?: string;
}

export default function CTASection({
  title = "Looking For Reliable",
  highlight = "Staffing Solutions?",
  description = "Partner with Prime Hire Minds Consulting to secure industry-leading talent and streamline operations — from executive search to complete HR setup.",
  primaryButton = { text: "Get Free Consultation", href: "/contact" },
  mainImage = "/cta-main.jpg",
  mainImageAlt = "Prime Hire Minds Consulting",
  secondaryImage = "/cta-secondary.jpg",
  secondaryImageAlt = "Corporate team collaboration",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-14 md:py-16  bg-white relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl md:rounded-[2rem]"
          style={{
            background: "linear-gradient(140deg, #fdfbf6 0%, #f8f5ef 45%, #f3efe6 100%)",
            boxShadow: "0 32px 80px -24px rgba(11,44,95,0.12)",
          }}
        >
          {/* Subtle gold dot texture */}
          <div
            className="absolute inset-0 z-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #C89B3C 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Soft gold glows */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none opacity-30"
            style={{ background: "radial-gradient(circle, rgba(200,155,60,0.35), transparent 65%)" }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, rgba(11,44,95,0.18), transparent 65%)" }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center p-8 md:p-12 lg:p-16 xl:p-20">
            {/* Left content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-3 text-brand-secondary font-black tracking-[0.25em] uppercase text-[10px] mb-6"
              >
                <span className="w-8 h-px bg-brand-secondary/70" />
                Trusted Staffing Partner
                <span className="hidden sm:inline w-8 h-px bg-brand-secondary/70" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.1rem] font-bold text-brand-primary mb-5 leading-[1.08] tracking-tight"
              >
                {title}{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(95deg, #C89B3C 0%, #d9ae55 50%, #a87d28 100%)" }}
                >
                  {highlight}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.28, duration: 0.6 }}
                className="text-base md:text-lg text-brand-primary/60 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.38, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <AnimatedButton href={primaryButton.href} variant="primary" size="lg">
                  {primaryButton.text}
                </AnimatedButton>

                <a
                  href="mailto:info@primehireminds.com"
                  className="group inline-flex items-center gap-2.5 text-xs font-bold text-brand-primary transition-all duration-300 hover:text-brand-secondary"
                >
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(200,155,60,0.12), rgba(200,155,60,0.05))",
                      border: "1px solid rgba(200,155,60,0.25)",
                    }}
                  >
                    <IconMail className="w-4 h-4 text-brand-secondary" />
                  </span>
                  <span className="tracking-wide">info@primehireminds.com</span>
                </a>
              </motion.div>
            </div>

            {/* Right overlapping images */}
            <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:max-w-none lg:ml-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px] ml-auto rounded-[2rem] overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 28px 70px -20px rgba(11,44,95,0.22)" }}
              >
                <Image
                  src={mainImage}
                  alt={mainImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 420px"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-4 sm:-left-8 bottom-8 sm:bottom-12 w-[58%] sm:w-[55%] aspect-[16/10] rounded-2xl overflow-hidden border-4 border-[#fdfbf6] shadow-xl"
                style={{ boxShadow: "0 20px 50px -15px rgba(11,44,95,0.18)" }}
              >
                <Image
                  src={secondaryImage}
                  alt={secondaryImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 280px"
                />
              </motion.div>

              {/* Floating gold accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="absolute -right-2 top-8 w-14 h-14 rounded-full border-2 border-brand-secondary/30"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
