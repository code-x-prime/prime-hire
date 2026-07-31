"use client";

import ElegantCarousel from "@/components/ui/elegant-carousel";
import AboutSection3 from "@/components/ui/about-section";
import ParallaxScrollFeatureSection from "@/components/ui/parallax-scroll-feature-section";
import Scroll01 from "@/components/ui/scroll-01";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import BentoFeatures from "@/components/BentoFeatures";
import AnimatedButton from "@/components/AnimatedButton";
import Link from "next/link";
import {
  IconUsers,
  IconBriefcase,
  IconGlobe,
  IconBuildingSkyscraper,
  IconFileCheck,
  IconFileText,
  IconBuildingFactory,
  IconStethoscope,
  IconDeviceLaptop,
  IconPlane,
  IconShoppingBag,
  IconTruck,
  IconBuildingBank,
  IconCircleCheck,
  IconSchool,
  IconArrowRight,
  IconUserCheck,
  IconBuilding,
  IconClock,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

/* ─────────────── DATA ─────────────── */

const heroSlides = [
  {
    id: 1,
    title: "Strategic Workforce Solutions",
    subtitle: "Recruitment That Drives Growth",
    description:
      "We connect exceptional talent with ambitious enterprises through permanent recruitment, executive search and scalable RPO services — built for precision, speed and long-term impact.",
    accent: "#C89B3C",
    imageUrl: "/hero-bg.jpg",
    cta: { label: "Partner With Us", href: "/contact" },
  },
  {
    id: 2,
    title: "Executive Leadership Search",
    subtitle: "C-Suite & Senior Hiring",
    description:
      "Discreet, research-led executive search for leadership roles that shape company direction. We identify transformational leaders who align with your vision, culture and business objectives.",
    accent: "#0B2C5F",
    imageUrl: "/contractual-services.jpg",
    cta: { label: "Hire Leaders", href: "/contact" },
  },
  {
    id: 3,
    title: "Complete HR Consulting",
    subtitle: "Setup, Operations & Compliance",
    description:
      "From startup HR setup and policy documentation to payroll coordination, HRMS implementation and employee engagement — we build HR functions that scale with your business.",
    accent: "#C89B3C",
    imageUrl: "/hr-consulting.jpg",
    cta: { label: "Explore HR Services", href: "/services" },
  },
  {
    id: 4,
    title: "Industry-Specific Hiring",
    subtitle: "Domain Expertise Across Sectors",
    description:
      "Specialised recruitment across banking, IT, healthcare, manufacturing, aviation, retail, logistics and construction — delivering candidates who understand your industry from day one.",
    accent: "#0B2C5F",
    imageUrl: "/recruitment-solutions.jpg",
    cta: { label: "View Industries", href: "/industries" },
  },
];

const homepageServices = [
  {
    id: 1,
    title: "Permanent Recruitment",
    description: "End-to-end hiring support, including candidate sourcing, screening, interview coordination, salary negotiation and joining follow-up.",
    icon: <IconUsers className="w-5 h-5" />,
    image: "/providing-services.jpg",
    reverse: false,
  },
  {
    id: 2,
    title: "Executive Search",
    description: "Specialised recruitment for senior management, leadership and business-critical positions.",
    icon: <IconBriefcase className="w-5 h-5" />,
    image: "/contractual-services.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "RPO Services",
    description: "Dedicated recruitment process outsourcing support for companies that want to outsource part or all of their hiring process.",
    icon: <IconGlobe className="w-5 h-5" />,
    image: "/recruitment-solutions.jpg",
    reverse: false,
  },
  {
    id: 4,
    title: "Startup HR Setup",
    description: "Complete HR setup for startups and small businesses, including employee documentation, processes, templates and basic HR systems.",
    icon: <IconBuildingSkyscraper className="w-5 h-5" />,
    image: "/hr-consulting.jpg",
    reverse: true,
  },
  {
    id: 5,
    title: "HR Operations Outsourcing",
    description: "Day-to-day HR support covering employee records, onboarding, attendance, probation, confirmations, employee queries and exit documentation.",
    icon: <IconFileCheck className="w-5 h-5" />,
    image: "/hr-operations.jpg",
    reverse: false,
  },
  {
    id: 6,
    title: "HR Policies & Documentation",
    description: "Development and customisation of employee handbooks, HR policies, standard operating procedures, letters and workplace guidelines.",
    icon: <IconFileText className="w-5 h-5" />,
    image: "/payroll-management.jpg",
    reverse: true,
  },
];

const industries = [
  {
    title: "Banking & Finance",
    description: "We deliver skilled talent for retail banking, investment operations, insurance, NBFCs, fintech and financial services — from relationship managers and operations executives to compliance and risk professionals.",
    icon: <IconBuildingBank className="w-6 h-6" />,
    image: "/banking-finance.jpg",
  },
  {
    title: "IT & Technology",
    description: "Specialised hiring for software development, cloud infrastructure, cybersecurity, data analytics, IT support, QA and technical leadership roles across product and service companies.",
    icon: <IconDeviceLaptop className="w-6 h-6" />,
    image: "/it-technology.jpg",
  },
  {
    title: "Healthcare",
    description: "Recruitment support for hospitals, diagnostic centres, pharmaceuticals and wellness chains — covering clinical, paramedical, administrative, sales and operations roles.",
    icon: <IconStethoscope className="w-6 h-6" />,
    image: "/healthcare.jpg",
  },
  {
    title: "Manufacturing",
    description: "Workforce solutions for production units, assembly lines, quality control, plant engineering, supply chain and factory operations across FMCG, electronics and industrial goods.",
    icon: <IconBuildingFactory className="w-6 h-6" />,
    image: "/manufacturing.jpg",
  },
  {
    title: "Aviation",
    description: "Hiring for airlines, airports, ground handling, cargo operations, maintenance and hospitality-linked aviation roles requiring customer service and safety-focused professionals.",
    icon: <IconPlane className="w-6 h-6" />,
    image: "/aviation.jpg",
  },
  {
    title: "Retail",
    description: "End-to-end staffing for retail chains, e-commerce operations, luxury retail, store management, visual merchandising, sales associates and back-end support teams.",
    icon: <IconShoppingBag className="w-6 h-6" />,
    image: "/retail.jpg",
  },
  {
    title: "Logistics",
    description: "Talent supply for warehousing, last-mile delivery, fleet management, freight forwarding, supply chain coordination and distribution centre operations.",
    icon: <IconTruck className="w-6 h-6" />,
    image: "/logistics.jpg",
  },
  {
    title: "Construction",
    description: "Recruitment for real estate and infrastructure projects including project managers, site engineers, civil supervisors, safety officers, skilled labour coordination and admin staff.",
    icon: <IconBuilding className="w-6 h-6" />,
    image: "/construction.jpg",
  },
];

const faqCategories = [
  { id: "general", label: "General", icon: <IconCircleCheck className="w-4 h-4" /> },
  { id: "recruitment", label: "Recruitment", icon: <IconBriefcase className="w-4 h-4" /> },
  { id: "hr-consulting", label: "HR Consulting", icon: <IconBuildingSkyscraper className="w-4 h-4" /> },
  { id: "process", label: "Process & Pricing", icon: <IconClock className="w-4 h-4" /> },
];

const faqs = [
  { category: "general", question: "What makes Prime Hire Minds Consulting different?", answer: "We focus on a strategic, consultative approach rather than transactional recruiting. Our deep candidate pipelines, end-to-end HR consulting, and strict adherence to corporate compliance set us apart." },
  { category: "general", question: "Which industries do you serve?", answer: "We serve Banking & Finance, IT & Technology, Healthcare, Manufacturing, Aviation, Retail, Logistics, Construction and many more sectors with domain-specialised recruitment and HR support." },
  { category: "recruitment", question: "How fast can you fulfill hiring requirements?", answer: "For standard permanent and volume roles, we deliver curated shortlists within 48–72 hours. Executive Search timelines vary from 2–4 weeks based on role complexity." },
  { category: "recruitment", question: "Do you provide bulk hiring solutions?", answer: "Yes. Our Bulk and Volume Hiring service is designed for organisations that need to onboard multiple employees quickly with structured assessments and batch interview coordination." },
  { category: "recruitment", question: "What is RPO and how does it work?", answer: "Recruitment Process Outsourcing lets us act as your dedicated recruitment team. We manage sourcing, screening, interviews and offer management under agreed SLAs, reducing your time-to-hire and cost-per-hire." },
  { category: "hr-consulting", question: "Do you offer complete HR setup for startups?", answer: "Yes! Our Startup HR Setup solution provides everything from HR policy creation, employee handbooks, onboarding templates, to HRMS implementation support." },
  { category: "hr-consulting", question: "Are candidate background verifications covered?", answer: "We coordinate thorough employment, education, identity, address, and criminal record verifications through accredited verification partners." },
  { category: "hr-consulting", question: "Can you manage ongoing HR operations?", answer: "Yes. Our HR Operations Outsourcing covers employee records, onboarding, attendance, probation, confirmations, employee queries and exit documentation." },
  { category: "process", question: "How do you charge for your services?", answer: "Our pricing depends on the service model — contingency, retainer or project-based. We provide transparent proposals after understanding your hiring volume, role complexity and engagement scope." },
  { category: "process", question: "What is your candidate replacement guarantee?", answer: "We offer a defined replacement period for most permanent placements. Specific terms are shared in our service agreement based on the role level and engagement type." },
];

/* ─────────────── PAGE ─────────────── */

export default function Home() {
  return (
    <>
      <ElegantCarousel slides={heroSlides} interval={4500} />

      {/* ════ ABOUT PREVIEW ════ */}
      <AboutSection3 />

      {/* ════ PARALLAX CORE STRATEGIC SERVICES ════ */}
      <section className="relative overflow-hidden" style={{ background: "#F8FAFC" }}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative z-10">
          <ParallaxScrollFeatureSection
            introTitle={
              <div className="text-center">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.14em] text-brand-secondary mb-3">Featured Offerings</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-brand-dark mb-4">
                  Core Strategic <span className="text-brand-secondary">Services</span>
                </h2>
                <p className="text-brand-dark/55 text-sm md:text-base max-w-xl mx-auto">
                  Explore our flagship recruitment and HR consulting solutions engineered to accelerate corporate performance.
                </p>
              </div>
            }
            services={homepageServices}
          />

          <div className="relative z-20 text-center pb-16 md:pb-24 pt-6 md:pt-8">
            <AnimatedButton href="/services" variant="primary" size="lg">
              Explore All Corporate Services
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* ════ SEPARATE HIGHLIGHT: CAREER & INTERNSHIP TEASERS ════ */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Career Services Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-10 border border-brand-accent/70 bg-gradient-to-br from-white to-slate-50 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <IconUserCheck className="w-4 h-4 text-brand-secondary" />
                  Individual Candidates
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                  Career Services Portal
                </h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                  Elevate your professional trajectory with ATS-friendly resume writing, LinkedIn profile optimization, 1-on-1 interview preparation, and strategic career consultation.
                </p>
              </div>
              <div>
                <Link
                  href="/career-services"
                  className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:text-brand-secondary transition-colors"
                >
                  Explore Candidate Services <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Internships Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 md:p-10 border border-brand-accent/70 bg-gradient-to-br from-brand-primary/5 to-slate-50 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary/10 text-brand-dark text-xs font-bold uppercase tracking-wider mb-4">
                  <IconSchool className="w-4 h-4 text-brand-secondary" />
                  Students &amp; Graduates
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                  Training &amp; Paid Internships
                </h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                  Gain practical, real-world experience through our Paid HR Internship and Paid Business Development Internship programs featuring performance stipends, mentorship, and certificates.
                </p>
              </div>
              <div>
                <Link
                  href="/internships"
                  className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:text-brand-secondary transition-colors"
                >
                  View Internship Programs <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ BENTO FEATURES ════ */}
      <section className="py-14 md:py-16  bg-[#fdfbf6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-16">
          <BentoFeatures
            badge="Our Approach"
            title={<>Everything You Need to <span className="text-brand-secondary">Hire Smarter</span></>}
            subtitle="A complete recruitment ecosystem designed to find, evaluate, and onboard the right talent faster."
            cards={[
              {
                title: "Strategic Talent Sourcing",
                description: "We identify premium candidates through multi-channel sourcing, passive talent mapping, and deep market intelligence.",
                image: "/process-team.jpg",
                imageAlt: "Strategic talent sourcing",
              },
              {
                title: "End-to-End Recruitment",
                description: "From job profiling and screening to interviews, offer negotiation, and onboarding — we manage the entire hiring journey.",
                bgColor: "#efe9de",
              },
              {
                title: "Pan-India Network",
                description: "Our reach spans metro cities, tier-2 towns, and industrial regions, giving you access to diverse, local talent pools.",
                bgColor: "#e8e2d6",
              },
              {
                title: "Long-Term Partnership",
                description: "We stay engaged post-deployment to ensure smooth onboarding, retention support, and evolving workforce strategy.",
                image: "/process-professional.jpg",
                imageAlt: "Long-term hiring partnership",
              },
            ]}
          />
        </div>
      </section>

      {/* ════ INDUSTRIES SCROLL EFFECT ════ */}
      <section className="py-16 md:py-24 bg-brand-primary relative">
        {/* Decorative elements clipped so they don't overflow into next section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.045]"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 2px, transparent 2px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(200,155,60,0.12), transparent 65%)" }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.5), transparent)" }} />

        <div className="max-w-7xl mx-auto px-4 md:px-5 xl:px-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <SectionHeading
              badge="Industry Coverage"
              title={<>Sectors <span className="text-brand-secondary">We Empower</span></>}
              alignment="left" light rule
            />
            <div className="pb-1 flex-shrink-0">
              <AnimatedButton href="/industries" variant="outline-white" size="md">View All Industries</AnimatedButton>
            </div>
          </div>

          <Scroll01
            items={industries.map((ind) => ({
              title: ind.title,
              description: ind.description,
              media: ind.image,
              icon: ind.icon,
            }))}
          />
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <FAQSection
        title={<>Frequently Asked <span className="text-brand-secondary">Questions</span></>}
        subtitle="Got questions about our recruitment, RPO, or HR consulting services? Browse answers by category or reach out for a consultation."
        categories={faqCategories}
        faqs={faqs}
        contactCta={{
          title: "Still have questions?",
          description: "Connect with our senior HR consultants for tailored workforce solutions.",
          buttonLabel: "Contact Support",
          href: "/contact",
        }}
      />

      <CTASection />
    </>
  );
}
