"use client";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";

function ShopContent() {
  const list = products.filter((p) => p.group === "Eat");

  return (
    <>
      <p className="text-[#6b7771] text-sm mb-10">
        Showing {list.length} products
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

export default function ShopPage() {
  return (
    <main>
      <PageHeader
        title="The Ivar Shop"
        subtitle="Thoughtfully made foods, crafted with care."
        img="/assets/hero-grain-bowl.jpg"
      />
      <section className="max-w-[1440px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
        <ShopContent />
      </section>
    </main>
  );
}
