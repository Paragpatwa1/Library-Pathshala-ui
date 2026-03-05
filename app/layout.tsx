import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from "next/script"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Pathshala Library - 24 Hour Silent Study Space in Vidisha',
  description:
    'Pathshala Library offers a comfortable, peaceful, and fully equipped 24-hour study environment in Vidisha. Book your seat today!',
  keywords: ['library', 'study space', 'Vidisha', 'Pathshala', '24 hour'],
}

export const viewport: Viewport = {
  themeColor: '#1a3352',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        
        {/* Razorpay Script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />

        {children}

        <Analytics />
      </body>
    </html>
  )
}