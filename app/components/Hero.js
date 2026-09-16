"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    img: "/assets/hero-vegan-overhead.jpg",
    eyebrow: "A Better Way to Live",
    title: (
      <>
        Good food.
        <br />
        <em className="text-[#bfe6cf] not-italic">Better living.</em>
      </>
    ),
    lead: "Discover thoughtfully made foods and everyday wellness inspired by nature, Indian ingredients and modern lifestyles.",
  },
  {
    img: "/assets/hero-couple-cooking.jpg",
    eyebrow: "Eat. Move. Live Well.",
    title: (
      <>
        One brand,
        <br />
        <em className="text-[#bfe6cf] not-italic">every part of your day.</em>
      </>
    ),
    lead: "From breakfast to wellness, Ivar brings food, movement and mindful living together.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[560px] md:h-[680px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[900ms] ${
            i === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.img}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivar-darker/80 via-ivar-darker/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-[6vw]">
            <div className="max-w-[560px] text-white">
              <p className="text-[11px] tracking-[0.3em] font-semibold text-[#a9dcc0] mb-5 uppercase">
                {s.eyebrow}
              </p>
              <h1 className="font-serif font-medium text-[44px] md:text-[clamp(48px,6vw,80px)] leading-[1.02] mb-7">
                {s.title}
              </h1>
              <p className="text-lg leading-[1.75] text-[#dce8e1] max-w-[480px] font-light mb-8">
                {s.lead}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-white text-ivar-dark transition-transform duration-300 hover:scale-[1.03]"
                  href="#shop"
                >
                  Shop Ivar
                </a>
                <a
                  className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-white/60 text-white transition-colors duration-300 hover:border-white"
                  href="/story"
                >
                  Explore Ivar
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-7 bg-white" : "w-2 bg-white/50"
            }`}
            onClick={() => setActive(i)}
            suppressHydrationWarning
          />
        ))}
      </div>
    </section>
  );
}
