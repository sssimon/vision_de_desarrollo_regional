import type { CSSProperties } from 'react'
import type { Affix } from '../../data/content'

interface StatProps {
  /** Cifra principal (ya formateada, p. ej. "$1.219,7" o "≈$2.580"). */
  value: string
  /** Unidad o sufijo con tamaño relativo exacto de la referencia. */
  affix?: Affix
  className?: string
  style?: CSSProperties
}

/**
 * Cifra grande con sufijo opcional — replica los spans inline de la
 * referencia: `<span style="font-size:.5em;color:var(--gold)"> M</span>`.
 * Los sufijos `gold` llevan color dorado; los demás ("/año") heredan.
 */
export default function Stat({ value, affix, className, style }: StatProps) {
  return (
    <div className={className} style={style}>
      {value}
      {affix && (
        <span
          style={{
            fontSize: `${affix.size}em`,
            ...(affix.gold ? { color: 'var(--gold)' } : undefined),
          }}
        >
          {affix.text}
        </span>
      )}
    </div>
  )
}
