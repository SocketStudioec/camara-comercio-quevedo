import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const articles = [
  {
    cat: 'Capacitación',
    date: '21 May 2025',
    title: 'La Cámara capacita a comerciantes y emprendedores para fortalecer el tejido empresarial de Quevedo',
    excerpt: 'Nuevos programas de formación para fortalecer las capacidades de gestión, marketing y finanzas de los comerciantes locales.',
    featured: true,
  },
  {
    cat: 'ExpoQuevedo',
    date: '15 Abr 2025',
    title: 'ExpoQuevedo 2025: fechas confirmadas y más de 210 locales esperados',
    excerpt: 'El recinto ferial del sector 20 de Febrero acogerá la feria del 19 al 21 de septiembre con récord de participantes.',
    featured: false,
  },
  {
    cat: 'Innovación',
    date: '5 Mar 2025',
    title: 'Lanzamiento de Radio Online CCQ: nueva voz para el comercio quevedeño',
    excerpt: 'La Cámara moderniza su comunicación con su nueva emisora digital, conectando a toda la comunidad empresarial.',
    featured: false,
  },
  {
    cat: 'Internacional',
    date: '6 Ene 2025',
    title: 'Quevedo se conecta con China: nuevas oportunidades comerciales para afiliados',
    excerpt: 'Acuerdo de cooperación comercial abre puertas a mercados asiáticos para los empresarios de Los Ríos.',
    featured: false,
  },
]

const catColors = {
  'Capacitación': 'bg-blue-50 text-blue-700',
  'ExpoQuevedo': 'bg-amber-50 text-amber-700',
  'Innovación': 'bg-rose-50 text-rose-700',
  'Internacional': 'bg-emerald-50 text-emerald-700',
}

export default function News() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const [featured, ...rest] = articles

  return (
    <section id="noticias" ref={ref} className="bg-[#FAF7F2] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#C8922A]" />
              <span className="text-[#C8922A] text-[11px] font-semibold tracking-[0.25em] uppercase">Noticias</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0D1F3C] leading-tight">
              Mantente<br /><span className="italic text-[#C8922A]">informado.</span>
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="https://www.facebook.com/ComercioQuevedo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D1F3C] text-sm font-semibold tracking-wide hover:text-[#C8922A] transition-colors flex items-center gap-2"
          >
            Ver todas las noticias →
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-3">

          {/* Featured article — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 group cursor-pointer bg-[#0D1F3C] relative overflow-hidden"
          >
            {/* Abstract visual — líneas geométricas */}
            <div className="h-52 relative overflow-hidden bg-gradient-to-br from-[#1B3A6B] to-[#0D1F3C]">
              <div className="absolute inset-0 grid-pattern opacity-80" />
              {/* Decorative abstract shapes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#C8922A" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#C8922A" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#C8922A" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <line x1="0" y1="80" x2="600" y2="120" stroke="url(#lineGrad)" strokeWidth="0.8"/>
                <line x1="0" y1="100" x2="600" y2="70" stroke="url(#lineGrad)" strokeWidth="0.5"/>
                <circle cx="300" cy="100" r="60" stroke="rgba(200,146,42,0.15)" strokeWidth="0.8" fill="none"/>
                <circle cx="300" cy="100" r="100" stroke="rgba(200,146,42,0.08)" strokeWidth="0.5" fill="none"/>
                <rect x="260" y="70" width="80" height="60" stroke="rgba(200,146,42,0.2)" strokeWidth="0.8" fill="none"/>
              </svg>
              <div className="absolute bottom-4 left-6">
                <span className={`inline-block px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#C8922A] text-white`}>
                  {featured.cat}
                </span>
              </div>
            </div>

            <div className="p-7">
              <p className="text-white/30 text-[11px] mb-3 tracking-wide">{featured.date}</p>
              <h3 className="font-display text-xl text-white mb-3 leading-snug group-hover:text-[#E8B84B] transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-[#C8922A] text-xs font-semibold">
                Leer artículo
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </div>
            </div>
          </motion.div>

          {/* Side articles */}
          <div className="flex flex-col gap-3">
            {rest.map(({ cat, date, title, excerpt }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group cursor-pointer bg-white border border-[#E5E7EB] hover:border-[#0D1F3C]/20 p-5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(13,31,60,0.08)] flex-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 ${catColors[cat] || 'bg-gray-50 text-gray-600'}`}>
                    {cat}
                  </span>
                  <span className="text-[#9CA3AF] text-[11px]">{date}</span>
                </div>
                <h4 className="font-display text-sm text-[#0D1F3C] leading-snug mb-2 group-hover:text-[#C8922A] transition-colors duration-200 line-clamp-3">
                  {title}
                </h4>
                <p className="text-[#9CA3AF] text-xs leading-relaxed line-clamp-2">{excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social follow bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 border border-[#0D1F3C]/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#6B7280] text-sm">Síguenos para noticias y novedades del gremio</p>
          <div className="flex gap-2">
            {[
              { label: 'Facebook', href: 'https://www.facebook.com/ComercioQuevedo', bg: 'bg-[#1877F2]' },
              { label: 'Instagram', href: 'https://www.instagram.com/camaraquevedo/', bg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]' },
            ].map(({ label, href, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bg} text-white text-xs font-semibold px-4 py-2.5 tracking-wide hover:opacity-90 transition-opacity`}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
