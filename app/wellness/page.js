import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { products } from "../data/products";

export const metadata = {
  title: "Wellness — Ivar",
  description:
    "Explore Ivar's wellness experiences — Ayurvedic massage and therapy, detox and relaxation programs, guided meditation and breathwork, and herbal essentials.",
  alternates: { canonical: "/wellness" },
};

const categoryInfo = {
  "Massage & Therapy": {
    desc: "Traditional Ayurvedic massage and targeted therapy sessions to release tension and restore mobility.",
  },
  "Detox & Relaxation": {
    desc: "Herbal steam, guided detox programs and sleep-focused routines to help your body reset.",
  },
  "Mind & Breath": {
    desc: "Guided meditation and breathwork sessions built around calm, focus and everyday stress relief.",
  },
  Guidance: {
    desc: "One-on-one consultations with an Ivar wellness expert, tailored to your goals.",
  },
  "Herbal Products": {
    desc: "Natural herbal oils and everyday essentials, made with Ayurvedic ingredients and no synthetic additives.",
  },
};

export default function WellnessPage() {
  const wellnessProducts = products.filter((p) => p.group === "Wellness");
  const categories = [...new Set(wellnessProducts.map((p) => p.cat))];

  return (
    <main>
      <PageHeader
        title="Wellness"
        subtitle="Wellness is more than a product."
        img="/assets/hero-veg-thumbsup.jpg"
      />

      <div className="bg-[#fdf6e8] border-b border-[#f0e4c4] text-center py-3 px-[6vw]">
        <p className="text-[#8a6d1f] text-xs font-medium">
          Ivar Wellness is launching soon — browse what&apos;s coming, booking
          opens shortly.
        </p>
      </div>

      <section className="max-w-[900px] mx-auto px-[6vw] py-[70px] md:py-[90px] text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-4 uppercase">
            Ivar Wellness
          </p>
          <h2 className="font-serif font-medium text-[32px] md:text-[42px] leading-[1.1] mb-6">
            Balance, built into your routine.
          </h2>
          <p className="text-[#68766f] leading-[1.9] font-light text-lg">
            Ivar Wellness brings together traditional Ayurvedic therapies and
            modern wellness practices — massage, detox, mindful breathing and
            personal guidance — designed to fit into everyday life, not just
            the occasional spa visit.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-[70px] md:py-[90px] px-[6vw]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-4 uppercase">
              What We Offer
            </p>
            <h2 className="font-serif font-medium text-[32px] md:text-[40px] leading-[1.1]">
              Five ways to feel better.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const count = wellnessProducts.filter((p) => p.cat === cat).length;
              return (
                <Reveal
                  key={cat}
                  delay={i * 80}
                  className="bg-[#f4f6f1] rounded-2xl p-7 md:p-8 flex flex-col"
                >
                  <h3 className="font-serif text-xl font-medium mb-2">
                    {cat}
                  </h3>
                  <p className="text-[#68766f] text-sm leading-[1.7] font-light flex-1 mb-4">
                    {categoryInfo[cat]?.desc ||
                      "Thoughtfully designed wellness experiences from Ivar."}
                  </p>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-[#8a938c] mb-4">
                    {count} {count === 1 ? "experience" : "experiences"}
                  </span>
                  <Link
                    href="/shop?group=Wellness"
                    className="text-ivar-green font-semibold text-xs tracking-wide hover:text-ivar-dark transition-colors"
                  >
                    Explore →
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-[70px] md:py-[90px] px-[6vw] bg-[#e9efe5] text-center">
        <Reveal>
          <h2 className="font-serif font-medium text-[28px] md:text-[36px] leading-[1.1] mb-5">
            Bringing wellness to your workplace
          </h2>
          <p className="text-[#68766f] leading-[1.9] font-light max-w-[560px] mx-auto mb-8">
            We work with teams and communities to bring Ivar's food, yoga and
            wellness offerings on-site — from corporate wellness days to
            recurring workplace programs.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-ivar-green"
          >
            Partner with Ivar
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
