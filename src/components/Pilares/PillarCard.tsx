import type { Pilar } from '../../data/content'
import Reveal from '../ui/Reveal'
import s from './Pilares.module.css'

export default function PillarCard({ pilar }: { pilar: Pilar }) {
  return (
    <Reveal className={s.pillar}>
      <div className={s.ph}>
        <img src={pilar.img} alt={pilar.alt} />
      </div>
      <div className={s.c}>
        <h3>{pilar.titulo}</h3>
        <p>{pilar.texto}</p>
        <div className={s.meta}>{pilar.meta}</div>
      </div>
    </Reveal>
  )
}
