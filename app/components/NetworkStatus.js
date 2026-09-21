"use client";

import { useEffect, useState } from "react";

export default function NetworkStatus() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (online) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-[200] bg-[#a9433a] text-white text-xs sm:text-sm text-center py-2 px-4">
      No internet connection — some features won't load until you're back online.
    </div>
  );
}
