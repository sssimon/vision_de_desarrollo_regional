import type { CSSProperties, ReactNode } from 'react'

interface KickerProps {
  className?: string
  style?: CSSProperties
  children: ReactNode
}

/** Kicker/eyebrow mono dorado (`.eyebrow` global). */
export default function Kicker({ className, style, children }: KickerProps) {
  return (
    <div className={className ? `eyebrow ${className}` : 'eyebrow'} style={style}>
      {children}
    </div>
  )
}
