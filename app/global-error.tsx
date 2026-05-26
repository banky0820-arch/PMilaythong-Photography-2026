'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ background: '#0a0a0a', color: '#f5f5f0', fontFamily: 'monospace', padding: '40px' }}>
        <h2 style={{ color: '#FF4D00' }}>Global Error</h2>
        <p>{error.message}</p>
        <pre style={{ fontSize: '12px', color: '#999', whiteSpace: 'pre-wrap' }}>{error.stack}</pre>
        <button onClick={reset} style={{ marginTop: '20px', padding: '10px 20px', background: '#FF4D00', color: '#000', border: 'none', cursor: 'pointer' }}>
          Try again
        </button>
      </body>
    </html>
  )
}
