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
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <RevealOnScroll>
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">
            Our Flagship Ingredient
          </p>
          <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink mb-5 max-w-[460px]">
            Makhana. Reimagined for Modern Snacking.
          </h2>
          <p className="text-editorial-body text-ivar-muted mb-9 max-w-[460px]">
            One of India&apos;s oldest superfoods, roasted and seasoned into a light, crunchy snack for everyday
            life — real ingredients, nothing artificial.
          </p>

          <p className="text-[12px] tracking-[0.15em] uppercase text-ivar-ink font-semibold mb-4">
            What Makes It Different
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
            {METRICS.map((m) => (
              <li key={m} className="flex items-center gap-2.5 text-[14px] text-ivar-ink">
                <span className="size-5 rounded-full bg-ivar-botanical text-ivar-forest flex items-center justify-center shrink-0">
                  <LineIcon name="check" size={11} stroke={2.4} />
                </span>
                {m}
              </li>
            ))}
          </ul>

          <div className="border-t border-ivar-forest/12 pt-7">
            <p className="text-[11px] tracking-[0.15em] uppercase text-ivar-forest font-semibold mb-2">
              Made for Everyday Life
            </p>
            <p className="text-[14px] leading-relaxed text-ivar-muted max-w-[440px] mb-5">
              Snack on it straight from the bowl, toss it into salads, or simmer it into a curry — the same
              goodness, in whatever format fits your day.
            </p>
            <Link
              href="/ingredients/makhana"
              className="group inline-flex items-center gap-2.5 text-ivar-forest font-semibold text-sm"
            >
              Explore Makhana
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ivar-cream">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/products/eat/makhana-hero-extraordinary.jpeg"
            alt="Ivar Makhana"
            className="w-full h-full object-cover"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
