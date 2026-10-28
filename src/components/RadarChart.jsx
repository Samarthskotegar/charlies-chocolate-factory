import { useInView } from '../hooks/useScroll'

const axes = [
  { key: 'sweet', label: 'Sweet' },
  { key: 'salt', label: 'Salt' },
  { key: 'crunch', label: 'Crunch' },
  { key: 'wonder', label: 'Wonder' },
]

const SIZE = 240
const CENTER = SIZE / 2
const RADIUS = 82

function point(index, value) {
  const angle = (Math.PI * 2 * index) / axes.length - Math.PI / 2
  return [CENTER + Math.cos(angle) * RADIUS * value, CENTER + Math.sin(angle) * RADIUS * value]
}

function polygon(scale) {
  return axes
    .map((_, index) => point(index, scale))
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(' ')
}

export default function RadarChart({ values }) {
  const [ref, inView] = useInView({ threshold: 0.35 })
  const shape = axes.map((axis, index) => point(index, values[axis.key] ?? 0))

  return (
    <div ref={ref} className="relative">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-[220px] w-[220px] sm:h-[240px] sm:w-[240px]"
        role="img"
        aria-label={`Flavour profile: ${axes
          .map((axis) => `${axis.label} ${Math.round((values[axis.key] ?? 0) * 100)} percent`)
          .join(', ')}`}
      >
        {[0.25, 0.5, 0.75, 1].map((ring) => (
          <polygon
            key={ring}
            points={polygon(ring)}
            fill="none"
            stroke="rgba(255,249,240,0.12)"
            strokeWidth="1"
          />
        ))}
        {axes.map((axis, index) => {
          const [x, y] = point(index, 1)
          return (
            <line
              key={axis.key}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="rgba(255,249,240,0.12)"
              strokeWidth="1"
            />
          )
        })}

        <polygon
          className={`radar-shape ${inView ? 'is-visible' : ''}`}
          points={shape.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')}
          fill="rgba(212,175,55,0.22)"
          stroke="#D4AF37"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {shape.map(([x, y], index) => (
          <circle
            key={axes[index].key}
            cx={x}
            cy={y}
            r="3.2"
            fill="#EFD68B"
            className={`transition-opacity duration-700 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${450 + index * 90}ms` }}
          />
        ))}
      </svg>

      {axes.map((axis, index) => {
        const [x, y] = point(index, 1.24)
        return (
          <span
            key={axis.key}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-[0.52rem] uppercase tracking-[0.24em] text-cream/45"
            style={{ left: `${(x / SIZE) * 100}%`, top: `${(y / SIZE) * 100}%` }}
          >
            {axis.label}
          </span>
        )
      })}
    </div>
  )
}
