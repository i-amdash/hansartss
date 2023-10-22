'use client';

import  ModalProvider  from '@/providers/modal-provider'
import  ToastProvider  from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '@/components/Transition';
import Nav from '@/components/Nav';
import { useRouter } from 'next/navigation';
import '@/app/globals.css';

const Layout = () => {

    const router = useRouter();

   
      
  return (
      <AnimatePresence mode='wait'>
        <motion.div className='h-full'>
            <Transition />
            
              <Nav />
    </motion.div>
          </AnimatePresence>
  )
}

export default Layout;