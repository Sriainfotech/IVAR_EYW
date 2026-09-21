import Link from "next/link";

const links = [
  ["Products", "/shop"],
  ["Company", "/story"],
  ["Sustainability", "/story"],
  ["Investor Relations", "/contact"],
  ["Contact", "/contact"],
];

const more = [
  ["Build a Box", "/build"],
  ["AI Planner", "/planner"],
  ["Plans", "/plans"],
  ["Corporate Orders", "/corporate-orders"],
  ["Breakfast", "/breakfast"],
];

const socials = [
  ["LinkedIn", "in"],
  ["Instagram", "ig"],
  ["YouTube", "yt"],
  ["Facebook", "f"],
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-[#ece8da] text-ivar-text">
      <div className="max-w-[1500px] mx-auto px-[4vw] py-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto_auto] items-center gap-8 lg:gap-10">
        <div className="flex items-center gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-full.png" alt="Ivar — Eat | Yoga | Wellness" className="h-12 w-auto" />
          <span className="hidden sm:block h-10 w-px bg-[#d8d4c4]" />
          <a href="https://www.ivarlife.com" className="text-ivar-forest font-semibold text-lg hover:underline">
            www.ivarlife.com
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-2 gap-y-2 text-[12px] items-center lg:justify-center">
          {links.map(([label, href], i) => (
            <span key={label} className="flex items-center gap-2">
              <Link href={href} className="hover:text-ivar-forest">
                {label}
              </Link>
              {i < links.length - 1 && <span className="text-[#c4c0b0]">|</span>}
            </span>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map(([label, glyph]) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="size-8 rounded-full bg-ivar-text text-white text-[11px] font-bold flex items-center justify-center hover:bg-ivar-forest transition-colors"
            >
              {glyph}
            </a>
          ))}
        </div>

        <form className="w-full lg:w-[280px]">
          <p className="text-[12px] font-semibold mb-2">Join Our Journey</p>
          <div className="flex h-9">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Your email address"
              className="flex-1 min-w-0 border border-[#d8d4c4] bg-white px-3 text-[12px] rounded-l-md rounded-r-none"
              suppressHydrationWarning
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="w-10 bg-ivar-forest text-white rounded-r-md flex items-center justify-center hover:bg-ivar-forestDeep cursor-pointer"
              suppressHydrationWarning
            >
              →
            </button>
          </div>
        </form>
      </div>

      <div className="border-t border-[#ece8da] bg-ivar-paper">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-[#4b564f]">
          <p>© 2026 Ivar Life. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
            {more.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-ivar-forest">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-ivar-forest">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-ivar-forest">Terms of Use</Link>
            <Link href="/contact" className="hover:text-ivar-forest">Cookies</Link>
            <Link href="/sitemap.xml" className="hover:text-ivar-forest">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
