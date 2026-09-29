import Link from "next/link";
import LineIcon from "../components/LineIcon";
import RevealOnScroll from "../components/RevealOnScroll";
import StatsBand from "../components/StatsBand";
import ProcessTimeline from "../components/ProcessTimeline";
import DarkCTA from "../components/DarkCTA";
import { ingredients } from "../data/ingredients";

const SOURCING_STEPS = [
  { n: "01", title: "Sourced", text: "Selected from trusted growers across India's traditional regions.", icon: "leaf" },
  { n: "02", title: "Tested", text: "Checked for quality, purity and consistency before use.", icon: "shield" },
  { n: "03", title: "Formulated", text: "Developed into modern formats through food science.", icon: "flask" },
  { n: "04", title: "Delivered", text: "Packed and shipped as finished Ivar products.", icon: "box" },
];

export const metadata = {
  title: "Ingredients — Ivar™",
  description: "India's ingredients. Ivar's possibilities.",
};

export default function IngredientsPage() {
  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Ingredients</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              India&apos;s Ingredients. <span className="italic text-ivar-green">Ivar&apos;s Possibilities.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[440px] mb-8">
              Discover the ingredients that inspire Ivar&apos;s products — and the centuries of food tradition
              behind them.
            </p>
            <Link
              href="#library"
              className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
            >
              Explore the Library
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hero-veg-spices.jpg" alt="Ivar ingredients" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section id="library" className="bg-white pb-16 md:pb-24">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">The Library</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              India is our ingredient library.
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {ingredients.map((ing, i) => (
              <RevealOnScroll key={ing.slug} delay={(i % 3) * 0.08}>
                <Link href={`/ingredients/${ing.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ing.img}
                      alt={ing.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[11px] tracking-[0.18em] uppercase text-ivar-forest font-semibold mb-2">
                    Ingredient {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-[20px] text-ivar-ink mb-1.5">{ing.name}</h3>
                      <p className="text-[13px] leading-relaxed text-ivar-muted max-w-[340px]">{ing.description}</p>
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

      <StatsBand
        stats={[
          { value: "9", label: "Signature Ingredients" },
          { value: "80+", label: "Products Built From Them" },
          { value: "100%", label: "Traceable Sourcing" },
          { value: "0", label: "Artificial Additives" },
        ]}
      />

      <ProcessTimeline
        eyebrow="From Ingredient to Product"
        title="Every ingredient follows the same path."
        steps={SOURCING_STEPS}
        dark={false}
      />

      <DarkCTA
        img="/assets/hero-veg-fruit-table.jpg"
        eyebrow="Ingredient Sourcing"
        title="Have an Ingredient in Mind?"
        text="Whether you're sourcing for your own products or curious about ours, our team is happy to talk ingredients."
        cta="Contact Our Team"
        ctaHref="/contact?type=ingredient"
        align="center"
      />
    </main>
  );
}
