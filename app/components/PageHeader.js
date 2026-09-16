export default function PageHeader({ title, subtitle, img }) {
  return (
    <section className="relative bg-ivar-darker text-white min-h-[320px] md:min-h-[420px] flex items-center py-[70px] md:py-[90px] px-[6vw] overflow-hidden">
      {img ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivar-darker/90 via-ivar-darker/75 to-ivar-darker/55" />
        </>
      ) : (
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #ffffff 0, transparent 45%), radial-gradient(circle at 80% 70%, #ffffff 0, transparent 40%)",
          }}
        />
      )}
      <div className="relative w-full max-w-[1440px] mx-auto text-center">
        <h1 className="font-serif font-medium text-[38px] md:text-[48px] leading-[1.05] m-0">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-[#c9d8cf] mt-4 max-w-[560px] mx-auto font-light">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
