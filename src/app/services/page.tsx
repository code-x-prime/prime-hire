import AnimatedButton from "@/components/AnimatedButton";
import ParallaxScrollFeatureSection from "@/components/ui/parallax-scroll-feature-section";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import MinimalHero from "@/components/MinimalHero";
import {
  IconUsers,
  IconGlobe,
  IconBuildingSkyscraper,
  IconTrendingUp,
  IconFileCheck,
  IconShieldCheck,
  IconHeartHandshake,
  IconStack,
  IconFileText,
  IconUserPlus,
  IconTarget,
  IconShield,
  IconDatabase,
  IconCurrencyDollar,
  IconCalendar,
} from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate HR & Recruitment Services | Prime Hire Minds Consulting",
  description: "Explore Prime Hire Minds Consulting's 15 B2B recruitment solutions and HR consulting services for dynamic enterprises.",
};

/* ── DATA ── */

const recruitmentSolutions = [
  {
    num: "01",
    title: "Permanent Recruitment",
    description: "End-to-end hiring support, including candidate sourcing, screening, interview coordination, salary negotiation and joining follow-up.",
    icon: IconUsers,
    image: "/providing-services.jpg",
  },
  {
    num: "02",
    title: "Executive Search",
    description: "Specialised recruitment for senior management, leadership and business-critical positions.",
    icon: IconTarget,
    image: "/contractual-services.jpg",
  },
  {
    num: "03",
    title: "Bulk and Volume Hiring",
    description: "Fast and structured hiring solutions for organisations recruiting multiple employees within a limited timeline.",
    icon: IconStack,
    image: "/bulk-hiring.jpg",
  },
  {
    num: "04",
    title: "Recruitment Process Outsourcing",
    description: "Dedicated recruitment support for companies that want to outsource part or all of their hiring process.",
    icon: IconGlobe,
    image: "/recruitment-solutions.jpg",
  },
  {
    num: "05",
    title: "Industry-Specific Hiring",
    description: "Specialised recruitment across logistics, transportation, BPO, shared services, finance, sales, HR, administration, IT support and operations.",
    icon: IconHeartHandshake,
    image: "/hero-bg.jpg",
  },
  {
    num: "06",
    title: "Talent Mapping and Candidate Pipeline",
    description: "Market research and development of a ready talent pool for current and future hiring requirements.",
    icon: IconDatabase,
    image: "/talent-mapping.jpg",
  },
];

const hrConsultingServices = [
  {
    num: "07",
    title: "Startup HR Setup",
    description: "Complete HR setup for startups and small businesses, including employee documentation, processes, templates and basic HR systems.",
    icon: IconBuildingSkyscraper,
    image: "/hr-consulting.jpg",
  },
  {
    num: "08",
    title: "HR Operations Outsourcing",
    description: "Day-to-day HR support covering employee records, onboarding, attendance, probation, confirmations, employee queries and exit documentation.",
    icon: IconFileCheck,
    image: "/hr-operations.jpg",
  },
  {
    num: "09",
    title: "HR Policies and Documentation",
    description: "Development and customisation of employee handbooks, HR policies, standard operating procedures, letters and workplace guidelines.",
    icon: IconFileText,
    image: "/about-section.jpg",
  },
  {
    num: "10",
    title: "Onboarding and Offboarding Solutions",
    description: "Structured joining, induction, documentation, employee-clearance and exit-management processes.",
    icon: IconUserPlus,
    image: "/hr-operations.jpg",
  },
  {
    num: "11",
    title: "Performance Management Solutions",
    description: "Design of performance-review forms, goal-setting processes, appraisal templates, feedback systems and improvement plans.",
    icon: IconTrendingUp,
    image: "/providing-services.jpg",
  },
  {
    num: "12",
    title: "Background Verification Coordination",
    description: "Coordination of employment, education, identity, address and criminal-record verification through authorised service partners.",
    icon: IconShieldCheck,
    image: "/contractual-services.jpg",
  },
  {
    num: "13",
    title: "HRMS Implementation Support",
    description: "Assistance with employee-data setup, attendance, leave, workflows and HR-process implementation on HRMS platforms.",
    icon: IconShield,
    image: "/recruitment-solutions.jpg",
  },
  {
    num: "14",
    title: "Payroll and Compliance Coordination",
    description: "Preparation of payroll inputs, employee-data validation and coordination with payroll and statutory-compliance partners.",
    icon: IconCurrencyDollar,
    image: "/talent-mapping.jpg",
  },
  {
    num: "15",
    title: "Employee Engagement Solutions",
    description: "Planning of engagement calendars, employee surveys, recognition programmes, workplace events and communication campaigns.",
    icon: IconCalendar,
    image: "/hero-bg.jpg",
  },
];

const servicesFaqCategories = [
  { id: "recruitment", label: "Recruitment", icon: <IconUsers className="w-4 h-4" /> },
  { id: "hr-consulting", label: "HR Consulting", icon: <IconBuildingSkyscraper className="w-4 h-4" /> },
  { id: "process", label: "Process", icon: <IconFileCheck className="w-4 h-4" /> },
  { id: "pricing", label: "Pricing", icon: <IconCurrencyDollar className="w-4 h-4" /> },
];

const servicesFaqs = [
  { category: "recruitment", question: "What recruitment services do you offer?", answer: "We offer permanent recruitment, executive search, bulk and volume hiring, recruitment process outsourcing, industry-specific hiring, and talent mapping & candidate pipeline development." },
  { category: "recruitment", question: "How does your executive search work?", answer: "Our executive search is specialised recruitment for senior management, leadership and business-critical positions through targeted outreach and competency assessment." },
  { category: "recruitment", question: "What is Recruitment Process Outsourcing?", answer: "It is dedicated recruitment support for companies that want to outsource part or all of their hiring process under defined SLAs." },
  { category: "hr-consulting", question: "What HR consulting services are available?", answer: "We provide startup HR setup, HR operations outsourcing, HR policies and documentation, onboarding and offboarding solutions, performance management, background verification coordination, HRMS implementation support, payroll and compliance coordination, and employee engagement solutions." },
  { category: "hr-consulting", question: "Can you set up HR for a new startup?", answer: "Yes. Our Startup HR Setup includes employee documentation, processes, templates and basic HR systems." },
  { category: "process", question: "How quickly can you share candidate shortlists?", answer: "For standard permanent and volume roles, we deliver curated shortlists within 48–72 hours. Executive search timelines range from 2–4 weeks depending on role complexity." },
  { category: "process", question: "Do you handle background verification?", answer: "Yes. We coordinate employment, education, identity, address, and criminal-record verification through authorised service partners." },
  { category: "pricing", question: "How do you charge for your services?", answer: "Our pricing depends on the service model — contingency, retainer, or project-based. We provide transparent proposals after understanding your hiring volume, role complexity, and engagement scope." },
];

/* ── PAGE ── */

export default function ServicesPage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <MinimalHero
        kicker="Corporate B2B Offerings"
        title={<>Enterprise Recruitment &amp;<br /><span>HR Consulting Services</span></>}
        subtitle="End-to-end recruitment solutions and corporate HR consulting tailored to help enterprises hire faster, scale seamlessly, and optimize workforce operations."
        ctaText="Explore Services"
        ctaHref="#services-showcase"
        tag="15 B2B Corporate Services"
        heading="Recruitment, RPO & HR Consulting Under One Roof"
        desc="From permanent hiring to executive search, bulk recruitment, RPO, and full HR setup — we cover every workforce need."
        extraActions={
          <>
            <AnimatedButton href="#recruitment-solutions" variant="secondary" size="md">
              Recruitment Solutions (1–6)
            </AnimatedButton>
            <AnimatedButton href="#hr-consulting" variant="outline-white" size="md">
              HR Consulting Services (7–15)
            </AnimatedButton>
          </>
        }
      />

      {/* ════ PARALLAX SERVICES SHOWCASE (15 Services) ════ */}
      <section id="services-showcase" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10">
          <ParallaxScrollFeatureSection
            introTitle={
              <div className="text-center">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.14em] text-brand-secondary mb-3">15 B2B Corporate Services</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-brand-dark mb-4">
                  Recruitment &amp; HR Consulting <span className="text-brand-secondary">Services</span>
                </h2>
                <p className="text-brand-dark/55 text-sm md:text-base max-w-2xl mx-auto">
                  Scroll through our complete portfolio of enterprise recruitment solutions and HR consulting services designed to build, manage and optimise your workforce.
                </p>
              </div>
            }
            services={[...recruitmentSolutions, ...hrConsultingServices].map((item, index) => ({
              id: parseInt(item.num),
              title: item.title,
              description: item.description,
              image: item.image,
              icon: <item.icon className="w-5 h-5 md:w-6 md:h-6" />,
              reverse: index % 2 !== 0,
              ctaHref: "/contact",
              ctaLabel: "Inquire About This Service",
            }))}
          />
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <FAQSection
        title={<>Services <span className="text-brand-secondary">FAQs</span></>}
        subtitle="Browse common questions about our recruitment and HR consulting services." 
        categories={servicesFaqCategories}
        faqs={servicesFaqs}
        contactCta={{
          title: "Need a custom service package?",
          description: "Speak with our team to design a workforce solution tailored to your business.",
          buttonLabel: "Request Consultation",
          href: "/contact",
        }}
      />

      {/* ════ CTA ════ */}
      <CTASection
        title="Need Tailored"
        highlight="Workforce Solutions?"
        description="From permanent recruitment to executive search and HR consulting, we build scalable staffing strategies that align with your business goals."
        primaryButton={{ text: "Request Consultation", href: "/contact" }}
      />
    </>
  );
}
