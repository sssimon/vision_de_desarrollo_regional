import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'gold' | 'ghost' | 'dark'
  href?: string
  onClick?: () => void
  className?: string
  children: ReactNode
}

/** Mapea a las clases globales `.btn .btn-gold|btn-ghost|btn-dark`. */
export default function Button({ variant = 'gold', href, onClick, className, children }: ButtonProps) {
  const cls = `btn btn-${variant}${className ? ` ${className}` : ''}`
  if (href !== undefined) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
