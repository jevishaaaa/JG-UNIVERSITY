'use client'
import { useState, useEffect, useRef } from 'react'

const TABS = ['Undergraduate','Postgraduate','Doctoral','Certificate']

const DATA = {
  Undergraduate: [
    { e:'💼', n:'BBA',             f:'Bachelor of Business Administration',      d:'3 Yrs', tag:'Management', c:'gold',   url:'https://jguni.in/bba.html' },
    { e:'🏦', n:'iMBA',            f:'Integrated MBA (5-Year)',                  d:'5 Yrs', tag:'Management', c:'gold',   url:'https://jguni.in/imba.html' },
    { e:'📊', n:'B.Com',           f:'Bachelor of Commerce',                     d:'3 Yrs', tag:'Commerce',   c:'blue',   url:'https://jguni.in/bcom.html' },
    { e:'💻', n:'BCA',             f:'Bachelor of Computer Applications',        d:'3 Yrs', tag:'Computing',  c:'purple', url:'https://jguni.in/bca.html' },
    { e:'🤖', n:'B.Tech AI & ML',  f:'Artificial Intelligence & Machine Learning', d:'4 Yrs', tag:'Engineering',c:'green', url:'https://jguni.in/btech-artificial-Intelligence.html' },
    { e:'⚙️', n:'B.Tech CSE',      f:'Computer Science & Engineering',           d:'4 Yrs', tag:'Engineering',c:'green',  url:'https://jguni.in/b-tech.html' },
    { e:'🔐', n:'B.Sc. Cyber',     f:'Cyber & Digital Forensic Science',         d:'3–5 Yrs',tag:'Science',  c:'blue',   url:'https://jguni.in/bsc-hons-imsc-cyber-digital-forensic.html' },
    { e:'⚖️', n:'LL.B.',           f:'Bachelor of Laws',                         d:'3 Yrs', tag:'Law',        c:'purple', url:'https://jguni.in/llb.html' },
  ],
  Postgraduate: [
    { e:'🎯', n:'MBA',             f:'Master of Business Administration',        d:'2 Yrs', tag:'Management', c:'gold',   url:'https://jguni.in/mba.html' },
    { e:'📈', n:'M.Com (Hons)',    f:'Master of Commerce with Honours',          d:'2 Yrs', tag:'Commerce',   c:'blue',   url:'https://jguni.in/mcom.html' },
    { e:'🖥️', n:'MCA',            f:'Master of Computer Applications',          d:'2 Yrs', tag:'Computing',  c:'purple', url:'https://jguni.in/mca.html' },
    { e:'🛡️', n:'M.Sc. Cyber',    f:'Cyber Security & Digital Forensics',       d:'2 Yrs', tag:'Science',    c:'green',  url:'https://jguni.in/msc-cyber.html' },
    { e:'✈️', n:'M. Aviation',    f:'Aviation, Hospitality & Travel Management',d:'2 Yrs', tag:'Management', c:'gold',   url:'https://jguni.in/MAHTM-Aviation-Hospitality-&-Travel-Management.html' },
    { e:'🌐', n:'M. Intl Trade',  f:'Masters in International Trade & Finance', d:'2 Yrs', tag:'Commerce',   c:'blue',   url:'#' },
  ],
  Doctoral: [
    { e:'📐', n:'Ph.D Commerce',      f:'Doctoral Programme in Commerce',        d:'Flexible', tag:'Research', c:'gold',   url:'https://jguni.in/doctoral-programmes.html' },
    { e:'📊', n:'Ph.D Management',    f:'Doctoral Programme in Management',      d:'Flexible', tag:'Research', c:'blue',   url:'https://jguni.in/doctoral-programmes.html' },
    { e:'🔧', n:'Ph.D Computing',     f:'Doctoral Programme in Computing',       d:'Flexible', tag:'Research', c:'purple', url:'https://jguni.in/doctoral-programmes.html' },
    { e:'🔗', n:'Ph.D Interdisciplinary', f:'Cross-Domain Research Programme',   d:'Flexible', tag:'Research', c:'green',  url:'https://jguni.in/doctoral-programmes.html' },
    { e:'⚖️', n:'Ph.D Law',          f:'Doctoral Programme in Law',             d:'Flexible', tag:'Research', c:'gold',   url:'https://jguni.in/doctoral-programmes.html' },
  ],
  Certificate: [
    { e:'🧠', n:'Data Science & AI-ML',  f:'AI, Machine Learning & Deep Learning', d:'Short-term', tag:'Tech',      c:'blue',   url:'https://jguni.in/data-science-ai-ml-&-deep-learning.html' },
    { e:'📱', n:'Mobile Applications',   f:'iOS & Android App Development',        d:'Short-term', tag:'Tech',      c:'purple', url:'https://jguni.in/mobile-applications.html' },
    { e:'🌐', n:'Digital Marketing',     f:'Full Digital Marketing Specialisation', d:'Short-term', tag:'Marketing', c:'gold',   url:'https://jguni.in/digital-marketing.html' },
    { e:'🔒', n:'Cyber Security',        f:'Cybersecurity Foundations & Practice',  d:'Short-term', tag:'Tech',      c:'green',  url:'https://jguni.in/cyber-security.html' },
    { e:'⛓️', n:'Blockchain',           f:'Blockchain Technology & Applications',  d:'Short-term', tag:'Tech',      c:'blue',   url:'https://jguni.in/blockchain.html' },
    { e:'🤖', n:'Robotic Process Auto.', f:'RPA Design & Implementation',           d:'Short-term', tag:'Tech',      c:'purple', url:'https://jguni.in/robotic-process-automation.html' },
    { e:'🛠️', n:'Full Stack Architect', f:'End-to-End Web Development',            d:'Short-term', tag:'Tech',      c:'gold',   url:'https://jguni.in/full-stack-architect.html' },
    { e:'☁️', n:'Azure DevOps',         f:'Microsoft Azure DevOps Engineering',    d:'Short-term', tag:'Tech',      c:'green',  url:'https://jguni.in/azure-devops.html' },
  ],
}

const CLR = {
  gold:   { bg:'rgba(251,191,36,.10)', border:'rgba(251,191,36,.2)', text:'#FBBF24' },
  blue:   { bg:'rgba(96,165,250,.10)', border:'rgba(96,165,250,.2)', text:'#60A5FA' },
  purple: { bg:'rgba(167,139,250,.10)',border:'rgba(167,139,250,.2)',text:'#A78BFA' },
  green:  { bg:'rgba(52,211,153,.10)', border:'rgba(52,211,153,.2)', text:'#34D399' },
}

export default function Programs() {
  const [active, setActive] = useState('Undergraduate')
  const [key, setKey]       = useState(0)
  const ref = useRef(null)

  const change = (t) => { setActive(t); setKey(k => k+1) }

  useEffect(() => {
    const root = ref.current; if (!root) return
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target) } }),
      { threshold:.12, rootMargin:'0px 0px -50px 0px' }
    )
    root.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const cards = DATA[active]

  return (
    <section id="programs" ref={ref} className="relative py-28 overflow-hidden">
      <div className="blob w-96 h-96 bg-amber-400/8 top-10 -left-20" style={{filter:'blur(110px)'}} />
      <div className="blob w-96 h-96 bg-azure-600/10 bottom-10 -right-20" style={{filter:'blur(110px)'}} />
      <div className="absolute inset-x-0 top-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)'}} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="s-label mb-5 mx-auto w-fit">Academic Programmes</div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold text-white leading-[1.1] mb-4">
            Designed for <span className="tg-gold">Tomorrow's</span> Careers
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            50+ industry-aligned programmes across Management, Commerce, Computing, Engineering, Law, and Science.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          <div className="glass p-1.5 rounded-full flex flex-wrap gap-1 justify-center">
            {TABS.map(t => (
              <button key={t} onClick={() => change(t)} className={`tab ${active===t?'on':''}`}>{t}</button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div key={key} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => {
            const col = CLR[c.c]
            return (
              <a
                key={c.n}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-hover p-6 rounded-2xl flex flex-col gap-4 group cursor-pointer animate-fade-up"
                style={{ animationDelay:`${i*0.055}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: col.bg, border:`1px solid ${col.border}` }}>
                  {c.e}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-white text-[15px] leading-snug mb-1 group-hover:tg-gold transition-all">{c.n}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{c.f}</p>
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-1 border-t border-white/[.06]">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full border" style={{ color:col.text, background:col.bg, borderColor:col.border }}>
                    {c.tag}
                  </span>
                  <span className="text-white/35 text-xs">{c.d}</span>
                </div>
              </a>
            )
          })}
        </div>

        {/* CTA row */}
        <div className="mt-12 text-center reveal">
          <p className="text-white/40 text-sm mb-4">Can't find what you're looking for?</p>
          <a href="https://jguni.in" target="_blank" rel="noopener noreferrer" className="btn-ghost px-7 py-3 text-sm">
            View All 50+ Programmes →
          </a>
        </div>
      </div>
    </section>
  )
}
