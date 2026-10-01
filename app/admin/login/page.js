"use client";

import { useState } from "react";
import LineIcon from "../../components/LineIcon";

const fieldClass =
  "border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-white focus:outline-none focus:border-white/60 transition-colors w-full placeholder:text-white/30";

export default function AdminLoginPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-ivar-forestDeep px-[6vw] py-16">
      <div className="w-full max-w-[380px]">
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <span className="size-9 rounded-full border border-white/25 text-white flex items-center justify-center">
            <LineIcon name="shield" size={16} stroke={1.8} />
          </span>
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/70 font-semibold">Ivar Admin</p>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center text-2xl mx-auto mb-4">
              ✓
            </div>
            <h3 className="font-display text-xl text-white mb-2">Signed in.</h3>
            <p className="text-white/60 text-sm leading-[1.7]">
              This is a demo route with no real authentication wired up — connect an admin auth backend before
              using this in production.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white/[0.04] border border-white/10 rounded-2xl p-8">
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-wide text-white/50">
              Admin Email
              <input required type="email" name="email" placeholder="you@ivarlife.com" className={fieldClass} suppressHydrationWarning />
            </label>
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-wide text-white/50">
              Password
              <input required type="password" name="password" className={fieldClass} suppressHydrationWarning />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 bg-white text-ivar-forestDeep text-[14px] font-semibold rounded-full py-3.5 hover:bg-ivar-sage transition-colors cursor-pointer"
              suppressHydrationWarning
            >
              Sign In to Admin
            </button>
          </form>
        )}

        <p className="text-center text-[11.5px] text-white/40 mt-8">
          Restricted access. This page is not linked from the public site.
        </p>
      </div>
    </main>
  );
}
