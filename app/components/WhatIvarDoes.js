"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

const CARDS = [
  {
    n: "01",
    title: "Ivar Foods",
    text: "Consumer-facing food products, made from India's ingredients.",
    href: "/shop",
    img: "/assets/category-ivar-foods.png",
  },
  {
    n: "02",
    title: "Processed Foods",
    text: "Value-added processing that turns raw ingredients into everyday foods.",
    href: "/shop",
    img: "/assets/products/eat/crunchy-nutrition.jpg",
  },
  {
    n: "03",
    title: "Ingredients",
    text: "Indian ingredients and applications for B2B and food partners.",
    href: "/ingredients",
    img: "/assets/category-ivar-ingredients.png",
  },
  {
    n: "04",
    title: "Packaging",
    text: "Food-focused packaging that protects freshness and quality.",
    href: "/packaging",
    img: "/assets/hero-veg-fruit-table.jpg",
  },
];

export default function WhatIvarDoes() {
  return (
    <section className="bg-ivar-ivory py-12 md:py-16">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14 max-w-[620px]"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">What Ivar Does</p>
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1] text-ivar-ink">
            One food platform. Multiple possibilities.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={c.href}
                className="group relative block overflow-hidden rounded-2xl aspect-[4/3] bg-ivar-cream"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ivar-ink/85 via-ivar-ink/20 to-transparent" />

                <span className="absolute top-5 left-6 font-display text-[15px] text-white/70">{c.n}</span>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-semibold text-[20px] md:text-[22px] text-white mb-1.5">{c.title}</h3>
                  <p className="text-[13px] leading-relaxed text-white/75 max-w-[320px] mb-3">{c.text}</p>
                  <span className="inline-flex items-center gap-2 text-white text-[13px] font-semibold">
                    Explore
                    <LineIcon
                      name="arrow"
                      size={15}
                      stroke={2}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
