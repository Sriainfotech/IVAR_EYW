"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ingredients } from "../data/ingredients";

export default function IngredientLibrary() {
  const rail = useRef(null);

  return (
    <section className="bg-ivar-forest py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[4vw] mb-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4"
        >
          Ingredient Library
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-[32px] md:text-[48px] leading-[1.1] text-white max-w-[640px]"
        >
          India is our ingredient library.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-white/60 text-[15px] max-w-[520px]"
        >
          Discover the ingredients that inspire Ivar&apos;s products.
        </motion.p>
      </div>

      <div ref={rail} className="flex gap-4 overflow-x-auto no-scrollbar px-[4vw] pb-2 cursor-grab active:cursor-grabbing">
        {ingredients.map((ing, i) => (
          <motion.div
            key={ing.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            className="shrink-0 w-[220px] md:w-[260px]"
          >
            <Link
              href={`/ingredients/${ing.slug}`}
              className="group relative block w-full aspect-[3/4] rounded-2xl overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ing.img}
                alt={ing.name}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-semibold text-white text-[17px] mb-1.5">{ing.name}</h3>
                <p className="text-white/0 group-hover:text-white/75 max-h-0 group-hover:max-h-20 overflow-hidden text-[12px] leading-relaxed transition-all duration-300">
                  {ing.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
