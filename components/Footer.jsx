'use client'
import { useState } from 'react'

const LINKS = {
  Programmes: [
    { l:'MBA',          h:'https://jguni.in/mba.html' },
    { l:'BBA',          h:'https://jguni.in/bba.html' },
    { l:'BCA',          h:'https://jguni.in/bca.html' },
    { l:'B.Tech CSE',   h:'https://jguni.in/b-tech.html' },
    { l:'B.Tech AI & ML', h:'https://jguni.in/btech-artificial-Intelligence.html' },
    { l:'MCA',          h:'https://jguni.in/mca.html' },
    { l:'LL.B.',        h:'https://jguni.in/llb.html' },
    { l:'Ph.D Programmes', h:'https://jguni.in/doctoral-programmes.html' },
  ],
  'Quick Links': [
    { l:'About JGU',      h:'#about' },
    { l:'Testimonials',   h:'#testimonials' },
    { l:'Admissions',     h:'https://jguni.in/admission-open.html' },
    { l:'Scholarships',   h:'https://jguni.in' },
    { l:'Placements',     h:'https://jguni.in' },
    { l:'Campus Life',    h:'https://jguni.in' },
    { l:'Research',       h:'https://jguni.in' },
    { l:'News & Events',  h:'https://jguni.in' },
  ],
  'Certificate Courses': [
    { l:'Data Science & AI-ML', h:'https://jguni.in/data-science-ai-ml-&-deep-learning.html' },
    { l:'Digital Marketing',    h:'https://jguni.in/digital-marketing.html' },
    { l:'Cyber Security',       h:'https://jguni.in/cyber-security.html' },
    { l:'Blockchain',           h:'https://jguni.in/blockchain.html' },
    { l:'Full Stack Architect', h:'https://jguni.in/full-stack-architect.html' },
    { l:'Azure DevOps',         h:'https://jguni.in/azure-devops.html' },
    { l:'Metaverse',            h:'https://jguni.in/metaverse.html' },
    { l:'RPA',                  h:'https://jguni.in/robotic-process-automation.html' },
  ],
}

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"/>,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></>,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>,
  },
]

export default function Footer() {
  const [email, setEmail]   = useState('')
  const [subbed, setSubbed] = useState(false)

  const handleSub = (e) => {
    e.preventDefault()
    if (!email) return
    setSubbed(true)
  }

  return (
    <footer className="relative overflow-hidden" style={{ background:'#060F20' }}>
      {/* top divider */}
      <div className="h-px w-full" style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)' }} />

      {/* ── Newsletter Banner ── */}
      <div className="relative overflow-hidden">
        <div className="blob w-96 h-40 bg-amber-400/10 left-1/2 -translate-x-1/2 top-0" style={{ filter:'blur(80px)' }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl font-extrabold text-white mb-1">
              Stay in the <span className="tg-gold">Loop</span>
            </h3>
            <p className="text-white/45 text-sm">Get admission alerts, scholarship news, and campus updates.</p>
          </div>
          <form onSubmit={handleSub} className="flex gap-2 w-full md:w-auto">
            {subbed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <span className="text-xl">✅</span> You're subscribed!
              </div>
            ) : (
              <>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com" required
                  className="flex-1 md:w-64 rounded-xl px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-amber-400/50"
                  style={{ background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.10)' }}
                />
                <button type="submit" className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap">Subscribe</button>
              </>
            )}
          </form>
        </div>
      </div>

      <div className="h-px w-full" style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,.05),transparent)' }} />

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 xl:gap-20">

          {/* Brand column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-extrabold text-ink-950 text-base"
                style={{ background:'linear-gradient(135deg,#FBBF24,#F59E0B)' }}>JG</div>
              <div>
                <p className="font-display font-bold text-white text-[15px] group-hover:tg-gold transition-all">JG University</p>
                <p className="text-white/30 text-[10px] tracking-widest uppercase mt-0.5">Est. 1965 · Ahmedabad</p>
              </div>
            </a>

            <p className="text-white/40 text-sm leading-relaxed">
              A UGC-approved New Age Tech-Driven University in Ahmedabad — equipping students with the skills, mindset, and network to lead in a rapidly changing world.
            </p>

            {/* Accreditation badges */}
            <div className="flex flex-wrap gap-2">
              {['UGC Approved','NAAC A+','NIRF Ranked','NEP 2020'].map(b => (
                <span key={b} className="text-[10px] font-bold px-2.5 py-1 rounded-full text-amber-400"
                  style={{ background:'rgba(251,191,36,.08)', border:'1px solid rgba(251,191,36,.18)' }}>
                  {b}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2 pt-1">
              {SOCIALS.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/35 hover:text-amber-400 transition-all hover:-translate-y-0.5"
                  style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.08)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(LINKS).map(([group, items]) => (
              <div key={group}>
                <h5 className="font-display font-bold text-white text-sm mb-4">{group}</h5>
                <ul className="space-y-2.5">
                  {items.map(({ l, h }) => (
                    <li key={l}>
                      <a href={h}
                        target={h.startsWith('http') ? '_blank' : '_self'}
                        rel={h.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white/40 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[.055]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} JG University. All rights reserved. Designed with ❤️ for tomorrow's leaders.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy','Terms of Use','Sitemap'].map(l => (
              <a key={l} href="#" className="text-white/25 hover:text-white/55 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
