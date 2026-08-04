"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  IconPhoneCall,
  IconMenu2,
  IconX,
  IconMapPin,
  IconMail,
  IconPhone,
  IconArrowRight,
  IconChevronDown,
  IconUsers,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navLinksLeft = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Industries", href: "/industries" },
];

const navLinksRight = [
  { name: "Career Services", href: "/career-services" },
  { name: "Internships", href: "/internships" },
  { name: "Contact", href: "/contact" },
];

const serviceDropdown = [
  {
    category: "Recruitment Solutions",
    href: "/services#recruitment-solutions",
    icon: IconUsers,
    items: [
      { name: "Permanent Recruitment", href: "/services#recruitment-solutions" },
      { name: "Executive Search", href: "/services#recruitment-solutions" },
      { name: "Bulk & Volume Hiring", href: "/services#recruitment-solutions" },
      { name: "RPO Services", href: "/services#recruitment-solutions" },
      { name: "Industry-Specific Hiring", href: "/services#recruitment-solutions" },
      { name: "Talent Mapping", href: "/services#recruitment-solutions" },
    ],
  },
  {
    category: "HR Consulting Services",
    href: "/services#hr-consulting",
    icon: IconBuildingSkyscraper,
    items: [
      { name: "Startup HR Setup", href: "/services#hr-consulting" },
      { name: "HR Operations Outsourcing", href: "/services#hr-consulting" },
      { name: "HR Policies & Documentation", href: "/services#hr-consulting" },
      { name: "Onboarding & Offboarding", href: "/services#hr-consulting" },
      { name: "Performance Management", href: "/services#hr-consulting" },
      { name: "Background Verification", href: "/services#hr-consulting" },
      { name: "HRMS Implementation", href: "/services#hr-consulting" },
      { name: "Payroll & Compliance", href: "/services#hr-consulting" },
      { name: "Employee Engagement", href: "/services#hr-consulting" },
    ],
  },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const servicesTimer = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - lastY.current;
    setAtTop(y < 40);
    if (!mobileOpen) {
      if (delta > 8 && y > 120) setVisible(false);
      else if (delta < -4) setVisible(true);
    }
    lastY.current = y;
  });

  const isServicesActive = pathname === "/services";

  const openServices = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current);
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      {/* ── Top info bar ── */}
      <AnimatePresence>
        {atTop && !mobileOpen && (
          <motion.div
            key="topbar"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="fixed top-0 left-0 right-0 z-50 hidden md:block"
            style={{ background: "#071c3e" }}
          >
            {/* Gold bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px opacity-20"
              style={{ background: "linear-gradient(to right, transparent, #C89B3C 30%, #C89B3C 70%, transparent)" }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16 flex justify-between items-center py-[7px]">
              <div className="flex items-center gap-1.5 text-white/50 text-[11px] font-medium">
                <IconMapPin className="w-3 h-3 text-brand-secondary flex-shrink-0" />
                <span>Unit No. 604, Tower B, Bhutani Alphathum, Sector 90, Noida, UP 201305</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-white/50">
                <a href="mailto:hr@primehireminds.com"
                  className="flex items-center gap-1 hover:text-brand-secondary transition-colors font-medium">
                  <IconMail className="w-3 h-3 text-brand-secondary" />
                  hr@primehireminds.com
                </a>
                <span className="w-px h-3 bg-white/12 inline-block" />
                <a href="mailto:info@primehireminds.com"
                  className="flex items-center gap-1 hover:text-brand-secondary transition-colors font-medium">
                  info@primehireminds.com
                </a>
                <span className="w-px h-3 bg-white/12 inline-block" />
                <a href="mailto:support@primehireminds.com"
                  className="flex items-center gap-1 hover:text-brand-secondary transition-colors font-medium">
                  support@primehireminds.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Navbar ── */}
      <motion.header
        animate={{ y: visible ? 0 : -90 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300",
          atTop ? "top-[1.85rem] md:top-[2.1rem]" : "top-0"
        )}
      >
        {/* Full-width navbar wrapper also acts as positioning context for mega menu */}
        <div
          className={cn(
            "relative bg-white transition-all duration-350",
            atTop
              ? "shadow-[0_4px_28px_rgba(11,44,95,0.1),0_0_0_1px_rgba(200,155,60,0.12)]"
              : "border-b border-brand-accent/70 shadow-[0_2px_14px_rgba(11,44,95,0.06)]",
            mobileOpen && "!shadow-none border-b border-brand-accent/70"
          )}
        >
          {/* Gold shimmer line when scrolled */}
          {!atTop && (
            <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }} />
          )}

          {/* Centered content container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <Link href="/" className="flex items-center flex-shrink-0 z-10 py-1">
                <div className={cn(
                  "relative flex-shrink-0 transition-all duration-350",
                  atTop ? "w-16 h-16 md:w-20 md:h-20" : "w-14 h-14 md:w-16 md:h-16"
                )}>
                  <Image
                    src="/logo.png"
                    alt="Prime Hire Minds Consulting"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* DESKTOP NAV — centred with Services in middle */}
              <nav className="hidden md:flex items-center gap-0.5">
                {/* Left Links */}
                {navLinksLeft.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "relative px-4 lg:px-5 py-6 text-[13px] font-black tracking-[0.06em] uppercase transition-colors duration-200 group whitespace-nowrap",
                        active
                          ? "text-brand-secondary"
                          : "text-brand-dark/55 hover:text-brand-primary"
                      )}
                    >
                      <span className="relative">{link.name}</span>

                      {/* Active / hover underline */}
                      <span className={cn(
                        "absolute bottom-3 left-4 right-4 h-[2px] bg-brand-secondary origin-left transition-all duration-300",
                        active
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50"
                      )} />
                    </Link>
                  );
                })}

                {/* Services Dropdown Trigger — CENTER */}
                <div
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1.5 px-4 lg:px-5 py-6 text-[13px] font-black tracking-[0.06em] uppercase transition-colors duration-200 group whitespace-nowrap",
                      isServicesActive ? "text-brand-secondary" : "text-brand-dark/55 hover:text-brand-primary"
                    )}
                  >
                    <span>Services</span>
                    <IconChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
                    <span className={cn(
                      "absolute bottom-3 left-4 right-4 h-[2px] bg-brand-secondary origin-left transition-all duration-300",
                      isServicesActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50"
                    )} />
                  </button>

                  {/* Mega Menu — positioned under Services */}
                  <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="pointer-events-auto"
                        >
                          <div className="pt-3 px-4">
                            <div className="bg-white shadow-[0_24px_60px_-12px_rgba(11,44,95,0.22)] border border-brand-accent/60 w-[min(92vw,720px)] p-5 sm:p-6 grid grid-cols-2 gap-5 sm:gap-6">
                              {serviceDropdown.map((section) => {
                                const SectionIcon = section.icon;
                                return (
                                  <div key={section.category}>
                                    <Link
                                      href={section.href}
                                      className="flex items-center gap-2 mb-3 group"
                                      onClick={() => setServicesOpen(false)}
                                    >
                                      <div className="w-8 h-8 flex items-center justify-center bg-brand-primary/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                        <SectionIcon className="w-4 h-4" />
                                      </div>
                                      <span className="text-xs font-black uppercase tracking-[0.12em] text-brand-primary group-hover:text-brand-secondary transition-colors">
                                        {section.category}
                                      </span>
                                    </Link>
                                    <ul className="space-y-1">
                                      {section.items.map((item) => (
                                        <li key={item.name}>
                                          <Link
                                            href={item.href}
                                            onClick={() => setServicesOpen(false)}
                                            className="text-[11px] font-bold text-brand-dark/60 hover:text-brand-primary transition-colors flex items-center gap-1.5 py-1"
                                          >
                                            <span className="w-1 h-px bg-brand-secondary/60" />
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                              <div className="col-span-2 mt-2 pt-3 border-t border-brand-accent/60 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-[0.12em] text-brand-dark/40">
                                  15+ corporate B2B services
                                </span>
                                <Link
                                  href="/services"
                                  onClick={() => setServicesOpen(false)}
                                  className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.1em] text-brand-primary hover:text-brand-secondary transition-colors"
                                >
                                  View All Services <IconArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right Links */}
                {navLinksRight.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "relative px-4 lg:px-5 py-6 text-[13px] font-black tracking-[0.06em] uppercase transition-colors duration-200 group whitespace-nowrap",
                        active
                          ? "text-brand-secondary"
                          : "text-brand-dark/55 hover:text-brand-primary"
                      )}
                    >
                      <span className="relative">{link.name}</span>

                      {/* Active / hover underline */}
                      <span className={cn(
                        "absolute bottom-3 left-4 right-4 h-[2px] bg-brand-secondary origin-left transition-all duration-300",
                        active
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50"
                      )} />
                    </Link>
                  );
                })}
              </nav>

              {/* CTA + MOBILE TOGGLE */}
              <div className="flex items-center gap-3 flex-shrink-0 z-10">
                {/* Desktop CTA */}
                <Link
                  href="/contact"
                  className={cn(
                    "hidden lg:inline-flex items-center gap-2 text-[0.75rem] font-black uppercase tracking-[0.1em] text-white overflow-hidden relative group transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(200,155,60,0.55)]",
                    atTop ? "px-5 py-2.5" : "px-4 py-2"
                  )}
                  style={{
                    background: "linear-gradient(135deg, #d9ae55 0%, #C89B3C 55%, #a87d28 100%)",
                    boxShadow: "0 4px 16px rgba(200,155,60,0.38)",
                  }}
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-650 bg-gradient-to-r from-transparent via-white/22 to-transparent" />
                  <IconPhoneCall className="w-3.5 h-3.5 relative flex-shrink-0" />
                  <span className="relative">Get in Touch</span>
                </Link>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="md:hidden w-9 h-9 flex items-center justify-center text-brand-dark hover:bg-brand-primary/5 transition-colors"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {mobileOpen ? (
                      <motion.span key="x"
                        initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                        <IconX className="w-5 h-5" />
                      </motion.span>
                    ) : (
                      <motion.span key="m"
                        initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                        <IconMenu2 className="w-5 h-5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="bd"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-brand-dark/35 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              key="dr"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 230 }}
              className="fixed top-0 right-0 bottom-0 z-[35] w-[80vw] max-w-[300px] bg-white flex flex-col md:hidden"
              style={{ boxShadow: "-6px 0 32px rgba(11,44,95,0.14)" }}
            >
              {/* Gold top stripe */}
              <div className="h-[3px] w-full flex-shrink-0"
                style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }} />

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-brand-accent/60">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                  <div className="relative w-14 h-14">
                    <Image src="/logo.png" alt="Prime Hire Minds Consulting" fill className="object-contain" />
                  </div>
                </Link>
                <button onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-brand-dark/35 hover:text-brand-primary transition-colors">
                  <IconX className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 pt-3 overflow-y-auto">
                {[...navLinksLeft, ...navLinksRight].map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.06, duration: 0.22 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-3.5 mb-1 text-[0.78rem] font-black uppercase tracking-[0.08em] transition-all duration-200 group border-l-2",
                          active
                            ? "bg-brand-primary text-white border-brand-secondary"
                            : "text-brand-dark/60 hover:bg-brand-primary/5 hover:text-brand-primary border-transparent hover:border-brand-secondary/30"
                        )}
                      >
                        {link.name}
                        <IconArrowRight className={cn(
                          "w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5",
                          active ? "text-brand-secondary" : "text-brand-dark/20 group-hover:text-brand-secondary"
                        )} />
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Services Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinksLeft.length + navLinksRight.length) * 0.05 + 0.06, duration: 0.22 }}
                  className="border-l-2 border-transparent"
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full px-4 py-3.5 mb-1 text-[0.78rem] font-black uppercase tracking-[0.08em] transition-all duration-200 group",
                      isServicesActive
                        ? "bg-brand-primary text-white border-l-2 border-brand-secondary -ml-0.5"
                        : "text-brand-dark/60 hover:bg-brand-primary/5 hover:text-brand-primary"
                    )}
                  >
                    <span>Services</span>
                    <IconChevronDown className={cn("w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {serviceDropdown.map((section) => (
                          <div key={section.category} className="mb-3 px-4">
                            <Link
                              href={section.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-[11px] font-black uppercase tracking-[0.1em] text-brand-primary mb-1.5 block"
                            >
                              {section.category}
                            </Link>
                            <ul className="space-y-0.5">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[10px] text-brand-dark/55 hover:text-brand-secondary transition-colors py-0.5 block"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setMobileOpen(false)}
                          className="text-[11px] font-black uppercase tracking-[0.1em] text-brand-secondary hover:text-brand-primary transition-colors px-4 py-2 block"
                        >
                          View All Services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.22 }}
                className="px-4 pb-6 pt-3 border-t border-brand-accent/60 space-y-2.5"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 text-white w-full py-3.5 font-black text-[0.78rem] uppercase tracking-[0.1em] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(200,155,60,0.5)]"
                  style={{ background: "linear-gradient(135deg, #d9ae55 0%, #C89B3C 55%, #a87d28 100%)", boxShadow: "0 4px 16px rgba(200,155,60,0.35)" }}
                >
                  <IconPhoneCall className="w-4 h-4" />
                  Contact Us Now
                </Link>
                <a href="mailto:info@primehireminds.com"
                  className="flex items-center justify-center gap-2 text-brand-primary/60 text-xs hover:text-brand-primary transition-colors py-1 font-bold">
                  <IconMail className="w-3.5 h-3.5 text-brand-secondary" />
                  info@primehireminds.com
                </a>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
