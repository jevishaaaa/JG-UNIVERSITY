'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'MBA Graduate, 2023',
    company: 'Deloitte India',
    avatar: 'PS',
    color: 'from-amber-400 to-orange-500',
    rating: 5,
    text: 'JG University completely transformed my career trajectory. The MBA programme industry exposure and live projects gave me the confidence to crack interviews at top consulting firms. The faculty genuinely cares about your growth, not just your grades.',
  },
  {
    name: 'Rohan Mehta',
    role: 'B.Tech CSE, 2022',
    company: 'Google Bengaluru',
    avatar: 'RM',
    color: 'from-azure-400 to-azure-600',
    rating: 5,
    text: 'The tech infrastructure and the embedded IBM curriculum at JGU was a game changer. I built real projects, not just assignments. That portfolio is what got me placed at Google. I am forever grateful to my professors who went the extra mile.',
  },
  {
    name: 'Ananya Patel',
    role: 'BCA Graduate, 2023',
    company: 'Infosys, Pune',
    avatar: 'AP',
    color: 'from-purple-400 to-purple-600',
    rating: 5,
    text: 'Coming from a small town, JGU felt like a launchpad. The certificate courses in AI-ML alongside my BCA gave me a massive edge. The placement cell was proactive and helped me land my dream job within weeks of graduating.',
  },
  {
    name: 'Karan Joshi',
    role: 'Ph.D Management, Ongoing',
    company: 'Research Scholar, JGU',
    avatar: 'KJ',
    color: 'from-emerald-400 to-emerald-600',
    rating: 5,
    text: 'The doctoral programme here is a rare blend of academic rigour and practical relevance. Access to industry data, cross-disciplinary seminars, and a supervisor who pushes you to publish — JGU doctoral life is exceptional.',
  },
  {
    name: 'Nisha Verma',
    role: 'M.Com Graduate, 2024',
    company: 'KPMG, Ahmedabad',
    avatar: 'NV',
    color: 'from-pink-400 to-rose-500',
    rating: 5,
    text: 'The M.Com with Honours programme is meticulously structured. Real audit simulations, CA-guest lectures, and an international exposure trip to Singapore set JGU apart from every other university I considered.',
  },
  {
    name: 'Dev Trivedi',
    role: 'BBA Graduate, 2023',
    company: 'Founder, TechStartUp',
    avatar: 'DT',
    color: 'from-amber-400 to-amber-600',
    rating: 5,
    text: 'JGU entrepreneurship cell and the BBA curriculum are tailor-made for someone who wants to start their own venture. I launched my startup in my final year itself — funded and mentored by the university incubation centre.',
  },
]

const STARS = Array(5).fill(0)

function StarRating() {
  return (
    <div className="flex gap-1">
      {STARS.map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [idx, setIdx]         = useState(0)
  const [paused, setPaused]   = useState(false)
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef(0)
  const ref       = useRef(null)
  const total     = TESTIMONIALS.length

  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIdx(i => (i + 1) % total), [total])

  /* auto-play */
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  /* scroll reveal */
  useEffect(() => {
    const root = ref.current; if (!root) return
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target) } }),
      { threshold: .12, rootMargin: '0px 0px -50px 0px' }
    )
    root.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* drag / swipe */
  const onDragStart = (clientX) => { dragStart.current = clientX; setDragging(true) }
  const onDragEnd   = (clientX) => {
    if (!dragging) return
    const diff = dragStart.current - clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    setDragging(false)
  }

  /* visible: current ±1 */
  const visibleIdxs = [
    (idx - 1 + total) % total,
    idx,
    (idx + 1) % total,
  ]

  return (
    <section id="testimonials" ref={ref} className="relative py-28 overflow-hidden">
      <div className="blob w-96 h-96 bg-azure-600/10 top-0 right-0"   style={{ filter:'blur(110px)' }} />
      <div className="blob w-96 h-96 bg-amber-400/8 bottom-0 left-0" style={{ filter:'blur(100px)' }} />
      <div className="absolute inset-x-0 top-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-16 reveal">
          <div className="s-label mb-5 mx-auto w-fit">Student Stories</div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-white leading-[1.1] mb-4">
            Voices of <span className="tg-gold">Excellence</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Real stories from JGU alumni who turned their education into extraordinary careers.
          </p>
        </div>

        {/* ── Carousel (Desktop 3-up / Mobile 1-up) ── */}
        <div
          className="reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onMouseDown={e => onDragStart(e.clientX)}
          onMouseUp={e => onDragEnd(e.clientX)}
          onTouchStart={e => onDragStart(e.touches[0].clientX)}
          onTouchEnd={e => onDragEnd(e.changedTouches[0].clientX)}
        >
          {/* ── Mobile: single card ── */}
          <div className="md:hidden">
            {TESTIMONIALS.map((t, i) => i === idx && (
              <TestimonialCard key={t.name} t={t} active />
            ))}
          </div>

          {/* ── Desktop: 3-cards ── */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {visibleIdxs.map((vi, pos) => (
              <TestimonialCard
                key={TESTIMONIALS[vi].name}
                t={TESTIMONIALS[vi]}
                active={pos === 1}
                onClick={() => setIdx(vi)}
              />
            ))}
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center justify-center gap-6 mt-10 reveal">
          {/* Prev */}
          <button onClick={prev} aria-label="Previous"
            className="w-11 h-11 rounded-full flex items-center justify-center glass hover:border-amber-400/30 transition-all group">
            <svg className="w-5 h-5 text-white/50 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Go to ${i+1}`}
                className={`rounded-full transition-all duration-300 ${i === idx ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>

          {/* Next */}
          <button onClick={next} aria-label="Next"
            className="w-11 h-11 rounded-full flex items-center justify-center glass hover:border-amber-400/30 transition-all group">
            <svg className="w-5 h-5 text-white/50 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* ── Trust row ── */}
        <div className="mt-16 pt-12 border-t border-white/[.06] reveal">
          <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-8">Trusted by students placed at</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {['Google','Deloitte','KPMG','Infosys','TCS','IBM','ISRO','Accenture','Wipro','HCL'].map(c => (
              <span key={c} className="text-white/25 hover:text-white/55 text-sm font-bold transition-colors cursor-default">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 flex flex-col gap-5 transition-all duration-500 cursor-default ${
        active
          ? 'g-border shadow-[0_20px_60px_rgba(0,0,0,.55)] scale-[1.02]'
          : 'glass opacity-60 hover:opacity-80 scale-[0.97] cursor-pointer'
      }`}
    >
      {/* Quote icon */}
      <svg className="w-8 h-8 text-amber-400/40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>

      {/* Stars */}
      <StarRating />

      {/* Text */}
      <p className="text-white/65 text-sm leading-relaxed flex-1">"{t.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/[.07]">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-display font-bold text-white text-sm flex-shrink-0`}>
          {t.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm truncate">{t.name}</p>
          <p className="text-white/40 text-xs truncate">{t.role}</p>
          <p className="text-amber-400 text-xs font-medium truncate">{t.company}</p>
        </div>
      </div>
    </div>
  )
}
