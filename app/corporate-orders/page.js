"use client";

import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import { buildWhatsAppLink } from "../lib/whatsapp";
import { products, money } from "../data/products";
import {
  CORPORATE_PLANS,
  CORPORATE_DURATIONS,
  CORPORATE_SUBSCRIPTION_TIERS,
  CORPORATE_MIN_PEOPLE,
  CORPORATE_MAX_PEOPLE,
  CORPORATE_DELIVERY_RATE_PER_KM,
  findPlan,
  findDuration,
} from "../data/corporatePlans";

const TEAM_SIZES = [10, 20, 30, 40, 50];
const FULL_DAY_PLAN = findPlan("full-day");

const BENEFITS = [
  "Healthy Employees", "Improved Productivity", "Fresh Daily Meals", "Flexible Menu Customization",
  "Veg & Non-Veg Choices", "Scheduled Deliveries", "Corporate Support", "GST Invoice Available",
];

const eatByCat = (cats) => products.filter((p) => p.group === "Eat" && cats.includes(p.cat));

const initialForm = {
  companyName: "",
  contactPerson: "",
  phone: "",
  email: "",
  officeLocation: "",
  numberOfEmployees: "",
  plan: "full-day",
  dietPreference: "",
  duration: "weekly",
  expectedStartDate: "",
  additionalRequirements: "",
};

export default function CorporateOrdersPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  // Live calculator
  const [calcPeople, setCalcPeople] = useState(10);
  const [calcPlan, setCalcPlan] = useState("full-day");
  const [calcDuration, setCalcDuration] = useState("weekly");

  // Menu options toggle
  const [menuDiet, setMenuDiet] = useState("veg");

  const calcResult = useMemo(() => {
    const plan = findPlan(calcPlan);
    const duration = findDuration(calcDuration);
    const perPerson = plan.pricePerPersonPerDay * duration.days;
    return { perPerson, total: perPerson * calcPeople, days: duration.days };
  }, [calcPeople, calcPlan, calcDuration]);

  const breakfastExamples = eatByCat(["Breakfast & Grains", "Café Favourites"]).slice(0, 4);
  const lunchExamplesVeg = products.filter((p) => p.group === "Eat" && (p.cat === "Protein Bowls" || p.cat === "Café Favourites") && !/chicken|steak|prawn|salmon|fish/i.test(p.name)).slice(0, 4);
  const lunchExamplesNonVeg = eatByCat(["Non-Veg Snacks"]).slice(0, 4);

  const proteinAddons = [...eatByCat(["Non-Veg Snacks"]).slice(0, 2), ...eatByCat(["Protein & Active Nutrition"]).slice(0, 2)];
  const healthyAddons = [...eatByCat(["Nuts, Seeds & Snacks"]).slice(0, 3), ...eatByCat(["Energy Bites & Cookies"]).slice(0, 2)];
  const beverageAddons = [...eatByCat(["Teas & Beverages"]), ...eatByCat(["Wellness Shots"]).slice(0, 2)];

  const waMessage = `Hi Ivar 🌿 I'd like a corporate proposal.\n\nCompany: ${form.companyName}\nContact: ${form.contactPerson} (${form.phone})\nLocation: ${form.officeLocation}\nEmployees: ${form.numberOfEmployees}\nPlan: ${findPlan(form.plan)?.label} · ${form.dietPreference} · ${findDuration(form.duration)?.label}\n${form.additionalRequirements ? `Notes: ${form.additionalRequirements}` : ""}`;
  const waLink = buildWhatsAppLink(waMessage);
  const heroWaLink = buildWhatsAppLink("Hi Ivar 🌿 I'd like corporate pricing for my team.");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    window.open(waLink, "_blank");
  }

  return (
    <main>
      <PageHeader
        title="Healthy Corporate Meal Solutions"
        subtitle="Fresh, nutritious meals delivered daily for teams, offices, startups, events, and employee wellness programs."
        img="/assets/hero-office-salad.jpg"
      />

      <section className="max-w-[1200px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-wide text-ivar-green uppercase mb-3">Serving 10–50 People Daily</p>
          <a href={heroWaLink} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white hover:bg-ivar-green transition-colors">
            Get Corporate Pricing
          </a>
        </div>

        {/* Meal plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CORPORATE_PLANS.map((plan) => (
            <div key={plan.id} className={`rounded-2xl border p-5 flex flex-col ${plan.bestValue ? "border-ivar-dark bg-[#eef1e8]" : "border-[#e6e4dc]"}`}>
              {plan.bestValue && <span className="text-[10px] font-bold uppercase tracking-wide bg-ivar-dark text-white rounded-full px-2.5 py-1 w-max mb-2">Best Value</span>}
              <h3 className="font-serif text-lg font-medium mb-1">Corporate {plan.label} Plan</h3>
              <p className="text-xl font-bold text-ivar-dark mb-1">{money(plan.pricePerPersonPerDay)} <span className="text-xs font-normal text-[#6b7771]">/person/day</span></p>
              <p className="text-[11px] text-[#8a938c] mb-3">{plan.timing}</p>
              <ul className="text-xs text-[#6b7771] space-y-1 mb-4 flex-1">
                {plan.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <p className="text-[11px] text-[#8a938c] mb-3">Minimum {CORPORATE_MIN_PEOPLE} People</p>
              <a href={buildWhatsAppLink(`Hi Ivar 🌿 I'd like to enquire about the Corporate ${plan.label} Plan.`)} target="_blank" rel="noreferrer" className="text-center rounded-full px-4 py-2.5 text-xs font-semibold border border-ivar-dark text-ivar-dark hover:bg-ivar-dark hover:text-white transition-colors">
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        {/* Live calculator */}
        <div className="rounded-3xl border border-[#e6e4dc] bg-white p-6 sm:p-8 mb-16">
          <h2 className="font-serif text-xl font-medium mb-1">Bulk Order Cost Calculator</h2>
          <p className="text-xs text-[#6b7771] mb-6">Estimate your team's total instantly. Final invoice may include delivery charges (₹{CORPORATE_DELIVERY_RATE_PER_KM}/km).</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <label className="text-xs font-medium text-[#4b564f]">
              Number of People* <span className="text-[#8a938c] font-normal">(Min {CORPORATE_MIN_PEOPLE} · Max {CORPORATE_MAX_PEOPLE})</span>
              <input
                type="number"
                min={CORPORATE_MIN_PEOPLE}
                max={CORPORATE_MAX_PEOPLE}
                value={calcPeople}
                onChange={(e) => setCalcPeople(Math.min(CORPORATE_MAX_PEOPLE, Math.max(CORPORATE_MIN_PEOPLE, Number(e.target.value))))}
                className="mt-1.5 w-full h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark"
              />
            </label>
            <label className="text-xs font-medium text-[#4b564f]">
              Plan Type*
              <select value={calcPlan} onChange={(e) => setCalcPlan(e.target.value)} className="mt-1.5 w-full h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" suppressHydrationWarning>
                {CORPORATE_PLANS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
              </select>
            </label>
            <label className="text-xs font-medium text-[#4b564f]">
              Duration*
              <select value={calcDuration} onChange={(e) => setCalcDuration(e.target.value)} className="mt-1.5 w-full h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" suppressHydrationWarning>
                {CORPORATE_DURATIONS.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}
              </select>
            </label>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="bg-[#eef1e8] rounded-xl py-3">
              <p className="text-sm font-bold">{money(calcResult.perPerson)}</p>
              <p className="text-[10px] text-[#6b7771]">Per Person</p>
            </div>
            <div className="bg-[#eef1e8] rounded-xl py-3">
              <p className="text-sm font-bold">{calcPeople} × {calcResult.days}</p>
              <p className="text-[10px] text-[#6b7771]">People × Days</p>
            </div>
            <div className="bg-ivar-dark text-white rounded-xl py-3">
              <p className="text-sm font-bold">{money(calcResult.total)}</p>
              <p className="text-[10px] text-[#a9dcc0]">Total Cost</p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink(`Hi Ivar 🌿 I'd like a corporate quote: ${calcPeople} people, ${findPlan(calcPlan)?.label} plan, ${findDuration(calcDuration)?.label}. Estimated total: ${money(calcResult.total)}.`)}
            target="_blank"
            rel="noreferrer"
            className="block text-center w-full rounded-full px-6 py-3.5 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white hover:bg-ivar-green transition-colors"
          >
            Get Corporate Quote
          </a>
          <p className="text-[11px] text-[#8a938c] text-center mt-3">Excludes delivery (₹{CORPORATE_DELIVERY_RATE_PER_KM}/km from your nearest Ivar hub).</p>
        </div>

        {/* Pricing table */}
        <div className="mb-16">
          <h2 className="font-serif text-xl font-medium mb-1">Full-Day Plan — Bulk Pricing</h2>
          <p className="text-xs text-[#6b7771] mb-5">Indicative totals for the Full-Day Plan at {money(FULL_DAY_PLAN.pricePerPersonPerDay)}/person/day.</p>
          <div className="overflow-x-auto rounded-2xl border border-[#e6e4dc]">
            <table className="w-full text-sm">
              <thead className="bg-[#eef1e8] text-left">
                <tr>
                  <th className="p-3">Team Size</th>
                  {CORPORATE_DURATIONS.map((d) => <th key={d.id} className="p-3">{d.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {TEAM_SIZES.map((size) => (
                  <tr key={size} className="border-t border-[#e6e4dc]">
                    <td className="p-3 font-medium">{size} People</td>
                    {CORPORATE_DURATIONS.map((d) => (
                      <td key={d.id} className="p-3">{money(FULL_DAY_PLAN.pricePerPersonPerDay * d.days * size)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Corporate subscription tiers */}
        <div className="mb-16">
          <h2 className="font-serif text-xl font-medium mb-1">Corporate Subscription Plans</h2>
          <p className="text-xs text-[#6b7771] mb-5">Pick the rhythm that suits your office calendar.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {CORPORATE_SUBSCRIPTION_TIERS.map((t) => (
              <div key={t.id} className="rounded-2xl border border-[#e6e4dc] p-5">
                <h3 className="font-serif text-lg font-medium mb-1">{t.label}</h3>
                <p className="text-xs text-[#8a938c] mb-3">{t.sub}</p>
                <ul className="text-xs text-[#6b7771] space-y-1">
                  {t.features.map((f) => <li key={f}>• {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#8a938c] mt-4">Corporate subscribers receive priority preparation and delivery scheduling.</p>
        </div>

        {/* Menu options */}
        <div className="mb-16">
          <h2 className="font-serif text-xl font-medium mb-1">Menu Options</h2>
          <p className="text-xs text-[#6b7771] mb-5">Veg and Non-Veg bowls crafted for office productivity.</p>
          <div className="flex gap-2 mb-5">
            <button onClick={() => setMenuDiet("veg")} className={`px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer ${menuDiet === "veg" ? "bg-ivar-dark text-white border-ivar-dark" : "border-[#d6ddd7]"}`} suppressHydrationWarning>Veg Menu</button>
            <button onClick={() => setMenuDiet("nonveg")} className={`px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer ${menuDiet === "nonveg" ? "bg-ivar-dark text-white border-ivar-dark" : "border-[#d6ddd7]"}`} suppressHydrationWarning>Non-Veg Menu</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#6b8276] mb-2">Breakfast Options</p>
              <ul className="text-sm space-y-1.5">
                {breakfastExamples.map((p) => <li key={p.id}>{p.name} — {money(p.price)}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#6b8276] mb-2">Lunch Options</p>
              <ul className="text-sm space-y-1.5">
                {(menuDiet === "veg" ? lunchExamplesVeg : lunchExamplesNonVeg).map((p) => <li key={p.id}>{p.name} — {money(p.price)}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Customization */}
        <div className="mb-16">
          <h2 className="font-serif text-xl font-medium mb-1">Customize Your Corporate Meals</h2>
          <p className="text-xs text-[#6b7771] mb-5">Mix and match add-ons for every team's preference. Additional charges apply for all add-ons.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Protein Add-ons", items: proteinAddons },
              { title: "Healthy Add-ons", items: healthyAddons },
              { title: "Beverage Add-ons", items: beverageAddons },
            ].map((group) => (
              <div key={group.title}>
                <p className="text-xs font-bold uppercase tracking-wide text-[#6b8276] mb-2">{group.title}</p>
                <ul className="text-sm space-y-1.5">
                  {group.items.map((p) => <li key={p.id}>{p.name}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery info */}
        <div className="rounded-2xl bg-[#eef1e8] p-6 mb-16">
          <p className="text-xs font-bold uppercase tracking-wide text-[#6b8276] mb-2">Delivery Information</p>
          <p className="text-sm mb-1">Ivar Kitchen — delivering across your city</p>
          <p className="text-sm mb-1">Delivery Charge: ₹{CORPORATE_DELIVERY_RATE_PER_KM} Per KM</p>
          <p className="text-xs text-[#6b7771] mt-2">
            Delivery charges are calculated based on office location. If your office is outside our service radius, contact us on WhatsApp for assistance.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="font-serif text-xl font-medium text-center mb-6">Why Companies Choose Ivar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {BENEFITS.map((b) => (
              <div key={b} className="rounded-xl border border-[#e6e4dc] p-3 text-center text-xs font-medium">{b}</div>
            ))}
          </div>
        </div>

        {/* Inquiry form */}
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-serif text-2xl font-medium text-center mb-2">Corporate Inquiry</h2>
          <p className="text-center text-[#6b7771] text-sm mb-8">
            Share a few details and our team will revert with a tailored proposal.
          </p>

          {submitted ? (
            <div className="bg-[#f4f6f1] rounded-2xl p-8 md:p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-ivar-green/15 text-ivar-green flex items-center justify-center text-2xl mx-auto mb-4">✓</div>
              <h3 className="font-serif text-2xl font-medium mb-2">Thanks, {form.contactPerson}!</h3>
              <p className="text-[#68766f] text-sm leading-[1.7] font-light">
                Your inquiry has opened in WhatsApp — send the message to get a response from our team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border border-[#e6e4dc] rounded-2xl p-6 sm:p-8">
              <input required placeholder="Company Name*" value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" />
              <input required placeholder="Contact Person*" value={form.contactPerson} onChange={(e) => setForm({ ...form, contactPerson: e.target.value })} className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" />
              <input required placeholder="Phone Number*" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" />
              <input required type="email" placeholder="Email Address*" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" />
              <input required className="sm:col-span-2 border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" placeholder="Office Location*" value={form.officeLocation} onChange={(e) => setForm({ ...form, officeLocation: e.target.value })} />
              <input
                required
                type="number"
                min={CORPORATE_MIN_PEOPLE}
                placeholder={`Number Of Employees* (min ${CORPORATE_MIN_PEOPLE})`}
                value={form.numberOfEmployees}
                onChange={(e) => setForm({ ...form, numberOfEmployees: e.target.value })}
                className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark"
              />
              <select required value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })} className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" suppressHydrationWarning>
                {CORPORATE_PLANS.map((p) => <option key={p.id} value={p.id}>{p.label} ({money(p.pricePerPersonPerDay)}/person)</option>)}
              </select>
              <select required value={form.dietPreference} onChange={(e) => setForm({ ...form, dietPreference: e.target.value })} className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" suppressHydrationWarning>
                <option value="" disabled>Select preference</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Both">Both</option>
              </select>
              <select required value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="sm:col-span-2 border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" suppressHydrationWarning>
                {CORPORATE_DURATIONS.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}
              </select>
              <input type="date" className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" value={form.expectedStartDate} onChange={(e) => setForm({ ...form, expectedStartDate: e.target.value })} />
              <input placeholder="Additional Requirements" value={form.additionalRequirements} onChange={(e) => setForm({ ...form, additionalRequirements: e.target.value })} className="border border-[#d6ddd7] rounded-xl px-4 py-3 text-sm outline-none focus:border-ivar-dark" />
              <button type="submit" className="sm:col-span-2 rounded-full px-6 py-4 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white hover:bg-ivar-green transition-colors cursor-pointer" suppressHydrationWarning>
                💬 Get Proposal
              </button>
              <p className="sm:col-span-2 text-[11px] text-[#7b857f] text-center">
                On submit, your inquiry opens directly in WhatsApp for instant response.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
