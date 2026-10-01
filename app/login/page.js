"use client";

import { useState } from "react";
import Link from "next/link";
import LineIcon from "../components/LineIcon";

const fieldClass =
  "border-0 border-b border-[#d6ddd7] bg-transparent px-0 py-3 text-[15px] text-ivar-ink focus:outline-none focus:border-ivar-forest transition-colors w-full";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-white px-[6vw] py-16 md:py-24">
      <div className="w-full max-w-[420px]">
        <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4 text-center">
          Welcome Back
        </p>
        <h1 className="font-display text-[32px] md:text-[40px] leading-[1.1] text-ivar-ink mb-8 text-center">
          Sign In to Ivar
        </h1>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-ivar-sage/15 text-ivar-forest flex items-center justify-center text-2xl mx-auto mb-4">
              ✓
            </div>
            <h3 className="font-display text-xl text-ivar-ink mb-2">Signed in.</h3>
            <p className="text-ivar-muted text-sm leading-[1.7]">
              This is a demo storefront, so no account was actually verified — connect a real authentication
              backend before launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-wide text-ivar-muted">
              Email
              <input required type="email" name="email" className={fieldClass} suppressHydrationWarning />
            </label>
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-wide text-ivar-muted">
              Password
              <input required type="password" name="password" className={fieldClass} suppressHydrationWarning />
            </label>

            <div className="flex items-center justify-between text-[13px]">
              <label className="flex items-center gap-2 text-ivar-muted cursor-pointer">
                <input type="checkbox" className="accent-ivar-forest" suppressHydrationWarning />
                Remember me
              </label>
              <Link href="/contact" className="text-ivar-forest font-medium hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full py-3.5 hover:bg-ivar-forestDeep transition-colors cursor-pointer"
              suppressHydrationWarning
            >
              Sign In
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}

        <p className="text-center text-[13.5px] text-ivar-muted mt-8">
          New to Ivar?{" "}
          <Link href="/register" className="text-ivar-forest font-semibold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
