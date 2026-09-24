import Link from "next/link";
import { VISIBLE_FOOD_CATEGORIES } from "../data/foodCategories";

export default function FoodCategoryNav({ activeSlug }) {
  return (
    <div className="relative z-10 -mt-[38px] md:-mt-[46px] px-[6vw]">
      <nav aria-label="Food categories" className="max-w-[1320px] mx-auto bg-white rounded-2xl shadow-[0_12px_36px_rgba(20,50,25,0.14)] p-3 md:p-4">
        <div className="grid grid-flow-col auto-cols-[minmax(88px,1fr)] gap-2 md:gap-3 overflow-x-auto no-scrollbar">
          {VISIBLE_FOOD_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/foods/${c.slug}`}
              className={`flex flex-col items-center gap-2 rounded-xl px-2 py-3 transition-colors ${
                c.slug === activeSlug ? "bg-ivar-forest" : "hover:bg-ivar-cream"
              }`}
            >
              <span className="relative size-12 rounded-full overflow-hidden bg-ivar-cream shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt="" aria-hidden="true" className="w-full h-full object-cover" />
              </span>
              <span className={`text-[12px] font-semibold text-center leading-tight ${c.slug === activeSlug ? "text-white" : "text-ivar-ink"}`}>
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
