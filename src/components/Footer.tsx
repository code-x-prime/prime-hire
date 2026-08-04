import Link from "next/link";
import Image from "next/image";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconArrowUpRight,
  IconUsers,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Corporate Services", href: "/services" },
  { name: "Industries We Serve", href: "/industries" },
  { name: "Career Services", href: "/career-services" },
  { name: "Internship Programs", href: "/internships" },
  { name: "Contact Us", href: "/contact" },
];

const recruitmentServices = [
  { name: "Permanent Recruitment", href: "/services#recruitment-solutions" },
  { name: "Executive Search", href: "/services#recruitment-solutions" },
  { name: "Bulk & Volume Hiring", href: "/services#recruitment-solutions" },
  { name: "RPO Services", href: "/services#recruitment-solutions" },
  { name: "Industry-Specific Hiring", href: "/services#recruitment-solutions" },
  { name: "Talent Mapping", href: "/services#recruitment-solutions" },
];

const hrServices = [
  { name: "Startup HR Setup", href: "/services#hr-consulting" },
  { name: "HR Operations Outsourcing", href: "/services#hr-consulting" },
  { name: "HR Policies & Documentation", href: "/services#hr-consulting" },
  { name: "Performance Management", href: "/services#hr-consulting" },
  { name: "Payroll & Compliance", href: "/services#hr-consulting" },
  { name: "Employee Engagement", href: "/services#hr-consulting" },
];

const socials = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "Twitter / X" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #1a4080 0%, #0B2C5F 45%, #071e42 100%)" }}>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }} />

      {/* Dot texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }} />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-brand-secondary/6 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-white/[0.025] blur-[90px] pointer-events-none" />

      <div className="relative z-10">

        {/* ── CTA Banner ── */}
        <div className="border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 py-10 md:py-14">
            <div className="flex flex-col md:flex-row items-center justify-between gap-7">
              <div className="text-center md:text-left">
                <p className="text-brand-secondary text-[10px] font-black tracking-[0.25em] uppercase mb-2.5">
                  Ready to Empower Your Talent Strategy?
                </p>
                <h3 className="text-white font-serif text-2xl md:text-[2.1rem] font-bold leading-tight">
                  Partner with Prime Hire Minds Consulting
                </h3>
              </div>

              <Link
                href="/contact"
                className="group flex items-center gap-2.5 px-8 py-4 text-[0.8rem] font-black uppercase tracking-[0.1em] text-white flex-shrink-0 overflow-hidden relative transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_34px_rgba(200,155,60,0.55)]"
                style={{
                  background: "linear-gradient(135deg, #d9ae55 0%, #C89B3C 55%, #a87d28 100%)",
                  boxShadow: "0 4px 18px rgba(200,155,60,0.40)",
                }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-650 bg-gradient-to-r from-transparent via-white/22 to-transparent" />
                <span className="relative">Get in Touch</span>
                <IconArrowUpRight className="w-4 h-4 relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">

            {/* Brand */}
            <div className="space-y-6 lg:col-span-4">
              <Link href="/" className="inline-flex items-center group">
                <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Prime Hire Minds Consulting"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </Link>

              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Strategic corporate recruitment, executive search, recruitment process outsourcing (RPO), and HR consulting tailored for dynamic enterprises across India.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/15 text-white/70 bg-white/[0.03] hover:border-brand-secondary hover:text-white hover:bg-brand-secondary transition-all duration-250 hover:-translate-y-[3px]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-black text-[0.72rem] tracking-[0.2em] uppercase mb-6 flex items-center gap-2.5">
                <span className="w-5 h-[2px] bg-brand-secondary inline-block" />
                Quick Links
              </h3>
              <ul className="space-y-3.5">
                {quickLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-white/65 hover:text-brand-secondary transition-all duration-200 flex items-center gap-2.5 text-[0.95rem] group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand-secondary transition-all duration-250 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recruitment Services */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-black text-[0.72rem] tracking-[0.2em] uppercase mb-6 flex items-center gap-2.5">
                <IconUsers className="w-4 h-4 text-brand-secondary" />
                Recruitment
              </h3>
              <ul className="space-y-3.5">
                {recruitmentServices.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-white/65 hover:text-brand-secondary transition-all duration-200 flex items-center gap-2.5 text-[0.95rem] group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand-secondary transition-all duration-250 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* HR Consulting Services */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-black text-[0.72rem] tracking-[0.2em] uppercase mb-6 flex items-center gap-2.5">
                <IconBuildingSkyscraper className="w-4 h-4 text-brand-secondary" />
                HR Consulting
              </h3>
              <ul className="space-y-3.5">
                {hrServices.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-white/65 hover:text-brand-secondary transition-all duration-200 flex items-center gap-2.5 text-[0.95rem] group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand-secondary transition-all duration-250 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 border-y border-white/[0.08] py-10">
            <div className="flex items-start gap-4 text-white/70">
              <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded-lg border border-white/15 bg-white/[0.04] transition-all duration-200">
                <IconMapPin className="w-4 h-4 text-brand-secondary" />
              </div>
              <span className="text-xs leading-relaxed pt-1">
                Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201305, India
              </span>
            </div>
            <a href="mailto:hr@primehireminds.com" className="flex items-center gap-4 group text-white/70 hover:text-white transition-colors">
              <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded-lg border border-white/15 bg-white/[0.04] group-hover:border-brand-secondary/50 group-hover:bg-brand-secondary/10 transition-all duration-200">
                <IconMail className="w-4 h-4 text-brand-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary">HR & Careers</span>
                <span className="text-xs pt-0.5 break-all">hr@primehireminds.com</span>
              </div>
            </a>
            <a href="mailto:info@primehireminds.com" className="flex items-center gap-4 group text-white/70 hover:text-white transition-colors">
              <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded-lg border border-white/15 bg-white/[0.04] group-hover:border-brand-secondary/50 group-hover:bg-brand-secondary/10 transition-all duration-200">
                <IconMail className="w-4 h-4 text-brand-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary">General Enquiries</span>
                <span className="text-xs pt-0.5 break-all">info@primehireminds.com</span>
              </div>
            </a>
            <a href="mailto:support@primehireminds.com" className="flex items-center gap-4 group text-white/70 hover:text-white transition-colors">
              <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded-lg border border-white/15 bg-white/[0.04] group-hover:border-brand-secondary/50 group-hover:bg-brand-secondary/10 transition-all duration-200">
                <IconMail className="w-4 h-4 text-brand-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary">Client Support</span>
                <span className="text-xs pt-0.5 break-all">support@primehireminds.com</span>
              </div>
            </a>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-white/40 text-sm font-medium text-center md:text-left">
              © {new Date().getFullYear()} Prime Hire Minds Consulting. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-center gap-1 text-white/40">
                <Link href="#" className="hover:text-brand-secondary transition-colors px-2 py-1 font-medium">
                  Privacy Policy
                </Link>
                <span className="text-white/15">|</span>
                <Link href="#" className="hover:text-brand-secondary transition-colors px-2 py-1 font-medium">
                  Terms of Service
                </Link>
              </div>

              <a
                href="https://groxmedia.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-white/50 hover:text-brand-secondary transition-colors font-medium"
              >
                <span>Design by</span>
                <span className="text-white group-hover:text-brand-secondary transition-colors font-bold">Grox Media</span>
                <IconArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
