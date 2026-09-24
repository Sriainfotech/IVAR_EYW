export default function PageHeader({ title, subtitle, eyebrow, img }) {
  return (
    <section className="relative bg-ivar-forest overflow-hidden min-h-[420px] md:min-h-[460px] flex items-center mb-8 md:mb-12">
      {img ? (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivar-forest via-ivar-forest/85 to-ivar-forest/40" />
        </div>
      ) : null}
      <div className="relative w-full max-w-[1320px] mx-auto px-[6vw] text-center md:text-left">
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
