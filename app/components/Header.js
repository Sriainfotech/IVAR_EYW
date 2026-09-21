"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Menu" },
  { href: "/build", label: "Build" },
  { href: "/planner", label: "AI Planner" },
  { href: "/plans", label: "Plans" },
  { href: "/corporate-orders", label: "Corporate Orders" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur sticky top-0 z-30 shadow-[0_2px_14px_#0a3d2410]">
        <div className="h-[76px] flex items-center gap-6 px-[6vw]">
          <Link href="/" aria-label="Ivar home" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-full.png"
              alt="Ivar — Eat | Yoga | Wellness"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex gap-6 text-[14px] font-medium ml-auto whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="transition-colors duration-200 hover:text-ivar-coral"
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

          <Link
            href="/shop"
            className="hidden md:inline-flex bg-ivar-coral text-white font-semibold text-[13px] rounded-full px-5 py-2.5 shadow-[0_6px_16px_#ff6b4a44] hover:brightness-105 transition"
          >
            Order Now
          </Link>

          <button
            className="lg:hidden ml-auto flex flex-col justify-center items-center gap-[5px] w-9 h-9 shrink-0"
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
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-[#e8e5da] ${
            menuOpen ? "max-h-96" : "max-h-0 border-t-0"
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
