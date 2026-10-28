import { useEffect, useState } from 'react'
import { sections } from '../data/products'
import { useActiveSection } from '../hooks/useScroll'

export default function GlassElevator() {
  const active = useActiveSection(sections.map((section) => section.id))
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
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
    }
  }, [])

  return (
    <nav
      aria-label="Factory rooms"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:block lg:right-7"
    >
      <div className="relative flex flex-col items-end gap-5 rounded-[28px] border border-cream/10 bg-noir-deep/45 px-3.5 py-6 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.95)] backdrop-blur-xl">
        <span className="absolute bottom-9 right-[26px] top-9 w-px bg-cream/10" aria-hidden="true" />
        <span
          className="absolute right-[26px] top-9 w-px bg-gradient-to-b from-gold to-gold/40 transition-[height] duration-200 ease-out"
          style={{ height: `calc(${progress * 100}% - 4px)` }}
          aria-hidden="true"
        />

        {sections.map((section) => {
          const isActive = active === section.id
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? 'true' : undefined}
              className="group/room flex items-center gap-3"
            >
              <span
                className={`whitespace-nowrap text-[0.55rem] uppercase tracking-[0.28em] transition-all duration-300 ${
                  isActive
                    ? 'text-gold opacity-100'
                    : 'text-cream/55 opacity-0 group-hover/room:opacity-100'
                }`}
              >
                {section.label}
              </span>
              <span
                className={`relative z-10 grid h-[22px] w-[22px] place-items-center rounded-full border text-[0.5rem] tracking-normal transition-all duration-500 ${
                  isActive
                    ? 'border-gold bg-gold text-noir shadow-[0_0_20px_rgba(212,175,55,0.6)]'
                    : 'border-cream/25 bg-noir-deep text-cream/60 group-hover/room:border-gold/70 group-hover/room:text-gold'
                }`}
              >
                {section.index}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
