import { ALIGNMENT, DECK_URL, EVIDENCE, REFERENCES, ROADMAP } from '../data/content'
import { Spot } from './Spot'
import { Wordmark } from './Logo'

export function Evidence() {
  return (
    <section className="s" id="evidence">
      <div className="wrap">
        <div className="head"><span className="tag">الأدلة</span><h2>لماذا الآن</h2><p>أرقام منشورة، نعرضها مع حدودها.</p></div>
        <div className="ev">
          {EVIDENCE.map((e) => (
            <Spot className="c-pad" key={e.title}>
              <div className="num">{e.n}</div>
              <h3 className="c-title" style={{ marginTop: 8 }}>{e.title}</h3>
              <p className="c-text">{e.text}</p>
              <span className="src">{e.src}</span>
            </Spot>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Roadmap() {
  return (
    <section className="s" id="road" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="head"><span className="tag">الخطة</span><h2>من محاكاة إلى شبكة وطنية</h2></div>
        <div className="road">
          {ROADMAP.map((r) => (
            <Spot className={`c-pad ${r.now ? 'now' : ''}`} key={r.when}>
              <span className="when">{r.when}</span>
              <h3 className="c-title" style={{ marginTop: 6 }}>{r.title}</h3>
              <p className="c-text">{r.text}</p>
            </Spot>
          ))}
        </div>
        <div className="align">
          {ALIGNMENT.map((a) => (
            <Spot className="c-pad" key={a.title}><h3 className="c-title">{a.title}</h3><p className="c-text">{a.text}</p></Spot>
          ))}
        </div>
      </div>
    </section>
  )
}

export function References() {
  return (
    <section className="s" id="refs" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="head"><span className="tag">المراجع</span><h2>المصادر</h2></div>
        <ol className="refs">
          {REFERENCES.map((r) => (
            <li key={r.text}>
              {r.text} {r.journal && <i>{r.journal}</i>} {r.url && <a href={r.url}>{r.url.replace(/^https?:\/\/(www\.)?/, '')}</a>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="s" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="final">
          <svg className="ribbon" viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden="true"><path d="M760 420 C 900 300, 1000 160, 1200 120 L1200 230 C 1040 260, 960 360, 900 420 Z" fill="#C6283A" opacity=".9"/><path d="M0 330 C 160 280, 300 320, 420 420 L0 420 Z" fill="#145A50"/></svg>
          <h2>لا يكفي أن نعرف أين الدم. نحتاج أن نصل إلى الوحدة المناسبة، وأن تصل سليمة.</h2>
          <div className="row">
            <a className="btn-big w" href={DECK_URL}>افتح العرض التقديمي</a>
            <a className="btn-big o" href="#ops">جرّب لوحة التشغيل</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Wordmark size={30} />
        <span>جاهزية تسبق الحاجة · نموذج أولي، والبيانات التفاعلية اصطناعية للعرض.</span>
      </div>
    </footer>
  )
}
