import { useEffect, useRef, useState } from 'react'

export function useInView({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}

export function useParallax(speed = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed
      element.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`
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
  }, [speed])

  return ref
}

export function useIsMobile(query = '(max-width: 767px)') {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    const onChange = () => setIsMobile(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [query])

  return isMobile
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!elements.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.05, 0.25, 0.5, 1] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export function useBodyLock(locked) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}

export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}
