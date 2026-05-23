import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { value: '67', suffix: 'años', label: 'De trayectoria institucional' },
  { value: '+480K', suffix: '$', label: 'En ventas ExpoQuevedo 2024', prefix: true },
  { value: '1,600', suffix: '', label: 'Empleos temporales generados' },
  { value: '#1', suffix: '', label: 'Gremio comercial en Los Ríos' },
]

function AnimatedCounter({ value, suffix, prefix }) {
  return (
    <span className="font-serif font-bold text-3xl md:text-4xl text-white">
      {prefix && suffix}{value}{!prefix && suffix}
    </span>
  )
}

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0)

  const bgColors = [
    'from-[#091932] via-[#1B3A6B] to-[#2563EB]',
    'from-[#0F2445] via-[#1B3A6B] to-[#0a3060]',
    'from-[#1B3A6B] via-[#0F2445] to-[#091932]',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % bgColors.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[bgIndex]} transition-all duration-[3000ms] ease-in-out`} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-16 -right-16 w-64 h-64 border border-white/8 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-10 w-4 h-4 bg-[#D4A028]/40 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-20 w-3 h-3 bg-white/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-[#D4A028]/30 rotate-45"
        />

        {/* Large decorative circle */}
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-white/8 rounded-full" />

        {/* Gold accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#D4A028]/40 to-transparent origin-left"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 bg-[#D4A028] rounded-full animate-pulse" />
              Fundada en 1959 · Quevedo, Los Ríos
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Impulsando el{' '}
              <span className="relative">
                <span className="relative z-10 text-[#F5CC5C]">comercio</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute bottom-1 left-0 right-0 h-2 bg-[#D4A028]/30 -z-0 origin-left"
                />
              </span>{' '}
              y el desarrollo empresarial
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Somos el gremio empresarial más grande de la provincia de Los Ríos.
              Más de <strong className="text-white">67 años</strong> representando,
              capacitando y conectando a los comerciantes y emprendedores de Quevedo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.querySelector('#afiliate')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold text-base"
              >
                Afíliate a la Cámara
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-white text-base"
              >
                Ver Servicios
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[
                  'bg-blue-400', 'bg-emerald-400', 'bg-amber-400', 'bg-rose-400', 'bg-violet-400'
                ].map((color, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-[#1B3A6B] flex items-center justify-center text-white text-xs font-bold`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-blue-100 text-sm">
                <span className="text-white font-semibold">Cientos de afiliados</span>{' '}
                confían en nosotros
              </p>
            </motion.div>
          </div>

          {/* Right column — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, suffix, label, prefix }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-glass p-5 rounded-2xl group hover:border-[#D4A028]/40 transition-all duration-300"
              >
                <div className="mb-3">
                  <div className="w-8 h-0.5 bg-[#D4A028] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                  <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
                </div>
                <p className="text-blue-200 text-xs leading-relaxed">{label}</p>
              </motion.div>
            ))}

            {/* ExpoQuevedo 2025 card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-2 card-glass p-5 rounded-2xl border-[#D4A028]/30 hover:border-[#D4A028]/60 transition-all duration-300 cursor-pointer"
              onClick={() => document.querySelector('#expo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-[#D4A028] rounded-full animate-pulse" />
                    <span className="text-[#F5CC5C] text-xs font-semibold uppercase tracking-widest">Próximamente</span>
                  </div>
                  <div className="font-serif text-xl font-bold text-white">ExpoQuevedo 2025</div>
                  <div className="text-blue-200 text-sm mt-1">19, 20 y 21 de Septiembre · Centro de Exposiciones</div>
                </div>
                <div className="text-right">
                  <div className="text-[#D4A028] font-bold text-sm">+80%</div>
                  <div className="text-blue-200 text-xs">stands vendidos</div>
                  <svg className="w-5 h-5 text-[#D4A028] ml-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
