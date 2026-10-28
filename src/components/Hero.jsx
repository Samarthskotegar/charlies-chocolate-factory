import WonkaBar from './WonkaBar'
import { useParallax, useIsMobile } from '../hooks/useScroll'

export default function Hero() {
  const ambientRef = useParallax(0.07)
  const studyRef = useParallax(0.035)
  const isMobile = useIsMobile()
  const titleSize = isMobile ? 'text-[13.5vw]' : 'text-[clamp(4rem,7.6vw,8.2rem)]'

  return (
    <section
      id="gateway"
      className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:min-h-[100svh] lg:px-12 lg:pb-16 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 100% at 50% 0%, #3d1a3d 0%, #2a1216 32%, #180a07 60%, #1a0d08 100%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.55] lg:hidden">
          <div ref={ambientRef} className="translate-y-[8%]">
            <WonkaBar className="!w-[min(600px,94vw)]" />
          </div>
        </div>
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              'radial-gradient(60% 46% at 50% 42%, rgba(16,7,4,0.94) 0%, rgba(16,7,4,0.8) 42%, rgba(16,7,4,0.32) 66%, transparent 82%)',
          }}
        />
        <div className="absolute -left-40 top-1/3 h-[460px] w-[460px] rounded-full bg-gold/10 blur-[130px]" />
        <div className="absolute -right-28 bottom-6 h-[380px] w-[380px] rounded-full bg-plum/50 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-noir" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-4">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="fade-up eyebrow" style={{ animationDelay: '80ms' }}>
            Est. 1964 &nbsp;·&nbsp; A Golden Ticket Awaits
          </p>

          <h1 className={`display mt-7 ${titleSize} leading-[0.84] text-cream`}>
            <span
              className="fade-up block font-sans text-[0.58rem] font-semibold uppercase tracking-widest2 text-gold/85 sm:text-[0.68rem]"
              style={{ animationDelay: '160ms' }}
            >
              Charlie&rsquo;s
            </span>
            <span className="fade-up mt-3 block sm:mt-5" style={{ animationDelay: '240ms' }}>
              Chocolate
            </span>
            <span
              className="fade-up block italic text-gold-soft"
              style={{ animationDelay: '340ms' }}
            >
              Factory
            </span>
          </h1>

          <p
            className="fade-up mt-8 max-w-lg text-balance text-[1rem] leading-relaxed text-cream/70 sm:text-lg"
            style={{ animationDelay: '440ms' }}
          >
            Five rooms, one temperamental river of cacao. Confectionery engineered in the
            Inventing Room, sealed under brass, and sent up the glass elevator.
          </p>

          <div
            className="fade-up mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
            style={{ animationDelay: '540ms' }}
          >
            <a href="#inventing-room" className="btn-gold w-full sm:w-auto">
              Enter the Factory
              <span aria-hidden="true">→</span>
            </a>
            <a href="#map" className="btn-ghost w-full justify-center sm:w-auto">
              Read the floor plan
            </a>
          </div>

          <dl
            className="fade-up mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[0.55rem] uppercase tracking-[0.26em] text-cream/40 lg:justify-start"
            style={{ animationDelay: '640ms' }}
          >
            <div>Hand-tempered</div>
            <div className="h-1 w-1 rounded-full bg-gold/60" aria-hidden="true" />
            <div>Sealed in brass</div>
            <div className="h-1 w-1 rounded-full bg-gold/60" aria-hidden="true" />
            <div>Shipped in 48 hours</div>
          </dl>
        </div>

        <div className="relative hidden justify-end lg:flex">
          <div ref={studyRef} className="relative w-[min(36vw,400px)]">
            <div
              className="absolute -inset-12 rounded-full bg-gold/10 blur-[90px]"
              aria-hidden="true"
            />
            <WonkaBar className="!w-full" />
            <div className="mt-10 flex items-center justify-between border-t border-cream/10 pt-4 text-[0.53rem] uppercase tracking-[0.24em] text-cream/40">
              <span>Fig. 00 — The unwrapping</span>
              <span className="text-gold/75">Gold leaf · batch 41</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
