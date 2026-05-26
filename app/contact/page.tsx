import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Commission a project or get in touch with PMilaythong Photography. Available for editorial, commercial, and architectural photography globally.',
}

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/san_diego_photographer_' },
]

export default function ContactPage() {
  return (
    <div className="pt-32 pb-28 px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left — headline + contact details */}
        <div>
          <ScrollReveal>
            <h1 className="font-display text-[clamp(72px,13vw,170px)] leading-[0.88] text-cream uppercase mb-14">
              Let&apos;s<br />Talk
            </h1>

            <div className="space-y-8">
              <div>
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/30 mb-1.5">
                  Email
                </p>
                <a
                  href="mailto:info@pmilaythong.com"
                  className="font-sans text-base text-cream hover:text-signal transition-colors duration-200"
                >
                  info@pmilaythong.com
                </a>
              </div>

              <div>
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/30 mb-1.5">
                  Based
                </p>
                <p className="font-sans text-base text-cream">San Diego</p>
              </div>

              <div>
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/30 mb-3">
                  Social
                </p>
                <div className="flex gap-6">
                  {socials.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-cream/45 hover:text-signal transition-colors duration-200"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-cream/10">
                <p className="font-sans text-xs text-cream/35 leading-relaxed">
                  Response within 48 hours.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right — form */}
        <div>
          <ScrollReveal delay={0.15}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
