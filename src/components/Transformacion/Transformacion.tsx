import { transformacion, transformacionHead } from '../../data/content'
import Kicker from '../ui/Kicker'
import Reveal from '../ui/Reveal'
import s from './Transformacion.module.css'

export default function Transformacion() {
  return (
    <section className="block dark">
      <div className="wrap">
        {/* margin-bottom:40px inline, exacto de la referencia */}
        <Reveal className="head" style={{ marginBottom: 40 }}>
          <Kicker>{transformacionHead.kicker}</Kicker>
          <h2>{transformacionHead.title}</h2>
        </Reveal>
        <Reveal className={s.trans}>
          {transformacion.map((row) => (
            <div key={row.from} className={s.tr}>
              <div className={s.from}>{row.from}</div>
              <div className={s.ar} aria-hidden="true">
                →
              </div>
              <div className={s.to}>{row.to}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
