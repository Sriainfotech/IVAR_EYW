export default function PageHeader({ title, subtitle, eyebrow }) {
  return (
    <section className="relative bg-ivar-cream py-10 md:py-14 px-[6vw] overflow-hidden">
      <div className="relative w-full max-w-[1320px] mx-auto text-center md:text-left">
        {eyebrow ? (
          <p className="text-xs tracking-[0.12em] font-semibold text-ivar-dark uppercase mb-3">{eyebrow}</p>
        ) : null}
        <h1 className="font-extrabold text-[40px] md:text-[64px] leading-[1.1] text-[#1A1A1A] m-0">{title}</h1>
        {subtitle ? (
          <p className="text-[#4B5563] mt-4 max-w-[640px] text-base md:text-lg leading-relaxed mx-auto md:mx-0">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
