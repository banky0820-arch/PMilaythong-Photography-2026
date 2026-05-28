'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('App error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col justify-center items-start px-6 md:px-10">
      <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-signal mb-6">
        Error
      </p>
      <h1 className="font-display text-[clamp(72px,13vw,180px)] leading-[0.88] text-cream uppercase mb-10">
        Something<br />Went Wrong
      </h1>
      <p className="font-sans text-base text-cream/50 leading-[1.8] max-w-md mb-10">
        An unexpected error occurred. Try again, or head back home.
      </p>
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={reset}
          className="bg-signal text-ink font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-cream transition-colors duration-200"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border border-cream/20 text-cream font-sans text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-signal hover:text-signal transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
