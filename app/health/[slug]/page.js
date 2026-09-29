"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import LineIcon from "../../components/LineIcon";
import BowlCard from "../../components/BowlCard";
import FoodCategoryNav from "../../components/FoodCategoryNav";
import { HEALTH_CATEGORIES, productsForHealthCategory } from "../../data/healthCategories";

export default function HealthCategoryPage() {
  const params = useParams();
  const cat = HEALTH_CATEGORIES.find((c) => c.slug === params.slug);
  const [sort, setSort] = useState("featured");

  const allProducts = cat ? productsForHealthCategory(cat.slug) : [];

  const list = useMemo(() => {
    let l = [...allProducts];
    if (sort === "price-low") l.sort((a, b) => a.price - b.price);
    if (sort === "price-high") l.sort((a, b) => b.price - a.price);
    if (sort === "name-az") l.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "newest") l.sort((a, b) => b.id - a.id);
    return l;
  }, [allProducts, sort]);

  if (!cat) notFound();

  return (
    <main>
      <section className="bg-ivar-forest py-14 md:py-16">
        <div className="max-w-[1320px] mx-auto px-[4vw] w-full">
          <nav aria-label="Breadcrumb" className="text-[12px] text-white/60 flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/health" className="hover:text-white">Ivar Health</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">{cat.label}</span>
          </nav>
          <h1 className="font-display text-[32px] md:text-[46px] leading-[1.08] text-white max-w-[560px]">
            Shop <span className="italic text-ivar-sage">{cat.label}</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-3 max-w-[480px]">{cat.text}</p>
        </div>
      </section>

      <FoodCategoryNav activeSlug={cat.slug} categories={HEALTH_CATEGORIES} basePath="/health" />

      <section className="bg-[#FAFAF8]">
        <div className="max-w-[1320px] mx-auto px-[4vw] pt-10 md:pt-14 pb-16 md:pb-20">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4 border-b border-ivar-forest/10 pb-6">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-3">Ivar Health</p>
              <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">Our {cat.label}</h2>
              <p className="text-[13.5px] text-ivar-muted mt-2">{list.length} items for everyday wellness.</p>
            </div>
            <label className="text-[13px] text-ivar-muted flex items-center gap-2 shrink-0">
              Sort by
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border-0 border-b border-ivar-forest/25 bg-transparent px-0 py-1.5 text-[13px] text-ivar-ink focus:outline-none focus:border-ivar-forest"
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
            <p className="text-ivar-muted py-16 text-center">{cat.label} is coming soon — check back shortly.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {list.map((p) => (
                <BowlCard key={p.id} product={p} />
              ))}
            </div>
          )}

          <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 border-t border-ivar-forest/10 pt-10">
            <div className="text-center lg:text-left">
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-2">Ivar Health</p>
              <h3 className="font-display text-[24px] md:text-[28px] text-ivar-ink mb-1.5">Everyday Wellness, Simplified</h3>
              <p className="text-[13.5px] text-ivar-muted">Traditional practice. Modern convenience.</p>
            </div>
            <Link href="/health" className="group shrink-0 inline-flex items-center gap-3 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3.5 hover:bg-ivar-forestDeep transition-colors">
              Explore All of Ivar Health <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
