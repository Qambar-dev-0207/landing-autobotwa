import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Poppins as V0_Font_Poppins, Space_Mono as V0_Font_Space_Mono, Bree_Serif as V0_Font_Bree_Serif } from 'next/font/google'

// Initialize fonts
const _poppins = V0_Font_Poppins({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _spaceMono = V0_Font_Space_Mono({ subsets: ['latin'], weight: ["400","700"] })
const _breeSerif = V0_Font_Bree_Serif({ subsets: ['latin'], weight: ["400"] })

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
