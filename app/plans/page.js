"use client";

import { useMemo, useState } from "react";
import { products, money } from "../data/products";
import { buildWhatsAppLink } from "../lib/whatsapp";
import PageHeader from "../components/PageHeader";

const TOTAL_STEPS = 7;
const SUBSCRIPTION_DISCOUNT = { weekly: 10, monthly: 15 };
const PRESETS = ["Best Sellers", "Weight Loss", "Muscle Gain", "Vegetarian", "High Protein", "Pick Manually"];

function eatByCat(cats) {
  return products.filter((p) => p.group === "Eat" && cats.includes(p.cat));
}

function avgPrice(list) {
  if (list.length === 0) return 0;
  return Math.round(list.reduce((s, p) => s + p.price, 0) / list.length);
}

function productDiet(p) {
  if (p.cat === "Non-Veg Snacks") return "nonveg";
  if (p.cat === "Protein Bowls" && /chicken|steak|prawn|salmon|fish/i.test(p.name)) return "nonveg";
  return "veg";
}

function tomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d;
}

function addDaysSkippingSunday(start, count) {
  const dates = [];
  const cur = new Date(start);
  while (dates.length < count) {
    if (cur.getDay() !== 0) dates.push(cur.toISOString().slice(0, 10));
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-colors ${
        active ? "bg-ivar-dark text-white border-ivar-dark" : "border-[#d6ddd7] text-[#4b564f] hover:border-ivar-dark"
      }`}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}

export default function PlansPage() {
  const [step, setStep] = useState(1);

  // Step 1
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [instructions, setInstructions] = useState("");

  // Step 2
  const [meals, setMeals] = useState({ breakfast: false, lunch: true, dinner: true });

  // Step 3
  const [duration, setDuration] = useState("weekly");
  const [monthlyDays, setMonthlyDays] = useState(22);

  // Step 4
  const [startDate, setStartDate] = useState(tomorrow().toISOString().slice(0, 10));
  const [pausedDates, setPausedDates] = useState([]);

  // Step 5
  const [dietFilter, setDietFilter] = useState("all");
  const [preset, setPreset] = useState(PRESETS[0]);

  // Step 6
  const [people, setPeople] = useState(1);

  // Step 7
  const [address, setAddress] = useState({
    flatNo: "", floorNo: "", building: "", street: "", area: "", landmark: "", city: "Hyderabad", state: "Telangana", pincode: "",
  });
  const [tripsPerDay, setTripsPerDay] = useState(1);
  const [lunchTime, setLunchTime] = useState("1:00 PM");
  const [dinnerTime, setDinnerTime] = useState("7:00 PM");

  const breakfastPool = eatByCat(["Breakfast & Grains", "Ready Mixes"]);
  const lunchPool = eatByCat(["Café Favourites", "Protein Bowls"]);
  const dinnerPool = eatByCat(["Protein Bowls", "Non-Veg Snacks"]);

  const mealPrices = {
    breakfast: avgPrice(breakfastPool),
    lunch: avgPrice(lunchPool),
    dinner: avgPrice(dinnerPool),
  };
  const selectedMealKeys = Object.keys(meals).filter((k) => meals[k]);
  const pricePerDay = selectedMealKeys.reduce((s, k) => s + mealPrices[k], 0);

  const deliveryDayCount = duration === "monthly" ? monthlyDays : 5;
  const deliveryDates = useMemo(() => addDaysSkippingSunday(new Date(startDate), deliveryDayCount), [startDate, deliveryDayCount]);
  const activeDays = deliveryDates.length - pausedDates.length;

  function togglePause(date) {
    setPausedDates((prev) => (prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]));
  }

  const bowlPool = useMemo(() => {
    const all = [...breakfastPool, ...lunchPool, ...dinnerPool].filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i);
    if (dietFilter === "all") return all;
    return all.filter((p) => productDiet(p) === dietFilter);
  }, [dietFilter, breakfastPool, lunchPool, dinnerPool]);

  function bowlForDay(index, slot) {
    const pool = bowlPool.length ? bowlPool : products.filter((p) => p.group === "Eat");
    return pool[(index + (slot === "dinner" ? 1 : 0)) % pool.length];
  }

  const discountPct = SUBSCRIPTION_DISCOUNT[duration];
  const mealCost = pricePerDay * activeDays * people;
  const discount = Math.round(mealCost * (discountPct / 100));
  const mealTotal = mealCost - discount;
  const totalBowls = activeDays * selectedMealKeys.length * people;

  const waMessage = `Hi Ivar 🌿 I'd like to start a subscription:\n\nMeals: ${selectedMealKeys.join(", ") || "—"}\nPlan: ${duration}${duration === "monthly" ? ` (${monthlyDays} days)` : ""}\nDelivery days: ${activeDays}\nStart date: ${deliveryDates[0]}\nPeople: ${people}\nTotal: ${money(mealTotal)}\n\nName: ${fullName}\nMobile: ${mobile}\nAddress: ${address.flatNo}, ${address.street}, ${address.area}, ${address.city} - ${address.pincode}`;

  function next() {
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }
  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  return (
    <main>
      <PageHeader
        eyebrow="🌱 Subscribe to Ivar"
        title="Build the perfect meal plan for you."
        subtitle="Pick your meals, choose delivery dates and pause anytime. Save up to 15% with weekly and monthly plans."
        img="/assets/hero-couple-cooking.jpg"
      />

      <section className="max-w-[1300px] mx-auto px-[6vw] py-[70px] md:py-[90px] grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
        <div>
          <div className="flex items-center gap-1.5 mb-8">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${i < step ? "bg-ivar-dark" : "bg-[#EEE6D5]"}`} />
            ))}
          </div>

          <div className="rounded-3xl border border-[#e6e4dc] bg-white p-6 sm:p-8 space-y-6">
            {step === 1 && (
              <>
                <h2 className="font-serif text-xl font-medium">1. Your Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="Full Name*" value={fullName} onChange={(e) => setFullName(e.target.value)} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                  <input placeholder="Mobile Number*" value={mobile} onChange={(e) => setMobile(e.target.value)} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                  <input placeholder="Email Address*" className="col-span-2 h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <textarea placeholder="Delivery Instructions (optional)" rows={2} value={instructions} onChange={(e) => setInstructions(e.target.value)} className="w-full rounded-xl border border-[#d6ddd7] px-4 py-3 text-sm outline-none focus:border-ivar-dark resize-none" />
                <p className="text-[11px] text-[#8a938c]">Your details are saved on this device.</p>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-serif text-xl font-medium">2. Choose Your Meals</h2>
                <p className="text-xs text-[#8a938c] -mt-3">Pick any combination</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(["breakfast", "lunch", "dinner"]).map((meal) => (
                    <button
                      key={meal}
                      onClick={() => setMeals((m) => ({ ...m, [meal]: !m[meal] }))}
                      className={`rounded-2xl border p-4 text-left cursor-pointer transition-colors ${
                        meals[meal] ? "border-ivar-dark bg-[#EEE6D5]" : "border-[#e6e4dc]"
                      }`}
                      suppressHydrationWarning
                    >
                      <p className="text-sm font-semibold capitalize">{meal}</p>
                      <p className="text-xs text-[#6b7771]">{meal === "breakfast" ? "7-11 AM" : meal === "lunch" ? "12:30-2 PM" : "6-8 PM"}</p>
                      <p className="text-sm font-bold mt-2">{money(mealPrices[meal])}/day (avg)</p>
                    </button>
                  ))}
                </div>
                {selectedMealKeys.length > 0 && (
                  <div className="rounded-2xl bg-[#EEE6D5] p-4">
                    <p className="text-sm font-semibold">{money(pricePerDay)}/day blended · {selectedMealKeys.length} meal(s) selected</p>
                  </div>
                )}
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-serif text-xl font-medium">3. Plan Duration</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button onClick={() => setDuration("weekly")} className={`text-left rounded-2xl border p-5 cursor-pointer transition-colors ${duration === "weekly" ? "border-ivar-dark bg-[#EEE6D5]" : "border-[#e6e4dc]"}`} suppressHydrationWarning>
                    <p className="font-serif font-medium mb-1">Weekly</p>
                    <p className="text-xs text-[#6b7771] mb-2">5 delivery days · Most Flexible</p>
                    <p className="text-sm font-semibold text-ivar-dark">{SUBSCRIPTION_DISCOUNT.weekly}% OFF</p>
                  </button>
                  <button onClick={() => setDuration("monthly")} className={`text-left rounded-2xl border p-5 cursor-pointer transition-colors ${duration === "monthly" ? "border-ivar-dark bg-[#EEE6D5]" : "border-[#e6e4dc]"}`} suppressHydrationWarning>
                    <p className="font-serif font-medium mb-1">Monthly</p>
                    <p className="text-xs text-[#6b7771] mb-2">Choose delivery days · Best Value</p>
                    <p className="text-sm font-semibold text-ivar-dark">{SUBSCRIPTION_DISCOUNT.monthly}% OFF</p>
                  </button>
                </div>
                {duration === "monthly" && (
                  <div className="flex gap-2">
                    {[20, 22, 24, 26].map((d) => (
                      <Chip key={d} active={monthlyDays === d} onClick={() => setMonthlyDays(d)}>{d} days</Chip>
                    ))}
                  </div>
                )}
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="font-serif text-xl font-medium">4. Custom Delivery Calendar</h2>
                <p className="text-xs text-[#8a938c] -mt-3">Sundays are a holiday and excluded</p>
                <div className="flex gap-2 items-center flex-wrap">
                  <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setPausedDates([]); }} className="h-10 rounded-xl border border-[#d6ddd7] px-3 text-sm" />
                  <button onClick={() => { setStartDate(tomorrow().toISOString().slice(0, 10)); setPausedDates([]); }} className="text-xs font-semibold border border-[#d6ddd7] rounded-full px-3 py-2 cursor-pointer hover:border-ivar-dark" suppressHydrationWarning>Reset to tomorrow</button>
                  <button onClick={() => setPausedDates([])} className="text-xs font-semibold border border-[#d6ddd7] rounded-full px-3 py-2 cursor-pointer hover:border-ivar-dark" suppressHydrationWarning>Auto-fill {deliveryDayCount} days</button>
                </div>
                <p className="text-sm">{activeDays} of {deliveryDates.length} deliveries chosen</p>
                <div className="flex flex-wrap gap-2">
                  {deliveryDates.map((date) => {
                    const paused = pausedDates.includes(date);
                    return (
                      <button key={date} onClick={() => togglePause(date)} className={`px-3 py-1.5 rounded-full text-xs font-medium border cursor-pointer ${paused ? "line-through text-[#8a938c] border-[#e6e4dc]" : "border-ivar-dark bg-[#EEE6D5]"}`} suppressHydrationWarning>
                        ▷ {new Date(date).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <h2 className="font-serif text-xl font-medium">5. Choose Bowls</h2>
                <p className="text-xs text-[#8a938c] -mt-3">Quick preset — you can edit any day after</p>
                <div className="flex gap-2">
                  {["all", "veg", "nonveg"].map((f) => (
                    <Chip key={f} active={dietFilter === f} onClick={() => setDietFilter(f)}>{f.toUpperCase()}</Chip>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {PRESETS.map((p) => (
                    <Chip key={p} active={preset === p} onClick={() => setPreset(p)}>{p}</Chip>
                  ))}
                </div>
                <div className="space-y-2">
                  {deliveryDates.slice(0, 7).map((date, i) => (
                    <div key={date} className="rounded-2xl border border-[#e6e4dc] p-3.5">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold">{new Date(date).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })}</p>
                        {i > 0 && <button className="text-xs font-semibold border border-[#d6ddd7] rounded-full px-3 py-1.5 cursor-pointer hover:border-ivar-dark" suppressHydrationWarning>⧉ Copy previous day</button>}
                      </div>
                      {meals.breakfast && <p className="text-xs text-[#6b7771]">Breakfast: {bowlForDay(i, "breakfast").name}</p>}
                      {meals.lunch && <p className="text-xs text-[#6b7771]">Lunch: {bowlForDay(i, "lunch").name} · <span className="text-ivar-dark underline">Tap to change</span></p>}
                      {meals.dinner && <p className="text-xs text-[#6b7771]">Dinner: {bowlForDay(i, "dinner").name} · <span className="text-ivar-dark underline">Tap to change</span></p>}
                    </div>
                  ))}
                </div>
              </>
            )}

            {step === 6 && (
              <>
                <h2 className="font-serif text-xl font-medium">6. Number of People</h2>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Chip key={n} active={people === n} onClick={() => setPeople(n)}>{n === 5 ? "5+" : n}</Chip>
                  ))}
                </div>
                <p className="text-xs text-[#8a938c]">Multiplies bowls & total instantly</p>
              </>
            )}

            {step === 7 && (
              <>
                <h2 className="font-serif text-xl font-medium">7. Delivery & Distance</h2>
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="House / Flat No.*" value={address.flatNo} onChange={(e) => setAddress({ ...address, flatNo: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                  <input placeholder="Floor No. (optional)" value={address.floorNo} onChange={(e) => setAddress({ ...address, floorNo: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                  <input className="col-span-2 h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" placeholder="Building / Apartment (optional)" value={address.building} onChange={(e) => setAddress({ ...address, building: e.target.value })} />
                  <input placeholder="Street*" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                  <input placeholder="Area / Locality*" value={address.area} onChange={(e) => setAddress({ ...address, area: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                  <input placeholder="Landmark (optional)" value={address.landmark} onChange={(e) => setAddress({ ...address, landmark: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                  <input placeholder="City*" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                  <input placeholder="State*" value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                  <input placeholder="Pincode*" value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                </div>

                <p className="text-sm font-medium mt-4 mb-2">Delivery Preference</p>
                <div className="flex gap-2">
                  {[1, 2].map((t) => (
                    <button key={t} onClick={() => setTripsPerDay(t)} className={`px-4 py-2.5 rounded-full text-sm font-semibold border cursor-pointer ${tripsPerDay === t ? "bg-ivar-dark text-white border-ivar-dark" : "border-[#d6ddd7]"}`} suppressHydrationWarning>
                      {t} trip{t > 1 ? "s" : ""}/day
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#8a938c]">Delivery is charged per trip — ₹11/km, rounded up to the next km.</p>

                {meals.lunch && (
                  <div>
                    <p className="text-sm font-medium mb-1">Lunch delivery time (12:30–2:00 PM)</p>
                    <select value={lunchTime} onChange={(e) => setLunchTime(e.target.value)} className="h-10 rounded-xl border border-[#d6ddd7] px-3 text-sm" suppressHydrationWarning>
                      {["12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"].map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                )}
                {meals.dinner && (
                  <div>
                    <p className="text-sm font-medium mb-1">Dinner delivery time (6:00–8:00 PM)</p>
                    <select value={dinnerTime} onChange={(e) => setDinnerTime(e.target.value)} className="h-10 rounded-xl border border-[#d6ddd7] px-3 text-sm" suppressHydrationWarning>
                      {["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"].map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                )}
              </>
            )}

            <div className="flex justify-between pt-4 border-t border-[#e6e4dc]">
              <button onClick={back} disabled={step === 1} className="rounded-full px-6 py-3 font-semibold text-[13px] tracking-wide border border-[#d6ddd7] hover:border-ivar-dark transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" suppressHydrationWarning>
                Back
              </button>
              {step < TOTAL_STEPS ? (
                <button onClick={next} className="rounded-full px-6 py-3 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white hover:bg-ivar-green transition-colors cursor-pointer" suppressHydrationWarning>
                  Continue
                </button>
              ) : (
                <a href={buildWhatsAppLink(waMessage)} target="_blank" rel="noreferrer" className="rounded-full px-6 py-3 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white hover:bg-ivar-green transition-colors">
                  💬 Proceed to WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 h-max">
          <div className="rounded-3xl border border-[#e6e4dc] bg-white p-6 space-y-4">
            <p className="font-serif text-lg font-medium">Your Subscription</p>
            <div className="text-sm space-y-1.5 text-[#6b7771]">
              <div className="flex justify-between"><span>Plan</span><span className="text-[#1A1A1A] capitalize">{duration}{duration === "monthly" ? ` (${monthlyDays})` : ""}</span></div>
              <div className="flex justify-between"><span>Meals</span><span className="text-[#1A1A1A] capitalize">{selectedMealKeys.join(", ") || "—"}</span></div>
              <div className="flex justify-between"><span>Delivery Days</span><span className="text-[#1A1A1A]">{activeDays} of {deliveryDates.length}</span></div>
              <div className="flex justify-between"><span>Start Date</span><span className="text-[#1A1A1A]">{deliveryDates[0]}</span></div>
              <div className="flex justify-between"><span>People</span><span className="text-[#1A1A1A]">{people}</span></div>
              <div className="flex justify-between"><span>Total Bowls</span><span className="text-[#1A1A1A]">{totalBowls}</span></div>
            </div>

            <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
              {deliveryDates.map((d) => (
                <span key={d} className="shrink-0 text-[10px] bg-[#EEE6D5] rounded-full px-2 py-1">
                  {new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                </span>
              ))}
            </div>

            <div className="space-y-1.5 text-sm border-t border-[#e6e4dc] pt-4">
              <div className="flex justify-between"><span className="text-[#6b7771]">Regular Price/Day</span><span>{money(pricePerDay)}</span></div>
              <div className="flex justify-between"><span className="text-[#6b7771]">Meal Cost</span><span>{money(mealCost)}</span></div>
              <div className="flex justify-between"><span className="text-[#6b7771]">Discount</span><span>{discountPct}% OFF</span></div>
              <div className="flex justify-between text-ivar-green"><span>Savings</span><span>-{money(discount)}</span></div>
              <div className="flex justify-between font-semibold"><span>Meal Total</span><span>{money(mealTotal)}</span></div>
              <div className="flex justify-between"><span className="text-[#6b7771]">Delivery</span><span className="text-xs">{address.pincode ? "Calculated at checkout" : "Add address"}</span></div>
            </div>

            <div className="flex justify-between items-baseline border-t border-[#e6e4dc] pt-4">
              <span className="font-semibold">Grand Total</span>
              <span className="font-serif text-xl font-medium text-ivar-dark">{money(mealTotal)}</span>
            </div>

            <a
              href={buildWhatsAppLink(waMessage)}
              target="_blank"
              rel="noreferrer"
              className={`block text-center w-full rounded-full px-6 py-3.5 font-semibold text-[13px] tracking-wide transition-colors duration-200 ${
                selectedMealKeys.length === 0 || !fullName || !mobile ? "bg-[#e6e4dc] text-[#8a938c] pointer-events-none" : "bg-ivar-dark text-white hover:bg-ivar-green"
              }`}
            >
              💬 Proceed to WhatsApp
            </a>
            <p className="text-[11px] text-[#7b857f] text-center">
              We confirm your plan and share payment instantly on WhatsApp.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
