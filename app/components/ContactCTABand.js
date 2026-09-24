"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

const ENTRIES = [
  { label: "Product Enquiry", href: "/contact?type=product" },
  { label: "Ingredient / B2B Enquiry", href: "/contact?type=ingredient" },
  { label: "Innovation / Processing", href: "/contact?type=innovation" },
];

export default function ContactCTABand() {
  return (
    <section className="bg-ivar-forest py-12 md:py-16">
      <div className="max-w-[1500px] mx-auto px-[4vw] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[32px] md:text-[52px] leading-[1.1] text-white max-w-[720px] mx-auto"
        >
          Let&apos;s build the next food product.
        </motion.h2>

        <div className="mt-9 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          {ENTRIES.map((e, i) => (
            <motion.div
              key={e.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <Link
                href={e.href}
                className="inline-flex items-center gap-2.5 border border-white/30 text-white text-[13.5px] font-semibold rounded-full pl-5 pr-4 py-3 hover:bg-white/10 transition-colors"
              >
                {e.label} <LineIcon name="arrow" size={14} stroke={2.2} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
