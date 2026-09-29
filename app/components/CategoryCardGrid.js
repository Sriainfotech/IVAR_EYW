import Link from "next/link";
import LineIcon from "./LineIcon";
import RevealOnScroll from "./RevealOnScroll";
import { VISIBLE_FOOD_CATEGORIES } from "../data/foodCategories";

export default function CategoryCardGrid({
  categories = VISIBLE_FOOD_CATEGORIES,
  basePath = "/foods",
  eyebrow = "Categories",
  title = "Explore Every Category.",
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">{eyebrow}</p>
          <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">{title}</h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {categories.map((c, i) => (
            <RevealOnScroll key={c.slug} delay={(i % 2) * 0.08}>
              <Link href={`${basePath}/${c.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-ivar-forest font-semibold mb-2">
                  Category {String(i + 1).padStart(2, "0")}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[22px] md:text-[26px] text-ivar-ink mb-1.5">{c.label}</h3>
                    <p className="text-[13.5px] leading-relaxed text-ivar-muted max-w-[380px]">{c.tagline}</p>
                  </div>
                  <span className="shrink-0 size-9 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center transition-all group-hover:bg-ivar-forest group-hover:text-white group-hover:border-ivar-forest">
                    <LineIcon name="arrow" size={15} stroke={2} />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
