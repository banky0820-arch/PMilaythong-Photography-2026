'use client'

import Script from 'next/script'

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (opts: {
        url: string
        text: string
        color: string
        textColor: string
        branding: boolean
      }) => void
    }
  }
}

export default function CalendlyWidget() {
  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.Calendly) {
            window.Calendly.initBadgeWidget({
              url: 'https://calendly.com/pmilaythong-info',
              text: 'Schedule time with me',
              color: '#0069ff',
              textColor: '#ffffff',
              branding: true,
            })
          }
        }}
      />
    </>
  )
}
