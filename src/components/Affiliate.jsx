import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Representación gremial',
    desc: 'Defensa de tus intereses ante entidades públicas, privadas y organismos del Estado.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Certificados oficiales',
    desc: 'Emisión inmediata de certificados de afiliación, cartas de presentación y documentación empresarial.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Capacitación gratuita',
    desc: 'Acceso preferencial a talleres, seminarios y cursos de capacitación empresarial sin costo adicional.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: 'Guía comercial',
    desc: 'Tu empresa destacada en el directorio empresarial digital y físico de Quevedo y Los Ríos.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-3.375 3h.008v.008H9V16.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm6.75-3h.008v.008H15.75V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-3.375 3h.008v.008H12V16.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Prioridad en ExpoQuevedo',
    desc: 'Acceso preferencial y descuentos especiales para afiliados en la feria comercial más importante del año.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Red de contactos',
    desc: 'Conexión con cientos de empresarios y comerciantes afiliados de Quevedo y la región.',
  },
]

const steps = [
  { num: '01', title: 'Solicitud', desc: 'Acércate a nuestras oficinas o contáctanos para iniciar tu proceso de afiliación.' },
  { num: '02', title: 'Documentación', desc: 'Prepara: RUC, cédula de identidad, copia del negocio y pago de cuota de ingreso.' },
  { num: '03', title: 'Verificación', desc: 'Nuestro equipo verifica tu información y procesa la solicitud en menos de 48 horas.' },
  { num: '04', title: '¡Bienvenido!', desc: 'Recibes tu certificado de afiliación y accedes inmediatamente a todos los beneficios.' },
]

export default function Affiliate() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="afiliate" ref={ref} className="relative py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A028]/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#1B3A6B]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#D4A028]/12 text-[#D4A028] text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-4">
            Únete al gremio
          </div>
          <h2 className="section-title mb-4">Afíliate a la Cámara</h2>
          <div className="gold-line mx-auto mb-5" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Forma parte del gremio empresarial más grande de Los Ríos y accede a servicios, representación y una red de contactos que impulsarán tu negocio.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {benefits.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-5 border border-slate-100 shadow-card hover:shadow-card-hover hover:border-[#D4A028]/30 transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-[#1B3A6B]/8 rounded-xl flex items-center justify-center text-[#1B3A6B] mb-4 group-hover:bg-[#1B3A6B] group-hover:text-white transition-all duration-300">
                {icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="font-serif text-2xl font-bold text-[#1B3A6B] text-center mb-10">
            Proceso de afiliación
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#1B3A6B] via-[#D4A028] to-[#1B3A6B] hidden lg:block" />

            {steps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#1B3A6B] flex items-center justify-center mx-auto mb-4 shadow-md relative z-10">
                  <span className="font-serif font-bold text-[#1B3A6B] text-lg">{num}</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative bg-white rounded-2xl border border-[#D4A028]/30 shadow-glow-gold overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[#D4A028]/10 text-[#D4A028] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
                ¡Únete hoy!
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1B3A6B] mb-3">
                Da el paso que tu negocio necesita
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-lg">
                La fecha de tu solicitud de afiliación determina tu vinculación oficial.
                Mantén tus aportes al día y accede a todos los derechos como Socio Activo.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold text-base px-8"
              >
                Solicitar afiliación
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline text-base px-8"
              >
                Consultar requisitos
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
