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
    images: ['/favicon-96x96.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* TODO: Uncomment this when the app is ready for App Store */}
        {/* <meta name="apple-itunes-app" content="app-id=6749167873" /> */}
        <meta name="theme-color" content="#fefaf4" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      </head>
      <body className="antialiased min-h-screen bg-doodle-chrome">{children}</body>
    </html>
  )
}
