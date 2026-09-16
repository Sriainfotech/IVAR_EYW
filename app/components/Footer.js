import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1.3fr] gap-10 px-[6vw] py-[55px] md:py-[80px] bg-ivar-darker text-[#dce8e1]"
      id="contact"
    >
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo-full-light.png"
          alt="Ivar — Eat | Yoga | Wellness"
          className="h-14 w-auto mb-4"
        />
        <p className="text-[#a9bdb3] text-xs my-3">A better way to live.</p>
      </div>
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase text-white mb-3">
          Shop
        </h4>
        <Link
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="/shop?group=Eat"
        >
          Eat
        </Link>
        <Link
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="/shop?group=Yoga"
        >
          Yoga <span className="text-[#7d9285]">(Coming Soon)</span>
        </Link>
        <Link
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="/shop?group=Wellness"
        >
          Wellness <span className="text-[#7d9285]">(Coming Soon)</span>
        </Link>
        <Link
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="/shop"
        >
          All Products
        </Link>
      </div>
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase text-white mb-3">
          Business
        </h4>
        <Link
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="/contact"
        >
          Wholesale
        </Link>
        <Link
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="/contact"
        >
          Corporate wellness
        </Link>
        <Link
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="/contact"
        >
          Workforce & services
        </Link>
        <Link
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="/contact"
        >
          Partnerships
        </Link>
      </div>
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase text-white mb-3">
          Contact
        </h4>
        <a
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="mailto:hello@ivarlife.com"
        >
          hello@ivarlife.com
        </a>
        <a
          className="block text-[#a9bdb3] text-xs my-3 transition-colors duration-200 hover:text-white"
          href="mailto:sales@ivarlife.com"
        >
          sales@ivarlife.com
        </a>
        <p className="text-[#a9bdb3] text-xs my-3">India · Serving globally</p>
      </div>
    </footer>
  );
}
