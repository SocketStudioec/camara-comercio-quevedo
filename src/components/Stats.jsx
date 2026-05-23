import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const ticker = [
  '67 años de trayectoria',
  '$480,000 en ventas ExpoQuevedo 2024',
  '1,600 empleos generados',
  'Gremio #1 de Los Ríos',
  'ExpoQuevedo 2025 · 19–21 Septiembre',
  'Fundada el 15 de enero de 1959',
  'Radio Online CCQ · 2025',
  'Más de 210 locales en Expo 2025',
]

function CountUp({ end, duration = 1800 }) {
  const [val, setVal] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    const num = parseFloat(String(end).replace(/[^0-9.]/g, ''))
    const start = performance.now()
    const frame = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(ease * num))
      if (p < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, end, duration])

  const raw = String(end)
  const prefix = raw.match(/^[^0-9]*/)?.[0] || ''
  const suffix = raw.match(/[^0-9]*$/)?.[0] || ''
  const formatted = val >= 1000 ? val.toLocaleString() : val

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>
}

const bigStats = [
  { value: '67+', label: 'Años liderando el comercio quevedeño', sub: 'Desde 1959' },
  { value: '$480K', label: 'En ventas durante ExpoQuevedo 2024', sub: 'Impacto económico directo' },
  { value: '1,600+', label: 'Empleos temporales generados', sub: 'Por edición de la feria' },
  { value: '210+', label: 'Stands en ExpoQuevedo 2025', sub: '+80% ya vendidos' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="bg-[#FAF7F2]">
      {/* Ticker marquee */}
      <div className="bg-[#C8922A] overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-[11px] font-semibold tracking-[0.18em] uppercase text-white">
              {t}
              <span className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Big stats grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-[#C8922A]" />
          <span className="text-[#C8922A] text-[11px] font-semibold tracking-[0.25em] uppercase">Nuestro impacto</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0D1F3C]/8">
          {bigStats.map(({ value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#FAF7F2] p-8 lg:p-10 group hover:bg-white transition-colors duration-300"
            >
              <div className="font-display text-4xl lg:text-5xl text-[#0D1F3C] mb-3 leading-none group-hover:text-[#C8922A] transition-colors duration-400">
                {inView ? <CountUp end={value} /> : <span className="opacity-0">{value}</span>}
              </div>
              <div className="w-6 h-px bg-[#C8922A] mb-3 group-hover:w-10 transition-all duration-300" />
              <p className="text-[#374151] text-sm leading-snug font-medium mb-1">{label}</p>
              <p className="text-[#9CA3AF] text-xs">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
