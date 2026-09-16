"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-ivar-dark text-white text-center text-[11px] tracking-[0.16em] py-2.5">
        FREE SHIPPING ON ORDERS OVER ₹999 · WELCOME TO IVAR
      </div>

      <header className="bg-[#fffdf8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#fffdf8]/80 sticky top-0 z-30 border-b border-[#e8e5da]">
        <div className="h-[84px] flex items-center gap-6 px-[6vw]">
          <Link href="/" aria-label="Ivar home" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-full.png"
              alt="Ivar — Eat | Yoga | Wellness"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <nav className="hidden md:flex gap-8 text-[13px] tracking-wide ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="transition-colors duration-200 hover:text-ivar-leaf"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={openCart}
            className="hidden md:inline-flex border border-[#d6ddd7] bg-white rounded-full px-4 py-2.5 text-[13px] transition-colors duration-200 hover:border-ivar-dark"
            suppressHydrationWarning
          >
            Cart{" "}
            <b
              className="bg-ivar-dark text-white rounded-full px-[7px] py-[3px] ml-[5px] text-[11px]"
              suppressHydrationWarning
            >
              {count}
            </b>
          </button>

          <button
            className="md:hidden ml-auto flex flex-col justify-center items-center gap-[5px] w-9 h-9 shrink-0"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            suppressHydrationWarning
          >
            <span
              className={`block w-6 h-[2px] bg-ivar-dark transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-ivar-dark transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-ivar-dark transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-[#e8e5da] ${
            menuOpen ? "max-h-64" : "max-h-0 border-t-0"
          }`}
        >
          <nav className="flex flex-col px-[6vw] py-4 gap-1 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 border-b border-[#f0eee6] last:border-0 transition-colors duration-200 hover:text-ivar-leaf"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
