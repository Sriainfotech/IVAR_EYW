import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact — Ivar",
  description:
    "Get in touch with Ivar for general enquiries, wholesale, corporate wellness, workforce services or partnerships.",
  alternates: { canonical: "/contact" },
};

const infoCards = [
  {
    label: "General enquiries",
    value: "hello@ivarlife.com",
    href: "mailto:hello@ivarlife.com",
  },
  {
    label: "Wholesale & sales",
    value: "sales@ivarlife.com",
    href: "mailto:sales@ivarlife.com",
  },
  {
    label: "Where we operate",
    value: "India · Serving globally",
  },
];

const businessLines = [
  {
    title: "Wholesale",
    desc: "Stock Ivar's food, yoga and wellness range in your store or café.",
  },
  {
    title: "Corporate wellness",
    desc: "Bring Ivar's wellness programs and healthy snacking to your workplace.",
  },
  {
    title: "Workforce & services",
    desc: "Book Ivar trainers and therapists for recurring on-site sessions.",
  },
  {
    title: "Partnerships",
    desc: "Collaborate with Ivar on products, distribution or wellness content.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Get in Touch"
        subtitle="Questions, wholesale enquiries or just want to say hello — we'd love to hear from you."
        img="/assets/hero-office-salad.jpg"
      />

      <section className="max-w-[1200px] mx-auto px-[6vw] py-[70px] md:py-[90px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12">
          <div>
            <h2 className="font-serif text-2xl font-medium mb-6">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-medium mb-6">
              Reach us directly
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {infoCards.map((c) => (
                <div
                  key={c.label}
                  className="bg-[#f4f6f1] rounded-2xl p-5"
                >
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a938c] mb-1.5">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-sm font-medium text-ivar-dark hover:text-ivar-green transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-ivar-dark">
                      {c.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <h3 className="text-[11px] tracking-[0.2em] uppercase text-[#6b8276] font-semibold mb-4">
              Business enquiries
            </h3>
            <div className="flex flex-col gap-4">
              {businessLines.map((b) => (
                <div key={b.title}>
                  <h4 className="font-serif text-base font-medium mb-1">
                    {b.title}
                  </h4>
                  <p className="text-[#68766f] text-xs leading-[1.6] font-light">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
