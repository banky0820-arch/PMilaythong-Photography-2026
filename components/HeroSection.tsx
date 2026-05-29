'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const EASE = [0.16, 1, 0.3, 1] as const

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image — scale+fade entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0 img-cursor"
      >
        <Image
          src="/images/hero.jpg"
          alt="Shih Tzu in a striped tie beside a wrapped flower bouquet, San Diego"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_35%]"
        />
        {/* Bottom-weighted gradient for legibility under the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/30" />
      </motion.div>

      {/* Bottom-left content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-20 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          className="font-sans text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-signal mb-5 [text-shadow:0_1px_14px_rgb(0_0_0_/_0.75)]"
        >
          San Diego &middot; Pet, Family &amp; Outdoor Portraits
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 1.1, ease: EASE }}
          className="font-display text-[clamp(44px,8.5vw,150px)] leading-[0.9] text-cream uppercase max-w-[15ch] [text-shadow:0_2px_30px_rgb(0_0_0_/_0.45)]"
        >
          The Moment Inside
          <br />
          the Moment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: EASE }}
          className="mt-6 font-sans text-base md:text-lg text-cream/80 leading-relaxed max-w-[48ch] [text-shadow:0_1px_16px_rgb(0_0_0_/_0.6)]"
        >
          Natural-light photography for families and their dogs, shot on
          location across San Diego. Honest moments, caught as they happen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.8, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/work"
            className="inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-cream transition-colors duration-200"
          >
            View Work
          </Link>
          <Link
            href="https://calendly.com/pmilaythong-info"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-cream/25 text-cream font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-signal hover:text-signal transition-colors duration-200"
          >
            Book a Session
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — right edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 right-6 md:right-10 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-cream/35 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-cream/35 to-transparent"
        />
      </motion.div>
    </div>
  )
}
