import PageHeader from "../components/PageHeader";
import { ingredients } from "../data/ingredients";

export const metadata = {
  title: "Ingredients — Ivar™",
  description: "India's ingredients. Ivar's possibilities.",
};

export default function IngredientsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Ingredients"
        title="India's ingredients. Ivar's possibilities."
        subtitle="Discover the ingredients that inspire Ivar's products — and the traditions behind them."
      />
      <section className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ing) => (
            <article key={ing.slug} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-ivar-cream">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ing.img}
                alt={ing.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivar-ink/85 via-ivar-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-[22px] text-white mb-1.5">{ing.name}</h3>
                <p className="text-[13px] leading-relaxed text-white/75">{ing.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
