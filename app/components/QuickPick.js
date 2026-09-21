"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../data/products";
import BowlCard from "./BowlCard";

const bowls = products.filter((p) => p.group === "Eat" && p.cat === "Protein Bowls");
const cafe = products.filter((p) => p.group === "Eat" && p.cat === "Café Favourites");
const picks = [...bowls, ...cafe].slice(0, 6);
const TAGS = ["Bestseller", "Trending", "Healthy Choice"];

export default function QuickPick() {
  const [tab, setTab] = useState("quick");

  return (
    <section className="max-w-[1320px] mx-auto px-[6vw] py-[60px] md:py-20">
      <div className="text-center mb-8">
        <p className="text-[11px] tracking-[0.24em] font-bold text-ivar-dark uppercase mb-2">Order in seconds</p>
        <h2 className="font-extrabold text-3xl md:text-[40px] text-ivar-dark">Quick Pick</h2>
        <div className="inline-flex mt-6 bg-ivar-mint rounded-3xl p-1">
          {[
            ["quick", "Quick Pick"],
            ["sub", "Subscription"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-6 py-2 rounded-3xl text-sm font-semibold transition-colors cursor-pointer ${
                tab === id ? "bg-ivar-dark text-white" : "text-ivar-dark"
              }`}
              suppressHydrationWarning
            >
              {label}
            </button>
          ))}
        </div>
        {tab === "sub" && (
          <p className="text-sm text-[#5b6d63] mt-4">Subscribe weekly and save 10% on every bowl.</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {picks.map((p, i) => (
          <BowlCard
            key={p.id}
            product={p}
            tag={i < 3 ? TAGS[i] : undefined}
            discountPct={tab === "sub" ? 10 : 0}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/shop"
          className="inline-block bg-ivar-dark text-white font-semibold text-sm rounded-3xl px-8 py-3.5 hover:bg-ivar-green transition-colors"
        >
          View full menu
        </Link>
      </div>
    </section>
  );
}
