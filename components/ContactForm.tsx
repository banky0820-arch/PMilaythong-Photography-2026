'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Status = 'idle' | 'loading' | 'success' | 'error'

const subjects = [
  'Essential session ($175)',
  'Signature session ($325)',
  'Print purchase',
  'Something else',
]

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full bg-transparent border-b border-cream/20 focus:border-cream py-4 text-cream font-sans text-base placeholder:text-cream/25 outline-none focus-visible:outline-none focus-visible:border-signal transition-colors duration-200'

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="py-12"
        >
          <p className="font-display text-[clamp(60px,10vw,100px)] leading-none text-signal uppercase">
            Received.
          </p>
          <p className="font-sans text-cream/55 mt-5 text-sm leading-relaxed">
            Thank you for reaching out. I&apos;ll review your message and respond within 48 hours.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <label htmlFor="contact-name" className="block font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35 mb-3">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={set('name')}
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35 mb-3">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={set('email')}
                placeholder="your@email.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="block font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35 mb-3">
              Subject
            </label>
            <select
              id="contact-subject"
              required
              value={form.subject}
              onChange={set('subject')}
              className={`${fieldClass} cursor-pointer`}
            >
              <option value="" className="bg-ink text-cream/50">
                Select a subject
              </option>
              {subjects.map((s) => (
                <option key={s} value={s} className="bg-ink text-cream">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="block font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35 mb-3">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={form.message}
              onChange={set('message')}
              placeholder="Tell me about your shoot, who's coming (dogs included), and a date you have in mind..."
              className={`${fieldClass} resize-none`}
            />
          </div>

          {status === 'error' && (
            <p role="alert" className="font-sans text-sm text-signal">
              Something went wrong. Please try again or email directly at{' '}
              <a
                href="mailto:info@pmilaythong.com"
                className="underline hover:text-cream transition-colors"
              >
                info@pmilaythong.com
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-10 py-5 hover:bg-cream transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
