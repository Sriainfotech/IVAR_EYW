"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const HIDDEN_CHROME_PREFIXES = ["/login", "/register", "/admin"];

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const hideChrome = HIDDEN_CHROME_PREFIXES.some((p) => pathname === p || pathname?.startsWith(`${p}/`));

  if (hideChrome) return children;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
