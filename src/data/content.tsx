import type { ReactNode } from 'react'

/* ============================================================
   TÁCHIRA 2030 — content.tsx
   Single source de TODO el texto y las cifras de la landing.
   Los datos son la transcripción exacta de la referencia
   (design-handoff/handoff/reference/index.html).
   Nota del handoff: hub aéreo, puerto seco, ferroviario e ITS
   están "por dimensionar" — NO inventar montos.
   ============================================================ */

export type Estado = 'crit' | 'part' | 'go' | 'plan'

/** Ruta pública consciente del `base` de Vite — GitHub Pages sirve bajo
 *  /vision_de_desarrollo_regional/, así que las rutas absolutas a pelo se rompen. */
const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`

/** Sufijo de una cifra grande (unidad o periodicidad), con su
 *  tamaño relativo exacto de la referencia (.4 / .42 / .45 / .5 / .6 em)
 *  y si va en dorado (las unidades sí; los "/año" del impacto no). */
export interface Affix {
  text: string
  size: number // em
  gold?: boolean
}

export interface NavLink {
  href: string
  label: string
}

export interface BandStat {
  n: string
  affix?: Affix
  label: string
}

export interface Fact {
  k: string
  tone: 'gold' | 'signal'
  body: ReactNode
}

export interface Eje {
  tag: string
  nombre: string
  desc: string
  val: { n: string; affix: Affix }
  estado: Estado
  estadoLabel: string
}

export interface StarRow {
  label: string
  value: string
}

export interface Pilar {
  img: string
  alt: string
  titulo: string
  texto: string
  meta: string
}

export interface ImpactStat {
  n: string
  affix?: Affix
  tone?: 'good' | 'gold'
  label: string
}

export interface TransRow {
  from: string
  to: string
}

export interface Fase {
  titulo: string
  plazo: string
  acciones: string[]
  destacada?: boolean
}

export interface SectionHead {
  kicker: string
  title: string
  lede?: string
}

/** Figura con caption (correcciones de junio 2026). */
export interface Figura {
  img: string
  alt: string
  caption: string
}

/* ---------------- Nav ---------------- */

export const navLinks: NavLink[] = [
  { href: '#problema', label: 'Diagnóstico' },
  { href: '#propuesta', label: 'La propuesta' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#ruta', label: 'Hoja de ruta' },
  { href: '#sumarse', label: 'Sumarse' },
]

export const navCta = { href: '#sumarse', label: 'Apoyar la visión' }

/* ---------------- Hero ---------------- */

export const hero = {
  img: asset('sancristobal.jpg'),
  alt: 'San Cristóbal, estado Táchira',
  kicker: 'Visión estratégica · Horizonte 2030',
  title: 'Estrategias viales y de transporte para el futuro',
  sub: (
    <>
      Un sistema de transporte <b>integrado, binacional, sustentable y competitivo</b> para el
      estado Táchira: la región que puede convertirse en el corazón logístico de Venezuela y su
      puente hacia Sudamérica.
    </>
  ),
  actions: [
    { href: '#propuesta', label: 'Conocer la propuesta', variant: 'gold' as const },
    { href: '#sumarse', label: 'Sumarse a la visión', variant: 'ghost' as const },
  ],
  by: (
    <>
      Una iniciativa del <b>Ing. Simón Ballesteros M.</b> · CIV 38.076
    </>
  ),
}

/* ---------------- Stat band ---------------- */

export const bandStats: BandStat[] = [
  { n: '94', label: 'Vías inventariadas' },
  { n: '1.495,5', affix: { text: ' km', size: 0.5, gold: true }, label: 'Red vial total del estado' },
  { n: '60', affix: { text: '%+', size: 0.6, gold: true }, label: 'Del comercio binacional terrestre' },
  { n: '≈$2.580', affix: { text: ' M', size: 0.5, gold: true }, label: 'Inversión vial estructurante' },
]

/* ---------------- Diagnóstico ---------------- */

export const diagnostico = {
  kicker: 'El diagnóstico',
  title: 'Una red estratégica, pero deteriorada',
  lede: 'El Táchira colinda con Norte de Santander (Colombia) y concentra el principal corredor comercial entre ambos países. Sin embargo, su infraestructura obsoleta frena la competitividad de toda la región.',
  img: asset('mapa-tachira.png'),
  alt: 'Mapa funcional del estado Táchira',
  facts: [
    {
      k: 'Frontera binacional',
      tone: 'gold',
      body: (
        <>
          Más del <b>60% del comercio terrestre</b> Venezuela–Colombia transita el Táchira.
        </>
      ),
    },
    {
      k: 'ZEEB · Oportunidad',
      tone: 'gold',
      body: (
        <>
          La <b>Zona Económica Especial Binacional</b> abre una ventana para inversión logística e
          industrial.
        </>
      ),
    },
    {
      k: 'Déficit crítico',
      tone: 'signal',
      body: (
        <>
          Vialidades deterioradas e infraestructura obsoleta que <b>encarecen la cadena logística</b>{' '}
          regional.
        </>
      ),
    },
  ] satisfies Fact[],
}

/* ---------------- La propuesta · 4 ejes ---------------- */

export const ejesHead: SectionHead = {
  kicker: 'La propuesta',
  title: 'Cuatro ejes viales que rearman la malla regional',
  lede: 'Corredores binacionales y de integración que conectan la frontera, la metrópoli y el resto del país.',
}

export const ejes: Eje[] = [
  {
    tag: 'EJE 1',
    nombre: 'San Cristóbal – La Fría',
    desc: 'Autopista · 65,9 km · 5 tramos',
    val: { n: '$1.219,7', affix: { text: ' M', size: 0.5, gold: true } },
    estado: 'crit',
    estadoLabel: 'Paralizada',
  },
  {
    tag: 'EJE 2',
    nombre: 'La Fría – Guarumito – Agua Clara – Cúcuta',
    desc: 'Vía expresa doble calzada · 65 km',
    val: { n: '$280', affix: { text: ' M', size: 0.5, gold: true } },
    estado: 'part',
    estadoLabel: 'Parcial',
  },
  {
    tag: 'EJE 3',
    nombre: 'Ureña – San Antonio – Rubio – SC',
    desc: 'Vía expresa 4 canales · 42 km',
    val: { n: '$280–320', affix: { text: ' M', size: 0.42, gold: true } },
    estado: 'go',
    estadoLabel: '42% ejecutado',
  },
  {
    tag: 'EJE 4',
    nombre: 'SC – Santo Domingo – Lím. Barinas',
    desc: 'Vía expresa 4 canales · 109 km',
    val: { n: '$778,2', affix: { text: ' M', size: 0.5, gold: true } },
    estado: 'plan',
    estadoLabel: 'En planificación',
  },
]

/** Mapa binacional de Guarumito — corrección #2 (junio 2026). */
export const ejesFigura: Figura = {
  img: asset('mapa-eje2.png'),
  alt: 'Mapa del cruce binacional en Guarumito, frontera Venezuela – Colombia',
  caption:
    'Eje 2 · cruce binacional La Fría – Guarumito – Agua Clara – Cúcuta · frontera Venezuela – Colombia',
}

/* ---------------- Proyecto estrella ---------------- */

export const estrellaHead: SectionHead = {
  kicker: 'Proyecto bandera',
  title: 'Autopista San Cristóbal – La Fría',
  lede: 'El corredor estructurante del occidente tachirense. Dos estructuras —el Tramo II y el Viaducto La Colorada— concentran el 58% de la inversión.',
}

export const estrella = {
  img: asset('autopista.jpg'),
  alt: 'Autopista San Cristóbal – La Fría',
  kicker: 'Inversión total · USD 2025',
  big: '$1.219,7 M',
  rows: [
    { label: 'Longitud', value: '65,9 km · 5 tramos' },
    { label: 'Costo medio', value: '$18,5 M / km' },
    { label: 'Tramo II · Copa de Oro – Lobatera', value: '$499,8 M' },
    { label: 'Túnel Palo Grande', value: '2 × 2.500 m' },
    { label: 'Tramo IVb · Viaducto La Colorada', value: '$207,9 M' },
  ] satisfies StarRow[],
}

/** Infografía del trazado del corredor — corrección #4 (junio 2026). */
export const estrellaFigura: Figura = {
  img: asset('trazado-corredor.png'),
  alt: 'Trazado del corredor San Cristóbal – La Fría por tramos',
  caption:
    'Trazado del corredor · 5 tramos · túnel Palo Grande 2 × 2.500 m · viaductos hasta H = 64 m · Viaducto La Colorada 359 m',
}

/* ---------------- Pilares ---------------- */

export const pilaresHead: SectionHead = {
  kicker: 'Más allá de las vías',
  title: 'La capa que multiplica el valor de la red',
  lede: 'Conectividad aérea, logística y tecnología que transforman una red de carreteras en un verdadero sistema multimodal.',
}

export const pilares: Pilar[] = [
  {
    img: asset('render-hub.png'),
    alt: 'Hub de carga aéreo La Fría',
    titulo: 'Hub de carga aéreo',
    texto:
      'Aeropuerto La Fría preparado para el Airbus A330F, con pista de 2.500 m y terminal de 8.000 m². Capacidad de 200.000 ton/año.',
    meta: '85% del potencial aéreo hoy sin aprovechar',
  },
  {
    img: asset('puerto-seco.jpg'),
    alt: 'Puerto seco y plataforma logística',
    titulo: 'Puerto seco La Fría',
    texto:
      'Plataforma logística multimodal con potencial de 1.000+ ha, sinergia con la ZEEB y conexión aérea, terrestre y ferroviaria.',
    meta: 'Zona industrial · 28 empresas establecidas',
  },
  {
    img: asset('tren.jpg'),
    alt: 'Plan ferroviario del eje occidental',
    titulo: 'Ferrocarril e ITS',
    texto:
      'Eje ferroviario occidental de 250 km y un sistema inteligente de transporte: peaje electrónico, pesaje automatizado y plataforma digital binacional.',
    meta: 'Maracaibo · La Fría · San Cristóbal · Frontera',
  },
]

/* ---------------- Impacto ---------------- */

export const impactoHead: SectionHead = {
  kicker: 'El impacto',
  title: 'Beneficios esperados a 10 años',
}

export const impacto: ImpactStat[] = [
  { n: '$650–800 M', tone: 'good', label: 'VAN a 10 años' },
  { n: '4.000–4.500', label: 'Empleos directos e indirectos' },
  { n: '60–75%', tone: 'gold', label: 'Reducción de tiempos logísticos' },
  { n: '$26–33 M', affix: { text: '/año', size: 0.45 }, label: 'Ahorro en costos logísticos' },
  { n: '$3.000 M', affix: { text: '/año', size: 0.4 }, tone: 'gold', label: 'Comercio binacional proyectado' },
  { n: '$500–700 M', tone: 'good', label: 'Nueva inversión privada' },
]

/* ---------------- Transformación ---------------- */

export const transformacionHead: SectionHead = {
  kicker: 'La visión',
  title: 'De dónde venimos · hacia dónde vamos',
}

export const transformacion: TransRow[] = [
  { from: 'Región aislada', to: 'Hub logístico regional' },
  { from: 'Economía informal', to: 'Economía formalizada y competitiva' },
  { from: 'Frontera divisoria', to: 'Frontera integradora binacional' },
  { from: 'Exportador de materias primas', to: 'Exportador de valor agregado' },
  { from: 'Problemas logísticos', to: 'Ventaja competitiva sostenible' },
]

/* ---------------- Hoja de ruta ---------------- */

export const rutaHead: SectionHead = {
  kicker: 'Hoja de ruta',
  title: 'Un plan por fases, con acciones concretas',
}

export const fases: Fase[] = [
  {
    titulo: 'Inmediatas',
    plazo: '0–3 meses',
    acciones: [
      'Declarar emergencia vial del Táchira',
      'Mesa de crisis binacional (ZEEB)',
      'Gestionar $25 M de rescate vial',
      'Acuerdos con operadores logísticos',
    ],
  },
  {
    titulo: 'Corto plazo',
    plazo: '3–12 meses',
    acciones: [
      'Capitalizar fondos BID / CAF',
      'Licitaciones internacionales',
      'Unidad ejecutora binacional',
      'Monitoreo ciudadano',
    ],
  },
  {
    titulo: 'Mediano plazo',
    plazo: '1–3 años',
    acciones: [
      'Iniciar obras Tramo II',
      'Completar Viaducto La Colorada',
      'Pista La Fría a 2.500 m',
      'Básculas en 4 pasos fronterizos',
      'Rehabilitar tramos I, III y V',
    ],
  },
  {
    titulo: 'Largo plazo',
    plazo: '3–7 años',
    acciones: [
      'Completar 65,9 km de autopista',
      'Hub de carga La Fría · A330F',
      'Puerto seco en operación',
      'ITS integrado en la red',
    ],
    destacada: true,
  },
]

/* ---------------- CTA ---------------- */

export const cta = {
  kicker: 'Llamado a la acción',
  title: 'El Táchira tiene todo para ser el corazón logístico de Venezuela',
  text: 'Sumemos voluntad política, inversión y participación comunitaria. Esta propuesta es una invitación a los profesionales, técnicos y ciudadanos a construir juntos el futuro de la región.',
  actions: [
    { href: 'mailto:simondariob@gmail.com', label: 'Escribir al Ing. Ballesteros', variant: 'gold' as const },
    // Placeholder: el deck final aún no está en el paquete (decisión registrada).
    { href: 'Presentacion Tachira 2030.html', label: 'Ver la propuesta completa', variant: 'ghost' as const },
  ],
}

/* ---------------- Footer ---------------- */

export const footer = {
  about:
    'Estrategias viales y de transporte para el futuro · Estado Táchira. Una visión para un sistema integrado, binacional y competitivo.',
  contacto: [
    { href: 'mailto:simondariob@gmail.com', label: 'simondariob@gmail.com' },
    { href: 'tel:+584147220144', label: '+58 414 722 0144' },
  ],
  autor: {
    nombre: 'Ing. Simón Ballesteros M.',
    civ: 'CIV 38.076',
    linkedin: { href: 'https://linkedin.com/in/simonballesteros', label: 'LinkedIn' },
  },
  secciones: [
    { href: '#problema', label: 'Diagnóstico' },
    { href: '#propuesta', label: 'La propuesta' },
    { href: '#ruta', label: 'Hoja de ruta' },
  ],
  bottom: {
    left: '© 2026 · Táchira 2030 · Propuesta técnica',
    right: 'Imágenes vía Wikimedia Commons (CC)',
  },
}
