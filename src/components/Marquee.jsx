const items = [
  'Pure Imagination',
  'Tempered at 31°C',
  'Everlasting Gobstoppers',
  'Sealed in Brass',
  'One Golden Ticket Per Run',
  'Shipped in 48 Hours',
]

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-gold/20 bg-noir-deep py-4">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-6 whitespace-nowrap px-6 text-[0.58rem] uppercase tracking-[0.34em] text-cream/45"
              >
                <span className="h-1 w-1 rounded-full bg-gold/60" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
