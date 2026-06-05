import { estrella, estrellaHead } from '../../data/content'
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
      </div>
    </section>
  )
}
