'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/portfolio', label: 'Client Portfolio' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 px-6 md:px-10 h-24 flex items-center justify-between transition-colors duration-300',
          scrolled ? 'bg-ink/90 backdrop-blur-sm border-b border-cream/5' : 'bg-transparent'
        )}
      >
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="PMilaythong Photography"
            width={174}
            height={80}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-14">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={link.href}
                className={clsx(
                  'relative text-xs tracking-[0.25em] uppercase font-sans transition-colors duration-200 pb-1',
                  pathname.startsWith(link.href)
                    ? 'text-signal'
                    : 'text-cream/60 hover:text-cream'
                )}
              >
                {link.label}
                {pathname.startsWith(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-signal"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + links.length * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="https://calendly.com/pmilaythong-info"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-6 py-3 hover:bg-cream transition-colors duration-200"
            >
              Book a Session
            </Link>
          </motion.div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden relative z-[60] flex flex-col gap-[5px] p-2"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-px bg-cream origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-px bg-cream"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-px bg-cream origin-center"
          />
        </button>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <motion.div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        initial={false}
        animate={
          menuOpen
            ? { opacity: 1, pointerEvents: 'auto' as const, visibility: 'visible' as const }
            : {
                opacity: 0,
                pointerEvents: 'none' as const,
                transitionEnd: { visibility: 'hidden' as const },
              }
        }
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-40 bg-ink flex flex-col justify-center items-start px-10 gap-6 md:hidden"
      >
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={false}
            animate={
              menuOpen
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -30 }
            }
            transition={{ delay: menuOpen ? i * 0.06 : (links.length - 1 - i) * 0.03, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'font-display text-[18vw] leading-none tracking-tight uppercase block',
                pathname.startsWith(link.href) ? 'text-signal' : 'text-cream'
              )}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={false}
          animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: menuOpen ? links.length * 0.06 : 0, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="https://calendly.com/pmilaythong-info"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-cream transition-colors duration-200"
          >
            Book a Session
          </Link>
        </motion.div>

        <motion.div
          initial={false}
          animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="absolute bottom-10 left-10"
        >
          <p className="font-sans text-xs tracking-widest uppercase text-cream/30">
            San Diego
          </p>
        </motion.div>
      </motion.div>
    </>
  )
}
