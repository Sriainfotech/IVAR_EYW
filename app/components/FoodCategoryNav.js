import Link from "next/link";
import { VISIBLE_FOOD_CATEGORIES } from "../data/foodCategories";

export default function FoodCategoryNav({ activeSlug, categories = VISIBLE_FOOD_CATEGORIES, basePath = "/foods" }) {
  return (
    <nav aria-label="Categories" className="bg-white border-b border-[#ece8da]">
      <div className="max-w-[1500px] mx-auto px-[4vw] py-4">
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
          <Link
            href={basePath}
            className={`shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-colors ${
              !activeSlug ? "bg-ivar-forest text-white" : "bg-[#EEF0EC] text-ivar-ink hover:bg-[#E4E7DF]"
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`${basePath}/${c.slug}`}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-colors whitespace-nowrap ${
                c.slug === activeSlug ? "bg-ivar-forest text-white" : "bg-[#EEF0EC] text-ivar-ink hover:bg-[#E4E7DF]"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
