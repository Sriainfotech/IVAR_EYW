import Link from "next/link";

const primaryNav = [
  ["Ivar Essentials", "/foods"],
  ["Ivar Health", "/health"],
  ["Membership", "/membership"],
  ["Ingredients", "/ingredients"],
  ["Innovation", "/innovation"],
  ["Packaging", "/packaging"],
  ["About", "/story"],
  ["Contact", "/contact"],
];

const explore = [
  ["Menu", "/shop"],
  ["Build a Box", "/build"],
  ["AI Planner", "/planner"],
  ["Plans", "/plans"],
  ["Corporate Orders", "/corporate-orders"],
  ["Breakfast", "/breakfast"],
];

const legal = [
  ["Privacy Policy", "/contact"],
  ["Terms of Use", "/contact"],
  ["Cookie Policy", "/contact"],
  ["Disclaimer", "/contact"],
];

const socials = [
  ["LinkedIn", "in"],
  ["Instagram", "ig"],
  ["YouTube", "yt"],
  ["Facebook", "f"],
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-ivar-ink border-t border-ivar-forest/10">
      <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-12">
        <div>
          <div className="h-16 w-[200px] mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-t.png" alt="Ivar" className="w-full h-full object-contain object-left" />
          </div>
          <p className="font-display text-[22px] leading-snug text-ivar-ink max-w-[280px] mb-3">
            Good Food. Better Tomorrow.
          </p>
          <a href="https://www.ivarlife.com" className="inline-block text-ivar-green text-sm font-medium hover:underline">
            www.ivarlife.com
          </a>
          <div className="mt-6 space-y-1.5 text-[13.5px] text-ivar-muted">
            <p>+91 97013 14138</p>
            <p>hello@ivarlife.com</p>
            <p>Hyderabad, Telangana, India</p>
          </div>
          <div className="flex gap-3 mt-6">
            {socials.map(([label, glyph]) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="size-9 rounded-full border border-ivar-forest/20 text-ivar-forest text-[11px] font-bold flex items-center justify-center hover:bg-ivar-cream transition-colors"
              >
                {glyph}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-ivar-muted mb-5">Quick Links</h4>
          <nav className="flex flex-col gap-3 text-[13.5px]">
            {primaryNav.map(([label, href]) => (
              <Link key={label} href={href} className="text-ivar-ink/75 hover:text-ivar-forest transition-colors w-fit">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-ivar-muted mb-5">Explore</h4>
          <nav className="flex flex-col gap-3 text-[13.5px]">
            {explore.map(([label, href]) => (
              <Link key={label} href={href} className="text-ivar-ink/75 hover:text-ivar-forest transition-colors w-fit">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-ivar-forest/10">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-5 flex flex-col-reverse md:flex-row items-center justify-between gap-3 text-[11.5px] text-ivar-muted">
          <p>© 2026 Ivar. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
            {legal.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-ivar-forest transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
