import { pilares, pilaresHead } from '../../data/content'
import Kicker from '../ui/Kicker'
import Reveal from '../ui/Reveal'
import PillarCard from './PillarCard'
import s from './Pilares.module.css'

export default function Pilares() {
  return (
    <section className="block alt">
      <div className="wrap">
        <Reveal className="head">
          <Kicker>{pilaresHead.kicker}</Kicker>
          <h2>{pilaresHead.title}</h2>
          <p>{pilaresHead.lede}</p>
        </Reveal>
        <div className={s.pillars}>
          {pilares.map((pilar) => (
            <PillarCard key={pilar.titulo} pilar={pilar} />
          ))}
        </div>
      </div>
    </section>
  )
}
