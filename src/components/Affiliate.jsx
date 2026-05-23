import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const benefits = [
  'Representación gremial ante entidades públicas y privadas',
  'Certificados oficiales de afiliación inmediatos',
  'Acceso a capacitaciones y talleres sin costo adicional',
  'Visibilidad en la Guía Comercial digital y física',
  'Prioridad y descuentos en ExpoQuevedo 2025',
  'Red de contactos empresariales de Los Ríos',
  'Defensa de intereses ante organismos del Estado',
  'Participación en eventos gremiales exclusivos',
]

const steps = [
  { n: '01', title: 'Solicita', desc: 'Acércate a nuestras oficinas o contáctanos por teléfono, email o WhatsApp.' },
  { n: '02', title: 'Documenta', desc: 'Presenta RUC, cédula de identidad y pago de cuota de ingreso.' },
  { n: '03', title: 'Verificamos', desc: 'Tu solicitud es procesada en menos de 48 horas hábiles.' },
  { n: '04', title: 'Bienvenido', desc: 'Recibes tu certificado y accedes a todos los beneficios.' },
]

export default function Affiliate() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="afiliate" ref={ref} className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#C8922A]" />
              <span className="text-[#C8922A] text-[11px] font-semibold tracking-[0.25em] uppercase">Únete al gremio</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0D1F3C] leading-tight">
              Afíliate a la<br />
              <span className="italic text-[#C8922A]">Cámara de Comercio</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#6B7280] text-sm leading-relaxed self-end"
          >
            La fecha de tu solicitud de afiliación determina tu vinculación oficial.
            Mantén tus aportes al día para acceder a todos los derechos como Socio Activo
            del gremio más grande de Los Ríos.
          </motion.p>
        </div>

        {/* ── Beneficios + Proceso ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Beneficios */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h3 className="font-display text-xl text-[#0D1F3C] mb-6">Beneficios incluidos</h3>
            <ul className="space-y-0">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  className="flex items-start gap-4 py-3.5 border-b border-[#E5E7EB] last:border-0 group"
                >
                  <span className="w-5 h-5 border border-[#C8922A]/40 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#C8922A] group-hover:border-[#C8922A] transition-all duration-200">
                    <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5 text-[#C8922A] group-hover:text-white transition-colors">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[#374151] text-sm leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Proceso */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-xl text-[#0D1F3C] mb-6">Proceso en 4 pasos</h3>

            <div className="space-y-0">
              {steps.map(({ n, title, desc }, i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-5 py-5 border-b border-[#E5E7EB] last:border-0 group"
                >
                  {/* Número + línea */}
                  <div className="flex flex-col items-center gap-0 flex-shrink-0">
                    <div className="w-10 h-10 border border-[#0D1F3C]/15 flex items-center justify-center group-hover:border-[#C8922A] group-hover:bg-[#C8922A] transition-all duration-300">
                      <span className="font-impact text-lg text-[#0D1F3C]/40 group-hover:text-white transition-colors">{n}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-[#E5E7EB] min-h-4 my-1" />
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="font-semibold text-[#0D1F3C] text-sm mb-1">{title}</div>
                    <p className="text-[#9CA3AF] text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold flex-1 justify-center"
              >
                Solicitar afiliación →
              </button>
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-navy flex-1 justify-center bg-[#FAF7F2] text-[#0D1F3C] hover:bg-[#0D1F3C] hover:text-white border border-[#0D1F3C]/15"
              >
                Ver requisitos
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Banner inferior ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 bg-[#0D1F3C] grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {[
            { n: '67+', label: 'Años de representación gremial' },
            { n: '1959', label: 'Fundación oficial en Quevedo' },
            { n: '#1', label: 'Gremio comercial de Los Ríos' },
          ].map(({ n, label }, i) => (
            <div key={label} className="px-8 py-7 text-center">
              <div className="font-display text-3xl text-[#C8922A] mb-1">{n}</div>
              <div className="text-white/40 text-xs tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
