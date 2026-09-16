"use client";

import { useState } from "react";

const topics = [
  "General enquiry",
  "Wholesale",
  "Corporate wellness",
  "Workforce & services",
  "Partnerships",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#f4f6f1] rounded-2xl p-8 md:p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-ivar-green/15 text-ivar-green flex items-center justify-center text-2xl mx-auto mb-4">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-medium mb-2">
          Thanks — message received.
        </h3>
        <p className="text-[#68766f] text-sm leading-[1.7] font-light">
          This is a demo storefront, so nothing was sent yet — connect a form
          backend (email, CRM or a service like Formspree) before launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2 text-xs text-[#4b564f]">
          Name
          <input
            required
            type="text"
            name="name"
            className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-ivar-dark"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs text-[#4b564f]">
          Email
          <input
            required
            type="email"
            name="email"
            className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-ivar-dark"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-xs text-[#4b564f]">
        I'm reaching out about
        <select
          name="topic"
          className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-ivar-dark"
          suppressHydrationWarning
        >
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-xs text-[#4b564f]">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-ivar-dark resize-none"
        />
      </label>
      <button
        type="submit"
        className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green w-max"
        suppressHydrationWarning
      >
        Send Message
      </button>
    </form>
  );
}
