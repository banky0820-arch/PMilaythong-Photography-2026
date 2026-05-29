'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
  /** Travel distance in px for the reveal. Vary per section for rhythm. */
  distance?: number
  /** Reveal duration in seconds. Vary per section for rhythm. */
  duration?: number
}

const EASE = [0.16, 1, 0.3, 1] as const

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = 'up',
  distance = 44,
  duration = 0.9,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'up' ? distance : 0,
        x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
