"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false,
  max = "max-w-[640px]",
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <RevealOnScroll className={`${max} ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`text-[11px] tracking-[0.2em] uppercase font-semibold mb-4 ${
            dark ? "text-ivar-sage" : "text-ivar-forest"
          }`}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={`font-display text-editorial-section leading-[1.1] ${
            dark ? "text-white" : "text-ivar-ink"
          }`}
        >
          {title}
        </h2>
      )}
      {text && (
        <p className={`mt-4 text-editorial-body ${dark ? "text-white/70" : "text-ivar-muted"}`}>
          {text}
        </p>
      )}
    </RevealOnScroll>
  );
}
