import HeroSection from '@/components/HeroSection'
import FeaturedWork from '@/components/FeaturedWork'
import ScrollReveal from '@/components/ScrollReveal'
import { getFeaturedProjects } from '@/lib/projects'
import Link from 'next/link'

const services = ['Pet Portraits', 'Landscape', 'Portrait']

export default function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <HeroSection />

      <FeaturedWork projects={featured} />

      {/* Approach section */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-cream/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal distance={64} duration={1.1}>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">
              Approach
            </p>
            <p className="font-sans text-xl text-cream/75 leading-[1.75] mb-6 max-w-[68ch]">
              Photography is my passion and at the heart of it is the pursuit of raw emotion. The kind that can&apos;t be directed, only caught.
            </p>
            <p className="font-sans text-base text-signal leading-[1.75] mb-8 max-w-[68ch]">
              I do not simply take photographs. I create permanent records of fleeting moments. Images built to outlast the day they were taken, and to mean more with every passing year.
            </p>
            <Link
              href="/about"
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-cream/60 border-b border-cream/20 pb-1 hover:text-signal hover:border-signal transition-colors duration-200"
            >
              More About My Approach
            </Link>
          </ScrollReveal>

          <div className="flex flex-col justify-end gap-0 divide-y divide-cream/10">
            {services.map((service, i) => (
              <ScrollReveal key={service} delay={i * 0.09} distance={20} duration={0.7}>
                <div className="py-7 flex items-center gap-6">
                  <span className="font-display text-5xl text-cream/12 tabular-nums w-14 shrink-0 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl text-cream leading-none uppercase">
                    {service}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-cream/10">
        <ScrollReveal>
          <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">Pricing</p>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-cream uppercase mb-4">
            Simple, Honest Pricing.
          </h2>
          <p className="font-sans text-base text-cream/50 leading-[1.8] max-w-xl mb-16">
            Pay for the time you need. Two sessions, no fine print. Full details, add-ons, and policies live on the services page.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-cream/10 mb-14 items-start">
          {/* Essential */}
          <ScrollReveal distance={28} duration={0.8} className="py-10 md:py-0 md:pr-16">
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35 mb-4">Essential</p>
            <p className="font-display text-[clamp(56px,7vw,96px)] leading-none text-cream mb-3">$175</p>
            <p className="font-sans text-sm text-cream/50 leading-[1.8] max-w-sm">
              A quick, honest capture. Headshots, couples, or small families and fur kids included.
            </p>
          </ScrollReveal>

          {/* Signature */}
          <ScrollReveal delay={0.1} distance={28} duration={0.8} className="py-10 md:py-0 md:pl-16">
            <div className="flex items-center gap-4 mb-4">
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35">Signature</p>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase bg-signal text-ink px-2 py-1">Most Popular</span>
            </div>
            <p className="font-display text-[clamp(56px,7vw,96px)] leading-none text-cream mb-3">$325</p>
            <p className="font-sans text-sm text-cream/50 leading-[1.8] max-w-sm">
              My go-to. Built for families, milestones, and dogs who don&apos;t sit still.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <Link
            href="/services"
            className="inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-cream transition-colors duration-200"
          >
            See Full Pricing &amp; Add-ons
          </Link>
        </ScrollReveal>
      </section>

      {/* Full-bleed CTA */}
      <section className="px-6 md:px-10 py-28 md:py-40 border-t border-cream/10">
        <ScrollReveal distance={72} duration={1.2}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
            <h2 className="font-display text-[clamp(60px,13vw,190px)] leading-[0.88] text-cream uppercase">
              Let&apos;s Make<br />Something<br />Lasting
            </h2>
            <div className="flex flex-col gap-4 md:items-end">
              <Link
                href="/contact"
                className="self-start md:self-auto inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-10 py-5 hover:bg-cream transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
