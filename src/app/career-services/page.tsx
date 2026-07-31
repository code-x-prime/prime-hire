import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import MinimalHero from "@/components/MinimalHero";
import Link from "next/link";
import {
  IconFileText,
  IconUserCheck,
  IconCompass,
  IconArrowRight,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Services | Prime Hire Minds Consulting",
  description: "Accelerate your career with ATS resume writing, LinkedIn profile optimisation, 1-on-1 mock interview preparation, and expert career consultation.",
};

const careerFaqCategories = [
  { id: "resume", label: "Resume Services", icon: <IconFileText className="w-4 h-4" /> },
  { id: "linkedin", label: "LinkedIn", icon: <IconBrandLinkedin className="w-4 h-4" /> },
  { id: "interview", label: "Interview Prep", icon: <IconUserCheck className="w-4 h-4" /> },
  { id: "consultation", label: "Consultation", icon: <IconCompass className="w-4 h-4" /> },
];

const careerFaqs = [
  { category: "resume", question: "What is ATS-friendly resume writing?", answer: "ATS-friendly resume writing ensures your resume is professionally written and formatted to improve visibility during recruiter and ATS screening." },
  { category: "resume", question: "What formats will I receive my resume in?", answer: "You will receive editable Word and PDF versions, making it easy to customise for specific job applications in the future." },
  { category: "linkedin", question: "Why should I optimise my LinkedIn profile?", answer: "An optimised LinkedIn profile improves your visibility in recruiter searches, strengthens your professional positioning, and increases inbound opportunities." },
  { category: "linkedin", question: "What does LinkedIn optimisation include?", answer: "It includes optimisation of LinkedIn headlines, About sections, skills and professional positioning." },
  { category: "interview", question: "How does interview preparation work?", answer: "It includes one-to-one mock interviews, personalised feedback and guidance on answering HR and role-specific questions." },
  { category: "interview", question: "Will you prepare me for salary negotiation?", answer: "Yes. Our interview preparation includes guidance on salary negotiation and offer evaluation." },
  { category: "consultation", question: "Who should opt for career consultation?", answer: "Career consultation is ideal for professionals looking for personalised guidance regarding career direction, job-search strategy, salary negotiation and professional development." },
  { category: "consultation", question: "Can fresh graduates use these services?", answer: "Yes. Our services are designed for students, fresh graduates, mid-career professionals, and senior executives seeking structured career support." },
];

const careerServices = [
  {
    num: "16",
    title: "ATS-Friendly Resume Writing",
    description: "Professionally written and formatted resumes designed to improve visibility during recruiter and ATS screening.",
    icon: IconFileText,
  },
  {
    num: "17",
    title: "LinkedIn Profile Optimisation",
    description: "Optimisation of LinkedIn headlines, About sections, skills and professional positioning.",
    icon: IconBrandLinkedin,
  },
  {
    num: "18",
    title: "Interview Preparation",
    description: "One-to-one mock interviews, personalised feedback and guidance on answering HR and role-specific questions.",
    icon: IconUserCheck,
  },
  {
    num: "19",
    title: "Career Consultation",
    description: "Personalised guidance regarding career direction, job-search strategy, salary negotiation and professional development.",
    icon: IconCompass,
  }
];

export default function CareerServicesPage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <MinimalHero
        kicker="Candidate & Professional Solutions"
        title={<>Transform Your Professional<br /><span>Career Trajectory</span></>}
        subtitle="Personalized resume crafting, profile optimization, and expert 1-on-1 interview mentoring designed to stand out in front of top recruiters and hiring managers."
        ctaText="Book Consultation"
        ctaHref="/contact"
        tag="For Job Seekers & Professionals"
        heading="ATS Resumes, LinkedIn Profiles & Interview Coaching"
        desc="Everything you need to land better opportunities and accelerate your career growth."
      />

      {/* SERVICES GRID */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeading
            badge="Personalized Services"
            title={<>Career Acceleration <span className="text-brand-secondary">Programs</span></>}
            subtitle="Tailored services designed to maximize your interview callbacks and job search success rate."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {careerServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.title}
                  className="border border-brand-accent/70 p-8 md:p-10 bg-gradient-to-br from-white to-slate-50 relative group hover:border-brand-secondary transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
                >
                  <div className="absolute top-6 right-8 text-4xl font-serif font-black text-brand-dark/10 group-hover:text-brand-secondary/20 transition-colors">
                    {service.num}
                  </div>

                  <div>
                    <div className="w-14 h-14 bg-brand-primary text-brand-secondary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-brand-dark mb-3">
                      {service.title}
                    </h3>

                    <p className="text-brand-dark/60 text-sm md:text-base leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-brand-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-secondary transition-colors"
                  >
                    Book This Service <IconArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <FAQSection
        title={<>Career Services <span className="text-brand-secondary">FAQs</span></>}
        subtitle="Everything you need to know about our resume writing, LinkedIn optimisation, interview prep, and career consultation services."
        categories={careerFaqCategories}
        faqs={careerFaqs}
        contactCta={{
          title: "Need personalised career guidance?",
          description: "Book a consultation with our career experts and take the next step in your professional journey.",
          buttonLabel: "Book Consultation",
          href: "/contact",
        }}
      />

      {/* ════ CTA ════ */}
      <CTASection
        title="Take the Next Step in Your"
        highlight="Career"
        description="Get an ATS-friendly resume, an optimised LinkedIn profile, and personalised interview coaching designed to help you stand out in the job market."
        primaryButton={{ text: "Book Career Consultation", href: "/contact" }}
      />
    </>
  );
}
