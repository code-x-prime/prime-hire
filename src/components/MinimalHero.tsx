"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export interface MinimalHeroProps {
  kicker?: string;
  title?: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  tag?: string;
  heading?: string;
  desc?: string;
  extraActions?: ReactNode;
  bottomContent?: ReactNode;
  minHeight?: string;
}

export default function MinimalHero({
  kicker = "Prime Hire Minds Consulting",
  title = <>Build Faster.<br />Hire Smarter.</>,
  subtitle = "Strategic corporate recruitment and HR consulting for enterprises that want premium talent, faster turnaround, and long-term workforce success.",
  ctaText = "Explore Services",
  ctaHref = "/services",
  tag = "Trusted Across India",
  heading = "Pan-India Recruitment & HR Consulting",
  desc = "Partnering with 1000+ enterprises to deliver industry-ready talent and compliant HR operations.",
  extraActions,
  bottomContent,
  minHeight,
}: MinimalHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    setSize();

    type Particle = {
      x: number;
      y: number;
      speed: number;
      opacity: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
    };

    let particles: Particle[] = [];
    let raf = 0;

    const count = () => Math.max(25, Math.floor((canvas.width * canvas.height) / 8000));

    const make = (): Particle => {
      const fadeDelay = Math.random() * 600 + 100;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() / 5 + 0.1,
        opacity: 0.7,
        fadeDelay,
        fadeStart: Date.now() + fadeDelay,
        fadingOut: false,
      };
    };

    const reset = (p: Particle) => {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.speed = Math.random() / 5 + 0.1;
      p.opacity = 0.7;
      p.fadeDelay = Math.random() * 600 + 100;
      p.fadeStart = Date.now() + p.fadeDelay;
      p.fadingOut = false;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < count(); i++) particles.push(make());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) reset(p);
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
        if (p.fadingOut) {
          p.opacity -= 0.008;
          if (p.opacity <= 0) reset(p);
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, 0.8, Math.random() * 2 + 1);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      setSize();
      init();
    };

    window.addEventListener("resize", onResize);
    init();
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="minimal-hero-root relative w-full flex flex-col justify-between overflow-hidden text-white"
      style={{
        background: "linear-gradient(155deg, #1a4080 0%, #0B2C5F 45%, #071e42 100%)",
        minHeight: minHeight || "70vh",
      }}
    >
      <style>{`
        .minimal-hero-root, .minimal-hero-root * {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .minimal-hero-root {
          --bg: #0B2C5F;
          --fg: #ffffff;
          --muted: rgba(255, 255, 255, 0.58);
          --border: rgba(255, 255, 255, 0.12);
          --accent: #C89B3C;
        }

        .mh-topbar {
          width: 100%;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 20;
        }
        @media (min-width: 768px) {
          .mh-topbar { padding: 18px 32px; }
        }
        .mh-brand {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
          text-decoration: none;
        }
        @media (min-width: 768px) {
          .mh-brand { font-size: 11px; }
        }
        .mh-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: var(--fg);
          border: 1px solid var(--border);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: all 0.25s ease;
        }
        @media (min-width: 768px) {
          .mh-cta { padding: 10px 18px; font-size: 12px; }
        }
        .mh-cta:hover {
          background: rgba(200, 155, 60, 0.18);
          border-color: rgba(200, 155, 60, 0.45);
        }

        .mh-main {
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 20px 56px;
          max-width: 960px;
          margin: 0 auto;
          flex: 1;
        }
        @media (min-width: 768px) {
          .mh-main { padding: 64px 28px 72px; }
        }
        .mh-kicker {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 14px;
        }
        @media (min-width: 768px) {
          .mh-kicker { font-size: 11px; margin-bottom: 16px; }
        }
        .mh-title {
          font-weight: 700;
          font-size: clamp(30px, 6vw, 46px);
          line-height: 1.06;
          margin: 0;
          color: var(--fg);
          letter-spacing: -0.02em;
          font-family: var(--font-dm-serif), Georgia, serif;
        }
        .mh-title span {
          background: linear-gradient(100deg, #C89B3C, #e8c97a 50%, #C89B3C);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .mh-subtitle {
          margin-top: 18px;
          font-size: clamp(14px, 2vw, 12px);
          color: var(--muted);
          max-width: 680px;
          line-height: 1.65;
        }
        @media (min-width: 768px) {
          .mh-subtitle { margin-top: 22px; }
        }
        .mh-actions {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .mh-actions { margin-top: 34px; gap: 16px; }
        }

        .mh-accent-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 10;
        }
        .mh-hline, .mh-vline {
          position: absolute;
          background: var(--border);
          opacity: .5;
          will-change: transform, opacity;
        }
        .mh-hline {
          height: 1px; left: 0; right: 0;
          transform: scaleX(0);
          transform-origin: 50% 50%;
          animation: mh-drawX 800ms cubic-bezier(.22,.61,.36,1) forwards;
        }
        .mh-hline:nth-child(1){ top: 18%; animation-delay: 150ms; }
        .mh-hline:nth-child(2){ top: 50%; animation-delay: 280ms; }
        .mh-hline:nth-child(3){ top: 82%; animation-delay: 410ms; }
        .mh-vline {
          width: 1px; top: 0; bottom: 0;
          transform: scaleY(0);
          transform-origin: 50% 0%;
          animation: mh-drawY 900ms cubic-bezier(.22,.61,.36,1) forwards;
        }
        .mh-vline:nth-child(4){ left: 15%; animation-delay: 520ms; }
        .mh-vline:nth-child(5){ left: 50%; animation-delay: 640ms; }
        .mh-vline:nth-child(6){ left: 85%; animation-delay: 760ms; }
        .mh-hline::after, .mh-vline::after{
          content:"";
          position:absolute;
          inset:0;
          background: linear-gradient(90deg, transparent, rgba(200,155,60,.25), transparent);
          opacity:0;
          animation: mh-shimmer 900ms ease-out forwards;
        }
        .mh-hline:nth-child(1)::after{ animation-delay: 150ms; }
        .mh-hline:nth-child(2)::after{ animation-delay: 280ms; }
        .mh-hline:nth-child(3)::after{ animation-delay: 410ms; }
        .mh-vline:nth-child(4)::after{ animation-delay: 520ms; }
        .mh-vline:nth-child(5)::after{ animation-delay: 640ms; }
        .mh-vline:nth-child(6)::after{ animation-delay: 760ms; }

        @keyframes mh-drawX {
          0% { transform: scaleX(0); opacity: 0; }
          60% { opacity: .9; }
          100% { transform: scaleX(1); opacity: .5; }
        }
        @keyframes mh-drawY {
          0% { transform: scaleY(0); opacity: 0; }
          60% { opacity: .9; }
          100% { transform: scaleY(1); opacity: .5; }
        }
        @keyframes mh-shimmer {
          0% { opacity: .0; }
          30% { opacity: .3; }
          100% { opacity: 0; }
        }

        .mh-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          mix-blend-mode: screen;
          opacity: .6;
          z-index: 5;
        }

        .mh-bottom {
          position: relative;
          z-index: 20;
          width: 100%;
          padding: 22px 20px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 6px;
          background: rgba(7, 30, 66, 0.72);
          backdrop-filter: blur(10px);
        }
        @media (min-width: 768px) {
          .mh-bottom { padding: 28px 24px; }
        }
        .mh-tag {
          font-size: 10px;
          color: var(--accent);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 800;
        }
        @media (min-width: 768px) {
          .mh-tag { font-size: 11px; }
        }
        .mh-heading {
          font-size: clamp(15px, 2.5vw, 14px);
          font-weight: 700;
          color: var(--fg);
        }
        .mh-desc {
          font-size: 12px;
          color: var(--muted);
          max-width: 700px;
          line-height: 1.55;
        }
        @media (min-width: 768px) {
          .mh-desc { font-size: 13px; }
        }
      `}</style>

      {/* Top bar */}
      <div className="mh-topbar">
        <span className="mh-brand">Prime Hire Minds Consulting</span>
        <Link href={ctaHref} className="mh-cta">
          <span>{ctaText}</span>
          <IconArrowRight size={14} />
        </Link>
      </div>

      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="mh-canvas" />

      {/* Accent Grid Lines */}
      <div className="mh-accent-lines">
        <div className="mh-hline" />
        <div className="mh-hline" />
        <div className="mh-hline" />
        <div className="mh-vline" />
        <div className="mh-vline" />
        <div className="mh-vline" />
      </div>

      {/* Center Hero Content */}
      <main className="mh-main">
        <div className="mh-kicker">{kicker}</div>
        <h1 className="mh-title">{title}</h1>
        <p className="mh-subtitle">{subtitle}</p>
        {extraActions && <div className="mh-actions">{extraActions}</div>}
      </main>

      {/* Bottom Content Bar */}
      <div className="mh-bottom">
        {bottomContent || (
          <>
            <div className="mh-tag">{tag}</div>
            <div className="mh-heading">{heading}</div>
            <p className="mh-desc">{desc}</p>
          </>
        )}
      </div>
    </section>
  );
}
