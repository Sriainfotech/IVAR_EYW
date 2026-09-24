import Link from "next/link";
import LineIcon from "../components/LineIcon";

export const metadata = {
  title: "Packaging — Ivar™",
  description: "Packaging is part of the food.",
};

const PRINCIPLES = [
  { title: "Protection & Safety", icon: "shield" },
  { title: "Freshness & Shelf Life", icon: "leaf" },
  { title: "Convenience & Portability", icon: "bag" },
  { title: "Better Brand Experience", icon: "heart" },
];

const SOLUTIONS = [
  { title: "Flexible Pouches", text: "Stand-up pouches, zipper pouches, retort pouches and more.", img: "/assets/products/eat/makhana-crunch.jpg" },
  { title: "Sachets & Portion Packs", text: "Small packs for convenience and on-the-go consumption.", img: "/assets/products/eat/trail-mix.jpg" },
  { title: "Jars & Bottles", text: "Ideal for chutneys, beverages, spreads and pickles.", img: "/assets/products/eat/turmeric-latte.jpg" },
  { title: "Cups & Bowls", text: "Perfect for ready-to-eat and ready-to-cook foods.", img: "/assets/products/eat/classic-oats-bowl.jpg" },
  { title: "Cartons & Boxes", text: "Sturdy and attractive packaging for retail and export.", img: "/assets/products/eat/millet-pancakes.jpg" },
];

const SUSTAIN = [
  { title: "Eco-friendly Materials", icon: "leaf" },
  { title: "Reduce Waste", icon: "box" },
  { title: "Sustainable Sourcing", icon: "shield" },
  { title: "Designed for a Greener Future", icon: "globe" },
];

const PROCESS = [
  { n: "01", title: "Understand Product Need", icon: "search" },
  { n: "02", title: "Material Selection", icon: "leaf" },
  { n: "03", title: "Design & Prototyping", icon: "scope" },
  { n: "04", title: "Testing & Validation", icon: "shield" },
  { n: "05", title: "Production", icon: "box" },
  { n: "06", title: "Delivery & Support", icon: "truck" },
];

const CATEGORIES = [
  { title: "Snacks", img: "/assets/products/eat/makhana-crunch.jpg" },
  { title: "Beverages", img: "/assets/products/eat/turmeric-latte.jpg" },
  { title: "Traditional Foods", img: "/assets/products/eat/digest-ease.jpg" },
  { title: "Ready to Cook", img: "/assets/products/eat/millet-mix.jpg" },
  { title: "Ready to Eat", img: "/assets/products/eat/classic-oats-bowl.jpg" },
  { title: "Frozen Foods", img: "/assets/products/eat/millet-pancakes.jpg" },
];

export default function PackagingPage() {
  return (
    <main>
      <section className="relative bg-ivar-forest overflow-hidden min-h-[420px] md:min-h-[460px] flex items-center">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/products/eat/makhana-crunch.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivar-forest via-ivar-forest/85 to-ivar-forest/40" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[6vw] w-full">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">Packaging Solutions</p>
          <h1 className="font-display text-[34px] md:text-[50px] leading-[1.08] text-white mb-4">
            Packaging Is Part <span className="text-ivar-sage">of the Food.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[480px] mb-7">
            Innovative, safe and sustainable packaging solutions to protect freshness, enhance convenience and bring great food to more people.
          </p>
          <Link href="/contact?type=packaging" className="inline-flex items-center gap-2 bg-ivar-sage text-ivar-ink font-semibold text-sm rounded-full px-6 py-3 hover:brightness-95 transition mb-9">
            Explore Packaging Solutions <LineIcon name="arrow" size={16} stroke={2} />
          </Link>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-[520px]">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="flex flex-col items-center text-center gap-2">
                <span className="size-11 rounded-full border border-white/30 text-white flex items-center justify-center">
                  <LineIcon name={p.icon} size={18} stroke={1.6} />
                </span>
                <span className="text-[11px] leading-tight text-white/75">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-2">Our Packaging Solutions</h2>
            <p className="text-[13.5px] text-[#4b564f] max-w-[520px]">
              A wide range of flexible and rigid packaging formats for food products, designed for safety, shelf life and modern consumer needs.
            </p>
          </div>
          <Link href="/contact?type=packaging" className="hidden sm:inline-flex shrink-0 items-center gap-2 border border-ivar-forest text-ivar-forest font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-ivar-cream transition-colors">
            Discuss Your Packaging Needs
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-ivar-cream mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-semibold text-[13.5px] text-ivar-ink mb-1">{s.title}</h3>
              <p className="text-[11.5px] leading-relaxed text-[#4b564f]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivar-cream py-12 md:py-16">
        <div className="max-w-[1320px] mx-auto px-[6vw] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-display text-[24px] md:text-[30px] text-ivar-ink mb-2">Sustainable Packaging for a Brighter Tomorrow</h2>
            <p className="text-[13.5px] leading-relaxed text-[#4b564f] max-w-[460px]">
              We focus on eco-friendly materials, responsible sourcing and innovative formats to reduce environmental impact while keeping food safe and fresh.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {SUSTAIN.map((s) => (
              <div key={s.title} className="flex flex-col items-center text-center gap-2 w-[100px]">
                <span className="size-12 rounded-full bg-white text-ivar-forest flex items-center justify-center">
                  <LineIcon name={s.icon} size={20} stroke={1.6} />
                </span>
                <span className="text-[11px] leading-tight text-ivar-ink font-medium">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">Our Packaging Process</h2>
          <Link href="/contact?type=packaging" className="hidden sm:inline text-[13px] text-ivar-forest font-medium hover:underline shrink-0">
            From Concept to Shelf →
          </Link>
        </div>
        <div className="flex items-start overflow-x-auto no-scrollbar gap-1 pb-2">
          {PROCESS.map((p, i) => (
            <div key={p.n} className="flex items-center shrink-0">
              <div className="flex flex-col items-center text-center w-[120px]">
                <span className="size-14 rounded-full bg-ivar-cream border border-ivar-forest/30 text-ivar-forest flex items-center justify-center mb-2">
                  <LineIcon name={p.icon} size={20} stroke={1.6} />
                </span>
                <p className="text-[11px] text-ivar-forest font-semibold">{p.n}</p>
                <p className="text-[12.5px] font-medium text-ivar-ink leading-tight">{p.title}</p>
              </div>
              {i < PROCESS.length - 1 && <span className="text-ivar-sage mx-1 mb-8" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivar-cream py-14 md:py-20">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-2">Packaging for Every Food Category</h2>
          <p className="text-[13.5px] text-[#4b564f] max-w-[520px] mb-8">
            From snacks and beverages to traditional foods and frozen products, we offer packaging solutions tailored to your product.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {CATEGORIES.map((c) => (
              <div key={c.title} className="text-center">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="text-[12.5px] font-medium text-ivar-ink">{c.title}</p>
              </div>
            ))}
          </div>
          <Link href="/foods" className="inline-flex items-center gap-2 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-ivar-forestDeep transition-colors">
            View Packaging Solutions <LineIcon name="arrow" size={16} stroke={2} />
          </Link>
        </div>
      </section>

      <section className="relative bg-ivar-forest overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/hero-grain-bowl.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[6vw] py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-[24px] md:text-[30px] text-white mb-1">Let&apos;s Create Packaging Solutions Together</h2>
            <p className="text-white/65 text-[14px]">Partner with Ivar for innovative, safe and sustainable packaging solutions for your food products.</p>
          </div>
          <Link href="/contact?type=packaging" className="shrink-0 inline-flex items-center gap-2 bg-white text-ivar-forest font-semibold text-sm rounded-full px-7 py-3.5 hover:bg-ivar-sage transition-colors">
            Partner with Us <LineIcon name="arrow" size={16} stroke={2} />
          </Link>
        </div>
      </section>
    </main>
  );
}
