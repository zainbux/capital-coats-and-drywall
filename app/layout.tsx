import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      
      <body><Navigation/>{children}<Footer/></body>
      
    </html>
  )
}
