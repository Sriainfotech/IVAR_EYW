"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import IvarLoader from "./IvarLoader";

// Next's built-in loading.js only fires when a route segment is genuinely
// still fetching/rendering. Every page here is client-rendered with no
// server delay, so that gap never exists and loading.js never gets a
// chance to paint. This shows a branded loader the instant an internal
// link is clicked, and hides it once the route has actually changed.
export default function RouteTransitionOverlay() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setVisible(false);
    }
  }, [pathname]);

  useEffect(() => {
    function onClick(e) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      setVisible(true);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;
  return <IvarLoader fullScreen size="lg" label="Loading…" />;
}
