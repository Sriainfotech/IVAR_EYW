import Reveal from "./Reveal";

const checklist = [
  {
    title: "Eat",
    desc: "Millets, breakfast, snacks, teas and everyday nutrition.",
  },
  {
    title: "Yoga",
    desc: "Mats, blocks, straps and everyday yoga essentials.",
  },
  {
    title: "Wellness",
    desc: "Ayurvedic massage, therapies and holistic wellness experiences.",
  },
];

export default function Feature() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] min-h-[560px]">
      <Reveal as="div" className="h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/breakfast.png"
          alt="Ivar breakfast inspiration"
          className="w-full h-full object-cover"
        />
      </Reveal>
      <Reveal
        as="div"
        delay={150}
        className="bg-[#e9efe5] px-6 md:px-[8vw] py-[50px] md:py-24 flex flex-col justify-center"
      >
        <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-4 uppercase">
          Morning, Made Better
        </p>
        <h2 className="font-serif font-medium text-[36px] md:text-[44px] leading-[1.08] m-0">
          Build a day you can feel good about.
        </h2>
        <ul className="mt-8 flex flex-col gap-6">
          {checklist.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-ivar-dark text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                ✓
              </span>
              <div>
                <h3 className="font-serif text-lg font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-[#68766f] text-sm leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <a
          className="text-ivar-green font-semibold text-xs mt-8 inline-block tracking-wide transition-colors duration-200 hover:text-ivar-dark"
          href="#shop"
        >
          Shop breakfast →
        </a>
      </Reveal>
    </section>
  );
}
