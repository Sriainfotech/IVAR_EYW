"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { money } from "../data/products";
import PageHeader from "../components/PageHeader";

const fields = [
  { id: "firstname", placeholder: "First Name" },
  { id: "lastname", placeholder: "Last Name" },
  { id: "address", placeholder: "Address" },
  { id: "city", placeholder: "City" },
  { id: "state", placeholder: "State / Province" },
  { id: "postcode", placeholder: "PIN Code" },
  { id: "phone", placeholder: "Phone", type: "tel" },
  { id: "email", placeholder: "Email", type: "email" },
];

const paymentOptions = [
  { id: "upi", label: "UPI" },
  { id: "card", label: "Credit / Debit Card" },
  { id: "cod", label: "Cash on Delivery" },
];

export default function CheckoutPage() {
  const { lines, subtotal, checkout } = useCart();

  function handleSubmit(e) {
    e.preventDefault();
    checkout();
  }

  return (
    <main>
      <PageHeader
        title="Checkout"
        subtitle="Enter your details to complete a demo order."
        img="/assets/hero-smiling-woman.jpg"
      />
      <section className="max-w-[1200px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12">
          <form
            className="bg-[#f4f6f1] rounded-2xl p-8 md:p-10"
            onSubmit={handleSubmit}
            suppressHydrationWarning
          >
            <h2 className="font-serif text-2xl font-medium mb-6">
              Billing Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {fields.map((f) => (
                <input
                  key={f.id}
                  type={f.type || "text"}
                  placeholder={f.placeholder}
                  required
                  className="border border-[#d6d8d0] px-4 py-3.5 rounded-lg bg-white text-sm"
                  suppressHydrationWarning
                />
              ))}
            </div>

            <h2 className="font-serif text-2xl font-medium mb-4">
              Additional Information
            </h2>
            <textarea
              placeholder="Order note (optional)"
              rows={3}
              className="w-full border border-[#d6d8d0] px-4 py-3.5 rounded-lg bg-white text-sm mb-8"
              suppressHydrationWarning
            />

            <h2 className="font-serif text-2xl font-medium mb-4">
              Payment Method
            </h2>
            <div className="flex flex-col gap-3 mb-8">
              {paymentOptions.map((opt, i) => (
                <label
                  key={opt.id}
                  className="flex items-center gap-3 text-sm cursor-pointer"
                >
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked={i === 0}
                    className="accent-ivar-dark"
                    suppressHydrationWarning
                  />
                  {opt.label}
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green"
              suppressHydrationWarning
            >
              Place Order
            </button>
          </form>

          <aside className="bg-[#f4f6f1] rounded-2xl p-8 h-max">
            <h3 className="font-serif text-xl font-medium mb-5">
              Order Summary
            </h3>
            {lines.length === 0 ? (
              <p className="text-sm text-[#6b7771]">Your cart is empty.</p>
            ) : (
              <div className="flex flex-col gap-4 mb-6">
                {lines.map((l) => (
                  <div key={l.id} className="flex justify-between text-sm">
                    <span className="text-[#4a564f]">
                      {l.product.name} × {l.qty}
                    </span>
                    <span>{money(l.product.price * l.qty)}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-between text-sm mb-3 pt-4 border-t border-[#dbe2d8]">
              <span className="text-[#6b7771]">Subtotal</span>
              <strong>{money(subtotal)}</strong>
            </div>
            <div className="flex justify-between text-base mb-2">
              <strong>Total</strong>
              <strong className="font-serif text-lg text-ivar-dark">
                {money(subtotal)}
              </strong>
            </div>
            <Link
              href="/cart"
              className="block text-center w-full mt-4 text-xs text-[#6b7771] hover:text-ivar-dark"
            >
              ← Back to cart
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
