import { bandStats } from '../../data/content'
import Reveal from '../ui/Reveal'
import Stat from '../ui/Stat'
import s from './StatBand.module.css'

export default function StatBand() {
  return (
    <section className={s.band}>
      {/* La referencia no trae heading aquí; sr-only para cumplir
          "un <h2> por sección" sin alterar un solo pixel. */}
      <h2 className="sr-only">Cifras clave</h2>
      <div className={s.wrap}>
        {bandStats.map((stat) => (
          <Reveal key={stat.label}>
            <Stat value={stat.n} affix={stat.affix} className={s.n} />
            <div className={s.l}>{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
