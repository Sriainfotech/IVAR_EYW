"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const STAGES = [
  {
    label: "It Starts With Nature",
    points: [
      "Makhana comes from the seed pods of the lotus flower.",
      "Grown in shallow wetlands, ponds and lakes across India.",
      "The plant thrives in warm, still water and monsoon sunlight.",
      "Every batch begins in the same fields, season after season.",
    ],
    img: "/assets/step1.png",
  },
  {
    label: "A Small Seed",
    points: [
      "Each lotus seed pod holds a cluster of individual seeds.",
      "The seeds are round, dense and protected by a hard shell.",
      "What looks like a small seed carries a much bigger purpose.",
      "This is the raw material every Makhana product starts from.",
    ],
    img: "/assets/step2.png",
  },
  {
    label: "From Our Farms",
    points: [
      "Sourced from growers who work these wetlands by hand.",
      "No shortcuts — the seeds are gathered at the right time.",
      "Pure origins, close to the water where they grow.",
      "Wholesome goodness starts before the seed ever leaves the farm.",
    ],
    img: "/assets/step3.png",
  },
  {
    label: "Carefully Harvested",
    points: [
      "Pods are collected and opened by hand, one at a time.",
      "Traditional harvesting wisdom, passed down through generations.",
      "Modern care ensures consistency across every basket.",
      "Only sound, mature seeds move forward to processing.",
    ],
    img: "/assets/step4.png",
  },
  {
    label: "Naturally Processed",
    points: [
      "Seeds are thoroughly washed to remove dirt and husk.",
      "Cleaned with water, not chemicals or artificial treatments.",
      "This step prepares them for even, consistent roasting.",
      "Every batch is checked before moving to the next stage.",
    ],
    img: "/assets/step5.png",
  },
  {
    label: "Roasted to Perfection",
    points: [
      "Roasted over controlled heat until light and crisp.",
      "The process preserves natural nutrition inside each seed.",
      "Roasting is what gives Makhana its signature crunch.",
      "Timing matters — under or over-roasting changes the texture.",
    ],
    img: "/assets/step6.png",
  },
  {
    label: "Infused With Real Flavours",
    points: [
      "Seasoned with real spices, herbs and natural ingredients.",
      "No artificial flavouring and no added preservatives.",
      "Each flavour is built to complement the natural crunch.",
      "Only goodness goes in — nothing else.",
    ],
    img: "/assets/step7.png",
  },
  {
    label: "Many Ways to Enjoy",
    points: [
      "Snacked on straight from the bowl, any time of day.",
      "Tossed into salads for extra crunch and protein.",
      "Simmered into soups and curries the traditional way.",
      "Same goodness, many ways to bring it to the table.",
    ],
    img: "/assets/step8.png",
  },
  {
    label: "Good Food, Brighter Days",
    points: [
      "From our farms to your bowl, nothing added along the way.",
      "A snack built on real ingredients and real process.",
      "Nature nourishes a brighter you, one bowl at a time.",
      "This is Makhana, the Ivar way.",
    ],
    img: "/assets/step9.png",
  },
];

function StageRow({ stage, i, active, onEnter }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: "some", margin: "-50% 0px -50% 0px" });
  const isActive = active === i;

  useEffect(() => {
    if (inView) onEnter(i);
  }, [inView, i, onEnter]);

  return (
    <div ref={ref} className="min-h-[85vh] md:min-h-screen flex flex-col justify-center">
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.35, y: isActive ? 0 : 8 }}
        transition={{ duration: 0.4 }}
      >
        <span className="font-display text-[15px] text-ivar-sage mb-2 block">0{i + 1}</span>
        <h3 className="font-display text-[28px] md:text-[38px] text-ivar-ink mb-4">{stage.label}</h3>
        <ul className="space-y-2.5 max-w-[420px]">
          {stage.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2.5 text-[15px] md:text-[16px] leading-relaxed text-[#33413a]">
              <span className="mt-2.5 size-1.5 rounded-full bg-ivar-forest shrink-0" />
              {pt}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function IngredientToProduct() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ivar-cream py-12 md:py-16">
      <div className="max-w-[1500px] mx-auto px-[4vw] mb-12 md:mb-16">
        <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Makhana, Explained</p>
        <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1] text-ivar-ink max-w-[640px]">
          From seed to snack.
        </h2>
      </div>

      <div className="max-w-[1500px] mx-auto px-[4vw] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="md:sticky md:top-24 h-max order-1">
          <div className="relative w-full h-[560px] md:h-[620px] rounded-2xl overflow-hidden bg-ivar-sand">
            <AnimatePresence mode="wait">
              <motion.img
                key={STAGES[active].img}
                src={STAGES[active].img}
                alt={STAGES[active].label}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
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
            <StageRow key={stage.label} stage={stage} i={i} active={active} onEnter={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
