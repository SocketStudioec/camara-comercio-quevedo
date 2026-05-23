import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/* Íconos SVG inline únicos para cada servicio */
const icons = {
  afiliacion: (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 26c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="26" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M23 21c1-.4 2.1-.6 3-.6 2.761 0 5 1.79 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  capacitacion: (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M4 10l12-6 12 6-12 6-12-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M20 13v7c0 2.761-1.79 5-4 5s-4-2.239-4-5v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M28 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="28" cy="20" r="1.5" fill="currentColor"/>
    </svg>
  ),
  certificados: (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect x="5" y="4" width="18" height="22" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 11h10M9 15h10M9 19h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 24l1.5 1.5L26 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  guia: (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M6 6h8v8H6zM18 6h8v8h-8zM6 18h8v8H6zM18 18h8v8h-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  radio: (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 22a8.5 8.5 0 010-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 22a8.5 8.5 0 000-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 26A14.5 14.5 0 016 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M26 26a14.5 14.5 0 000-20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  expo: (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M4 24V14l12-8 12 8v10H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="13" y="17" width="6" height="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 14h24" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
}

/* Bento grid asimétrico — tamaños distintos */
const services = [
  {
    key: 'afiliacion',
    tag: 'Más popular',
    title: 'Afiliación Empresarial',
    desc: 'Únete al gremio más grande de Los Ríos. Representación legal, certificados oficiales y red de contactos empresarial.',
    features: ['Representación gremial', 'Certificados oficiales', 'Red de contactos', 'Beneficios exclusivos'],
    dark: true,     // fondo oscuro
    large: true,    // ocupa 2 cols
  },
  {
    key: 'expo',
    tag: 'Sep 2025',
    title: 'ExpoQuevedo',
    desc: 'La feria comercial más importante de Los Ríos. Tres días de comercio, cultura y oportunidades de negocio.',
    features: ['19–21 Septiembre 2025', '+80% stands vendidos', '$480K ventas en 2024'],
    dark: false,
    large: false,
    accent: true,   // gold accent
  },
  {
    key: 'capacitacion',
    tag: 'Activo 2025',
    title: 'Capacitación',
    desc: 'Talleres y programas de formación para fortalecer las habilidades empresariales de comerciantes y emprendedores.',
    features: ['Gestión empresarial', 'Marketing digital', 'Emprendimiento'],
    dark: false,
    large: false,
  },
  {
    key: 'certificados',
    tag: 'Inmediato',
    title: 'Certificados',
    desc: 'Emisión de certificados de afiliación, cartas de presentación y documentación empresarial oficial.',
    features: ['Certificados de afiliación', 'Cartas de presentación', 'Atención personalizada'],
    dark: false,
    large: false,
  },
  {
    key: 'guia',
    tag: 'Digital',
    title: 'Guía Comercial',
    desc: 'Directorio empresarial actualizado. Visibilidad garantizada para tu negocio en Quevedo y Los Ríos.',
    features: ['Directorio digital', 'Perfil empresarial', 'Búsqueda por rubro'],
    dark: false,
    large: false,
  },
  {
    key: 'radio',
    tag: 'Nuevo 2025',
    title: 'Radio Online CCQ',
    desc: 'Nuestro nuevo canal digital para noticias comerciales, eventos y novedades del sector empresarial.',
    features: ['Transmisión en vivo', 'Noticias comerciales', 'Alcance provincial'],
    dark: true,
    large: false,
  },
]

function Card({ s, index, inView }) {
  const baseDelay = index * 0.08

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: baseDelay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={[
        'group relative flex flex-col p-7 border cursor-pointer',
        s.large ? 'md:col-span-2' : '',
        s.dark
          ? 'bg-[#0D1F3C] border-[#1B3A6B] text-white'
          : s.accent
          ? 'bg-[#C8922A] border-[#b07d24] text-white'
          : 'bg-white border-[#E5E7EB] hover:border-[#0D1F3C]/30',
      ].join(' ')}
    >
      {/* Tag */}
      <div className={`inline-flex items-center gap-1.5 mb-5 self-start px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] uppercase ${
        s.dark ? 'bg-white/10 text-[#E8B84B]'
        : s.accent ? 'bg-white/20 text-white'
        : 'bg-[#FAF7F2] text-[#C8922A]'
      }`}>
        <span className="w-1 h-1 rounded-full bg-current" />
        {s.tag}
      </div>

      {/* Icon */}
      <div className={`mb-4 ${s.dark || s.accent ? 'text-white/70' : 'text-[#0D1F3C]'}`}>
        {icons[s.key]}
      </div>

      {/* Title */}
      <h3 className={`font-display text-xl mb-2 leading-snug ${s.dark || s.accent ? 'text-white' : 'text-[#0D1F3C]'}`}>
        {s.title}
      </h3>

      <p className={`text-sm leading-relaxed mb-6 flex-1 ${s.dark ? 'text-white/50' : s.accent ? 'text-white/80' : 'text-[#6B7280]'}`}>
        {s.desc}
      </p>

      {/* Features */}
      <ul className="space-y-1.5">
        {s.features.map(f => (
          <li key={f} className={`flex items-center gap-2 text-xs font-medium ${
            s.dark ? 'text-white/40' : s.accent ? 'text-white/70' : 'text-[#9CA3AF]'
          }`}>
            <span className={`w-1 h-1 rounded-full flex-shrink-0 ${
              s.dark ? 'bg-[#C8922A]' : s.accent ? 'bg-white' : 'bg-[#C8922A]'
            }`}/>
            {f}
          </li>
        ))}
      </ul>

      {/* Arrow link */}
      <div className={`mt-6 flex items-center gap-1.5 text-xs font-semibold tracking-wide ${
        s.dark || s.accent ? 'text-white/60 group-hover:text-white' : 'text-[#0D1F3C]/50 group-hover:text-[#C8922A]'
      } transition-colors duration-200`}>
        Más información
        <motion.span
          className="inline-block"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
        >→</motion.span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="servicios" ref={ref} className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#C8922A]" />
              <span className="text-[#C8922A] text-[11px] font-semibold tracking-[0.25em] uppercase">Servicios</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0D1F3C] leading-tight">
              Todo lo que necesita<br />
              <span className="italic text-[#C8922A]">tu empresa.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#6B7280] text-sm leading-relaxed max-w-xs text-right hidden md:block"
          >
            Un conjunto integral de servicios diseñados para impulsar la competitividad de tu negocio.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <Card key={s.key} s={s} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E5E7EB] pt-10"
        >
          <p className="text-[#9CA3AF] text-sm">¿Tienes preguntas sobre nuestros servicios?</p>
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-navy"
          >
            Contáctanos →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
