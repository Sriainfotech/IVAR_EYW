export default function PageHeader({ title, subtitle, eyebrow }) {
  return (
    <section className="relative bg-ivar-forest py-12 md:py-16 px-[6vw] overflow-hidden mb-8 md:mb-12">
      <div className="relative w-full max-w-[1320px] mx-auto text-center md:text-left">
        {eyebrow ? (
          <p className="text-xs tracking-[0.2em] font-semibold text-ivar-sage uppercase mb-3">{eyebrow}</p>
        ) : null}
        <h1 className="font-display text-[36px] md:text-[58px] leading-[1.1] text-white m-0">{title}</h1>
        {subtitle ? (
          <p className="text-white/65 mt-4 max-w-[640px] text-base md:text-lg leading-relaxed mx-auto md:mx-0">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
