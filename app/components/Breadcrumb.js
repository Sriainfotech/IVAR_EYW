import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] text-white/70 flex items-center gap-2 flex-wrap">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">›</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
