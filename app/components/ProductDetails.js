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
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] gap-8 md:gap-12 items-start">
      <div className="relative rounded-2xl overflow-hidden bg-ivar-cream w-full max-w-[400px] mx-auto md:mx-0 aspect-square md:sticky md:top-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          className="relative w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-[11px] tracking-[0.16em] text-[#668A73] uppercase font-semibold">
          {product.cat}
        </div>
        <h1 className="font-serif font-semibold text-[28px] md:text-[34px] leading-[1.15] mt-2 mb-3">
          {product.name}
        </h1>
        <p className="font-serif text-[22px] font-semibold text-ivar-dark mb-4">
          {money(product.price)}
        </p>
        <p className="text-[#4b564f] text-[15px] leading-[1.7] max-w-[460px]">
          {product.desc}
        </p>

        <div className="flex items-center gap-3 mt-6 flex-wrap">
          <div className="flex items-center border border-[#d6ddd7] rounded-full overflow-hidden">
            <button
              className="w-10 h-10 flex items-center justify-center text-lg hover:bg-[#f4f6f1] transition-colors"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              suppressHydrationWarning
            >
              −
            </button>
            <span className="w-9 text-center" suppressHydrationWarning>
              {qty}
            </span>
            <button
              className="w-10 h-10 flex items-center justify-center text-lg hover:bg-[#f4f6f1] transition-colors"
              onClick={() => setQty((q) => q + 1)}
              suppressHydrationWarning
            >
              +
            </button>
          </div>
          <button
            className="inline-flex justify-center items-center rounded-full px-7 py-3 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green"
            onClick={handleAdd}
            suppressHydrationWarning
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>
          <button
            className="inline-flex justify-center items-center rounded-full px-7 py-3 font-semibold text-[13px] tracking-wide cursor-pointer border border-ivar-dark text-ivar-dark transition-colors duration-200 hover:bg-ivar-dark hover:text-white"
            onClick={handleBuyNow}
            suppressHydrationWarning
          >
            Buy Now
          </button>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#617169] text-[11px] tracking-wide mt-6">
          <span>✓ Thoughtfully made</span>
          <span>✓ Nature inspired</span>
          <span>✓ Everyday wellness</span>
        </div>
      </div>
    </div>
  );
}
