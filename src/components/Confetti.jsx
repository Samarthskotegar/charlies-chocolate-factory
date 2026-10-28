import { useMemo } from 'react'

export default function Confetti({ burstKey }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 38 }, (_, index) => ({
        id: `${burstKey}-${index}`,
        left: Math.random() * 100,
        drift: (Math.random() * 2 - 1) * 240,
        rotation: 320 + Math.random() * 760,
        duration: 1.9 + Math.random() * 1.5,
        delay: Math.random() * 0.4,
        width: 6 + Math.random() * 6,
        height: 10 + Math.random() * 11,
      })),
    [burstKey],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[96] overflow-hidden" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="foil-piece"
          style={{
            left: `${piece.left}%`,
            width: piece.width,
            height: piece.height,
            animationDelay: `${piece.delay}s`,
            '--dx': `${piece.drift.toFixed(0)}px`,
            '--rot': `${piece.rotation.toFixed(0)}deg`,
            '--dur': `${piece.duration.toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  )
}
