import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import logo from './logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Creed',
  description: 'Number one NFT platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel='shortcut icon' href={logo} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
