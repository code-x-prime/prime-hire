import CTASection from "@/components/CTASection";
import IndustryCard from "@/components/IndustryCard";
import SectionHeading from "@/components/SectionHeading";
import AnimatedButton from "@/components/AnimatedButton";
import FAQSection from "@/components/FAQSection";
import MinimalHero from "@/components/MinimalHero";
import {
  IconBuildingFactory,
  IconStethoscope,
  IconDeviceLaptop,
  IconPlane,
  IconShoppingBag,
  IconTruck,
  IconBuildingBank,
  IconBuildingSkyscraper,
  IconCircleCheck,
  IconGlobe,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industries We Serve | Prime Hire Minds Consulting",
  description: "Specialised recruitment and HR consulting solutions across IT, Healthcare, Logistics, BPO, Finance, and more.",
};

/* ── DATA ── */

const industries = [
  {
    title: "Banking & Finance",
    icon: <IconBuildingBank className="w-6 h-6" />,
    image: "/banking-finance.jpg",
    description: "Regulatory-compliant talent for fintech, banking ops, and financial services.",
  },
  {
    title: "IT & Technology",
    icon: <IconDeviceLaptop className="w-6 h-6" />,
    image: "/it-technology.jpg",
    description: "Full-stack engineers, DevOps specialists, and product leaders on demand.",
  },
  {
    title: "Healthcare & Pharma",
    icon: <IconStethoscope className="w-6 h-6" />,
    image: "/healthcare.jpg",
    description: "Clinical, administrative, and pharma supply chain workforce solutions.",
  },
  {
    title: "Manufacturing",
    icon: <IconBuildingFactory className="w-6 h-6" />,
    image: "/manufacturing.jpg",
    description: "Skilled operators, technicians, and plant management professionals.",
  },
  {
    title: "Aviation & Aerospace",
    icon: <IconPlane className="w-6 h-6" />,
    image: "/aviation.jpg",
    description: "Certified aviation crew, ground handling, and MRO workforce solutions.",
  },
  {
    title: "Retail & E-commerce",
    icon: <IconShoppingBag className="w-6 h-6" />,
    image: "/retail.jpg",
    description: "Store operations, category management, and fulfilment centre talent.",
  },
  {
    title: "Logistics & Supply Chain",
    icon: <IconTruck className="w-6 h-6" />,
    image: "/logistics.jpg",
    description: "Fleet management, warehouse ops, and SCM leadership hiring.",
  },
  {
    title: "Construction & Real Estate",
    icon: <IconBuildingSkyscraper className="w-6 h-6" />,
    image: "/construction.jpg",
    description: "Site engineers, project managers, and safety compliance professionals.",
  },
];

const expertisePoints = [
  "Faster turnaround via pre-built sector-specific talent pools",
  "Higher retention through precise cultural and role matching",
  "Strict adherence to industry-specific compliance frameworks",
  "Strategic advisory on market compensation benchmarks",
];

const industriesFaqCategories = [
  { id: "expertise", label: "Expertise", icon: <IconGlobe className="w-4 h-4" /> },
  { id: "hiring", label: "Hiring Process", icon: <IconTrendingUp className="w-4 h-4" /> },
  { id: "compliance", label: "Compliance", icon: <IconCircleCheck className="w-4 h-4" /> },
  { id: "partnership", label: "Partnership", icon: <IconUsers className="w-4 h-4" /> },
];

const industriesFaqs = [
  { category: "expertise", question: "Which industries do you specialise in?", answer: "We specialise in Banking & Finance, IT & Technology, Healthcare & Pharma, Manufacturing, Aviation & Aerospace, Retail & E-commerce, Logistics & Supply Chain, and Construction & Real Estate." },
  { category: "expertise", question: "Do you understand niche technical roles?", answer: "Yes. Our consultants are organised into industry-specific pods with real domain knowledge, so the person handling your role understands the technical skills and competencies required." },
  { category: "hiring", question: "How do you source candidates for specialised industries?", answer: "We leverage pre-built sector-specific talent pools, targeted outreach, passive candidate mapping, and partnerships with industry communities to find the right fit quickly." },
  { category: "hiring", question: "Can you handle bulk hiring for manufacturing or retail?", answer: "Yes. We design structured assessment workflows and batch interview processes to hire large volumes efficiently without compromising quality." },
  { category: "compliance", question: "Do you ensure industry-specific compliance?", answer: "Absolutely. We align with sector-specific statutory, safety, and documentation requirements during sourcing, verification, and onboarding." },
  { category: "compliance", question: "Are background verifications included?", answer: "We coordinate employment, education, identity, address, and criminal-record verifications through accredited partners for all major industry roles." },
  { category: "partnership", question: "How do you charge for industry hiring?", answer: "Pricing is based on role volume, complexity, and engagement type. We provide transparent proposals after understanding your specific industry and workforce needs." },
  { category: "partnership", question: "Can you scale with seasonal demand?", answer: "Yes. Our RPO and bulk hiring models are designed to scale up or down based on your seasonal, project-based, or expansion hiring needs." },
];

/* ── PAGE ── */

export default function IndustriesPage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <MinimalHero
        kicker="Specialised Domains"
        title={<>Industries <span>We Serve</span></>}
        subtitle="Deep domain expertise ensures we speak your industry's language and understand its unique operational challenges — from niche tech to heavy manufacturing."
        ctaText="View Industries"
        ctaHref="#industries-grid"
        tag="Sector-Focused Hiring"
        heading="12+ Industries, One Trusted Recruitment Partner"
        desc="From Banking & Finance to Healthcare, Manufacturing, IT, Aviation, Retail and beyond."
      />

      {/* ════ INDUSTRY CARDS GRID ════ */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(170deg, #1a4080 0%, #0B2C5F 55%, #071e42 100%)" }}
      >
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-32 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.09), transparent 65%)" }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 relative z-10">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              badge="Our Sectors"
              title={<>Expertise Across <span className="text-brand-secondary">Every Domain</span></>}
              alignment="left"
              light
              rule
            />
            <p className="text-white/40 text-sm md:text-base max-w-xs pb-1 flex-shrink-0 hidden md:block">
              {industries.length} specialised sectors with dedicated consultant pods.
            </p>
          </div>

          {/* 4-col grid on desktop, 2-col on tablet, 1-col on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {industries.map((industry, i) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                icon={industry.icon}
                image={industry.image}
                description={industry.description}
                delay={i * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════ EXPERTISE SPLIT ════ */}
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
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* Copy */}
            <div>
              <SectionHeading
                badge="Specialised Approach"
                title={
                  <>
                    Why Industry Expertise{" "}
                    <span className="text-brand-secondary">Matters</span>
                  </>
                }
                alignment="left"
                rule
              />

              <p className="text-brand-dark/52 text-base md:text-[1.02rem] leading-relaxed mb-10">
                Generic recruitment fails when dealing with specialised corporate roles. Our consultants are divided into
                industry-specific pods — the person handling your requirement actually understands the technical nuances,
                compliance needs, and market dynamics of your sector.
              </p>

              <ul className="divide-y divide-brand-accent/60 mb-10">
                {expertisePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 group cursor-default">
                    <div
                      className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-250 group-hover:bg-brand-secondary"
                      style={{
                        background: "rgba(200,155,60,0.1)",
                        border: "1px solid rgba(200,155,60,0.2)",
                      }}
                    >
                      <IconCircleCheck className="w-3.5 h-3.5 text-brand-secondary group-hover:text-white transition-colors duration-250" />
                    </div>
                    <span className="text-brand-dark/62 text-sm md:text-[0.95rem] leading-relaxed group-hover:text-brand-dark transition-colors duration-200">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <AnimatedButton href="/contact" variant="primary" size="md">
                Discuss Your Industry Needs
              </AnimatedButton>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className="relative overflow-hidden aspect-[4/5]"
                style={{ boxShadow: "0 32px 80px -20px rgba(11,44,95,0.18)" }}
              >
                <Image
                  src="/it-technology.jpg"
                  alt="Industry Expertise"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,44,95,0.3) 0%, transparent 60%)" }}
                />
              </div>

              {/* Floating stat — bottom-left */}
              <div
                className="absolute -bottom-5 -left-4 sm:-left-8 p-6 hidden sm:block"
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 16px 40px -8px rgba(11,44,95,0.14)",
                }}
              >
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-1">
                  Retention Rate
                </div>
                <div className="font-serif font-bold text-3xl text-brand-dark leading-none">94%</div>
              </div>

              {/* Floating stat — top-right */}
              <div
                className="absolute -top-5 -right-4 sm:-right-8 p-5 hidden sm:block"
                style={{
                  background: "linear-gradient(135deg, #1a4080, #0B2C5F)",
                  border: "1px solid rgba(200,155,60,0.2)",
                  boxShadow: "0 16px 40px -8px rgba(11,44,95,0.4)",
                }}
              >
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/35 mb-1">
                  Domains
                </div>
                <div className="font-serif font-bold text-3xl text-white leading-none">12+</div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-brand-secondary/40 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-brand-secondary/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <FAQSection
        title={<>Industry Hiring <span className="text-brand-secondary">FAQs</span></>}
        subtitle="Common questions about our industry-specific recruitment and workforce solutions."
        categories={industriesFaqCategories}
        faqs={industriesFaqs}
        contactCta={{
          title: "Need industry-specific hiring support?",
          description: "Talk to our sector-specialised consultants about your workforce requirements.",
          buttonLabel: "Get in Touch",
          href: "/contact",
        }}
      />

      {/* ════ BOTTOM STRIP — industry name tags ════ */}
      <section
        className="border-t border-brand-accent/60 bg-white py-10 md:py-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-5 h-[2px] bg-brand-secondary" />
            <span className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-secondary">
              All Sectors At A Glance
            </span>
            <span className="w-5 h-[2px] bg-brand-secondary" />
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {industries.map(({ title, icon }) => (
              <div
                key={title}
                className="group flex items-center gap-2.5 px-4 py-2.5 border border-brand-accent/60 hover:border-brand-secondary hover:bg-brand-secondary transition-all duration-250 cursor-default"
              >
                <span className="[&_svg]:w-3.5 [&_svg]:h-3.5 text-brand-secondary/70 group-hover:text-white transition-colors duration-250">
                  {icon}
                </span>
                <span className="text-[0.78rem] font-black uppercase tracking-[0.08em] text-brand-dark/55 group-hover:text-white transition-colors duration-250">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Hire Across Industries"
        highlight="With Confidence"
        description="From IT and healthcare to manufacturing and retail, our industry-focused recruiters deliver talent that understands your sector."
        primaryButton={{ text: "Request Industry Hiring Support", href: "/contact" }}
      />
    </>
  );
}
