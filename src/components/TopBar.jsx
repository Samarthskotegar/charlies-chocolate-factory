import { useCart } from '../CartContext'
import { useScrolled } from '../hooks/useScroll'

export default function TopBar() {
  const { count, openCart } = useCart()
  const scrolled = useScrolled(20)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-cream/10 bg-noir-deep/80 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1560px] items-center justify-between px-5 sm:px-8 md:h-20 lg:px-12">
          <a href="#gateway" className="group flex items-center gap-3" aria-label="Charlie's Chocolate Factory — home">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 font-display text-sm text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-noir">
              W
            </span>
            <span className="leading-none">
              <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.4em] text-gold">
                Charlie&rsquo;s
              </span>
              <span className="mt-1 block font-display text-[1.02rem] tracking-tight text-cream">
                Chocolate Factory
              </span>
            </span>
          </a>

          <div className="flex items-center gap-4 sm:gap-7">
            <span className="hidden text-[0.58rem] uppercase tracking-[0.3em] text-cream/35 sm:block">
              Est. 1964
            </span>
            <button
              type="button"
              onClick={openCart}
              className="group flex items-center gap-2.5 border border-cream/20 px-4 py-2.5 text-[0.6rem] uppercase tracking-[0.3em] text-cream/80 transition-colors duration-300 hover:border-gold hover:text-gold-soft"
              aria-label={`Open cart, ${count} item${count === 1 ? '' : 's'}`}
            >
              Cart
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-gold/15 px-1 text-[0.6rem] tracking-normal text-gold">
                {count}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
