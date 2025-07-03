import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quote Generator - Muhammad Ahmed Fyyaz',
  description: 'A beautiful quote generator built by Muhammad Ahmed Fyyaz. Discover inspiring quotes by topic or get random wisdom to brighten your day.',
  authors: [{ name: 'Muhammad Ahmed Fyyaz' }],
  creator: 'Muhammad Ahmed Fyyaz',
  keywords: ['quotes', 'inspiration', 'wisdom', 'Muhammad Ahmed Fyyaz', 'Next.js', 'ShadCN UI'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
