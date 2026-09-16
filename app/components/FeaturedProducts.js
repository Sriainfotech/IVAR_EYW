import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

const featuredIds = [2, 28, 36, 20];
const featured = featuredIds
  .map((id) => products.find((p) => p.id === id))
  .filter(Boolean);

export default function FeaturedProducts() {
  return (
    <section className="max-w-[1440px] mx-auto px-[6vw] py-[70px] md:py-[100px]" id="shop">
      <Reveal
        as="div"
        className="flex flex-col md:flex-row md:justify-between md:items-end items-start gap-6 mb-12"
      >
        <div>
          <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-3 uppercase">
            The Ivar Shop
          </p>
          <h2 className="font-serif font-medium text-[36px] md:text-[44px] leading-[1.05] m-0">
            Start with the essentials
          </h2>
        </div>
        <Link
          href="/shop"
          className="text-ivar-green font-semibold text-xs tracking-wide transition-colors duration-200 hover:text-ivar-dark"
        >
          View all products →
        </Link>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
