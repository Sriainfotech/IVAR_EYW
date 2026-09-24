"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

const STAGES = [
  { label: "Indian Farms", sub: "Rich natural ingredients", img: "/assets/hero-veg-fruit-table.jpg" },
  { label: "Traditional Ingredients", sub: "India's food heritage", img: "/assets/hero-veg-spices.jpg" },
  { label: "Food Science", sub: "Modern innovation", img: "/assets/products/eat/immunity-shield.jpg" },
  { label: "Modern Products", sub: "Healthy & convenient", img: "/assets/products/eat/makhana-crunch.jpg" },
  { label: "Packaging", sub: "Better for food", img: "/assets/products/eat/crunchy-nutrition.jpg" },
  { label: "Global Markets", sub: "From India to the world", img: "/assets/hero-grain-bowl.jpg" },
];

export default function IndiaJourneyCircles() {
  return (
    <section className="bg-ivar-cream py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[4vw] grid grid-cols-1 lg:grid-cols-[0.8fr_1.6fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">India&apos;s Goodness</p>
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.1] text-ivar-ink mb-4">
            India Has Always Known Good Food.
          </h2>
          <p className="text-[14px] leading-relaxed text-[#4b564f] mb-6 max-w-[380px]">
            We are bringing India&apos;s ingredients, recipes and food traditions into modern formats for a new generation.
          </p>
          <Link href="/story" className="inline-flex items-center gap-2.5 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-ivar-forestDeep transition-colors">
            Discover Our Journey <LineIcon name="arrow" size={16} stroke={2} />
          </Link>
        </motion.div>

        <div className="flex items-start gap-1 overflow-x-auto no-scrollbar pb-2">
          {STAGES.map((s, i) => (
            <div key={s.label} className="flex items-center shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center w-[110px]"
              >
                <div className="size-20 md:size-24 rounded-full overflow-hidden mb-3 ring-1 ring-ivar-forest/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.label} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="text-[12.5px] font-semibold text-ivar-ink leading-tight">{s.label}</p>
                <p className="text-[10.5px] text-[#8a938c] mt-0.5">{s.sub}</p>
              </motion.div>
              {i < STAGES.length - 1 && (
                <span className="text-ivar-forest/40 mx-1 mb-10 shrink-0" aria-hidden="true">
                  <LineIcon name="arrow" size={16} stroke={1.6} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
