'use client'
import { useEffect, useRef, useState } from 'react'

const COUNTERS = [
  { n:58, s:'+',  l:'Years of Legacy',   e:'🏛️', g:'from-amber-400 to-amber-600' },
  { n:17, s:'+',  l:'Colleges & Schools', e:'🏫', g:'from-azure-400 to-azure-600' },
  { n:50, s:'+',  l:'Programmes',         e:'📖', g:'from-purple-400 to-purple-600' },
  { n:10, s:'K+', l:'Alumni Network',     e:'🌏', g:'from-emerald-400 to-emerald-600' },
]

const STRENGTHS = [
  { e:'🔬', t:'Interdisciplinary Approach',       d:'Students from diverse fields collaborate to solve real problems with different conceptual frameworks.' },
  { e:'🛠️', t:'Immersive & Experiential Learning', d:'Live industry projects build hands-on expertise from the very first semester.' },
  { e:'🧠', t:'Whole Brain Pedagogy',               d:'A learning model that cultivates technical mastery alongside creative, critical thinking.' },
  { e:'🎤', t:'Faculty from Academia & Industry',   d:'Scholars and practitioners who bring academic depth and real-world business insight.' },
]

const FEATURES = [
  'NEP 2020 & UGC Compliant Programmes',
  'Full-Pay On-The-Job Training',
  'International University Collaborations',
  'Cross-Sector Internships Embedded in Curriculum',
  'Course-Embedded Capstone Projects',
  '24×7 Campus Facility Access',
]

function Counter({ n, s }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const dur = 2000, t0 = performance.now()
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1)
          const ease = 1 - (1 - p) ** 3
          setVal(Math.floor(ease * n))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold:.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [n])

  return <div ref={ref} className="font-display text-4xl font-extrabold text-white num">{val}<span className="tg-gold">{s}</span></div>
}

function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current; if (!root) return
    const els = root.querySelectorAll('.reveal,.reveal-l,.reveal-r')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target) } })
    }, { threshold:.12, rootMargin:'0px 0px -50px 0px' })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function About() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)'}} />
      <div className="blob w-96 h-96 bg-azure-600/10 top-0 right-0" style={{filter:'blur(110px)'}} />
      <div className="blob w-72 h-72 bg-amber-400/8 bottom-0 left-0" style={{filter:'blur(100px)'}} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Left ── */}
          <div className="space-y-8">
            <div className="reveal">
              <div className="s-label mb-5">About JG University</div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-white leading-[1.1]">
                Empowering <span className="tg-gold">Tomorrow's</span><br/>Leaders Since 1965
              </h2>
            </div>

            <div className="reveal d1 text-white/55 text-[15px] leading-relaxed space-y-4">
              <p>JG University is a UGC-approved, New Age Tech-Driven University sponsored by the ASIA Charitable Trust — an institution with 58 years of excellence managing 17 colleges and 3 schools across Gujarat.</p>
              <p>Our pedagogy strikes an equilibrium between <span className="text-white/80 font-medium">state-of-the-art infrastructure</span> and globally recognised, high-quality education designed for the demands of a rapidly changing world.</p>
            </div>

            <div className="space-y-3">
              {STRENGTHS.map((s, i) => (
                <div key={s.t} className={`reveal d${i+2} glass-hover p-5 rounded-2xl flex gap-4 group`}>
                  <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-xl mt-0.5"
                    style={{background:'rgba(251,191,36,.1)'}}>
                    {s.e}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-[15px] mb-1 group-hover:tg-gold transition-all">{s.t}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal d6">
              <a href="#programs" className="btn-primary px-7 py-3.5 text-sm">
                View All Programmes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4-4 4M3 12h18"/></svg>
              </a>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="space-y-5 reveal-r">
            {/* Counter grid */}
            <div className="grid grid-cols-2 gap-4">
              {COUNTERS.map((c) => (
                <div key={c.l} className="glass-hover p-6 rounded-2xl flex flex-col gap-3 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.g} flex items-center justify-center text-xl shadow-lg`}>{c.e}</div>
                  <Counter n={c.n} s={c.s} />
                  <p className="text-white/40 text-sm">{c.l}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="g-border p-7 space-y-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style={{background:'rgba(251,191,36,.1)'}}>✅</div>
                <h4 className="font-display font-bold text-white text-lg">University Highlights</h4>
              </div>
              {FEATURES.map(f => (
                <div key={f} className="flex items-start gap-3 group cursor-default">
                  <div className="w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors"
                    style={{background:'rgba(251,191,36,.08)', borderColor:'rgba(251,191,36,.3)'}}>
                    <svg className="w-2.5 h-2.5 text-amber-400" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                    </svg>
                  </div>
                  <span className="text-white/50 text-sm leading-snug group-hover:text-white/75 transition-colors">{f}</span>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div className="glass rounded-2xl p-6">
              <p className="text-white/45 text-sm leading-relaxed italic mb-4">"Excellence is a matter of choice. If we choose to be excellent, we will be — for sure."</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm text-ink-950"
                  style={{background:'linear-gradient(135deg,#FBBF24,#F59E0B)'}}>AC</div>
                <div>
                  <p className="text-white text-sm font-semibold">Dr. CA Achyut Dani</p>
                  <p className="text-white/35 text-xs">Director-General & Provost, JGU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
