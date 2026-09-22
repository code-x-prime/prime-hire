"use client";

import { useRef, useState } from "react";
import {
  IconSend, IconCircleCheck, IconAlertCircle, IconLoader2,
  IconUser, IconMail, IconPhone, IconChevronDown, IconUpload, IconX,
} from "@tabler/icons-react";

type Status = "idle" | "submitting" | "success" | "error";

const MAX_SIZE = 8 * 1024 * 1024; // 8MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

const internshipTypes = [
  "HR Internship",
  "Business Development Internship",
];

const inputClass =
  "w-full bg-[#F8FAFC] border border-brand-accent/70 px-4 py-3 text-[0.88rem] text-brand-dark placeholder:text-brand-dark/28 outline-none transition-all duration-200 focus:bg-white focus:border-brand-primary/50 focus:shadow-[0_0_0_3px_rgba(11,44,95,0.06)] hover:border-brand-dark/20";

export default function InternshipApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", internshipType: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (form.phone && !form.phone.match(/^[+\d\s\-()]{7,}$/)) e.phone = "Valid phone number required";
    if (!form.internshipType) e.internshipType = "Please select an internship type";
    if (!resume) {
      e.resume = "Resume is required";
    } else {
      const ext = resume.name.toLowerCase().slice(resume.name.lastIndexOf("."));
      if (!ALLOWED_TYPES.includes(resume.type) && !ALLOWED_EXT.includes(ext)) {
        e.resume = "Only PDF, DOC or DOCX files allowed";
      } else if (resume.size > MAX_SIZE) {
        e.resume = "Resume must be 8MB or smaller";
      }
    }
    return e;
  };

  const set = (key: string) => (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [key]: ev.target.value }));
    if (errors[key]) setErrors((er) => { const n = { ...er }; delete n[key]; return n; });
  };

  const onFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0] || null;
    setResume(file);
    if (errors.resume) setErrors((er) => { const n = { ...er }; delete n.resume; return n; });
  };

  const clearFile = () => {
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("submitting");

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("internshipType", form.internshipType);
      if (resume) fd.append("resume", resume);

      const res = await fetch("/api/internship-apply", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", internshipType: "" });
        clearFile();
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  /* ── Success ── */
  if (status === "success") {
    return (
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-10 py-20"
        style={{
          background: "linear-gradient(155deg, #1a4080 0%, #0B2C5F 55%, #071e42 100%)",
          border: "1px solid rgba(200,155,60,0.2)",
          boxShadow: "0 32px 80px -16px rgba(11,44,95,0.35)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }} />

        <div
          className="w-16 h-16 flex items-center justify-center mb-6"
          style={{ background: "rgba(200,155,60,0.15)", border: "1px solid rgba(200,155,60,0.35)" }}
        >
          <IconCircleCheck className="w-7 h-7 text-brand-secondary" />
        </div>

        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="w-5 h-[2px] bg-brand-secondary" />
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-brand-secondary">Application Sent</span>
          <span className="w-5 h-[2px] bg-brand-secondary" />
        </div>

        <h3 className="font-serif font-bold text-white text-2xl mb-3 leading-snug">
          Application Received
        </h3>
        <p className="text-white/45 text-[0.88rem] leading-relaxed max-w-sm mb-10">
          Your resume has been submitted successfully. Our team will review it and get back to you within{" "}
          <span className="text-brand-secondary font-bold">2–3 business days</span>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-brand-secondary transition-colors duration-200"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 16px 48px -12px rgba(11,44,95,0.1)",
      }}
    >
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }} />

      {/* Form header */}
      <div className="px-8 pt-9 pb-6 border-b border-brand-accent/60">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-5 h-[2px] bg-brand-secondary" />
          <span className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-secondary">
            Internship Application
          </span>
        </div>
        <h3 className="font-serif font-bold text-brand-dark text-xl md:text-2xl leading-snug">
          Apply for an Internship
        </h3>
        <p className="text-brand-dark/38 text-[0.8rem] mt-1">
          Fill in your details and upload your resume (PDF/DOC, max 8MB)
        </p>
      </div>

      {/* Form fields */}
      <form onSubmit={handleSubmit} noValidate className="px-8 py-8 space-y-5">

        {/* Row 1: Name + Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/38 mb-1.5">
              Full Name <span className="text-brand-secondary">*</span>
            </label>
            <div className="relative">
              <IconUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-dark/25 pointer-events-none" />
              <input
                type="text" value={form.name} onChange={set("name")}
                placeholder="Rajiv Sharma"
                className={`${inputClass} pl-9 ${errors.name ? "border-red-300 focus:border-red-400" : ""}`}
              />
            </div>
            {errors.name && <ErrorMsg msg={errors.name} />}
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/38 mb-1.5">
              Phone Number
            </label>
            <div className="relative">
              <IconPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-dark/25 pointer-events-none" />
              <input
                type="tel" value={form.phone} onChange={set("phone")}
                placeholder="+91 98765 43210"
                className={`${inputClass} pl-9 ${errors.phone ? "border-red-300 focus:border-red-400" : ""}`}
              />
            </div>
            {errors.phone && <ErrorMsg msg={errors.phone} />}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/38 mb-1.5">
            Email Address <span className="text-brand-secondary">*</span>
          </label>
          <div className="relative">
            <IconMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-dark/25 pointer-events-none" />
            <input
              type="email" value={form.email} onChange={set("email")}
              placeholder="you@college.edu"
              className={`${inputClass} pl-9 ${errors.email ? "border-red-300 focus:border-red-400" : ""}`}
            />
          </div>
          {errors.email && <ErrorMsg msg={errors.email} />}
        </div>

        {/* Internship Type */}
        <div>
          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/38 mb-1.5">
            Internship Type <span className="text-brand-secondary">*</span>
          </label>
          <div className="relative">
            <select
              value={form.internshipType} onChange={set("internshipType")}
              className={`${inputClass} appearance-none cursor-pointer pr-9 ${errors.internshipType ? "border-red-300 focus:border-red-400" : ""}`}
            >
              <option value="">Select internship type...</option>
              {internshipTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <IconChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-dark/28 pointer-events-none" />
          </div>
          {errors.internshipType && <ErrorMsg msg={errors.internshipType} />}
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/38 mb-1.5">
            Upload Resume <span className="text-brand-secondary">*</span>
          </label>

          {!resume ? (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={`w-full flex flex-col items-center justify-center gap-2 px-4 py-7 border border-dashed cursor-pointer transition-all duration-200 bg-[#F8FAFC] hover:bg-white hover:border-brand-primary/40 ${errors.resume ? "border-red-300" : "border-brand-accent/70"}`}
            >
              <IconUpload className="w-5 h-5 text-brand-dark/30" />
              <span className="text-[0.8rem] text-brand-dark/45">
                Click to upload resume
              </span>
              <span className="text-[0.7rem] text-brand-dark/28">
                PDF, DOC or DOCX · Max 8MB
              </span>
            </button>
          ) : (
            <div className="flex items-center justify-between gap-3 px-4 py-3.5 border border-brand-primary/30 bg-brand-primary/5">
              <div className="flex items-center gap-3 min-w-0">
                <IconUpload className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[0.82rem] text-brand-dark font-medium truncate">{resume.name}</p>
                  <p className="text-[0.7rem] text-brand-dark/45">{(resume.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                type="button" onClick={clearFile}
                className="p-1.5 hover:bg-red-50 text-brand-dark/40 hover:text-red-500 transition-colors flex-shrink-0"
                aria-label="Remove resume"
              >
                <IconX className="w-4 h-4" />
              </button>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={onFileChange}
            className="hidden"
          />
          {errors.resume && <ErrorMsg msg={errors.resume} />}
        </div>

        {/* API error */}
        {status === "error" && (
          <div className="flex items-center gap-2.5 px-4 py-3 border border-red-200 bg-red-50/60">
            <IconAlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <p className="text-red-600 text-[0.82rem]">
              Something went wrong. Please try again or email us directly.
            </p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="relative w-full flex items-center justify-center gap-2.5 py-[1.05rem] text-[0.82rem] font-black uppercase tracking-[0.1em] text-white overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(200,155,60,0.55)] disabled:opacity-60 disabled:pointer-events-none group"
          style={{
            background: "linear-gradient(135deg, #d9ae55 0%, #C89B3C 55%, #a87d28 100%)",
            boxShadow: "0 4px 18px rgba(200,155,60,0.38)",
          }}
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/22 to-transparent" />
          {status === "submitting" ? (
            <><IconLoader2 className="w-4 h-4 animate-spin relative z-10" />
              <span className="relative z-10">Submitting...</span></>
          ) : (
            <><IconSend className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Submit Application</span></>
          )}
        </button>

        <p className="text-center text-brand-dark/22 text-[10px] font-black uppercase tracking-[0.15em]">
          No spam · Fully confidential · Zero obligation
        </p>
      </form>
    </div>
  );
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-[0.75rem] text-red-500">
      <span className="w-1 h-1 bg-red-500 flex-shrink-0" />
      {msg}
    </p>
  );
}
