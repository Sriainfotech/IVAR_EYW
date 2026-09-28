import Link from "next/link";

const primaryNav = [
  ["Foods", "/shop"],
  ["Processed Foods", "/shop"],
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
    <footer id="contact" className="bg-ivar-forest text-white/85">
      <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-12">
        <div>
          <div className="size-16 rounded-full overflow-hidden mb-5 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-circle-v2.png" alt="Ivar" className="w-full h-full object-contain" />
          </div>
          <p className="font-display text-[22px] leading-snug text-white max-w-[280px] mb-3">
            Good Food. Better Tomorrow.
          </p>
          <a href="https://www.ivarlife.com" className="inline-block text-ivar-sage text-sm font-medium hover:underline">
            www.ivarlife.com
          </a>
          <div className="mt-6 space-y-1.5 text-[13.5px] text-white/60">
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
                className="size-9 rounded-full border border-white/20 text-white text-[11px] font-bold flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                {glyph}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-white/50 mb-5">Quick Links</h4>
          <nav className="flex flex-col gap-3 text-[13.5px]">
            {primaryNav.map(([label, href]) => (
              <Link key={label} href={href} className="text-white/70 hover:text-white transition-colors w-fit">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-white/50 mb-5">Explore</h4>
          <nav className="flex flex-col gap-3 text-[13.5px]">
            {explore.map(([label, href]) => (
              <Link key={label} href={href} className="text-white/70 hover:text-white transition-colors w-fit">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-5 flex flex-col-reverse md:flex-row items-center justify-between gap-3 text-[11.5px] text-white/50">
          <p>© 2026 Ivar. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
            {legal.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
