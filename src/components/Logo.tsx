import { useId } from 'react'

type Props = { size?: number; onDark?: boolean }

/**
 * NAJA drop mark: a red drop folded like a ribbon, with a negative-space inner drop
 * and a green fold at its base (light fold on dark backgrounds, as on the app icon).
 */
export function Logo({ size = 28, onDark = false }: Props) {
  const id = useId().replace(/:/g, '')
  return (
    <svg width={size * 0.78} height={size} viewBox="0 0 78 100" aria-hidden="true">
      <defs>
        <linearGradient id={`r${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0475A" />
          <stop offset="1" stopColor="#A81E30" />
        </linearGradient>
        <mask id={`m${id}`}>
          <rect width="78" height="100" fill="#fff" />
          <path d="M44 44 C44 44 27 63 27 76 a15 15 0 0 0 30 0 C57 66 44 44 44 44 Z" fill="#000" />
        </mask>
      </defs>
      <path mask={`url(#m${id})`} d="M39 2 C39 2 5 44 5 66 a34 34 0 0 0 68 0 C73 44 39 2 39 2 Z" fill={`url(#r${id})`} />
      <path d="M6 70 C9 88 24 99 40 99 C30 94 21 84 19 70 C17 58 22 50 26 44 C14 52 5 60 6 70 Z" fill={onDark ? '#F5F3EE' : '#0B3D36'} />
    </svg>
  )
}

/** Logo + Arabic wordmark "نَجا" with the spaced Latin "NAJA" underneath. */
export function Wordmark({ size = 30, onDark = false }: Props) {
  return (
    <span className="wordmark" aria-label="نَجا NAJA">
      <Logo size={size} onDark={onDark} />
      <span>
        <span className="ar">نَجا</span>
        <span className="en">NAJA</span>
      </span>
    </span>
  )
}
