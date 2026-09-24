"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import LineIcon from "../../components/LineIcon";
import BowlCard from "../../components/BowlCard";
import FoodCategoryNav from "../../components/FoodCategoryNav";
import { FOOD_CATEGORIES, productsForCategory } from "../../data/foodCategories";

const DIETARY = [
  { id: "veg", label: "Vegetarian", test: (p) => !/chicken|fish|prawn|mutton/i.test(`${p.name} ${p.desc}`) },
  { id: "high-protein", label: "High Protein", test: (p) => (p.nutrition?.proteinG ?? 0) >= 15 },
  { id: "no-added-sugar", label: "No Added Sugar", test: (p) => !/sugar/i.test((p.ingredients || []).join(" ")) },
];

function Sidebar({ ingredientOptions, ingredientFilter, setIngredientFilter, dietary, setDietary, price, setPrice, onApply }) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-[84px] lg:self-start lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto">
      <div>
        <h3 className="font-semibold text-[14px] text-ivar-ink mb-3">Filter By</h3>
        <p className="text-[12px] uppercase tracking-wide text-[#8a938c] mb-2">Ingredients</p>
        <div className="space-y-2">
          {ingredientOptions.map((ing) => (
            <label key={ing} className="flex items-center gap-2.5 text-[13.5px] text-[#4b564f] cursor-pointer">
              <input
                type="checkbox"
                checked={ingredientFilter.includes(ing)}
                onChange={() =>
                  setIngredientFilter((f) => (f.includes(ing) ? f.filter((x) => x !== ing) : [...f, ing]))
                }
                className="accent-ivar-forest"
              />
              {ing}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[12px] uppercase tracking-wide text-[#8a938c] mb-2">Dietary Preference</p>
        <div className="space-y-2">
          {DIETARY.map((d) => (
            <label key={d.id} className="flex items-center gap-2.5 text-[13.5px] text-[#4b564f] cursor-pointer">
              <input
                type="checkbox"
                checked={dietary.includes(d.id)}
                onChange={() => setDietary((f) => (f.includes(d.id) ? f.filter((x) => x !== d.id) : [...f, d.id]))}
                className="accent-ivar-forest"
              />
              {d.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[12px] uppercase tracking-wide text-[#8a938c] mb-2">Price Range</p>
        <input
          type="range"
          min={50}
          max={1000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-ivar-forest"
        />
        <p className="text-[12.5px] text-[#4b564f] mt-1">₹50 – ₹{price}</p>
      </div>

      <button
        onClick={onApply}
        className="w-full bg-ivar-forest text-white font-semibold text-sm rounded-full py-3 hover:bg-ivar-forestDeep transition-colors cursor-pointer"
        suppressHydrationWarning
      >
        Apply Filters
      </button>
    </aside>
  );
}

export default function FoodCategoryPage() {
  const params = useParams();
  const cat = FOOD_CATEGORIES.find((c) => c.slug === params.slug);
  const [ingredientFilter, setIngredientFilter] = useState([]);
  const [dietary, setDietary] = useState([]);
  const [price, setPrice] = useState(1000);
  const [sort, setSort] = useState("featured");

  const allProducts = cat ? productsForCategory(cat.slug) : [];
  const ingredientOptions = useMemo(() => {
    const set = new Set();
    allProducts.forEach((p) => (p.ingredients || []).slice(0, 1).forEach((i) => set.add(i.split(" ")[0])));
    return Array.from(set).slice(0, 6);
  }, [allProducts]);

  const list = useMemo(() => {
    let l = allProducts.filter((p) => p.price <= price);
    if (ingredientFilter.length) {
      l = l.filter((p) => ingredientFilter.some((ing) => (p.ingredients || []).join(" ").includes(ing)));
    }
    dietary.forEach((id) => {
      const d = DIETARY.find((x) => x.id === id);
      if (d) l = l.filter(d.test);
    });
    if (sort === "price-low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "price-high") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "name-az") l = [...l].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "newest") l = [...l].sort((a, b) => b.id - a.id);
    return l;
  }, [allProducts, ingredientFilter, dietary, price, sort]);

  if (!cat) notFound();

  return (
    <main>
      <section className="relative bg-ivar-forest overflow-hidden min-h-[420px] md:min-h-[460px] flex items-center">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/products/eat/makhana-crunch.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivar-forest via-ivar-forest/85 to-ivar-forest/35" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[4vw] w-full">
          <nav aria-label="Breadcrumb" className="text-[12px] text-white/60 flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/foods" className="hover:text-white">Foods</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">{cat.label}</span>
          </nav>
          <h1 className="font-display text-[36px] md:text-[56px] leading-[1.05] text-white max-w-[560px]">
            {cat.label}
            <br />
            <span className="text-ivar-sage">The Natural Way</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-3 max-w-[480px]">{cat.text}</p>
        </div>
      </section>

      <FoodCategoryNav activeSlug={cat.slug} />

      <section className="max-w-[1320px] mx-auto px-[4vw] pt-10 md:pt-14 pb-10 md:pb-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        <Sidebar
          ingredientOptions={ingredientOptions}
          ingredientFilter={ingredientFilter}
          setIngredientFilter={setIngredientFilter}
          dietary={dietary}
          setDietary={setDietary}
          price={price}
          setPrice={setPrice}
          onApply={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        />

        <div id="results">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">Our {cat.label}</h2>
              <p className="text-[13.5px] text-[#4b564f]">{list.length} items for everyday moments.</p>
            </div>
            <label className="text-[13px] text-[#4b564f] flex items-center gap-2">
              Sort by
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-[#dcd9cd] rounded-lg px-3 py-2 text-[13px]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="name-az">Name: A–Z</option>
              </select>
            </label>
          </div>

          {list.length === 0 ? (
            <p className="text-[#4b564f] py-16 text-center">
              {allProducts.length === 0
                ? `${cat.label} is coming soon — check back shortly.`
                : "Nothing matches these filters — try clearing one."}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {list.map((p) => (
                <BowlCard key={p.id} product={p} />
              ))}
            </div>
          )}

          <div className="mt-12 rounded-2xl bg-ivar-mint p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-2">Healthy Snacking</p>
              <h3 className="font-display text-[24px] md:text-[28px] text-ivar-ink mb-1.5">Goodness in Every Bite</h3>
              <p className="text-[13.5px] text-[#4b564f]">Traditional ingredients. Modern flavours. A healthier tomorrow.</p>
            </div>
            <Link href="/foods" className="shrink-0 inline-flex items-center gap-2 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-ivar-forestDeep transition-colors">
              Explore All Foods <LineIcon name="arrow" size={16} stroke={2} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              ["shield", "Premium Ingredients", "Sourced from trusted farms"],
              ["scope", "Quality You Can Trust", "Carefully processed"],
              ["heart", "Healthy Choices", "Better nutrition for you"],
              ["leaf", "Sustainable Packaging", "A greener tomorrow"],
            ].map(([icon, title, sub]) => (
              <div key={title} className="flex items-start gap-3">
                <span className="size-10 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center shrink-0">
                  <LineIcon name={icon} size={17} stroke={1.6} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-ivar-ink leading-tight">{title}</p>
                  <p className="text-[11.5px] text-[#4b564f]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ece8da] py-10 md:py-12">
        <div className="max-w-[1320px] mx-auto px-[4vw] flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <h3 className="font-display text-[20px] text-ivar-ink mb-1">Join Our Food Journey</h3>
            <p className="text-[13px] text-[#4b564f]">Get updates on new products, healthy living tips and special offers.</p>
          </div>
          <form className="flex w-full md:w-auto max-w-[420px] h-11">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Enter your email address"
              className="flex-1 min-w-0 border border-[#dcd9cd] bg-white px-4 text-[13px] rounded-l-full rounded-r-none"
              suppressHydrationWarning
            />
            <button
              type="submit"
              className="shrink-0 inline-flex items-center gap-2 bg-ivar-forest text-white font-semibold text-[13px] rounded-r-full px-5 hover:bg-ivar-forestDeep transition-colors cursor-pointer"
              suppressHydrationWarning
            >
              Subscribe <LineIcon name="arrow" size={14} stroke={2.2} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
