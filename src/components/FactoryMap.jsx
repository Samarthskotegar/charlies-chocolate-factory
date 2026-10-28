import { useCart } from '../CartContext'
import Reveal from './Reveal'

function PipeArt() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 1200 460"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M-20 120 H140 Q180 120 180 160 V260 Q180 300 220 300 H300"
        stroke="rgba(212,175,55,0.3)"
        strokeWidth="1"
      />
      <path
        d="M420 300 H600 Q640 300 640 340 V420"
        stroke="rgba(212,175,55,0.22)"
        strokeWidth="1"
      />
      <path
        d="M860 120 H1000 Q1040 120 1040 80 V20"
        stroke="rgba(212,175,55,0.3)"
        strokeWidth="1"
      />
      <path d="M1040 200 H1120" stroke="rgba(212,175,55,0.18)" strokeWidth="1" />
      <circle cx="180" cy="120" r="5" stroke="rgba(212,175,55,0.45)" strokeWidth="1" />
      <circle cx="640" cy="340" r="5" stroke="rgba(212,175,55,0.45)" strokeWidth="1" />
      <circle cx="1040" cy="120" r="5" stroke="rgba(212,175,55,0.45)" strokeWidth="1" />
      <circle cx="1120" cy="200" r="3" fill="rgba(212,175,55,0.4)" />
      <circle cx="-10" cy="120" r="3" fill="rgba(212,175,55,0.4)" />
      <path
        d="M60 420 H200 Q240 420 240 400 V380"
        stroke="rgba(212,175,55,0.14)"
        strokeWidth="1"
      />
    </svg>
  )
}

function Room({ title, level, links }) {
  return (
    <div className="relative border border-cream/12 bg-cream/[0.02] p-6 backdrop-blur-sm transition-colors duration-500 hover:border-gold/35">
      <span className="absolute -left-px -top-px h-2.5 w-2.5 border-l border-t border-gold/60" aria-hidden="true" />
      <span className="absolute -bottom-px -right-px h-2.5 w-2.5 border-b border-r border-gold/60" aria-hidden="true" />

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[1.3rem] leading-tight text-cream">{title}</h3>
        <span className="text-[0.5rem] uppercase tracking-[0.26em] text-gold/60">{level}</span>
      </div>

      <ul className="mt-5 space-y-1">
        {links.map((link) => (
          <li key={link.label}>
            {link.onClick ? (
              <button
                type="button"
                onClick={link.onClick}
                className="group flex w-full items-center justify-between gap-3 py-1.5 text-left text-[0.68rem] uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="text-gold/0 transition-colors group-hover:text-gold" aria-hidden="true">
                  →
                </span>
              </button>
            ) : (
              <a
                href={link.href}
                className="group flex w-full items-center justify-between gap-3 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="text-gold/0 transition-colors group-hover:text-gold" aria-hidden="true">
                  →
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function FactoryMap() {
  const { openCart } = useCart()

  return (
    <footer id="map" className="relative overflow-hidden border-t border-gold/15 bg-noir">
      <div className="mx-auto max-w-[1500px] px-5 pt-20 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">05 — Level 00</p>
            <h2 className="mt-4 text-[clamp(2.3rem,4.6vw,3.8rem)] text-cream">
              Factory Floor <span className="italic text-gold-soft">Plan</span>
            </h2>
          </div>
          <p className="max-w-sm text-[0.92rem] leading-relaxed text-cream/50">
            Follow the pipes. Every door in this building opens onto something edible.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-4 md:grid-cols-3">
          <PipeArt />

          <Reveal className="relative z-10" delay={60}>
            <Room
              title="The Inventing Room"
              level="Room 01"
              links={[
                { label: 'Conveyor Line', href: '#inventing-room' },
                { label: 'The Tasting Lab', href: '#tasting-lab' },
                { label: 'Golden Ticket', href: '#ticket' },
              ]}
            />
          </Reveal>
          <Reveal className="relative z-10" delay={140}>
            <Room
              title="The Tasting Lab"
              level="Room 02"
              links={[
                { label: 'The 31°C Snap', href: '#tasting-lab' },
                { label: 'Heirloom Cacao', href: '#tasting-lab' },
                { label: 'Flavour Radar', href: '#tasting-lab' },
              ]}
            />
          </Reveal>
          <Reveal className="relative z-10" delay={220}>
            <Room
              title="The Glass Elevator"
              level="Room 03"
              links={[
                { label: 'Your Cart', onClick: openCart },
                { label: 'Open a Bar', href: '#ticket' },
                { label: 'Return to the Gate', href: '#gateway' },
              ]}
            />
          </Reveal>
        </div>

        <div className="mt-16 overflow-hidden">
          <p
            className="display select-none whitespace-nowrap text-center text-[clamp(3rem,15vw,13rem)] leading-[0.78] text-cream/[0.055]"
            aria-hidden="true"
          >
            Charlie&rsquo;s
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-cream/10">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-3 px-5 py-6 text-center text-[0.52rem] uppercase tracking-[0.28em] text-cream/35 sm:flex-row sm:px-8 sm:text-left lg:px-12">
          <span>© 2026 Charlie&rsquo;s Chocolate Factory</span>
          <span>Hand-tempered · Sealed in brass</span>
          <span>A demonstration storefront</span>
        </div>
      </div>
    </footer>
  )
}
