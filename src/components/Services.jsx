import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Afiliación Empresarial',
    description: 'Únete al gremio más grande de Los Ríos y accede a beneficios exclusivos para comerciantes y emprendedores. Representación legal y gremial garantizada.',
    features: ['Representación gremial', 'Red de contactos', 'Beneficios exclusivos', 'Certificados oficiales'],
    color: 'bg-[#1B3A6B]',
    lightColor: 'bg-blue-50',
    textColor: 'text-[#1B3A6B]',
    borderColor: 'border-[#1B3A6B]',
    tag: 'Más popular',
    tagColor: 'bg-[#1B3A6B] text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Capacitación y Formación',
    description: 'Programas de capacitación diseñados para fortalecer las habilidades empresariales de comerciantes y emprendedores de la región.',
    features: ['Talleres presenciales', 'Cursos de gestión', 'Emprendimiento', 'Marketing digital'],
    color: 'bg-[#D4A028]',
    lightColor: 'bg-amber-50',
    textColor: 'text-[#D4A028]',
    borderColor: 'border-[#D4A028]',
    tag: 'Activo 2025',
    tagColor: 'bg-[#D4A028] text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Certificados y Trámites',
    description: 'Emisión de certificados oficiales de afiliación, cartas de presentación y documentación empresarial requerida por entidades públicas y privadas.',
    features: ['Certificados de afiliación', 'Cartas de presentación', 'Documentación legal', 'Atención personalizada'],
    color: 'bg-emerald-600',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-600',
    tag: 'Inmediato',
    tagColor: 'bg-emerald-600 text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: 'Guía Comercial',
    description: 'Directorio empresarial actualizado de los negocios y comercios afiliados en Quevedo. Visibilidad garantizada para tu empresa en la comunidad.',
    features: ['Directorio digital', 'Perfil empresarial', 'Búsqueda por rubro', 'Contacto directo'],
    color: 'bg-violet-600',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-600',
    tag: 'Digital',
    tagColor: 'bg-violet-600 text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    title: 'Radio Online CCQ',
    description: 'Nuestro nuevo canal de comunicación digital. Mantente informado sobre noticias comerciales, eventos y novedades del sector empresarial quevedeño.',
    features: ['Transmisión en vivo', 'Noticias comerciales', 'Programas especiales', 'Alcance provincial'],
    color: 'bg-rose-600',
    lightColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-600',
    tag: 'Nuevo 2025',
    tagColor: 'bg-rose-600 text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-3.375 3h.008v.008H9V16.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm6.75-3h.008v.008H15.75V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-3.375 3h.008v.008H12V16.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'ExpoQuevedo',
    description: 'La feria comercial más importante de la región. Un espacio donde empresas y emprendedores exhiben sus productos, generan ventas y establecen alianzas.',
    features: ['Stands comerciales', 'Entretenimiento', 'Concursos y premios', 'Miles de visitantes'],
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-500',
    borderColor: 'border-orange-500',
    tag: 'Sep 2025',
    tagColor: 'bg-orange-500 text-white',
  },
]

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="servicios" ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1B3A6B]/8 text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-4">
            Nuestros servicios
          </div>
          <h2 className="section-title mb-4">
            Todo lo que necesita tu empresa
          </h2>
          <div className="gold-line mb-5" />
          <p className="section-subtitle">
            Ofrecemos un conjunto integral de servicios diseñados para impulsar el crecimiento y la competitividad de tu negocio en Quevedo y la región de Los Ríos.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, description, features, color, lightColor, textColor, borderColor, tag, tagColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-transparent shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Hover gradient bg */}
              <div className={`absolute inset-0 ${lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative z-10">
                {/* Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {icon}
                  </div>
                  <span className={`${tagColor} text-xs font-semibold px-2.5 py-1 rounded-full`}>{tag}</span>
                </div>

                {/* Content */}
                <h3 className={`font-serif text-xl font-bold text-slate-800 mb-2 group-hover:${textColor} transition-colors duration-300`}>
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {features.map(feat => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className={`w-1.5 h-1.5 rounded-full ${color} flex-shrink-0`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`flex items-center gap-1 ${textColor} text-sm font-semibold group-hover:gap-2 transition-all duration-200`}>
                  Más información
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-500 mb-5">¿Tienes preguntas sobre alguno de nuestros servicios?</p>
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Contáctanos hoy
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
