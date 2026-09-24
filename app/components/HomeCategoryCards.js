"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LineIcon from "./LineIcon";
import { VISIBLE_FOOD_CATEGORIES } from "../data/foodCategories";

export default function HomeCategoryCards() {
  return (
    <section className="bg-ivar-paper py-14 md:py-20">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {VISIBLE_FOOD_CATEGORIES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link href={`/foods/${c.slug}`} className="group block">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-ivar-cream mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[13px] font-semibold text-ivar-ink">{c.label}</span>
                  <span className="shrink-0 size-7 rounded-full bg-ivar-forest text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <LineIcon name="arrow" size={12} stroke={2.4} />
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
