'use client';

import { motion } from "framer-motion";


const transitionVariants = {
  initial: {
    x: '100%',
    widtht: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}
const Transition = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#c2c23e]" 
      variants={transitionVariants} 
      initial='initial' 
      animate='animate' 
      exit='exit' 
      transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}></motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#dbdb46]" 
      variants={transitionVariants} 
      initial='initial' 
      animate='animate' 
      exit='exit' 
      transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut'}}></motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#f3f34e]" 
      variants={transitionVariants} 
      initial='initial' 
      animate='animate' 
      exit='exit' 
      transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut'}}></motion.div>
    </>
  );
};

export default Transition;
