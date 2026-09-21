import { NextResponse } from "next/server";
import { products } from "../../data/products";
import { computeCoreNumbers } from "../../lib/nutrition";
import { askClaude } from "../../lib/claude";

function dietFilter(pref) {
  if (pref === "vegetarian") return (p) => !/chicken|fish|prawn|egg/i.test(p.desc) && !/Non-Veg/.test(p.cat);
  if (pref === "eggitarian") return (p) => !/chicken|fish|prawn/i.test(p.desc) || /egg/i.test(p.desc);
  return () => true;
}

function allergyFilter(allergies) {
  if (!Array.isArray(allergies) || allergies.length === 0) return () => true;
  const keywords = allergies.map((a) => a.toLowerCase());
  return (p) => {
    const hay = `${p.desc} ${p.ingredients.join(" ")}`.toLowerCase();
    return !keywords.some((k) => hay.includes(k));
  };
}

function fallbackInsights(input, score) {
  const insights = [
    `Your nutrition score of ${score}/100 reflects your current activity level and lifestyle — small, consistent changes will move this up quickly.`,
    `Based on your goal (${(input.goal || "healthy-eating").replace("-", " ")}), your macro targets are weighted toward protein to support satiety.`,
  ];
  if (input.sleepHours < 7) insights.push("Try to get closer to 7-8 hours of sleep — it directly affects hunger hormones and recovery.");
  if (input.waterLitres < 2.5) insights.push("Aim for at least 2.5L of water a day to support metabolism and digestion.");
  return insights;
}

export async function POST(request) {
  const input = await request.json();
  if (!input?.weightKg || !input?.heightCm || !input?.age || !input?.goal) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const core = computeCoreNumbers(input);
  const eatProducts = products.filter(
    (p) => p.group === "Eat" && dietFilter(input.foodPreference)(p) && allergyFilter(input.allergies)(p)
  );
  const recommendations = [...eatProducts]
    .sort((a, b) => (/protein/i.test(b.cat) || /protein/i.test(b.desc) ? 1 : 0) - (/protein/i.test(a.cat) || /protein/i.test(a.desc) ? 1 : 0))
    .slice(0, 4)
    .map((p) => ({ id: p.id, name: p.name, price: p.price, desc: p.desc }));

  const system = `You are a nutrition consultant writing for Ivar, a food/yoga/wellness brand. Given a client's computed numbers, write 3 short, plain-language insight bullets (general guidance only, no medical claims). Return ONLY the bullets, one per line, no numbering.`;
  const userMsg = `Goal: ${input.goal}, Activity: ${input.activityLevel}, BMI: ${core.bmi}, BMR: ${core.bmr}, TDEE: ${core.tdee}, Target kcal: ${core.targetKcal}, Nutrition score: ${core.nutritionScore}, Sleep: ${input.sleepHours}h, Water: ${input.waterLitres}L.`;
  const claudeInsights = await askClaude(system, userMsg);
  const insights = claudeInsights
    ? claudeInsights.split("\n").map((s) => s.replace(/^[-•]\s*/, "").trim()).filter(Boolean)
    : fallbackInsights(input, core.nutritionScore);

  return NextResponse.json({
    ...core,
    insights: insights.slice(0, 3).concat("This is general nutrition guidance, not medical advice — consult a doctor for medical conditions."),
    recommendations,
  });
}
