import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

/* SVG corporativo custom — representa comercio, intercambio, red empresarial */
function CommerceSVG() {
  return (
    <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Grid de fondo */}
      <defs>
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(200,146,42,0.12)" strokeWidth="0.5"/>
        </pattern>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8922A" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#0D1F3C" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="480" height="480" fill="url(#grid)"/>
      <circle cx="240" cy="240" r="200" fill="url(#glow)"/>

      {/* Nodos de red */}
      {[
        [240, 240], [120, 160], [360, 160], [100, 320], [380, 310],
        [200, 380], [290, 370], [160, 100], [320, 100], [240, 70],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy}
          r={i === 0 ? 14 : i < 3 ? 8 : 5}
          fill={i === 0 ? '#C8922A' : i < 3 ? 'rgba(200,146,42,0.7)' : 'rgba(200,146,42,0.35)'}
          animate={{ r: i === 0 ? [14, 17, 14] : i < 3 ? [8, 10, 8] : [5, 6, 5], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        />
      ))}

      {/* Líneas de conexión */}
      {[
        [240,240, 120,160], [240,240, 360,160], [240,240, 100,320],
        [240,240, 380,310], [240,240, 200,380], [240,240, 290,370],
        [120,160, 160,100], [360,160, 320,100], [160,100, 240,70],
        [320,100, 240,70], [120,160, 100,320], [360,160, 380,310],
      ].map(([x1,y1,x2,y2], i) => (
        <motion.line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(200,146,42,0.2)"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
        />
      ))}

      {/* Anillos concéntricos */}
      {[60, 110, 160].map((r, i) => (
        <motion.circle
          key={r}
          cx="240" cy="240" r={r}
          stroke="rgba(200,146,42,0.08)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 8"
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '240px 240px' }}
        />
      ))}

      {/* Icono central — edificio institucional */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: '240px 240px' }}
      >
        {/* Edificio */}
        <rect x="218" y="222" width="44" height="34" fill="#C8922A" rx="1"/>
        <rect x="224" y="210" width="32" height="14" fill="#E8B84B" rx="1"/>
        <rect x="232" y="200" width="16" height="12" fill="#C8922A" rx="1"/>
        {/* Ventanas */}
        <rect x="224" y="228" width="6" height="7" fill="rgba(13,31,60,0.4)" rx="0.5"/>
        <rect x="234" y="228" width="6" height="7" fill="rgba(13,31,60,0.4)" rx="0.5"/>
        <rect x="244" y="228" width="6" height="7" fill="rgba(13,31,60,0.4)" rx="0.5"/>
        <rect x="224" y="240" width="6" height="7" fill="rgba(13,31,60,0.4)" rx="0.5"/>
        <rect x="234" y="240" width="6" height="7" fill="rgba(13,31,60,0.4)" rx="0.5"/>
        <rect x="244" y="240" width="6" height="7" fill="rgba(13,31,60,0.4)" rx="0.5"/>
        {/* Puerta */}
        <rect x="233" y="246" width="14" height="10" fill="rgba(13,31,60,0.5)" rx="0.5"/>
        {/* Base */}
        <rect x="214" y="254" width="52" height="3" fill="#E8B84B" rx="0.5"/>
      </motion.g>

      {/* Año fundación */}
      <text x="240" y="294" textAnchor="middle" fill="rgba(200,146,42,0.5)" fontSize="9" fontFamily="Inter" fontWeight="600" letterSpacing="3">MCMLIX</text>
    </svg>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen bg-[#0D1F3C] flex flex-col overflow-hidden">
      {/* Textura de fondo */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradiente esquina */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1B3A6B]/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0F1A] to-transparent pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Columna izquierda: Editorial ── */}
            <div>
              {/* Label */}
              <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-10">
                <div className="w-8 h-px bg-[#C8922A]" />
                <span className="text-[#C8922A] text-[11px] font-semibold tracking-[0.25em] uppercase">
                  Quevedo · Los Ríos · Ecuador
                </span>
              </motion.div>

              {/* Headline dramático */}
              <motion.h1 {...fadeUp(0.2)} className="font-display text-white leading-[1.0] mb-8">
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                  El gremio
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] italic text-[#C8922A]">
                  empresarial
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                  de Los Ríos.
                </span>
              </motion.h1>

              {/* Línea dorada */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-32 bg-[#C8922A] mb-8 origin-left"
              />

              <motion.p {...fadeUp(0.35)} className="text-white/55 text-base leading-relaxed max-w-md mb-10 font-light">
                Desde 1959 representamos, capacitamos y conectamos al sector
                comercial de Quevedo. Más de 67 años construyendo el tejido
                empresarial más fuerte de la provincia.
              </motion.p>

              {/* CTAs */}
              <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 mb-14">
                <button
                  onClick={() => document.querySelector('#afiliate')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold group"
                >
                  Afíliate ahora
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >→</motion.span>
                </button>
                <button
                  onClick={() => document.querySelector('#expo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline-white"
                >
                  ExpoQuevedo 2025
                </button>
              </motion.div>

              {/* Stats horizontales */}
              <motion.div {...fadeUp(0.55)} className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {[
                  { n: '67', label: 'Años de historia' },
                  { n: '$480K', label: 'Ventas Expo 2024' },
                  { n: '1,600', label: 'Empleos generados' },
                ].map(({ n, label }) => (
                  <div key={label}>
                    <div className="font-display text-2xl sm:text-3xl text-[#C8922A] leading-none mb-1">{n}</div>
                    <div className="text-white/40 text-[11px] leading-tight font-medium tracking-wide">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Columna derecha: SVG corporativo ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center relative"
            >
              {/* Marco decorativo */}
              <div className="absolute inset-8 border border-[#C8922A]/15 rounded-none pointer-events-none" />
              <div className="absolute inset-12 border border-white/5 rounded-none pointer-events-none" />

              <div className="w-full max-w-[420px] aspect-square relative">
                <CommerceSVG />
                {/* Badge flotante */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-8 right-0 bg-[#C8922A] px-4 py-3"
                >
                  <div className="text-white text-[10px] font-semibold tracking-widest uppercase">Fundada</div>
                  <div className="text-white font-display text-2xl leading-none">1959</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-12 left-0 bg-[#0D1F3C] border border-[#C8922A]/30 px-4 py-3"
                >
                  <div className="text-[#C8922A] text-[10px] font-semibold tracking-widest uppercase mb-0.5">Gremio #1</div>
                  <div className="text-white text-xs font-medium">Provincia de Los Ríos</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 flex flex-col items-center pb-8 gap-2"
      >
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#C8922A]/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
