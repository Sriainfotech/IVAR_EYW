import { notFound } from "next/navigation";
import { products } from "../../data/products";
import Link from "next/link";
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
      <nav aria-label="Breadcrumb" className="max-w-[1100px] mx-auto px-[6vw] pt-6 text-[12px] text-[#4b564f]">
        <Link href="/shop" className="hover:text-ivar-dark">Menu</Link>
        <span className="mx-2">/</span>
        <span>{product.cat}</span>
      </nav>
      <section className="max-w-[1100px] mx-auto px-[6vw] py-8 md:py-12">
        <ProductDetails product={product} />
      </section>
    </main>
  );
}
