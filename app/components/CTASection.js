import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="bg-ivar-darker px-[6vw] py-16">
      <Reveal
        as="div"
        className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <h2 className="font-serif font-medium text-white text-[28px] md:text-[36px] leading-[1.15] m-0 max-w-[640px]">
          Ready to eat better, move better and live better?
        </h2>
        <a
          href="/shop"
          className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-white text-ivar-dark transition-transform duration-300 hover:scale-[1.03] shrink-0"
        >
          Shop Ivar
        </a>
      </Reveal>
    </section>
  );
}
