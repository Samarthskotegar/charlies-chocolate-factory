import { useInView } from '../hooks/useScroll'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
