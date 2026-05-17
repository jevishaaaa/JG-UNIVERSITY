'use client'
import { useEffect, useRef } from 'react'

const STATS = [
  { v:'58+',  l:'Years of Excellence', e:'🏛️' },
  { v:'17+',  l:'Colleges & Schools',  e:'🎓' },
  { v:'50+',  l:'Programmes',          e:'📚' },
  { v:'10K+', l:'Alumni Worldwide',    e:'🌐' },
]

export default function Hero() {
  const ref = useRef(null)

  /* subtle parallax on blobs */
  useEffect(() => {
    const el = ref.current; if (!el) return
    const fn = () => {
      const y = window.scrollY
      el.querySelectorAll('.pb').forEach((b, i) => { b.style.transform = `translateY(${y*(0.07+i*.04)}px)` })
    }
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-ink-950" />
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-32"
        style={{maskImage:'radial-gradient(ellipse 75% 90% at 50% 10%, black 30%, transparent 100%)'}} />
      {/* Gradient blobs */}
      <div className="blob pb w-[520px] h-[520px] -top-28 -left-32" style={{background:'rgba(37,99,235,.18)'}} />
      <div className="blob pb w-[380px] h-[380px] top-1/2 -right-20" style={{background:'rgba(251,191,36,.10)'}} />
      <div className="blob pb w-[260px] h-[260px] bottom-16 left-1/3" style={{background:'rgba(139,92,246,.10)'}} />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-36 pointer-events-none" style={{background:'linear-gradient(to top,#030B18,transparent)'}} />

      {/* ── Main content ── */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">

          {/* Left */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="s-label animate-fade-in" style={{animationDelay:'.1s'}}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Admissions Open 2026–27 · UGC Approved
            </div>

            {/* Headline */}
            <div className="animate-fade-up" style={{animationDelay:'.22s'}}>
              <h1 className="font-display text-[clamp(2.8rem,7vw,5rem)] leading-[1.05] font-extrabold text-white">
                Where{' '}
                <span className="tg-gold">Knowledge</span>
                <br/>Meets{' '}
                <span className="relative">
                  Innovation
                  <svg className="absolute left-0 -bottom-1.5 w-full" height="8" viewBox="0 0 300 8" fill="none" preserveAspectRatio="none">
                    <path d="M2 6 Q75 1 150 5 Q225 9 298 4" stroke="url(#ul)" strokeWidth="2.5" strokeLinecap="round"/>
                    <defs><linearGradient id="ul" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FBBF24"/><stop offset="100%" stopColor="#60A5FA"/></linearGradient></defs>
                  </svg>
                </span>
              </h1>
            </div>

            {/* Body */}
            <p className="text-white/55 text-lg leading-relaxed max-w-[530px] animate-fade-up" style={{animationDelay:'.38s'}}>
              A <span className="text-white/80 font-semibold">New Age Tech-Driven University</span> backed by 58 years of educational legacy. Industry-aligned programmes that seamlessly prepare you for employment, entrepreneurship, and global careers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{animationDelay:'.52s'}}>
              <a href="#programs" className="btn-primary px-8 py-4">
                Explore Programmes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4-4 4M3 12h18"/></svg>
              </a>
              <a href="#about" className="btn-ghost px-8 py-4">Discover More</a>
            </div>

            {/* Partners strip */}
            <div className="flex items-center gap-3 animate-fade-in" style={{animationDelay:'.7s'}}>
              <span className="text-white/25 text-[10px] uppercase tracking-[.15em] whitespace-nowrap">Partners</span>
              <div className="flex-1 h-px bg-white/[.07]" />
              {['IBM','ISRO','SAC','TCS','Yudiz'].map(p => (
                <span key={p} className="text-white/25 hover:text-white/60 text-xs font-bold transition-colors cursor-default">{p}</span>
              ))}
            </div>
          </div>

          {/* Right — floating feature card */}
          <div className="hidden lg:block relative">
            <div className="g-border p-7 space-y-5 animate-float-a shadow-[0_8px_48px_rgba(0,0,0,.55)]">
              <div className="flex items-start justify-between">
                <div>
                  <span className="s-label text-[10px] px-3 py-1">Featured</span>
                  <h3 className="font-display text-[1.45rem] font-bold text-white mt-3">MBA Programme</h3>
                  <p className="text-white/40 text-sm mt-0.5">2 Yrs · 4 Semesters · Ahmedabad</p>
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{background:'rgba(251,191,36,.1)'}}>🎓</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[['📈','95%','Placement'],['🏢','200+','Recruiters'],['💰','₹8 LPA','Avg CTC'],['⭐','A+','NAAC']].map(([e,v,l]) => (
                  <div key={l} className="p-4 rounded-2xl group cursor-default" style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.06)'}}>
                    <div className="text-xl mb-1.5">{e}</div>
                    <div className="font-display text-xl font-bold text-white group-hover:tg-gold transition-all">{v}</div>
                    <div className="text-white/35 text-xs">{l}</div>
                  </div>
                ))}
              </div>

              {/* Fill bar */}
              <div>
                <div className="flex justify-between text-xs text-white/40 mb-1.5">
                  <span>Seats filling fast</span>
                  <span className="text-amber-400 font-semibold">74% filled</span>
                </div>
                <div className="h-1.5 rounded-full" style={{background:'rgba(255,255,255,.07)'}}>
                  <div className="h-full w-[74%] rounded-full" style={{background:'linear-gradient(90deg,#FBBF24,#F59E0B)'}}/>
                </div>
              </div>

              <a href="#contact" className="btn-primary w-full py-3.5 text-sm">Apply for MBA 2026–27</a>
            </div>

            {/* Mini floating badges */}
            <div className="absolute -left-16 top-10 glass px-4 py-3 rounded-2xl flex items-center gap-3 animate-float-b">
              <span className="text-2xl">🏆</span>
              <div><p className="text-white text-sm font-semibold">UGC Approved</p><p className="text-white/35 text-xs">Govt. of India</p></div>
            </div>
            <div className="absolute -right-10 bottom-20 glass px-4 py-3 rounded-2xl flex items-center gap-3 animate-float-c">
              <span className="text-2xl">🤝</span>
              <div><p className="text-white text-sm font-semibold">IBM & ISRO</p><p className="text-white/35 text-xs">Industry Partners</p></div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-up" style={{animationDelay:'.85s'}}>
          {STATS.map(({ v, l, e }) => (
            <div key={l} className="glass-hover rounded-2xl p-6 text-center group cursor-default">
              <div className="text-3xl mb-3">{e}</div>
              <div className="font-display text-4xl font-extrabold tg-gold num">{v}</div>
              <div className="text-white/40 text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
