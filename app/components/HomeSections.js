import Link from "next/link";
import { products } from "../data/products";
import BowlCard from "./BowlCard";
import Reveal from "./Reveal";

const eat = products.filter((p) => p.group === "Eat");
const GRID = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

function Label({ children }) {
  return <p className="text-xs tracking-[0.12em] font-semibold text-ivar-dark uppercase mb-2">{children}</p>;
}

function SectionTitle({ eyebrow, title, sub, center = true }) {
  return (
    <div className={`mb-10 max-w-[720px] ${center ? "text-center mx-auto" : ""}`}>
      {eyebrow && <Label>{eyebrow}</Label>}
      <h2 className="font-bold text-[32px] md:text-[48px] text-[#1A1A1A] leading-[1.2]">{title}</h2>
      {sub && <p className="text-[#4B5563] mt-3 text-base md:text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

export function BowlGallery() {
  const bowls = eat.filter((p) => p.cat === "Protein Bowls");
  return (
    <section className="bg-ivar-cream py-[60px] md:py-20">
      <div className="max-w-[1320px] mx-auto px-[6vw]">
        <SectionTitle eyebrow="Signature bowls" title="Bowls built around real protein" />
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {bowls.map((p) => (
            <article key={p.id} className="snap-start shrink-0 w-[260px] md:w-[300px] bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="aspect-square bg-ivar-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg leading-snug mb-1">{p.name}</h3>
                <p className="text-sm text-[#4B5563] line-clamp-2 mb-4">{p.desc}</p>
                <Link href="/build" className="block text-center bg-ivar-dark text-white font-semibold text-sm rounded-3xl py-3 hover:bg-ivar-darker transition-colors">
                  Customize &amp; Order
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyIvar() {
  const svg = (d) => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d}
    </svg>
  );
  const items = [
    { icon: svg(<><path d="M6.5 6.5l11 11" /><path d="M21 21l-1-1" /><path d="M3 3l1 1" /><path d="M18 22l4-4" /><path d="M2 6l4-4" /><path d="M3 10l7-7" /><path d="M14 21l7-7" /></>), title: "High Protein", text: "Bowls built around real protein — up to 38g in a single serving." },
    { icon: svg(<><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" /><path d="M2 21c0-3 1.9-5.4 5.2-6.5" /></>), title: "Fresh Ingredients", text: "Wholesome grains, greens and proteins prepared fresh." },
    { icon: svg(<><circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" /></>), title: "No Preservatives", text: "Simple ingredient lists, nothing artificial added." },
    { icon: svg(<><path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.6L6 12" /><path d="M11 19h6.5a1.8 1.8 0 0 0 1.6-2.6l-1.6-2.9" /><path d="M14 16l-3 3 3 3" /><path d="M8.5 9.5L6 5.2a1.8 1.8 0 0 1 3.1-.4L11 8" /><path d="M13.5 9l4.4-.1L20 12" /></>), title: "Eco Packaging", text: "Packed thoughtfully to keep food fresh and waste low." },
  ];
  return (
    <section className="bg-ivar-sand py-[60px] md:py-20">
      <div className="max-w-[1320px] mx-auto px-[6vw]">
        <SectionTitle
          eyebrow="Why Ivar"
          title="Every bite has a purpose."
          sub="Wholesome, exciting and accessible. We craft protein-rich bowls and everyday nutrition for busy creators, gym-goers and office professionals."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80} className="bg-white rounded-xl p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
              <div className="text-ivar-dark mb-3 flex justify-center">{it.icon}</div>
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-1.5">{it.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{it.text}</p>
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
    [`${eat.length}+`, "Food products"],
    [`${maxProtein}g`, "Top protein per serving"],
    ["15%", "Subscription discount"],
  ];
  return (
    <section className="bg-ivar-cream">
      <div className="max-w-[1320px] mx-auto px-[6vw] py-[60px] grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map(([n, l]) => (
          <div key={l}>
            <p className="font-bold text-5xl text-ivar-dark">{n}</p>
            <p className="text-sm text-[#4B5563] mt-1 uppercase tracking-wide">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeaturedBowls() {
  const bowls = eat.filter((p) => p.cat === "Protein Bowls").slice(0, 3);
  const tags = ["Bestseller", "Trending", "Healthy Choice"];
  return (
    <section className="bg-ivar-cream pb-[60px] md:pb-20">
      <div className="max-w-[1320px] mx-auto px-[6vw]">
        <SectionTitle eyebrow="Featured" title="Our most-loved bowls" sub="Balanced, filling and packed with protein." />
        <div className={GRID}>
          {bowls.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <BowlCard product={p} tag={tags[i]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BreakfastSection() {
  const list = eat.filter((p) => p.cat === "Breakfast & Grains" || p.cat === "Ready Mixes").slice(0, 6);
  return (
    <section className="bg-ivar-sand py-[60px] md:py-20">
      <div className="max-w-[1320px] mx-auto px-[6vw]">
        <SectionTitle eyebrow="Start the day right" title="Breakfast" sub="Wholesome mixes and grains for a better morning." />
        <div className={GRID}>
          {list.map((p) => (
            <BowlCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/breakfast" className="inline-block border-2 border-ivar-dark text-ivar-dark font-semibold rounded-3xl px-8 py-3 hover:bg-white transition-colors">
            See all breakfast
          </Link>
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
    <section className="max-w-[1320px] mx-auto px-[6vw] py-[60px] md:py-20">
      <SectionTitle eyebrow="Subscriptions" title="Eat well on autopilot" sub="Pick a plan and never think about lunch again." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-xl p-8 flex flex-col ${
              t.featured ? "bg-ivar-dark text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:-translate-y-2" : "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
            }`}
          >
            <h3 className="font-semibold text-xl mb-1">{t.name}</h3>
            <p className={`text-4xl font-extrabold my-3 ${t.featured ? "text-ivar-lime" : "text-ivar-dark"}`}>
              {t.off ? `${t.off}% off` : "Pay as you go"}
            </p>
            <p className={`text-sm leading-relaxed mb-6 ${t.featured ? "text-[#D0E8E3]" : "text-[#4B5563]"}`}>{t.text}</p>
            <Link
              href={t.href}
              className={`mt-auto text-center font-semibold text-sm rounded-3xl px-6 py-3 transition-all hover:-translate-y-0.5 ${
                t.featured ? "bg-white text-ivar-dark" : "bg-ivar-dark text-white hover:bg-ivar-darker"
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
    <section className="max-w-[1320px] mx-auto px-[6vw] pb-[60px] md:pb-20">
      <div className="rounded-2xl bg-ivar-dark text-white p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs tracking-[0.12em] font-semibold text-ivar-lime uppercase mb-3">AI Planner</p>
          <h2 className="font-bold text-3xl md:text-[44px] leading-[1.2] mb-4">A meal plan built around your goal</h2>
          <p className="text-[#D0E8E3] leading-relaxed mb-6">
            Tell us your goal, diet and activity level — get calorie and macro targets plus Ivar picks that fit.
          </p>
          <Link href="/planner" className="inline-block bg-white text-ivar-dark font-semibold text-sm rounded-3xl px-8 py-3 hover:-translate-y-0.5 transition-all">
            Try the AI Planner
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {["Weight loss", "Muscle gain", "Healthy eating", "Vegetarian"].map((g) => (
            <div key={g} className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 font-semibold">
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
    <section className="max-w-[1320px] mx-auto px-[6vw] pb-[60px] md:pb-20">
      <div className="rounded-2xl bg-ivar-mint border border-ivar-teal p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-bold text-2xl md:text-[32px] text-ivar-dark mb-2">Feeding a team? Corporate orders made easy.</h2>
          <p className="text-[#4B5563]">Healthy meal packages for offices, events and teams.</p>
        </div>
        <Link href="/corporate-orders" className="shrink-0 bg-ivar-dark text-white font-semibold text-sm rounded-3xl px-8 py-3 hover:bg-ivar-darker transition-colors">
          Get Corporate Pricing
        </Link>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="max-w-[1320px] mx-auto px-[6vw] pb-[60px] md:pb-20">
      <div className="rounded-2xl bg-ivar-dark text-center px-6 py-16 md:py-20">
        <h2 className="font-bold text-[32px] md:text-[52px] leading-[1.2] text-white">
          Eat Clean. Feel Amazing. <span className="text-ivar-teal">Live Better.</span>
        </h2>
        <Link href="/shop" className="inline-block mt-8 bg-white text-ivar-dark font-semibold rounded-3xl px-10 py-3.5 hover:-translate-y-0.5 transition-all">
          Order Now
        </Link>
      </div>
    </section>
  );
}
