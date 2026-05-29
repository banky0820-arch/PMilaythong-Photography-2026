import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cream/10 px-6 md:px-10 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="PMilaythong Photography"
            width={868}
            height={183}
            className="h-12 w-auto"
          />
        </Link>

        <nav className="flex gap-8">
          {[
            { href: '/work', label: 'Work' },
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact' },
            { href: '/portfolio', label: 'Client Portfolio' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-[0.25em] uppercase text-cream/40 hover:text-cream transition-colors duration-200 font-sans"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="font-sans text-xs text-cream/25">
          &copy; {year} PMilaythong Photography. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
