import { cta } from '../../data/content'
import Button from '../ui/Button'
import Kicker from '../ui/Kicker'
import s from './CTA.module.css'

export default function CTA() {
  return (
    <section className={`block dark ${s.cta}`} id="sumarse">
      <div className="wrap">
        <Kicker style={{ textAlign: 'center' }}>{cta.kicker}</Kicker>
        <h2 className={s.title}>{cta.title}</h2>
        <p className={s.text}>{cta.text}</p>
        <div className={s.actions}>
          {cta.actions.map((a) => (
            <Button key={a.href} href={a.href} variant={a.variant}>
              {a.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
