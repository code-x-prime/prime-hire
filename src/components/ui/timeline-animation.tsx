"use client";

import React, { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: keyof JSX.IntrinsicElements;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

const defaultRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
    },
  },
};

export function TimelineContent({
  as: Component = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const variants = customVariants || defaultRevealVariants;
  const refToUse = (timelineRef || localRef) as React.RefObject<HTMLDivElement>;

  return (
    <motion.div
      ref={refToUse}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      custom={animationNum}
      className={cn(className)}
      {...(props as Record<string, unknown>)}
    >
      {Component !== "div" ? (
        <Component className="contents" {...(props as Record<string, unknown>)}>
          {children}
        </Component>
      ) : (
        children
      )}
    </motion.div>
  );
}

export default TimelineContent;
