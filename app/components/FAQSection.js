"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Browse the shop, add items to your cart and proceed to checkout. This is a demo storefront, so checkout won't process a real payment.",
  },
  {
    q: "How does the cart work?",
    a: "Items you add are saved in your browser, so you can keep shopping and come back to your cart later.",
  },
  {
    q: "Do you offer wholesale or corporate wellness programs?",
    a: "Yes — use the Wholesale, Corporate Wellness or Partnerships links in the footer to get in touch.",
  },
  {
    q: "Is this the final version of the Ivar website?",
    a: "This is an early storefront build. Payment, shipping and order management will be connected before launch.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="max-w-[900px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
      <Reveal as="div" className="text-center mb-12">
        <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-3 uppercase">
          Good to Know
        </p>
        <h2 className="font-serif font-medium text-[32px] md:text-[38px] leading-[1.08] m-0">
          Frequently asked questions
        </h2>
      </Reveal>
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <div className="border border-[#e6e4dc] rounded-2xl overflow-hidden bg-white">
              <button
                className="w-full flex justify-between items-center text-left px-6 py-5 font-serif text-lg font-medium"
                onClick={() => setOpen(open === i ? -1 : i)}
                suppressHydrationWarning
              >
                {f.q}
                <span className="text-ivar-green text-xl shrink-0 ml-4">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="px-6 pb-5 text-[#68766f] text-sm leading-[1.7]">
                  {f.a}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
