"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LineIcon from "./LineIcon";

const slides = [
  { img: "/assets/hero-grain-bowl.jpg" },
  { img: "/assets/hero-vegan-overhead.jpg" },
  { img: "/assets/hero-veg-spices.jpg" },
];

const pillars = [
  ["leaf", "Real", "Ingredients"],
  ["heart", "Better", "Nutrition"],
  ["people", "Healthier", "Communities"],
  ["globe", "A Stronger", "Tomorrow"],
];

export default function IvarHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ivar-paper">
      {slides.map((s, i) => (
        <div
          key={s.img}
          aria-hidden="true"
          className={`absolute inset-y-0 right-0 w-full lg:w-[68%] transition-opacity duration-[900ms] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.img} alt="" className="w-full h-full object-cover [mask-image:linear-gradient(to_right,transparent,#000_20%)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_20%)]" />
        </div>
      ))}
      <div className="absolute inset-0 bg-ivar-paper/70 lg:hidden" />

      <div
        aria-hidden="true"
        className="hidden md:block absolute top-8 right-[5%] w-[210px] text-right -rotate-[8deg] text-white"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}
      >
        <p className="font-script text-[36px] leading-[1.02]">
          India&apos;s
          <br />
          Goodness
          <br />
          for a Healthier
          <br />
          World
        </p>
        <LineIcon name="leaf" size={22} stroke={1.6} className="ml-auto mt-1" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-[4vw] pt-10 md:pt-10 pb-12 min-h-[430px] md:min-h-[360px] flex flex-col justify-center">
        <h1 className="font-serif font-semibold text-[40px] md:text-[50px] leading-[1.04] text-[#111111] max-w-[620px]">
          Food First.
          <br />
          Build Strong.
          <br />
          <span className="text-ivar-forest">Scale Globally.</span>
        </h1>
        <p className="mt-4 text-[15px] md:text-[17px] leading-snug text-[#33413a] max-w-[470px]">
          Thoughtfully made foods inspired by India, created for everyday life and global markets.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3 hover:bg-ivar-forestDeep hover:-translate-y-0.5 transition-all"
          >
            Explore Our Foods <LineIcon name="arrow" size={16} stroke={2} />
          </Link>
          <Link
            href="/story"
            className="inline-flex items-center border border-ivar-forest text-ivar-forest text-[14px] font-semibold rounded-full px-6 py-3 hover:bg-ivar-forest hover:text-white transition-colors"
          >
            Discover Ivar
          </Link>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
          {pillars.map(([icon, a, b]) => (
            <li key={a} className="flex flex-col items-center text-center w-[86px]">
              <span className="size-10 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center mb-1.5">
                <LineIcon name={icon} size={20} />
              </span>
              <span className="text-[11.5px] leading-tight text-[#33413a]">
                {a}
                <br />
                {b}
              </span>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.img}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`size-2 rounded-full border border-ivar-forest transition-colors cursor-pointer ${
                i === active ? "bg-ivar-forest" : "bg-transparent"
              }`}
              suppressHydrationWarning
            />
          ))}
        </div>
      </div>
    </section>
  );
}
