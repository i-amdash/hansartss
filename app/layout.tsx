
import { Inter } from 'next/font/google'
import Layout from '@/lib/layout';
import './globals.css'

import { Sora } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'Hans Artss',
  description: 'A Pantheon of Beautiful Thoughts',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={sora.variable}>
          <div>
          <Layout />
            {children}
          </div>
        </body>
      </html>
  )
}
