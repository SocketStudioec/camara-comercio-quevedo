import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const info = [
  {
    label: 'Dirección',
    value: '7ma 217 E/ Bolívar y 7 de Octubre',
    sub: 'Quevedo, Los Ríos, Ecuador',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z"/>
      </svg>
    ),
  },
  {
    label: 'Horario',
    value: 'Lunes a Viernes',
    sub: '8:00 AM – 5:00 PM',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="10" r="7.5"/>
        <path strokeLinecap="round" d="M10 5.5V10l3 2"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@ccquevedo.com',
    sub: 'Respondemos en 24 h',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
        <rect x="2.5" y="4.5" width="15" height="11" rx="1"/>
        <path strokeLinecap="round" d="M2.5 6.5l7.5 5 7.5-5"/>
      </svg>
    ),
  },
  {
    label: 'Redes sociales',
    value: '@ComercioQuevedo',
    sub: 'Facebook · Instagram',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="10" r="7.5"/>
        <path d="M2.5 10h15M10 2.5C8 5 6.5 7.5 6.5 10s1.5 5 3.5 7.5M10 2.5c2 2.5 3.5 5 3.5 7.5s-1.5 5-3.5 7.5"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1000))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contacto" ref={ref} className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C8922A]" />
            <span className="text-[#C8922A] text-[11px] font-semibold tracking-[0.25em] uppercase">Contacto</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[#0D1F3C] leading-tight">
            Hablemos de<br /><span className="italic text-[#C8922A]">tu negocio.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Info lateral */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-0"
          >
            {info.map(({ label, value, sub, icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="flex gap-4 py-5 border-b border-[#E5E7EB] last:border-0"
              >
                <div className="w-8 h-8 border border-[#0D1F3C]/10 flex items-center justify-center text-[#C8922A] flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-[#9CA3AF] text-[10px] font-semibold tracking-widest uppercase mb-0.5">{label}</div>
                  <div className="text-[#0D1F3C] font-medium text-sm">{value}</div>
                  <div className="text-[#9CA3AF] text-xs mt-0.5">{sub}</div>
                </div>
              </motion.div>
            ))}

            {/* Mapa estilizado */}
            <div className="mt-6 bg-[#FAF7F2] border border-[#E5E7EB] p-6 relative overflow-hidden">
              <div className="dot-pattern absolute inset-0" />
              <div className="relative text-center py-6">
                <div className="w-10 h-10 bg-[#0D1F3C] flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-[#C8922A]" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
                    <path d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z"/>
                  </svg>
                </div>
                <div className="text-[#0D1F3C] font-semibold text-sm mb-0.5">Quevedo, Los Ríos</div>
                <div className="text-[#9CA3AF] text-xs mb-4">7ma 217 E/ Bolívar y 7 de Octubre</div>
                <a
                  href="https://www.waze.com/live-map/directions/ec/los-rios/quevedo/camara-de-comercio-quevedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8922A] hover:text-[#0D1F3C] transition-colors"
                >
                  Ver en mapa →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre', required: true },
                  { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu@email.com', required: true },
                ].map(({ name, label, type, placeholder, required }) => (
                  <div key={name}>
                    <label className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#9CA3AF] mb-2">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
                      placeholder={placeholder}
                      required={required}
                      className="w-full border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#0D1F3C] placeholder-[#D1D5DB] focus:outline-none focus:border-[#0D1F3C] focus:bg-white transition-all duration-200 rounded-none"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#9CA3AF] mb-2">Asunto</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  required
                  className="w-full border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#0D1F3C] focus:outline-none focus:border-[#0D1F3C] focus:bg-white transition-all duration-200 rounded-none appearance-none"
                >
                  <option value="" disabled>Selecciona un tema</option>
                  <option value="afiliacion">Afiliación</option>
                  <option value="expo">ExpoQuevedo 2025</option>
                  <option value="capacitacion">Capacitación</option>
                  <option value="certificados">Certificados</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#9CA3AF] mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  required
                  rows={6}
                  className="w-full border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#0D1F3C] placeholder-[#D1D5DB] focus:outline-none focus:border-[#0D1F3C] focus:bg-white transition-all duration-200 resize-none rounded-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full py-4 text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === 'sent'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#0D1F3C] hover:bg-[#1B3A6B] text-white'
                } disabled:opacity-70`}
              >
                {status === 'sending' ? (
                  <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Enviando...</>
                ) : status === 'sent' ? (
                  '✓ Mensaje enviado correctamente'
                ) : (
                  'Enviar mensaje →'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
