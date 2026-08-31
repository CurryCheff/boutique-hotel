import { hotel } from '../data/hotel'

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  hotel.mapsQuery
)}`

export default function MapPlaceholder() {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-dark bg-stone">
      <div className="relative aspect-[4/3] w-full">
        <svg
          viewBox="0 0 400 300"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="400" height="300" fill="#ece4d6" />
          {[40, 110, 180, 250, 320, 390].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" stroke="#d9cdb8" strokeWidth="2" />
          ))}
          {[30, 90, 150, 210, 270].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#d9cdb8" strokeWidth="2" />
          ))}
          <rect x="150" y="90" width="60" height="60" fill="#d9cdb8" opacity="0.7" />
          <rect x="250" y="150" width="70" height="60" fill="#d9cdb8" opacity="0.5" />
          <circle cx="205" cy="140" r="60" fill="#2d3b2a" opacity="0.06" />
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[85%]">
          <svg width="34" height="44" viewBox="0 0 34 44" fill="none">
            <path
              d="M17 0C7.6 0 0 7.6 0 17c0 12.7 17 27 17 27s17-14.3 17-27C34 7.6 26.4 0 17 0Z"
              fill="#b5562f"
            />
            <circle cx="17" cy="17" r="6.5" fill="#f6f1e9" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-ink">{hotel.addressLine1}</p>
          <p className="text-sm text-ink/60">{hotel.addressLine2}</p>
        </div>
        <a
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap text-sm font-medium text-forest underline decoration-rust/40 underline-offset-4 hover:text-rust"
        >
          Open in Google Maps →
        </a>
      </div>
    </div>
  )
}
