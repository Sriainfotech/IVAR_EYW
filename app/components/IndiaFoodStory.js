"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

export default function IndiaFoodStory() {
  return (
    <section className="bg-ivar-cream py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[4vw] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative min-h-[320px] md:min-h-[460px] h-full rounded-2xl overflow-hidden order-2 lg:order-1 bg-ivar-sand"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero-veg-spices.jpg"
            alt="Indian spices and ingredients"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4"
          >
            Our Origin
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[34px] md:text-[52px] leading-[1.08] text-ivar-ink"
          >
            India has always known good food.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[#33413a] max-w-[480px]"
          >
            India has thousands of ingredients, recipes and food traditions. Ivar brings them into modern formats
            through food science, processing, product development and packaging.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/story"
              className="inline-flex items-center gap-3 mt-8 text-ivar-forest font-semibold text-sm hover:gap-4 transition-all"
            >
              Discover Our Story <LineIcon name="arrow" size={16} stroke={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
