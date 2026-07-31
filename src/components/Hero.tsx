"use client";

import { motion } from "framer-motion";
import { IconUsers, IconBriefcase, IconTrendingUp, IconShieldCheck, IconAward, IconArrowDown } from "@tabler/icons-react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const stats = [
  { value: "500+", label: "Corporate Clients", icon: IconBriefcase },
  { value: "10,000+", label: "Professionals Placed", icon: IconUsers },
  { value: "98.5%", label: "Placement Rate", icon: IconTrendingUp },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">

      {/* Navy right panel */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[52%] bg-[#071c3e] hidden lg:block pointer-events-none"
        style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-[52%] hidden lg:block opacity-[0.04] pointer-events-none"
        style={{
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gold divider line */}
      <div
        className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
        style={{
          left: "48.4%", width: "3px", zIndex: 1,
          background: "linear-gradient(to bottom, transparent 5%, #C89B3C 20%, #C89B3C 80%, transparent 95%)",
          transform: "skewX(-4.5deg)", opacity: 0.5,
        }}
      />

      {/* Top-left warm glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(200,155,60,0.06), transparent 65%)" }} />

      {/* Mobile top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] lg:hidden bg-brand-secondary" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full px-5 sm:px-8 md:px-12 xl:px-20 pt-24 pb-8 md:pt-40 md:pb-12">
          <div className="grid lg:grid-cols-[50%_50%] gap-12 xl:gap-16 items-center min-h-[calc(100vh-10rem)]">

            {/* LEFT — COPY */}
            <div className="flex flex-col justify-center">

              {/* Eyebrow */}
              <motion.div {...fadeUp(0)} className="mb-7">
                <div className="inline-flex items-center gap-3 border border-brand-secondary/30 bg-brand-secondary/5 px-4 py-2.5">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-brand-secondary opacity-60" />
                    <span className="relative inline-flex h-2 w-2 bg-brand-secondary" />
                  </span>
                  <span className="text-[10px] font-black tracking-[0.22em] uppercase text-brand-primary">
                    Premium Corporate Solutions
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.08)}
                className="font-serif leading-[1.02] tracking-tight text-brand-dark mb-6"
                style={{ fontSize: "clamp(2.9rem, 6.5vw, 5.2rem)" }}
              >
                Elevate Your
                <br />
                <span
                  className="bg-clip-text text-transparent inline-block"
                  style={{ backgroundImage: "linear-gradient(105deg, #0B2C5F 0%, #C89B3C 48%, #0B2C5F 100%)" }}
                >
                  Workforce
                </span>
                <br />
                Excellence.
              </motion.h1>

              {/* Body */}
              <motion.p {...fadeUp(0.16)} className="text-brand-dark/50 text-base md:text-[1.05rem] leading-relaxed mb-10 max-w-lg">
                Prime Hire Minds Consulting delivers strategic corporate recruitment, executive search, RPO, and HR consulting solutions — tailored for organizations aiming for hiring precision and operational growth.
              </motion.p>

              {/* CTAs */}
              <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3 mb-10">
                <AnimatedButton href="/contact" variant="primary" size="lg">
                  Partner With Us
                </AnimatedButton>
                <AnimatedButton href="/services" variant="outline" size="lg" icon={false}>
                  Our Services
                </AnimatedButton>
              </motion.div>

              {/* Trust strip */}
              <motion.div {...fadeUp(0.32)}
                className="flex flex-wrap items-center gap-5 sm:gap-7 pt-7 border-t border-brand-accent/60"
              >
                {[
                  { icon: IconShieldCheck, label: "ISO Certified" },
                  { icon: IconAward, label: "50+ Industries" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-[10px] font-black text-brand-dark/40 uppercase tracking-[0.2em]">
                    <Icon className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" />
                    {label}
                  </div>
                ))}
                <div className="w-px h-3.5 bg-brand-accent hidden sm:block" />
                <span className="text-[10px] font-black text-brand-dark/40 uppercase tracking-[0.2em]">Pan-India Network</span>
              </motion.div>
            </div>

            {/* RIGHT — VISUAL */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:h-[620px] xl:h-[680px] flex items-center justify-center mt-8 lg:mt-0"
            >
              {/* Hero image */}
              <motion.div
                initial={{ opacity: 0, x: 45 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.28, ease: "easeOut" as const }}
                className="relative mx-auto w-[78%] sm:w-[60%] lg:w-[76%] overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  boxShadow: "0 40px 100px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,155,60,0.15)",
                }}
              >
                <Image
                  src="/hero-bg.jpg"
                  alt="Prime Hire Minds Consulting Team"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 80vw, 35vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(7,28,62,0.88) 0%, rgba(7,28,62,0.2) 55%, transparent 100%)" }}
                />

                {/* Corner brackets */}
                <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-brand-secondary/70 z-10" />
                <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-brand-secondary/70 z-10" />

                {/* Placement rate overlay */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <div
                    className="p-4 sm:p-5"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-white/45 text-[9px] font-black tracking-[0.2em] uppercase mb-1">Placement Rate</div>
                        <div className="text-white font-serif text-2xl leading-none">98.5%</div>
                      </div>
                      <div
                        className="w-9 h-9 flex items-center justify-center"
                        style={{ background: "rgba(200,155,60,0.22)", border: "1px solid rgba(200,155,60,0.38)" }}
                      >
                        <IconTrendingUp className="w-4 h-4 text-brand-secondary" />
                      </div>
                    </div>
                    <div className="w-full h-[2px] bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "98.5%" }}
                        transition={{ duration: 1.5, delay: 1.1, ease: "easeOut" as const }}
                        className="h-full bg-brand-secondary relative"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — top left */}
              <motion.div
                initial={{ opacity: 0, x: -26 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" as const }}
                className="absolute top-[6%] left-0 lg:-left-[3%] z-20"
              >
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="bg-white p-4 sm:p-5 w-[145px] sm:w-[158px]"
                  style={{ boxShadow: "0 20px 48px -12px rgba(11,44,95,0.22)", border: "1px solid rgba(226,232,240,0.9)" }}
                >
                  <div className="w-9 h-9 flex items-center justify-center mb-3.5"
                    style={{ background: "linear-gradient(135deg, #d9ae55 0%, #C89B3C 55%, #a87d28 100%)" }}>
                    <IconBriefcase className="w-[17px] h-[17px] text-white" />
                  </div>
                  <div className="font-serif text-[1.65rem] text-brand-dark leading-none mb-1">500+</div>
                  <div className="text-[9px] font-black text-brand-dark/35 uppercase tracking-[0.18em]">Corporate Clients</div>
                </motion.div>
              </motion.div>

              {/* Floating card — mid right */}
              <motion.div
                initial={{ opacity: 0, x: 26 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.78, ease: "easeOut" as const }}
                className="absolute top-[38%] right-0 lg:-right-[2%] z-20"
              >
                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="p-4 sm:p-5 w-[145px] sm:w-[158px]"
                  style={{
                    background: "linear-gradient(155deg, #1a4080 0%, #0B2C5F 55%, #071e42 100%)",
                    boxShadow: "0 20px 48px -12px rgba(11,44,95,0.55)",
                    border: "1px solid rgba(200,155,60,0.18)"
                  }}
                >
                  <div className="w-9 h-9 flex items-center justify-center mb-3.5"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <IconUsers className="w-[17px] h-[17px] text-brand-secondary" />
                  </div>
                  <div className="font-serif text-[1.65rem] text-white leading-none mb-1">10k+</div>
                  <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.18em]">Professionals Placed</div>
                </motion.div>
              </motion.div>

              {/* Scroll cue */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-2 left-0 hidden lg:flex flex-col items-center gap-1.5"
              >
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}>
                  <IconArrowDown className="w-3 h-3 text-white/25" />
                </motion.div>
                <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.25em]" style={{ writingMode: "vertical-lr" }}>
                  Scroll
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM STATS BAR */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.9, ease: "easeOut" as const }}
        className="relative z-10 border-t border-brand-accent/60 bg-white"
      >
        <div className="w-full px-5 sm:px-8 md:px-12 xl:px-20">
          <div className="grid grid-cols-3 divide-x divide-brand-accent/60">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label}
                className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 px-3 sm:px-6 group hover:bg-brand-light/60 transition-colors duration-200 cursor-default"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(200,155,60,0.1)" }}>
                  <Icon className="w-4 h-4 sm:w-[17px] sm:h-[17px] text-brand-secondary" />
                </div>
                <div className="min-w-0">
                  <div className="font-serif text-lg sm:text-xl text-brand-dark leading-none truncate">{value}</div>
                  <div className="text-[9px] sm:text-[10px] font-black text-brand-dark/35 uppercase tracking-[0.16em] mt-0.5 truncate">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
