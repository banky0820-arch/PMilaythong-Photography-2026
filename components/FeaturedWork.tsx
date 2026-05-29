'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'

const EASE = [0.16, 1, 0.3, 1] as const

interface Props {
  projects: Project[]
}

export default function FeaturedWork({ projects }: Props) {
  const [p1, p2, p3] = projects

  return (
    <section className="px-6 md:px-10 py-24 md:py-36">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-display text-[clamp(48px,9vw,130px)] leading-[0.88] text-cream uppercase"
        >
          Selected<br />Work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <Link
            href="/work"
            className="font-sans text-xs tracking-[0.25em] uppercase text-cream/45 hover:text-signal border-b border-cream/20 hover:border-signal pb-1 transition-colors duration-200"
          >
            All Projects
          </Link>
        </motion.div>
      </div>

      {/* Asymmetric row 1: 2/3 + 1/3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {p1 && (
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: EASE }}
            className="md:col-span-2"
          >
            <Tile project={p1} aspectClass="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 66vw" />
          </motion.div>
        )}

        {p2 && (
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.12, duration: 1, ease: EASE }}
            className="md:mt-20"
          >
            <Tile project={p2} aspectClass="aspect-[3/4]" sizes="(max-width: 768px) 100vw, 33vw" />
          </motion.div>
        )}
      </div>

      {/* Asymmetric row 2: full-bleed cinematic */}
      {p3 && (
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.08, duration: 1, ease: EASE }}
          className="mt-4 md:mt-5"
        >
          <Tile project={p3} aspectClass="aspect-[4/3] md:aspect-[21/8]" sizes="100vw" />
        </motion.div>
      )}
    </section>
  )
}

function Tile({
  project,
  aspectClass,
  sizes,
}: {
  project: Project
  aspectClass: string
  sizes: string
}) {
  return (
    <Link href={`/work/${project.slug}`} className="block group img-cursor">
      <div className={`relative ${aspectClass} overflow-hidden`}>
        <Image
          src={project.coverImage}
          alt={project.coverImageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-400" />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[clamp(28px,3vw,44px)] leading-none text-cream group-hover:text-signal transition-colors duration-200 uppercase">
            {project.title}
          </h3>
          <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35 mt-2">
            {project.category}&ensp;&ndash;&ensp;{project.year}
          </p>
        </div>
        <span className="font-sans text-xs text-cream/25 group-hover:text-signal transition-colors duration-200 shrink-0 mt-1">
          View &rarr;
        </span>
      </div>
    </Link>
  )
}
