import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Nok's Donuts | Savor Premium Donuts - Order Today",
  description: 'Hand rolled, naturally fermented bagels in Denver, Colorado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}