import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projects, getProjectBySlug, getAdjacentProjects } from '@/lib/projects'
import ScrollReveal from '@/components/ScrollReveal'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Not Found' }
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(params.slug)

  const meta = [
    { label: 'Category', value: project.category },
    { label: 'Client', value: project.client },
    { label: 'Location', value: project.location },
    { label: 'Year', value: String(project.year) },
  ]

  return (
    <>
      {/* Hero image — full-bleed */}
      <div className="relative h-[65vh] md:h-screen overflow-hidden img-cursor">
        <Image
          src={project.coverImage}
          alt={project.coverImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />

        {/* Title over image */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 right-6 md:right-10">
          <ScrollReveal>
            <h1 className="font-display text-[clamp(56px,11vw,170px)] leading-[0.88] text-cream uppercase">
              {project.title}
            </h1>
          </ScrollReveal>
        </div>
      </div>

      {/* Meta strip */}
      <div className="px-6 md:px-10 py-10 md:py-14 border-b border-cream/10">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {meta.map(({ label, value }) => (
            <div key={label}>
              <dt className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/30 mb-1.5">
                {label}
              </dt>
              <dd className="font-sans text-base text-cream">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Description */}
      <div className="px-6 md:px-10 py-14 md:py-20 max-w-2xl">
        <ScrollReveal>
          <p className="font-sans text-lg md:text-xl text-cream/65 leading-[1.8]">
            {project.description}
          </p>
        </ScrollReveal>
      </div>

      {/* Gallery */}
      <div className="px-6 md:px-10 pb-28">
        {(() => {
          const [first, ...rest] = project.images
          const firstIsBanner = !!first && first.width > first.height
          const flow = firstIsBanner ? rest : project.images

          return (
            <>
              {/* Lead landscape runs full-bleed as a 16:9 banner */}
              {firstIsBanner && (
                <ScrollReveal className="mb-4 md:mb-5">
                  <div className="relative aspect-[16/9] overflow-hidden img-cursor">
                    <Image
                      src={first.src}
                      alt={first.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </ScrollReveal>
              )}

              {/* Everything else flows in a masonry that respects each frame's
                  native aspect ratio — no forced crop on wide or tall images. */}
              <div className="columns-1 md:columns-2 gap-4 md:gap-5">
                {flow.map((image, i) => (
                  <ScrollReveal
                    key={`${image.src}-${i}`}
                    delay={(i % 2) * 0.08}
                    className="mb-4 md:mb-5 break-inside-avoid"
                  >
                    <div
                      className="relative overflow-hidden img-cursor"
                      style={{ aspectRatio: `${image.width} / ${image.height}` }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )
        })()}
      </div>

      {/* Prev / Next navigation */}
      <div className="border-t border-cream/10 grid grid-cols-1 md:grid-cols-2">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group px-6 md:px-10 py-10 md:border-r border-cream/10 flex flex-col gap-2 hover:bg-cream/5 transition-colors duration-200 border-b md:border-b-0 border-cream/10"
          >
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/30">
              Previous
            </span>
            <span className="font-display text-[clamp(28px,4vw,52px)] leading-none text-cream group-hover:text-signal transition-colors duration-200 uppercase">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group px-6 md:px-10 py-10 flex flex-col gap-2 items-end hover:bg-cream/5 transition-colors duration-200"
          >
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/30">
              Next
            </span>
            <span className="font-display text-[clamp(28px,4vw,52px)] leading-none text-cream group-hover:text-signal transition-colors duration-200 uppercase text-right">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </>
  )
}
