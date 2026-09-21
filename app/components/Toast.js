"use client";

import { useCart } from "../context/CartContext";

export default function Toast() {
  const { toast } = useCart();

  return (
    <div
      className={`fixed bottom-6 right-6 z-[60] transition-all duration-300 ${
        toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      {toast && (
        <div className="bg-ivar-dark text-white rounded-xl shadow-[0_12px_30px_#064C3540] px-5 py-4 flex items-center gap-3 max-w-[320px]">
          <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs shrink-0">
            ✓
          </span>
          <span className="text-sm leading-[1.4]">{toast}</span>
        </div>
      )}
    </div>
  );
}
