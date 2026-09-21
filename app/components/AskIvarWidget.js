"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useProductModal } from "../context/ProductModalContext";
import { products } from "../data/products";
import IvarLoader from "./IvarLoader";
import { fetchWithTimeout } from "../lib/fetchWithTimeout";

const QUICK_REPLIES = ["Breakfast ideas", "High protein", "Snacks", "Teas & drinks"];

export default function AskIvarWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const { openProduct } = useProductModal();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function handleSend(text) {
    if (!text.trim() || loading) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetchWithTimeout("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply, recommendations: data.recommendations },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: err.message?.includes("network") ? err.message : "Sorry, I'm having trouble right now — try again in a moment!" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function openRecommendedProduct(productId) {
    const product = products.find((p) => p.id === productId || String(p.id) === String(productId));
    if (product) {
      setOpen(false);
      openProduct(product);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ask Ivar"
        className="fixed bottom-[144px] md:bottom-[92px] right-5 z-40 size-14 rounded-full bg-ivar-leaf text-white flex items-center justify-center text-2xl shadow-xl hover:scale-105 transition-transform"
        suppressHydrationWarning
      >
        🌿
      </button>

      {open && (
        <div className="fixed bottom-[220px] md:bottom-[168px] right-5 z-40 w-[92vw] max-w-sm h-[65vh] max-h-[520px] bg-[#fffdf8] border border-[#e6e4dc] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-[#e6e4dc] bg-ivar-dark text-white">
            <span className="text-2xl">🌿</span>
            <div className="flex-1">
              <p className="font-serif font-semibold text-sm">Ask Ivar</p>
              <p className="text-xs opacity-80">Your food & wellness guide</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" suppressHydrationWarning>
              ×
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            <div className="bg-[#eef1e8] rounded-2xl rounded-tl-sm p-3">
              👋 Hi, I'm here to help! Tell me what you're craving — breakfast, snacks, high-protein
              options or something to sip on.
            </div>

            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.role === "user"
                      ? "bg-ivar-dark text-white rounded-2xl rounded-tr-sm p-3 max-w-[85%]"
                      : "bg-[#eef1e8] rounded-2xl rounded-tl-sm p-3 max-w-[85%] space-y-2"
                  }
                >
                  <p>{m.content}</p>
                  {m.recommendations && m.recommendations.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {m.recommendations.map((r) => (
                        <button
                          key={r.productId}
                          onClick={() => openRecommendedProduct(r.productId)}
                          className="block w-full text-left bg-white rounded-xl px-3 py-2 text-xs hover:bg-[#f4f6f1] transition-colors cursor-pointer"
                        >
                          <span className="font-semibold">{r.name}</span> · ₹{r.price}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="bg-[#eef1e8] rounded-2xl rounded-tl-sm px-4 py-2.5 w-max">
                <IvarLoader size="sm" label="thinking…" />
              </div>
            )}
          </div>

          <div className="p-3 border-t border-[#e6e4dc] space-y-2">
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="shrink-0 text-xs font-medium bg-[#eef1e8] rounded-full px-3 py-1.5 hover:bg-[#e2e7de] cursor-pointer"
                  suppressHydrationWarning
                >
                  {q}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                placeholder="Ask Ivar anything..."
                className="flex-1 h-10 rounded-full border border-[#d6ddd7] bg-white px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ivar-leaf"
                suppressHydrationWarning
              />
              <button
                onClick={() => handleSend(input)}
                aria-label="Send"
                className="shrink-0 size-10 rounded-full bg-ivar-dark text-white flex items-center justify-center hover:bg-ivar-green transition-colors cursor-pointer"
                suppressHydrationWarning
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
