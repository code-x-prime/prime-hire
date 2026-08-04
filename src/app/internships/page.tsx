import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import MinimalHero from "@/components/MinimalHero";
import Link from "next/link";
import {
  IconCircleCheck,
  IconArrowRight,
  IconBook,
  IconGift,
  IconSparkles,
  IconBriefcase,
  IconTrendingUp,
} from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Paid Internship Programs | Prime Hire Minds Consulting",
  description: "Join our Paid HR Internship and Paid Business Development Internship programs. Hands-on experience, stipends, certificates, and job opportunities.",
};

const hrInternship = {
  title: "Paid HR Internship Program",
  tag: "For Aspiring HR Professionals",
  description: "A practical internship programme designed for students, fresh graduates and aspiring HR professionals who want hands-on exposure to real HR processes.",
  learningAreas: [
    "Recruitment and candidate sourcing",
    "Resume screening and HR interviews",
    "Job posting and database management",
    "Interview coordination and follow-ups",
    "Employee onboarding documentation",
    "HR operations and employee records",
    "HR policies, reports and professional communication",
    "LinkedIn and job-portal recruitment"
  ],
  benefits: [
    "Performance-based stipend",
    "Practical assignments and live projects",
    "Internship completion certificate",
    "Letter of recommendation for deserving interns",
    "Mentorship from HR professionals",
    "Potential employment opportunity based on performance and business requirements"
  ]
};

const internshipFaqCategories = [
  { id: "hr-internship", label: "HR Internship", icon: <IconBook className="w-4 h-4" /> },
  { id: "bd-internship", label: "BD Internship", icon: <IconTrendingUp className="w-4 h-4" /> },
  { id: "application", label: "Application", icon: <IconBriefcase className="w-4 h-4" /> },
  { id: "stipend", label: "Stipend & Certificate", icon: <IconGift className="w-4 h-4" /> },
];

const internshipFaqs = [
  { category: "hr-internship", question: "What will I learn in the HR internship?", answer: "You will gain hands-on experience in recruitment, resume screening, interview coordination, job posting, database management, onboarding documentation, HR operations, and LinkedIn recruiting." },
  { category: "hr-internship", question: "Who can apply for the HR internship?", answer: "Students, fresh graduates, and aspiring HR professionals who want practical exposure to real-world HR processes are welcome to apply." },
  { category: "bd-internship", question: "What will I learn in the Business Development internship?", answer: "You will learn lead generation, LinkedIn prospecting, email and telephone outreach, client database development, service pitching, proposal preparation, and sales pipeline tracking." },
  { category: "bd-internship", question: "Is the BD internship sales-focused?", answer: "Yes. It is designed for individuals interested in B2B sales, client acquisition, and business growth in the HR and recruitment industry." },
  { category: "application", question: "How do I apply for an internship?", answer: "You can apply through our Contact page by selecting Internship Enquiry. Shortlisted candidates are contacted for a brief discussion before onboarding." },
  { category: "application", question: "What is the internship duration?", answer: "Internships typically run for 2 to 6 months, depending on the program and your availability." },
  { category: "stipend", question: "Is the internship paid?", answer: "Yes. We offer performance-based stipends for both HR and Business Development internships, with additional incentives for BD interns who convert clients." },
  { category: "stipend", question: "Will I receive a certificate?", answer: "Yes. All interns receive an internship completion certificate, and deserving interns may also receive a letter of recommendation." },
];

const bdInternship = {
  title: "Paid Business Development Internship Program",
  tag: "For Sales & Growth Enthusiasts",
  description: "A performance-oriented internship programme for individuals interested in sales, client acquisition, marketing and business growth.",
  learningAreas: [
    "Lead generation and market research",
    "LinkedIn prospecting",
    "Email and telephone outreach",
    "Client database development",
    "Recruitment-service pitching",
    "Proposal preparation",
    "Follow-up and relationship management",
    "Sales reporting and pipeline tracking"
  ],
  benefits: [
    "Fixed or performance-based stipend",
    "Incentives for successful client conversions",
    "Practical exposure to B2B sales",
    "Live business-development projects",
    "Internship completion certificate",
    "Letter of recommendation for deserving interns",
    "Potential employment opportunity based on performance and business requirements"
  ]
};

export default function InternshipsPage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <MinimalHero
        kicker="Students & Graduates"
        title={<>Training &amp; Paid<br /><span>Internship Programs</span></>}
        subtitle="Gain real-world experience, practical industry exposure, stipends, and mentorship from corporate professionals."
        ctaText="Apply For Internship"
        ctaHref="#apply-internship"
        tag="For Aspiring Professionals"
        heading="Paid HR & Business Development Internships"
        desc="Hands-on training, live projects, certificates, and potential job opportunities based on performance."
      />

      {/* PROGRAM 1: HR INTERNSHIP */}
      <section id="apply-internship" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16">
          <div className="border border-brand-accent/70 p-8 md:p-12 bg-gradient-to-br from-white to-slate-50 relative shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-brand-accent/60 pb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-secondary/15 text-brand-dark text-xs font-bold uppercase tracking-wider mb-2">
                  Program 01
                </span>
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-brand-dark">
                  {hrInternship.title}
                </h2>
              </div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/5 px-4 py-2 border border-brand-primary/20">
                {hrInternship.tag}
              </span>
            </div>

            <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed mb-10">
              {hrInternship.description}
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Key Learning Areas */}
              <div className="bg-white p-6 border border-brand-accent/60">
                <div className="flex items-center gap-2.5 text-brand-primary font-serif font-bold text-lg mb-4">
                  <IconBook className="w-5 h-5 text-brand-secondary" />
                  Key Learning Areas
                </div>
                <ul className="space-y-2.5">
                  {hrInternship.learningAreas.map((area) => (
                    <li key={area} className="text-sm text-brand-dark/75 flex items-start gap-2.5">
                      <IconCircleCheck className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programme Benefits */}
              <div className="bg-white p-6 border border-brand-accent/60">
                <div className="flex items-center gap-2.5 text-brand-primary font-serif font-bold text-lg mb-4">
                  <IconGift className="w-5 h-5 text-brand-secondary" />
                  Programme Benefits
                </div>
                <ul className="space-y-2.5">
                  {hrInternship.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-brand-dark/75 flex items-start gap-2.5">
                      <IconSparkles className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-brand-dark/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-brand-accent/60 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-brand-dark/50">Location: Noida (UP) / Hybrid / Remote | Duration: 2–6 Months</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors"
              >
                Apply for HR Internship <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM 2: BD INTERNSHIP */}
      <section className="py-16 md:py-24 bg-slate-50 relative border-t border-brand-accent/60">
        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16">
          <div className="border border-brand-accent/70 p-8 md:p-12 bg-white relative shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-brand-accent/60 pb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-secondary/15 text-brand-dark text-xs font-bold uppercase tracking-wider mb-2">
                  Program 02
                </span>
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-brand-dark">
                  {bdInternship.title}
                </h2>
              </div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/5 px-4 py-2 border border-brand-primary/20">
                {bdInternship.tag}
              </span>
            </div>

            <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed mb-10">
              {bdInternship.description}
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Key Learning Areas */}
              <div className="bg-slate-50 p-6 border border-brand-accent/60">
                <div className="flex items-center gap-2.5 text-brand-primary font-serif font-bold text-lg mb-4">
                  <IconTrendingUp className="w-5 h-5 text-brand-secondary" />
                  Key Learning Areas
                </div>
                <ul className="space-y-2.5">
                  {bdInternship.learningAreas.map((area) => (
                    <li key={area} className="text-sm text-brand-dark/75 flex items-start gap-2.5">
                      <IconCircleCheck className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programme Benefits */}
              <div className="bg-slate-50 p-6 border border-brand-accent/60">
                <div className="flex items-center gap-2.5 text-brand-primary font-serif font-bold text-lg mb-4">
                  <IconGift className="w-5 h-5 text-brand-secondary" />
                  Programme Benefits
                </div>
                <ul className="space-y-2.5">
                  {bdInternship.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-brand-dark/75 flex items-start gap-2.5">
                      <IconSparkles className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-brand-dark/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-brand-accent/60 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-brand-dark/50">Location: Noida (UP) / Hybrid / Remote | Duration: 2–6 Months</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors"
              >
                Apply for BD Internship <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <FAQSection
        title={<>Internship <span className="text-brand-secondary">FAQs</span></>}
        subtitle="Find answers about our Paid HR Internship and Paid Business Development Internship programs."
        categories={internshipFaqCategories}
        faqs={internshipFaqs}
        contactCta={{
          title: "Ready to apply?",
          description: "Submit your application and start your hands-on learning journey with Prime Hire Minds.",
          buttonLabel: "Apply Now",
          href: "/contact",
        }}
      />

      {/* ════ CTA ════ */}
      <CTASection
        title="Start Your Professional Journey"
        highlight="With a Paid Internship"
        description="Gain hands-on experience in HR or Business Development, earn a performance-based stipend, and receive a completion certificate that sets you apart."
        primaryButton={{ text: "Apply Now", href: "/contact" }}
      />
    </>
  );
}
