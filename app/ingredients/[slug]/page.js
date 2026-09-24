import Link from "next/link";
import { notFound } from "next/navigation";
import { ingredients } from "../../data/ingredients";
import LineIcon from "../../components/LineIcon";
import IngredientDetailClient from "../../components/IngredientDetailClient";

export function generateStaticParams() {
  return ingredients.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const ing = ingredients.find((i) => i.slug === params.slug);
  if (!ing) return { title: "Ingredient — Ivar™" };
  return {
    title: `${ing.name} — Ivar™`,
    description: ing.description,
    alternates: { canonical: `/ingredients/${ing.slug}` },
  };
}

export default function IngredientDetailPage({ params }) {
  const ing = ingredients.find((i) => i.slug === params.slug);
  if (!ing) notFound();

  const benefits = ing.benefits || [];

  return (
    <main>
      <section className="relative bg-ivar-forest overflow-hidden min-h-[420px] md:min-h-[460px] flex items-center">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ing.img} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivar-forest via-ivar-forest/85 to-ivar-forest/30" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[6vw] w-full">
          <nav aria-label="Breadcrumb" className="text-[12px] text-white/60 flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/ingredients" className="hover:text-white">Ingredients</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">{ing.name}</span>
          </nav>
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">Indian Super Ingredient</p>
          <h1 className="font-display text-[44px] md:text-[68px] leading-[1.02] text-white">{ing.name}</h1>
          {ing.tagline && <p className="text-ivar-sage text-lg md:text-xl mt-1 mb-4">{ing.tagline}</p>}
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[520px] mb-7">{ing.description}</p>
          <div className="flex flex-wrap gap-6 max-w-[520px]">
            {benefits.slice(0, 4).map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center gap-2 w-[90px]">
                <span className="size-11 rounded-full border border-white/30 text-white flex items-center justify-center">
                  <LineIcon name={b.icon} size={18} stroke={1.6} />
                </span>
                <span className="text-[11px] leading-tight text-white/75">{b.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IngredientDetailClient ing={ing} />

      <section className="relative bg-ivar-forest overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/hero-grain-bowl.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[6vw] py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="font-display text-[24px] md:text-[30px] text-white">Let&apos;s Create Better Food Together</h2>
          <div className="flex gap-3 shrink-0">
            <Link href="/foods" className="inline-flex items-center gap-2 bg-white text-ivar-forest font-semibold text-sm rounded-full px-6 py-3 hover:bg-ivar-sage transition-colors">
              Explore {ing.name} Products <LineIcon name="arrow" size={15} stroke={2} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
