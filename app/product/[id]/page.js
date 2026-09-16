import { notFound } from "next/navigation";
import { products } from "../../data/products";
import PageHeader from "../../components/PageHeader";
import ProductDetails from "../../components/ProductDetails";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export function generateMetadata({ params }) {
  const product = products.find((p) => String(p.id) === params.id);
  if (!product) return { title: "Product not found — Ivar" };

  const title = `${product.name} — Ivar`;
  const url = `/product/${product.id}`;

  return {
    title,
    description: product.desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: product.desc,
      url,
      images: [{ url: product.img }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.desc,
      images: [product.img],
    },
  };
}

export default function ProductPage({ params }) {
  const product = products.find((p) => String(p.id) === params.id);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.desc,
    category: product.cat,
    image: `https://ivarlife.com${product.img}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `https://ivarlife.com/product/${product.id}`,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={product.name}
        subtitle={product.cat}
        img="/assets/hero-veg-spices.jpg"
      />
      <section className="max-w-[1200px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
        <ProductDetails product={product} />
      </section>
    </main>
  );
}
