import { products } from "./products";

// Groups the existing "Eat" catalog into the broader Foods categories used
// by /foods and /foods/[slug]. Traditional Foods and Frozen Foods have no
// matching products yet, so their pages render a "coming soon" state
// instead of pretending products exist.
export const FOOD_CATEGORIES = [
  {
    slug: "snacks",
    label: "Snacks",
    icon: "bag",
    tagline: "Healthy Snacking, The Indian Way.",
    text: "Delicious snacks made from India's finest ingredients like millets, makhana and more. Light, crunchy and full of goodness for your everyday moments.",
    img: "/assets/products/eat/makhana-crunch.jpg",
    cats: ["Nuts, Seeds & Snacks", "Energy Bites & Cookies", "Non-Veg Snacks"],
  },
  {
    slug: "breakfast",
    label: "Breakfast",
    icon: "heart",
    tagline: "Start the Day the Wholesome Way.",
    text: "Wholesome breakfast mixes and grains, made to fuel a better morning.",
    img: "/assets/products/eat/multigrain-breakfast-mix.jpg",
    cats: ["Breakfast & Grains"],
  },
  {
    slug: "beverages",
    label: "Beverages",
    icon: "flask",
    tagline: "Sip on Something Better.",
    text: "Teas, shots and everyday drinks made with natural ingredients.",
    img: "/assets/products/eat/turmeric-latte.jpg",
    cats: ["Teas & Beverages", "Wellness Shots"],
  },
  {
    slug: "ready-to-cook",
    label: "Ready to Cook",
    icon: "box",
    tagline: "Cooking Made Simple.",
    text: "Mixes and essentials that make home cooking quicker, without cutting corners.",
    img: "/assets/products/eat/millet-mix.jpg",
    cats: ["Cooking Essentials", "Ready Mixes"],
  },
  {
    slug: "ready-to-eat",
    label: "Ready to Eat",
    icon: "check",
    tagline: "Good Food, Ready When You Are.",
    text: "Café favourites and protein bowls, ready whenever hunger strikes.",
    img: "/assets/products/eat/classic-oats-bowl.jpg",
    cats: ["Café Favourites", "Protein Bowls"],
  },
  {
    slug: "traditional-foods",
    label: "Traditional Foods",
    icon: "people",
    tagline: "Traditional Recipes, Modern Formats.",
    text: "Classic Indian recipes we're bringing into modern, everyday formats.",
    img: "/assets/hero-veg-spices.jpg",
    cats: [],
  },
  {
    slug: "frozen-foods",
    label: "Frozen Foods",
    icon: "shield",
    tagline: "Fresh, Locked In.",
    text: "Frozen formats that keep Ivar's food fresh for longer.",
    img: "/assets/hero-grain-bowl.jpg",
    cats: [],
  },
  {
    // Not shown in the category nav/sidebar (the reference design lists 7
    // categories) but the route still works and the data stays real.
    slug: "active-nutrition",
    label: "Active Nutrition",
    icon: "leaf",
    tagline: "Fuel for an Active Life.",
    text: "Protein and active nutrition for everyday performance.",
    img: "/assets/products/eat/active-protein.jpg",
    cats: ["Protein & Active Nutrition"],
    hidden: true,
  },
];

export const VISIBLE_FOOD_CATEGORIES = FOOD_CATEGORIES.filter((c) => !c.hidden);

export function productsForCategory(slug) {
  const cat = FOOD_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return [];
  return products.filter((p) => p.group === "Eat" && cat.cats.includes(p.cat));
}
