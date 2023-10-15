import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Hans Artss - Shop',
  description: 'Shop - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
