import { cierre } from '../../data/content'
import Kicker from '../ui/Kicker'
import Reveal from '../ui/Reveal'
import s from './Cierre.module.css'

/** Coda final de la landing: la frase de cierre del Ing. Ballesteros. */
export default function Cierre() {
  return (
    <section className={`block dark ${s.cierre}`} id="cierre">
      <div className="wrap">
        <Reveal className={s.inner}>
          <Kicker style={{ display: 'block' }}>{cierre.kicker}</Kicker>
          <blockquote className={s.quote}>{cierre.quote}</blockquote>
          <p className={s.firma}>{cierre.firma}</p>
        </Reveal>
      </div>
    </section>
  )
}
