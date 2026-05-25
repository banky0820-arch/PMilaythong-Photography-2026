'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = 'up',
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'up' ? 60 : 0,
        x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
