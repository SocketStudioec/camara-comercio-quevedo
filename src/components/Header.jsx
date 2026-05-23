import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'La Cámara', href: '#camara' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'ExpoQuevedo', href: '#expo' },
  { label: 'Afíliate', href: '#afiliate' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#inicio')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(27,58,107,0.12)] border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar */}
        <div className={`hidden md:block transition-all duration-500 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'bg-[#1B3A6B] opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-6 text-xs text-blue-100">
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                (04) 2-750-XXX
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                info@ccquevedo.com
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                Lun–Vie: 8:00 – 17:00
              </span>
            </div>
            <div className="flex items-center gap-3">
              {[
                { label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', href: 'https://www.facebook.com/ComercioQuevedo' },
                { label: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z', href: 'https://www.instagram.com/camaraquevedo/' },
              ].map(({ label, icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-blue-200 hover:text-[#D4A028] transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <button onClick={() => handleNavClick('#inicio')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-navy-gradient flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className={`font-serif font-bold text-sm leading-tight transition-colors duration-300 ${scrolled ? 'text-[#1B3A6B]' : 'text-white'}`}>
                  Cámara de Comercio
                </div>
                <div className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-[#D4A028]' : 'text-[#F5CC5C]'}`}>
                  de Quevedo
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                    activeLink === href
                      ? scrolled ? 'text-[#1B3A6B] bg-blue-50' : 'text-white bg-white/10'
                      : scrolled ? 'text-slate-700 hover:text-[#1B3A6B] hover:bg-blue-50' : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                  {activeLink === href && (
                    <motion.div layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4A028]" />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick('#afiliate')}
                className="hidden md:inline-flex items-center gap-2 bg-[#D4A028] hover:bg-[#B7860E] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Afíliate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {mobileOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-100 shadow-xl lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeLink === href
                      ? 'bg-[#1B3A6B] text-white'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-[#1B3A6B]'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#afiliate')}
                className="mt-2 btn-gold w-full justify-center"
              >
                Afíliate Ahora
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
