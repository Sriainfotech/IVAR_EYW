import { products } from "./products";

// Ivar Health surfaces the wellness/yoga catalog that predates the food
// rebrand. The data was kept (not deleted) specifically so it could be
// reintroduced as its own section later.
export const HEALTH_CATEGORIES = [
  {
    slug: "wellness-shots",
    label: "Wellness Shots",
    icon: "flask",
    tagline: "A Daily Reset, In One Shot.",
    text: "Concentrated wellness shots for mornings, evenings and everything in between.",
    img: "/assets/products/eat/immunity-shield.jpg",
    cats: ["Wellness Shots"],
  },
  {
    slug: "yoga-props",
    label: "Yoga Props",
    icon: "leaf",
    tagline: "The Right Tools for Practice.",
    text: "Mats, blocks, straps and everyday essentials for a steadier practice.",
    img: "/assets/products/eat/food.jpg",
    cats: ["Yoga Props"],
  },
  {
    slug: "guided-sessions",
    label: "Guided Pose Sessions",
    icon: "people",
    tagline: "Practice, Guided Step by Step.",
    text: "Pose-by-pose guided sessions for building a steady, mindful practice.",
    img: "/assets/products/eat/food.jpg",
    cats: ["Guided Pose Sessions", "Classes & Training"],
  },
  {
    slug: "massage-therapy",
    label: "Massage & Therapy",
    icon: "heart",
    tagline: "Traditional Therapy, Restored.",
    text: "Ayurvedic massage and therapy sessions rooted in traditional practice.",
    img: "/assets/products/eat/food.jpg",
    cats: ["Massage & Therapy"],
  },
  {
    slug: "mind-breath",
    label: "Mind & Breath",
    icon: "globe",
    tagline: "A Calmer Mind, One Breath at a Time.",
    text: "Breathwork and mindfulness practices for everyday calm.",
    img: "/assets/products/eat/food.jpg",
    cats: ["Mind & Breath"],
  },
  {
    slug: "detox-relaxation",
    label: "Detox & Relaxation",
    icon: "shield",
    tagline: "Slow Down, Reset, Recover.",
    text: "Detox rituals and relaxation practices for a proper reset.",
    img: "/assets/products/eat/food.jpg",
    cats: ["Detox & Relaxation"],
  },
  {
    slug: "herbal-products",
    label: "Herbal Products",
    icon: "leaf",
    tagline: "Traditional Herbs, Everyday Wellness.",
    text: "Herbal products rooted in Ayurvedic tradition for everyday wellbeing.",
    img: "/assets/products/eat/food.jpg",
    cats: ["Herbal Products"],
  },
  {
    slug: "active-nutrition",
    label: "Active Nutrition",
    icon: "box",
    tagline: "Fuel for an Active Life.",
    text: "Protein and active-nutrition formats built for an active lifestyle.",
    img: "/assets/products/eat/food.jpg",
    cats: ["Protein & Active Nutrition"],
  },
];

export const VISIBLE_HEALTH_CATEGORIES = HEALTH_CATEGORIES.filter((c) => !c.hidden);

export function productsForHealthCategory(slug) {
  const cat = HEALTH_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return [];
  return products.filter((p) => cat.cats.includes(p.cat));
}
