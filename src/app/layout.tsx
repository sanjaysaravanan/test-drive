import './globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanjay Saravanan',
  description: 'Software Developer for Encora Inc in India, Bengaluru. I have serious passion for UI & API Development, basic DevOps & Cloud services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Sanjay Saravanan</title>
        <link
          rel="icon"
          href="/icon.jpg"
          type="image/jpg"
          sizes='any'
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
      {/* <body className={inter.className} >Hey Bro Your correct</body> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
