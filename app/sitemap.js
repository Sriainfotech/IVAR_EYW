import { products } from "./data/products";

export const dynamic = "force-static";

const BASE_URL = "https://ivarlife.com";

export default function sitemap() {
  const staticRoutes = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/shop`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/story`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/wellness`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
  ].map((route) => ({ ...route, lastModified: new Date() }));

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/product/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
