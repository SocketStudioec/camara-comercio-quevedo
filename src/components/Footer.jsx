import { motion } from 'framer-motion'

const footerLinks = {
  'La Cámara': [
    { label: 'Historia', href: '#camara' },
    { label: 'Misión y Visión', href: '#camara' },
    { label: 'Directiva', href: '#camara' },
    { label: 'Noticias', href: '#noticias' },
  ],
  'Servicios': [
    { label: 'Afiliación', href: '#afiliate' },
    { label: 'Capacitación', href: '#servicios' },
    { label: 'Certificados', href: '#servicios' },
    { label: 'Guía Comercial', href: '#servicios' },
    { label: 'Radio CCQ', href: '#servicios' },
  ],
  'ExpoQuevedo': [
    { label: 'ExpoQuevedo 2025', href: '#expo' },
    { label: 'Reservar Stand', href: '#contacto' },
    { label: 'Edición 2024', href: '#noticias' },
    { label: 'Prensa', href: '#contacto' },
  ],
}

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ComercioQuevedo',
    icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/camaraquevedo/',
    icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z',
  },
]

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-navy-gradient text-white overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A028]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="font-serif font-bold text-sm leading-tight">Cámara de Comercio</div>
                <div className="text-[#F5CC5C] text-xs font-medium tracking-widest uppercase">de Quevedo</div>
              </div>
            </div>

            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-xs">
              El gremio empresarial más grande de la provincia de Los Ríos.
              Impulsando el comercio y el desarrollo empresarial desde 1959.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#D4A028] rounded-lg flex items-center justify-center text-blue-200 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={label}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Contact brief */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-blue-200 text-xs">
                <svg className="w-3.5 h-3.5 text-[#D4A028] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                7ma 217 E/ Bolívar y 7 de Octubre, Quevedo
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-xs">
                <svg className="w-3.5 h-3.5 text-[#D4A028] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@ccquevedo.com
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-semibold text-sm mb-4 text-white/90">{group}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className="text-blue-300 hover:text-[#F5CC5C] text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ExpoQuevedo 2025 banner in footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/8 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-[#D4A028] text-lg">🎪</span>
              <div>
                <div className="font-serif font-bold text-white text-sm">ExpoQuevedo 2025</div>
                <div className="text-blue-300 text-xs">19, 20 y 21 de Septiembre · Centro de Exposiciones Km 2½</div>
              </div>
            </div>
            <button
              onClick={() => document.querySelector('#expo')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-shrink-0 bg-[#D4A028] hover:bg-[#B7860E] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Más información
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs">
            © {new Date().getFullYear()} Cámara de Comercio de Quevedo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-blue-400 text-xs">Fundada el 15 de enero de 1959</span>
            <span className="w-1 h-1 bg-blue-500 rounded-full" />
            <a href="https://ccquevedo.com" target="_blank" rel="noopener noreferrer"
              className="text-blue-300 hover:text-[#F5CC5C] text-xs transition-colors">
              ccquevedo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
