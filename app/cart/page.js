"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useProductModal } from "../context/ProductModalContext";
import { money } from "../data/products";
import PageHeader from "../components/PageHeader";

export default function CartPage() {
  const { lines, subtotal, change, remove } = useCart();
  const { openProduct } = useProductModal();

  return (
    <main>
      <PageHeader
        title="Your Cart"
        subtitle="Review your items before checkout."
        img="/assets/hero-veg-fruit-table.jpg"
      />
      <section className="max-w-[1200px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
        {lines.length === 0 ? (
          <div className="text-center py-[70px]">
            <p className="text-[#78827d] mb-6">
              Your cart is empty. Start with an Ivar essential.
            </p>
            <Link
              href="/shop"
              className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green"
            >
              Shop Ivar
            </Link>
          </div>
        ) : (
          <>
            <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr_auto] gap-4 text-[11px] tracking-[0.15em] uppercase text-[#7d8e84] border-b border-[#e6e4dc] pb-4 mb-2">
              <span>Product</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
              <span></span>
            </div>
            {lines.map((l) => (
              <div
                key={l.id}
                className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr_auto] gap-4 items-center border-b border-[#ece9e1] py-6"
              >
                <div className="flex gap-4 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.product.img}
                    alt={l.product.name}
                    className="w-20 h-20 object-contain rounded-xl bg-[#eef1e8]"
                  />
                  <div>
                    <h3 className="font-serif font-medium m-0 mb-1">
                      <button
                        onClick={() => openProduct(l.product)}
                        className="hover:text-ivar-green text-left"
                        suppressHydrationWarning
                      >
                        {l.product.name}
                      </button>
                    </h3>
                    <p className="text-[#75817c] text-xs leading-[1.5]">
                      {l.product.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center border border-[#d6ddd7] rounded-full overflow-hidden w-max">
                  <button
                    className="w-9 h-9 flex items-center justify-center hover:bg-[#f4f6f1] transition-colors"
                    onClick={() => change(l.id, -1)}
                    suppressHydrationWarning
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm">{l.qty}</span>
                  <button
                    className="w-9 h-9 flex items-center justify-center hover:bg-[#f4f6f1] transition-colors"
                    onClick={() => change(l.id, 1)}
                    suppressHydrationWarning
                  >
                    +
                  </button>
                </div>
                <p className="text-sm">{money(l.product.price)}</p>
                <p className="font-semibold text-sm">
                  {money(l.product.price * l.qty)}
                </p>
                <button
                  className="text-[#a9433a] text-xl leading-none w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#f7ece9] transition-colors"
                  onClick={() => remove(l.id)}
                  aria-label={`Remove ${l.product.name}`}
                  suppressHydrationWarning
                >
                  ×
                </button>
              </div>
            ))}

            <div className="flex justify-end mt-10">
              <div className="w-full md:w-[380px] bg-[#f4f6f1] rounded-2xl p-8">
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-[#6b7771]">Subtotal</span>
                  <strong>{money(subtotal)}</strong>
                </div>
                <div className="flex justify-between text-sm mb-6 pb-6 border-b border-[#dbe2d8]">
                  <span className="text-[#6b7771]">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-base mb-6">
                  <strong>Total</strong>
                  <strong className="font-serif text-lg text-ivar-dark">
                    {money(subtotal)}
                  </strong>
                </div>
                <Link
                  href="/checkout"
                  className="block text-center w-full rounded-full px-6 py-4 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green"
                >
                  Proceed to checkout
                </Link>
                <Link
                  href="/shop"
                  className="block text-center w-full mt-3 text-xs text-[#6b7771] hover:text-ivar-dark"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
