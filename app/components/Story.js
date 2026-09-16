import Reveal from "./Reveal";

const pillars = [
  {
    title: "Good ingredients",
    desc: "Natural grains, real herbs, clean nutrition.",
    img: "/assets/products/eat/chia-seeds.jpg",
  },
  {
    title: "Thoughtful products",
    desc: "Made around how people actually live.",
    img: "/assets/hero-grain-bowl.jpg",
  },
  {
    title: "Healthy habits",
    desc: "Small choices, built for the everyday.",
    img: "/assets/hero-soups.jpg",
  },
  {
    title: "Better communities",
    desc: "Wellness shared — at home, at work.",
    img: "/assets/hero-smiling-man.jpg",
  },
];

export default function Story() {
  return (
    <section className="bg-white py-[70px] md:py-[100px] px-[6vw]" id="story">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="max-w-[640px] mb-12 md:mb-14">
          <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-4 uppercase">
            Why Ivar
          </p>
          <h2 className="font-serif font-medium text-[36px] md:text-[46px] leading-[1.08] m-0">
            From nature to everyday life.
          </h2>
          <p className="text-[#68766f] leading-[1.85] mt-4 font-light">
            Ivar brings food, movement and wellness together under one simple
            idea: make healthy living more practical, enjoyable and
            accessible.
          </p>
          <a
            href="/shop"
            className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white w-max mt-7 transition-transform duration-300 hover:scale-[1.03] hover:bg-ivar-green"
          >
            Browse Our Foods
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[520px]">
          <Reveal
            as="div"
            className="group md:row-span-2 rounded-3xl overflow-hidden relative min-h-[280px] md:min-h-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-friends-cooking.jpg"
              alt="Ivar community, cooking and eating together"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ivar-darker/85 via-ivar-darker/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 text-white">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#a9dcc0] mb-2">
                Our Ecosystem
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-medium leading-[1.2]">
                One brand, every part of your day.
              </h3>
            </div>
          </Reveal>

          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="group relative rounded-3xl overflow-hidden min-h-[150px] flex flex-col justify-end"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivar-darker/90 via-ivar-darker/40 to-ivar-darker/5 transition-colors duration-300 group-hover:from-ivar-darker/95" />
              <span className="relative z-10 w-7 h-7 mx-6 mb-3 md:mx-7 rounded-full bg-white/15 backdrop-blur text-white flex items-center justify-center text-[11px] font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative z-10 px-6 md:px-7 font-serif text-lg md:text-xl font-medium mb-1.5 text-white">
                {p.title}
              </h3>
              <p className="relative z-10 px-6 md:px-7 pb-6 md:pb-7 text-[#dce8e1] text-xs md:text-sm leading-[1.6] font-light">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
