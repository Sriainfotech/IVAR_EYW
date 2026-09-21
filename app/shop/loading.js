export default function ShopLoading() {
  return (
    <main aria-busy="true" aria-label="Loading menu">
      <div className="py-12 md:py-16 px-[6vw] bg-ivar-mint">
        <div className="skeleton h-10 w-56 rounded-xl mx-auto" />
        <div className="skeleton h-4 w-80 max-w-full rounded mx-auto mt-4" />
      </div>
      <div className="max-w-[1320px] mx-auto px-[6vw] py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-[0_6px_24px_#064C3512]">
            <div className="skeleton aspect-square" />
            <div className="p-4 space-y-3">
              <div className="skeleton h-4 w-3/4 rounded" />
              <div className="skeleton h-3 w-1/2 rounded" />
              <div className="skeleton h-8 w-full rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
