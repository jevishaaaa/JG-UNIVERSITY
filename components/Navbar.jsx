'use client'
import { useState, useEffect } from 'react'
import Image from "next/image";
const LINKS = [
  { l:'About',        h:'#about' },
  { l:'Programmes',   h:'#programs' },
  { l:'Testimonials', h:'#testimonials' },
  { l:'Contact',      h:'#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open,     setOpen]       = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      {/* ── Bar ── */}
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink-900/80 backdrop-blur-2xl border-b border-white/[.055] shadow-[0_4px_40px_#00000055]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center h-[150px] gap-8">

          {/* Logo */}
<img src="/JG-UNIVERSITY/Logo.svg" alt="Logo" className="h-14 w-auto" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            {LINKS.map(({ l, h }) => (
              <a key={l} href={h} className="nav-link px-4 py-2 rounded-lg hover:bg-white/[.04]">{l}</a>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact" className="hidden md:inline-flex btn-primary text-sm px-6 py-2.5 ml-2">
            Apply 2026–27
          </a>

          {/* Burger */}
          <button onClick={() => setOpen(v => !v)} aria-label="menu"
            className="md:hidden ml-auto w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-white/[.04] hover:bg-white/[.08] transition-colors">
            {[0,1,2].map(i => (
              <span key={i} className={`block h-[2px] bg-white rounded transition-all duration-300 ${
                i===1 ? (open?'opacity-0 w-0':'w-4 opacity-100') :
                i===0 ? (open?'w-5 rotate-45 translate-y-[7px]':'w-5') :
                         (open?'w-5 -rotate-45 -translate-y-[7px]':'w-3')
              }`}/>
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-400 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{background:'rgba(3,11,24,.96)', backdropFilter:'blur(20px)'}}>
        <div className="blob w-72 h-72 bg-amber-400/10 -top-20 -left-20" />
        <div className="blob w-72 h-72 bg-azure-500/10 bottom-0 -right-20" />
        <div className="flex-1 flex flex-col justify-center px-8 gap-1 relative z-10">
          {LINKS.map(({ l, h }, i) => (
            <a key={l} href={h} onClick={() => setOpen(false)}
              className="group flex items-center py-5 border-b border-white/[.06]">
              <span className="font-display text-3xl font-extrabold text-white/80 group-hover:text-amber-400 transition-colors">{l}</span>
              <svg className="w-5 h-5 ml-auto text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4-4 4M3 12h18"/>
              </svg>
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-8 py-4 text-base">Apply Now 2026–27</a>
        </div>
      </div>
    </>
  )
}
