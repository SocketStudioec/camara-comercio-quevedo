import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const milestones = [
  { year: '1959', title: 'Fundación', desc: 'Constituida formalmente el 15 de enero.' },
  { year: '1975', title: 'Expansión', desc: 'Crecimiento sostenido a toda la provincia de Los Ríos.' },
  { year: '1995', title: 'ExpoQuevedo', desc: 'Primera edición de la feria comercial más importante de la región.' },
  { year: '2021', title: 'Nueva era', desc: 'Ing. Marco Franco asume la presidencia. Modernización institucional.' },
  { year: '2025', title: 'Digital', desc: 'Radio online y transformación digital del gremio.' },
]

/* Ilustración SVG del edificio corporativo */
function BuildingSVG() {
  return (
    <svg viewBox="0 0 400 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-xs mx-auto">
      <defs>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B3A6B"/>
          <stop offset="100%" stopColor="#0D1F3C"/>
        </linearGradient>
        <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8922A"/>
          <stop offset="100%" stopColor="#E8B84B"/>
        </linearGradient>
      </defs>

      {/* Sombra base */}
      <ellipse cx="200" cy="440" rx="120" ry="12" fill="rgba(13,31,60,0.12)"/>

      {/* Cuerpo principal del edificio */}
      <rect x="60" y="180" width="280" height="240" fill="url(#wallGrad)" rx="2"/>

      {/* Fachada clara */}
      <rect x="75" y="192" width="250" height="220" fill="#1B3A6B" rx="1"/>

      {/* Franja dorada superior */}
      <rect x="60" y="175" width="280" height="8" fill="url(#accentGrad)"/>

      {/* Columnas */}
      {[98, 148, 198, 248, 298].map((x, i) => (
        <rect key={i} x={x} y="192" width="6" height="220" fill="rgba(255,255,255,0.04)"/>
      ))}

      {/* Ventanas fila 1 */}
      {[90, 130, 170, 210, 250, 290].map((x, i) => (
        <rect key={i} x={x} y="212" width="28" height="36" rx="1" fill="rgba(200,146,42,0.15)" stroke="rgba(200,146,42,0.25)" strokeWidth="0.5"/>
      ))}
      {/* Ventanas fila 2 */}
      {[90, 130, 170, 210, 250, 290].map((x, i) => (
        <rect key={i} x={x} y="264" width="28" height="36" rx="1" fill="rgba(200,146,42,0.12)" stroke="rgba(200,146,42,0.2)" strokeWidth="0.5"/>
      ))}
      {/* Ventanas fila 3 */}
      {[90, 130, 170, 210, 250, 290].map((x, i) => (
        <rect key={i} x={x} y="316" width="28" height="36" rx="1" fill="rgba(200,146,42,0.08)" stroke="rgba(200,146,42,0.15)" strokeWidth="0.5"/>
      ))}

      {/* Entrada principal */}
      <rect x="162" y="358" width="76" height="62" rx="2" fill="rgba(0,0,0,0.3)"/>
      <rect x="166" y="362" width="30" height="58" rx="1" fill="rgba(200,146,42,0.2)"/>
      <rect x="204" y="362" width="30" height="58" rx="1" fill="rgba(200,146,42,0.2)"/>
      <circle cx="200" cy="391" r="3" fill="rgba(200,146,42,0.6)"/>

      {/* Tejado / frontón */}
      <polygon points="60,180 200,80 340,180" fill="#0D1F3C" stroke="url(#accentGrad)" strokeWidth="1.5"/>
      <polygon points="110,180 200,110 290,180" fill="#1B3A6B"/>

      {/* Torre/cúpula central */}
      <rect x="182" y="52" width="36" height="60" fill="#0D1F3C" stroke="rgba(200,146,42,0.3)" strokeWidth="0.8"/>
      <polygon points="182,52 200,20 218,52" fill="#0D1F3C" stroke="rgba(200,146,42,0.5)" strokeWidth="1"/>
      {/* Bandera */}
      <line x1="200" y1="20" x2="200" y2="4" stroke="#C8922A" strokeWidth="1.2"/>
      <polygon points="200,4 214,10 200,16" fill="#C8922A"/>

      {/* Texto institución */}
      <rect x="100" y="340" width="200" height="16" rx="1" fill="rgba(200,146,42,0.08)"/>
      <text x="200" y="352" textAnchor="middle" fill="rgba(200,146,42,0.4)" fontSize="7" fontFamily="Inter" fontWeight="700" letterSpacing="4">CÁMARA DE COMERCIO</text>

      {/* Escalones */}
      <rect x="130" y="418" width="140" height="6" rx="1" fill="rgba(13,31,60,0.3)"/>
      <rect x="112" y="424" width="176" height="6" rx="1" fill="rgba(13,31,60,0.2)"/>
      <rect x="90" y="430" width="220" height="6" rx="1" fill="rgba(13,31,60,0.15)"/>

      {/* Año */}
      <motion.text
        x="200" y="455"
        textAnchor="middle"
        fill="#C8922A"
        fontSize="11"
        fontFamily="Inter"
        fontWeight="800"
        letterSpacing="6"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        EST. 1959
      </motion.text>
    </svg>
  )
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="camara" ref={ref} className="bg-[#FAF7F2] py-20 md:py-28 overflow-hidden">
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
              <span className="text-[#C8922A] text-[11px] font-semibold tracking-[0.25em] uppercase">La institución</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0D1F3C] leading-[1.05]">
              67 años<br />
              <span className="italic text-[#C8922A]">impulsando</span><br />
              el comercio.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#6B7280] text-base leading-relaxed self-end"
          >
            Somos el gremio empresarial más grande de la provincia de Los Ríos,
            representando los intereses del comercio local y acompañando el crecimiento
            de Quevedo desde el <strong className="text-[#0D1F3C] font-semibold">15 de enero de 1959</strong>.
          </motion.p>
        </div>

        {/* ── Building + Misión/Visión ── */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20 items-start">

          {/* Building illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative"
          >
            <div className="relative bg-gradient-to-b from-[#EEE9DF] to-[#FAF7F2] border border-[#0D1F3C]/8 p-8 aspect-[3/4]">
              <BuildingSVG />
              {/* Etiqueta corporativa */}
              <div className="absolute top-4 left-4 bg-[#0D1F3C] px-3 py-2">
                <div className="text-[#C8922A] text-[9px] font-bold tracking-[0.2em] uppercase">Sede institucional</div>
                <div className="text-white text-xs font-medium mt-0.5">7ma 217 E/ Bolívar y 7 de Oct.</div>
              </div>
            </div>
          </motion.div>

          {/* Misión + Visión + Valores */}
          <div className="lg:col-span-3 space-y-4">
            {[
              {
                num: '01',
                label: 'Misión',
                text: 'Representar, defender y promover los intereses del sector comercial de Quevedo y Los Ríos, ofreciendo servicios de calidad que fortalezcan la competitividad y el desarrollo sostenible de nuestros afiliados.',
              },
              {
                num: '02',
                label: 'Visión',
                text: 'Ser reconocida como la institución gremial líder del Ecuador, referente de excelencia en servicios empresariales, innovación y articulación público-privada para el desarrollo económico de Los Ríos.',
              },
              {
                num: '03',
                label: 'Valores',
                text: 'Institucionalidad · Solidaridad · Desarrollo · Transparencia · Integridad · Compromiso con la comunidad empresarial quevedeña.',
              },
            ].map(({ num, label, text }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className="group bg-white border border-[#E5E7EB] hover:border-[#0D1F3C]/20 p-6 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(13,31,60,0.07)]"
              >
                <div className="flex items-start gap-5">
                  <span className="font-impact text-4xl text-[#0D1F3C]/10 group-hover:text-[#C8922A]/30 transition-colors duration-300 leading-none mt-0.5 flex-shrink-0">
                    {num}
                  </span>
                  <div>
                    <div className="text-[#C8922A] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{label}</div>
                    <p className="text-[#374151] text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Cita del Presidente ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-[#0D1F3C]/10 pt-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="font-impact text-[7rem] leading-none text-[#0D1F3C]/6 mb-0 select-none">"</div>
            <blockquote className="font-display text-2xl md:text-3xl italic text-[#0D1F3C] leading-relaxed -mt-8 mb-6">
              Nuestro compromiso es ser el motor del desarrollo empresarial de Quevedo, representando con dignidad a cada comerciante afiliado.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-[#C8922A]" />
              <div className="text-center">
                <div className="text-[#0D1F3C] font-semibold text-sm">Ing. Marco Franco</div>
                <div className="text-[#9CA3AF] text-xs tracking-wide">Presidente · Cámara de Comercio de Quevedo</div>
              </div>
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#C8922A]" />
            <span className="text-[#C8922A] text-[11px] font-semibold tracking-[0.25em] uppercase">Historia</span>
          </div>

          <div className="relative">
            {/* Línea horizontal */}
            <div className="absolute top-5 left-0 right-0 h-px bg-[#0D1F3C]/10 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {milestones.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="hidden md:flex w-10 h-10 items-center justify-center border border-[#C8922A]/40 bg-[#FAF7F2] relative z-10 mb-4">
                    <div className="w-2 h-2 bg-[#C8922A] rounded-full" />
                  </div>

                  <div className="font-impact text-2xl text-[#C8922A] mb-1 tracking-wide">{year}</div>
                  <div className="font-semibold text-[#0D1F3C] text-sm mb-1">{title}</div>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
