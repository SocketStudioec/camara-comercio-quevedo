import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

function pad(n) { return String(n).padStart(2, '0') }

function useCountdown(target) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(target) - Date.now())
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return t
}

const highlights = [
  { n: '+80%', label: 'Stands vendidos' },
  { n: '$480K', label: 'Ventas edición 2024' },
  { n: '1,600', label: 'Empleos generados' },
  { n: '210+', label: 'Locales 2025' },
]

export default function ExpoQuevedo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { d, h, m, s } = useCountdown('2025-09-19T09:00:00-05:00')

  return (
    <section id="expo" ref={ref} className="relative bg-[#0A0F1A] overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Gold top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C8922A] to-transparent" />

      {/* Decorative large text bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-impact text-[22rem] text-white/[0.02] leading-none select-none tracking-tight whitespace-nowrap">
          EXPO
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">

        {/* ── Encabezado tipo poster ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#C8922A]" />
            <span className="text-[#C8922A] text-[11px] font-semibold tracking-[0.25em] uppercase">Evento del año</span>
          </div>

          <div className="border-l-4 border-[#C8922A] pl-8">
            <div className="font-impact text-[3.5rem] sm:text-[5rem] lg:text-[7rem] leading-none text-white tracking-wider mb-2">
              EXPO
            </div>
            <div className="font-impact text-[3.5rem] sm:text-[5rem] lg:text-[7rem] leading-none text-[#C8922A] tracking-wider mb-4">
              QUEVEDO
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-impact text-2xl sm:text-3xl text-white/40 tracking-widest">2025</span>
              <div className="w-px h-6 bg-white/20" />
              <span className="text-white/50 text-sm font-medium tracking-wide">
                19 · 20 · 21 de Septiembre
              </span>
              <div className="w-px h-6 bg-white/20 hidden sm:block" />
              <span className="text-white/40 text-xs tracking-wide hidden sm:inline">
                Km 2½ Vía Buena Fe · Centro de Exposiciones
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Layout principal ── */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Countdown — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-white/30 text-[10px] font-semibold tracking-[0.25em] uppercase mb-6">Tiempo restante</p>

            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { val: d, label: 'Días' },
                { val: h, label: 'Horas' },
                { val: m, label: 'Min' },
                { val: s, label: 'Seg' },
              ].map(({ val, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  className="border border-white/10 bg-white/[0.03] p-4 sm:p-5 text-center"
                >
                  <motion.div
                    key={val}
                    initial={{ y: -6, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="font-impact text-3xl sm:text-5xl text-white leading-none mb-1 tabular-nums"
                  >
                    {pad(val)}
                  </motion.div>
                  <div className="text-white/30 text-[10px] tracking-[0.15em] uppercase">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {highlights.map(({ n, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className="border border-[#C8922A]/20 bg-[#C8922A]/5 px-4 py-3 text-center"
                >
                  <div className="font-display text-lg text-[#C8922A] leading-none mb-0.5">{n}</div>
                  <div className="text-white/30 text-[10px]">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info + CTA — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 border border-white/10 bg-white/[0.02] p-7"
          >
            <div className="text-[#C8922A] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Reserva tu stand</div>

            <h3 className="font-display text-2xl text-white mb-3 leading-snug">
              No te quedes fuera de la feria más importante de Los Ríos.
            </h3>

            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Más del 80% de los stands ya están reservados. La edición 2024 generó +$480,000 en ventas y 1,600 empleos temporales.
            </p>

            {/* Artistas 2025 */}
            <div className="border-t border-white/8 pt-5 mb-6">
              <div className="text-white/25 text-[10px] tracking-widest uppercase mb-3">Artistas confirmados 2025</div>
              {[
                'Maluma de Yo Me Llamo',
                'Don Medardo y sus Players',
                'Cristian Campuzano y su Orquesta',
                'Mi Voz Quevedo · Premios $1,500',
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                  <span className="w-1 h-1 bg-[#C8922A] rounded-full flex-shrink-0" />
                  <span className="text-white/50 text-xs">{a}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold w-full justify-center"
              >
                Reservar stand →
              </button>
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-white w-full justify-center text-center"
              >
                Más información
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C8922A]/40 to-transparent" />
    </section>
  )
}
