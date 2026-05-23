const links = {
  'Institución': [
    { l: 'La Cámara', h: '#camara' },
    { l: 'Historia', h: '#camara' },
    { l: 'Misión y Visión', h: '#camara' },
    { l: 'Noticias', h: '#noticias' },
  ],
  'Servicios': [
    { l: 'Afiliación', h: '#afiliate' },
    { l: 'Capacitación', h: '#servicios' },
    { l: 'Certificados', h: '#servicios' },
    { l: 'Guía Comercial', h: '#servicios' },
    { l: 'Radio CCQ', h: '#servicios' },
  ],
  'ExpoQuevedo': [
    { l: 'ExpoQuevedo 2025', h: '#expo' },
    { l: 'Reservar Stand', h: '#contacto' },
    { l: 'Artistas 2025', h: '#expo' },
    { l: 'Edición 2024', h: '#noticias' },
  ],
}

export default function Footer() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#0A0F1A] text-white">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8922A]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">

          {/* Brand — 2 cols */}
          <div className="col-span-2">
            <button onClick={() => go('#inicio')} className="flex items-center gap-3 mb-5 group">
              <div className="w-8 h-8 border border-[#C8922A]/40 flex items-center justify-center">
                <span className="font-bold text-xs text-[#C8922A] tracking-widest">CC</span>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-white/80 leading-tight">Cámara de Comercio</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#C8922A]">de Quevedo</div>
              </div>
            </button>

            <p className="text-white/30 text-xs leading-relaxed mb-6 max-w-[200px]">
              El gremio empresarial más grande de Los Ríos. Impulsando el comercio desde 1959.
            </p>

            {/* Socials */}
            <div className="flex gap-2 mb-6">
              {[
                { label: 'FB', href: 'https://www.facebook.com/ComercioQuevedo' },
                { label: 'IG', href: 'https://www.instagram.com/camaraquevedo/' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/10 hover:border-[#C8922A]/60 hover:bg-[#C8922A]/10 flex items-center justify-center text-white/30 hover:text-[#C8922A] text-[11px] font-bold tracking-wider transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="space-y-1.5">
              <p className="text-white/25 text-[11px]">7ma 217 E/ Bolívar y 7 de Oct.</p>
              <p className="text-white/25 text-[11px]">Quevedo, Los Ríos, Ecuador</p>
              <p className="text-white/25 text-[11px]">info@ccquevedo.com</p>
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map(({ l, h }) => (
                  <li key={l}>
                    <button
                      onClick={() => go(h)}
                      className="text-white/35 hover:text-[#C8922A] text-xs transition-colors duration-200"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ExpoQuevedo promo bar */}
        <div className="border-t border-white/6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/[0.03] border border-white/6 px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-[#C8922A]" />
              <div>
                <div className="text-white font-semibold text-sm">ExpoQuevedo 2025</div>
                <div className="text-white/30 text-[11px]">19–21 Septiembre · Km 2½ Vía Buena Fe</div>
              </div>
            </div>
            <button
              onClick={() => go('#expo')}
              className="text-[#C8922A] text-xs font-semibold tracking-wide hover:text-white transition-colors flex-shrink-0"
            >
              Ver detalles →
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-[11px]">
            © {new Date().getFullYear()} Cámara de Comercio de Quevedo · Fundada el 15 de enero de 1959
          </p>
          <a
            href="https://ccquevedo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-[#C8922A] text-[11px] transition-colors"
          >
            ccquevedo.com
          </a>
        </div>
      </div>
    </footer>
  )
}
