import { featured, flavorNotes, radarValues } from '../data/products'
import { useCart } from '../CartContext'
import RadarChart from './RadarChart'
import Reveal from './Reveal'

function SnapStudy() {
  return (
    <div className="relative w-[min(400px,78%)] rotate-[-5deg]">
      <div className="relative aspect-[3/4] drop-shadow-[0_60px_80px_rgba(0,0,0,0.85)]">
        <div
          className="absolute inset-0"
          style={{
            clipPath:
              'polygon(0 0,100% 0,100% 88%,88% 96%,76% 88%,62% 97%,49% 89%,35% 98%,22% 90%,9% 96%,0 90%)',
            background: 'linear-gradient(160deg,#66301a,#2a1109 58%,#180a06)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(0,0,0,.42) 0 2px, transparent 2px 25%), repeating-linear-gradient(0deg, rgba(255,255,255,.045) 0 1px, transparent 1px 14%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(112deg, transparent 20%, rgba(255,238,198,.3) 40%, rgba(255,238,198,.05) 47%, transparent 58%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(90% 60% at 14% 8%, rgba(255,200,140,.2), transparent 70%)',
            }}
          />
          <div
            className="absolute inset-x-0 top-[46%] h-[10px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, #b57a1c 12%, #f0c368 46%, #a96a12 78%, transparent)',
              filter: 'blur(1px)',
              opacity: 0.75,
            }}
          />
        </div>

        <div
          className="absolute inset-x-0 top-0 h-[27%]"
          style={{
            background:
              'linear-gradient(118deg,#8a6a20,#f6e7ad 38%,#c9a43a 66%,#8a6a20)',
            clipPath:
              'polygon(0 0,100% 0,100% 70%,84% 86%,70% 72%,54% 90%,38% 74%,22% 92%,8% 78%,0 86%)',
            boxShadow: 'inset 0 -22px 34px rgba(0,0,0,.32)',
          }}
        />
      </div>

      <div className="mt-8 flex items-end justify-between border-t border-cream/10 pt-4 text-[0.55rem] uppercase tracking-[0.26em] text-cream/40">
        <span>Fig. 01 — Snap, 31°C</span>
        <span className="text-gold/70">Inventing Room</span>
      </div>
    </div>
  )
}

export default function TastingLab() {
  const { add, openCart } = useCart()

  const addFeatured = () => {
    add(featured)
    openCart()
  }

  return (
    <section id="tasting-lab" className="relative border-t border-gold/15">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)]">
        <div className="relative flex items-center justify-center overflow-hidden border-b border-gold/10 px-6 py-20 lg:sticky lg:top-0 lg:h-[100svh] lg:border-b-0 lg:border-r lg:py-0">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(70% 60% at 50% 35%, rgba(61,26,61,0.5), transparent 70%), radial-gradient(50% 40% at 80% 90%, rgba(212,175,55,0.08), transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="relative flex w-full max-w-md flex-col items-center">
            <SnapStudy />
            <div className="mt-10 flex items-center gap-3 rounded-full border border-cream/15 px-5 py-2.5 text-[0.55rem] uppercase tracking-[0.3em] text-cream/50 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" aria-hidden="true" />
              Cacao fluid at 31°C
            </div>
          </div>
        </div>

        <div className="px-5 py-20 sm:px-10 lg:py-32 lg:pl-14 lg:pr-20 xl:pl-20">
          <Reveal>
            <p className="eyebrow">03 — The Tasting Lab</p>
            <h2 className="mt-4 text-[clamp(2.6rem,5vw,4.4rem)] text-cream">
              The 31°C <span className="italic text-gold-soft">Snap</span>
            </h2>
            <p className="mt-6 max-w-xl text-cream/65">
              Tempered by hand at the exact degree where cacao crystallises into a mirror
              finish — then broken, so you can hear the difference before you taste it.
              This is the only bar we make every single day.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-14 grid items-center gap-10 sm:grid-cols-[220px_1fr] sm:gap-12">
            <RadarChart values={radarValues} />
            <dl className="space-y-5">
              {flavorNotes.map((entry) => (
                <div key={entry.label} className="border-b border-cream/10 pb-4">
                  <dt className="text-[0.55rem] uppercase tracking-[0.32em] text-gold/80">
                    {entry.label}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-cream/75">
                    {entry.note}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={160} className="mt-16 border-t border-cream/10 pt-10">
            <p className="eyebrow">The Inventing Story</p>
            <div className="mt-5 space-y-4 text-cream/65">
              <p>
                Batch forty-one began with a mistake: a spill of scorched caramel across the
                tempering table. Rather than scrape it clean, the room let it set — and the
                snap that came back was darker, saltier, and stranger than anything on file.
              </p>
              <p>
                We have been chasing that accident ever since. Every bar is poured by hand,
                rested for eleven minutes, and wrapped while the brass is still warm.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {['72% heirloom cacao', 'Cane sugar', 'Cocoa butter', 'Sea salt', 'Vanilla bean'].map(
                (item) => (
                  <li
                    key={item}
                    className="rounded-full border border-cream/12 px-4 py-1.5 text-[0.58rem] uppercase tracking-[0.2em] text-cream/50"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <Reveal delay={200} className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <button type="button" onClick={addFeatured} className="btn-gold">
              Add to cart — ${featured.price}
            </button>
            <p className="max-w-[15rem] text-[0.62rem] uppercase leading-relaxed tracking-[0.22em] text-cream/40">
              {featured.unit} · wrapped warm · shipped in brass
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
