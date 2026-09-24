import Link from "next/link";
import LineIcon from "../components/LineIcon";
import ContactForm from "../components/ContactForm";
import FAQAccordion from "../components/FAQAccordion";

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
      <section className="relative bg-ivar-forest overflow-hidden min-h-[420px] md:min-h-[460px] flex items-center">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/products/eat/immunity-shield.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivar-forest via-ivar-forest/85 to-ivar-forest/40" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[6vw] w-full">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">Let&apos;s Connect</p>
          <h1 className="font-display text-[36px] md:text-[58px] leading-[1.08] text-white max-w-[560px]">
            Partner with Ivar
          </h1>
          <p className="text-white/70 mt-4 max-w-[520px] text-base md:text-lg leading-relaxed">
            For ingredients, products, processing, packaging or innovative food solutions — let&apos;s build a healthier tomorrow together.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-9 max-w-[540px]">
            {ENTRY_POINTS.map((e) => (
              <div key={e.title} className="flex flex-col items-center text-center gap-2">
                <span className="size-11 rounded-full border border-white/30 text-white flex items-center justify-center">
                  <LineIcon name={e.icon} size={18} stroke={1.6} />
                </span>
                <span className="text-[11.5px] leading-tight text-white/80">{e.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CARDS.map((c) => (
          <div key={c.title} className="bg-ivar-cream rounded-2xl p-6">
            <span className="size-10 rounded-full border border-ivar-forest text-ivar-forest flex items-center justify-center mb-4">
              <LineIcon name={c.icon} size={17} stroke={1.6} />
            </span>
            <h3 className="font-semibold text-[15px] text-ivar-ink mb-2">{c.title}</h3>
            <p className="text-[13px] leading-relaxed text-[#4b564f] mb-4">{c.text}</p>
            <span className="text-[12.5px] font-semibold text-ivar-forest inline-flex items-center gap-1.5">
              {c.cta} <LineIcon name="arrow" size={13} stroke={2.2} />
            </span>
          </div>
        ))}
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-[0.8fr_1.3fr_0.7fr] gap-8">
        <div>
          <h2 className="font-display text-[26px] md:text-[30px] text-ivar-ink mb-3">Get in Touch</h2>
          <p className="text-[13.5px] leading-relaxed text-[#4b564f] mb-8">
            We are always open to new opportunities, collaborations and conversations.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="size-10 rounded-full bg-ivar-forest text-white flex items-center justify-center shrink-0">
                <LineIcon name="bag" size={16} stroke={1.7} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#8a938c] mb-1">Phone</p>
                <p className="text-[14px] font-medium text-ivar-ink">+91 97013 14138</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="size-10 rounded-full bg-ivar-forest text-white flex items-center justify-center shrink-0">
                <LineIcon name="globe" size={16} stroke={1.7} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#8a938c] mb-1">Office</p>
                <p className="text-[14px] font-medium text-ivar-ink">India · Serving globally</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="size-10 rounded-full bg-ivar-forest text-white flex items-center justify-center shrink-0">
                <LineIcon name="check" size={16} stroke={2} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#8a938c] mb-1">Business Enquiries</p>
                <p className="text-[14px] font-medium text-ivar-ink">Connect with our team through the form</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#e6e3d6] p-6 md:p-8">
          <h2 className="font-display text-[22px] text-ivar-ink mb-1.5">Send Us a Message</h2>
          <p className="text-[13px] text-[#4b564f] mb-6">Fill in the details and our team will get back to you shortly.</p>
          <ContactForm />
        </div>

        <div className="relative rounded-2xl overflow-hidden min-h-[220px] hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/hero-veg-fruit-table.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
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
