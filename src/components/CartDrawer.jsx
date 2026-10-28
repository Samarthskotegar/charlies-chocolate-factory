import { useEffect, useRef, useState } from 'react'
import { useCart } from '../CartContext'
import { useBodyLock } from '../hooks/useScroll'
import Confetti from './Confetti'

function Swatch({ product }) {
  return (
    <span
      className="h-12 w-12 shrink-0 rounded-full"
      style={{
        background: `radial-gradient(circle at 32% 26%, rgba(255,255,255,.6), ${product.accent} 52%, rgba(10,4,2,.9))`,
        boxShadow: 'inset 0 -6px 12px rgba(0,0,0,.5), 0 8px 18px -10px rgba(0,0,0,.9)',
      }}
      aria-hidden="true"
    />
  )
}

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, closeCart, setQty, remove, clear } = useCart()
  const [view, setView] = useState('cart')
  const [order, setOrder] = useState('')
  const [celebration, setCelebration] = useState(0)
  const closeRef = useRef(null)

  useBodyLock(isOpen)

  useEffect(() => {
    if (!isOpen) {
      const timer = window.setTimeout(() => setView('cart'), 450)
      return () => window.clearTimeout(timer)
    }
    closeRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  useEffect(() => {
    if (!celebration) return
    const timer = window.setTimeout(() => setCelebration(0), 3600)
    return () => window.clearTimeout(timer)
  }, [celebration])

  const checkout = () => {
    setOrder(`WK-${Math.floor(1000 + Math.random() * 9000)}`)
    setView('done')
    setCelebration((value) => value + 1)
    clear()
  }

  const browse = () => {
    closeCart()
    document.getElementById('inventing-room')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className={`fixed inset-0 z-[80] ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
        <div
          onClick={closeCart}
          className={`absolute inset-0 bg-noir-deep/70 backdrop-blur-md transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="The Great Glass Checkout"
          className={`absolute inset-x-0 top-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,0.84,0.28,1)] ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="border-b border-gold/35 bg-noir-deep/92 shadow-[0_50px_90px_-30px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
            <div className="mx-auto max-w-4xl px-5 py-6 sm:px-8 sm:py-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow">The Great Glass Checkout</p>
                  <h2 className="mt-2 font-display text-[1.7rem] leading-none text-cream sm:text-[2rem]">
                    {view === 'done' ? 'Ticket secured' : 'Your elevator is loading'}
                  </h2>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={closeCart}
                  aria-label="Close cart"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <span aria-hidden="true" className="text-lg leading-none">
                    ×
                  </span>
                </button>
              </div>

              {view === 'done' ? (
                <div className="py-12 text-center">
                  <p className="text-[0.6rem] uppercase tracking-[0.32em] text-gold">
                    Order {order}
                  </p>
                  <p className="mx-auto mt-4 max-w-md font-display text-[1.6rem] leading-tight text-cream">
                    Wrapped while the brass was still warm.
                  </p>
                  <p className="mx-auto mt-4 max-w-md text-[0.9rem] text-cream/55">
                    This is a demonstration storefront — no payment was taken and nothing will
                    ship. The confetti, however, was real gold foil.
                  </p>
                  <button type="button" onClick={closeCart} className="btn-ghost mt-8">
                    Back to the factory
                  </button>
                </div>
              ) : items.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="font-display text-[1.5rem] text-cream/80">The elevator is empty.</p>
                  <p className="mx-auto mt-3 max-w-sm text-[0.9rem] text-cream/50">
                    Run the conveyor and pull a tube or two off the belt.
                  </p>
                  <button type="button" onClick={browse} className="btn-ghost mt-8">
                    Browse the conveyor
                  </button>
                </div>
              ) : (
                <>
                  <ul className="mt-7 max-h-[46vh] divide-y divide-cream/10 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-center gap-4 py-4">
                        <Swatch product={item} />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-display text-[1.15rem] leading-tight text-cream">
                            {item.name}
                          </p>
                          <p className="mt-1 text-[0.58rem] uppercase tracking-[0.2em] text-cream/40">
                            {item.unit}
                          </p>
                        </div>

                        <div className="flex items-center gap-1 rounded-full border border-cream/15 px-1.5 py-1">
                          <button
                            type="button"
                            onClick={() => setQty(item.id, item.qty - 1)}
                            aria-label={`Remove one ${item.name}`}
                            className="grid h-7 w-7 place-items-center rounded-full text-cream/60 transition-colors hover:bg-cream/10 hover:text-gold"
                          >
                            &minus;
                          </button>
                          <span className="w-5 text-center text-sm tabular-nums text-cream/80">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(item.id, item.qty + 1)}
                            aria-label={`Add one ${item.name}`}
                            className="grid h-7 w-7 place-items-center rounded-full text-cream/60 transition-colors hover:bg-cream/10 hover:text-gold"
                          >
                            +
                          </button>
                        </div>

                        <span className="w-14 text-right font-display text-[1.05rem] text-gold">
                          ${item.price * item.qty}
                        </span>

                        <button
                          type="button"
                          onClick={() => remove(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                          className="text-[0.58rem] uppercase tracking-[0.18em] text-cream/35 transition-colors hover:text-gold"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-5 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[0.55rem] uppercase tracking-[0.3em] text-cream/40">
                        Subtotal · {count} {count === 1 ? 'piece' : 'pieces'}
                      </p>
                      <p className="mt-1 font-display text-[1.9rem] leading-none text-cream">
                        ${subtotal}
                      </p>
                      <p className="mt-2 text-[0.58rem] uppercase tracking-[0.2em] text-cream/35">
                        Glass-elevator delivery included
                      </p>
                    </div>
                    <button type="button" onClick={checkout} className="btn-gold w-full sm:w-auto">
                      Golden Checkout
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {celebration ? <Confetti burstKey={celebration} /> : null}
    </>
  )
}
