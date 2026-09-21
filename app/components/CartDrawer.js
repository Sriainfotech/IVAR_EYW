"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useProductModal } from "../context/ProductModalContext";
import { money } from "../data/products";
import { buildWhatsAppLink } from "../lib/whatsapp";

export default function CartDrawer() {
  const { lines, subtotal, isOpen, change, remove, closeCart } = useCart();
  const { openProduct } = useProductModal();

  return (
    <div
      className={`fixed inset-0 bg-[#0c221b66] z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCart();
      }}
    >
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-[#fffdf8] flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-[#e5e1d8] px-6 py-5">
          <h3 className="font-serif text-2xl font-medium m-0">Your Cart</h3>
          <button
            className="border-0 bg-none text-3xl leading-none cursor-pointer text-[#68766f] hover:text-ivar-dark transition-colors"
            onClick={closeCart}
            aria-label="Close cart"
            suppressHydrationWarning
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6">
          {lines.length === 0 ? (
            <div className="py-[60px] text-center text-[#78827d]">
              Your cart is empty.
              <br />
              Start with an Ivar essential.
            </div>
          ) : (
            lines.map((l) => (
              <div
                key={l.id}
                className="grid grid-cols-[64px_1fr_auto] gap-3 py-5 border-b border-[#ece9e1] items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={l.product.img}
                  alt=""
                  className="w-16 h-16 object-cover rounded-xl bg-[#EEE6D5]"
                />
                <div>
                  <h4 className="font-serif font-medium m-0 mb-1 text-sm">
                    <button
                      onClick={() => {
                        closeCart();
                        openProduct(l.product);
                      }}
                      className="hover:text-ivar-green text-left"
                      suppressHydrationWarning
                    >
                      {l.product.name}
                    </button>
                  </h4>
                  <small className="text-[#738078]">
                    {money(l.product.price)}
                  </small>
                  <div className="flex gap-[7px] items-center mt-2">
                    <button
                      className="border border-[#d6ddd7] bg-white rounded-full w-7 h-7 transition-colors duration-200 hover:border-ivar-dark"
                      onClick={() => change(l.id, -1)}
                      suppressHydrationWarning
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm">{l.qty}</span>
                    <button
                      className="border border-[#d6ddd7] bg-white rounded-full w-7 h-7 transition-colors duration-200 hover:border-ivar-dark"
                      onClick={() => change(l.id, 1)}
                      suppressHydrationWarning
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between h-full gap-2">
                  <strong className="text-sm">
                    {money(l.product.price * l.qty)}
                  </strong>
                  <button
                    className="text-[#a9433a] text-lg leading-none w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f7ece9] transition-colors"
                    onClick={() => remove(l.id)}
                    aria-label={`Remove ${l.product.name}`}
                    suppressHydrationWarning
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-[#e5e1d8] px-6 py-5">
            <div className="flex justify-between mb-4">
              <span className="text-[#6b7771]">Subtotal</span>
              <strong>{money(subtotal)}</strong>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block text-center w-full rounded-full px-6 py-3.5 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green"
            >
              Checkout
            </Link>
            <a
              href={buildWhatsAppLink(
                `Hi Ivar 🌿 I'd like to order:\n\n${lines
                  .map((l) => `• ${l.product.name} x${l.qty} — ${money(l.product.price * l.qty)}`)
                  .join("\n")}\n\nSubtotal: ${money(subtotal)}`
              )}
              target="_blank"
              rel="noreferrer"
              className="block text-center w-full mt-2.5 rounded-full px-6 py-3.5 font-semibold text-[13px] tracking-wide border border-[#25D366] text-[#128C4A] transition-colors duration-200 hover:bg-[#25D366]/10"
            >
              💬 Checkout via WhatsApp
            </a>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block text-center w-full mt-2.5 rounded-full px-6 py-3.5 font-semibold text-[13px] tracking-wide border border-[#d6ddd7] transition-colors duration-200 hover:border-ivar-dark"
            >
              View Cart
            </Link>
            <small className="block text-center text-[#7b857f] text-[10px] leading-[1.5] mt-3">
              Demo storefront — connect your payment gateway and shipping
              rules before launch.
            </small>
          </div>
        )}
      </aside>
    </div>
  );
}
