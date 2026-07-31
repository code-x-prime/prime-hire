"use client";

import { motion } from "framer-motion";
import { IconSearch, IconUsers, IconUserCheck, IconBriefcase, IconRocket } from "@tabler/icons-react";
import { ReactNode } from "react";

interface Step {
  icon: ReactNode;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: <IconSearch className="w-6 h-6" />, title: "Requirement Analysis", desc: "Deep dive into your corporate culture, role specifics, and business objectives." },
  { icon: <IconUsers className="w-6 h-6" />, title: "Sourcing & Screening", desc: "Leveraging our vast network to identify and evaluate premium talent." },
  { icon: <IconUserCheck className="w-6 h-6" />, title: "Client Interviews", desc: "Presenting only the most qualified, culturally-aligned candidates." },
  { icon: <IconBriefcase className="w-6 h-6" />, title: "Selection & Offer", desc: "Managing negotiations and ensuring seamless, confident offer acceptance." },
  { icon: <IconRocket className="w-6 h-6" />, title: "Deployment", desc: "Ongoing support ensuring smooth onboarding and long-term team success." },
];

export default function ProcessTimeline() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Desktop connector line */}
      <div className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px z-0">
        <div className="absolute inset-0 bg-brand-primary/10" />
        <motion.div
          className="absolute top-0 left-0 h-full bg-brand-secondary"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
            className="relative flex flex-col items-center text-center group"
          >
            {/* Mobile / tablet connector */}
            {i < steps.length - 1 && (
              <motion.div
                className="lg:hidden absolute left-1/2 -translate-x-1/2 w-px"
                style={{
                  top: "4.5rem",
                  height: "calc(100% - 3.5rem)",
                  background: "linear-gradient(to bottom, rgba(200,155,60,0.35), rgba(200,155,60,0.05))",
                }}
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 + 0.3 }}
              />
            )}

            {/* Icon square with step badge */}
            <div className="relative z-10 mb-7">
              {/* Step number badge */}
              <div
                className="absolute -top-2.5 -right-2.5 w-7 h-7 flex items-center justify-center text-[10px] font-black text-white z-20"
                style={{ backgroundColor: "#C89B3C" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon square */}
              <div
                className="w-[5.5rem] h-[5.5rem] flex items-center justify-center text-brand-primary/75 bg-[#faf8f4] border border-[#ede8df] transition-all duration-350 group-hover:text-brand-secondary group-hover:border-brand-secondary/30 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(200,155,60,0.14)]"
              >
                {step.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-serif font-bold text-brand-primary text-[1.05rem] leading-tight mb-3 group-hover:text-brand-secondary transition-colors duration-250">
              {step.title}
            </h3>

            {/* Desc */}
            <p className="text-brand-primary/50 text-[0.82rem] leading-relaxed max-w-[14rem] mx-auto">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
