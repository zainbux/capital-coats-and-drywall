import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Capital Coats and Drywall',
  description: '',
  icons: {
    icon: "\favicon.ico", // Path to your favicon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      
      <link rel="icon" href="/favicon.ico" />
      <body><Navigation/>{children}<Footer/></body>
      
    </html>
  )
}
