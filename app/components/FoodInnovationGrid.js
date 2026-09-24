"use client";

import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

const CARDS = [
  { n: "01", title: "Traditional → Modern", text: "Age-old recipes, reformulated for today's formats and shelf life.", icon: "leaf" },
  { n: "02", title: "Ingredient → Product", text: "Raw Indian ingredients, developed into finished food products.", icon: "flask" },
  { n: "03", title: "Food → Technology", text: "Food science and processing methods applied with precision.", icon: "scope" },
  { n: "04", title: "India → World", text: "Built on Indian roots, developed for global markets.", icon: "globe" },
];

export default function FoodInnovationGrid() {
  return (
    <section className="bg-ivar-forest py-12 md:py-16">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14 max-w-[620px]"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">Food Innovation</p>
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.1] text-white">
            Food innovation, rooted in India.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.09] transition-colors"
            >
              <span className="font-display text-[32px] text-ivar-sage">{c.n}</span>
              <span className="block size-10 rounded-full border border-white/25 text-white flex items-center justify-center my-4">
                <LineIcon name={c.icon} size={18} stroke={1.6} />
              </span>
              <h3 className="font-semibold text-[16px] text-white mb-2">{c.title}</h3>
              <p className="text-[13px] leading-relaxed text-white/60">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
