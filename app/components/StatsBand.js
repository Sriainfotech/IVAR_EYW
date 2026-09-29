"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function StatsBand({ stats, bg = "bg-ivar-cream" }) {
  return (
    <section className={`${bg} py-14 md:py-20`}>
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ivar-forest/12">
          {stats.map((s, i) => (
            <RevealOnScroll
              key={s.label}
              delay={i * 0.08}
              className={`text-center px-3 ${i >= 2 ? "border-t border-ivar-forest/12 pt-8 mt-8 md:border-t-0 md:pt-0 md:mt-0" : ""}`}
            >
              <p className="font-display text-[36px] md:text-[52px] leading-none text-ivar-forest mb-2">{s.value}</p>
              <p className="text-[12px] md:text-[13px] tracking-wide text-ivar-muted max-w-[140px] mx-auto">{s.label}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
