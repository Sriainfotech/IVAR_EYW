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
      <div className="max-w-[1500px] mx-auto px-[4vw] py-14 md:py-16 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="size-20 rounded-full overflow-hidden mb-4 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-circle.png" alt="Ivar" className="w-full h-full object-contain" />
          </div>
          <p className="text-white/60 text-[13px] leading-relaxed max-w-[280px]">
            Innovating Indian food for the world.
          </p>
          <a href="https://www.ivarlife.com" className="inline-block mt-3 text-ivar-sage text-sm font-medium hover:underline">
            www.ivarlife.com
          </a>
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
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-white/50 mb-4">Ivar</h4>
          <nav className="flex flex-col gap-2.5 text-[13px]">
            {primaryNav.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-white/50 mb-4">Explore</h4>
          <nav className="flex flex-col gap-2.5 text-[13px]">
            {explore.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-white/50 mb-4">Join Our Journey</h4>
          <form className="flex h-10 mb-5">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Your email address"
              className="flex-1 min-w-0 border border-white/20 bg-white/5 text-white placeholder:text-white/40 px-3 text-[12px] rounded-l-md rounded-r-none"
              suppressHydrationWarning
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="w-10 bg-ivar-sage text-ivar-ink rounded-r-md flex items-center justify-center hover:brightness-95 cursor-pointer"
              suppressHydrationWarning
            >
              →
            </button>
          </form>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-white/50 mb-3">Legal</h4>
          <nav className="flex flex-col gap-2 text-[12px]">
            {legal.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-4 text-[11px] text-white/50 text-center">
          © 2026 Ivar Life. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
