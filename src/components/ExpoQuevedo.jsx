import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date()
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, val]) => (
        <div key={unit} className="text-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
            <span className="font-serif font-bold text-2xl sm:text-3xl text-white tabular-nums">
              {String(val).padStart(2, '0')}
            </span>
          </div>
          <div className="text-blue-200 text-xs mt-2 capitalize tracking-widest">
            {unit === 'days' ? 'días' : unit === 'hours' ? 'horas' : unit === 'minutes' ? 'min' : 'seg'}
          </div>
        </div>
      ))}
    </div>
  )
}

const highlights = [
  { icon: '🏪', label: 'Stands comerciales', value: '80%+ vendidos' },
  { icon: '💰', label: 'Ventas 2024', value: '+$480,000' },
  { icon: '👥', label: 'Empleos generados', value: '1,600+' },
  { icon: '🎵', label: 'Mi Voz Quevedo', value: '$1,500 en premios' },
]

export default function ExpoQuevedo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="expo" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2445] via-[#1B3A6B] to-[#0a2550]" />
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 border border-white/5 rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 border border-white/5 rounded-full" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 -right-48 w-96 h-96 border border-[#D4A028]/10 rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#D4A028]/20 border border-[#D4A028]/40 text-[#F5CC5C] text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#D4A028] rounded-full animate-pulse" />
            Evento del año
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Expo<span className="text-[#F5CC5C]">Quevedo</span> 2025
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed mb-4"
          >
            La feria comercial más importante de Los Ríos regresa con más fuerza.
            Tres días de comercio, cultura, entretenimiento y oportunidades de negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200 mb-10"
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#D4A028]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              19, 20 y 21 de Septiembre 2025
            </span>
            <span className="w-1 h-1 bg-blue-400 rounded-full" />
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#D4A028]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Km 2½ Vía Buena Fe, Centro de Exposiciones
            </span>
          </motion.div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-12"
        >
          <p className="text-blue-300 text-center text-sm mb-5 tracking-widest uppercase">Tiempo restante</p>
          <Countdown targetDate="2025-09-19T09:00:00-05:00" />
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlights.map(({ icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="card-glass rounded-xl p-4 text-center hover:border-[#D4A028]/40 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-[#F5CC5C] font-bold text-sm mb-0.5">{value}</div>
              <div className="text-blue-300 text-xs">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              ¡Reserva tu stand ahora!
            </h3>
            <p className="text-blue-200 text-sm mb-6">
              Más del 80% de los stands ya están reservados. No te quedes fuera de la feria más importante de Los Ríos.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold"
              >
                Reservar mi stand
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-white"
              >
                Más información
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
