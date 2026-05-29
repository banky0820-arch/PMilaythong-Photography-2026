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
          <ScrollReveal>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">
              Approach
            </p>
            <p className="font-sans text-xl text-cream/75 leading-[1.75] mb-6">
              Photography is my passion and at the heart of it is the pursuit of raw emotion. The kind that can&apos;t be directed, only caught. It is a calling I answered from the moment I held my first camera at nine years old, when I understood that light and time were already telling a story, and that I had the ability to preserve it. That realization never left me.
            </p>
            <p className="font-sans text-base text-cream/55 leading-[1.75] mb-6">
              I work exclusively on location, in natural light, because the surroundings are never just a backdrop, they are part of the story. The way light falls through trees, the open sky at golden hour, the quiet energy of a place that has never been staged. These are the conditions where the most honest images live.
            </p>
            <p className="font-sans text-base text-cream/55 leading-[1.75] mb-6">
              I love working with dogs because they cannot pretend. They bring unfiltered personality and emotion to every frame, and that energy elevates everyone around them. There is something extraordinary about photographing a family in their element, kids, dogs, and all the beautiful chaos that comes with them, and finding the moment inside the moment.
            </p>
            <p className="font-sans text-base text-cream/55 leading-[1.75] mb-6">
              Every session is an exercise in patience, presence, and trust. Every final image is a testament to what happens when all three come together.
            </p>
            <p className="font-sans text-base text-signal leading-[1.75]">
              I do not simply take photographs. I create permanent records of fleeting moments. Images built to outlast the day they were taken, and to mean more with every passing year.
            </p>
          </ScrollReveal>

          <div className="flex flex-col justify-end gap-0 divide-y divide-cream/10">
            {services.map((service, i) => (
              <ScrollReveal key={service} delay={i * 0.09}>
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


      {/* Pricing */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-cream/10">

        {/* Header */}
        <ScrollReveal>
          <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">Pricing</p>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-cream uppercase mb-4">
            Choose Your Session.
          </h2>
          <p className="font-sans text-base text-cream/50 leading-[1.8] max-w-xl mb-16">
            Pay for the time you need. Everything else stays simple, honest, and built around your day.
          </p>
        </ScrollReveal>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-cream/10 mb-20 items-start">

          {/* Essential */}
          <ScrollReveal className="py-10 md:py-0 md:pr-16">
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35 mb-4">Essential</p>
            <p className="font-display text-[clamp(56px,7vw,96px)] leading-none text-cream mb-1">$175</p>
            <p className="font-sans text-sm text-cream/50 leading-[1.8] mb-8 max-w-sm">
              A quick, honest capture. Headshots, couples, or small families and fur kids included.
            </p>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-4">Session highlights</p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                '30-minute session, one outdoor location',
                '7–10 hand-edited images',
                'Online gallery, 30-day access',
                'High-resolution downloads',
                'Personal print release',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-cream/55">
                  <span className="w-1 h-1 bg-signal shrink-0 mt-[7px]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block border border-cream/20 text-cream font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-signal hover:text-signal transition-colors duration-200"
            >
              Book a Session
            </Link>
          </ScrollReveal>

          {/* Signature */}
          <ScrollReveal delay={0.1} className="py-10 md:py-0 md:pl-16">
            <div className="flex items-center gap-4 mb-4">
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/35">Signature</p>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase bg-signal text-ink px-2 py-1">Most Popular</span>
            </div>
            <p className="font-display text-[clamp(56px,7vw,96px)] leading-none text-cream mb-1">$325</p>
            <p className="font-sans text-sm text-cream/50 leading-[1.8] mb-8 max-w-sm">
              My go-to. Built for families, milestones, and dogs who don&apos;t sit still.
            </p>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-4">Session highlights</p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                '1-hour session, one outdoor location',
                '15–25 hand-edited images',
                'Gallery, 60-day access',
                'Delivered within 10 business days',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-cream/55">
                  <span className="w-1 h-1 bg-signal shrink-0 mt-[7px]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-cream transition-colors duration-200"
            >
              Book the Experience
            </Link>
          </ScrollReveal>
        </div>

        {/* Add-ons */}
        <ScrollReveal>
          <div className="border-t border-cream/10 pt-16 mb-16">
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-8">Add-ons &amp; Upgrades</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 divide-y divide-cream/10">
              {[
                { label: 'Extra 30 min', price: '+$85' },
                { label: 'Rush delivery (48hr)', price: '+$75' },
                { label: 'Extended gallery (1yr)', price: '+$30' },
                { label: '5 extra edited photos', price: '+$40' },
                { label: 'Travel outside 20 mi', price: '$0.67 / mi' },
                { label: 'Printed 4×6 set (20)', price: '+$65' },
              ].map(({ label, price }) => (
                <div key={label} className="flex items-center justify-between py-5 pr-6 gap-4">
                  <span className="font-sans text-sm text-cream/55">{label}</span>
                  <span className="font-sans text-sm text-cream tabular-nums shrink-0">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Policies + Locations */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-cream/10 pt-16">
            <div>
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">Booking &amp; Policies</p>
              <ul className="flex flex-col gap-3">
                {[
                  '$50 non-refundable deposit to hold date',
                  '1 free reschedule with 48-hour notice',
                  'Weather rescheduling at no charge',
                  'Up to 5 people at no extra charge',
                  'Balance due day of session',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-cream/55">
                    <span className="w-1 h-1 bg-signal shrink-0 mt-[7px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">Popular SD Locations</p>
              <ul className="flex flex-col gap-3">
                {[
                  'Sunset Cliffs, OB, Coronado Beach',
                  'Balboa Park, Torrey Pines',
                  'Little Italy, Gaslamp Quarter',
                  'La Jolla Cove, Del Mar Bluffs',
                  'Your preferred location welcome',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-cream/55">
                    <span className="w-1 h-1 bg-signal shrink-0 mt-[7px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Full-bleed CTA */}
      <section className="px-6 md:px-10 py-28 md:py-40 border-t border-cream/10">
        <ScrollReveal>
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
