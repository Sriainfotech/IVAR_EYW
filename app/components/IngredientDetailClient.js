"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LineIcon from "./LineIcon";
import FAQAccordion from "./FAQAccordion";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "applications", label: "Applications" },
  { id: "products", label: "Our Products" },
  { id: "sourcing", label: "Sourcing" },
  { id: "faqs", label: "FAQs" },
];

function VideoModal({ ing, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 animate-[fadeIn_0.25s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${ing.name} story`}
    >
      <div
        className="relative w-full max-w-[900px] aspect-video rounded-2xl overflow-hidden bg-ivar-forest"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ing.img} alt={ing.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ivar-ink/40 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/80 text-sm">Video coming soon — for now, here&apos;s a look at {ing.name}.</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-4 right-4 size-9 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer"
          suppressHydrationWarning
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function IngredientDetailClient({ ing }) {
  const [active, setActive] = useState("overview");
  const [videoOpen, setVideoOpen] = useState(false);
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    TABS.forEach((t) => {
      const el = refs.current[t.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function scrollTo(id) {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const benefits = ing.benefits || [];
  const products = ing.products || [];

  return (
    <>
      <nav className="sticky top-[68px] z-20 bg-white/95 backdrop-blur border-b border-[#ece8da]">
        <div className="max-w-[1320px] mx-auto px-[6vw] flex gap-6 overflow-x-auto no-scrollbar">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => scrollTo(t.id)}
              className={`shrink-0 py-4 text-[13.5px] font-medium border-b-2 transition-colors cursor-pointer ${
                active === t.id ? "border-ivar-forest text-ivar-forest" : "border-transparent text-[#4b564f] hover:text-ivar-ink"
              }`}
              suppressHydrationWarning
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <section
        id="overview"
        ref={(el) => (refs.current.overview = el)}
        className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        <button
          onClick={() => setVideoOpen(true)}
          className="group relative aspect-[4/3] rounded-2xl overflow-hidden block w-full cursor-pointer"
          aria-label={`Watch ${ing.name} story`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ing.img} alt={ing.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-ivar-ink/25 flex flex-col items-center justify-center gap-3 text-white">
            <span className="size-16 rounded-full bg-white/90 text-ivar-forest flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <LineIcon name="arrow" size={22} stroke={2} />
            </span>
            <p className="font-display text-lg">From Nature to a Healthier Tomorrow</p>
            <p className="text-[12.5px] uppercase tracking-wide text-white/80">Watch Our Story</p>
          </div>
        </button>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Overview</p>
          <h2 className="font-display text-[28px] md:text-[36px] text-ivar-ink mb-4">A Precious Gift from Nature</h2>
          <p className="text-[15px] leading-relaxed text-[#4b564f] mb-6">{ing.overview || ing.description}</p>
          <p className="text-[12px] uppercase tracking-wide text-[#8a938c] mb-2">Origin</p>
          <p className="text-[14px] text-ivar-ink font-medium">{ing.origin}</p>
        </div>
      </section>

      {benefits.length > 0 && (
        <section id="benefits" ref={(el) => (refs.current.benefits = el)} className="bg-ivar-cream py-14 md:py-20">
          <div className="max-w-[1320px] mx-auto px-[6vw]">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Key Benefits</p>
            <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-8 max-w-[440px]">Small Ingredient. Big Benefits.</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl p-6 text-center transition-transform hover:-translate-y-1">
                  <span className="size-11 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center mx-auto mb-3">
                    <LineIcon name={b.icon} size={18} stroke={1.6} />
                  </span>
                  <p className="text-[13px] font-medium text-ivar-ink">{b.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {ing.applications && (
        <section id="applications" ref={(el) => (refs.current.applications = el)} className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Applications</p>
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-2 max-w-[440px]">One Ingredient. Many Possibilities.</h2>
          <p className="text-[13.5px] text-[#4b564f] max-w-[520px] mb-8">
            {ing.name} can be used across a variety of food and beverage applications, from traditional recipes to modern formats.
          </p>
          <div className="flex flex-wrap gap-4">
            {ing.applications.map((a) => (
              <span key={a} className="bg-ivar-cream text-ivar-ink text-sm font-medium rounded-full px-5 py-2.5">
                {a}
              </span>
            ))}
          </div>
        </section>
      )}

      {products.length > 0 && (
        <section id="products" ref={(el) => (refs.current.products = el)} className="bg-ivar-cream py-14 md:py-20">
          <div className="max-w-[1320px] mx-auto px-[6vw]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Our {ing.name} Products</p>
                <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">Innovative Formats for Modern Lifestyles</h2>
              </div>
              <Link href="/foods" className="hidden sm:inline text-[13px] text-ivar-forest font-medium hover:underline shrink-0">
                View All Products →
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((p) => (
                <div key={p.name} className="group">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-[13.5px] text-ivar-ink">{p.name}</h3>
                      <p className="text-[11.5px] text-[#4b564f]">{p.text}</p>
                    </div>
                    <LineIcon name="arrow" size={14} stroke={2} className="text-ivar-forest shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="sourcing" ref={(el) => (refs.current.sourcing = el)} className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Sourcing</p>
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-4">Pure Origins, Traceable Sourcing</h2>
          <p className="text-[12px] uppercase tracking-wide text-[#8a938c] mb-1.5">Grown In</p>
          <p className="text-[14px] text-ivar-ink font-medium mb-6">{ing.origin}</p>
          {ing.traditionalUses && (
            <>
              <p className="text-[12px] uppercase tracking-wide text-[#8a938c] mb-2">Traditional Uses</p>
              <div className="flex flex-wrap gap-2">
                {ing.traditionalUses.map((u) => (
                  <span key={u} className="bg-ivar-cream text-ivar-ink text-[12.5px] font-medium rounded-full px-4 py-2">
                    {u}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
        {ing.processing && (
          <div>
            <p className="text-[12px] uppercase tracking-wide text-[#8a938c] mb-3">From Farm to Product</p>
            <ol className="space-y-3">
              {ing.processing.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-[14px] text-ivar-ink">
                  <span className="size-7 rounded-full bg-ivar-forest text-white text-[11px] font-semibold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>

      <section id="faqs" ref={(el) => (refs.current.faqs = el)} className="bg-ivar-cream py-14 md:py-20">
        <div className="max-w-[1320px] mx-auto px-[6vw] grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">FAQs</p>
            <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion
            items={[
              { q: `Where does Ivar source its ${ing.name}?`, a: `${ing.name} is sourced from ${ing.origin}, following the same traditional growing regions India has relied on for generations.` },
              { q: `Is ${ing.name} used in any other Ivar products?`, a: `Yes — see "Our ${ing.name} Products" above for the current formats we make with it.` },
              { q: "Are these products available for bulk or B2B supply?", a: "Yes — reach out through our Contact page and select the Ingredient Sourcing enquiry type." },
            ]}
          />
        </div>
      </section>

      {videoOpen && <VideoModal ing={ing} onClose={() => setVideoOpen(false)} />}
    </>
  );
}
