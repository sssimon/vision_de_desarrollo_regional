import { hero } from '../../data/content'
import Button from '../ui/Button'
import Kicker from '../ui/Kicker'
import s from './Hero.module.css'

export default function Hero() {
  return (
    <header className={s.hero}>
      <img className={s.bg} src={hero.img} alt={hero.alt} />
      <div className={s.veil} />
      <div className={s.wrap}>
        <Kicker style={{ color: 'var(--gold-2)' }}>{hero.kicker}</Kicker>
        <h1 className={s.title}>{hero.title}</h1>
        <p className={s.sub}>{hero.sub}</p>
        <div className={s.actions}>
          {hero.actions.map((a) => (
            <Button key={a.href} href={a.href} variant={a.variant}>
              {a.label}
            </Button>
          ))}
        </div>
        <div className={s.by}>{hero.by}</div>
      </div>
    </header>
  )
}
