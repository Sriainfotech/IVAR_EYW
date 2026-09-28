"use client";

import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

export default function ProcessTimeline({ eyebrow, title, steps, dark = true }) {
  return (
    <section className={dark ? "bg-ivar-forest py-16 md:py-24" : "bg-ivar-cream py-16 md:py-24"}>
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <RevealOnScroll className="mb-12 md:mb-16 max-w-[620px]">
          {eyebrow && (
            <p
              className={`text-[11px] tracking-[0.2em] uppercase font-semibold mb-4 ${
                dark ? "text-ivar-sage" : "text-ivar-forest"
              }`}
            >
              {eyebrow}
            </p>
          )}
          <h2 className={`font-display text-editorial-section leading-[1.1] ${dark ? "text-white" : "text-ivar-ink"}`}>
            {title}
          </h2>
        </RevealOnScroll>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x ${
            dark ? "divide-white/12" : "divide-ivar-forest/12"
          }`}
        >
          {steps.map((s, i) => (
            <RevealOnScroll
              key={s.n ?? s.title}
              delay={i * 0.08}
              className={`py-8 sm:py-0 sm:pl-7 first:sm:pl-0 ${dark ? "" : ""}`}
            >
              <span className={`font-display text-[32px] ${dark ? "text-ivar-sage" : "text-ivar-forest"}`}>
                {s.n ?? String(i + 1).padStart(2, "0")}
              </span>
              {s.icon && (
                <span
                  className={`block size-10 rounded-full border flex items-center justify-center my-4 ${
                    dark ? "border-white/25 text-white" : "border-ivar-forest text-ivar-forest"
                  }`}
                >
                  <LineIcon name={s.icon} size={18} stroke={1.6} />
                </span>
              )}
              <h3 className={`font-semibold text-[16px] mb-2 ${dark ? "text-white" : "text-ivar-ink"} ${s.icon ? "" : "mt-4"}`}>
                {s.title}
              </h3>
              <p className={`text-[13px] leading-relaxed ${dark ? "text-white/60" : "text-ivar-muted"}`}>{s.text}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
