"use client";

import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

const STEPS = [
  { n: "01", title: "Indian Ingredients", text: "Amla, makhana, millets and hundreds more, sourced across India.", icon: "leaf" },
  { n: "02", title: "Research", text: "Understanding traditional uses, nutrition and food science.", icon: "flask" },
  { n: "03", title: "Formulation", text: "Shaping ingredients into recipes and product concepts.", icon: "scope" },
  { n: "04", title: "Processing", text: "Cleaning, roasting, milling and preparing at scale.", icon: "box" },
  { n: "05", title: "Product", text: "Finished foods, ready for everyday life.", icon: "bag" },
  { n: "06", title: "Packaging", text: "Formats designed to protect freshness and quality.", icon: "box" },
  { n: "07", title: "Quality", text: "Testing and validation at every stage.", icon: "shield" },
  { n: "08", title: "Global Markets", text: "Built for India, ready for the world.", icon: "globe" },
];

function Step({ s, i, isLast }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="relative shrink-0 w-[220px] lg:w-auto lg:flex-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-display text-[26px] text-ivar-sage">{s.n}</span>
        <span className="size-9 rounded-full border border-white/25 text-white flex items-center justify-center shrink-0">
          <LineIcon name={s.icon} size={17} stroke={1.6} />
        </span>
      </div>
      <h3 className="font-semibold text-[15px] text-white mb-1.5">{s.title}</h3>
      <p className="text-[12.5px] leading-relaxed text-white/60 max-w-[190px]">{s.text}</p>

      {!isLast && (
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 + 0.2 }}
          className="hidden lg:block absolute top-[19px] left-full w-6 h-px bg-white/25 origin-left"
        />
      )}
    </motion.li>
  );
}

export default function IvarJourney() {
  return (
    <section className="bg-ivar-forest py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 max-w-[620px]"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">The Ivar Journey</p>
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1] text-white">From India to the World.</h2>
        </motion.div>

        <ol className="hidden lg:flex gap-6">
          {STEPS.map((s, i) => (
            <Step key={s.n} s={s} i={i} isLast={i === STEPS.length - 1} />
          ))}
        </ol>

        <ol className="lg:hidden flex flex-col gap-8 relative pl-8">
          <span aria-hidden="true" className="absolute left-[15px] top-2 bottom-2 w-px bg-white/15" />
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <span className="absolute -left-8 top-0 size-8 rounded-full bg-ivar-forest border border-white/25 text-white text-[11px] font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="font-semibold text-[15px] text-white mb-1">{s.title}</h3>
              <p className="text-[12.5px] leading-relaxed text-white/60">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
