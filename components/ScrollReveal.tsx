'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}

const EASE = [0.16, 1, 0.3, 1] as const

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
        y: direction === 'up' ? 44 : 0,
        x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
