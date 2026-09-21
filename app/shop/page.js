"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { products } from "../data/products";
import BowlCard from "../components/BowlCard";
import PageHeader from "../components/PageHeader";

const eat = products.filter((p) => p.group === "Eat");
const CATEGORIES = ["All", ...Array.from(new Set(eat.map((p) => p.cat)))];

const hay = (p) => `${p.name} ${p.desc} ${(p.ingredients || []).join(" ")}`.toLowerCase();
const INGREDIENTS = [
  { id: "chicken", label: "Chicken", test: (p) => /chicken/.test(hay(p)) },
  { id: "paneer", label: "Paneer", test: (p) => /paneer/.test(hay(p)) },
  { id: "egg", label: "Egg", test: (p) => /\begg/.test(hay(p)) },
  { id: "millet", label: "Millet", test: (p) => /millet|ragi|jowar/.test(hay(p)) },
];
const GOALS = [
  { id: "high-protein", label: "High Protein", test: (p) => (p.nutrition?.proteinG ?? 0) >= 20 },
  { id: "weight-loss", label: "Weight Loss", test: (p) => p.nutrition?.kcal && p.nutrition.kcal <= 250 },
  { id: "muscle", label: "Muscle Building", test: (p) => (p.nutrition?.proteinG ?? 0) >= 25 },
];

function Tag({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 px-4 py-2 rounded-3xl text-xs font-semibold uppercase tracking-wide transition-colors cursor-pointer ${
        active ? "bg-ivar-dark text-white" : "bg-[#F0F0F0] text-[#4B5563] hover:bg-ivar-mint"
      }`}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}

function ShopContent() {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);

  const all = [...INGREDIENTS, ...GOALS];
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const active = all.filter((t) => tags.includes(t.id));
    return eat.filter(
      (p) =>
        (cat === "All" || p.cat === cat) &&
        (!q || hay(p).includes(q) || p.cat.toLowerCase().includes(q)) &&
        active.every((t) => t.test(p))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat, query, tags]);

  const toggle = (id) => setTags((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]));

  return (
    <>
      <div className="bg-ivar-mint border border-ivar-teal rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">🌱</span>
          <div>
            <p className="font-bold text-base">Want to save more?</p>
            <p className="text-sm text-[#4B5563]">Subscribe and save up to 15% on your daily healthy meals.</p>
          </div>
        </div>
        <Link href="/plans" className="shrink-0 text-center bg-ivar-dark text-white font-semibold text-sm rounded-3xl px-6 py-3 hover:bg-ivar-darker transition-colors">
          View Subscription Plans
        </Link>
      </div>

      <div className="sticky top-[76px] z-20 bg-ivar-cream/95 backdrop-blur -mx-[6vw] px-[6vw] py-3 mb-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 px-5 py-2.5 rounded-3xl text-sm font-semibold uppercase tracking-wide transition-colors cursor-pointer ${
                cat === c ? "bg-ivar-dark text-white" : "text-[#4B5563] hover:text-ivar-dark"
              }`}
              suppressHydrationWarning
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <label className="relative block mb-4">
        <span className="sr-only">Search the menu</span>
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search bowls, ingredients, snacks..."
          className="w-full bg-white border border-[#D0D8DC] rounded-lg pl-11 pr-4 py-3 text-base"
          suppressHydrationWarning
        />
      </label>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {INGREDIENTS.map((t) => (
          <Tag key={t.id} active={tags.includes(t.id)} onClick={() => toggle(t.id)}>
            {t.label}
          </Tag>
        ))}
        {GOALS.map((t) => (
          <Tag key={t.id} active={tags.includes(t.id)} onClick={() => toggle(t.id)}>
            {t.label}
          </Tag>
        ))}
      </div>

      <div className="mt-8 mb-6">
        <h2 className="font-bold text-2xl uppercase text-[#1A1A1A]">{cat === "All" ? "Everything" : cat}</h2>
        <p className="text-sm text-[#4B5563] mt-1">
          {list.length} items · Made fresh ·{" "}
          <Link href="/plans" className="text-ivar-dark underline underline-offset-4">
            Subscribe &amp; Save up to 15% on meal plans.
          </Link>
        </p>
      </div>

      {list.length === 0 ? (
        <p className="text-[#4B5563] py-16 text-center">Nothing matches — try clearing a filter.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <BowlCard key={p.id} product={p} tag={(p.nutrition?.proteinG ?? 0) >= 30 ? "High Protein" : undefined} />
          ))}
        </div>
      )}
    </>
  );
}

export default function ShopPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Ivar"
        title="The Menu"
        subtitle="Breakfast to bowls, snacks to teas — all in one place. Fresh, high protein, made daily."
      />
      <section className="max-w-[1320px] mx-auto px-[6vw] pb-14 md:pb-20">
        <ShopContent />
      </section>
    </main>
  );
}
