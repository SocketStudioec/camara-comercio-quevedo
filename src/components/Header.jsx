import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#0D1F3C]/8 shadow-[0_1px_12px_rgba(13,31,60,0.07)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => go('#inicio')} className="flex items-center gap-3 group">
            {/* Monogram */}
            <div className={`w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
              scrolled ? 'border-[#0D1F3C] bg-[#0D1F3C]' : 'border-white bg-white/10'
            }`}>
              <span className={`font-bold text-xs tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`}>CC</span>
            </div>
            <div>
              <div className={`text-xs font-semibold tracking-[0.15em] uppercase leading-tight transition-colors duration-300 ${
                scrolled ? 'text-[#0D1F3C]' : 'text-white'
              }`}>Cámara de Comercio</div>
              <div className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-[#C8922A]' : 'text-[#E8B84B]'
              }`}>de Quevedo · Est. 1959</div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => go(href)}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-200 relative group ${
                  scrolled ? 'text-[#374151] hover:text-[#0D1F3C]' : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8922A] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => go('#afiliate')}
              className={`text-[13px] font-semibold tracking-wide px-5 py-2 border transition-all duration-300 ${
                scrolled
                  ? 'border-[#0D1F3C] text-[#0D1F3C] hover:bg-[#0D1F3C] hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-[#0D1F3C]'
              }`}
            >
              Afíliate
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-1 transition-colors ${scrolled ? 'text-[#0D1F3C]' : 'text-white'}`}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-px bg-current origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px bg-current"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-px bg-current origin-center"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-[#0D1F3C]/10 shadow-xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => go(href)}
                  className="text-left py-3 text-[#0D1F3C] font-medium text-sm border-b border-[#0D1F3C]/5 last:border-0 hover:text-[#C8922A] transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => go('#afiliate')}
                className="mt-4 w-full py-3 bg-[#0D1F3C] text-white text-sm font-semibold tracking-wide"
              >
                Afíliate ahora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
