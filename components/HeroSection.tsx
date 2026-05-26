'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 scale-110 img-cursor">
        <Image
          src="/images/feature.jpg"
          alt="9/11 Memorial reflecting pool, New York City"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
      </div>

      {/* Centered logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: EASE }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <Image
            src="/images/logo.png"
            alt="PMilaythong Photography"
            width={700}
            height={323}
            className="w-[clamp(480px,60vw,700px)] h-auto"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.8, ease: EASE }}
          className="mt-10"
        >
          <Link
            href="/work"
            className="inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-cream transition-colors duration-200"
          >
            View Work
          </Link>
        </motion.div>
      </motion.div>

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

      {/* Index counter */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute top-20 right-6 md:right-10 font-display text-[10vw] leading-none text-cream/5 select-none pointer-events-none"
      >
        01
      </motion.span>
    </div>
  )
}
