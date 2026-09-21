"use client";

import { useState } from "react";
import { money } from "../data/products";
import { useCart } from "../context/CartContext";
import { useProductModal } from "../context/ProductModalContext";
import { products as allProducts } from "../data/products";
import { buildWhatsAppLink } from "../lib/whatsapp";
import PageHeader from "../components/PageHeader";
import IvarLoader from "../components/IvarLoader";
import { fetchWithTimeout } from "../lib/fetchWithTimeout";

const TOTAL_STEPS = 6;

const LIFESTYLES = [
  { id: "student", label: "Student", icon: "🎓" },
  { id: "working-pro", label: "Working Pro", icon: "💼" },
  { id: "business", label: "Business", icon: "🏢" },
  { id: "homemaker", label: "Homemaker", icon: "🏠" },
  { id: "athlete", label: "Athlete", icon: "🏃" },
];

const ACTIVITY_LEVELS = [
  { id: "sedentary", label: "Sedentary", desc: "Mostly sitting" },
  { id: "light", label: "Lightly Active", desc: "1-2 workouts/wk" },
  { id: "moderate", label: "Moderately Active", desc: "3-4 workouts/wk" },
  { id: "very-active", label: "Very Active", desc: "5-7 workouts/wk" },
  { id: "athlete", label: "Athlete", desc: "Daily training" },
];

const GOALS = [
  { id: "fat-loss", label: "Fat Loss" },
  { id: "weight-loss", label: "Weight Loss" },
  { id: "maintenance", label: "Maintenance" },
  { id: "muscle-gain", label: "Muscle Gain" },
  { id: "healthy-eating", label: "Healthy Eating" },
];

const FOOD_PREFS = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "eggitarian", label: "Eggitarian" },
  { id: "nonveg", label: "Non-Veg" },
];

const ALLERGIES = ["Dairy", "Eggs", "Peanuts", "Tree Nuts", "Soy", "Gluten", "Shellfish", "Mushroom"];
const MEDICAL_CONDITIONS = ["Diabetes", "Thyroid", "Hypertension", "PCOS", "Cholesterol", "None"];
const MEAL_TIMINGS = [
  { id: "early-morning", label: "Early Morning" },
  { id: "morning", label: "Morning" },
  { id: "afternoon", label: "Afternoon" },
  { id: "evening", label: "Evening" },
  { id: "flexible", label: "Flexible" },
];
const MEALS_PER_DAY = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "lunch-dinner", label: "Lunch + Dinner" },
  { id: "all-three", label: "All Three Meals" },
];

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

function Tile({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-3 text-left cursor-pointer transition-colors ${
        active ? "border-ivar-dark bg-[#eef1e8]" : "border-[#e6e4dc] hover:border-ivar-dark"
      }`}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}

const initialForm = {
  fullName: "",
  mobile: "",
  email: "",
  deliveryAddress: "",
  deliveryNotes: "",
  age: 28,
  gender: "male",
  heightCm: 170,
  weightKg: 65,
  lifestyle: "working-pro",
  activityLevel: "moderate",
  goal: "healthy-eating",
  foodPreference: "vegetarian",
  allergies: [],
  medicalConditions: [],
  preferredMealTiming: "flexible",
  sleepHours: 7,
  waterLitres: 2.5,
  targetWeightKg: 65,
  timelineWeeks: 8,
  mealsPerDay: "lunch-dinner",
  planDuration: "weekly",
  monthlyDeliveryDays: 22,
  numberOfPeople: 1,
};

export default function PlannerPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { add } = useCart();
  const { openProduct } = useProductModal();

  function update(patch) {
    setForm((f) => ({ ...f, ...patch }));
  }

  function toggleAllergy(a) {
    update({ allergies: form.allergies.includes(a) ? form.allergies.filter((x) => x !== a) : [...form.allergies, a] });
  }
  function toggleCondition(c) {
    update({ medicalConditions: form.medicalConditions.includes(c) ? form.medicalConditions.filter((x) => x !== c) : [...form.medicalConditions, c] });
  }

  async function handleGenerate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchWithTimeout("/api/planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setReport(data);
    } catch (err) {
      setError(err.message?.includes("network") ? err.message : "Something went wrong generating your plan — please try again.");
    } finally {
      setLoading(false);
    }
  }

  function viewProduct(id) {
    const p = allProducts.find((x) => x.id === id);
    if (p) openProduct(p);
  }

  const waMessage = report
    ? `Hi Ivar 🌿 I just generated a wellness plan (goal: ${form.goal}). Target: ${report.targetKcal}kcal/day, ${report.macros.proteinG}g protein. Recommended for me: ${report.recommendations.map((r) => r.name).join(", ")}.`
    : "";

  if (report) {
    return (
      <main>
        <PageHeader
          title="Ivar Wellness Planner"
          subtitle="Your personalised plan is ready."
          img="/assets/hero-veg-spices.jpg"
        />
        <section className="max-w-[900px] mx-auto px-[6vw] py-[70px] md:py-[90px] space-y-6">
          <div className="rounded-3xl bg-ivar-dark text-white p-6">
            <p className="text-xs font-bold tracking-wide text-[#a9dcc0] uppercase mb-2">
              Hi {form.fullName || "there"} — your plan is ready
            </p>
            <h2 className="font-serif text-2xl font-medium mb-4">Here's what your body needs daily</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {[
                { label: "BMI", value: report.bmi },
                { label: "BMR", value: `${report.bmr} kcal` },
                { label: "TDEE", value: `${report.tdee} kcal` },
                { label: "Target", value: `${report.targetKcal} kcal` },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl py-3">
                  <p className="text-sm font-bold">{s.value}</p>
                  <p className="text-[10px] text-[#a9dcc0] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-4 text-xs text-[#dce8e1]">
              <span>Protein {report.macros.proteinG}g</span>
              <span>Carbs {report.macros.carbsG}g</span>
              <span>Fat {report.macros.fatG}g</span>
              <span>Fiber {report.macros.fiberG}g</span>
            </div>
            <p className="text-xs text-[#a9dcc0] mt-3">
              Nutrition score {report.nutritionScore}/100 · Healthy weight range {report.healthyWeightRangeKg[0]}–{report.healthyWeightRangeKg[1]} kg
            </p>
          </div>

          <div className="rounded-3xl border border-[#e6e4dc] bg-white p-6">
            <p className="text-xs font-bold tracking-wide text-[#6b8276] uppercase mb-3">AI Insights</p>
            <ul className="space-y-2 text-sm">
              {report.insights.map((insight, i) => (
                <li key={i} className="flex gap-2">
                  <span>💡</span> {insight}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[#e6e4dc] bg-white p-6">
            <p className="text-xs font-bold tracking-wide text-[#6b8276] uppercase mb-3">Ivar Picks For You</p>
            <div className="space-y-2">
              {report.recommendations.map((r) => (
                <button
                  key={r.id}
                  onClick={() => viewProduct(r.id)}
                  className="w-full text-left flex items-center justify-between rounded-2xl border border-[#e6e4dc] p-3.5 hover:border-ivar-dark transition-colors cursor-pointer"
                  suppressHydrationWarning
                >
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-xs text-[#6b7771]">{r.desc}</p>
                  </div>
                  <span className="text-sm font-semibold shrink-0 ml-3">{money(r.price)}</span>
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              <button
                onClick={() => report.recommendations.forEach((r) => add(r.id, 1))}
                className="rounded-full px-6 py-3 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white hover:bg-ivar-green transition-colors cursor-pointer"
                suppressHydrationWarning
              >
                Add All to Cart
              </button>
              <a
                href={buildWhatsAppLink(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 font-semibold text-[13px] tracking-wide border border-[#25D366] text-[#128C4A] hover:bg-[#25D366]/10 transition-colors"
              >
                💬 Share Plan on WhatsApp
              </a>
              <button
                onClick={() => {
                  setReport(null);
                  setStep(1);
                }}
                className="rounded-full px-6 py-3 font-semibold text-[13px] tracking-wide border border-[#d6ddd7] hover:border-ivar-dark transition-colors cursor-pointer"
                suppressHydrationWarning
              >
                Start Over
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHeader
        title="Ivar Wellness Planner"
        subtitle="A quick, free nutrition check-in — get your daily targets and a few Ivar picks to match."
        img="/assets/hero-veg-spices.jpg"
      />

      <section className="max-w-[900px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
        <div className="flex items-center gap-1.5 mb-2">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i < step ? "bg-ivar-dark" : "bg-[#eef1e8]"}`} />
          ))}
        </div>
        <p className="text-xs text-[#8a938c] mb-8">Step {step}/{TOTAL_STEPS}</p>

        <div className="rounded-3xl border border-[#e6e4dc] bg-white p-6 sm:p-8 space-y-6">
          {step === 1 && (
            <>
              <h2 className="font-serif text-xl font-medium">Tell us about you</h2>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Full Name*" value={form.fullName} onChange={(e) => update({ fullName: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                <input placeholder="Mobile Number*" value={form.mobile} onChange={(e) => update({ mobile: e.target.value })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                <input placeholder="Email (optional)" className="col-span-2 h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" value={form.email} onChange={(e) => update({ email: e.target.value })} />
              </div>
              <textarea placeholder="Delivery Address*" rows={2} value={form.deliveryAddress} onChange={(e) => update({ deliveryAddress: e.target.value })} className="w-full rounded-xl border border-[#d6ddd7] px-4 py-3 text-sm outline-none focus:border-ivar-dark resize-none" />
              <textarea placeholder="Delivery Notes (optional)" rows={2} value={form.deliveryNotes} onChange={(e) => update({ deliveryNotes: e.target.value })} className="w-full rounded-xl border border-[#d6ddd7] px-4 py-3 text-sm outline-none focus:border-ivar-dark resize-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Age" value={form.age} onChange={(e) => update({ age: Number(e.target.value) })} className="h-11 rounded-xl border border-[#d6ddd7] px-4 text-sm outline-none focus:border-ivar-dark" />
                <div className="flex gap-2">
                  {["male", "female", "other"].map((g) => (
                    <Chip key={g} active={form.gender === g} onClick={() => update({ gender: g })}>
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </Chip>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm">Height: {form.heightCm} cm</label>
                <input type="range" min={140} max={210} value={form.heightCm} onChange={(e) => update({ heightCm: Number(e.target.value) })} className="w-full mt-2 accent-ivar-dark" />
              </div>
              <div>
                <label className="text-sm">Weight: {form.weightKg} kg</label>
                <input type="range" min={35} max={150} value={form.weightKg} onChange={(e) => update({ weightKg: Number(e.target.value) })} className="w-full mt-2 accent-ivar-dark" />
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Lifestyle</p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {LIFESTYLES.map((l) => (
                    <Tile key={l.id} active={form.lifestyle === l.id} onClick={() => update({ lifestyle: l.id })}>
                      <span className="text-xl">{l.icon}</span>
                      <p className="text-[11px] mt-1">{l.label}</p>
                    </Tile>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-[#8a938c]">Your details are saved on this device so you don't lose progress.</p>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="font-serif text-xl font-medium">How active are you?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACTIVITY_LEVELS.map((a) => (
                  <Tile key={a.id} active={form.activityLevel === a.id} onClick={() => update({ activityLevel: a.id })}>
                    <p className="text-sm font-semibold">{a.label}</p>
                    <p className="text-xs text-[#8a938c]">{a.desc}</p>
                  </Tile>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="font-serif text-xl font-medium">What's your primary goal?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {GOALS.map((g) => (
                  <Tile key={g.id} active={form.goal === g.id} onClick={() => update({ goal: g.id })}>
                    <p className="text-sm font-medium text-center">{g.label}</p>
                  </Tile>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="font-serif text-xl font-medium">Food preference</h2>
              <div className="flex gap-2">
                {FOOD_PREFS.map((f) => (
                  <Tile key={f.id} active={form.foodPreference === f.id} onClick={() => update({ foodPreference: f.id })}>
                    <p className="text-sm font-medium">{f.label}</p>
                  </Tile>
                ))}
              </div>
              <p className="text-sm font-medium mt-4 mb-2">Allergies (select all that apply)</p>
              <div className="flex flex-wrap gap-2">
                {ALLERGIES.map((a) => (
                  <Chip key={a} active={form.allergies.includes(a)} onClick={() => toggleAllergy(a)}>{a}</Chip>
                ))}
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h2 className="font-serif text-xl font-medium">Health conditions</h2>
              <p className="text-xs text-[#8a938c] -mt-3">Optional — helps us tune your plan</p>
              <div className="flex flex-wrap gap-2">
                {MEDICAL_CONDITIONS.map((c) => (
                  <Chip key={c} active={form.medicalConditions.includes(c)} onClick={() => toggleCondition(c)}>{c}</Chip>
                ))}
              </div>
              <p className="text-sm font-medium mt-4 mb-2">Preferred Meal Timing</p>
              <div className="flex flex-wrap gap-2">
                {MEAL_TIMINGS.map((t) => (
                  <Chip key={t.id} active={form.preferredMealTiming === t.id} onClick={() => update({ preferredMealTiming: t.id })}>{t.label}</Chip>
                ))}
              </div>
              <div className="space-y-4 pt-2">
                <div>
                  <label className="text-sm">Sleep: {form.sleepHours} hrs/night</label>
                  <input type="range" min={3} max={10} value={form.sleepHours} onChange={(e) => update({ sleepHours: Number(e.target.value) })} className="w-full mt-2 accent-ivar-dark" />
                </div>
                <div>
                  <label className="text-sm">Water: {form.waterLitres} L/day</label>
                  <input type="range" min={1} max={5} step={0.5} value={form.waterLitres} onChange={(e) => update({ waterLitres: Number(e.target.value) })} className="w-full mt-2 accent-ivar-dark" />
                </div>
                <div>
                  <label className="text-sm">Target Weight: {form.targetWeightKg} kg</label>
                  <input type="range" min={35} max={150} value={form.targetWeightKg} onChange={(e) => update({ targetWeightKg: Number(e.target.value) })} className="w-full mt-2 accent-ivar-dark" />
                </div>
                <div>
                  <label className="text-sm">Timeline: {form.timelineWeeks} weeks</label>
                  <input type="range" min={2} max={24} value={form.timelineWeeks} onChange={(e) => update({ timelineWeeks: Number(e.target.value) })} className="w-full mt-2 accent-ivar-dark" />
                </div>
              </div>
            </>
          )}

          {step === 6 && (
            <>
              {loading ? (
                <div className="py-10">
                  <IvarLoader size="lg" label="Crunching your numbers…" />
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-xl font-medium">Build your subscription</h2>
                  <p className="text-sm font-medium mt-2 mb-2">Meals each delivery day</p>
                  <div className="flex flex-wrap gap-2">
                    {MEALS_PER_DAY.map((m) => (
                      <Chip key={m.id} active={form.mealsPerDay === m.id} onClick={() => update({ mealsPerDay: m.id })}>{m.label}</Chip>
                    ))}
                  </div>
                  <p className="text-sm font-medium mt-4 mb-2">Plan duration</p>
                  <div className="flex gap-2">
                    <Chip active={form.planDuration === "weekly"} onClick={() => update({ planDuration: "weekly" })}>Weekly · 5 days</Chip>
                    <Chip active={form.planDuration === "monthly"} onClick={() => update({ planDuration: "monthly" })}>Monthly</Chip>
                  </div>
                  {form.planDuration === "monthly" && (
                    <div className="flex gap-2 mt-2">
                      {[20, 22, 24, 26].map((d) => (
                        <Chip key={d} active={form.monthlyDeliveryDays === d} onClick={() => update({ monthlyDeliveryDays: d })}>{d} days</Chip>
                      ))}
                    </div>
                  )}
                  <p className="text-sm font-medium mt-4 mb-2">Number of people</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((n) => (
                      <Chip key={n} active={form.numberOfPeople === n} onClick={() => update({ numberOfPeople: n })}>{n === 4 ? "4+" : n}</Chip>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#8a938c] pt-3">
                    By generating your report you agree to be contacted by Ivar with your personalized plan.
                  </p>
                  {error && <p className="text-sm text-[#a9433a]">{error}</p>}
                  <button
                    onClick={handleGenerate}
                    className="w-full rounded-full px-6 py-4 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green cursor-pointer"
                    suppressHydrationWarning
                  >
                    ✨ Generate My Report
                  </button>
                </>
              )}
            </>
          )}

          {!loading && (
            <div className="flex justify-between pt-4 border-t border-[#e6e4dc]">
              <button
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1}
                className="rounded-full px-6 py-3 font-semibold text-[13px] tracking-wide border border-[#d6ddd7] hover:border-ivar-dark transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                suppressHydrationWarning
              >
                Back
              </button>
              {step < TOTAL_STEPS && (
                <button
                  onClick={() => setStep((s) => Math.min(TOTAL_STEPS, s + 1))}
                  className="rounded-full px-6 py-3 font-semibold text-[13px] tracking-wide bg-ivar-dark text-white hover:bg-ivar-green transition-colors cursor-pointer"
                  suppressHydrationWarning
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
