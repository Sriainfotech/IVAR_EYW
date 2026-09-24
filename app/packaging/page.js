import PageHeader from "../components/PageHeader";
import LineIcon from "../components/LineIcon";

export const metadata = {
  title: "Packaging — Ivar™",
  description: "Packaging designed around food.",
};

const PRINCIPLES = [
  { title: "Protection", icon: "shield" },
  { title: "Freshness", icon: "leaf" },
  { title: "Convenience", icon: "bag" },
  { title: "Shelf Life", icon: "box" },
  { title: "Brand Experience", icon: "heart" },
];

const FORMATS = ["Pouches", "Sachets", "Portion Packs", "Cups", "Bottles", "Jars", "Frozen Packaging"];

export default function PackagingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Packaging"
        title="Packaging is part of the food."
        subtitle="Formats designed to protect freshness, extend shelf life and carry the Ivar experience."
      />

      <section className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-16">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center">
              <span className="size-12 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center mb-3">
                <LineIcon name={p.icon} size={20} />
              </span>
              <p className="text-[13px] font-medium text-ivar-ink">{p.title}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-6">Formats</h2>
        <div className="flex flex-wrap gap-3">
          {FORMATS.map((f) => (
            <span key={f} className="bg-ivar-cream text-ivar-ink text-sm font-medium rounded-full px-5 py-2.5">
              {f}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
