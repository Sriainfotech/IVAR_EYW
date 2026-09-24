"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const STAGES = [
  { label: "Fresh Amla", text: "Harvested fresh, sourced from trusted farms across India.", img: "/assets/products/eat/immunity-shield.jpg" },
  { label: "Processing", text: "Sorted, washed and steamed to prepare it for the next stage.", img: "/assets/hero-veg-spices.jpg" },
  { label: "Dried Amla", text: "Carefully dried to concentrate flavour and extend shelf life.", img: "/assets/products/eat/roasted-nuts.jpg" },
  { label: "Amla Candy", text: "A traditional sweet-tart preserve, made in small batches.", img: "/assets/products/eat/date-chocolate-protein-bites.jpg" },
  { label: "Amla Drink", text: "A refreshing, ready-to-drink format for everyday hydration.", img: "/assets/products/eat/turmeric-latte.jpg" },
  { label: "Amla Chutney", text: "A tangy accompaniment, rooted in Indian kitchens.", img: "/assets/products/eat/digest-ease.jpg" },
  { label: "Amla Pickle", text: "Slow-preserved with spices, in the traditional way.", img: "/assets/products/eat/millet-seeds-crackers.jpg" },
  { label: "Modern Packaging", text: "Packed to protect freshness, from our kitchens to yours.", img: "/assets/hero-grain-bowl.jpg" },
];

function StageRow({ stage, i, onEnter }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6, margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (inView) onEnter(i);
  }, [inView, i, onEnter]);

  return (
    <div ref={ref} className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center">
      <span className="font-display text-[15px] text-ivar-sage mb-2">0{i + 1}</span>
      <h3 className="font-display text-[28px] md:text-[38px] text-ivar-ink mb-3">{stage.label}</h3>
      <p className="text-[15px] md:text-[16px] leading-relaxed text-[#33413a] max-w-[380px]">{stage.text}</p>
    </div>
  );
}

export default function IngredientToProduct() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ivar-cream py-12 md:py-16">
      <div className="max-w-[1500px] mx-auto px-[4vw] mb-12 md:mb-16">
        <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Amla, Explained</p>
        <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1] text-ivar-ink max-w-[640px]">
          One ingredient. Many possibilities.
        </h2>
      </div>

      <div className="max-w-[1500px] mx-auto px-[4vw] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="md:sticky md:top-24 h-max order-1">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={STAGES[active].img}
                src={STAGES[active].img}
                alt={STAGES[active].label}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="flex gap-1.5 mt-4">
            {STAGES.map((s, i) => (
              <span
                key={s.label}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i === active ? "bg-ivar-forest" : "bg-ivar-sage/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="order-2">
          {STAGES.map((stage, i) => (
            <StageRow key={stage.label} stage={stage} i={i} onEnter={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
