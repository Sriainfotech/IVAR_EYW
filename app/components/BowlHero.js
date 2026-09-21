import Link from "next/link";

const floaters = [
  { e: "🥑", cls: "top-[8%] left-[4%] text-5xl", d: "0s" },
  { e: "🍅", cls: "top-[14%] right-[46%] text-4xl", d: "0.6s" },
  { e: "🌿", cls: "bottom-[14%] left-[8%] text-4xl", d: "1.2s" },
  { e: "🍋", cls: "top-[6%] right-[6%] text-5xl", d: "0.3s" },
];

export default function BowlHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ivar-mint via-[#f6fbf4] to-[#fff6ef]">
      {floaters.map((f) => (
        <span
          key={f.e}
          aria-hidden="true"
          className={`hidden md:block absolute select-none opacity-90 ${f.cls}`}
          style={{ animation: "ivarAvocadoBob 3.4s ease-in-out infinite", animationDelay: f.d }}
        >
          {f.e}
        </span>
      ))}

      <div className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-block bg-white text-ivar-green text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full shadow-sm mb-5">
            Freshly made · High protein
          </span>
          <h1 className="font-extrabold text-[40px] md:text-[64px] leading-[1.04] text-ivar-dark mb-5">
            Fresh food.
            <br />
            <span className="text-ivar-coral">Good vibes.</span>
          </h1>
          <p className="text-base md:text-lg text-[#4d5f55] leading-relaxed max-w-[480px] mb-8">
            Protein-packed bowls, breakfast and everyday nutrition from Ivar — made with wholesome
            Indian ingredients, no preservatives.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/planner"
              className="bg-ivar-coral text-white font-semibold text-sm rounded-full px-7 py-3.5 shadow-[0_8px_20px_#ff6b4a44] hover:brightness-105 transition"
            >
              Start Your Meal Plan
            </Link>
            <Link
              href="/build"
              className="bg-ivar-dark text-white font-semibold text-sm rounded-full px-7 py-3.5 hover:bg-ivar-green transition-colors"
            >
              Build My Bowl
            </Link>
            <Link
              href="/plans"
              className="bg-white text-ivar-dark font-semibold text-sm rounded-full px-7 py-3.5 border border-[#d6e4d8] hover:border-ivar-dark transition-colors"
            >
              Subscribe Weekly
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-[520px] mx-auto rounded-full overflow-hidden shadow-[0_30px_60px_#0a3d2430] border-[10px] border-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/products/eat/egg-avocado-power-bowl.jpg"
              alt="Egg and avocado power bowl"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-2 right-2 md:right-6 bg-white rounded-2xl shadow-lg px-4 py-2.5 text-center">
            <p className="font-extrabold text-ivar-dark text-lg leading-none">28g+</p>
            <p className="text-[10px] text-[#6b7771] mt-1">protein</p>
          </div>
          <div className="absolute bottom-6 left-0 md:left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 text-center">
            <p className="font-extrabold text-ivar-coral text-lg leading-none">100%</p>
            <p className="text-[10px] text-[#6b7771] mt-1">no preservatives</p>
          </div>
        </div>
      </div>
    </section>
  );
}
