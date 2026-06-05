import { ejes, ejesHead } from '../../data/content'
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
      </div>
    </section>
  )
}
