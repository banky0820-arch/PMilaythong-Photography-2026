import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Client Portfolio',
  description: 'PMilaythong Photography — access your private client gallery.',
}

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 min-h-screen flex flex-col justify-center">
      <ScrollReveal>
        <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">
          Client Portfolio
        </p>
        <h1 className="font-display text-[clamp(52px,8vw,120px)] leading-[0.88] text-cream uppercase mb-8">
          Your Gallery<br />Awaits.
        </h1>
        <p className="font-sans text-base text-cream/50 leading-[1.8] max-w-md mb-12">
          Your photos have been delivered to your private online gallery. Check your email for the gallery link and access instructions.
        </p>
        <p className="font-sans text-sm text-cream/30 leading-[1.8] max-w-md mb-12">
          Didn&apos;t receive your gallery link?{' '}
          <a href="/contact" className="underline underline-offset-2 hover:text-cream/60 transition-colors duration-200">
            Reach out
          </a>{' '}
          and I&apos;ll resend it right away.
        </p>
        <a
          href="https://pmilaythongphotography.fast.io/portal/6op247nanqny7fgl24dztwlncgikp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-cream/20 text-cream font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-signal hover:text-signal transition-colors duration-200"
        >
          Access Your Gallery
        </a>
      </ScrollReveal>
    </div>
  )
}
