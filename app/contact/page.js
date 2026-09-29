import Link from "next/link";
import LineIcon from "../components/LineIcon";
import ContactForm from "../components/ContactForm";
import FAQAccordion from "../components/FAQAccordion";
import ProcessTimeline from "../components/ProcessTimeline";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = {
  title: "Contact — Ivar™",
  description:
    "Partner with Ivar for ingredients, products, processing, packaging or innovative food solutions.",
  alternates: { canonical: "/contact" },
};

const ENTRY_POINTS = [
  { icon: "link", title: "Business Partnerships" },
  { icon: "leaf", title: "Ingredient Sourcing" },
  { icon: "box", title: "Product Development" },
  { icon: "globe", title: "Global Opportunities" },
];

const CARDS = [
  { icon: "link", title: "For Businesses", text: "Collaborate for ingredients, products, processing or packaging.", cta: "Partner with Us" },
  { icon: "flask", title: "For R&D Collaboration", text: "Work with us on new products, flavours and food innovations.", cta: "Collaborate on Innovation" },
  { icon: "leaf", title: "For Ingredient Supplies", text: "Source high-quality Indian ingredients for your products.", cta: "Enquire for Ingredients" },
  { icon: "box", title: "For Packaging Solutions", text: "Explore innovative, food-safe packaging formats.", cta: "Packaging Enquiries" },
];

const FAQS = [
  { q: "What type of products does Ivar offer?", a: "Ivar makes modern food products built from India's ingredients — from snacks and breakfast mixes to ready-to-eat bowls. Browse the full range on the Foods page." },
  { q: "Can we partner for ingredient supply?", a: "Yes — we work with growers and suppliers for ingredients like millets, makhana and amla. Use the form below and select \"Ingredients\" as the enquiry type." },
  { q: "Do you offer contract manufacturing?", a: "We evaluate processing and manufacturing collaborations case by case. Tell us about your requirement through the contact form and our team will follow up." },
  { q: "Do you provide packaging solutions?", a: "We work with food-safe packaging formats designed for freshness and shelf life. See the Packaging page for the formats we currently support." },
  { q: "How can we collaborate on new product development?", a: "Reach out via the R&D collaboration entry point above, or select \"Innovation\" in the contact form." },
  { q: "Do you export products internationally?", a: "Ivar is built with global markets in mind. For specific export enquiries, please contact our team directly through this page." },
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Let&apos;s Connect</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Partner with <span className="italic text-ivar-green">Ivar.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[460px] mb-8">
              For ingredients, products, processing, packaging or innovative food solutions — let&apos;s build a
              healthier tomorrow together.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-[480px] border-t border-ivar-forest/10 pt-6">
              {ENTRY_POINTS.map((e) => (
                <div key={e.title} className="flex flex-col items-center text-center gap-2">
                  <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center">
                    <LineIcon name={e.icon} size={18} stroke={1.6} />
                  </span>
                  <span className="text-[11px] leading-tight text-ivar-muted">{e.title}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/products/eat/immunity-shield.jpg" alt="Ivar" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <ProcessTimeline eyebrow="How We Work Together" title="Ways to partner with Ivar." steps={CARDS} dark={false} />

      <section className="max-w-[1320px] mx-auto px-[6vw] py-14 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <h2 className="font-display text-editorial-section text-ivar-ink mb-5 max-w-[440px]">
            Let&apos;s Build Something Better.
          </h2>
          <p className="text-editorial-body text-ivar-muted mb-10 max-w-[440px]">
            For ingredients, products, processing, packaging or food innovation — let&apos;s create the next
            opportunity together.
          </p>
          <div className="space-y-6 border-t border-ivar-forest/12 pt-8">
            <div className="flex items-start gap-4">
              <span className="size-9 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center shrink-0">
                <LineIcon name="bag" size={15} stroke={1.7} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-ivar-muted mb-1">Phone</p>
                <p className="text-[14px] font-medium text-ivar-ink">+91 97013 14138</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="size-9 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center shrink-0">
                <LineIcon name="globe" size={15} stroke={1.7} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-ivar-muted mb-1">Office</p>
                <p className="text-[14px] font-medium text-ivar-ink">India · Serving globally</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8">
        <div>
          <h2 className="font-display text-[26px] md:text-[30px] text-ivar-ink mb-3">Frequently Asked Questions</h2>
          <p className="text-[13.5px] leading-relaxed text-[#4b564f]">
            Quick answers to common questions about our products, ingredients, packaging and partnership opportunities.
          </p>
        </div>
        <FAQAccordion items={FAQS} />
      </section>

      <section className="relative bg-ivar-forest overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/hero-grain-bowl.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[6vw] py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-[26px] md:text-[34px] leading-tight text-white mb-2">
              From Indian Roots to Global Opportunities.
            </h2>
            <p className="text-white/65 text-[14px]">Let&apos;s create better food for a brighter tomorrow.</p>
          </div>
          <Link
            href="mailto:hello@ivarlife.com"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-ivar-forest font-semibold text-sm rounded-full px-7 py-3.5 hover:bg-ivar-sage transition-colors"
          >
            Explore Partnership Opportunities <LineIcon name="arrow" size={16} stroke={2} />
          </Link>
        </div>
      </section>
    </main>
  );
}
