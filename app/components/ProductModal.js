"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useProductModal } from "../context/ProductModalContext";
import { useCart } from "../context/CartContext";
import { money } from "../data/products";

const DETAILS_LABEL = {
  Eat: "Ingredients",
  Yoga: "What's Included",
  Wellness: "What's Included",
};

const COMING_SOON_GROUPS = ["Yoga", "Wellness"];

export default function ProductModal() {
  const { product, closeProduct } = useProductModal();
  const { add, closeCart } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setQty(1);
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  function handleAdd() {
    add(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleBuyNow() {
    add(product.id, qty);
    closeCart();
    closeProduct();
    router.push("/checkout");
  }

  const label = DETAILS_LABEL[product.group] || "Details";
  const comingSoon = COMING_SOON_GROUPS.includes(product.group);

  return (
    <div
      className="fixed inset-0 bg-[#0c221b66] z-[60] flex items-end md:items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeProduct();
      }}
    >
      <div className="bg-[#fffdf8] w-full md:w-[860px] md:max-h-[88vh] max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl relative">
        <button
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white border border-[#e6e4dc] flex items-center justify-center text-xl leading-none text-[#68766f] hover:text-ivar-dark transition-colors"
          onClick={closeProduct}
          aria-label="Close"
          suppressHydrationWarning
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 md:p-8">
          <div className="bg-[#EEE6D5] h-[240px] md:h-[420px] md:rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-6 md:p-0">
            <div className="text-[9px] tracking-[0.2em] text-[#6b8276] uppercase">
              {product.cat}
            </div>
            <h2 className="font-serif font-medium text-[26px] md:text-[34px] leading-[1.1] mt-2 mb-3">
              {product.name}
            </h2>
            <div className="flex items-center gap-3 mb-3">
              {!comingSoon && (
                <p className="font-serif text-xl font-medium text-ivar-dark m-0">
                  {money(product.price)}
                </p>
              )}
              {comingSoon && (
                <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#7d8983] bg-[#f4f6f1] border border-[#d6ddd7] rounded-full px-2.5 py-1">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-[#68766f] leading-[1.7] font-light text-sm">
              {product.desc}
            </p>

            {product.ingredients?.length > 0 && (
              <div className="mt-5">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#6b8276] font-semibold mb-2">
                  {label}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {product.ingredients.map((item) => (
                    <li
                      key={item}
                      className="text-xs bg-[#EEE6D5] text-ivar-text rounded-full px-3 py-1.5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {comingSoon ? (
              <p className="text-xs text-[#8a938c] mt-6 bg-[#f4f6f1] border border-[#e2e7de] rounded-xl px-4 py-3 max-w-max">
                This {product.group.toLowerCase()} offering isn&apos;t
                available to book yet — check back soon.
              </p>
            ) : (
              <div className="flex items-center gap-4 mt-6 flex-wrap">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
