"use client";

import { useCart } from "../context/CartContext";
import { useProductModal } from "../context/ProductModalContext";
import { money } from "../data/products";

const COMING_SOON_GROUPS = ["Yoga", "Wellness"];

export default function ProductCard({ product }) {
  const { add } = useCart();
  const { openProduct } = useProductModal();
  const comingSoon = COMING_SOON_GROUPS.includes(product.group);

  return (
    <article className="group bg-white border border-[#e6e4dc] rounded-2xl relative transition-shadow duration-300 hover:shadow-[0_18px_40px_#1A1A1A18] flex flex-row items-stretch gap-3 p-3 md:flex-col md:items-stretch md:gap-0 md:p-0 md:overflow-hidden">
      {/* Content — left on mobile, below image on desktop */}
      <div className="order-1 md:order-2 flex-1 min-w-0 flex flex-col justify-center py-1 md:flex-none md:block md:pt-6 md:px-5 md:pb-5">
        <div className="text-[9px] tracking-[0.2em] text-[#6b8276] uppercase">
          {product.cat}
        </div>
        <h3 className="font-serif text-base md:text-xl font-medium my-1 md:my-2 truncate md:whitespace-normal">
          <button
            onClick={() => openProduct(product)}
            className="hover:text-ivar-green text-left"
            suppressHydrationWarning
          >
            {product.name}
          </button>
        </h3>
        <p className="text-xs text-[#75817c] leading-[1.5] line-clamp-2 md:line-clamp-none md:min-h-[36px]">
          {product.desc}
        </p>
        {!comingSoon && (
          <div className="flex items-center justify-between mt-1">
            <span className="font-serif text-base md:text-lg font-medium text-ivar-dark">
              {money(product.price)}
            </span>
          </div>
        )}
      </div>

      {/* Image + ADD — right on mobile, top on desktop */}
      <div className="order-2 md:order-1 relative shrink-0 w-24 h-24 md:w-full md:h-[260px]">
        <button
          onClick={() => openProduct(product)}
          className="block w-full h-full rounded-xl md:rounded-none bg-[#EEE6D5] overflow-hidden"
          aria-label={`View ${product.name}`}
          suppressHydrationWarning
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        </button>
        {comingSoon ? (
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#f4f6f1] border-2 border-[#d6ddd7] rounded-md md:rounded-lg px-3 py-1 md:px-5 md:py-1.5 text-[8px] md:text-[10px] font-bold tracking-[0.06em] text-[#7d8983] shadow-[0_2px_8px_#1A1A1A22] whitespace-nowrap"
            suppressHydrationWarning
          >
            COMING SOON
          </span>
        ) : (
          <button
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white border-2 border-ivar-dark rounded-md md:rounded-lg px-3 py-1 md:px-6 md:py-1.5 text-[9px] md:text-[11px] font-bold tracking-[0.08em] text-ivar-dark shadow-[0_2px_8px_#1A1A1A22] transition-colors duration-200 hover:bg-ivar-dark hover:text-white whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              add(product.id);
            }}
            aria-label={`Add ${product.name} to cart`}
            title="Add to cart"
            suppressHydrationWarning
          >
            ADD
          </button>
        )}
      </div>
    </article>
  );
}
