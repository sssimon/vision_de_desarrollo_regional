import { ejes, ejesFigura, ejesHead } from '../../data/content'
import Kicker from '../ui/Kicker'
import Reveal from '../ui/Reveal'
import EjeCard from './EjeCard'
import s from './Ejes.module.css'

export default function Ejes() {
  return (
    <section className="block alt" id="propuesta">
      <div className="wrap">
        <Reveal className="head">
          <Kicker>{ejesHead.kicker}</Kicker>
          <h2>{ejesHead.title}</h2>
          <p>{ejesHead.lede}</p>
        </Reveal>
        <div className={s.ejes}>
          {ejes.map((eje) => (
            <EjeCard key={eje.tag} eje={eje} />
          ))}
        </div>
        {/* Corrección #2 (junio 2026): mapa binacional de Guarumito.
            Inline styles exactos de CORRECCIONES.md */}
        <Reveal
          as="figure"
          style={{
            margin: '44px auto 0',
            maxWidth: 940,
            border: '1px solid var(--line)',
            borderRadius: 8,
            overflow: 'hidden',
            background: 'var(--white)',
          }}
        >
          <img src={ejesFigura.img} alt={ejesFigura.alt} style={{ width: '100%', display: 'block' }} />
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
            {ejesFigura.caption}
          </figcaption>
        </Reveal>
      </div>
    </section>
  )
}
