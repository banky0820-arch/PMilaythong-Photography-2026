import type { Metadata } from 'next'

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
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PMilaythong Photography',
    template: '%s | PMilaythong Photography',
  },
  description:
    'Award-winning photography spanning architecture, portrait, editorial, and landscape. Based in San Diego.',
  openGraph: {
    type: 'website',
    siteName: 'PMilaythong Photography',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
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
      </body>
    </html>
  )
}
