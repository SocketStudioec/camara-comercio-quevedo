import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timeline = [
  { year: '1959', title: 'Fundación', desc: 'La Cámara de Comercio de Quevedo se constituye formalmente el 15 de enero, consolidándose como referente del sector comercial.' },
  { year: '1980s', title: 'Expansión gremial', desc: 'Crecimiento sostenido de afiliados y apertura de servicios especializados para el sector comercial de la provincia de Los Ríos.' },
  { year: '2000s', title: 'ExpoQuevedo', desc: 'Consolidación de la feria comercial más importante de la región, posicionando a Quevedo como centro económico provincial.' },
  { year: '2021', title: 'Nueva directiva', desc: 'El Ing. Marco Franco asume la presidencia, impulsando modernización institucional y nuevos programas de desarrollo empresarial.' },
  { year: '2025', title: 'Era digital', desc: 'Lanzamiento de radio online y modernización de infraestructura. El gremio más grande de Los Ríos avanza hacia la transformación digital.' },
]

const values = [
  { icon: '🏛️', title: 'Institucionalidad', desc: 'Respeto por las normas y representación legítima del sector comercial.' },
  { icon: '🤝', title: 'Solidaridad', desc: 'Trabajo conjunto para el bienestar de todos los afiliados y la comunidad.' },
  { icon: '📈', title: 'Desarrollo', desc: 'Compromiso permanente con el crecimiento económico de la región.' },
  { icon: '✅', title: 'Transparencia', desc: 'Gestión honesta y comunicación abierta con nuestros afiliados.' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="camara" ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-1/4 w-96 h-96 bg-[#1B3A6B]/4 rounded-full blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 w-80 h-80 bg-[#D4A028]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1B3A6B]/8 text-[#1B3A6B] text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-4">
            Nuestra institución
          </div>
          <h2 className="section-title mb-4">67 años impulsando el comercio</h2>
          <div className="gold-line mx-auto mb-5" />
          <p className="section-subtitle max-w-3xl mx-auto">
            Somos el gremio empresarial más grande de la provincia de Los Ríos, representando los intereses del comercio local y acompañando el crecimiento de Quevedo por más de seis décadas.
          </p>
        </motion.div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              title: 'Misión',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              ),
              text: 'Representar, defender y promover los intereses del sector comercial de Quevedo y Los Ríos, ofreciendo servicios de calidad que fortalezcan la competitividad y el desarrollo sostenible de nuestros afiliados y la comunidad empresarial.',
              gradient: 'from-[#1B3A6B] to-[#2563EB]',
            },
            {
              title: 'Visión',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              text: 'Ser reconocida como la institución gremial líder del Ecuador, referente de excelencia en servicios empresariales, innovación y articulación público-privada para el desarrollo económico sostenible de Los Ríos.',
              gradient: 'from-[#D4A028] to-[#F5CC5C]',
            }
          ].map(({ title, icon, text, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 p-8 overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-5`}>
                {icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1B3A6B] mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="font-serif text-2xl font-bold text-[#1B3A6B] text-center mb-8">Nuestros Valores</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#F8FAFC] rounded-xl p-5 text-center hover:bg-[#EEF2FF] transition-colors duration-300 border border-slate-100"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <div className="font-semibold text-[#1B3A6B] text-sm mb-1">{title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="font-serif text-2xl font-bold text-[#1B3A6B] text-center mb-12">Nuestra Historia</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-[#1B3A6B] via-[#D4A028] to-[#1B3A6B] hidden md:block" />

            <div className="space-y-8">
              {timeline.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl border border-slate-100 shadow-card hover:shadow-card-hover p-5 transition-all duration-300 inline-block w-full md:max-w-sm">
                      <div className="font-serif text-[#D4A028] font-bold text-lg mb-1">{year}</div>
                      <div className="font-semibold text-[#1B3A6B] mb-1">{title}</div>
                      <div className="text-slate-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex w-5 h-5 bg-white border-4 border-[#1B3A6B] rounded-full flex-shrink-0 relative z-10 shadow-md" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Directivo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-navy-gradient rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-20" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-[#D4A028]/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <blockquote className="font-serif text-xl md:text-2xl text-white italic leading-relaxed mb-4">
                  "Nuestro compromiso es ser el motor del desarrollo empresarial de Quevedo, ofreciendo servicios de excelencia y representando con dignidad a cada comerciante afiliado."
                </blockquote>
                <div className="text-[#F5CC5C] font-semibold">Ing. Marco Franco</div>
                <div className="text-blue-200 text-sm">Presidente — Cámara de Comercio de Quevedo</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
