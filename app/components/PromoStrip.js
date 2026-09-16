import Reveal from "./Reveal";

const items = [
  {
    icon: "🌿",
    title: "Thoughtfully Made",
    desc: "Every Ivar product is made with care, using natural and Indian-inspired ingredients.",
  },
  {
    icon: "🌾",
    title: "Nature Inspired",
    desc: "Millets, whole grains and everyday nutrition inspired by nature and modern lifestyles.",
  },
  {
    icon: "🧘",
    title: "Everyday Wellness",
    desc: "Food, movement and mindful living brought together under one simple idea.",
  },
];

export default function PromoStrip() {
  return (
    <section className="bg-[#eef2e8] py-14 px-[6vw]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-serif text-xl font-medium mb-2">
              {item.title}
            </h3>
            <p className="text-[#6b7771] text-sm leading-[1.6] max-w-[280px] mx-auto">
              {item.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
