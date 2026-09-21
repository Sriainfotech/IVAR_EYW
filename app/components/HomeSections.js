import Link from "next/link";
import { products } from "../data/products";
import BowlCard from "./BowlCard";
import Reveal from "./Reveal";

const eat = products.filter((p) => p.group === "Eat");

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="text-center mb-10 max-w-[640px] mx-auto">
      {eyebrow && (
        <p className="text-[11px] tracking-[0.24em] font-bold text-ivar-coral uppercase mb-2">{eyebrow}</p>
      )}
      <h2 className="font-extrabold text-3xl md:text-[40px] text-ivar-dark leading-tight">{title}</h2>
      {sub && <p className="text-[#5b6d63] mt-3 text-[15px] leading-relaxed">{sub}</p>}
    </div>
  );
}

export function WhyIvar() {
  const items = [
    { icon: "💪", title: "High Protein", text: "Bowls built around real protein — up to 38g in a single serving." },
    { icon: "🥗", title: "Fresh Ingredients", text: "Wholesome grains, greens and proteins prepared fresh." },
    { icon: "🚫", title: "No Preservatives", text: "Simple ingredient lists, nothing artificial added." },
    { icon: "♻️", title: "Eco Packaging", text: "Packed thoughtfully to keep food fresh and waste low." },
  ];
  return (
    <section className="bg-ivar-mint py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto px-[6vw]">
        <SectionTitle eyebrow="Why Ivar" title="Food that works as hard as you do" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80} className="bg-white rounded-3xl p-6 text-center shadow-[0_6px_24px_#0a3d2410]">
              <div className="text-4xl mb-3">{it.icon}</div>
              <h3 className="font-bold text-ivar-dark mb-1.5">{it.title}</h3>
              <p className="text-[13px] text-[#5b6d63] leading-relaxed">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsStrip() {
  const maxProtein = Math.max(...eat.map((p) => p.nutrition?.proteinG ?? 0));
  const stats = [
    [`${eat.length}+`, "food products"],
    [`${maxProtein}g`, "top protein per serving"],
    ["0", "preservatives"],
    ["100%", "made fresh"],
  ];
  return (
    <section className="bg-ivar-dark text-white">
      <div className="max-w-[1320px] mx-auto px-[6vw] py-9 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(([n, l]) => (
          <div key={l}>
            <p className="font-extrabold text-3xl md:text-4xl text-[#ffb59f]">{n}</p>
            <p className="text-xs tracking-wide text-[#c9ddd0] mt-1 uppercase">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeaturedBowls() {
  const bowls = eat.filter((p) => p.cat === "Protein Bowls").slice(0, 4);
  const tags = ["Bestseller", "Trending", "Healthy Choice", "Chef's Pick"];
  return (
    <section className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20">
      <SectionTitle eyebrow="Featured" title="Our signature bowls" sub="Balanced, filling and packed with protein." />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {bowls.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <BowlCard product={p} tag={tags[i]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function BreakfastSection() {
  const list = eat.filter((p) => p.cat === "Breakfast & Grains" || p.cat === "Ready Mixes").slice(0, 8);
  return (
    <section className="bg-[#fff6ef] py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto px-[6vw]">
        <SectionTitle eyebrow="Start the day right" title="Breakfast" sub="Wholesome mixes and grains for a better morning." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {list.map((p) => (
            <BowlCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Subscriptions() {
  const tiers = [
    { name: "Single Order", off: 0, text: "Order what you like, when you like.", cta: "Order now", href: "/shop" },
    { name: "Weekly Plan", off: 10, text: "Fresh meals every week. Save 10% on every order.", cta: "Subscribe weekly", href: "/plans", featured: true },
    { name: "Monthly Plan", off: 15, text: "Our best value. Save 15% on your monthly plan.", cta: "Subscribe monthly", href: "/plans" },
  ];
  return (
    <section className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20">
      <SectionTitle eyebrow="Subscriptions" title="Eat well on autopilot" sub="Pick a plan and never think about lunch again." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-3xl p-7 flex flex-col ${
              t.featured ? "bg-ivar-dark text-white shadow-[0_20px_50px_#0a3d2430] md:-translate-y-2" : "bg-white border border-[#e0eae2]"
            }`}
          >
            <h3 className="font-bold text-xl mb-1">{t.name}</h3>
            <p className={`text-4xl font-extrabold my-3 ${t.featured ? "text-[#ffb59f]" : "text-ivar-coral"}`}>
              {t.off ? `${t.off}% off` : "Pay as you go"}
            </p>
            <p className={`text-sm leading-relaxed mb-6 ${t.featured ? "text-[#c9ddd0]" : "text-[#5b6d63]"}`}>{t.text}</p>
            <Link
              href={t.href}
              className={`mt-auto text-center font-semibold text-sm rounded-full px-6 py-3 transition ${
                t.featured ? "bg-ivar-coral text-white hover:brightness-105" : "bg-ivar-dark text-white hover:bg-ivar-green"
              }`}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PlannerTeaser() {
  return (
    <section className="max-w-[1320px] mx-auto px-[6vw] pb-14 md:pb-20">
      <div className="rounded-[32px] bg-gradient-to-br from-ivar-dark to-[#12603a] text-white p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-[11px] tracking-[0.24em] font-bold text-[#ffb59f] uppercase mb-3">AI Planner</p>
          <h2 className="font-extrabold text-3xl md:text-[40px] leading-tight mb-4">A meal plan built around your goal</h2>
          <p className="text-[#c9ddd0] leading-relaxed mb-6">
            Tell us your goal, diet and activity level — get calorie and macro targets plus Ivar picks that fit.
          </p>
          <Link href="/planner" className="inline-block bg-ivar-coral text-white font-semibold text-sm rounded-full px-7 py-3.5 hover:brightness-105 transition">
            Try the AI Planner
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {["Weight loss", "Muscle gain", "Healthy eating", "Vegetarian"].map((g) => (
            <div key={g} className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 font-semibold">
              {g}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CorporateTeaser() {
  return (
    <section className="bg-ivar-mint py-14 md:py-16">
      <div className="max-w-[1320px] mx-auto px-[6vw] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-extrabold text-2xl md:text-[32px] text-ivar-dark mb-2">Feeding a team? Corporate orders made easy.</h2>
          <p className="text-[#5b6d63]">Healthy meal packages for offices, events and teams.</p>
        </div>
        <Link href="/corporate-orders" className="shrink-0 bg-ivar-dark text-white font-semibold text-sm rounded-full px-8 py-3.5 hover:bg-ivar-green transition-colors">
          Explore corporate plans
        </Link>
      </div>
    </section>
  );
}
