import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const news = [
  {
    category: 'Capacitación',
    categoryColor: 'bg-blue-100 text-blue-700',
    date: '21 Mayo 2025',
    title: 'Cámara capacita a comerciantes y emprendedores para fortalecer el tejido empresarial',
    excerpt: 'Nuevos programas de formación diseñados para fortalecer las capacidades de gestión, marketing y finanzas de los comerciantes de Quevedo y la región de Los Ríos.',
    readTime: '3 min',
    featured: true,
  },
  {
    category: 'ExpoQuevedo',
    categoryColor: 'bg-amber-100 text-amber-700',
    date: '15 Abril 2025',
    title: 'Ya hay fecha para ExpoQuevedo 2025: La feria más importante de la región',
    excerpt: 'Confirmadas las fechas del 19 al 21 de septiembre para la edición 2025. El Centro de Exposiciones del sector 20 de Febrero será nuevamente el escenario.',
    readTime: '4 min',
    featured: false,
  },
  {
    category: 'Innovación',
    categoryColor: 'bg-rose-100 text-rose-700',
    date: '5 Marzo 2025',
    title: 'Lanzamiento de Radio Online CCQ: nueva voz para el comercio quevedeño',
    excerpt: 'La Cámara de Comercio de Quevedo moderniza su comunicación con el lanzamiento de su nueva emisora digital, conectando a la comunidad empresarial.',
    readTime: '2 min',
    featured: false,
  },
  {
    category: 'Logros',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    date: '10 Enero 2025',
    title: 'ExpoQuevedo 2024 generó más de $480.000 en ventas y 1.600 empleos temporales',
    excerpt: 'La edición 2024 superó todas las expectativas con un impacto económico sin precedentes para los exhibidores y la ciudad de Quevedo.',
    readTime: '5 min',
    featured: false,
  },
]

export default function News() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const featured = news[0]
  const rest = news.slice(1)

  return (
    <section id="noticias" ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-slate-50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1B3A6B]/8 text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-4">
              Noticias y novedades
            </div>
            <h2 className="section-title mb-2">Mantente informado</h2>
            <div className="gold-line" />
          </div>
          <a
            href="https://www.facebook.com/ComercioQuevedo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B3A6B] hover:text-[#D4A028] text-sm font-semibold flex items-center gap-1.5 transition-colors flex-shrink-0"
          >
            Ver todas las noticias
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="lg:col-span-3 group cursor-pointer"
          >
            <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
              {/* Image placeholder with gradient */}
              <div className="h-52 bg-navy-gradient relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`${featured.categoryColor} text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {featured.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-16 h-0.5 bg-[#D4A028] rounded-full" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime} lectura</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-800 mb-3 group-hover:text-[#1B3A6B] transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-1.5 text-[#1B3A6B] text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Leer más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map(({ category, categoryColor, date, title, excerpt, readTime }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 p-5 group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`${categoryColor} text-xs font-bold px-2.5 py-1 rounded-full`}>{category}</span>
                  <span className="text-slate-400 text-xs ml-auto">{date}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-slate-800 mb-2 group-hover:text-[#1B3A6B] transition-colors leading-snug line-clamp-2">
                  {title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-3">{excerpt}</p>
                <div className="flex items-center gap-1 text-[#1B3A6B] text-xs font-semibold">
                  Leer más
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social follow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100"
        >
          <span className="text-slate-600 text-sm">Síguenos para más noticias:</span>
          <div className="flex gap-3">
            {[
              { label: 'Facebook', href: 'https://www.facebook.com/ComercioQuevedo', color: 'bg-blue-600 hover:bg-blue-700', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { label: 'Instagram', href: 'https://www.instagram.com/camaraquevedo/', color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
            ].map(({ label, href, color, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-sm`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
