"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import { money } from "../data/products";

const tabs = [
  {
    href: "/",
    label: "Home",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 11.5 12 4l8 7.5"
          stroke={active ? "#0a3d24" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9"
          stroke={active ? "#0a3d24" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/shop",
    label: "Shop",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 8h16l-1.2 10.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 8Z"
          stroke={active ? "#0a3d24" : "#8a938c"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 8V6a4 4 0 0 1 8 0v2"
          stroke={active ? "#0a3d24" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "/cart",
    label: "Cart",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 4h2l2.4 12.1a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6"
          stroke={active ? "#0a3d24" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="20" r="1.4" fill={active ? "#0a3d24" : "#8a938c"} />
        <circle cx="17" cy="20" r="1.4" fill={active ? "#0a3d24" : "#8a938c"} />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Account",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="8"
          r="3.4"
          stroke={active ? "#0a3d24" : "#8a938c"}
          strokeWidth="2"
        />
        <path
          d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4"
          stroke={active ? "#0a3d24" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function MobileTabBar() {
  const pathname = usePathname();
  const { count, subtotal, openCart } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      {count > 0 && (
        <button
          onClick={openCart}
          className="w-full flex items-center justify-between bg-ivar-dark text-white px-5 py-3 text-sm"
          suppressHydrationWarning
        >
          <span className="flex items-center gap-2">
            <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
              {count}
            </span>
            <span className="font-medium">{money(subtotal)}</span>
          </span>
          <span className="font-semibold tracking-wide flex items-center gap-1">
            View Cart
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      )}
      <nav className="bg-white border-t border-[#e8e5da] flex items-stretch pb-[env(safe-area-inset-bottom)]">
        {tabs.map((tab) => {
          const active =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 relative"
            >
              {tab.icon(active)}
              <span
                className={`text-[10px] tracking-wide ${
                  active ? "text-ivar-dark font-semibold" : "text-[#8a938c]"
                }`}
              >
                {tab.label}
              </span>
              {tab.href === "/cart" && count > 0 && (
                <span className="absolute top-1 right-[26%] bg-ivar-dark text-white text-[9px] font-semibold rounded-full min-w-[15px] h-[15px] flex items-center justify-center px-[3px]">
                  {count}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
