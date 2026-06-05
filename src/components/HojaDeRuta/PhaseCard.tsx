import type { Fase } from '../../data/content'
import Reveal from '../ui/Reveal'
import s from './HojaDeRuta.module.css'

export default function PhaseCard({ fase }: { fase: Fase }) {
  return (
    <Reveal className={fase.destacada ? `${s.phase} ${s.hi}` : s.phase}>
      <div className={s.phh}>
        <b>{fase.titulo}</b>
        <span>{fase.plazo}</span>
      </div>
      <ul>
        {fase.acciones.map((accion) => (
          <li key={accion}>{accion}</li>
        ))}
      </ul>
    </Reveal>
  )
}
