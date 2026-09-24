"use client";

import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="rounded-2xl border border-[#e6e3d6] overflow-hidden bg-white">
      {items.map((item, i) => (
        <div key={item.q} className="border-b border-[#e6e3d6] last:border-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
            suppressHydrationWarning
          >
            <span className="text-[14px] md:text-[15px] font-medium text-ivar-ink">{item.q}</span>
            <span
              className={`shrink-0 text-ivar-forest transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-5 pb-4 text-[13.5px] leading-relaxed text-[#4b564f]">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
