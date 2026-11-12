import { useState, type FormEvent } from 'react'
import { ShaderCanvas } from './ShaderCanvas'
import { Logo } from './Logo'

const EXAMPLES = ['K−  Fy(b−)  Jk(b−)', 'K−  Jk(b−)', 'Fy(b−)']

// The four brand capability icons from the identity board.
const CAPS: { label: string; path: JSX.Element }[] = [
  { label: 'إدارة المخزون', path: <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z" /> },
  { label: 'الاستجابة للطوارئ', path: <><path d="M7 18v-5a5 5 0 0 1 10 0v5" /><path d="M5 18h14v3H5zM12 3v2M4.2 6.2l1.4 1.4M19.8 6.2l-1.4 1.4" /></> },
  { label: 'ربط الموارد', path: <><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="M10.8 7.2 6.2 15.8M13.2 7.2l4.6 8.6M7.5 18h9" /></> },
  { label: 'التنبؤ بالاحتياج', path: <path d="M4 20V12h3v8M10.5 20V7h3v13M17 20V4h3v16M3 20h18" /> },
]

type Props = { onSearch: (query: string) => void }

export function Hero({ onSearch }: Props) {
  const [query, setQuery] = useState(EXAMPLES[0])
  const submit = (e: FormEvent) => { e.preventDefault(); onSearch(query) }

  return (
    <section className="hero on-dark">
      <ShaderCanvas />
      <div className="grain" aria-hidden="true" />
      <div className="wrap hero-in">
        <div className="hero-logo"><Logo size={84} onDark /></div>
        <span className="badge"><b>نَجا</b>مقدَّم لجائزة الأثر 2026 · الملتقى السعودي لشباب الرعاية الصحية</span>
        <h1>جاهزية تسبق <em>الحاجة</em></h1>
        <p className="sub">
          منظومة ذكية لجاهزية إمداد الدم والاستجابة للحالات الحرجة. تربط سجلاً للمتبرعين بأنماط نادرة مؤكدة مخبرياً بمخزون بنوك الدم وبنقل مراقَب حرارياً، فيصل بنك الدم إلى الوحدة المطابقة في دقائق بدل نداء عام.
        </p>

        <form className="ask" role="search" aria-label="جرّب مطابقة نمط نادر" onSubmit={submit}>
          <div className="ask-in">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z" /></svg>
            <label htmlFor="ask-in" className="sr-only">النمط المطلوب</label>
            <input id="ask-in" dir="ltr" autoComplete="off" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">ابحث عن متبرع
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
          </div>
          <div className="ask-hint">
            جرّب:
            {EXAMPLES.map((q) => <button key={q} type="button" onClick={() => setQuery(q)}>{q.replace(/\s+/g, ' ')}</button>)}
          </div>
        </form>

        <div className="caps">
          {CAPS.map((c) => (
            <span className="cap" key={c.label}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{c.path}</svg>
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
