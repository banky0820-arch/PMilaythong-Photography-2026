import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Photography portfolio — pet portraits, landscape, and outdoor sessions. Selected projects by PMilaythong Photography.',
}

const minYear = Math.min(...projects.map((p) => p.year))

export default function WorkPage() {
  return (
    <div className="pt-32 px-6 md:px-10 pb-28">
      {/* Header */}
      <ScrollReveal className="mb-20 md:mb-28">
        <h1 className="font-display text-[clamp(72px,14vw,200px)] leading-[0.88] text-cream uppercase">
          All Work
        </h1>
        <p className="font-sans text-xs text-cream/35 mt-5 tracking-[0.2em] uppercase">
          {projects.length} projects &middot; {minYear}&ndash;{new Date().getFullYear()}
        </p>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-10 md:gap-y-20">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
