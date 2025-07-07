import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JLPT 日本語能力試験',
  description: 'Rez the coder',
  generator: 'Rez thecoder',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4461751532021246"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
