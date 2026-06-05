import type { Eje } from '../../data/content'
import Chip from '../ui/Chip'
import Reveal from '../ui/Reveal'
import Stat from '../ui/Stat'
import s from './Ejes.module.css'

export default function EjeCard({ eje }: { eje: Eje }) {
  return (
    <Reveal className={s.eje}>
      <div className={s.tag}>{eje.tag}</div>
      <h3>{eje.nombre}</h3>
      <div className={s.desc}>{eje.desc}</div>
      <Stat value={eje.val.n} affix={eje.val.affix} className={s.val} />
      <Chip estado={eje.estado}>{eje.estadoLabel}</Chip>
    </Reveal>
  )
}
