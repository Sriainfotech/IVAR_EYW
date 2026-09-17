import { NextResponse } from "next/server";
import { products } from "../../data/products";
import { askClaude } from "../../lib/claude";

function buildCatalogContext() {
  return products
    .filter((p) => p.group === "Eat")
    .map(
      (p) =>
        `- ${p.name} (${p.cat}) — ₹${p.price}. ${p.desc} Ingredients: ${p.ingredients.join(", ")}.`
    )
    .join("\n");
}

function keywordRecommendations(message) {
  const lower = message.toLowerCase();
  let pool = products.filter((p) => p.group === "Eat");

  if (/protein/.test(lower)) {
    pool = [...pool].sort((a, b) => {
      const bp = /protein/i.test(b.desc) || /protein/i.test(b.cat) ? 1 : 0;
      const ap = /protein/i.test(a.desc) || /protein/i.test(a.cat) ? 1 : 0;
      return bp - ap;
    });
  }
  if (/breakfast/.test(lower)) pool = pool.filter((p) => p.cat.includes("Breakfast") || p.cat.includes("Café"));
  if (/snack/.test(lower)) pool = pool.filter((p) => p.cat.includes("Snack") || p.cat.includes("Bites"));
  if (/tea|drink|juice|beverage/.test(lower)) pool = pool.filter((p) => p.cat.includes("Beverage") || p.cat.includes("Shot"));
  if (/biryani|bowl/.test(lower)) pool = pool.filter((p) => p.cat.includes("Bowl"));

  return pool.slice(0, 3).map((p) => ({
    productId: p.id,
    name: p.name,
    price: p.price,
    pitch: p.desc,
    link: "/shop",
  }));
}

export async function POST(request) {
  const { message } = await request.json();
  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  const recommendations = keywordRecommendations(message);

  const system = `You are Ivar's friendly shopping assistant for a food, yoga and wellness brand. Yoga and Wellness products are marked "Coming Soon" and cannot be ordered yet — mention that if asked, but steer food questions toward what's actually available. Answer briefly and warmly (2-4 sentences), grounded ONLY in this live Eat catalog:\n\n${buildCatalogContext()}\n\nWhen you recommend a product, name it exactly as in the catalog with its price. End with a suggested next step like "👉 Browse the Shop (/shop)".`;

  const claudeReply = await askClaude(system, message);

  const reply =
    claudeReply ??
    (recommendations.length > 0
      ? `Here's what I'd suggest: ${recommendations.map((r) => `${r.name} (₹${r.price})`).join(", ")}. 👉 Browse the Shop (/shop)`
      : "Tell me if you're after breakfast, snacks, drinks or something high-protein and I'll point you to the best pick! 👉 Browse the Shop (/shop)");

  return NextResponse.json({ reply, recommendations });
}
