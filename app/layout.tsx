import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Techpack Technology | Aerospace & Defence Manufacturing',
  description: 'Precision CNC Machining & Integrated Manufacturing Solutions for Aerospace, Automotive & Defence Industries. ISO 9001:2015 Certified.',
  icons: {
    icon: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0F14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
