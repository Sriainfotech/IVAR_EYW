import RevealOnScroll from "../components/RevealOnScroll";
import ImageTextSection from "../components/ImageTextSection";
import ProcessTimeline from "../components/ProcessTimeline";
import DarkCTA from "../components/DarkCTA";

export const metadata = {
  title: "About — Ivar™",
  description: "From Indian roots to a better food future — the story, philosophy and process behind Ivar.",
  alternates: { canonical: "/story" },
};

const PILLARS = [
  { title: "Good Ingredients", text: "We start with what goes in — natural grains, real herbs and clean nutrition, sourced with care." },
  { title: "Thoughtful Products", text: "Every product is made with a purpose, not just a shelf life, designed around how people actually eat." },
  { title: "Honest Process", text: "Traceable sourcing, transparent processing and no shortcuts between farm and product." },
  { title: "Better Communities", text: "Good food works best when it's shared — with families, workplaces and the routines people build together." },
];

const METRICS = [
  { title: "Traceable Sourcing", text: "Every ingredient linked back to its region of origin." },
  { title: "No Artificial Additives", text: "Real ingredients, nothing synthetic added." },
  { title: "Quality Checked", text: "Checks at every stage, from sourcing to packing." },
  { title: "Sustainable Packaging", text: "Food-safe formats designed to reduce waste." },
];

const PROCESS_STEPS = [
  { n: "01", title: "Sourcing", text: "Naturally sourced Indian ingredients, from trusted growers and regions.", icon: "leaf" },
  { n: "02", title: "Formulation", text: "Traditional recipes reformulated with modern food science.", icon: "flask" },
  { n: "03", title: "Processing", text: "Careful processing that protects nutrition, taste and quality.", icon: "scope" },
  { n: "04", title: "Packaging", text: "Food-safe, sustainable packaging that keeps it fresh to your door.", icon: "box" },
];

export default function StoryPage() {
  return (
    <main>
      <section className="relative bg-ivar-ivory overflow-hidden min-h-[60vh] flex items-center">
        <div className="max-w-[760px] mx-auto px-[6vw] text-center">
          <RevealOnScroll y={20}>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">About Ivar</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-6">
              From Indian Roots to a Better Food Future.
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[540px] mx-auto">
              Ivar started with a simple observation: India&apos;s ingredients and food traditions deserved better,
              modern formats — without losing what made them good in the first place.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Our Philosophy</p>
            <h2 className="font-display text-editorial-section text-ivar-ink leading-[1.1]">
              The Pillars of Ivar.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PILLARS.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.08} className="border border-ivar-forest/12 rounded-xl p-6">
                <span className="font-display text-[24px] text-ivar-forest/40 block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-[15px] text-ivar-ink mb-2">{p.title}</h3>
                <p className="text-[13px] leading-relaxed text-ivar-muted">{p.text}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ImageTextSection
        img="/assets/hero-couple-cooking.jpg"
        imgAlt="Cooking with Ivar ingredients"
        imageSide="left"
        eyebrow="Our Story"
        title="Healthy Food, Made Practical."
        text="Ivar was built to bring India's ingredients, recipes and food traditions into modern formats for a new generation — one place for the everyday choices that add up to better eating."
        bg="bg-ivar-cream"
      />

      <section className="bg-ivar-cream py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw] grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">How We Work</p>
            <h2 className="font-display text-editorial-section text-ivar-ink leading-[1.1] max-w-[380px]">
              Decisions Backed by a Real Process.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {METRICS.map((m, i) => (
              <RevealOnScroll key={m.title} delay={i * 0.07} className="border-t border-ivar-forest/20 pt-4">
                <h3 className="font-semibold text-[15px] text-ivar-ink mb-1.5">{m.title}</h3>
                <p className="text-[13px] leading-relaxed text-ivar-muted">{m.text}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline eyebrow="Our Process" title="From farm to a healthier tomorrow." steps={PROCESS_STEPS} dark />

      <ImageTextSection
        img="/assets/hero-veg-fruit-table.jpg"
        imgAlt="Sustainable sourcing"
        imageSide="right"
        eyebrow="Quality & Sustainability"
        title="Trusted Food, Responsibly Made."
        text="We focus on eco-friendly materials, responsible sourcing and strict quality checks at every stage — keeping food safe and fresh while reducing our footprint."
        cta="Explore Packaging"
        ctaHref="/packaging"
        bg="bg-ivar-cream"
      />

      <DarkCTA
        img="/assets/hero-grain-bowl.jpg"
        eyebrow="Our Global Vision"
        title="Building a Brighter Food Future, Together."
        text="Ivar is a work in progress by design — we keep listening, reformulating and adding to the range based on how people actually use it."
        cta="Get in Touch"
        ctaHref="/contact"
        align="center"
      />
    </main>
  );
}
