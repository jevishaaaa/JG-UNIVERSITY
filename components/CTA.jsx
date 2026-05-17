'use client'
import { useState, useRef, useEffect } from 'react'

const PROGRAMMES = [
  'MBA','BBA','iMBA','B.Com','BCA','MCA','M.Com (Hons)',
  'B.Tech CSE','B.Tech AI & ML','B.Sc. Cyber Forensic',
  'M.Sc. Cyber Security','LL.B.','Ph.D Programme','Certificate Course','Other',
]

const CONTACT_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: 'Address',
    value: 'Nr. Sardar Patel Ring Road, Chandkheda, Ahmedabad – 382424, Gujarat',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 79 4890 0000',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'admissions@jguni.in',
  },
]

export default function CTA() {
  const [form, setForm]       = useState({ name:'', email:'', phone:'', programme:'', message:'' })
  const [status, setStatus]   = useState('idle') // idle | sending | done | error
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current; if (!root) return
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target) } }),
      { threshold:.1, rootMargin:'0px 0px -50px 0px' }
    )
    root.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    /* Simulate API call */
    await new Promise(r => setTimeout(r, 1600))
    setStatus('done')
  }

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      {/* bg */}
      <div className="blob w-[500px] h-[500px] bg-azure-600/15 -top-20 left-1/2 -translate-x-1/2" style={{ filter:'blur(130px)' }} />
      <div className="blob w-72 h-72 bg-amber-400/10 bottom-0 right-0" style={{ filter:'blur(100px)' }} />
      <div className="absolute inset-x-0 top-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-16 reveal">
          <div className="s-label mb-5 mx-auto w-fit">Get In Touch</div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-white leading-[1.1] mb-4">
            Start Your <span className="tg-gold">JGU Journey</span> Today
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Fill the form and our admissions team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">

          {/* ── Form ── */}
          <div className="reveal-l g-border p-8 space-y-5">
            {status === 'done' ? (
              <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                  style={{ background:'rgba(52,211,153,.1)', border:'1px solid rgba(52,211,153,.25)' }}>
                  ✅
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Application Received!</h3>
                <p className="text-white/50 max-w-xs">Our admissions team will reach out to you within 24 hours. Welcome to the JGU family!</p>
                <button onClick={() => { setStatus('idle'); setForm({ name:'', email:'', phone:'', programme:'', message:'' }) }}
                  className="btn-ghost px-6 py-2.5 text-sm mt-2">Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" placeholder="Arjun Patel" value={form.name} onChange={handleChange} required />
                  <Field label="Email Address" name="email" type="email" placeholder="arjun@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-sm font-medium">Programme of Interest</label>
                    <select name="programme" value={form.programme} onChange={handleChange} required
                      className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all focus:border-amber-400/50"
                      style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.10)' }}>
                      <option value="" disabled>Select programme…</option>
                      {PROGRAMMES.map(p => <option key={p} value={p} className="bg-ink-800">{p}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-sm font-medium">Message (optional)</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Tell us about your academic background or any questions you have…"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all focus:border-amber-400/50 resize-none"
                    style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.10)' }} />
                </div>
                <button type="submit" disabled={status==='sending'}
                  className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Submitting…
                    </span>
                  ) : (
                    <>
                      Request Admission Info
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4-4 4M3 12h18"/>
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-white/25 text-xs text-center">
                  By submitting, you agree to our Privacy Policy. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* ── Right info panel ── */}
          <div className="space-y-5 reveal-r">

            {/* CTA Card */}
            <div className="rounded-2xl p-7 space-y-4 overflow-hidden relative"
              style={{ background:'linear-gradient(135deg,rgba(251,191,36,.12) 0%,rgba(30,58,110,.3) 100%)', border:'1px solid rgba(251,191,36,.2)' }}>
              <div className="blob w-48 h-48 bg-amber-400/15 -top-10 -right-10" style={{ filter:'blur(60px)' }} />
              <div className="relative">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Admissions Open</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  Applications are now being accepted for the academic year 2026–27 across all programmes. Seats are limited.
                </p>
                <div className="space-y-2 mb-5">
                  {[
                    ['📅','Application Deadline','30 June 2026'],
                    ['📝','Entrance Process',  'Merit + Interview'],
                    ['💳','Scholarship',       'Available for eligible students'],
                  ].map(([e, l, v]) => (
                    <div key={l} className="flex items-start gap-3">
                      <span className="text-base">{e}</span>
                      <div>
                        <p className="text-white/35 text-xs">{l}</p>
                        <p className="text-white text-sm font-medium">{v}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="https://jguni.in/admission-open.html" target="_blank" rel="noopener noreferrer"
                  className="btn-primary w-full py-3 text-sm">
                  Apply on Official Portal →
                </a>
              </div>
            </div>

            {/* Contact details */}
            <div className="glass rounded-2xl p-6 space-y-5">
              <h4 className="font-display font-bold text-white text-base">Contact Information</h4>
              {CONTACT_ITEMS.map(c => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-amber-400"
                    style={{ background:'rgba(251,191,36,.1)', border:'1px solid rgba(251,191,36,.2)' }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-white/35 text-xs mb-0.5">{c.label}</p>
                    <p className="text-white/80 text-sm leading-snug">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <p className="text-white/40 text-sm flex-1">Follow us for campus updates</p>
              {[
                { label:'LinkedIn', href:'https://linkedin.com', icon:(
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"/>
                )},
                { label:'Instagram', href:'https://instagram.com', icon:(
                  <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>
                )},
                { label:'YouTube', href:'https://youtube.com', icon:(
                  <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></>
                )},
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-amber-400 transition-colors"
                  style={{ background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.08)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type='text', placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/60 text-sm font-medium">{label}{required && <span className="text-amber-400 ml-0.5">*</span>}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-amber-400/50"
        style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.10)' }}
      />
    </div>
  )
}
