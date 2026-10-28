import { useRef } from 'react'

export default function WonkaBar({ className = '' }) {
  const ref = useRef(null)

  const onPointerMove = (event) => {
    const element = ref.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    element.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    element.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      role="img"
      aria-label="Macro study of a Wonka Bar half-unwrapped from gold foil"
      className={`group wonka-bar ${className}`}
    >
      <div className="wonka-bar__choc" />
      <div className="wonka-bar__foil" />
      <div className="wonka-bar__sweep" />
      <div className="wonka-bar__sheen" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-noir/20" />
    </div>
  )
}
