import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import MinimalHero from "@/components/MinimalHero";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconArrowRight,
  IconMessageCircle,
} from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Prime Hire Minds Consulting",
  description: "Get in touch with Prime Hire Minds Consulting for strategic recruitment, RPO, HR consulting, career services, and internship programs.",
};

const contactFaqCategories = [
  { id: "contacting", label: "Getting in Touch", icon: <IconMessageCircle className="w-4 h-4" /> },
  { id: "response", label: "Response Time", icon: <IconClock className="w-4 h-4" /> },
  { id: "services", label: "Services", icon: <IconArrowRight className="w-4 h-4" /> },
  { id: "location", label: "Location", icon: <IconMapPin className="w-4 h-4" /> },
];

const contactFaqs = [
  { category: "contacting", question: "How can I reach Prime Hire Minds Consulting?", answer: "You can email us at hr@primehireminds.com, info@primehireminds.com, or support@primehireminds.com, or fill out the contact form on this page." },
  { category: "contacting", question: "What information should I provide in my enquiry?", answer: "For hiring enquiries, share your company name, role requirements, and timeline. For career services or internships, mention your background and the service you are interested in." },
  { category: "response", question: "How quickly will you respond?", answer: "We aim to respond to all enquiries within 2 business hours during working days." },
  { category: "response", question: "What are your operating hours?", answer: "Our office hours are Monday to Friday, 9:00 AM to 6:30 PM, and Saturday, 9:00 AM to 2:00 PM." },
  { category: "services", question: "Can I enquire about multiple services?", answer: "Yes. Many clients use a combination of recruitment, RPO, and HR consulting. Let us know your full requirement and we will propose an integrated solution." },
  { category: "services", question: "Do you offer on-site consultations?", answer: "We offer both virtual and on-site consultations depending on the project scope and location." },
  { category: "location", question: "Where is your office located?", answer: "Our corporate office is located at Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201305, India." },
  { category: "location", question: "Do you serve clients outside Uttar Pradesh?", answer: "Yes. We provide pan-India recruitment and HR consulting services across all major cities and industrial regions." },
];

const contactInfo = [
  {
    icon: IconMapPin,
    title: "Corporate Office",
    lines: ["Unit No. 604, 6th Floor, Tower B", "Bhutani Alphathum, Sector 90", "Noida, Uttar Pradesh 201305, India"],
    action: null,
  },
  {
    icon: IconMail,
    title: "HR & Recruitment",
    lines: ["hr@primehireminds.com"],
    action: "mailto:hr@primehireminds.com",
  },
  {
    icon: IconMail,
    title: "General Enquiries",
    lines: ["info@primehireminds.com"],
    action: "mailto:info@primehireminds.com",
  },
  {
    icon: IconMail,
    title: "Support & Help Desk",
    lines: ["support@primehireminds.com"],
    action: "mailto:support@primehireminds.com",
  },
  {
    icon: IconClock,
    title: "Operating Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:30 PM", "Saturday: 9:00 AM – 2:00 PM"],
    action: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <MinimalHero
        kicker="Get In Touch"
        title={<>Let&apos;s Build Your<br /><span>Ideal Workforce</span></>}
        subtitle="Tell us about your workforce needs and our specialists will craft a bespoke solution tailored to your business goals."
        ctaText="Send a Message"
        ctaHref="#contact-form"
        tag="Response Guarantee"
        heading="We Reply Within 2 Business Hours"
        desc="Email us or fill the form below — our team is ready to help with recruitment, HR consulting, career services, or internships."
      />

      {/* ════ MAIN SECTION ════ */}
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
          <div className="grid lg:grid-cols-[42%_54%] gap-14 xl:gap-20 items-start">

            {/* ── LEFT: Info ── */}
            <div>
              <SectionHeading
                badge="Reach Out"
                title={
                  <>
                    We&apos;re Here to Help{" "}
                    <span className="text-brand-secondary">You Grow</span>
                  </>
                }
                alignment="left"
                rule
              />

              {/* Contact info cards */}
              <div className="space-y-3 mb-10">
                {contactInfo.map(({ icon: Icon, title, lines, action }) => {
                  const inner = (
                    <div
                      className="flex items-start gap-5 p-5 group transition-all duration-250 hover:shadow-[0_8px_28px_rgba(11,44,95,0.08)] hover:-translate-y-[1px]"
                      style={{ border: "1px solid #E2E8F0" }}
                    >
                      <div
                        className="w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-brand-primary"
                        style={{
                          background: "rgba(11,44,95,0.05)",
                          border: "1px solid rgba(11,44,95,0.08)",
                        }}
                      >
                        <Icon className="w-4 h-4 text-brand-primary group-hover:text-white transition-colors duration-300" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2">
                          {title}
                        </h4>
                        {lines.map((line, i) => (
                          <p key={i} className="text-brand-dark/62 text-[0.88rem] leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>

                      {action && (
                        <IconArrowRight className="w-4 h-4 text-brand-dark/18 group-hover:text-brand-secondary group-hover:translate-x-0.5 transition-all duration-250 flex-shrink-0 mt-3.5" />
                      )}
                    </div>
                  );

                  return action ? (
                    <a key={title} href={action} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={title}>{inner}</div>
                  );
                })}
              </div>

              {/* Response note */}
              <div
                className="relative overflow-hidden p-6"
                style={{
                  background: "rgba(200,155,60,0.04)",
                  border: "1px solid rgba(200,155,60,0.22)",
                }}
              >
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-brand-secondary" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2">
                  Typical Response Time
                </p>
                <p className="text-brand-dark/55 text-[0.88rem] leading-relaxed">
                  Our team responds to all enquiries within{" "}
                  <strong className="text-brand-dark/75 font-bold">2 business hours</strong>{" "}
                  during working days.
                </p>
              </div>

              {/* Channel tags */}
              <div className="mt-8 pt-8 border-t border-brand-accent/60">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/28 mb-3">
                  Also Reachable Via
                </p>
                <div className="flex flex-wrap gap-2">
                  {["LinkedIn", "WhatsApp", "Direct Email"].map((ch) => (
                    <div
                      key={ch}
                      className="px-3 py-1.5 border border-brand-accent/60 text-[10px] font-black uppercase tracking-[0.12em] text-brand-dark/32 hover:border-brand-secondary hover:text-brand-secondary transition-all duration-250 cursor-pointer"
                    >
                      {ch}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="lg:sticky lg:top-28">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <FAQSection
        title={<>Contact <span className="text-brand-secondary">FAQs</span></>}
        subtitle="Quick answers about getting in touch, response times, services, and our location."
        categories={contactFaqCategories}
        faqs={contactFaqs}
        contactCta={{
          title: "Prefer to email directly?",
          description: "Email hr@primehireminds.com, info@primehireminds.com, or support@primehireminds.com for immediate assistance.",
          buttonLabel: "Email Us",
          href: "mailto:info@primehireminds.com",
        }}
      />

      {/* ════ CTA ════ */}
      <CTASection
        title="Let's Build Your Workforce"
        highlight="Together"
        description="Have a hiring requirement, career goal, or internship question? Our consultants are ready to understand your needs and help you move forward."
        primaryButton={{ text: "Send a Message", href: "/contact" }}
      />

    </>
  );
}
