"use client";

import { useCart } from "../context/CartContext";
import { useProductModal } from "../context/ProductModalContext";
import { money } from "../data/products";

export default function BowlCard({ product, tag, discountPct = 0 }) {
  const { add } = useCart();
  const { openProduct } = useProductModal();
  const protein = product.nutrition?.proteinG;
  const discounted = discountPct ? Math.round(product.price * (1 - discountPct / 100)) : null;

  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-[0_6px_24px_#0a3d2412] hover:shadow-[0_18px_40px_#0a3d2422] transition-shadow duration-300 flex flex-col">
      <button
        onClick={() => openProduct(product)}
        className="relative block w-full aspect-square bg-ivar-mint overflow-hidden"
        aria-label={`View ${product.name}`}
        suppressHydrationWarning
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-ivar-coral text-white text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )}
        {discountPct > 0 && (
          <span className="absolute top-3 right-3 bg-ivar-dark text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            {discountPct}% OFF
          </span>
        )}
      </button>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-[15px] leading-snug text-ivar-text line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {protein ? (
            <span className="text-[10px] font-semibold bg-ivar-mint text-ivar-dark px-2 py-0.5 rounded-full">
              {protein}g protein
            </span>
          ) : null}
          {product.nutrition?.kcal ? (
            <span className="text-[10px] font-semibold bg-[#fff1ec] text-ivar-coral px-2 py-0.5 rounded-full">
              {product.nutrition.kcal} kcal
            </span>
          ) : null}
        </div>
        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg text-ivar-dark">{money(discounted ?? product.price)}</span>
            {discounted && (
              <span className="text-xs text-[#93a099] line-through">{money(product.price)}</span>
            )}
          </div>
          <button
            onClick={() => add(product.id, 1)}
            className="bg-ivar-dark text-white text-xs font-semibold rounded-full px-4 py-2 hover:bg-ivar-green transition-colors cursor-pointer"
            suppressHydrationWarning
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
