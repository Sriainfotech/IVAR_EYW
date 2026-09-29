"use client";

import { useRef } from "react";
import Link from "next/link";
import BowlCard from "./BowlCard";
import LineIcon from "./LineIcon";
import RevealOnScroll from "./RevealOnScroll";

export default function FeaturedRail({ eyebrow = "Featured", title, viewAllHref, products }) {
  const rail = useRef(null);
  const scroll = (dir) => rail.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <RevealOnScroll className="flex items-end justify-between mb-8 md:mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">{eyebrow}</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">{title}</h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="hidden sm:inline-flex text-[13px] text-ivar-forest font-semibold items-center gap-2 hover:underline"
              >
                View All <LineIcon name="arrow" size={15} stroke={2} />
              </Link>
            )}
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="size-10 rounded-full border border-ivar-forest/20 text-ivar-forest flex items-center justify-center hover:bg-ivar-cream transition-colors cursor-pointer"
              suppressHydrationWarning
            >
              ‹
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="size-10 rounded-full border border-ivar-forest/20 text-ivar-forest flex items-center justify-center hover:bg-ivar-cream transition-colors cursor-pointer"
              suppressHydrationWarning
            >
              ›
            </button>
          </div>
        </RevealOnScroll>

        <div ref={rail} className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {products.map((p) => (
            <div key={p.id} className="snap-start shrink-0 w-[220px] sm:w-[240px]">
              <BowlCard product={p} showTags={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
