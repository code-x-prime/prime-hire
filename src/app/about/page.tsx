import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AnimatedButton from "@/components/AnimatedButton";
import FAQSection from "@/components/FAQSection";
import MinimalHero from "@/components/MinimalHero";
import {
  IconTarget,
  IconAward,
  IconShield,
  IconGlobe,
  IconTrendingUp,
  IconUsers,
  IconCircleCheck,
  IconBuildingSkyscraper,
  IconMapPin,
} from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Prime Hire Minds Consulting",
  description:
    "Learn about our journey, mission, and core values that drive our premium corporate recruitment and HR consulting solutions.",
};

/* ── DATA ── */

const values = [
  {
    icon: IconTarget,
    number: "01",
    title: "Precision",
    desc: "We don't believe in guesswork. Our processes are data-driven and meticulously planned to ensure exact talent matches every time.",
  },
  {
    icon: IconAward,
    number: "02",
    title: "Excellence",
    desc: "We hold ourselves to the highest corporate standards, delivering premium service quality at every touchpoint.",
  },
  {
    icon: IconShield,
    number: "03",
    title: "Integrity",
    desc: "Transparency, compliance, and ethical practices form the bedrock of our operations and long-term client relationships.",
  },
];

const milestones = [
  { year: "2012", event: "Prime Hire Minds Consulting founded with a vision to bridge the gap between exceptional talent and visionary companies across India." },
  { year: "2015", event: "Established excellence in permanent recruitment, building deep talent pipelines across banking, IT, and healthcare sectors." },
  { year: "2018", event: "Expanded services to include executive search, RPO solutions, and full-scale HR consulting for growing enterprises." },
  { year: "2021", event: "Crossed the milestone of 500+ corporate clients served, strengthening our pan-India recruitment network." },
  { year: "2024", event: "Recognized as a leading strategic HR consulting, career advisory, and internship partner across multiple industries." },
  { year: "2026", event: "Empowering 1000+ enterprises with end-to-end workforce solutions, AI-driven talent matching, and pan-India internship programs." },
];

const strengths = [
  "Pan-India recruitment network",
  "ISO-certified processes",
  "Industry-specific expertise",
  "Corporate compliance guaranteed",
  "48-hour talent shortlisting",
  "End-to-end onboarding support",
];

const aboutFaqCategories = [
  { id: "company", label: "Company", icon: <IconBuildingSkyscraper className="w-4 h-4" /> },
  { id: "experience", label: "Experience", icon: <IconAward className="w-4 h-4" /> },
  { id: "approach", label: "Approach", icon: <IconTarget className="w-4 h-4" /> },
  { id: "coverage", label: "Coverage", icon: <IconGlobe className="w-4 h-4" /> },
];

const aboutFaqs = [
  { category: "company", question: "When was Prime Hire Minds Consulting founded?", answer: "We were founded in 2012 with a mission to bridge the gap between talented professionals and forward-thinking companies through ethical, precision-driven recruitment and HR consulting." },
  { category: "company", question: "What services do you offer?", answer: "We offer permanent recruitment, executive search, bulk hiring, RPO, HR consulting, startup HR setup, HR operations outsourcing, payroll coordination, background verification, and employee engagement solutions." },
  { category: "experience", question: "How many clients have you served?", answer: "We have served 1000+ corporate clients across India and have built a network of 10,000+ placed professionals over the years." },
  { category: "experience", question: "What is your placement success rate?", answer: "Our placement rate stands at 98.5%, supported by rigorous screening, cultural fit assessment, and structured onboarding processes." },
  { category: "approach", question: "What makes your approach different?", answer: "We take a consultative, strategic approach rather than transactional recruiting. Each engagement is led by domain-specialised consultants who understand your industry and hiring context." },
  { category: "approach", question: "Do you follow compliance standards?", answer: "Yes. Statutory compliance, data privacy, and ethical hiring practices are fundamental to our operations. We align with industry-standard verification and documentation processes." },
  { category: "coverage", question: "Do you operate outside your office location?", answer: "Absolutely. While our corporate office is located in ***, we provide pan-India recruitment and HR consulting services across all major cities and industrial corridors." },
  { category: "coverage", question: "Which industries do you specialise in?", answer: "We cover Banking & Finance, IT & Technology, Healthcare, Manufacturing, Aviation, Retail, Logistics, Construction, and several other specialised sectors." },
];

/* ── PAGE ── */

export default function AboutPage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <MinimalHero
        kicker="Our Legacy"
        title={<>Building Exceptional<br /><span>Workforces</span> Since 2012</>}
        subtitle="Pioneering excellence in corporate staffing, HR consulting, and BPO operations. Trusted by 1000+ enterprises across India to deliver talent that drives growth."
        ctaText="Explore Our Story"
        ctaHref="#our-story"
        tag="Trusted Across India"
        heading="Pan-India Recruitment & HR Consulting"
        desc="Partnering with 1000+ enterprises to deliver industry-ready talent and compliant HR operations."
      />
      {/* ════ OUR STORY ════ */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* Image column */}
            <div className="relative order-2 lg:order-1">
              <div
                className="relative overflow-hidden aspect-[4/5]"
                style={{ boxShadow: "0 32px 80px -20px rgba(11,44,95,0.18)" }}
              >
                <ImagePlaceholder altText="Our Team" dark aspect="portrait" />
              </div>

              {/* Floating stat */}
              <div
                className="absolute -bottom-5 -right-4 sm:-right-8 p-6 hidden sm:block"
                style={{
                  background: "linear-gradient(135deg, #1a4080, #0B2C5F)",
                  border: "1px solid rgba(200,155,60,0.2)",
                  boxShadow: "0 16px 40px -8px rgba(11,44,95,0.45)",
                }}
              >
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-1">Since</div>
                <div className="font-serif font-bold text-3xl text-white leading-none">2012</div>
              </div>

              {/* Location badge */}
              <div
                className="absolute top-5 -left-4 sm:-left-6 flex items-center gap-2.5 px-4 py-3 bg-white hidden sm:flex"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 8px 24px -4px rgba(11,44,95,0.12)",
                }}
              >
                <IconMapPin className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" />
                <span className="text-[10px] font-black text-brand-dark/50 uppercase tracking-[0.18em]">Pan-India</span>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-5 left-5 w-7 h-7 border-t-2 border-l-2 border-brand-secondary/35 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-7 h-7 border-b-2 border-r-2 border-brand-secondary/35 pointer-events-none" />
            </div>

            {/* Copy column */}
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="Our Story"
                title={
                  <>
                    Building Tomorrow&apos;s{" "}
                    <span className="text-brand-secondary">Corporate Workforce</span>
                  </>
                }
                alignment="left"
                rule
              />

              <div className="space-y-5 text-brand-dark/55 text-base md:text-[1.02rem] leading-relaxed mb-10">
                <p>
                  Prime Hire Minds Consulting was founded with a clear mission: to bridge the gap between talented professionals and forward-thinking companies. Since inception, we&apos;ve been committed to delivering exceptional recruitment and HR consulting solutions that drive business growth through integrity and precision.
                </p>
                <p>
                  We specialize in connecting exceptional talent with organizations that value excellence — meticulously matching candidates with opportunities, ensuring long-term success and organizational growth through comprehensive staffing and strategic HR consulting.
                </p>
              </div>

              {/* Strengths checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
                {strengths.map((s) => (
                  <div key={s} className="flex items-center gap-2.5">
                    <IconCircleCheck className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" />
                    <span className="text-[0.82rem] text-brand-dark/60 font-medium">{s}</span>
                  </div>
                ))}
              </div>

              {/* Metric pair */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  { value: "12+", label: "Years of Excellence" },
                  { value: "1000+", label: "Corporate Clients" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-6 group cursor-default transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,44,95,0.08)]"
                    style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                  >
                    <div
                      className="font-serif font-bold text-brand-primary mb-1"
                      style={{ fontSize: "2.4rem", lineHeight: 1 }}
                    >
                      {value}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-dark/32">{label}</p>
                  </div>
                ))}
              </div>

              <AnimatedButton href="/contact" variant="primary" size="md">
                Start a Conversation
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FULL-WIDTH PULL QUOTE ════ */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #f0f4f8 100%)" }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }} />
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full pointer-events-none opacity-30"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.15), transparent 70%)" }} />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full pointer-events-none opacity-30"
          style={{ background: "radial-gradient(circle, rgba(11,44,95,0.1), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-5xl mx-auto px-5 md:px-10 relative z-10 text-center">

          {/* Big decorative quote mark */}
          <div
            className="leading-none select-none mb-8 mx-auto"
            style={{
              fontSize: "clamp(4rem, 10vw, 7rem)",
              background: "linear-gradient(135deg, #C89B3C 0%, #e8c97a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 0.8,
            }}
            aria-hidden
          >
            &ldquo;
          </div>

          <blockquote
            className="font-serif text-2xl md:text-3xl lg:text-[2.1rem] text-brand-dark leading-[1.6] tracking-tight mb-12 max-w-4xl mx-auto"
            style={{ fontStyle: "italic" }}
          >
            Prime Hire Minds Consulting has been instrumental in building our team with exceptional talent.
            Their professionalism and understanding of our business needs have delivered outstanding results consistently.
          </blockquote>

          {/* Stars */}
          <div className="flex items-center gap-1.5 justify-center mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="w-5 h-5" style={{ fill: "#C89B3C" }}>
                <path d="M10 1l2.39 4.84L18 6.71l-4 3.9.94 5.5L10 13.48l-4.94 2.63.94-5.5-4-3.9 5.61-.87L10 1z" />
              </svg>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full border-2 border-brand-secondary/30 overflow-hidden mb-2"
              style={{ background: "linear-gradient(135deg, #0B2C5F 0%, #1a4080 100%)" }}>
              <div className="w-full h-full flex items-center justify-center text-white font-serif font-bold text-xl">
                AR
              </div>
            </div>
            <div className="w-10 h-[2px] bg-brand-secondary" />
            <div className="font-serif font-bold text-brand-dark text-xl">Ananya Reddy</div>
            <div className="text-[11px] font-black text-brand-secondary uppercase tracking-[0.2em]">
              Vice President · Talent Acquisition
            </div>
            <div className="text-[10px] text-brand-dark/40 font-medium tracking-wide">
              TechNova Solutions Pvt. Ltd.
            </div>
          </div>
        </div>
      </section>

      {/* ════ OUR RECRUITMENT PROCESS ════ */}
      <section
        className="py-14 md:py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #faf8f4 0%, #f5f0e8 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }} />

        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 relative z-10">
          <SectionHeading
            badge="How We Work"
            title={<>Our Recruitment <span className="text-brand-secondary">Process</span></>}
            subtitle="A structured, five-step approach to deliver the right talent — efficiently and reliably."
            rule
          />

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mt-16 items-start">
            {/* Left — Description */}
            <div className="lg:sticky lg:top-32">
              <p className="text-brand-dark/55 text-sm md:text-base leading-relaxed mb-6">
                We follow a proven five-stage recruitment methodology designed to identify, evaluate, and onboard the right professionals for your organisation — reducing time-to-hire and improving retention.
              </p>
              <p className="text-brand-dark/55 text-sm md:text-base leading-relaxed mb-8">
                From understanding your hiring needs to onboarding the final candidate, every step is driven by data, domain expertise, and a commitment to quality.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-brand-secondary" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-secondary">
                  5-Stage Methodology
                </span>
              </div>
            </div>

            {/* Right — Steps */}
            <div className="relative">
              {/* Vertical connector */}
              <div className="absolute left-[23px] top-8 bottom-8 w-px hidden md:block"
                style={{ background: "linear-gradient(to bottom, rgba(200,155,60,0.1), rgba(200,155,60,0.4), rgba(200,155,60,0.1))" }} />

              <div className="space-y-10 md:space-y-12">
                {[
                  {
                    step: "01",
                    title: "Discover",
                    desc: "Deep-dive into your hiring needs, company culture, team dynamics, and role-specific requirements through structured consultations.",
                  },
                  {
                    step: "02",
                    title: "Source",
                    desc: "Multi-channel talent sourcing across our pan-India network, job portals, referrals, and passive candidate databases.",
                  },
                  {
                    step: "03",
                    title: "Evaluate",
                    desc: "Rigorous screening, technical assessments, behavioural interviews, and cultural fit evaluation for every shortlisted candidate.",
                  },
                  {
                    step: "04",
                    title: "Present",
                    desc: "Curated shortlists with detailed candidate profiles, assessment reports, and recommendation notes for informed decision-making.",
                  },
                  {
                    step: "05",
                    title: "Onboard",
                    desc: "Offer negotiation support, joining follow-up, and post-placement check-ins to ensure smooth integration and long-term retention.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-5 md:gap-8 group">
                    {/* Step number */}
                    <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 flex items-center justify-center font-serif font-bold text-sm transition-all duration-300 group-hover:scale-110"
                        style={{ background: "linear-gradient(135deg, #0B2C5F 0%, #1a4080 100%)", color: "#C89B3C" }}>
                        {step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1 flex-1 min-w-0">
                      <h4 className="font-serif text-lg md:text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                        {title}
                      </h4>
                      <p className="text-brand-dark/50 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ TIMELINE ════ */}
      <section
        className="py-14 md:py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #1a4080 0%, #0B2C5F 50%, #071e42 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.1), transparent 65%)" }} />
        <div className="absolute -bottom-40 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.06), transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }} />

        <div className="max-w-6xl mx-auto px-5 md:px-10 xl:px-16 relative z-10">
          <SectionHeading
            badge="Our Journey"
            title={<>Key <span className="text-brand-secondary">Milestones</span></>}
            subtitle="From a focused boutique firm to a pan-India corporate solutions powerhouse."
            light
            rule
          />

          {/* Timeline — vertical center line on mobile, alternating on desktop */}
          <div className="relative mt-16 md:mt-20">
            {/* Center vertical line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
              style={{ background: "linear-gradient(to bottom, rgba(200,155,60,0.1), rgba(200,155,60,0.4) 50%, rgba(200,155,60,0.1))" }} />

            <div className="space-y-12 md:space-y-0">
              {milestones.map(({ year, event }, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={year} className="relative md:flex md:items-center md:min-h-[140px]">
                    {/* Mobile layout */}
                    <div className="flex gap-5 md:hidden">
                      <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                        <div className="w-14 h-14 flex items-center justify-center font-serif font-bold text-sm transition-all duration-300"
                          style={{ background: "rgba(200,155,60,0.15)", border: "2px solid rgba(200,155,60,0.4)", color: "#C89B3C" }}>
                          {year}
                        </div>
                        <div className="w-px flex-1 mt-2" style={{ background: "rgba(200,155,60,0.2)", minHeight: "2rem" }} />
                      </div>
                      <div className="pt-2.5 pb-6 flex-1 min-w-0">
                        <p className="text-white/60 text-sm leading-relaxed">{event}</p>
                      </div>
                    </div>

                    {/* Desktop layout — alternating */}
                    <div className="hidden md:flex md:items-center w-full">
                      {/* Left content */}
                      <div className={`flex-1 ${isLeft ? "pr-16 text-right" : ""}`}>
                        {isLeft && (
                          <div className="group">
                            <div className="inline-block px-5 py-3 mb-3 transition-all duration-300 group-hover:bg-brand-secondary/20"
                              style={{ background: "rgba(200,155,60,0.08)", border: "1px solid rgba(200,155,60,0.2)" }}>
                              <span className="font-serif font-bold text-brand-secondary text-lg">{year}</span>
                            </div>
                            <p className="text-white/60 text-[0.95rem] leading-relaxed group-hover:text-white/80 transition-colors">{event}</p>
                          </div>
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-4 h-4 rounded-full border-2 border-brand-secondary bg-[#0B2C5F] transition-all duration-300 hover:scale-125 hover:bg-brand-secondary" />
                      </div>

                      {/* Right content */}
                      <div className={`flex-1 ${!isLeft ? "pl-16" : ""}`}>
                        {!isLeft && (
                          <div className="group">
                            <div className="inline-block px-5 py-3 mb-3 transition-all duration-300 group-hover:bg-brand-secondary/20"
                              style={{ background: "rgba(200,155,60,0.08)", border: "1px solid rgba(200,155,60,0.2)" }}>
                              <span className="font-serif font-bold text-brand-secondary text-lg">{year}</span>
                            </div>
                            <p className="text-white/60 text-[0.95rem] leading-relaxed group-hover:text-white/80 transition-colors">{event}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════ CORE VALUES ════ */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 relative z-10">
          <SectionHeading
            badge="Our Guiding Principles"
            title={
              <>
                Our Core <span className="text-brand-secondary">Values</span>
              </>
            }
            subtitle="The fundamental principles that guide every interaction, decision, and corporate strategy."
            rule
          />

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {values.map(({ icon: Icon, number, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden flex flex-col p-8 md:p-10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(11,44,95,0.1)]"
                style={{
                  border: "1px solid #E2E8F0",
                }}
              >
                {/* Gold top bar — reveals on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-brand-secondary"
                />

                {/* Ghost number — decorative */}
                <div
                  className="absolute -bottom-3 -right-1 font-serif font-black leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "6rem",
                    color: "rgba(11,44,95,0.04)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {number}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-brand-primary"
                  style={{
                    background: "rgba(11,44,95,0.05)",
                    border: "1px solid rgba(11,44,95,0.08)",
                  }}
                >
                  <Icon className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors duration-250 relative z-10">
                  {title}
                </h3>

                <p className="text-brand-dark/50 text-sm leading-relaxed flex-grow relative z-10">
                  {desc}
                </p>

                {/* Bottom gold rule — on hover */}
                <div className="mt-8 h-[2px] w-0 group-hover:w-10 bg-brand-secondary transition-all duration-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <FAQSection
        title={<>About Prime Hire <span className="text-brand-secondary">Minds</span></>}
        subtitle="Learn more about our company, experience, approach, and the industries we serve."
        categories={aboutFaqCategories}
        faqs={aboutFaqs}
        contactCta={{
          title: "Still have questions?",
          description: "Speak with our team to understand how we can support your workforce goals.",
          buttonLabel: "Contact Us",
          href: "/contact",
        }}
      />

      {/* ════ WHY US STRIP ════ */}
      <section
        className="relative overflow-hidden border-t border-brand-accent/60"
        style={{ background: "#F8FAFC" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 py-14 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">

            {/* Left headline */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-[2px] bg-brand-secondary" />
                <span className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-secondary">
                  Why Choose Us
                </span>
              </div>
              <h2
                className="font-serif font-bold text-brand-dark leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                What Sets <span className="text-brand-secondary">Prime Hire Minds</span> Apart
              </h2>
            </div>

            {/* Right: two-col fact grid */}
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: IconBuildingSkyscraper, label: "500+", sub: "Corporate Clients" },
                { icon: IconTrendingUp, label: "98.5%", sub: "Placement Rate" },
                { icon: IconGlobe, label: "50+", sub: "Industries Served" },
                { icon: IconUsers, label: "10k+", sub: "Professionals Placed" },
                { icon: IconAward, label: "12+", sub: "Years Experience" },
                { icon: IconMapPin, label: "PAN", sub: "India Coverage" },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={sub}
                  className="group flex flex-col items-start gap-2 p-5 bg-white border border-brand-accent/60 hover:border-brand-secondary/30 hover:shadow-[0_8px_24px_rgba(11,44,95,0.07)] transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ background: "rgba(200,155,60,0.1)" }}
                  >
                    <Icon className="w-3.5 h-3.5 text-brand-secondary" />
                  </div>
                  <div className="font-serif font-bold text-brand-primary text-xl leading-none">{label}</div>
                  <div className="text-[9px] font-black text-brand-dark/32 uppercase tracking-[0.18em]">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build a"
        highlight="Stronger Team?"
        description="Whether you need executive leadership, bulk hiring, or end-to-end HR consulting, we bring the expertise and network to deliver."
        primaryButton={{ text: "Partner With Us", href: "/contact" }}
      />
    </>
  );
}
