import { products } from "../data/products";
import BowlCard from "../components/BowlCard";
import PageHeader from "../components/PageHeader";

export const metadata = { title: "Breakfast — Ivar" };

export default function BreakfastPage() {
  const list = products.filter(
    (p) => p.group === "Eat" && ["Breakfast & Grains", "Ready Mixes", "Café Favourites"].includes(p.cat)
  );
  return (
    <main>
      <PageHeader
        eyebrow="Start the day right"
        title="Breakfast"
        subtitle="Wholesome mixes, grains and café favourites for a better morning."
        img="/assets/products/eat/multigrain-breakfast-mix.jpg"
      />
      <section className="max-w-[1320px] mx-auto px-[6vw] py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <BowlCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
