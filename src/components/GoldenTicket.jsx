import { useState } from 'react'
import Reveal from './Reveal'

export default function GoldenTicket() {
  const [opened, setOpened] = useState(false)

  return (
    <section
      id="ticket"
      className="relative overflow-hidden border-t border-gold/15 bg-[#1c0b1a] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 8%, rgba(61,26,61,0.75), transparent 70%), radial-gradient(70% 60% at 50% 110%, rgba(212,175,55,0.09), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">04 — The Golden Ticket</p>
          <h2 className="mt-5 text-[clamp(2.2rem,4.6vw,3.9rem)] text-cream">
            Five bars in this run are wrapped in{' '}
            <span className="italic text-gold-soft">gold leaf</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/65">
            Open a bar. If the foil is gold all the way through, the factory is yours for a
            day — the gate, the Inventing Room, the whole ridiculous building.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-14">
          <button
            type="button"
            onClick={() => setOpened((value) => !value)}
            aria-expanded={opened}
            className="ticket group mx-auto block w-full max-w-[560px] px-7 py-9 text-left transition-transform duration-500 hover:-translate-y-1 hover:rotate-[-1.2deg] focus-visible:-translate-y-1 sm:px-10 sm:py-11"
          >
            {opened ? (
              <span className="block text-center">
                <span className="block text-[0.55rem] uppercase tracking-[0.42em] opacity-70">
                  Found
                </span>
                <span className="mt-3 block font-display text-[1.9rem] leading-none sm:text-[2.4rem]">
                  You found one.
                </span>
                <span className="ticket-edge my-5 block" aria-hidden="true" />
                <span className="block text-[0.6rem] uppercase tracking-[0.3em] opacity-80">
                  Gate code&nbsp;&nbsp;WONKA&nbsp;·&nbsp;31C
                </span>
                <span className="mt-2 block text-[0.58rem] uppercase tracking-[0.24em] opacity-60">
                  This is a demonstration storefront
                </span>
              </span>
            ) : (
              <span className="flex items-center justify-between gap-6">
                <span>
                  <span className="block text-[0.55rem] uppercase tracking-[0.42em] opacity-70">
                    Admit one
                  </span>
                  <span className="mt-2 block font-display text-[1.9rem] leading-none sm:text-[2.4rem]">
                    Golden Ticket
                  </span>
                  <span className="mt-3 block text-[0.55rem] uppercase tracking-[0.28em] opacity-70">
                    Charlie&rsquo;s Chocolate Factory
                  </span>
                </span>
                <span className="text-center">
                  <span className="block font-display text-[2.4rem] leading-none">W</span>
                  <span className="mt-2 block whitespace-nowrap text-[0.48rem] uppercase tracking-[0.24em] opacity-70">
                    Open a bar
                  </span>
                </span>
              </span>
            )}
          </button>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 text-[0.58rem] uppercase tracking-[0.32em] text-cream/35">
            One ticket per run · drawn in the Inventing Room
          </p>
        </Reveal>
      </div>
    </section>
  )
}
