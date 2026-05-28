'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // global-error replaces the root layout, so fonts/styles are unavailable.
  // inline styles only.
  return (
    <html lang="en">
      <body style={{ background: '#0a0a0a', color: '#f5f5f0', margin: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 5vw' }}>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#FF4D00', marginBottom: '24px' }}>
          Error
        </p>
        <h1 style={{ fontFamily: 'system-ui, sans-serif', fontSize: 'clamp(52px, 10vw, 120px)', lineHeight: 0.9, fontWeight: 700, textTransform: 'uppercase', color: '#f5f5f0', marginBottom: '32px' }}>
          Something<br />Went Wrong
        </h1>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px', color: 'rgba(245,245,240,0.5)', lineHeight: 1.8, maxWidth: '420px', marginBottom: '32px' }}>
          An unexpected error occurred. Try again, or visit the homepage.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={reset}
            style={{ background: '#FF4D00', color: '#0a0a0a', fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, padding: '16px 32px', border: 'none', cursor: 'pointer' }}
          >
            Try Again
          </button>
          <a
            href="/"
            style={{ border: '1px solid rgba(245,245,240,0.2)', color: '#f5f5f0', fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, padding: '16px 32px', textDecoration: 'none', display: 'inline-block' }}
          >
            Go Home
          </a>
        </div>
      </body>
    </html>
  )
}
