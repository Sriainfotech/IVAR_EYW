"use client";

export default function ChatCta() {
  return (
    <div className="bg-ivar-mint border-2 border-ivar-dark rounded-2xl p-4 max-w-[340px] shadow-lg">
      <p className="text-sm text-ivar-text leading-relaxed mb-3">
        <span className="text-lg mr-1">👋</span>
        <b>Hey, I'm Ask Ivar!</b> Tell me what you're craving — 🥗 bowls, 🍳 breakfast, 🥜 snacks or 🍵 teas?
      </p>
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("ivar:open-chat"))}
        className="w-full bg-ivar-dark text-white text-sm font-semibold rounded-3xl py-2.5 hover:bg-ivar-darker transition-colors cursor-pointer"
        suppressHydrationWarning
      >
        Chat with Ask Ivar →
      </button>
    </div>
  );
}
