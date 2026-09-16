"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { groups, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";

const filters = ["All", ...groups];

function ShopContent() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("group");
  const [active, setActive] = useState(
    filters.includes(initial) ? initial : "All"
  );
  const [activeCat, setActiveCat] = useState("All");
  const [catOpen, setCatOpen] = useState(false);
  const catRef = useRef(null);
  const tabRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const activeIndex = filters.indexOf(active);

  useEffect(() => {
    function onClickOutside(e) {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    function updateIndicator() {
      const el = tabRefs.current[activeIndex];
      if (el) {
        setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
      }
    }
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  function selectGroup(f) {
    setActive(f);
    setActiveCat("All");
    setCatOpen(false);
  }

  const groupList =
    active === "All" ? products : products.filter((p) => p.group === active);

  const catFilters = [...new Set(groupList.map((p) => p.cat))];

  const list =
    activeCat === "All"
      ? groupList
      : groupList.filter((p) => p.cat === activeCat);

  const subcats = [...new Set(list.map((p) => p.cat))];

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start gap-5 mb-10">
        <p className="text-[#6b7771] text-sm">
          Showing {list.length} of {products.length} products
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Sliding pill tabs */}
          <div className="relative flex bg-[#eef1e8] rounded-lg p-1">
            <div
              className="absolute top-1 bottom-1 rounded-md bg-ivar-dark transition-[transform,width] duration-300 ease-out"
              style={{
                width: `${indicator.width}px`,
                transform: `translateX(${indicator.left}px)`,
              }}
            />
            {filters.map((f, i) => (
              <button
                key={f}
                ref={(el) => (tabRefs.current[i] = el)}
                className={`relative z-10 px-4 md:px-5 py-2.5 text-xs tracking-wide cursor-pointer transition-colors duration-300 whitespace-nowrap text-center ${
                  active === f ? "text-white" : "text-[#4b564f] hover:text-ivar-dark"
                }`}
                onClick={() => selectGroup(f)}
                suppressHydrationWarning
              >
                {f}
              </button>
            ))}
          </div>

          {/* Sub-category dropdown */}
          {catFilters.length > 1 && (
            <div className="relative" ref={catRef}>
              <button
                onClick={() => setCatOpen((v) => !v)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs tracking-wide border transition-colors duration-200 ${
                  activeCat !== "All"
                    ? "bg-ivar-green text-white border-ivar-green"
                    : "bg-white border-[#d8ded8] hover:border-ivar-dark"
                }`}
                suppressHydrationWarning
              >
                {activeCat === "All" ? "Category" : activeCat}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {catOpen && (
                <div className="absolute right-0 md:left-0 top-full mt-2 w-60 max-h-80 overflow-y-auto bg-white border border-[#e6e4dc] rounded-2xl shadow-[0_18px_40px_#17312622] p-2 z-20">
                  <button
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs transition-colors duration-150 ${
                      activeCat === "All"
                        ? "bg-[#eef1e8] text-ivar-dark font-semibold"
                        : "hover:bg-[#f6f7f3] text-[#4b564f]"
                    }`}
                    onClick={() => {
                      setActiveCat("All");
                      setCatOpen(false);
                    }}
                    suppressHydrationWarning
                  >
                    All categories
                  </button>
                  {catFilters.map((c) => (
                    <button
                      key={c}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs transition-colors duration-150 ${
                        activeCat === c
                          ? "bg-[#eef1e8] text-ivar-dark font-semibold"
                          : "hover:bg-[#f6f7f3] text-[#4b564f]"
                      }`}
                      onClick={() => {
                        setActiveCat(c);
                        setCatOpen(false);
                      }}
                      suppressHydrationWarning
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {subcats.map((subcat) => (
        <div key={subcat} className="mb-14 last:mb-0">
          <h3 className="font-serif text-2xl font-medium mb-5">{subcat}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {list
              .filter((p) => p.cat === subcat)
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default function ShopPage() {
  return (
    <main>
      <PageHeader
        title="The Ivar Shop"
        subtitle="Thoughtfully made foods, yoga essentials and wellness experiences."
        img="/assets/hero-grain-bowl.jpg"
      />
      <section className="max-w-[1440px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
        <Suspense fallback={null}>
          <ShopContent />
        </Suspense>
      </section>
    </main>
  );
}
