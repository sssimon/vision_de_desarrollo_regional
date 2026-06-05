import { createElement, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  as?: ElementType
  className?: string
  style?: CSSProperties
  id?: string
  children?: ReactNode
}

/** Wrapper que aplica el patrón `.reveal` de la referencia vía useReveal(). */
export default function Reveal({ as = 'div', className, children, ...rest }: RevealProps) {
  const ref = useReveal<HTMLElement>()
  return createElement(
    as,
    { ref, className: className ? `reveal ${className}` : 'reveal', ...rest },
    children,
  )
}
