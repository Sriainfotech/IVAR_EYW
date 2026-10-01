"use client";

import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

const METRICS = [
  "Roasted, not fried",
  "High in plant protein",
  "Naturally gluten-free",
  "No artificial preservatives",
  "Traditionally sourced",
  "Ready in seconds",
];

export default function SignatureFeature() {
  return (
    <section className="relative bg-ivar-forest py-20 md:py-28 overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-display uppercase text-[22vw] md:text-[15vw] leading-none text-white/[0.05]"
      >
        Makhana
      </span>

      <div className="relative max-w-[1500px] mx-auto px-[6vw] grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-20 items-center">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-[15px] text-ivar-sage">01</span>
            <span className="h-px w-10 bg-white/20" />
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold">
              Our Flagship Ingredient
            </p>
          </div>

          <h2 className="font-display text-editorial-section leading-[1.1] text-white mb-5 max-w-[460px]">
            Makhana. <span className="italic text-ivar-sage">Reimagined.</span>
          </h2>
          <p className="text-editorial-body text-white/65 mb-9 max-w-[440px]">
            One of India&apos;s oldest superfoods, roasted and seasoned into a light, crunchy snack for everyday
            life — real ingredients, nothing artificial.
          </p>

          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 md:p-7 mb-9">
            <p className="text-[11px] tracking-[0.15em] uppercase text-white/50 font-semibold mb-4">
              What Makes It Different
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {METRICS.map((m) => (
                <li key={m} className="flex items-center gap-2.5 text-[13.5px] text-white/85">
                  <span className="size-5 rounded-full bg-white/10 text-ivar-sage flex items-center justify-center shrink-0">
                    <LineIcon name="check" size={11} stroke={2.4} />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/ingredients/makhana"
            className="group inline-flex items-center gap-3 bg-white text-ivar-forest text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-sage transition-colors"
          >
            Explore Makhana
            <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>

        <RevealOnScroll y={0} delay={0.1} className="relative mx-auto w-full max-w-[440px] aspect-square">
          <div className="absolute inset-0 rounded-full overflow-hidden ring-1 ring-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/products/eat/makhana-hero-extraordinary.jpeg"
              alt="Ivar Makhana"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 inline-flex items-center gap-2 bg-white text-ivar-forest text-[11px] font-semibold uppercase tracking-wide rounded-full px-4 py-2.5 shadow-lg">
            <LineIcon name="leaf" size={13} stroke={1.8} />
            100% Natural
          </span>
        </RevealOnScroll>
      </div>
    </section>
  );
}
