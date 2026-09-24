import Link from "next/link";
import LineIcon from "../components/LineIcon";

export const metadata = {
  title: "Innovation — Ivar™",
  description: "Food innovation, rooted in India.",
};

const PILLARS = [
  { title: "Traditional Wisdom", icon: "leaf" },
  { title: "Modern Food Science", icon: "flask" },
  { title: "Real World Products", icon: "bag" },
];

const CARDS = [
  { n: "01", title: "Traditional → Modern", text: "Converting traditional recipes into convenient modern formats.", icon: "leaf" },
  { n: "02", title: "Ingredients → Products", text: "Developing India's rich ingredients into scalable food products.", icon: "flask" },
  { n: "03", title: "Food → Technology", text: "Using food science, processing and packaging innovations.", icon: "scope" },
  { n: "04", title: "India → World", text: "Creating products for Indian and global markets.", icon: "globe" },
];

const JOURNEY = [
  { n: "01", title: "Ingredient Discovery", icon: "leaf" },
  { n: "02", title: "Research & Insights", icon: "search" },
  { n: "03", title: "Formulation", icon: "flask" },
  { n: "04", title: "Prototype", icon: "box" },
  { n: "05", title: "Testing", icon: "check" },
  { n: "06", title: "Packaging", icon: "bag" },
  { n: "07", title: "Market Launch", icon: "arrow" },
  { n: "08", title: "Scale & Grow", icon: "globe" },
];

const AMLA_STEPS = [
  { label: "Fresh Amla", img: "/assets/products/eat/immunity-shield.jpg" },
  { label: "Dried Amla", img: "/assets/products/eat/roasted-nuts.jpg" },
  { label: "Amla Candy", img: "/assets/products/eat/date-chocolate-protein-bites.jpg" },
  { label: "Amla Drink", img: "/assets/products/eat/turmeric-latte.jpg" },
  { label: "Amla Chutney", img: "/assets/products/eat/digest-ease.jpg" },
  { label: "Amla Pickle", img: "/assets/products/eat/roasted-chana-mix.jpg" },
];

const LAB_PILLARS = [
  { title: "Research", text: "Exploring ingredients & traditional knowledge", icon: "search" },
  { title: "Formulation", text: "Creating new recipes & product formats", icon: "flask" },
  { title: "Processing", text: "Modern techniques for better nutrition & taste", icon: "scope" },
  { title: "Validation", text: "Testing for quality, safety and shelf life", icon: "shield" },
];

const PACKAGING_BENEFITS = ["Freshness", "Protection", "Convenience", "Sustainable", "Better Tomorrow"];

export default function InnovationPage() {
  return (
    <main>
      <section className="relative bg-ivar-forest overflow-hidden min-h-[420px] md:min-h-[460px] flex items-center">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/hero-veg-spices.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivar-forest via-ivar-forest/85 to-ivar-forest/40" />
        </div>

        <p
          aria-hidden="true"
          className="hidden md:block absolute top-8 right-[6vw] w-[150px] text-right font-script text-[22px] leading-[1.05] text-white -rotate-[6deg] z-10"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
        >
          From Indian Roots to Global Opportunities
          <LineIcon name="leaf" size={16} stroke={1.6} className="ml-auto mt-1" />
        </p>

        <div className="relative max-w-[1320px] mx-auto px-[6vw] w-full">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">Innovation</p>
          <h1 className="font-display text-[34px] md:text-[50px] leading-[1.08] text-white mb-4">
            Food Innovation, <span className="text-ivar-sage">Rooted in India.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[480px] mb-7">
            We explore Indian ingredients, traditional recipes and modern food science to create new formats, flavours and food experiences for a healthier tomorrow.
          </p>
          <div className="flex flex-wrap items-center gap-5 mb-9">
            <Link href="/foods" className="inline-flex items-center gap-2 bg-ivar-sage text-ivar-ink font-semibold text-sm rounded-full px-6 py-3 hover:brightness-95 transition">
              Our Innovation Journey <LineIcon name="arrow" size={16} stroke={2} />
            </Link>
            <Link href="/story" className="inline-flex items-center gap-2.5 text-white font-semibold text-sm hover:text-ivar-sage transition-colors">
              <span className="size-8 rounded-full border border-white/50 flex items-center justify-center text-[10px]">▶</span>
              Watch Video
            </Link>
          </div>
          <div className="flex gap-8">
            {PILLARS.map((p) => (
              <div key={p.title} className="flex flex-col items-center text-center gap-2 max-w-[90px]">
                <span className="size-11 rounded-full border border-white/30 text-white flex items-center justify-center">
                  <LineIcon name={p.icon} size={18} stroke={1.6} />
                </span>
                <span className="text-[11px] leading-tight text-white/75">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CARDS.map((c) => (
          <div key={c.n} className="bg-ivar-cream rounded-2xl p-6">
            <span className="size-10 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center mb-4">
              <LineIcon name={c.icon} size={17} stroke={1.6} />
            </span>
            <p className="text-[11px] text-ivar-forest font-semibold mb-1">{c.n}</p>
            <h3 className="font-semibold text-[15px] text-ivar-ink mb-1.5">{c.title}</h3>
            <p className="text-[13px] leading-relaxed text-[#4b564f]">{c.text}</p>
          </div>
        ))}
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] pb-14 md:pb-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">Our Product Development Journey</h2>
          <span className="hidden sm:inline text-[11px] tracking-[0.15em] uppercase text-ivar-forest font-semibold shrink-0">
            Idea to Impact ›
          </span>
        </div>
        <div className="flex items-start overflow-x-auto no-scrollbar gap-1 pb-2">
          {JOURNEY.map((j, i) => (
            <div key={j.n} className="flex items-center shrink-0">
              <div className="flex flex-col items-center text-center w-[110px]">
                <span className="size-14 rounded-full bg-ivar-cream border border-ivar-forest/30 text-ivar-forest flex items-center justify-center mb-2">
                  <LineIcon name={j.icon} size={20} stroke={1.6} />
                </span>
                <p className="text-[11px] text-ivar-forest font-semibold">{j.n}</p>
                <p className="text-[12.5px] font-medium text-ivar-ink leading-tight">{j.title}</p>
              </div>
              {i < JOURNEY.length - 1 && <span className="text-ivar-sage mx-1 mb-8" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-ivar-cream py-14 md:py-20 overflow-hidden">
        <p
          aria-hidden="true"
          className="hidden lg:block absolute top-8 right-[6vw] w-[160px] text-right font-script text-[22px] leading-[1.05] text-ivar-forest/70 -rotate-[6deg]"
        >
          One Ingredient
          <br />
          Many Opportunities
        </p>
        <div className="max-w-[1320px] mx-auto px-[6vw] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-[380px]">
            <h2 className="font-display text-[24px] md:text-[30px] text-ivar-ink leading-tight mb-3">
              From a Simple Ingredient to Multiple Possibilities
            </h2>
            <p className="text-[13.5px] leading-relaxed text-[#4b564f] mb-6">
              One ingredient. Many products. Greater possibilities for a healthier tomorrow.
            </p>
            <Link href="/ingredients/amla" className="inline-flex items-center gap-2 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-ivar-forestDeep transition-colors">
              Explore Amla Innovations <LineIcon name="arrow" size={16} stroke={2} />
            </Link>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
            {AMLA_STEPS.map((s, i) => (
              <div key={s.label} className="flex items-center shrink-0">
                <div className="flex flex-col items-center text-center w-[92px]">
                  <div className="size-20 rounded-full overflow-hidden mb-2 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.label} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[11.5px] font-medium text-ivar-ink leading-tight">{s.label}</p>
                </div>
                {i < AMLA_STEPS.length - 1 && <span className="text-ivar-forest/40 mx-1 mb-8" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-ivar-forest overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_0.8fr] gap-6 items-center">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">Ivar Food Innovation Lab</p>
            <h2 className="font-display text-[26px] md:text-[34px] leading-tight text-white mb-4">
              Where Tradition Meets Innovation
            </h2>
            <p className="text-white/65 text-[13.5px] leading-relaxed mb-6 max-w-[320px]">
              Our innovation lab works on new products, flavours, formats and processing techniques to bring the best of Indian food to modern consumers.
            </p>
            <Link href="/contact?type=innovation" className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
              Learn More <LineIcon name="arrow" size={16} stroke={2} />
            </Link>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
            {LAB_PILLARS.map((p) => (
              <div key={p.title} className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 hover:border-white/30 hover:-translate-y-1 transition-all">
                <span className="size-9 rounded-full border border-white/25 text-white flex items-center justify-center mb-3">
                  <LineIcon name={p.icon} size={16} stroke={1.6} />
                </span>
                <h3 className="font-semibold text-[13px] text-white mb-1">{p.title}</h3>
                <p className="text-[10.5px] leading-relaxed text-white/55">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hero-veg-spices.jpg" alt="Food science research" className="w-full h-full object-cover" />
            <p
              aria-hidden="true"
              className="absolute bottom-4 right-4 w-[100px] text-right font-script text-[15px] leading-[1.05] text-white -rotate-[6deg]"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}
            >
              Science for a Healthier Tomorrow
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivar-cream py-14 md:py-20">
        <div className="max-w-[1320px] mx-auto px-[6vw] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-display text-[24px] md:text-[30px] text-ivar-ink leading-tight mb-2">
              Innovative Packaging for Better Food
            </h2>
            <p className="text-[13.5px] leading-relaxed text-[#4b564f] mb-6 max-w-[420px]">
              Packaging protects freshness, enhances convenience and brings great food to more people.
            </p>
            <Link href="/packaging" className="inline-flex items-center gap-2 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-ivar-forestDeep transition-colors mb-8">
              Explore Packaging Solutions <LineIcon name="arrow" size={16} stroke={2} />
            </Link>
            <div className="relative aspect-[16/7] rounded-2xl overflow-hidden mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/products/eat/crunchy-nutrition.jpg" alt="Ivar packaging" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {PACKAGING_BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="size-8 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center shrink-0">
                    <LineIcon name="leaf" size={13} stroke={1.6} />
                  </span>
                  <span className="text-[12.5px] font-medium text-ivar-ink">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/packaging"
            className="group hidden lg:flex flex-col justify-between w-[190px] h-[220px] bg-ivar-mint rounded-2xl p-6"
          >
            <LineIcon name="leaf" size={26} stroke={1.4} className="text-ivar-forest" />
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wide text-ivar-forest leading-snug mb-2">
                Sustainable Packaging for a Brighter Tomorrow
              </p>
              <span className="inline-flex items-center gap-1.5 text-ivar-forest text-[12px] font-semibold transition-transform group-hover:translate-x-1">
                <LineIcon name="arrow" size={13} stroke={2.2} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="relative bg-ivar-forest overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/hero-grain-bowl.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[6vw] py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="font-display italic text-[24px] md:text-[32px] text-white">
            Good Food. A Brighter Tomorrow.
          </h2>
          <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 border border-white/50 text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
            Partner with Ivar <LineIcon name="arrow" size={16} stroke={2} />
          </Link>
        </div>
      </section>
    </main>
  );
}
