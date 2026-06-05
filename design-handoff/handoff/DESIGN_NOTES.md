# Táchira 2030 — Notas de diseño

Sistema de diseño de la landing page. Estética: **institucional / ingenieril** — sobria, técnica, autoritaria. Azul profundo + papel cálido, acento dorado, tipografía IBM Plex.

---

## 1. Tokens (ver `tokens.css`)

Todos los valores viven en `tokens.css` como variables CSS. Úsalas siempre; no hardcodear hex.

### Color
| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#0E1C2B` | Superficie oscura principal, titulares sobre claro, footer |
| `--ink-2` | `#16293c` | Hover oscuro / superficie secundaria |
| `--ink-3` | `#2A4258` | Texto de cuerpo sobre fondo claro |
| `--paper` | `#F2F0EA` | Fondo de página (off-white cálido) |
| `--paper-3` | `#FBFAF6` | Fondo de secciones alternas, tarjetas |
| `--gold` | `#BE8A2E` | **Acento primario** — kickers, CTAs, números, resaltes |
| `--gold-2` | `#D9A94A` | Dorado claro — acentos sobre oscuro, hovers |
| `--signal` | `#AE3B2C` | Crítico / “Paralizada” / déficit (uso escaso) |
| `--good` | `#3C7C68` | Positivo / cifras financieras al alza |
| `--steel` | `#5B6B7B` | Texto de apoyo / leyendas |

**Regla de color:** el dorado es el único acento “de marca”. Rojo (`--signal`) solo para estados críticos; verde (`--good`) solo para beneficios. Nunca introducir colores nuevos fuera de esta paleta; si hace falta un tono, derivarlo en `oklch` manteniendo croma/lightness.

### Tipografía
- **Display / titulares / números grandes** → `--font-cond` (IBM Plex Sans **Condensed**, 600).
- **Cuerpo y UI** → `--font-sans` (IBM Plex Sans, 400/500/600).
- **Kickers, etiquetas, datos, footer** → `--font-mono` (IBM Plex Mono, 500/600), SIEMPRE en mayúsculas con tracking `.1–.22em`.

Carga (Google Fonts):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Condensed:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```
(O self-host con `@fontsource/ibm-plex-*` para evitar dependencia externa.)

### Escala de texto (fluida)
| Token | clamp | line-height |
|---|---|---|
| `--t-hero` | `clamp(44px,6vw,92px)` | 1.07 |
| `--t-h2` | `clamp(34px,4.4vw,58px)` | 1.1 |
| `--t-cta` | `clamp(36px,4.6vw,64px)` | 1.1 |
| `--t-stat` | `clamp(38px,4.6vw,62px)` | 1.0–1.06 |
| Lede | 20px | 1.5 |
| Body | 16px | 1.45–1.5 |
| Kicker | 14px mono | — |

---

## 2. Layout y ritmo

- Contenedor central: `max-width: var(--wrap)` (1240px), padding lateral `var(--gutter)` (48px), centrado (`.wrap`).
- Secciones: padding vertical `var(--section-y)` (104px arriba/abajo). Alternar fondo `--paper` / `--paper-3` para ritmo; secciones “oscuras” usan `--ink`.
- Radios: tarjetas/figuras `6px`, botones/chips `3px`.
- Rejillas con `display:grid` + `gap` (nunca márgenes manuales entre hermanos).

### Patrón de sección
Cada sección de contenido sigue: **kicker (mono, dorado)** → **título (cond)** → opcional lede → cuerpo (grid de tarjetas / figura / stats).

---

## 3. Componentes visuales

- **Nav** — sticky, fondo `rgba(ink,.92)` + `backdrop-filter:blur(8px)`, borde inferior `--line-d`. Marca a la izquierda, links centro, botón dorado a la derecha. En móvil los links se ocultan → **implementar menú hamburguesa real en React** (la referencia solo los oculta).
- **Hero** — imagen full-bleed + velo en degradado (`linear-gradient(100deg, ink 32%, …)`), título cond enorme, sub con resaltes en `--gold-2`, dos botones, byline mono.
- **Stat band** — franja `--ink`, 4 cifras (cond, `--gold-2`) + etiqueta mono.
- **Cards (ejes / pilares)** — fondo blanco, borde `--line`, hover: `translateY(-4px)` + sombra suave. Cifra grande abajo (margin-top:auto), chip de estado.
- **Chips de estado** — `crit` (rojo), `part` (dorado), `go` (verde), `plan` (gris). Punto + texto mono mayúsculas.
- **Proyecto estrella** — bloque 2-col: imagen | panel con cifra grande + filas `label · valor`.
- **Impacto** — grid de 6, cada uno con borde-izquierdo dorado, número cond + etiqueta. Los números **no deben envolver** (`white-space:nowrap`).
- **Transformación** — filas `from → to` sobre fondo oscuro; flecha dorada en columna central.
- **Hoja de ruta** — 4 columnas (fases); la última (“Largo plazo”) en `--ink` (destacada). Listas con viñeta-punto dorada.
- **CTA** — sección oscura centrada, titular cond + párrafo + 2 botones.
- **Footer** — `#0a151f`, grid 4 columnas (marca / contacto / autor / secciones) + barra inferior mono.

### Botones
`.btn` base (mono, mayúsculas, `13–14px`, radius 3px). Variantes: `btn-gold` (relleno dorado, texto ink), `btn-ghost` (borde, sobre oscuro), `btn-dark`. Hover: dorado→gold-2 / borde→gold.

---

## 4. Interacciones

1. **Smooth scroll** a anclas (`html{scroll-behavior:smooth}` + `href="#id"`). En React, respetar `prefers-reduced-motion`.
2. **Scroll-reveal** — entrada sutil al entrar en viewport vía `IntersectionObserver` (añade clase `.in`). **Patrón obligatorio:** el estado base es VISIBLE; solo se aplica un `transform: translateY(18px)` mientras `:not(.in)` y existe JS (clase `.js` en `<html>`). **Nunca** ocultar por `opacity:0` sin fallback, o el contenido desaparece sin JS / en SSR / en captura. En React: un hook `useReveal()` con IntersectionObserver, y CSS que degrade a visible.
3. **Nav sticky** — sin cambio de estado en la referencia; opcional: condensar/sombra al hacer scroll.

---

## 5. Gotchas (aprendido construyendo la referencia)

- **Titulares condensados + line-height ajustado:** con `line-height` cercano a 1.0 los descendentes de la última línea chocan con el bloque siguiente. Solución aplicada: `line-height ≥ 1.07` **y** `padding-bottom: ~.1em` en h1/h2 display. Mantenerlo.
- **Números grandes:** usar `white-space:nowrap` en cifras tipo `$650–800 M` para que no envuelvan sobre su etiqueta.
- **Fuente condensada y reflow (FOUT):** la maqueta depende de que cargue *IBM Plex Sans Condensed*; con la fuente de respaldo (más ancha) los titulares ocupan más líneas. `font-display:swap` + `padding-bottom` evitan colisiones. Considerar precargar la condensed.
- **Reveal sin romper SSR:** ver punto 4.2.

---

## 6. Responsive (breakpoints max-width)

| BP | Cambio |
|---|---|
| 980px | grids de 4 col → 2 col |
| 860px | secciones split (texto+imagen) apilan; 3 col → 1 col |
| 820px | links de nav se ocultan → **menú móvil** |
| 760px | stat band / impacto → 2 col |
| 560px | grids de 2 col → 1 col |

---

## 7. Accesibilidad

- Contraste: texto sobre `--ink` y sobre `--paper` cumple AA. El dorado `--gold` sobre claro es para acentos/no-cuerpo; para texto largo usar `--ink-3`.
- Jerarquía semántica: un solo `<h1>` (hero), `<h2>` por sección, landmarks `<header><nav><main><section><footer>`.
- Foco visible en links/botones (añadir `:focus-visible` en producción — la referencia no lo trae).
- Imágenes con `alt` descriptivo (ya presentes en la referencia).
- Respetar `prefers-reduced-motion` para reveal y smooth-scroll.

---

## 8. Estructura de la página (orden de secciones)

1. Nav (sticky)
2. Hero
3. Stat band (4 cifras clave)
4. Diagnóstico (texto + mapa)
5. La propuesta — 4 ejes (cards)
6. Proyecto estrella — Autopista SC–La Fría
7. Pilares — aérea / logística / tecnología (3 cards)
8. Impacto — 6 cifras a 10 años
9. Transformación — 5 filas “de → a” (oscuro)
10. Hoja de ruta — 4 fases
11. CTA — “Sumarse” (oscuro)
12. Footer
