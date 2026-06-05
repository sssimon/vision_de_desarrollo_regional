import { impacto, impactoHead } from '../../data/content'
import Kicker from '../ui/Kicker'
import Reveal from '../ui/Reveal'
import Stat from '../ui/Stat'
import s from './Impacto.module.css'

export default function Impacto() {
  return (
    <section className="block" id="impacto">
      <div className="wrap">
        <Reveal className="head">
          <Kicker>{impactoHead.kicker}</Kicker>
          <h2>{impactoHead.title}</h2>
        </Reveal>
        <div className={s.impact}>
          {impacto.map((stat) => (
            <Reveal key={stat.label} className={s.imp}>
              <Stat
                value={stat.n}
                affix={stat.affix}
                className={s.n}
                style={stat.tone ? { color: `var(--${stat.tone})` } : undefined}
              />
              <div className={s.l}>{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
