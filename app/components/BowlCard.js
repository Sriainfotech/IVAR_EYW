"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { useProductModal } from "../context/ProductModalContext";
import { money } from "../data/products";

function dietTag(p) {
  const hay = `${p.name} ${p.cat} ${(p.ingredients || []).join(" ")}`;
  if (/chicken|steak|prawn|salmon|fish|mutton/i.test(hay) || p.cat === "Non-Veg Snacks") return "Non-Veg";
  if (/egg/i.test(hay)) return "Egg";
  return "Veg";
}

export default function BowlCard({ product, tag, discountPct = 0, showTags = true }) {
  const { add, closeCart } = useCart();
  const { openProduct } = useProductModal();
  const router = useRouter();
  const n = product.nutrition || {};
  const discounted = discountPct ? Math.round(product.price * (1 - discountPct / 100)) : null;
  const tags = [dietTag(product), n.proteinG >= 20 ? "High Protein" : null, n.kcal && n.kcal <= 250 ? "Light" : null].filter(Boolean);

  function orderNow() {
    add(product.id, 1);
    closeCart();
    router.push("/checkout");
  }

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <button
        onClick={() => openProduct(product)}
        className="relative block w-full aspect-square bg-ivar-cream overflow-hidden"
        aria-label={`View ${product.name}`}
        suppressHydrationWarning
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-ivar-yellow text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded">
            {tag}
          </span>
        )}
        {discountPct > 0 && (
          <span className="absolute top-3 right-3 bg-ivar-success text-white text-[11px] font-bold px-2 py-1 rounded">
            {discountPct}% OFF
          </span>
        )}
        <span className="absolute bottom-3 right-3 bg-ivar-dark text-white text-xs font-bold px-3 py-2 rounded flex items-baseline gap-1.5">
          {discounted && <span className="line-through opacity-70 font-normal">{money(product.price)}</span>}
          {money(discounted ?? product.price)}
        </span>
      </button>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[18px] leading-snug text-ivar-text line-clamp-2 min-h-[48px]">{product.name}</h3>
        <p className="text-sm font-semibold text-[#4B5563] mt-1">
          {[n.proteinG ? `${n.proteinG}g protein` : null, n.kcal ? `${n.kcal} kcal` : null].filter(Boolean).join(" · ")}
        </p>
        {showTags && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((t) => (
              <span key={t} className="text-xs font-semibold bg-ivar-mint text-ivar-dark px-3 py-1 rounded-2xl">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-2 mt-auto pt-4">
          <button
            onClick={() => add(product.id, 1)}
            className="flex-1 border-2 border-ivar-dark text-ivar-dark text-sm font-bold rounded-3xl py-2.5 hover:bg-ivar-cream transition-colors cursor-pointer"
            suppressHydrationWarning
          >
            Add to Cart
          </button>
          <button
            onClick={orderNow}
            className="flex-1 bg-ivar-dark text-white text-sm font-bold rounded-3xl py-2.5 hover:bg-ivar-darker hover:-translate-y-0.5 transition-all cursor-pointer"
            suppressHydrationWarning
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
}
