import { useEffect, useRef } from 'react'

/**
 * Scroll-reveal de la referencia: añade la clase `.in` cuando el elemento
 * entra al viewport (IntersectionObserver, threshold .12, rootMargin -8%).
 *
 * El estado base es SIEMPRE visible — el CSS solo aplica
 * `transform: translateY(18px)` mientras `.js .reveal:not(.in)` —
 * así el contenido nunca desaparece sin JS, en SSR ni en captura estática.
 *
 * Red de seguridad (igual que la referencia): 1400 ms después del `load`
 * se revela todo por si el observer no disparó.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => el.classList.add('in')

    if (!('IntersectionObserver' in window)) {
      show()
      return
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          show()
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)

    let timeout: number | undefined
    const arm = () => {
      timeout = window.setTimeout(show, 1400)
    }
    if (document.readyState === 'complete') arm()
    else window.addEventListener('load', arm, { once: true })

    return () => {
      io.disconnect()
      window.removeEventListener('load', arm)
      if (timeout !== undefined) window.clearTimeout(timeout)
    }
  }, [])

  return ref
}
