import { diagnostico } from '../../data/content'
import Kicker from '../ui/Kicker'
import Reveal from '../ui/Reveal'
import s from './Diagnostico.module.css'

export default function Diagnostico() {
  return (
    <section className="block" id="problema">
      <div className="wrap">
        <div className={s.split}>
          <Reveal>
            <Kicker>{diagnostico.kicker}</Kicker>
            {/* Inline styles exactos de la referencia (h2 fuera de .head) */}
            <h2
              className="cond"
              style={{
                fontWeight: 600,
                fontSize: 'clamp(34px,4.4vw,56px)',
                lineHeight: 1.08,
                marginTop: 14,
                letterSpacing: '-.01em',
              }}
            >
              {diagnostico.title}
            </h2>
            <p style={{ fontSize: 20, color: 'var(--ink-3)', marginTop: 18, maxWidth: '52ch' }}>
              {diagnostico.lede}
            </p>
            <div className={s.facts} style={{ marginTop: 34 }}>
              {diagnostico.facts.map((f) => (
                <div key={f.k} className={s.fact}>
                  <div className={s.k} style={{ color: `var(--${f.tone})` }}>
                    {f.k}
                  </div>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className={`${s.figure} ${s.contain}`}>
            <img src={diagnostico.img} alt={diagnostico.alt} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
