import { useEffect, useRef } from 'react'

export default function CursorSeal() {
  const wrapRef = useRef(null)
  const sealRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const seal = sealRef.current
    if (!wrap || !seal) return
    // Only on devices with a real pointer: a fine hover pointer, or a machine with no
    // touch input at all (some desktop browsers report no hover capability).
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const isTouchOnly = navigator.maxTouchPoints > 0 && !hasFinePointer
    if (isTouchOnly) return

    document.body.classList.add('seal-ready')

    let targetX = -100
    let targetY = -100
    let x = -100
    let y = -100
    let frame = 0

    const render = () => {
      x += (targetX - x) * 0.24
      y += (targetY - y) * 0.24
      wrap.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`
      if (Math.abs(targetX - x) > 0.15 || Math.abs(targetY - y) > 0.15) {
        frame = requestAnimationFrame(render)
      } else {
        frame = 0
      }
    }

    const onMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onOver = (event) => {
      const interactive = event.target.closest?.('a, button, [data-seal]')
      seal.classList.toggle('is-active', Boolean(interactive))
    }

    const onLeave = () => seal.classList.remove('is-active')

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    return () => {
      document.body.classList.remove('seal-ready')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={wrapRef} className="pointer-events-none fixed left-0 top-0 z-[95]" aria-hidden="true">
      <div ref={sealRef} className="seal">
        W
      </div>
    </div>
  )
}
