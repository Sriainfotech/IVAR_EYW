"use client";

import { useRef } from "react";
import Link from "next/link";
import { products } from "../data/products";
import { useProductModal } from "../context/ProductModalContext";
import LineIcon from "./LineIcon";

const FEATURED = [
  { id: 4, ratio: 162 / 290, points: ["Wholesome nutrition to kickstart your day.", "Gluten free", "Ancient grains"] },
  { id: 50, ratio: 1, points: ["Light & crunchy", "Rich in protein", "Roasted fox nuts, low calorie"] },
  { id: 66, ratio: 1145 / 1374, points: ["A traditional favourite", "No refined sugar", "Peanuts, sesame & jaggery"] },
  { id: 3, ratio: 162 / 290, points: ["Traditional nutrition", "High calcium", "Natural energy"] },
];

const items = FEATURED.map((f) => ({ ...f, product: products.find((p) => p.id === f.id) })).filter((f) => f.product);

export default function FeaturedCarousel() {
  const rail = useRef(null);
  const { openProduct } = useProductModal();
  const scroll = (dir) => rail.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <section className="max-w-[1500px] mx-auto px-[4vw] pb-14 md:pb-20">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="font-serif font-semibold text-[28px] md:text-[32px] text-[#1c2a20] leading-tight">Our Featured Products</h2>
          <p className="text-[14px] text-[#4b564f]">Wholesome. Nutritious. Naturally Delicious.</p>
        </div>
        <Link href="/shop" className="text-[13px] text-ivar-forest font-medium inline-flex items-center gap-2 hover:underline">
          View All Products <LineIcon name="arrow" size={15} stroke={2} />
        </Link>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous products"
          className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full bg-white shadow-md items-center justify-center text-ivar-forest cursor-pointer"
          suppressHydrationWarning
        >
          ‹
        </button>
        <div ref={rail} className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-0.5 py-1">
          {items.map(({ product, points, ratio }) => (
            <article
              key={product.id}
              className="snap-start shrink-0 w-[320px] md:w-[calc((100%-48px)/4)] min-w-[320px] bg-white/70 border border-[#e6e3d6] rounded-lg p-4 flex gap-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
            >
              <button
                onClick={() => openProduct(product)}
                aria-label={`View ${product.name}`}
                style={{ aspectRatio: ratio }}
                className="shrink-0 h-[150px] rounded-md overflow-hidden cursor-pointer"
                suppressHydrationWarning
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.img} alt={product.name} loading="lazy" className="w-full h-full object-cover" />
              </button>
              <div className="min-w-0">
                <h3 className="font-serif font-semibold text-[16px] leading-tight text-[#1c2a20] mb-3">{product.name}</h3>
                <ul className="space-y-2">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-[11.5px] leading-tight text-[#4b564f]">
                      <span className="mt-px shrink-0 size-4 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center">
                        <LineIcon name="check" size={10} stroke={2.4} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <button
          onClick={() => scroll(1)}
          aria-label="Next products"
          className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full bg-white shadow-md items-center justify-center text-ivar-forest cursor-pointer"
          suppressHydrationWarning
        >
          ›
        </button>
      </div>
    </section>
  );
}
