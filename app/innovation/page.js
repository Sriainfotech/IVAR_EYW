import PageHeader from "../components/PageHeader";
import LineIcon from "../components/LineIcon";

export const metadata = {
  title: "Innovation — Ivar™",
  description: "Food innovation, rooted in India.",
};

const PILLARS = [
  { title: "Research", text: "Understanding traditional Indian ingredients, uses and nutrition.", icon: "flask" },
  { title: "Formulation", text: "Shaping ingredients into new recipes and product concepts.", icon: "scope" },
  { title: "Processing", text: "Cleaning, roasting, milling and preparing at scale.", icon: "box" },
  { title: "Validation", text: "Testing formulations for quality, safety and shelf life.", icon: "shield" },
];

export default function InnovationPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Innovation"
        title="Food innovation, rooted in India."
        subtitle="We explore Indian ingredients, traditional recipes and modern food science to create new formats, flavours and food experiences."
      />

      <section className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-20">
        <h2 className="font-display text-[28px] md:text-[36px] text-ivar-ink mb-10">Ivar Food Innovation Lab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-ivar-cream rounded-2xl p-7">
              <span className="size-11 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center mb-4">
                <LineIcon name={p.icon} size={20} />
              </span>
              <h3 className="font-semibold text-[16px] text-ivar-ink mb-2">{p.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-[#4b564f]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
