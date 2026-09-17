export default function IvarLoader({ label = "Preparing something fresh…", size = "md", fullScreen = false }) {
  const avocadoSize = size === "sm" ? "text-3xl" : size === "lg" ? "text-7xl" : "text-5xl";
  const fruitSize = size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-lg";
  const stageSize = size === "sm" ? "w-16 h-14" : size === "lg" ? "w-36 h-28" : "w-24 h-20";

  const content = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`relative ${stageSize} flex items-end justify-center`} aria-hidden="true">
        <span
          className={`ivar-loader-fruit absolute ${fruitSize} leading-none select-none`}
          style={{ left: "6%", top: "4%", "--ivar-fruit-tx": "10px", animationDelay: "0s" }}
        >
          🍅
        </span>
        <span
          className={`ivar-loader-fruit absolute ${fruitSize} leading-none select-none`}
          style={{ left: "50%", top: "-6%", transform: "translateX(-50%)", "--ivar-fruit-tx": "0px", animationDelay: "0.25s" }}
        >
          🥦
        </span>
        <span
          className={`ivar-loader-fruit absolute ${fruitSize} leading-none select-none`}
          style={{ right: "6%", top: "4%", "--ivar-fruit-tx": "-10px", animationDelay: "0.5s" }}
        >
          🍄
        </span>
        <span
          className={`ivar-loader-avocado ${avocadoSize} leading-none select-none relative z-10`}
          role="img"
          aria-label="Loading"
        >
          🥑
        </span>
      </div>
      {label && (
        <p className="text-xs tracking-wide text-[#6b7771] flex items-center gap-1.5" suppressHydrationWarning>
          {label}
          <span className="flex gap-0.5 ml-1">
            <span className="ivar-loader-dot size-1 rounded-full bg-ivar-dark" style={{ animationDelay: "0s" }} />
            <span className="ivar-loader-dot size-1 rounded-full bg-ivar-dark" style={{ animationDelay: "0.2s" }} />
            <span className="ivar-loader-dot size-1 rounded-full bg-ivar-dark" style={{ animationDelay: "0.4s" }} />
          </span>
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fbfaf5]">
        {content}
      </div>
    );
  }

  return content;
}
