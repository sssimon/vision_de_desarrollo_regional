import { fases, rutaHead } from '../../data/content'
import Kicker from '../ui/Kicker'
import Reveal from '../ui/Reveal'
import PhaseCard from './PhaseCard'
import s from './HojaDeRuta.module.css'

export default function HojaDeRuta() {
  return (
    <section className="block alt" id="ruta">
      <div className="wrap">
        <Reveal className="head">
          <Kicker>{rutaHead.kicker}</Kicker>
          <h2>{rutaHead.title}</h2>
        </Reveal>
        <div className={s.road}>
          {fases.map((fase) => (
            <PhaseCard key={fase.titulo} fase={fase} />
          ))}
        </div>
      </div>
    </section>
  )
}
