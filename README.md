# Táchira 2030 — Visión de Desarrollo Regional

Landing page (one-page, scroll) de la propuesta técnica **"Estrategias Viales y de
Transporte para el Futuro · Estado Táchira"**, del Ing. Simón Ballesteros M.

Port pixel-perfect de la referencia entregada por el equipo de diseño
(`design-handoff/handoff/reference/`).

## Stack

- **React 19 + Vite + TypeScript**
- **CSS puro**: CSS Modules por componente + `tokens.css` / `global.css` globales.
  Sin Tailwind, sin CSS-in-JS.
- Fuentes **IBM Plex** (Sans / Sans Condensed / Mono) self-host en `public/fonts/`,
  con preload de la Condensed 600 para evitar CLS.

## Cómo trabajar localmente

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # type-check + build de producción (dist/)
npm run preview   # sirve el build
```

## Estructura

```
design-handoff/        ← paquete del equipo de diseño (fuente de verdad visual)
│   └── handoff/       DESIGN_NOTES.md · COMPONENT_MAP.md · tokens.css · reference/
public/
│   ├── assets/        imágenes usadas por la landing
│   └── fonts/         woff2 IBM Plex (copiados de @fontsource)
src/
    ├── styles/        tokens.css (source of truth) · fonts.css · global.css
    ├── data/          content.tsx — TODO el texto y cifras, tipados
    ├── hooks/         useReveal.ts (scroll-reveal seguro sin JS/SSR)
    └── components/    12 secciones (Nav → Footer) + ui/ (Button, Chip, Kicker, Stat, Reveal)
```

## Reglas del sistema de diseño

- Todos los valores viven en `src/styles/tokens.css`. **No hardcodear hex.**
- El dorado (`--gold`) es el único acento de marca; rojo solo crítico, verde solo positivo.
- Reveal on-scroll: estado base **siempre visible** (solo `transform`), degrada sin JS
  y respeta `prefers-reduced-motion`.

## Pendiente antes de publicar

- [ ] Reemplazar imágenes placeholder (stock / Wikimedia CC) por renders/fotos
      oficiales y actualizar créditos (`design-handoff/handoff/README.md`).
- [ ] Confirmar derechos de `mapa-tachira.png`.
- [ ] Enlazar el deck real en el CTA ("Ver la propuesta completa" — hoy placeholder).
- [ ] Cifras de hub aéreo / puerto seco / ferroviario / ITS: **por dimensionar**,
      no inventar montos.
