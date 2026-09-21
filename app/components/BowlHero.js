import Link from "next/link";
import { products } from "../data/products";
import ChatCta from "./ChatCta";

const eat = products.filter((p) => p.group === "Eat");
const maxProtein = Math.max(...eat.map((p) => p.nutrition?.proteinG ?? 0));

export default function BowlHero() {
  return (
    <section className="relative overflow-hidden bg-ivar-cream">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-ivar-mint opacity-70"
      />
      <div className="relative max-w-[1320px] mx-auto px-[6vw] py-12 md:py-20 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm text-[#4B5563] mb-5">
            <span aria-hidden="true">🌱</span> Fresh food · Made daily
          </span>
          <h1 className="font-extrabold text-[44px] md:text-[68px] leading-[1.1] mb-5">
            <span className="text-[#1A1A1A]">Fresh food.</span>
            <br />
            <span className="text-ivar-dark">Good vibes.</span>
          </h1>
          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed max-w-[500px] mb-8">
            Protein-packed bowls, breakfast and everyday nutrition crafted with wholesome Indian ingredients — for
            creators, gym-goers and everyone who eats with intention.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link
              href="/planner"
              className="bg-ivar-dark text-white font-semibold rounded-3xl px-8 py-3 hover:bg-ivar-darker hover:-translate-y-0.5 transition-all"
            >
              Start Your Meal Plan ✨
            </Link>
            <Link
              href="/build"
              className="bg-white border-2 border-ivar-dark text-ivar-dark font-semibold rounded-3xl px-8 py-3 hover:bg-ivar-cream transition-colors"
            >
              Build My Box
            </Link>
          </div>
          <Link href="/plans" className="text-sm text-[#4B5563] hover:text-ivar-dark underline underline-offset-4">
            Subscribe Weekly
          </Link>

          <div className="mt-8 flex">
            <div className="inline-flex items-center gap-3 bg-white border border-[#D0D8DC] rounded-3xl px-5 py-3">
              <span aria-hidden="true">🍴</span>
              <p className="text-xs font-bold tracking-wide uppercase text-[#1A1A1A]">
                {eat.length}+ products · up to {maxProtein}g protein
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-[500px] mx-auto rounded-2xl overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/products/eat/egg-avocado-power-bowl.jpg"
              alt="Egg and avocado power bowl"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-0 md:-right-4">
            <ChatCta />
          </div>
        </div>
      </div>
    </section>
  );
}
