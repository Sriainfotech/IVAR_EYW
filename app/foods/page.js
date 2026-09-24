import Link from "next/link";
import LineIcon from "../components/LineIcon";
import BowlCard from "../components/BowlCard";
import FoodCategoryNav from "../components/FoodCategoryNav";
import { FOOD_CATEGORIES, productsForCategory } from "../data/foodCategories";

export const metadata = {
  title: "Foods — Ivar™",
  description: "Wholesome foods for a better you. Traditional goodness, modern nutrition.",
  alternates: { canonical: "/foods" },
};

const PILLARS = [
  { title: "Natural Ingredients", icon: "leaf" },
  { title: "Tasty & Nutritious", icon: "heart" },
  { title: "Convenient Modern Formats", icon: "box" },
];

export default function FoodsPage() {
  const snacks = FOOD_CATEGORIES.find((c) => c.slug === "snacks");
  const snackProducts = productsForCategory("snacks").slice(0, 6);

  return (
    <main>
      <section className="relative bg-ivar-forest overflow-hidden min-h-[420px] md:min-h-[460px] flex items-center">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/products/eat/makhana-crunch.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivar-forest via-ivar-forest/85 to-ivar-forest/40" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[6vw] w-full">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">Our Foods</p>
          <h1 className="font-display text-[34px] md:text-[50px] leading-[1.08] text-white mb-4">
            Wholesome Foods <span className="text-ivar-sage">for a Better You.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[460px] mb-7">
            Traditional goodness. Modern nutrition. Made for today&apos;s lifestyle.
          </p>
          <div className="flex flex-wrap gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="flex items-center gap-2.5">
                <span className="size-9 rounded-full border border-white/30 text-white flex items-center justify-center shrink-0">
                  <LineIcon name={p.icon} size={16} stroke={1.6} />
                </span>
                <span className="text-[12.5px] text-white/75 max-w-[90px] leading-tight">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FoodCategoryNav activeSlug="snacks" />

      {snacks && (
        <section className="relative overflow-hidden pt-14 md:pt-20">
          <div className="max-w-[1320px] mx-auto px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">{snacks.label}</p>
              <h2 className="font-display text-[28px] md:text-[38px] leading-tight text-ivar-ink mb-4">{snacks.tagline}</h2>
              <p className="text-[14.5px] leading-relaxed text-[#4b564f] mb-6 max-w-[460px]">{snacks.text}</p>
              <Link href="/foods/snacks" className="inline-flex items-center gap-2 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-ivar-forestDeep transition-colors">
                Explore Snacks <LineIcon name="arrow" size={16} stroke={2} />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={snacks.img} alt={snacks.label} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      )}

      <section className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {snackProducts.map((p) => (
            <BowlCard key={p.id} product={p} showTags={false} />
          ))}
        </div>
      </section>
    </main>
  );
}
