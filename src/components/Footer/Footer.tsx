import { footer } from '../../data/content'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.foot}>
      <div className="wrap">
        <div className={s.grid}>
          <div>
            {/* font-size 18 / margin-bottom 14 inline, exacto de la referencia */}
            <div className="brand" style={{ fontSize: 18, marginBottom: 14 }}>
              <b style={{ color: 'var(--gold)' }}>TÁCHIRA</b> 2030
            </div>
            <p style={{ fontSize: 14, maxWidth: '34ch' }}>{footer.about}</p>
          </div>
          <div>
            <div className={s.lab}>Contacto</div>
            <p style={{ fontSize: 14, lineHeight: 2 }}>
              {footer.contacto.map((c, i) => (
                <span key={c.href}>
                  {i > 0 && <br />}
                  <a href={c.href}>{c.label}</a>
                </span>
              ))}
            </p>
          </div>
          <div>
            <div className={s.lab}>Autor</div>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>
              {footer.autor.nombre}
              <br />
              {footer.autor.civ}
              <br />
              <a href={footer.autor.linkedin.href}>{footer.autor.linkedin.label}</a>
            </p>
          </div>
          <div>
            <div className={s.lab}>Secciones</div>
            <p style={{ fontSize: 14, lineHeight: 2 }}>
              {footer.secciones.map((sec, i) => (
                <span key={sec.href}>
                  {i > 0 && <br />}
                  <a href={sec.href}>{sec.label}</a>
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className={s.bottom}>
          <span>{footer.bottom.left}</span>
          <span>{footer.bottom.right}</span>
        </div>
      </div>
    </footer>
  )
}
