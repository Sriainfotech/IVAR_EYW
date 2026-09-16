import Reveal from "./Reveal";

export default function CommunityInitiative() {
  return (
    <section className="bg-[#eef2e8] px-[6vw] py-16">
      <Reveal
        as="div"
        className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="max-w-[640px]">
          <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-3 uppercase">
            Ivar Cares
          </p>
          <h2 className="font-serif font-medium text-[28px] md:text-[34px] leading-[1.15] m-0">
            Better communities, one drive at a time.
          </h2>
          <p className="text-[#68766f] leading-[1.7] mt-3 font-light">
            Beyond food and wellness, Ivar supports community health
            initiatives like blood donation drives — because wellness isn't
            just personal, it's collective.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex justify-center items-center rounded-full px-8 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-ivar-green shrink-0"
        >
          Register as a Donor
        </a>
      </Reveal>
    </section>
  );
}
