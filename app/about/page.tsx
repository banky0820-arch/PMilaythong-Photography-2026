import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    'PMilaythong Photography — capturing architecture, cityscapes, and pet portraits with an eye for light, character, and quiet moments.',
}

const services = [
  {
    label: 'Pet Portraits',
    body: 'Personality driven sessions that meet animals on their own terms. Patient, low-key shooting that results in natural expressions rather than forced poses.',
  },
  {
    label: 'Landscape',
    body: 'Wide frame work that balances foreground, sky, and the quiet scale of open spaces. Best light wins every time.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-0 pb-24">
      {/* Intro split */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
        {/* Hero image */}
        <div className="relative min-h-[70vw] md:min-h-0 img-cursor">
          <Image
            src="/images/gallery/13.jpg"
            alt="Empire State Building at night, New York City"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Bio */}
        <div className="px-6 md:px-14 lg:px-20 py-16 md:py-32 flex flex-col justify-end">
          <ScrollReveal>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">
              About
            </p>
            <h1 className="font-display text-[clamp(52px,6vw,100px)] leading-[0.88] text-cream uppercase mb-10">
              PMilaythong<br />Photography
            </h1>
            <p className="font-sans text-lg text-cream/90 leading-[1.8] mb-6 max-w-[60ch]">
              I photograph families and their dogs to capture their raw emotions, beauty, and personality exactly as they are. Every frame is a quiet argument against forgetting. This is outdoor photography rooted in natural light and honest moments, built to outlast the day it was taken.
            </p>
            <p className="font-sans text-base text-cream/65 leading-[1.8] mb-6 max-w-[65ch]">
              Photography has been part of my life since I was nine years old, when a camera first landed in my hands and never really left. In college, it became a discipline, learning the fundamentals, developing my first black and white films in a darkroom, understanding light before I understood why it moved me. That foundation never left either.
            </p>
            <p className="font-sans text-base text-cream/65 leading-[1.8] max-w-[65ch]">
              Today, my camera is an extension of my creativity and vision, and every session is a chance to prove that the best moments aren&apos;t staged. They&apos;re found.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Quote */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-cream/10">
        <ScrollReveal>
          <blockquote className="max-w-4xl">
            <p className="font-display text-[clamp(28px,4vw,52px)] leading-[1.1] text-cream uppercase">
              &ldquo;When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.&rdquo;
            </p>
            <footer className="mt-8 font-sans text-xs tracking-[0.28em] uppercase text-signal">
              &mdash; Ansel Adams
            </footer>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Approach columns */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-cream/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map(({ label, body }, i) => (
            <ScrollReveal key={label} delay={i * 0.1}>
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-5">
                {label}
              </p>
              <p className="font-sans text-base text-cream/55 leading-[1.85]">{body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-cream/10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <h2 className="font-display text-[clamp(52px,11vw,160px)] leading-[0.88] text-cream uppercase">
              Let&apos;s Shoot<br />Something
            </h2>
            <Link
              href="/contact"
              className="self-start inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-10 py-5 hover:bg-cream transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
