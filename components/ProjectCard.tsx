'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'

const EASE = [0.16, 1, 0.3, 1] as const

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.07, duration: 0.85, ease: EASE }}
    >
      <Link href={`/work/${project.slug}`} className="block group img-cursor">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.coverImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-500" />
          {/* Slide-up description */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-ink/85 to-transparent">
            <p className="font-sans text-sm text-cream/80 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-5">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-[clamp(26px,3.5vw,42px)] leading-none text-cream group-hover:text-signal transition-colors duration-200 uppercase">
              {project.title}
            </h2>
            <span className="font-sans text-xs text-cream/25 shrink-0 tabular-nums">
              {project.year}
            </span>
          </div>
          <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35 mt-2">
            {project.category}&ensp;&mdash;&ensp;{project.client}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}
