import { useCallback, useEffect, useRef, useState } from 'react'
import { navCta, navLinks } from '../../data/content'
import Button from '../ui/Button'
import s from './Nav.module.css'

/**
 * Nav sticky de la referencia + menú móvil real (<820px), que la maqueta
 * no trae: panel dropdown bajo la barra, hamburguesa con aria-expanded,
 * cierre con Esc / click en link, scroll-lock y retorno de foco al botón.
 */
export default function Nav() {
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => setOpen(false), [])

  // Esc cierra y devuelve el foco a la hamburguesa
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        btnRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  // Scroll-lock mientras el panel está abierto
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Si el viewport vuelve a desktop, el panel se cierra solo
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)')
    const onChange = () => {
      if (!mq.matches) close()
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [close])

  return (
    <nav className={s.nav} aria-label="Principal">
      <div className={s.bar}>
        <div className="brand">
          <b>TÁCHIRA</b> 2030
        </div>
        <div className={s.links}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <Button href={navCta.href} variant="gold" className={s.cta}>
          {navCta.label}
        </Button>
        <button
          ref={btnRef}
          type="button"
          className={s.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M2 5.5h18M2 11h18M2 16.5h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>
      <div id="mobile-menu" className={s.panel} hidden={!open}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className={s.panelLink} onClick={close}>
            {l.label}
          </a>
        ))}
        <Button href={navCta.href} variant="gold" className={s.panelCta} onClick={close}>
          {navCta.label}
        </Button>
      </div>
    </nav>
  )
}
