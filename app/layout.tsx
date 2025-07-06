import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JLPT 日本語能力試験',
  description: 'Rez the coder',
  generator: 'Rez the coder',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
