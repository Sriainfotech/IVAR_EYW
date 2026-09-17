import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Our Story — Ivar",
  description:
    "Why Ivar exists — bringing food, movement and wellness together under one simple idea: healthy living made practical, enjoyable and accessible.",
  alternates: { canonical: "/story" },
};

const pillars = [
  {
    title: "Good ingredients",
    desc: "We start with what goes in — natural grains, real herbs and clean nutrition, sourced with care.",
  },
  {
    title: "Thoughtful products",
    desc: "Every product is made with a purpose, not just a shelf life — designed around how people actually eat, move and unwind.",
  },
  {
    title: "Healthy habits",
    desc: "Small, repeatable choices compound into real wellbeing — so we build for the everyday, not the occasional.",
  },
  {
    title: "Better communities",
    desc: "Wellness works best when it's shared — with family, at work, and in the routines we build together.",
  },
];

const focus = [
  {
    label: "Eat",
    desc: "Wholesome breakfasts, snacks and everyday foods rooted in Indian grains and modern nutrition science.",
    href: "/shop",
  },
];

export default function StoryPage() {
  return (
    <main>
      <PageHeader
        title="Our Story"
        subtitle="From nature to everyday life."
        img="/assets/hero-friends-cooking.jpg"
      />

      <section className="max-w-[900px] mx-auto px-[6vw] py-[70px] md:py-[90px] text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-4 uppercase">
            Why Ivar
          </p>
          <h2 className="font-serif font-medium text-[32px] md:text-[42px] leading-[1.1] mb-6">
            Healthy living shouldn&apos;t feel like a project.
          </h2>
          <p className="text-[#68766f] leading-[1.9] font-light text-lg">
            Ivar started with a simple observation: food, movement and
            wellness are usually treated as separate categories, sold by
            separate brands, with separate routines to keep up. We built Ivar
            to bring them together — one place for the everyday choices that
            actually add up to a healthier life.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-[70px] md:py-[90px] px-[6vw]">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-4 uppercase">
              What We Believe
            </p>
            <h2 className="font-serif font-medium text-[32px] md:text-[40px] leading-[1.1]">
              The four ideas behind every product.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="bg-[#f4f6f1] rounded-2xl p-7 md:p-8"
              >
                <span className="w-9 h-9 rounded-full bg-ivar-green/10 text-ivar-green flex items-center justify-center text-sm font-semibold mb-4">
                  {i + 1}
                </span>
                <h3 className="font-serif text-xl font-medium mb-2">
                  {p.title}
                </h3>
                <p className="text-[#68766f] text-sm leading-[1.7] font-light">
                  {p.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[70px] md:py-[90px] px-[6vw] bg-[#e9efe5]">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-4 uppercase">
              What We Make
            </p>
            <h2 className="font-serif font-medium text-[32px] md:text-[40px] leading-[1.1]">
              Eat.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 max-w-[420px] mx-auto gap-6">
            {focus.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 90}
                className="bg-white rounded-2xl p-8 flex flex-col"
              >
                <h3 className="font-serif text-2xl font-medium mb-2">
                  {f.label}
                </h3>
                <p className="text-[#68766f] text-sm leading-[1.7] font-light flex-1">
                  {f.desc}
                </p>
                <Link
                  href={f.href}
                  className="text-ivar-green font-semibold text-xs tracking-wide mt-5 hover:text-ivar-dark transition-colors"
                >
                  Shop {f.label} →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[70px] md:py-[90px] px-[6vw] text-center">
        <Reveal>
          <h2 className="font-serif font-medium text-[28px] md:text-[36px] leading-[1.1] mb-5">
            Building this with us
          </h2>
          <p className="text-[#68766f] leading-[1.9] font-light max-w-[560px] mx-auto mb-8">
            Ivar is a work in progress by design — we keep listening,
            reformulating and adding to the range based on how people actually
            use it. If something's missing, we'd like to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-ivar-green"
          >
            Get in Touch
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
