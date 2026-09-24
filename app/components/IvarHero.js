"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

const slides = [
  { img: "/assets/hero-1-brighter-lives.png" },
  { img: "/assets/hero-2-nourishing-today.png" },
  { img: "/assets/hero-3-goodness-every-bite.png" },
  { img: "/assets/hero-4-goodness-brighter-days.png" },
];

const headingWords = ["Innovating", "Indian", "Food", "for", "the", "World."];

export default function IvarHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-ivar-forest">
      {slides.map((s, i) => (
        <motion.div
          key={s.img}
          aria-hidden={i !== active}
          initial={false}
          animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.08 }}
          transition={{ opacity: { duration: 0.9 }, scale: { duration: 6, ease: "linear" } }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.img} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}

      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ivar-forest via-ivar-forest/55 to-ivar-forest/30" />
      <div aria-hidden="true" className="absolute inset-0 bg-ivar-forest/25" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-[4vw] min-h-[100vh] flex flex-col justify-center pt-24 pb-20">
        <div className="max-w-[820px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[11px] tracking-[0.24em] uppercase text-ivar-sage font-semibold mb-5"
          >
            Ivar™
          </motion.p>

          <h1 className="font-display text-[40px] sm:text-[56px] md:text-[80px] leading-[1.02] text-white flex flex-wrap gap-x-[0.28em]">
            {headingWords.map((w, i) => (
              <motion.span
                key={w + i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className={w === "World." ? "text-ivar-sage" : undefined}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-7 text-[16px] md:text-[19px] leading-relaxed text-white/75 max-w-[540px]"
          >
            From India&apos;s ingredients and food traditions to modern food products, Ivar develops, processes and
            delivers food for today&apos;s world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-white text-ivar-forest text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-sage transition-colors"
            >
              Explore Products <LineIcon name="arrow" size={16} stroke={2} />
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center gap-3 border border-white/50 text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-white/10 transition-colors"
            >
              Discover Ivar <LineIcon name="arrow" size={16} stroke={2} />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-9 left-[4vw] flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.img}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full border border-white/60 transition-all cursor-pointer ${
                i === active ? "w-7 bg-white" : "w-1.5 bg-transparent"
              }`}
              suppressHydrationWarning
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ opacity: { delay: 1.3, duration: 0.6 }, y: { delay: 1.6, duration: 1.8, repeat: Infinity } }}
          className="absolute bottom-9 right-[4vw] hidden sm:flex items-center gap-2 text-white/70 text-[11px] tracking-[0.18em] uppercase"
        >
          Scroll to explore
          <LineIcon name="arrow" size={14} stroke={2} className="rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}
