# Táchira 2030 — Landing page · Paquete de handoff

Página de aterrizaje (one-page, scroll) de la propuesta **“Estrategias Viales y de Transporte para el Futuro · Estado Táchira”**, lista para integrarse en un proyecto **React + Vite + TypeScript + CSS puro**.

## Contenido del paquete

```
handoff/
├── README.md              ← este archivo
├── DESIGN_NOTES.md        ← sistema de diseño completo (tokens, tipografía, layout, interacciones, accesibilidad)
├── COMPONENT_MAP.md       ← árbol de componentes React sugerido (props + a qué sección mapea)
├── tokens.css             ← variables CSS (source of truth) — copiar a src/styles/tokens.css
└── reference/
    ├── index.html         ← maqueta funcional de referencia (abrir en el navegador)
    ├── landing.css        ← hoja de estilos completa de la referencia
    └── assets/            ← imágenes y mapas usados (ver créditos abajo)
```

## Cómo usar la referencia

Abre `reference/index.html` en un navegador. Es la versión “fuente de verdad” visual e interactiva: úsala para comparar pixel a pixel mientras construyes los componentes. **No es** el código final de producción — es la maqueta a replicar en React.

## Stack objetivo

- **React + Vite + TypeScript**
- **CSS puro** (no Tailwind, no CSS-in-JS). Recomendado: **CSS Modules** por componente (`Hero.module.css`) + `tokens.css` global con las variables.
- Fuentes: **IBM Plex Sans / Condensed / Mono** (Google Fonts o self-host).

## Quick start sugerido

```bash
npm create vite@latest tachira-2030 -- --template react-ts
cd tachira-2030
# copia tokens.css a src/styles/ e impórtalo en main.tsx:
#   import './styles/tokens.css'
# añade las fuentes (ver DESIGN_NOTES.md → Tipografía)
```

## Imágenes (placeholders) — importante

Las imágenes incluidas en `assets/` son **referencias** (algunas de stock / Wikimedia Commons con licencia CC). Antes de publicar:
- Reemplazar por fotos/renders oficiales de la propuesta cuando estén disponibles.
- Mantener los **créditos** que correspondan. Los actuales:
  San Cristóbal © Monicacorrea (CC BY-SA 3.0) · Puente Simón Bolívar © Guillec96 (CC BY-SA 3.0) · Viaducto © Asopotnik (CC BY-SA 4.0) · Terminal intermodal © David Wilson (CC BY 2.0) · Tren © Petar Milošević (CC BY-SA 4.0).

Los mapas (`mapa-tachira.png`) provienen de material técnico de la propuesta — confirmar derechos antes de publicar.

## Datos / cifras

Todas las cifras provienen de la presentación original (USD 2025). La cifra **“≈ $2.580 M · inversión vial estructurante”** es la suma de los 4 ejes viales + pesaje; los sistemas complementarios (hub aéreo, puerto seco, ferroviario, ITS) están **por dimensionar**. No inventar montos para esos componentes.
