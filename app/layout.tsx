import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

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
    'Outdoor portrait and pet photography in San Diego. Natural light, honest moments, families and their dogs captured exactly as they are.',
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
      <body>
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
