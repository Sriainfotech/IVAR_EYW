"use client";

import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

export default function DarkCTA({ img, eyebrow, title, text, cta, ctaHref, align = "left" }) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <section className="relative min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden bg-ivar-forestDeep">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivar-forestDeep via-ivar-forestDeep/70 to-ivar-forestDeep/30" />
      </div>

      <div className={`relative max-w-[1500px] mx-auto px-[6vw] w-full flex flex-col ${alignClass}`}>
        <RevealOnScroll className={`max-w-[620px] ${align === "center" ? "mx-auto" : ""}`}>
          {eyebrow && (
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-5">{eyebrow}</p>
          )}
          {title && (
            <h2 className="font-display text-editorial-hero leading-[1.05] text-white mb-6">{title}</h2>
          )}
          {text && <p className="text-editorial-body text-white/70 mb-8">{text}</p>}
          {cta && ctaHref && (
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-3 bg-white text-ivar-forest text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-sage transition-colors"
            >
              {cta}
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
