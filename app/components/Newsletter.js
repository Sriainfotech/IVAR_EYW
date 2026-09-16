"use client";

import Reveal from "./Reveal";

export default function Newsletter() {
  function subscribe(e) {
    e.preventDefault();
    alert("Thank you — you are on the Ivar community list (demo).");
  }

  return (
    <section className="text-center py-[70px] md:py-[110px] px-5 bg-[#f4efe3]">
      <Reveal className="max-w-[560px] mx-auto">
        <p className="text-[11px] tracking-[0.3em] font-semibold text-ivar-green mb-4 uppercase">
          Join the Ivar Community
        </p>
        <h2 className="font-serif font-medium text-[36px] md:text-[44px] leading-[1.08] m-0">
          Better choices, one day at a time.
        </h2>
        <p className="text-[#6d7772] mt-3 font-light">
          Get product launches, healthy-living ideas and Ivar updates.
        </p>
        <form
          className="flex max-w-[480px] mx-auto mt-8"
          onSubmit={subscribe}
          suppressHydrationWarning
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="flex-1 border border-[#d6d8d0] px-5 py-4 rounded-l-full bg-white min-w-0 text-sm"
            suppressHydrationWarning
          />
          <button
            className="inline-flex justify-center items-center rounded-r-full px-7 py-4 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green"
            suppressHydrationWarning
          >
            Join
          </button>
        </form>
      </Reveal>
    </section>
  );
}
