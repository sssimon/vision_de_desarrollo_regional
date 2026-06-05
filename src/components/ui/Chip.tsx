import type { ReactNode } from 'react'
import type { Estado } from '../../data/content'

interface ChipProps {
  estado: Estado
  children: ReactNode
}

/** Chip de estado: `.chip .crit|part|go|plan` (punto + texto mono mayúsculas). */
export default function Chip({ estado, children }: ChipProps) {
  return <span className={`chip ${estado}`}>{children}</span>
}
