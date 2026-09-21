"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { money } from "../data/products";

export default function ProductDetails({ product }) {
  const { add, closeCart } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleBuyNow() {
    add(product.id, qty);
    closeCart();
    router.push("/checkout");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="rounded-2xl overflow-hidden bg-[#eef1e8] h-[360px] md:h-[520px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-[9px] tracking-[0.2em] text-[#6b8276] uppercase">
          {product.cat}
        </div>
        <h1 className="font-serif font-medium text-[36px] md:text-[42px] leading-[1.08] mt-2 mb-4">
          {product.name}
        </h1>
        <p className="font-serif text-2xl font-medium text-ivar-dark mb-4">
          {money(product.price)}
        </p>
        <p className="text-[#68766f] leading-[1.8] max-w-[480px] font-light">
          {product.desc}
        </p>

        <div className="flex items-center gap-4 mt-8 flex-wrap">
          <div className="flex items-center border border-[#d6ddd7] rounded-full overflow-hidden">
            <button
              className="w-11 h-11 flex items-center justify-center text-lg hover:bg-[#f4f6f1] transition-colors"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              suppressHydrationWarning
            >
              −
            </button>
            <span className="w-10 text-center" suppressHydrationWarning>
              {qty}
            </span>
            <button
              className="w-11 h-11 flex items-center justify-center text-lg hover:bg-[#f4f6f1] transition-colors"
              onClick={() => setQty((q) => q + 1)}
              suppressHydrationWarning
            >
              +
            </button>
          </div>
          <button
            className="inline-flex justify-center items-center rounded-full px-8 py-3.5 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green"
            onClick={handleAdd}
            suppressHydrationWarning
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>
          <button
            className="inline-flex justify-center items-center rounded-full px-8 py-3.5 font-semibold text-[13px] tracking-wide cursor-pointer border border-ivar-dark text-ivar-dark transition-colors duration-200 hover:bg-ivar-dark hover:text-white"
            onClick={handleBuyNow}
            suppressHydrationWarning
          >
            Buy Now
          </button>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#617169] text-[11px] tracking-wide mt-8">
          <span>✓ Thoughtfully made</span>
          <span>✓ Nature inspired</span>
          <span>✓ Everyday wellness</span>
        </div>
      </div>
    </div>
  );
}
