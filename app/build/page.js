"use client";

import { useMemo, useState } from "react";
import { products, money } from "../data/products";
import { useCart } from "../context/CartContext";
import PageHeader from "../components/PageHeader";

const MEALS = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
];
const PREFERENCES = [
  { id: "veg", label: "Veg" },
  { id: "egg", label: "Egg" },
  { id: "nonveg", label: "Non-Veg" },
];

const TARGETS = { proteinG: 40, kcal: 700, fiberG: 12 };
const BASE_WEIGHT_G = 150;

function eatByCat(cats) {
  return products.filter((p) => p.group === "Eat" && cats.includes(p.cat));
}

function ProductThumb({ product }) {
  return (
    <div className="relative shrink-0 size-[88px] rounded-xl overflow-hidden bg-ivar-cream">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.img} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover blur-lg scale-125 opacity-60" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.img} alt={product.name} loading="lazy" className="relative w-full h-full object-contain" />
    </div>
  );
}

function Step({ n, title, subtitle, children }) {
  return (
    <div className="mb-12">
      <div className="flex items-start gap-3 mb-5">
        <span className="size-7 rounded-full bg-ivar-dark text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
          {n}
        </span>
        <div>
          <h2 className="font-serif text-xl font-medium">{title}</h2>
          {subtitle && <p className="text-xs text-[#6b7771]">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

function QtyPicker({ items, qty, onChange }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      {items.map((p) => (
        <div key={p.id} className="flex items-center gap-3.5 rounded-2xl border border-[#e6e4dc] bg-white p-3">
          <ProductThumb product={p} />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-snug line-clamp-2">{p.name}</p>
            <p className="text-xs text-[#6b7771] mt-0.5">
              {money(p.price)}
              {p.nutrition ? ` · ${p.nutrition.kcal} kcal · ${p.nutrition.proteinG}g protein` : ""}
            </p>
            <div className="mt-2">
              {qty[p.id] > 0 ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onChange(p.id, -1)}
                    aria-label={`Remove one ${p.name}`}
                    className="size-7 rounded-full border border-[#d6ddd7] flex items-center justify-center cursor-pointer hover:border-ivar-dark"
                    suppressHydrationWarning
                  >
                    −
                  </button>
                  <span className="text-sm w-5 text-center">{qty[p.id]}</span>
                  <button
                    onClick={() => onChange(p.id, 1)}
                    aria-label={`Add one ${p.name}`}
                    className="size-7 rounded-full border border-[#d6ddd7] flex items-center justify-center cursor-pointer hover:border-ivar-dark"
                    suppressHydrationWarning
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => onChange(p.id, 1)}
                  className="text-xs font-semibold border border-ivar-dark text-ivar-dark rounded-full px-4 py-1.5 cursor-pointer hover:bg-ivar-dark hover:text-white transition-colors"
                  suppressHydrationWarning
                >
                  + Add
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BuildPage() {
  const [meal, setMeal] = useState("lunch");
  const [preference, setPreference] = useState("veg");
  const [baseId, setBaseId] = useState(null);
  const [qty, setQty] = useState({}); // productId -> qty, used for every non-base step
  const [bundleQty, setBundleQty] = useState(1);
  const { add } = useCart();

  const bases = eatByCat(["Breakfast & Grains", "Ready Mixes"]);
  const proteinPool =
    preference === "nonveg"
      ? eatByCat(["Non-Veg Snacks"])
      : preference === "egg"
        ? [...eatByCat(["Protein & Active Nutrition"]), ...products.filter((p) => p.id === 58)]
        : eatByCat(["Protein & Active Nutrition"]);
  const proteinBowls = eatByCat(["Protein Bowls"]);
  const snacks = eatByCat(["Nuts, Seeds & Snacks"]);
  const energyBites = eatByCat(["Energy Bites & Cookies"]);
  const wellnessShots = eatByCat(["Wellness Shots"]);
  const beverages = eatByCat(["Teas & Beverages"]);
  const premiumAddons = eatByCat(["Cooking Essentials"]);

  function updateQty(id, delta) {
    setQty((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] ?? 0) + delta) }));
  }

  const selectedBase = bases.find((p) => p.id === baseId);
  const allExtraItems = [...proteinPool, ...proteinBowls, ...snacks, ...energyBites, ...wellnessShots, ...beverages, ...premiumAddons];
  const selectedExtras = allExtraItems.filter((p) => qty[p.id] > 0).map((p) => ({ product: p, qty: qty[p.id] }));

  const macros = useMemo(() => {
    const b = selectedBase?.nutrition ?? { kcal: 0, proteinG: 0, carbsG: 0, fatG: 0, fiberG: 0 };
    let kcal = b.kcal;
    let proteinG = b.proteinG;
    let carbsG = b.carbsG ?? 0;
    let fatG = b.fatG ?? 0;
    let fiberG = b.fiberG ?? 0;
    let addonCost = 0;
    for (const { product, qty: q } of selectedExtras) {
      const n = product.nutrition ?? {};
      kcal += (n.kcal ?? 0) * q;
      proteinG += (n.proteinG ?? 0) * q;
      carbsG += (n.carbsG ?? 0) * q;
      fatG += (n.fatG ?? 0) * q;
      fiberG += (n.fiberG ?? 0) * q;
      addonCost += product.price * q;
    }
    const weightG = BASE_WEIGHT_G + selectedExtras.reduce((s, e) => s + e.qty * 25, 0);
    return { kcal, proteinG, carbsG, fatG, fiberG, weightG, addonCost };
  }, [selectedBase, selectedExtras]);

  const basePrice = selectedBase?.price ?? 0;
  const finalPrice = basePrice + macros.addonCost;
  const grandTotal = finalPrice * bundleQty;
  const itemCount = (selectedBase ? 1 : 0) + selectedExtras.reduce((s, e) => s + e.qty, 0);

  function bowlName() {
    const mealLabel = MEALS.find((m) => m.id === meal)?.label;
    return selectedBase ? `Custom ${mealLabel} Box: ${selectedBase.name}` : `Custom ${mealLabel} Box`;
  }

  function handleAddToCart() {
    if (selectedBase) add(selectedBase.id, bundleQty);
    selectedExtras.forEach((e) => add(e.product.id, e.qty * bundleQty));
  }

  return (
    <main>
      <PageHeader
        eyebrow="Box Builder"
        title="Design your perfect box"
        subtitle="Base included. Pick a base, mix proteins, layer add-ons and snacks. Calories, macros and price update live."
      />

      <section className="max-w-[1300px] mx-auto px-[6vw] py-[70px] md:py-[90px] grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
        <div>
          <Step n={1} title="Choose Meal">
            <div className="flex gap-2">
              {MEALS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMeal(m.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border cursor-pointer ${
                    meal === m.id ? "bg-ivar-dark text-white border-ivar-dark" : "border-[#d6ddd7]"
                  }`}
                  suppressHydrationWarning
                >
                  {m.label}
                </button>
              ))}
            </div>
          </Step>

          <Step n={2} title="Choose Preference">
            <div className="flex gap-2">
              {PREFERENCES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPreference(p.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border cursor-pointer ${
                    preference === p.id ? "bg-ivar-dark text-white border-ivar-dark" : "border-[#d6ddd7]"
                  }`}
                  suppressHydrationWarning
                >
                  {p.label}
                </button>
              ))}
            </div>
          </Step>

          <Step n={3} title="Pick your base" subtitle="Included — pick one breakfast or ready-mix base">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {bases.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setBaseId(p.id)}
                  className={`text-left flex items-center gap-3.5 rounded-2xl border p-3 cursor-pointer transition-colors ${
                    baseId === p.id ? "border-ivar-dark bg-[#EEE6D5]" : "border-[#e6e4dc] bg-white hover:border-ivar-dark"
                  }`}
                  suppressHydrationWarning
                >
                  <ProductThumb product={p} />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug line-clamp-2">{p.name}</p>
                    <p className="text-xs text-[#6b7771] mt-1">
                      {money(p.price)}
                      {p.nutrition ? ` · ${p.nutrition.kcal} kcal · ${p.nutrition.proteinG}g protein` : ""}
                    </p>
                    {baseId === p.id && <p className="text-[11px] font-semibold text-ivar-dark mt-1">✓ Selected</p>}
                  </div>
                </button>
              ))}
            </div>
          </Step>

          <Step n={4} title="Pick your protein" subtitle={`Based on your ${preference} preference`}>
            <QtyPicker items={proteinPool} qty={qty} onChange={updateQty} />
          </Step>

          <Step n={5} title="Protein Bowl boost" subtitle="Add a full Ivar Protein Bowl to your box">
            <QtyPicker items={proteinBowls} qty={qty} onChange={updateQty} />
          </Step>

          <Step n={6} title="Nuts, Seeds & Snacks">
            <QtyPicker items={snacks} qty={qty} onChange={updateQty} />
          </Step>

          <Step n={7} title="Energy Bites & Cookies">
            <QtyPicker items={energyBites} qty={qty} onChange={updateQty} />
          </Step>

          <Step n={8} title="Wellness Shots">
            <QtyPicker items={wellnessShots} qty={qty} onChange={updateQty} />
          </Step>

          <Step n={9} title="Teas & Beverages">
            <QtyPicker items={beverages} qty={qty} onChange={updateQty} />
          </Step>

          <Step n={10} title="Premium add-ons" subtitle="Cooking essentials to round out your box">
            <QtyPicker items={premiumAddons} qty={qty} onChange={updateQty} />
          </Step>
        </div>

        <aside className="lg:sticky lg:top-24 h-max">
          <div className="rounded-3xl border border-[#e6e4dc] bg-white p-6 space-y-5">
            <div className="flex items-center justify-between">
              <p className="font-serif text-lg font-medium">{bowlName()}</p>
              <span className="text-[10px] font-bold uppercase tracking-wide bg-[#EEE6D5] text-ivar-dark rounded-full px-2.5 py-1 shrink-0 ml-2">
                Live
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#EEE6D5] rounded-xl py-2">
                <p className="text-sm font-bold">{macros.kcal}</p>
                <p className="text-[10px] text-[#6b7771]">KCAL</p>
              </div>
              <div className="bg-[#EEE6D5] rounded-xl py-2">
                <p className="text-sm font-bold">{macros.proteinG}g</p>
                <p className="text-[10px] text-[#6b7771]">PROTEIN</p>
              </div>
              <div className="bg-[#EEE6D5] rounded-xl py-2">
                <p className="text-sm font-bold">{money(finalPrice)}</p>
                <p className="text-[10px] text-[#6b7771]">TOTAL</p>
              </div>
            </div>
            <p className="text-[10px] text-[#8a938c] text-center -mt-3">*Estimated nutrition, not lab-verified</p>

            <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#6b7771]">
              <div>Carbs {macros.carbsG}g</div>
              <div>Fat {macros.fatG}g</div>
              <div>Fiber {macros.fiberG}g</div>
            </div>
            <p className="text-xs text-[#6b7771] text-center -mt-3">Weight ≈ {macros.weightG}g</p>

            <div className="space-y-3">
              {[
                { label: "Protein", value: macros.proteinG, target: TARGETS.proteinG, unit: "g" },
                { label: "Calories", value: macros.kcal, target: TARGETS.kcal, unit: "kcal" },
                { label: "Fiber", value: macros.fiberG, target: TARGETS.fiberG, unit: "g" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span>{row.label}</span>
                    <span>{row.value}{row.unit} / {row.target}{row.unit}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#EEE6D5] overflow-hidden">
                    <div
                      className="h-full bg-ivar-dark rounded-full transition-all"
                      style={{ width: `${Math.min(100, (row.value / row.target) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-1.5 text-sm border-t border-[#e6e4dc] pt-4">
              <div className="flex justify-between"><span className="text-[#6b7771]">Base Price</span><span>{money(basePrice)}</span></div>
              <div className="flex justify-between"><span className="text-[#6b7771]">Add-on Cost</span><span>{money(macros.addonCost)}</span></div>
              <div className="flex justify-between"><span className="text-[#6b7771]">Subtotal</span><span>{money(finalPrice)}</span></div>
            </div>

            <div className="flex items-center justify-between border-t border-[#e6e4dc] pt-4">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setBundleQty((v) => Math.max(1, v - 1))} className="size-8 rounded-full border border-[#d6ddd7] flex items-center justify-center cursor-pointer" suppressHydrationWarning>−</button>
                <span className="w-5 text-center">{bundleQty}</span>
                <button onClick={() => setBundleQty((v) => v + 1)} className="size-8 rounded-full border border-[#d6ddd7] flex items-center justify-center cursor-pointer" suppressHydrationWarning>+</button>
              </div>
            </div>

            <div className="flex justify-between items-baseline border-t border-[#e6e4dc] pt-4">
              <span className="font-medium">Final Price</span>
              <span className="font-serif text-xl font-medium text-ivar-dark">{money(grandTotal)}</span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={itemCount === 0}
              className="w-full rounded-full px-6 py-3.5 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              suppressHydrationWarning
            >
              Add to Cart
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
