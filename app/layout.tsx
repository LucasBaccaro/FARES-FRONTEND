import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'Padre Diego Fares SJ - Legado y Biografía',
  description: 'Created with Next.js and Tailwind CSS',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} ${lato.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
