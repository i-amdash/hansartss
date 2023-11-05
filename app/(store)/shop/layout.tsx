import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Nav from '@/components/Nav'
import Layout from '@/lib/layout'
import { Sora } from '@next/font/google'


const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Hans Artss - Shop',
  description: 'Shop - The place for all your purchases.',
}
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Navbar />
        {children}
        {/* <Footer /> */}
    </>
  )
}
