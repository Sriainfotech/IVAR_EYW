import Link from "next/link";
import LineIcon from "../components/LineIcon";
import RevealOnScroll from "../components/RevealOnScroll";
import DarkCTA from "../components/DarkCTA";
import { products, money } from "../data/products";

export const metadata = {
  title: "Membership — Ivar™",
  description: "Ivar meal plans — pick a starting point, then customise every meal, date and delivery detail.",
  alternates: { canonical: "/membership" },
};

function eatByCat(cats) {
  return products.filter((p) => p.group === "Eat" && cats.includes(p.cat));
}
function avgPrice(list) {
  if (list.length === 0) return 0;
  return Math.round(list.reduce((s, p) => s + p.price, 0) / list.length);
}

const breakfastAvg = avgPrice(eatByCat(["Breakfast & Grains", "Ready Mixes"]));
const lunchAvg = avgPrice(eatByCat(["Café Favourites", "Protein Bowls"]));
const dinnerAvg = avgPrice(eatByCat(["Protein Bowls", "Non-Veg Snacks"]));

const TIERS = [
  {
    name: "Starter",
    badge: null,
    people: "1 person",
    meals: "Lunch + Dinner",
    duration: "Weekly",
    discount: 10,
    dailyPrice: lunchAvg + dinnerAvg,
    features: ["2 meals a day", "5 delivery days a week", "Veg & non-veg choices", "10% off regular price"],
  },
  {
    name: "Family",
    badge: "Most Popular",
    people: "Up to 4 people",
    meals: "Breakfast + Lunch + Dinner",
    duration: "Monthly",
    discount: 15,
    dailyPrice: breakfastAvg + lunchAvg + dinnerAvg,
    features: ["3 meals a day", "Up to 26 delivery days a month", "Custom delivery calendar", "15% off regular price"],
  },
  {
    name: "Complete",
    badge: null,
    people: "Up to 4 people",
    meals: "Breakfast + Lunch + Dinner",
    duration: "Monthly",
    discount: 15,
    dailyPrice: breakfastAvg + lunchAvg + dinnerAvg,
    features: ["Everything in Family", "Priority delivery time slots", "Dedicated WhatsApp support", "Wellness shot add-on available"],
  },
];

const COMPARE_ROWS = [
  { label: "Meals per day", values: ["2", "3", "3"] },
  { label: "People covered", values: ["1", "Up to 4", "Up to 4"] },
  { label: "Delivery frequency", values: ["Weekly", "Monthly", "Monthly"] },
  { label: "Discount", values: ["10%", "15%", "15%"] },
  { label: "Custom delivery calendar", values: [false, true, true] },
  { label: "Priority delivery slots", values: [false, false, true] },
  { label: "Wellness shot add-on", values: [false, false, true] },
];

const INCLUDES = [
  { icon: "check", title: "Pause Anytime", text: "Skip a delivery day whenever you need to — no questions asked." },
  { icon: "bag", title: "WhatsApp Checkout & Support", text: "Confirm your plan and get help directly over WhatsApp." },
  { icon: "box", title: "Flexible Start Date", text: "Start tomorrow or pick any date that works for you." },
  { icon: "leaf", title: "Veg & Non-Veg Choices", text: "Filter every meal by dietary preference, day by day." },
];

function Check({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex size-6 rounded-full bg-ivar-forest/10 text-ivar-forest items-center justify-center">
        <LineIcon name="check" size={13} stroke={2.4} />
      </span>
    );
  }
  if (value === false) return <span className="text-ivar-forest/25">—</span>;
  return <span className="text-[13.5px] text-ivar-ink font-medium">{value}</span>;
}

export default function MembershipPage() {
  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 text-center">
          <RevealOnScroll className="max-w-[680px] mx-auto">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Membership</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Meal Plans <span className="italic text-ivar-green">Built Around You.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[520px] mx-auto">
              Pick a starting point below, then customise every meal, date and delivery detail in the plan builder.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((t) => (
              <RevealOnScroll
                key={t.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  t.badge ? "border-2 border-ivar-forest bg-ivar-cream" : "border border-ivar-forest/12 bg-white"
                }`}
              >
                {t.badge && (
                  <span className="absolute -top-3 left-8 bg-ivar-forest text-white text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                    {t.badge}
                  </span>
                )}
                <h3 className="font-display text-[26px] text-ivar-ink mb-1">{t.name}</h3>
                <p className="text-[13px] text-ivar-muted mb-5">{t.people} · {t.duration}</p>
                <p className="mb-6">
                  <span className="font-display text-[38px] text-ivar-ink">{money(t.dailyPrice)}</span>
                  <span className="text-[13px] text-ivar-muted"> /day (avg, before discount)</span>
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-ivar-ink">
                      <span className="mt-0.5 size-5 rounded-full bg-ivar-forest/10 text-ivar-forest flex items-center justify-center shrink-0">
                        <LineIcon name="check" size={11} stroke={2.4} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/plans"
                  className={`text-center rounded-full py-3.5 font-semibold text-sm transition-colors ${
                    t.badge
                      ? "bg-ivar-forest text-white hover:bg-ivar-forestDeep"
                      : "border border-ivar-forest text-ivar-forest hover:bg-ivar-cream"
                  }`}
                >
                  Build This Plan
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivar-cream py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[4vw]">
          <RevealOnScroll className="max-w-[640px] mb-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Compare</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">Compare Plans.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr className="border-b border-ivar-forest/15">
                  <th className="text-left py-4 pr-4 text-[12px] uppercase tracking-wide text-ivar-muted font-semibold">Feature</th>
                  {TIERS.map((t) => (
                    <th key={t.name} className="text-center py-4 px-4 text-[14px] font-display text-ivar-ink">
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-ivar-forest/10">
                    <td className="py-4 pr-4 text-[13.5px] text-ivar-ink">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="text-center py-4 px-4">
                        <Check value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Every Plan Includes</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              The same care, on every plan.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {INCLUDES.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 0.08}>
                <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center mb-4">
                  <LineIcon name={f.icon} size={18} stroke={1.6} />
                </span>
                <h3 className="font-semibold text-[15px] text-ivar-ink mb-1.5">{f.title}</h3>
                <p className="text-[13px] leading-relaxed text-ivar-muted">{f.text}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        img="/assets/hero-couple-cooking.jpg"
        eyebrow="Ready When You Are"
        title="Build Your Plan in the Next 2 Minutes."
        text="Every plan is fully customisable — meals, dates, people and delivery preferences, all in one builder."
        cta="Start Building"
        ctaHref="/plans"
        align="center"
      />
    </main>
  );
}
