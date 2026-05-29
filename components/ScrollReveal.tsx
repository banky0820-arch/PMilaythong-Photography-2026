'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'

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
  const ref = useRef<HTMLDivElement>(null)
  // Start visible so server-rendered HTML and any no-JS / failed-hydration
  // client always show the content. Frames below the fold get hidden on mount
  // and revealed on scroll; a frame can never get permanently stuck blank.
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Only animate frames that are still below the fold on mount. Anything
    // already in view stays visible (no flash on the elements the user sees).
    const rect = el.getBoundingClientRect()
    const belowFold = rect.top > window.innerHeight - 60
    if (!belowFold) return

    setHidden(true)

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setHidden(false)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)

    // Safety net: reveal regardless if the observer never fires.
    const fallback = window.setTimeout(() => {
      setHidden(false)
      io.disconnect()
    }, 4000)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  const offset = hidden
    ? {
        y: direction === 'up' ? distance : 0,
        x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      }
    : { y: 0, x: 0 }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: hidden ? 0 : 1, ...offset }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
