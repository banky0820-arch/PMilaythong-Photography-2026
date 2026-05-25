import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <p className="font-display text-[25vw] leading-none text-cream/6 select-none pointer-events-none">
        404
      </p>
      <p className="font-sans text-cream/50 text-sm tracking-[0.2em] uppercase mt-6 mb-10">
        Page not found
      </p>
      <Link
        href="/"
        className="inline-block bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-cream transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  )
}
