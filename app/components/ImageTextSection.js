"use client";

import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

export default function ImageTextSection({
  img,
  imgAlt = "",
  imageSide = "left",
  eyebrow,
  title,
  text,
  cta,
  ctaHref,
  bg = "bg-ivar-cream",
}) {
  const imageBlock = (
    <RevealOnScroll y={0} className="relative aspect-[4/3] lg:aspect-auto lg:h-[520px] overflow-hidden rounded-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={imgAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
    </RevealOnScroll>
  );

  const textBlock = (
    <RevealOnScroll className="px-[6vw] lg:px-[4vw] py-14 md:py-0 max-w-[520px]">
      {eyebrow && (
        <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">{eyebrow}</p>
      )}
      {title && <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink mb-5">{title}</h2>}
      {text && <p className="text-editorial-body text-ivar-muted mb-7">{text}</p>}
      {cta && ctaHref && (
        <Link
          href={ctaHref}
          className="group inline-flex items-center gap-2.5 text-ivar-forest font-semibold text-sm"
        >
          {cta}
          <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1.5" />
        </Link>
      )}
    </RevealOnScroll>
  );

  return (
    <section className={`${bg} overflow-hidden`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {imageSide === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
