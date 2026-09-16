import Reveal from "./Reveal";

export default function Wellness() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] min-h-[560px] bg-[#e9efe5]"
      id="wellness"
    >
      <Reveal as="div" className="min-h-[350px] md:min-h-[560px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/wellness.png"
          alt="Ivar wellness experiences"
          className="w-full h-full object-cover"
        />
      </Reveal>
      <Reveal
        as="div"
        delay={150}
        className="px-6 md:px-[8vw] py-[50px] md:py-24 flex flex-col justify-center"
      >
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green uppercase m-0">
            Ivar Wellness
          </p>
          <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#7d8983] bg-white border border-[#d6ddd7] rounded-full px-2.5 py-1">
            Coming Soon
          </span>
        </div>
        <h2 className="font-serif font-medium text-[36px] md:text-[44px] leading-[1.08] m-0">
          Wellness is more than a product.
        </h2>
        <p className="text-[#68766f] leading-[1.85] max-w-[530px] mt-4 font-light">
          Explore yoga, relaxation, wellness programs and future Ivar
          experiences designed around balance and everyday wellbeing.
        </p>
        <a
          className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white w-max mt-6 transition-transform duration-300 hover:scale-[1.03] hover:bg-ivar-green"
          href="/contact"
        >
          Partner with Ivar
        </a>
      </Reveal>
    </section>
  );
}
