import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Doodletron AI: Transform Kids' Art into AI Magic",
  description:
    "Turn your child's drawings into amazing AI-generated artwork! A fun iOS app that brings creativity to life.",
  metadataBase: new URL('https://doodletronai.com'),
  keywords: 'AI art, kids creativity, children drawings, iOS app, artificial intelligence, digital art',
  authors: [{ name: 'Doodletron AI' }],
  openGraph: {
    title: "Doodletron AI: Transform Kids' Art into AI Magic",
    description: "Turn your child's drawings into amazing AI-generated artwork!",
    images: ['/logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-itunes-app" content="app-id=6749167873" />
        <link rel="icon" href="/icon_reg.png" />
      </head>
      <body className="antialiased bg-doodle-bg min-h-screen">{children}</body>
    </html>
  )
}
