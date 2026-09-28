"use client";

import { useState } from "react";
import LineIcon from "./LineIcon";

const topics = [
  "General enquiry",
  "Ingredient sourcing",
  "Product development",
  "Packaging solutions",
  "Business partnerships",
];

const fieldClass =
  "border-0 border-b border-[#d6ddd7] bg-transparent px-0 py-3 text-[15px] text-ivar-ink focus:outline-none focus:border-ivar-forest transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-8 text-left">
        <div className="w-12 h-12 rounded-full bg-ivar-sage/15 text-ivar-forest flex items-center justify-center text-2xl mb-4">
          ✓
        </div>
        <h3 className="font-display text-2xl text-ivar-ink mb-2">Thanks — message received.</h3>
        <p className="text-ivar-muted text-sm leading-[1.7]">
          This is a demo storefront, so nothing was sent yet — connect a form backend (email, CRM or a service like
          Formspree) before launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
        <label className="flex flex-col gap-2 text-[11px] uppercase tracking-wide text-ivar-muted">
          Name
          <input required type="text" name="name" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2 text-[11px] uppercase tracking-wide text-ivar-muted">
          Company
          <input type="text" name="company" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2 text-[11px] uppercase tracking-wide text-ivar-muted sm:col-span-2">
          Email
          <input required type="email" name="email" className={fieldClass} />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-[11px] uppercase tracking-wide text-ivar-muted">
        Enquiry Type
        <select name="topic" className={fieldClass} suppressHydrationWarning>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-[11px] uppercase tracking-wide text-ivar-muted">
        Message
        <textarea required name="message" rows={4} className={`${fieldClass} resize-none`} />
      </label>
      <button
        type="submit"
        className="group inline-flex items-center gap-2.5 text-ivar-forest font-semibold text-sm w-max cursor-pointer"
        suppressHydrationWarning
      >
        Send Message
        <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1.5" />
      </button>
    </form>
  );
}
