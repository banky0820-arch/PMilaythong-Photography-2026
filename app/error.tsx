'use client'

import { useEffect } from 'react'

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
    <div style={{ padding: '40px', fontFamily: 'monospace', color: '#f5f5f0', background: '#0a0a0a', minHeight: '100vh' }}>
      <h2 style={{ color: '#FF4D00' }}>Error</h2>
      <p>{error.message}</p>
      <pre style={{ fontSize: '12px', color: '#999', whiteSpace: 'pre-wrap' }}>{error.stack}</pre>
      <button onClick={reset} style={{ marginTop: '20px', padding: '10px 20px', background: '#FF4D00', color: '#000', border: 'none', cursor: 'pointer' }}>
        Try again
      </button>
    </div>
  )
}
