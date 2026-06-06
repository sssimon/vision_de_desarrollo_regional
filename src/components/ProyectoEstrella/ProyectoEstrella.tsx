import { estrella, estrellaFigura, estrellaHead } from '../../data/content'
import Kicker from '../ui/Kicker'
import Reveal from '../ui/Reveal'
import s from './ProyectoEstrella.module.css'

export default function ProyectoEstrella() {
  return (
    <section className="block">
      <div className="wrap">
        <Reveal className="head">
          <Kicker>{estrellaHead.kicker}</Kicker>
          <h2>{estrellaHead.title}</h2>
          <p>{estrellaHead.lede}</p>
        </Reveal>
        <Reveal className={s.star}>
          <div className={s.ph}>
            <img src={estrella.img} alt={estrella.alt} />
          </div>
          <div className={s.body}>
            <Kicker>{estrella.kicker}</Kicker>
            <div className={s.big}>{estrella.big}</div>
            <div className={s.rows}>
              {estrella.rows.map((row) => (
                <div key={row.label} className={s.srow}>
                  <span>{row.label}</span>
                  <b>{row.value}</b>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        {/* Corrección #4 (junio 2026): infografía del trazado del corredor.
            Inline styles exactos de CORRECCIONES.md */}
        <Reveal
          as="figure"
          style={{
            marginTop: 32,
            border: '1px solid var(--line)',
            borderRadius: 8,
            overflow: 'hidden',
            background: 'var(--white)',
          }}
        >
          <img
            src={estrellaFigura.img}
            alt={estrellaFigura.alt}
            style={{ width: '100%', display: 'block' }}
          />
          <figcaption
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              letterSpacing: '.04em',
              color: 'var(--steel)',
              padding: '15px 22px',
              borderTop: '1px solid var(--line)',
              background: 'var(--paper-3)',
            }}
          >
            {estrellaFigura.caption}
          </figcaption>
        </Reveal>
      </div>
    </section>
  )
}
