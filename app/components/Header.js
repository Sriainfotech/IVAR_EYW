"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import LineIcon from "./LineIcon";

const navLinks = [
  { href: "/foods", label: "Foods" },
  { href: "/foods/ready-to-cook", label: "Processed Foods" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/innovation", label: "Innovation" },
  { href: "/packaging", label: "Packaging" },
  { href: "/story", label: "About" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  function onSearch(e) {
    e.preventDefault();
    setMenuOpen(false);
    router.push(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : "/shop");
  }

  const searchForm = (
    <form onSubmit={onSearch} role="search" className="relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Ivar foods..."
        aria-label="Search Ivar foods"
        className="w-full h-10 rounded-full border border-[#dcd9cd] bg-white pl-4 pr-11 text-[13px] text-ivar-ink placeholder:text-[#9a9f9a]"
        suppressHydrationWarning
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-ivar-forest cursor-pointer"
        suppressHydrationWarning
      >
        <LineIcon name="search" size={18} stroke={1.8} />
      </button>
    </form>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#ece8da]">
      <div className="h-[68px] flex items-center gap-5 xl:gap-8 px-[4vw] max-w-[1500px] mx-auto">
        <Link href="/" aria-label="Ivar home" className="shrink-0 size-12 md:size-14 rounded-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-circle.png" alt="Ivar" className="w-full h-full object-contain" />
        </Link>

        <nav className="hidden xl:flex gap-5 2xl:gap-7 text-[13px] font-medium ml-6 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-200 underline-offset-8 decoration-2 decoration-ivar-forest ${
                isActive(link.href) ? "text-ivar-forest font-semibold underline" : "text-ivar-ink/75 hover:text-ivar-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block ml-auto w-[170px] 2xl:w-[210px]">{searchForm}</div>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Search"
          className="xl:hidden shrink-0 text-ivar-forest ml-auto cursor-pointer"
          suppressHydrationWarning
        >
          <LineIcon name="search" size={22} stroke={1.8} />
        </button>

        <button
          onClick={openCart}
          aria-label="Open cart"
          className="relative shrink-0 text-ivar-forest xl:ml-0 cursor-pointer"
          suppressHydrationWarning
        >
          <LineIcon name="bag" size={24} stroke={1.7} />
          <span
            className="absolute -top-2 -right-2 bg-ivar-forest text-white rounded-full min-w-[17px] h-[17px] px-1 text-[10px] font-semibold flex items-center justify-center"
            suppressHydrationWarning
          >
            {count}
          </span>
        </button>

        <Link
          href="/shop"
          className="hidden 2xl:inline-flex shrink-0 items-center gap-2 bg-ivar-forest text-white text-[13px] font-semibold rounded-full px-5 py-2.5 hover:bg-ivar-forestDeep transition-colors"
        >
          Explore Products <LineIcon name="arrow" size={16} stroke={2} />
        </Link>

        <Link
          href="/contact"
          className="hidden 2xl:inline-flex shrink-0 items-center gap-2 border border-ivar-forest/40 text-ivar-forest text-[13px] font-semibold rounded-full px-5 py-2.5 hover:bg-ivar-cream transition-colors"
        >
          Contact Us
        </Link>

        <button
          className="xl:hidden shrink-0 text-ivar-forest cursor-pointer"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          suppressHydrationWarning
        >
          <LineIcon name="menu" size={26} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[86vw] max-w-sm bg-white z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[68px] border-b border-[#ece8da]">
                <div className="size-12 rounded-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/logo-circle.png" alt="Ivar" className="w-full h-full object-contain" />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-ivar-forest cursor-pointer"
                  suppressHydrationWarning
                >
                  ✕
                </button>
              </div>

              <div className="px-6 pt-5">{searchForm}</div>

              <nav className="flex flex-col px-6 py-4 gap-1 text-[15px]">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 border-b border-[#f0eee6] text-ivar-ink/85 hover:text-ivar-forest"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto px-6 pb-8 pt-4 flex flex-col gap-3">
                <Link
                  href="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center gap-2 bg-ivar-forest text-white text-sm font-semibold rounded-full px-5 py-3"
                >
                  Explore Products <LineIcon name="arrow" size={16} stroke={2} />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center gap-2 border border-ivar-forest/40 text-ivar-forest text-sm font-semibold rounded-full px-5 py-3"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
