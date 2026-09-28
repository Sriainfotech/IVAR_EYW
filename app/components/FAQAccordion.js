"use client";

import { useState } from "react";
import LineIcon from "./LineIcon";

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="border-t border-ivar-forest/12">
      {items.map((item, i) => (
        <div key={item.q} className="border-b border-ivar-forest/12">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="group w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
            suppressHydrationWarning
          >
            <span className="text-[15px] md:text-[16px] font-medium text-ivar-ink group-hover:translate-x-1 transition-transform">
              {item.q}
            </span>
            <span
              className={`shrink-0 text-ivar-forest transition-transform duration-300 ${open === i ? "rotate-90" : ""}`}
              aria-hidden="true"
            >
              <LineIcon name="arrow" size={16} stroke={2} />
            </span>
          </button>
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-5 max-w-[560px] text-[13.5px] leading-relaxed text-ivar-muted">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
