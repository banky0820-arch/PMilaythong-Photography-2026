import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'PMilaythong Photography — outdoor portrait, pet, and landscape sessions in San Diego. Simple, honest pricing built around your day.',
}

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10">

      {/* Header */}
      <ScrollReveal>
        <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">Services</p>
        <h1 className="font-display text-[clamp(52px,8vw,120px)] leading-[0.88] text-cream uppercase mb-6">
          Choose Your<br />Session.
        </h1>
        <p className="font-sans text-base text-cream/50 leading-[1.8] max-w-xl mb-20">
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
          <a
            href="https://calendly.com/pmilaythong-info"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-cream/20 text-cream font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-signal hover:text-signal transition-colors duration-200"
          >
            Book a Session
          </a>
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
          <a
            href="https://calendly.com/pmilaythong-info"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-cream transition-colors duration-200"
          >
            Book the Experience
          </a>
        </ScrollReveal>
      </div>

      {/* Add-ons */}
      <ScrollReveal>
        <div className="border-t border-cream/10 pt-16 mb-16">
          <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-8">Add-ons &amp; Upgrades</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 divide-y divide-cream/10">
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

      {/* CTA */}
      <section className="border-t border-cream/10 pt-24 mt-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <h2 className="font-display text-[clamp(52px,10vw,140px)] leading-[0.88] text-cream uppercase">
              Let&apos;s Shoot<br />Something
            </h2>
            <a
              href="https://calendly.com/pmilaythong-info"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-10 py-5 hover:bg-cream transition-colors duration-200"
            >
              Book a Session
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
