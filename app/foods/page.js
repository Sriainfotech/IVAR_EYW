import Link from "next/link";
import LineIcon from "../components/LineIcon";
import FeaturedRail from "../components/FeaturedRail";
import CategoryCardGrid from "../components/CategoryCardGrid";
import StatsBand from "../components/StatsBand";
import DarkCTA from "../components/DarkCTA";
import RevealOnScroll from "../components/RevealOnScroll";
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
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Our Foods</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Wholesome. Natural. <span className="italic text-ivar-green">Better Everyday Eating.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[440px] mb-8">
              More than a snack aisle — Ivar Foods is a curated range of everyday products built from India&apos;s
              ingredients and food traditions.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="#categories"
                className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
              >
                Explore Categories
                <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 border border-ivar-forest/25 text-ivar-forest text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-cream transition-colors"
              >
                View All Products
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 border-t border-ivar-forest/10 pt-6">
              {PILLARS.map((p) => (
                <div key={p.title} className="flex items-center gap-2.5">
                  <span className="size-9 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center shrink-0">
                    <LineIcon name={p.icon} size={16} stroke={1.6} />
                  </span>
                  <span className="text-[12.5px] text-ivar-muted max-w-[90px] leading-tight">{p.title}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hero-veg-fruit-table.jpg" alt="Ivar Foods" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <div id="categories">
        <CategoryCardGrid />
      </div>

      <StatsBand
        bg="bg-white"
        stats={[
          { value: "80+", label: "Products Across the Range" },
          { value: "9", label: "Signature Ingredients" },
          { value: "7", label: "Food Categories" },
          { value: "100%", label: "Natural Ingredients" },
        ]}
      />

      {snacks && (
        <section className="relative overflow-hidden bg-ivar-cream py-14 md:py-20">
          <div className="max-w-[1500px] mx-auto px-[4vw] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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

      <FeaturedRail eyebrow="Featured" title="Snacks You'll Love" viewAllHref="/foods/snacks" products={snackProducts} />

      <DarkCTA
        img="/assets/hero-grain-bowl.jpg"
        eyebrow="Can't Decide?"
        title="Talk to Us About Your Order."
        text="Bulk orders, corporate gifting or a custom box — our team can help you put together the right mix of Ivar foods."
        cta="Get in Touch"
        ctaHref="/contact"
        align="center"
      />
    </main>
  );
}
