"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { IconArrowRight, IconBrandLinkedin, IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { useRef } from "react";

export default function AboutSection3() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.08,
        duration: 0.35,
      },
    }),
    hidden: {
      filter: "blur(8px)",
      y: -12,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.08,
        duration: 0.4,
      },
    }),
    hidden: {
      filter: "blur(8px)",
      opacity: 0,
    },
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-[#F8FAFC]" ref={heroRef}>
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Header with badge and contact icons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8 w-full sm:w-[90%] lg:w-[85%] relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-brand-secondary text-xl">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-brand-dark/60"
              >
                Corporate Excellence
              </TimelineContent>
            </div>
            <div className="flex gap-2 md:gap-3">
              {[
                { icon: IconBrandLinkedin, href: "https://www.linkedin.com" },
                { icon: IconMail, href: "mailto:info@primehireminds.com" },
                { icon: IconPhone, href: "tel:#" },
                { icon: IconMapPin, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <TimelineContent
                  key={href}
                  as="a"
                  animationNum={index}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 border border-brand-accent/60 bg-white rounded-lg flex items-center justify-center text-brand-dark/50 hover:text-brand-secondary hover:border-brand-secondary transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </TimelineContent>
              ))}
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
          >
            <svg
              className="w-full h-auto"
              viewBox="0 0 100 40"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                href="/about-section-clip.jpg"
              />
            </svg>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 md:py-4 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex flex-wrap gap-3 md:gap-6"
            >
              <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm">
                <span className="text-brand-secondary font-bold">10+</span>
                <span className="text-brand-dark/60">Years Experience</span>
                <span className="text-brand-accent hidden sm:inline">|</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm">
                <span className="text-brand-secondary font-bold">500+</span>
                <span className="text-brand-dark/60">Corporate Clients</span>
              </div>
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-12 md:bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-3 md:gap-4">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-3xl md:text-2xl text-xl items-center gap-1.5 md:gap-2"
              >
                <span className="text-brand-secondary font-semibold">10k+</span>
                <span className="text-brand-dark/60 uppercase text-sm md:text-base">Professionals</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm"
              >
                <span className="text-brand-secondary font-bold">98.5%</span>
                <span className="text-brand-dark/60">Placement Rate</span>
                <span className="text-brand-accent lg:hidden block">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 lg:gap-12 mt-4 md:mt-8">
          <div className="md:col-span-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl !leading-[110%] font-semibold text-brand-dark mb-6 md:mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.05}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 22,
                  delay: 0.15,
                }}
              >
                Strategic Recruitment & HR Consulting for Growing Enterprises.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-6 md:gap-8 text-brand-dark/60"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm md:text-base"
              >
                <p className="leading-relaxed text-justify">
                  Prime Hire Minds Consulting is a trusted advisory firm dedicated to connecting premier talent with leading enterprises. We specialize in permanent recruitment, executive search, RPO, and full-scale HR consulting services designed to elevate business performance.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm md:text-base"
              >
                <p className="leading-relaxed text-justify">
                  Our consultative approach combines deep industry knowledge, rigorous candidate assessment, and compliance-focused processes. From startups building their first HR function to large enterprises scaling operations, we deliver tailored solutions that drive measurable workforce outcomes.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-left md:text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-brand-secondary text-xl md:text-2xl font-bold mb-1 md:mb-2"
              >
                PRIME HIRE
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-brand-dark/60 text-xs md:text-sm mb-4 md:mb-6"
              >
                Minds Consulting
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-4 md:mb-6"
              >
                <p className="text-brand-dark/80 text-sm md:text-base font-medium">
                  Ready to build a high-performing workforce with the right talent and HR systems?
                </p>
              </TimelineContent>

              <TimelineContent
                as="a"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white px-5 md:px-6 py-3 md:py-3.5 rounded-lg cursor-pointer font-semibold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 hover:gap-4"
              >
                Discover Our Story <IconArrowRight className="w-4 h-4" />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
