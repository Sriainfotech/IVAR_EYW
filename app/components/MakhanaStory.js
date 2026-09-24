"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

const SLIDES = [
  { img: "/assets/makhana-storyboard-1.jpeg", title: "From Nature to Your Bowl", ratio: 900 / 1440 },
  { img: "/assets/products/eat/makhana-storyboard-2.jpeg", title: "Small Seed. Extraordinary Possibilities.", ratio: 900 / 1440 },
  { img: "/assets/products/eat/makhana-hero-extraordinary.jpeg", title: "The Extraordinary in a Small Seed", ratio: 1080 / 1350 },
  { img: "/assets/products/eat/makhana-hero-crunchy.jpeg", title: "Crunchy Nutrition for a Brighter You", ratio: 1080 / 1350 },
  { img: "/assets/products/eat/makhana-vs-popcorn-1.jpeg", title: "Makhana vs Popcorn — Smart Choices", ratio: 3 / 4 },
  { img: "/assets/products/eat/makhana-vs-popcorn-2.jpeg", title: "Makhana vs Popcorn — Smart Choices", ratio: 3 / 4 },
  { img: "/assets/products/eat/makhana-vs-popcorn-3.jpeg", title: "Makhana vs Popcorn — Smart Choices", ratio: 3 / 4 },
];

export default function MakhanaStory() {
  const rail = useRef(null);
  const scroll = (dir) => rail.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section className="bg-ivar-forest py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[4vw] mb-8 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">Makhana, Reimagined</p>
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1] text-white max-w-[560px]">
            From farm to bowl.
          </h2>
        </motion.div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="size-10 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white/10 cursor-pointer"
            suppressHydrationWarning
          >
            ‹
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="size-10 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white/10 cursor-pointer"
            suppressHydrationWarning
          >
            ›
          </button>
        </div>
      </div>

      <div ref={rail} className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-[4vw] pb-2">
        {SLIDES.map((s, i) => (
          <motion.figure
            key={s.img}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            className="snap-start shrink-0 w-[240px] md:w-[280px]"
          >
            <div
              style={{ aspectRatio: s.ratio }}
              className="relative rounded-xl overflow-hidden bg-black"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-contain" />
            </div>
            <figcaption className="mt-3 text-[13px] text-white/70">{s.title}</figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="max-w-[1500px] mx-auto px-[4vw] mt-8">
        <a
          href="https://www.ivarlife.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white text-[13px] font-semibold hover:gap-3 transition-all"
        >
          www.ivarlife.com <LineIcon name="arrow" size={14} stroke={2.2} />
        </a>
      </div>
    </section>
  );
}
