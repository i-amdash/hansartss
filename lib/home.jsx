
'use client';

import Image from "next/image";

import ParticlesContainer from '@/components/ParticlesContainer';
import ProjectsBtn from '@/components/ProjectsBtn';
import Avatar from '@/components/Avatar';
import Example from '@/hooks/use-info-modal';

import { motion } from "framer-motion";
import { fadeIn } from '@/variants';



const HomePage = () => {
  return (
  <div className="h-[100vh] overflow-hidden z-1">
    <div className=" w-full h-full">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        <Example />
        <motion.h1 
        variants={fadeIn('down' , 0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="h1">The Corporate <span className="text-accent">Artist</span></motion.h1>
        <motion.p 
        variants={fadeIn('down' , 0.3)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Take a deep dive into the mind of a creative genius and unravel in the brilliance that is ...</motion.p>
        <motion.div 
        variants={fadeIn('down' , 0.4)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </motion.div>
        <motion.div 
        variants={fadeIn('down' , 0.4)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        className="hidden xl:flex">
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    <div className="w-full h-full absolute top-0">
      <div className="bg-explosion bg-cover bg-right bg-norepeat w-full h-full absolute mix-blend-overlay translate-z-0"></div>
      <div>
        <ParticlesContainer />
      </div>
      {/* <motion.div 
      variants={fadeIn('up' , 0.5)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      transition={{ duration: 1, ease: 'easeInOut'}}
      className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar />
      </motion.div> */}
    </div>
    </div>
    )
};

export default HomePage;
