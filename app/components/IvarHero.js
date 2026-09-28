"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

const SLIDES = [
  "/assets/hero-avocado-toast.jpg",
  "/assets/hero-open-faced-sandwiches.jpg",
  "/assets/hero-cucumber-toasts.jpg",
];

export default function IvarHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-white flex items-center">
      {SLIDES.map((img, i) => (
        <motion.div
          key={img}
          aria-hidden={i !== active}
          initial={false}
          animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.06 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}
      <div className="relative z-10 max-w-[720px] mx-auto px-[6vw] text-center pt-24 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-ivar-forest/20 px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase text-ivar-forest font-semibold mb-8"
          style={{ textShadow: "0 1px 12px rgba(255,255,255,0.8)" }}
        >
          <LineIcon name="leaf" size={14} stroke={1.8} />
          Pure Natural Indian Food
        </motion.span>

        <h1 className="leading-[1.02]" style={{ textShadow: "0 2px 20px rgba(255,255,255,0.85)" }}>
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="block font-sans text-[64px] sm:text-[88px] md:text-[110px] font-bold text-ivar-ink tracking-tight"
          >
            IVAR
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="block font-display text-[44px] sm:text-[58px] md:text-[72px] italic text-ivar-green -mt-2 md:-mt-4"
          >
            Foods.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.6 }}
          className="mt-7 text-[16px] md:text-[18px] leading-relaxed text-ivar-ink/80 max-w-[480px] mx-auto"
          style={{ textShadow: "0 1px 12px rgba(255,255,255,0.8)" }}
        >
          From India&apos;s ingredients and food traditions to modern food products — natural, thoughtfully made and
          designed for today&apos;s world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/foods"
            className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
          >
            Explore Foods
            <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/story"
            className="text-ivar-forest text-[14px] font-semibold hover:underline underline-offset-4"
            style={{ textShadow: "0 1px 12px rgba(255,255,255,0.8)" }}
          >
            Our Story
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          {SLIDES.map((img, i) => (
            <button
              key={img}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all cursor-pointer ${
                i === active ? "w-8 bg-ivar-forest" : "w-4 bg-ivar-forest/30"
              }`}
              suppressHydrationWarning
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
