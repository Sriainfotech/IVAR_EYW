import Link from "next/link";
import LineIcon from "./LineIcon";

const wrap = "max-w-[1500px] mx-auto px-[4vw]";

function PillLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 bg-ivar-forest text-white text-[12.5px] font-semibold rounded-full pl-5 pr-4 py-2.5 hover:bg-ivar-forestDeep transition-colors ${className}`}
    >
      {children} <LineIcon name="arrow" size={14} stroke={2.2} />
    </Link>
  );
}

export function CategoryCards() {
  const cards = [
    { title: "Ivar Foods", text: "Everyday foods for a healthier you", cta: "Explore Foods", href: "/shop", img: "/assets/hero-grain-bowl.jpg" },
    { title: "Ivar Processed Foods", text: "Traditional taste, modern convenience", cta: "Explore Processed Foods", href: "/shop", img: "/assets/products/eat/peanut-sesame-jaggery-bites.jpg" },
    { title: "Ivar Ingredients", text: "Pure ingredients for a better food world", cta: "Explore Ingredients", href: "/shop", img: "/assets/hero-veg-spices.jpg" },
  ];
  return (
    <section className={`${wrap} py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`}>
      {cards.map((c) => (
        <article key={c.title} className="relative overflow-hidden rounded-lg bg-ivar-beige min-h-[145px] border border-[#e6e3d6]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.img} alt="" aria-hidden="true" loading="lazy" className="absolute inset-y-0 right-0 w-[58%] h-full object-cover [mask-image:linear-gradient(to_right,transparent,#000_28%)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_28%)]" />
          <div className="relative p-6 max-w-[60%]">
            <h3 className="font-serif font-semibold text-[22px] md:text-[24px] leading-tight text-[#1c2a20] mb-2">{c.title}</h3>
            <p className="text-[13px] leading-snug text-[#33413a] mb-5">{c.text}</p>
            <PillLink href={c.href}>{c.cta}</PillLink>
          </div>
        </article>
      ))}
    </section>
  );
}

export function ProcessSteps() {
  const steps = [
    { n: 1, title: "Sourcing", text: "Naturally sourced ingredients from trusted farmers", img: "/assets/hero-veg-fruit-table.jpg" },
    { n: 2, title: "Processing", text: "Cleaned, processed and crafted with care", img: "/assets/hero-grain-bowl.jpg" },
    { n: 3, title: "Quality", text: "Strict quality checks at every stage", icon: "scope" },
    { n: 4, title: "Packaging", text: "Hygienic and sustainable packaging", icon: "box" },
    { n: 5, title: "To the World", text: "Nutritious foods for homes across the globe", icon: "truck" },
  ];
  return (
    <section className={`${wrap} py-12 md:py-16`}>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="font-serif font-semibold text-[28px] md:text-[32px] text-[#1c2a20] leading-tight">From Ingredients to Everyday Food</h2>
          <p className="text-[14px] text-[#4b564f]">A transparent and thoughtful process from nature to your table.</p>
        </div>
        <Link href="/story" className="text-[13px] text-ivar-forest font-medium inline-flex items-center gap-2 hover:underline">
          Learn More <LineIcon name="arrow" size={15} stroke={2} />
        </Link>
      </div>
      <ol className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-8 md:gap-2">
        {steps.map((s, i) => (
          <li key={s.n} className="flex md:flex-1 items-start md:items-center md:flex-col md:text-center gap-4 md:gap-0 relative">
            <div className="shrink-0 size-[96px] md:size-[104px] rounded-full overflow-hidden bg-gradient-to-br from-ivar-beige to-[#e3d9c1] flex items-center justify-center text-ivar-forest shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
              {s.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.img} alt="" loading="lazy" className="w-full h-full object-cover" />
              ) : (
                <LineIcon name={s.icon} size={52} stroke={1.3} />
              )}
            </div>
            <div className="md:mt-3 md:px-2">
              <h3 className="font-serif font-semibold text-[16px] text-[#1c2a20]">
                {s.n}. {s.title}
              </h3>
              <p className="text-[12.5px] leading-snug text-[#4b564f] mt-1 md:max-w-[170px] md:mx-auto">{s.text}</p>
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="hidden md:block absolute top-[42px] -right-[14px] text-[#33413a]">
                <LineIcon name="arrow" size={18} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function InnovationTrust() {
  const trust = [
    ["leaf", "Quality", "Focused"],
    ["shield", "Food Safety", "First"],
    ["link", "Traceable", "Supply Chain"],
    ["globe", "Responsible", "Sourcing"],
  ];
  return (
    <section className="mt-4 md:mt-8 grid grid-cols-1 lg:grid-cols-2">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#EEE6D5] via-[#F5F0E5] to-[#e6dcc4] px-[4vw] lg:pl-[max(4vw,calc((100vw-1500px)/2+4vw))] py-12 min-h-[240px]">
        <div aria-hidden="true" className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 text-ivar-forest/25">
          <LineIcon name="flask" size={180} stroke={0.8} />
        </div>
        <p
          aria-hidden="true"
          className="hidden md:block absolute right-[8%] top-6 w-[150px] font-script text-[24px] leading-none text-[#33413a] -rotate-[8deg]"
        >
          Food Innovation for a Better Tomorrow
        </p>
        <div className="relative max-w-[340px]">
          <h2 className="font-serif font-semibold text-[26px] md:text-[30px] leading-tight text-[#1c2a20]">
            Innovation for
            <br />A Healthier Tomorrow
          </h2>
          <p className="text-[13px] leading-snug text-[#33413a] mt-3 mb-5">
            Blending traditional wisdom with modern science to create nutritious, sustainable and great-tasting foods.
          </p>
          <PillLink href="/story">Our Innovation</PillLink>
        </div>
      </div>

      <div className="relative overflow-hidden bg-ivar-paper px-[4vw] lg:pr-[max(4vw,calc((100vw-1500px)/2+4vw))] py-10">
        <div aria-hidden="true" className="absolute -right-10 -top-10 text-ivar-forest/10 rotate-12">
          <LineIcon name="leaf" size={240} stroke={0.8} />
        </div>
        <h2 className="relative font-serif font-semibold text-[26px] md:text-[30px] leading-tight text-[#1c2a20]">
          Trusted Food.
          <br />A Brighter Tomorrow.
        </h2>
        <ul className="relative mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trust.map(([icon, a, b]) => (
            <li key={a} className="flex flex-col items-center text-center">
              <span className="size-14 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center mb-2">
                <LineIcon name={icon} size={26} />
              </span>
              <span className="text-[12.5px] leading-tight text-[#33413a]">
                {a}
                <br />
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function GlobalBand() {
  return (
    <section className="relative overflow-hidden bg-ivar-forestDeep text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.22) 1.4px, transparent 1.6px)",
          backgroundSize: "13px 13px",
          maskImage: "radial-gradient(ellipse 45% 70% at 40% 50%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 45% 70% at 40% 50%, #000 30%, transparent 75%)",
        }}
      />
      <svg aria-hidden="true" viewBox="0 0 600 160" className="absolute left-[24%] top-6 w-[42%] min-w-[280px] opacity-90 hidden md:block" fill="none">
        <path d="M60 110 Q160 10 280 70" stroke="#e5c56b" strokeWidth="1.2" strokeDasharray="4 4" />
        <path d="M280 70 Q380 20 500 60" stroke="#e5c56b" strokeWidth="1.2" strokeDasharray="4 4" />
        <path d="M280 70 Q330 130 470 120" stroke="#e5c56b" strokeWidth="1.2" strokeDasharray="4 4" />
        {[[60, 110], [280, 70], [500, 60], [470, 120]].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="4" fill="#f3d67a" />
        ))}
      </svg>

      <div className={`relative ${wrap} py-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-8 items-center`}>
        <div>
          <h2 className="font-serif font-semibold text-[28px] md:text-[32px] leading-tight">
            From India
            <br />
            To The World
          </h2>
          <p className="text-[13px] leading-snug text-[#d5e3d9] mt-3 mb-5 max-w-[300px]">
            Indian goodness. Global possibilities. We are on a mission to take the best of India&apos;s foods to homes across the world.
          </p>
          <Link href="/story" className="inline-flex items-center gap-3 bg-white text-ivar-forest text-[12.5px] font-semibold rounded-full pl-5 pr-4 py-2.5 hover:bg-[#F5F0E5] transition-colors">
            Our Global Vision <LineIcon name="arrow" size={14} stroke={2.2} />
          </Link>
        </div>
        <div className="hidden lg:block" />
        <div className="lg:pl-10">
          <h3 className="font-serif font-semibold text-[20px] leading-tight mb-4">
            Nourishing
            <br />
            People Across
            <br />
            Borders
          </h3>
          <div className="flex items-center gap-5">
            {[["1", "Purpose"], ["Many", "Communities"], ["A Healthier", "World"]].map(([a, b], i) => (
              <div key={b} className={`text-[12px] leading-tight ${i > 0 ? "border-l border-white/30 pl-5" : ""}`}>
                <p className="font-serif text-[18px]">{a}</p>
                <p className="text-[#d5e3d9]">{b}</p>
              </div>
            ))}
          </div>
          <p aria-hidden="true" className="hidden md:block font-script text-[26px] leading-none text-white/90 -rotate-[8deg] mt-6 ml-auto w-[190px]">
            Good Food. Stronger People. Brighter Tomorrows.
          </p>
        </div>
      </div>
    </section>
  );
}
