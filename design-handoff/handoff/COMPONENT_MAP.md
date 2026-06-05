# Táchira 2030 — Mapa de componentes (React + TS)

Propuesta de árbol de componentes para replicar la landing en **React + Vite + TypeScript** con **CSS Modules**. Los nombres son sugerencias; ajústalos a tus convenciones.

```
src/
├── main.tsx
├── App.tsx
├── styles/
│   ├── tokens.css          // variables (de este paquete)
│   └── global.css          // reset, body, .wrap, .btn, .chip, tipografía base
├── hooks/
│   └── useReveal.ts        // IntersectionObserver → añade .in
├── data/
│   └── content.ts          // TODO el texto/cifras tipados (single source)
└── components/
    ├── Nav/Nav.tsx
    ├── Hero/Hero.tsx
    ├── StatBand/StatBand.tsx
    ├── Diagnostico/Diagnostico.tsx
    ├── Ejes/Ejes.tsx          + EjeCard.tsx
    ├── ProyectoEstrella/ProyectoEstrella.tsx
    ├── Pilares/Pilares.tsx    + PillarCard.tsx
    ├── Impacto/Impacto.tsx
    ├── Transformacion/Transformacion.tsx
    ├── HojaDeRuta/HojaDeRuta.tsx + PhaseCard.tsx
    ├── CTA/CTA.tsx
    ├── Footer/Footer.tsx
    └── ui/
        ├── Button.tsx
        ├── Chip.tsx
        ├── Kicker.tsx
        ├── Stat.tsx
        └── Reveal.tsx          // wrapper que aplica useReveal
```

## App.tsx

```tsx
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatBand />
        <Diagnostico />
        <Ejes />
        <ProyectoEstrella />
        <Pilares />
        <Impacto />
        <Transformacion />
        <HojaDeRuta />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

## Tipos sugeridos (`data/content.ts`)

```ts
export type Estado = 'crit' | 'part' | 'go' | 'plan';

export interface Eje {
  tag: string;            // "EJE 1"
  nombre: string;         // "San Cristóbal – La Fría"
  desc: string;           // "Autopista · 65,9 km · 5 tramos"
  valor: string;          // "$1.219,7 M"
  estado: Estado;
  estadoLabel: string;    // "Paralizada"
}

export interface Stat {
  valor: string;          // "94"  |  "1.495,5 km"
  unidad?: string;        // "km", "%", "M"
  label: string;
  tone?: 'gold' | 'good' | 'signal' | 'ink';
}

export interface Fase {
  titulo: string;         // "Inmediatas"
  plazo: string;          // "0–3 meses"
  acciones: string[];
  destacada?: boolean;    // "Largo plazo" → true
}

export interface Pilar {
  titulo: string;
  texto: string;
  meta: string;           // línea mono dorada
  img: string;            // ruta del asset
  alt: string;
}
```

## Componentes UI base

### `Button`
```tsx
interface ButtonProps {
  variant?: 'gold' | 'ghost' | 'dark';
  href?: string;          // renderiza <a> si hay href, si no <button>
  children: React.ReactNode;
}
```
Mapea a las clases `.btn .btn-gold|btn-ghost|btn-dark`.

### `Chip`
```tsx
interface ChipProps { estado: Estado; children: React.ReactNode; }
// .chip .crit|part|go|plan
```

### `Stat`
```tsx
interface StatProps {
  value: string; unit?: string; label: string;
  tone?: 'gold' | 'good' | 'signal' | 'ink';
  size?: 'sm' | 'md' | 'lg';
}
// number en --font-cond; unit en .5em color --gold; label en mono/--steel.
// Recordatorio: white-space:nowrap en el número.
```

### `Reveal`
```tsx
// <Reveal as="div" delay={0}>…</Reveal>
// usa useReveal(): añade clase .in cuando entra al viewport.
// Estado base VISIBLE; solo transform translateY mientras :not(.in).
```

```ts
// hooks/useReveal.ts
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
```

## Notas por sección

- **Nav:** añadir estado `open` para menú móvil (<820px). El de la referencia solo oculta los links.
- **Hero:** la imagen de fondo es `<img>` con `object-fit:cover` + un `<div>` velo en degradado encima; el contenido va en un tercer hijo posicionado `relative`.
- **Ejes / Pilares / HojaDeRuta:** renderizar con `.map()` sobre los arrays de `content.ts`.
- **Impacto:** 6 `Stat` en grid 3×2; números `nowrap`.
- **Transformación / CTA:** secciones con fondo `--ink` (clase `dark`).
- **Footer:** enlaces reales `mailto:` / `tel:` / LinkedIn ya definidos en la referencia.

## Definition of done
- [ ] Pixel-match con `reference/index.html` en desktop (1440 / 1280) y móvil (390).
- [ ] Menú móvil funcional.
- [ ] `:focus-visible` en todos los interactivos.
- [ ] Reveal degrada a visible sin JS / con `prefers-reduced-motion`.
- [ ] Imágenes definitivas + créditos.
- [ ] Lighthouse: A11y ≥ 95, sin CLS por carga de fuentes (precargar Condensed).
