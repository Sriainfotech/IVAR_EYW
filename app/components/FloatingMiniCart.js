"use client";

import { useCart } from "../context/CartContext";
import { money } from "../data/products";

export default function FloatingMiniCart() {
  const { count, subtotal, openCart } = useCart();

  if (count === 0) return null;

  return (
    <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <button
        onClick={openCart}
        className="flex items-center gap-4 bg-ivar-dark text-white rounded-full shadow-xl px-5 py-3 cursor-pointer hover:bg-ivar-green transition-colors"
        suppressHydrationWarning
      >
        <span className="text-sm font-semibold">
          🛍 {count} item{count > 1 ? "s" : ""} · {money(subtotal)}
        </span>
        <span className="bg-white/15 rounded-full px-3 py-1.5 text-xs font-semibold">
          View Cart
        </span>
      </button>
    </div>
  );
}
