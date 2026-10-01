export default function IvarLoader({ label = "Loading", size = "md", fullScreen = false }) {
  const logoSize = size === "sm" ? "h-6 w-[80px]" : size === "lg" ? "h-12 w-[160px]" : "h-9 w-[120px]";
  const labelSize = size === "sm" ? "text-[11px]" : "text-[12px]";

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`ivar-loader-logo ${logoSize}`} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-t.png" alt="" className="w-full h-full object-contain" />
      </div>
      {label && (
        <p
          className={`${labelSize} tracking-[0.15em] uppercase text-ivar-muted flex items-center gap-1.5`}
          suppressHydrationWarning
        >
          {label}
          <span className="flex gap-0.5 ml-0.5">
            <span className="ivar-loader-dot size-1 rounded-full bg-ivar-forest" style={{ animationDelay: "0s" }} />
            <span className="ivar-loader-dot size-1 rounded-full bg-ivar-forest" style={{ animationDelay: "0.2s" }} />
            <span className="ivar-loader-dot size-1 rounded-full bg-ivar-forest" style={{ animationDelay: "0.4s" }} />
          </span>
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
        {content}
      </div>
    );
  }

  return content;
}
