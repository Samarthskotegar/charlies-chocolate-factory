import { useEffect, useRef, useState } from 'react'
import { products } from '../data/products'
import { useCart } from '../CartContext'
import { useIsMobile } from '../hooks/useScroll'
import Confection from './Confection'

function QuickAdd({ product }) {
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const onAdd = () => {
    add(product, qty)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="relative z-20 mt-4 w-full lg:pointer-events-none lg:absolute lg:inset-x-4 lg:bottom-4 lg:mt-0 lg:translate-y-3 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:pointer-events-auto lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
      <div className="flex items-center justify-between gap-2 rounded-full border border-gold/50 bg-noir-deep/90 p-1.5 pl-4 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.95)] backdrop-blur-xl">
        <span className="text-[0.52rem] uppercase tracking-[0.26em] text-gold">Quick Add</span>
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={() => setQty((value) => Math.max(1, value - 1))}
            aria-label={`Decrease quantity of ${product.name}`}
            className="grid h-7 w-7 place-items-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-gold"
          >
            &minus;
          </button>
          <span className="w-5 text-center text-sm tabular-nums text-cream">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((value) => Math.min(9, value + 1))}
            aria-label={`Increase quantity of ${product.name}`}
            className="grid h-7 w-7 place-items-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-gold"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="rounded-full bg-gold px-4 py-2 text-[0.52rem] font-semibold uppercase tracking-[0.24em] text-noir transition-colors hover:bg-gold-soft"
        >
          {added ? 'Added' : 'Add'}
        </button>
      </div>
    </div>
  )
}

function ProductCard({ product, index }) {
  return (
    <article className="group tube relative flex h-[494px] w-[280px] shrink-0 flex-col justify-between overflow-hidden px-6 pb-6 pt-9 transition-transform duration-500 hover:-translate-y-1 sm:w-[320px] lg:h-[452px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(70% 50% at 50% 18%, rgba(212,175,55,0.14), transparent 70%)' }}
      />
      <div className="flex items-start justify-between gap-4">
        <span className="text-[0.55rem] uppercase tracking-[0.28em] text-cream/40">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-right text-[0.55rem] uppercase tracking-[0.24em] text-gold/80">
          {product.tag}
        </span>
      </div>

      <Confection
        product={product}
        className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />

      <div className="relative z-10">
        <h3 className="font-display text-[1.55rem] leading-[1.1] text-cream">{product.name}</h3>
        <p className="mt-2 text-[0.86rem] leading-relaxed text-cream/55">{product.note}</p>
        <div className="mt-5 flex items-baseline justify-between border-t border-cream/10 pt-4">
          <span className="text-[0.62rem] uppercase tracking-[0.22em] text-cream/45">
            {product.unit}
          </span>
          <span className="font-display text-lg text-gold">${product.price}</span>
        </div>
      </div>

      <QuickAdd product={product} />
    </article>
  )
}

export default function Conveyor() {
  const isMobile = useIsMobile()
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    if (isMobile) return
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const distance = rect.height - window.innerHeight
      const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0
      const max = Math.max(0, track.scrollWidth - window.innerWidth + 32)
      track.style.transform = `translate3d(${(-progress * max).toFixed(2)}px, 0, 0)`
      if (progressRef.current) progressRef.current.style.width = `${(progress * 100).toFixed(1)}%`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      track.style.transform = ''
    }
  }, [isMobile])

  const track = (
    <div
      ref={trackRef}
      className={`flex items-stretch gap-5 will-change-transform ${
        isMobile ? 'h-scroll snap-x snap-mandatory overflow-x-auto px-5 pb-4' : 'pl-[8vw] pr-[8vw]'
      }`}
    >
      {products.map((product, index) => (
        <div key={product.id} className={isMobile ? 'snap-center' : undefined}>
          <ProductCard product={product} index={index} />
        </div>
      ))}

      <div className="flex h-[494px] w-[280px] shrink-0 flex-col justify-center gap-5 border-l border-gold/25 pl-7 sm:w-[320px] lg:h-[452px]">
        <span className="eyebrow">End of the line</span>
        <p className="font-display text-[1.7rem] leading-[1.12] text-cream/90">
          Every bar is numbered by hand, then sent up the glass elevator.
        </p>
        <a href="#tasting-lab" className="btn-ghost w-fit">
          Visit the Tasting Lab
        </a>
      </div>
    </div>
  )

  return (
    <section
      id="inventing-room"
      ref={sectionRef}
      className={`relative border-t border-gold/15 ${isMobile ? '' : 'h-[320vh]'}`}
    >
      <div
        className={
          isMobile
            ? 'relative py-20'
            : 'sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden'
        }
      >
        <div className="mx-auto mb-10 w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">02 — Product Line</p>
              <h2 className="mt-4 text-[clamp(2.4rem,5.4vw,4.6rem)] text-cream">
                The Inventing <span className="italic text-gold-soft">Room</span>
              </h2>
            </div>
            <p className="max-w-sm text-[0.92rem] leading-relaxed text-cream/55">
              Seven experiments on a brass conveyor. Every tube can be pulled straight off the
              belt.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-cream/10">
              <div ref={progressRef} className="h-px w-0 bg-gold/80" />
            </div>
            <span className="hidden text-[0.55rem] uppercase tracking-[0.3em] text-cream/40 md:block">
              {isMobile ? 'Swipe the belt' : 'Scroll to run the belt'}
            </span>
          </div>
        </div>

        {track}
      </div>
    </section>
  )
}
