"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import LineIcon from "./LineIcon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Menu" },
  { href: "/build", label: "Build" },
  { href: "/planner", label: "AI Planner" },
  { href: "/plans", label: "Plans" },
  { href: "/breakfast", label: "Breakfast" },
  { href: "/corporate-orders", label: "Corporate Orders" },
  { href: "/contact", label: "Contact" },
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
        placeholder="Search for healthy foods..."
        aria-label="Search for healthy foods"
        className="w-full h-10 rounded-full border border-[#dcd9cd] bg-white pl-4 pr-11 text-[13px] text-ivar-text placeholder:text-[#9a9f9a]"
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
    <header className="bg-white/95 backdrop-blur sticky top-0 z-30 border-b border-[#ece8da]">
      <div className="h-[64px] flex items-center gap-5 xl:gap-8 px-[4vw] max-w-[1500px] mx-auto">
        <Link href="/" aria-label="Ivar home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-full.png" alt="Ivar — Eat | Yoga | Wellness" className="h-10 md:h-11 w-auto" />
        </Link>

        <nav className="hidden xl:flex gap-5 2xl:gap-7 text-[13px] ml-6 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-200 hover:text-ivar-forest underline-offset-8 decoration-2 decoration-ivar-forest ${
                isActive(link.href) ? "text-ivar-forest font-semibold underline" : "text-ivar-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block ml-auto w-[170px] 2xl:w-[230px]">{searchForm}</div>

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
          className="hidden 2xl:flex shrink-0 items-center gap-4 bg-ivar-forest text-white rounded-md pl-4 pr-3 py-2 hover:bg-ivar-forestDeep transition-colors"
        >
          <span className="text-[12px] leading-tight text-left">
            Good Food
            <br />A Brighter Tomorrow
          </span>
          <LineIcon name="arrow" size={18} />
        </Link>

        <button
          className="xl:hidden shrink-0 text-ivar-forest cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          suppressHydrationWarning
        >
          <LineIcon name="menu" size={26} />
        </button>
      </div>

      <div
        className={`xl:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-[#ece8da] ${
          menuOpen ? "max-h-[640px]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-[6vw] py-4 gap-1 text-sm">
          <div className="mb-3">{searchForm}</div>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-2.5 border-b border-[#f0eee6] last:border-0 hover:text-ivar-forest"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
