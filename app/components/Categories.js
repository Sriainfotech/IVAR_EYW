import Reveal from "./Reveal";

const categories = [
  {
    n: "01",
    title: "Eat",
    desc: "Millets, breakfast, snacks, teas and everyday nutrition.",
    href: "/shop?group=Eat",
    cta: "Shop food →",
    img: "/assets/products/eat/multigrain-breakfast-mix.jpg",
  },
  {
    n: "02",
    title: "Yoga",
    desc: "Mats, blocks, straps and everyday yoga essentials.",
    href: "/shop?group=Yoga",
    cta: "Shop yoga →",
    img: "/assets/products/yoga/yoga-lifestyle.jpg",
    comingSoon: true,
  },
  {
    n: "03",
    title: "Wellness",
    desc: "Ayurvedic massage, therapies and holistic wellness experiences.",
    href: "/shop?group=Wellness",
    cta: "Explore wellness →",
    img: "/assets/products/wellness/ayurvedic-massage.jpg",
    comingSoon: true,
  },
];

export default function Categories() {
  return (
    <section className="max-w-[1440px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
      <Reveal className="mb-10">
        <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-3 uppercase">
          Explore Ivar
        </p>
        <h2 className="font-serif font-medium text-[32px] md:text-[38px] leading-[1.05] m-0">
          Eat. Yoga. Wellness.
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {categories.map((c, i) => (
          <Reveal key={c.n} delay={i * 90}>
            <a
              href={c.href}
              className="group block rounded-2xl overflow-hidden bg-white border border-[#e6e4dc] transition-shadow duration-300 hover:shadow-[0_18px_40px_#17312618] relative"
            >
              {c.comingSoon && (
                <span className="absolute top-3 right-3 z-10 bg-white/95 border border-[#e6e4dc] text-[#7d8983] text-[9px] font-bold tracking-[0.1em] uppercase rounded-full px-3 py-1.5 shadow-sm">
                  Coming Soon
                </span>
              )}
              <div className="h-[220px] overflow-hidden bg-[#eef1e8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] text-[#7d8e84]">{c.n}</span>
                <h3 className="font-serif text-2xl font-medium mt-2 mb-1.5">
                  {c.title}
                </h3>
                <p className="text-[#6b7771] text-[13px] leading-[1.6] min-h-[38px]">
                  {c.desc}
                </p>
                <span className="text-ivar-green font-semibold text-xs">
                  {c.cta}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
